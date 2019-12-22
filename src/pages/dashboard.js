import React, { Component } from 'react';
import {withGoogleMap, withScriptjs} from "react-google-maps";
import Map from '../components/map/map'

const MapWrapped = withScriptjs(withGoogleMap(Map));



class Dashboard extends Component {

    render() {
        return (
            <div style={{ width: "100vw", height: "50vh" }}>
                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Dashboard;