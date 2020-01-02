import React from "react";
import {GoogleMap, Marker} from "react-google-maps";
const MapModal = (props) => {

    const createMapOptions = {

            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            scrollwheel: false,
            gestureHandling: 'none'

    };

    return (
        <div>
            <GoogleMap
                defaultZoom={12}
                center      ={{lat: props.lat, lng: props.lng}}
                options     ={createMapOptions}
            >
                <Marker position={{lat: props.lat, lng: props.lng}}
                        iconMarker={require('../../assets/images/map/hiclipart.png')}
                />
            </GoogleMap>
        </div>
    );

};

export default MapModal;