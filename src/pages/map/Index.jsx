import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import { onMapClick, onMapLoad } from './mapUtils/mapEvents';
import { useLazyGetLocationQuery, useLazyGetPolylineQuery, useLazyGetSinglePointForecastQuery } from '../../APISlices/map';
import { addCustomWeatherMarker, getCoordinatesString, removeMarker } from './mapUtils/microServices';
import { toast } from 'react-toastify';
import { FILTERS } from '../../constants/Type';
import { mapIcons } from '../../assets/SVGs/mapSVGs';
import PropTypes from 'prop-types';
import { useLazyGetLocationIconQuery } from '../../APISlices/locationIcon';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import InputField from '../../global/components/InputField';
import { useFormik } from 'formik';
import { eventFilters } from '../../constants/dropdownItems';
import AutoCompeleteMenu from '../../global/components/AutoComplete';

const initialFilters = {
    filterType: FILTERS.sky,
    radar: false,
    date: null,
}
const initialPath = {
    start: {},
    end: {}
}
const convertTime = (time) => {
    const date = new Date(time);

    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

    return `${formattedTime}, ${dayOfWeek}`;
};
const Accordion = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeSubAccordion, setActiveSubAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleSubAccordion = (index) => {
        setActiveSubAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div id="accordion-collapse" className='bg-white p-4' data-accordion="collapse">
            {[1].map((index) => (
                <div key={index}>
                    <h2 id={`accordion-collapse-heading-${index}`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full px-2 py-3 font-medium rtl:text-right text-gray-500 border ${activeAccordion === index ? 'border-b-0' : 'border-b'
                                } border-gray-200 rounded-t-xl rounded-b-xl  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                            data-accordion-target={`#accordion-collapse-body-${index}`}
                            aria-expanded={activeAccordion === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>
                                {index === 1 && 'Click to show alerts'}
                            </span>
                            <svg
                                data-accordion-icon=""
                                className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === index && 'rotate-0'
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-collapse-body-${index}`}
                        className={`${activeAccordion === index ? 'block' : 'hidden'
                            } p-3 border ${activeAccordion === index ? 'border-b-0' : 'border-b'
                            } border-gray-200 rounded-xl dark:border-gray-700`}
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                    >

                        <p className="text-gray-500 dark:text-gray-400">
                            {/* Additional content or links */}
                            {index === 1 && (
                                <div id="accordion-collapse" data-accordion="collapse">
                                    {data?.map((alerts, index) => {
                                        const { title, timeExpires, timeStart, description } = alerts
                                        return (

                                            <div key={index}>
                                                <h2 id={`accordion-collapse-heading-${index}`}>
                                                    <button
                                                        type="button"
                                                        className={`flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border ${activeSubAccordion === index ? 'border-b-0' : 'border-b'
                                                            } border-gray-200 ${index === 0 ? "rounded-t-xl" : ""} ${data?.length - 1 === index ? "rounded-b-xl" : ""}  dark:border-gray-700 bg-gray-100 dark:text-gray-400 hover:bg-gray-100  gap-3`}
                                                        data-accordion-target={`#accordion-collapse-body-${index}`}
                                                        aria-expanded={activeSubAccordion === index}
                                                        aria-controls={`accordion-collapse-body-${index}`}
                                                        onClick={() => toggleSubAccordion(index)}
                                                    >
                                                        <span>
                                                            {alerts && title}

                                                        </span>
                                                        <svg
                                                            data-accordion-icon=""
                                                            className={`w-3 h-3 rotate-180 shrink-0 ${activeSubAccordion === index && 'rotate-0'
                                                                }`}
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 10 6"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5 5 1 1 5"
                                                            />
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`accordion-collapse-body-${index}`}
                                                    className={`${activeSubAccordion === index ? 'block' : 'hidden'
                                                        } p-3 border ${activeSubAccordion === index ? 'border-b-0' : 'border-b'
                                                        } border-gray-200 dark:border-gray-700 ${data?.length - 1 === index ? "rounded-xl" : ""}`}
                                                    aria-labelledby={`accordion-collapse-heading-${index}`}
                                                >
                                                    {activeSubAccordion === index && <> <div>
                                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                            {title}
                                                        </p></div>
                                                        <div>
                                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                                {timeStart && `Starts :  ${convertTime(timeStart)}`}
                                                            </p></div>
                                                        <div>
                                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                                {timeExpires && `Expires :  ${convertTime(timeExpires)}`}
                                                            </p></div>
                                                        <div>
                                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                                {description}
                                                            </p></div></>}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                            }
                            {index === 2 && (
                                <span>
                                    Check out the{' '}
                                    <a
                                        href=""
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Figma design system
                                    </a>{' '}
                                    based on the utility classes from Tailwind CSS and components from Flowbite.
                                </span>
                            )}
                            {index === 3 && (
                                <span>
                                    Learn more about these technologies:
                                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li>
                                            <a
                                                href="https://flowbite.com/pro/"
                                                className="text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Flowbite Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindui.com/"
                                                rel="nofollow"
                                                className="text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
Accordion.propTypes = {
    data: PropTypes.array
};

const Map = () => {
    //==> State management and API calls RTK <==
    const [map, setMap] = useState(null)
    const [path, setPath] = useState(initialPath)
    const [forecastData, setForecastData] = useState([])
    const [allforecastData, setAllforecastData] = useState([])
    const [filters, setFilters] = useState(initialFilters)
    const [getPolyline] = useLazyGetPolylineQuery()
    const [getForecastData] = useLazyGetSinglePointForecastQuery()
    const [getLocation] = useLazyGetLocationQuery()
    const [getLocationIcon] = useLazyGetLocationIconQuery()

    //initialValues 
    const initialValues = {
        start_point: "",
        end_point: ""
    }
    //formik
    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: (values) => {
            console.log('values', values)
            // sendQuery(values).unwrap().then((res) => {
            //     setSupportData(res)
            // }).catch((err) => {
            //     toast.error("Unable to find the support request with this ID");
            //     console.error('err', err)
            // })
        }
    })
    const { values, touched, errors, submitForm, handleChange, handleBlur, setFieldValue, resetForm } = formik

    //Handle filter change
    const handleWeatherFilterChange = (value) => {
        setFilters((old) => ({ ...old, filterType: value }))
    }

    const clearPath = () => {
        removeMarker(path.start.marker)
        removeMarker(path.end.marker)
        setPath(initialPath)
        setForecastData([])
        setAllforecastData([])
    }

    //==> Map handling effects <==
    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-77.044211, 38.852924],
            zoom: 9,
        });
        setMap(map)
        setFilters((old) => ({ ...old, date: new Date() }))

    }, [])

    useEffect(() => {
        if (map) {
            const load = () => {
                onMapLoad({ map })
            }
            const click = (e) => { onMapClick({ e, map, path, setPath }) }

            map.on('load', load)
            map.on('click', click)

            return () => {
                map.off('load', load)
                map.off('click', click)
            }
        }

    }, [map, path])

    useEffect(() => {
        if (path.start.coordinates && path.end.coordinates) {
            let layer, source

            getPolyline({
                point: [getCoordinatesString(path.start.coordinates), getCoordinatesString(path.end.coordinates)]
            }).unwrap().then(async (res) => {
                const polyline = res?.body?.data

                if (polyline) {
                    //Extracting polyline points
                    let tmpPolyline = polyline[0]?.polyline?.map((item) => {
                        return [item.lng, item.lat]
                    })
                    //Draw polyline on the map
                    try {
                        var geojson = {
                            'type': 'FeatureCollection',
                            'features': [
                                {
                                    'type': 'Feature',
                                    'properties': {},
                                    'geometry': {
                                        'coordinates': tmpPolyline,
                                        'type': 'LineString'
                                    }
                                }
                            ]
                        };

                        source = 'line'
                        map.addSource(source, {
                            type: 'geojson',
                            lineMetrics: true,
                            data: geojson
                        });

                        layer = 'line'
                        map.addLayer({
                            type: 'line',
                            source: 'line',
                            id: layer,
                            paint: {
                                'line-color': '#0652DD',
                                'line-width': 5,
                                'line-gradient': [
                                    'interpolate',
                                    ['linear'],
                                    ['line-progress'],
                                    0,
                                    '#1B1464',
                                    0.2,
                                    '#0652DD',
                                    1,
                                    '#0652DD',
                                ],
                            },
                            layout: {
                                'line-cap': 'round',
                                'line-join': 'round'
                            },
                            Animation
                        });

                    } catch (error) {
                        console.log('error draw polyline', error)
                    }

                    //Get weather data on the poly points
                    const forecastData = tmpPolyline?.map((point) => getForecastData({ point }))
                    Promise.allSettled(forecastData).then((results) => {
                        let tempSettledData
                        results.forEach((result) => {
                            if (result.status === 'fulfilled') {
                                let data = result.value?.data?.body?.data
                                if (data) {
                                    setForecastData((old) => [...old, { ...data }])
                                }
                                tempSettledData = [...forecastData, { ...data }]
                            } else {
                                setForecastData(tempSettledData)

                            }
                        })
                    })
                }
            }).catch((err) => {
                toast.error(err)
            })

            return () => {
                layer && map.removeLayer(layer);
                source && map.removeSource(source);
                setForecastData([])
            }
        }

    }, [path])
    //Location data fetching
    useEffect(() => {
        if (forecastData && forecastData.length > 0 || filters.filterType === FILTERS.camera) {
            let tmpForecastData = [...forecastData]
            let locationData = forecastData.map((pointData) => {
                const { longitude, latitude } = pointData
                const coordinates = [longitude, latitude]
                return getLocation({ point: coordinates })
            })
            Promise.allSettled(locationData).then((results) => {
                tmpForecastData = tmpForecastData?.map((weatherPoint) => {
                    const { longitude: lng, latitude: lat } = weatherPoint
                    let index = results.findIndex((result) => {
                        const { longitude, latitude } = result?.value?.data?.body?.data ?? {}
                        return (lng.toFixed(2) === longitude.toFixed(2) && lat.toFixed(2) === latitude.toFixed(2))
                    })
                    const { longName, shortName } = results[index]?.value?.data?.body?.data ?? {}
                    return {
                        ...weatherPoint,
                        location: shortName ?? (longName ?? '')
                    }
                })
                setAllforecastData(tmpForecastData)
            })
        }

        return () => {

            setAllforecastData([])
        }
    }, [forecastData, filters])

    //Cam image fetching
    useEffect(() => {
        if (forecastData && forecastData.length > 0 && filters.filterType === FILTERS.camera) {
            let tmpForecastData = allforecastData?.length > 0 ? [...allforecastData] : [...forecastData]
            let ImageData = forecastData.map((pointData) => {
                const { longitude, latitude } = pointData
                const coordinates = [longitude, latitude]
                return getLocationIcon({ point: coordinates })
            })
            Promise.allSettled(ImageData).then((results) => {
                tmpForecastData = tmpForecastData?.map((weatherPoint) => {
                    const { longitude: lng, latitude: lat } = weatherPoint
                    let index = results?.findIndex((camData) => {
                        if (camData.status !== 'fulfilled')
                            return false
                        else {
                            const [longitude, latitude] = camData?.value?.originalArgs?.point ?? []
                            return (lng.toFixed(2) === longitude?.toFixed(2) && lat.toFixed(2) === latitude?.toFixed(2))
                        }
                    })

                    if (index === -1)
                        return weatherPoint

                    const webcams = results[index]?.value?.data?.result?.webcams
                    const { icon, preview, thumbnail } = webcams[0]?.image?.current ?? {}

                    return {
                        ...weatherPoint,
                        cameraImage: icon ?? (thumbnail ?? (preview ?? null))
                    }
                })
                setAllforecastData(tmpForecastData)
            })
        }

        return () => {
            setAllforecastData([])
        }
    }, [filters, forecastData])

    //Custom weather marker
    useEffect(() => {
        if (((forecastData && forecastData.length > 0) || (allforecastData && allforecastData.length > 0)) && filters.date) {
            let usableForecastData = allforecastData?.length > 0 ? allforecastData : forecastData

            const markers = usableForecastData?.map((forecastPoint) => {
                const { longitude, latitude, hourly, location, alerts, cameraImage } = forecastPoint

                const coordinates = [longitude, latitude]
                let getAlertData = alerts[0]


                let currentForecast = hourly?.filter((data) => (new Date(data.time * 1000).getDate() === new Date(filters.date).getDate() && new Date(data.time * 1000).getHours() === new Date(filters.date).getHours()))[0]

                if (currentForecast) {
                    switch (filters.filterType) {
                        case FILTERS.sky: {
                            let xmlString = `<div>${mapIcons[currentForecast.icon]}</div>`
                            let SVG = new DOMParser().parseFromString(xmlString, "text/xml");
                            SVG = SVG.getElementsByTagName('div')[0] ?? ''
                            const element = document.createElement('div');
                            element.className = 'ctm-marker';
                            element.appendChild(SVG)
                            element.style.height = '35px'
                            element.style.width = '35px'
                            element.style.borderRadius = '50%'
                            element.style.background = 'white'
                            element.style.boxShadow = '0px 0px 4px 1px lightgray'
                            element.style.display = 'flex'
                            element.style.alignItems = 'center'
                            element.style.justifyContent = 'center'

                            let htmlString = `
                                <div className='map-popup' style='max-width:max-content; width:100%; padding-right:15px'>
                                         <div className='header'>
                                           <span style='font-size:15px'>${location}</span>
                                 </div>
                                <div className='main-details'>
                                 <div className='viewer'>
                                    <div style='display:flex; gap:5px; align-items: center;'>${mapIcons[currentForecast.icon]} <span style='font-size:15px'>${Math.round(currentForecast?.temperature)}<sup>0</sup></span></div>
                                        <div>
                                            <span  style='font-size:15px'>${currentForecast?.summary}</span>                                
                                        </div>                
                                    </div>
                                 </div>
                                <div className='sub-details'>
                                    <span style='font-size:12px'>Sky Cover :<b> ${currentForecast?.skyCover ? currentForecast?.skyCover + "%" : "0% "} </b></span>
                                </div>
                                <div style='font-size:12px'><span>Visibility :<b> ${Math.round(currentForecast?.visibility)}</b></span></div>
                                </div>`
                            return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                        }
                        case FILTERS.temp:
                            {
                                const element = document.createElement('div');
                                element.innerHTML = `<span style='font-size:15px'>${Math.round(currentForecast?.temperature)}<sup>0</sup></span>`
                                element.style.height = '35px'
                                element.style.width = '35px'
                                element.style.borderRadius = '50%'
                                element.style.background = 'white'
                                element.style.boxShadow = '0px 0px 4px 1px lightgray'
                                element.style.display = 'flex'
                                element.style.alignItems = 'center'
                                element.style.justifyContent = 'center'

                                //! TO DO
                                let htmlString = `
                                <div className='map-popup'>
                                        <div className='header'>
                                            <span style='font-size:15px'>${location}</span>
                                        </div>
                                        <div className='main-details'>
                                            <div className='viewer'>
                                            <div style='display:flex; gap:5px; align-items: center;margin: 15px 0px;'><span style='font-size:20px'>${Math.round(currentForecast?.temperature)}<sup>0</sup></span></div>                                   
                                        </div>
                                </div>
                                <div className='sub-details' style='display:flex;flex-direction: column; '>
                                    <span style='font-size:12px'>Humidity :<b> ${currentForecast?.skyCover ? currentForecast?.skyCover + "%" : "0% "} </b></span>
                                    <span>Dewpoint :<b> ${Math.round(currentForecast?.dewPoint)}<sup>0</sup></b></span>
                                </div>`
                                return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                            }
                        case FILTERS.precip:
                            {
                                const element = document.createElement('div');
                                element.innerHTML = `<span style='font-size:15px'>${currentForecast?.precipProbability ? Math.ceil(currentForecast?.precipProbability) + "%" : "0% "}</span>`
                                element.style.height = '35px'
                                element.style.width = '35px'
                                element.style.borderRadius = '50%'
                                element.style.background = 'white'
                                element.style.boxShadow = '0px 0px 4px 1px lightgray'
                                element.style.display = 'flex'
                                element.style.alignItems = 'center'
                                element.style.justifyContent = 'center'

                                //! TO DO
                                let htmlString = `
                                    <div className='map-popup'>
                                            <div className='header'>
                                                <span style='font-size:15px'>${location}</span>
                                            </div>
                                            <div className='main-details'>
                                                <div className='viewer'>
                                                <div style='display:flex; gap:5px; align-items: center;margin: 15px 0px;'><span style='font-size:20px'>${currentForecast?.precipType !== "none" ? currentForecast?.precipType : ""}</span></div>                                   
                                            </div>
                                    </div>
                                    <div className='sub-details' style='display:flex;flex-direction: column; '>
                                        <span style='font-size:12px'>Rain probability :<b> ${currentForecast?.precipProbability ? Math.ceil(currentForecast?.precipProbability) + "%" : "0% "} </b></span>
                                        <span>Intensity :<b> ${Math.round(currentForecast?.precipIntensity)} inches/hr</b></span>
                                    </div>`
                                return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                            }
                        case FILTERS.wind:
                            {
                                const element = document.createElement('div');
                                element.innerHTML = `<span style='font-size:12px'>${currentForecast?.windSpeed ? Math.round(currentForecast?.windSpeed) : "0"}</span>
                                       <span style='font-size:12px; margin-top:-8px '> mph</span>`
                                element.style.height = '35px'
                                element.style.width = '35px'
                                element.style.borderRadius = '50%'
                                element.style.background = 'white'
                                element.style.boxShadow = '0px 0px 4px 1px lightgray'
                                element.style.display = 'flex'
                                element.style.alignItems = 'center'
                                element.style.justifyContent = 'center'
                                element.style.flexDirection = 'column'

                                //! TO DO
                                let htmlString = `
                                        <div className='map-popup'>
                                                <div className='header'>
                                                    <span style='font-size:15px'>${location}</span>
                                                </div>
                                                <div className='main-details'>
                                                    <div className='viewer'>                                            
                                                </div>
                                        </div>
                                        <div className='sub-details' style='display:flex;flex-direction: column;margin:10px 0px '>
                                            <span style='font-size:12px'>Wind speed :<b> ${currentForecast?.windSpeed ? Math.round(currentForecast?.windSpeed) + "mph" : "0mph"} </b></span>
                                            <span>Wind gusts :<b>  ${currentForecast?.windGust ? "up to " + Math.round(currentForecast?.windGust) + "mph" : "0mph"}</b></span>
                                            <span>Wind bearing :<b> ${Math.round(currentForecast?.windBearing)}</b></span>
                                        </div>`
                                return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                            }
                        case FILTERS.camera:
                            {
                                const element = document.createElement('div');
                                if (cameraImage) {
                                    element.style.height = '35px'
                                    element.style.width = '35px'
                                    element.style.borderRadius = '50%'
                                    element.style.background = 'white'
                                    element.style.boxShadow = '0px 0px 4px 1px lightgray'
                                    element.style.display = 'flex'
                                    element.style.alignItems = 'center'
                                    element.style.justifyContent = 'center'
                                    element.style.flexDirection = 'column'
                                    element.innerHTML = `<img src="${cameraImage}" height="50px" width="50"/>`
                                }

                                //! TO DO
                                let htmlString = `
                                        <div className='map-popup'>
                                                <div className='header'>
                                                    <span style='font-size:15px'>${location}</span>
                                                </div>
                                                <div className='main-details'>
                                                <img src="${cameraImage}" height="100" width="100"/>
                                                </div>
                                        </div>
                                        <div className='sub-details'>
                                        
                                        </div>`
                                return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                            }
                        case FILTERS.alert:
                            {
                                const element = document.createElement('div');
                                if (getAlertData) {
                                    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px;"><path d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"  fill="red"/></svg>`;
                                    const svgElement = new DOMParser().parseFromString(svgString, "image/svg+xml").documentElement;
                                    element.appendChild(svgElement);
                                    element.style.height = '35px';
                                    element.style.width = '35px';
                                    element.style.borderRadius = '50%';
                                    element.style.border = '1px solid red';
                                    element.style.background = 'white';
                                    element.style.boxShadow = '0px 0px 4px 1px lightgray';
                                    element.style.display = 'flex';
                                    element.style.alignItems = 'center';
                                    element.style.justifyContent = 'center';
                                    element.style.flexDirection = 'column';
                                }
                                //! TO DO
                                let htmlString = `
                                        <div className='map-popup'>
                                                <div className='header'>
                                                    <span style='font-size:15px'>${location}</span>
                                                </div>
                                                <div className='main-details'>
                                                    <div className='viewer'>                                          
                                                </div>
                                        </div>
                                        <div className='sub-details' style='display:flex;flex-direction: column;margin:10px 0px '>                                
                                            <span style='font-size:15px;color:red'><b> ${getAlertData?.title} </b></span>                                  
                                        </div>`
                                return addCustomWeatherMarker({ map, element, coordinates, htmlString })
                            }
                        default:
                            ""
                    }
                }

            }).filter(Boolean)



            return () => {
                // clearPath()
                // setForecastData([])
                // setAllforecastData([])
                markers.forEach((marker) => removeMarker(marker))
            }
        }
    }, [forecastData, allforecastData, filters])
    //==> Create reusable button with custom css
    const WeatherFilterButton = ({ filterTypeTag, onClick }) => {
        return <>
            <button
                className={`px-4 py-1 border-solid hover:text-[#f1b36f] border-r border-black ${filterTypeTag === filters.filterType ? 'text-[#f1b36f]' : 'text-black'} text-sm me-1 ${filterTypeTag === FILTERS.clear ? 'border-r-0' : ''}`}
                onClick={() => onClick(filterTypeTag)}
            >
                {filterTypeTag.charAt(0).toUpperCase() + filterTypeTag.slice(1)}
            </button>
        </>
    }

    WeatherFilterButton.propTypes = {
        filterTypeTag: PropTypes.string.isRequired,
        activeFilter: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };
    let finalAlerts = []
    allforecastData?.map((forecastPoint) => {
        const { alerts } = forecastPoint
        if (alerts?.length > 0) {
            finalAlerts = [...finalAlerts, alerts[0]]
        }
    })
    // console.log('allforecastData forecastData length', allforecastData?.length, forecastData?.length)
    return (
        <div>
            <div className='this is classes'>
                {/* Title and other things */}
                <div>

                </div>

                {/* Alerts */}
                <div>
                    <div>
                        {/* <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span>What is Flowbite?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span>Is there a Figma file available?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-800 dark:border-red-700 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5 border border-t-0 border-red-200 dark:border-red-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        {finalAlerts?.length > 0 && finalAlerts && filters.filterType === FILTERS.alert && < Accordion data={finalAlerts} />}
                    </div>
                </div>

                {/* Map  */}
                <div>
                    {/* Map ctrls */}
                    {(forecastData?.length > 0 || allforecastData?.length > 0) ? <div className='p-5 mx-auto max-w-7xl sm:px-6  lg:px-8 flex justify-between items-center gap-3'>
                        <div className="flex justify-between bg-white p-4 rounded-xl">
                            <WeatherFilterButton filterTypeTag={FILTERS.sky} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.temp} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.precip} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.wind} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.alert} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.camera} activeFilter={filters.filterType} onClick={handleWeatherFilterChange} />
                            <WeatherFilterButton filterTypeTag={FILTERS.radar} activeFilter={filters.filterType} onClick={() => {
                                clearPath();
                                handleWeatherFilterChange(FILTERS.radar);
                            }} />
                            <WeatherFilterButton filterTypeTag={FILTERS.clear} activeFilter={filters.filterType} onClick={() => {
                                clearPath();
                                handleWeatherFilterChange(FILTERS.sky);
                            }} />
                        </div>
                        <div>
                            <DatePicker
                                selected={filters.date}
                                onChange={(date) => {
                                    setFilters((old) => ({ ...old, date: date }))
                                }}
                                showIcon
                                showTimeSelect
                                timeFormat="hh:mm aa"
                                timeIntervals={60}
                                timeCaption="time"
                                dateFormat="EEE d, h:mm aa"
                                className='p-4 rounded-xl outline-0'
                            />
                        </div>
                    </div>
                        :

                        <div className='p-5 mx-auto max-w-7xl sm:px-6  lg:px-8 flex justify-between items-center gap-3'>
                            <div className="flex justify-between bg-white p-4 rounded-xl">
                                <form>
                                    <div className="grid gap-6  md:grid-cols-3">
                                        <div>
                                            {/* <label htmlFor="Form" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label> */}
                                            {/* <MultiselectDropdown
                                                name='filters'
                                                value={values.filters}
                                                onChange={(value) => { setFieldValue('filters', value.map((item) => item.value)) }}
                                                options={eventFilters}
                                            /> */}
                                            <AutoCompeleteMenu
                                                placeholder="From"
                                                name='start_point'
                                                value={values.start_point}
                                                onChange={handleChange}
                                                options={eventFilters}
                                            />
                                        </div>
                                        <div>
                                            <AutoCompeleteMenu
                                                placeholder="To"
                                                name='end_point'
                                                value={values.end_point}
                                                onChange={handleChange}
                                                options={eventFilters}
                                            />
                                        </div>

                                        <div>

                                            <button onClick={(e) => { e.preventDefault(); submitForm() }}
                                                type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find</button></div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    }
                    {/* Map renderer */}
                    <div>
                        <div id='map-container' className='h-96'>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Map