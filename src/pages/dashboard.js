import React, { Component } from 'react';
import MapWrapper from "../components/map/mapWrapper";


class Dashboard extends Component {

    render() {
        return (
            <MapWrapper
                mapElementHeight        ={'50vh'}
                containerElementHeight  ={'50vh'}
                height                  ={'100%'}
                width                   ={'100%'}
            />
        );
    }
}

export default Dashboard;