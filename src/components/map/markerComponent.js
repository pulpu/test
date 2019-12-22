import React from 'react';
import {Marker} from "react-google-maps";
import InfoWindowComponent from "./infoWindowComponent";

function MarkerComponent(props) {

    return (
        <Marker
            key={props.id}
            position={{
                lat: props.lat,
                lng: props.long
            }}
            icon={{
                url:props.iconMarker,
                scaledSize: new window.google.maps.Size(25, 25)
            }}
            onClick={() => { props.showInfo(props.id) }}

        >
            <InfoWindowComponent id={props.id}
                                 selectedMarker = {props.selectedMarker}
                                 name={props.name}
                                 country={props.country}
                                 probability={props.probability}
                                 lat={props.lat}
                                 long={props.long}
                                 month={props.month}
                                 favorites={props.favorites}
                                 actionAdd={props.actionAdd}
                                 actionRemove={props.actionRemove}
                                 favouritesId={props.favouritesId}
            />

        </Marker>
    );
}

export default MarkerComponent;
