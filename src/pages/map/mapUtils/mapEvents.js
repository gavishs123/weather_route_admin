import mapboxgl from 'mapbox-gl'
import { removeMarker } from './microServices';

export const onMapLoad = ({ map }) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                let coordinates = [position.coords.longitude, position.coords.latitude];
                map.flyTo({
                    center: coordinates,
                    essential: true
                });
            }
        });
    }
}

export const onMapClick = ({ e, map, path, setPath }) => {
    var coordinates = e.lngLat;
    const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

    if (!path.start.marker && !path.end.marker) {
        setPath({
            start: {
                coordinates,
                marker
            },
            end: {}
        })
    } else if (path.start.marker && !path.end.marker) {
        setPath((old) => ({
            ...old,
            end: {
                coordinates,
                marker
            }
        }))
    } else if (path.start.marker && path.end.marker) {
        removeMarker(marker)
        // removeMarker(path.start.marker)
        // removeMarker(path.end.marker)
        // setPath({
        //     start: {
        //         coordinates,
        //         marker
        //     },
        //     end: {}
        // })
    }

}