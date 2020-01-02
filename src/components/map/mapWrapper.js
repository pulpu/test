import React from 'react';
import {withGoogleMap, withScriptjs} from "react-google-maps";
import Map from './map'
import ModalMap from './modalMap'

const MapWrapped = withScriptjs(withGoogleMap(Map));
const MapWrappedModal = withScriptjs(withGoogleMap(ModalMap));

const MapWrapper = (props) => {
    console.log(props.lat, props.lng);
    return (
        <div>
        { !props.modal ?
            (<div style={props.divStyle}>
                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{ height: props.loadingElementHeight}} />} //`100%`
                    containerElement={<div style={{ height: props.containerElementHeight }} />} //`100%`
                    mapElement={<div style={{ height: props.mapElementHeight  }} />} //`100%`
                />
            </div>) :
            (<div style={props.divStyle}>
                <MapWrappedModal
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{ height: props.loadingElementHeight}} />} //`100%`
                    containerElement={<div style={{ height: props.containerElementHeight }} />} //`100%`
                    mapElement={<div style={{ height: props.mapElementHeight  }} />} //`100%`
                    lat={props.lat}
                    lng={props.lng}
                />
            </div>) }</div>
    )
}
export default  MapWrapper;