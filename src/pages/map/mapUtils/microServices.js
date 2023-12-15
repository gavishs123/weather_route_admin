import mapboxgl from "mapbox-gl"
import { mapIcons } from "../../../assets/SVGs/mapSVGs"

export const removeMarker = (marker) => {
    marker?.remove()
}

export const getCoordinatesString = (coordinates) => {
    return `${coordinates.lat},${coordinates.lng}`
}

export const addCustomWeatherMarker = ({ map, coordinates, element, htmlString }) => {
    const el = document.createElement('div');
    el.className = 'marker';
    // make a marker for each feature and add it to the map
    const marker = new mapboxgl.Marker(element)
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(htmlString))
        .addTo(map);

    marker.getElement().addEventListener('mouseenter', () => {
        marker.togglePopup();
    });

    // Add mouseleave event listener to close the popup when not hovering
    marker.getElement().addEventListener('mouseleave', () => {
        marker.togglePopup();
    });

    return marker;
}


export const getCustomMarkerForWeather = (key) => {
    let xmlString = `<div>${mapIcons[key]}</div>`
    let SVG = new DOMParser().parseFromString(xmlString, "text/xml");
    SVG = SVG.getElementsByTagName('div')[0] ?? ''

    const element = document.createElement('div');
    element.className = 'ctm-marker';
    element.appendChild(SVG)

    return element
}