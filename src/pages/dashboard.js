import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import getMethod from '../services/api/APIget/getMethod';
import FilterSpots from "../components/map/filterSpots";

class Map extends React.Component {
    constructor(props){
        super(props);
        this.Method = new getMethod();
        this.state = {
            spotList: [],
            favouritesList: [],
            ownPosition : {lat:0,lng:0},
            zoom: 2,
            selectedMarker: false
        };

    }

    componentDidMount() {
        let self = this;
        this.Method.get('spot')
            .then(function (response) {
                self.setState({
                    spotList: response.data,
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        this.Method.get('favourites')
            .then(function (response) {
                console.log('favourites',response.data.map((_el) => {
                    return _el.spot
                }))
                self.setState({
                    favouritesList: response.data.map((_el) => { return String(_el.spot)}),
                })
            })
            .catch(function (error) {
                console.log(error);
            });



        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let pos = {
                    lat:Number(position.coords.latitude),
                    lng:Number(position.coords.longitude)
                };
                self.setState({
                    ownPosition: pos,
                    zoom: 10
                });
            });
        }
    }

    listingSpots() {
        return this.state.spotList.map(_location => {
            let iconMarkerDefault = require('../assets/images/map/hiclipart.png');
            let iconMarkerFavorite = require('../assets/images/map/marker-default.png');
            let iconMarker = (this.state.favouritesList.indexOf(_location.id) > -1) ? iconMarkerFavorite : iconMarkerDefault;
            return (
                <Marker
                    key={_location.id}
                    position={{
                        lat: Number(_location.lat),
                        lng: Number(_location.long)
                    }}
                    icon={{
                        url:iconMarker,
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />)}
        )
    }

    filterSpots(country, wind) {
        let filterSpotList = [];

        if(country.length ) {
            filterSpotList = this.state.spotList.filter(_spot => {
                return _spot.country === country
            }).filter(_spot => {
                return _spot.probability === wind
            });
        }

        if(filterSpotList.length ) {
            let zoom;
            let ownPosition;
            filterSpotList.length === 1 ? zoom = 10 : zoom = 2
            this.setState({
                ...this.spotList,
                spotList:filterSpotList,
                ownPosition: {lat:0,lng:0},
                zoom: zoom
            })
        }
    }

    handleClick(marker, event) {
        console.log('marker',{ marker })
        this.setState({ selectedMarker: marker })
    }

    createMapOptions(maps) {
        return {
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        }
    }


    render(){
        return (
            <div>
                <FilterSpots action={() => this.filterSpots('Romania', 73)}/>

                <GoogleMap
                    zoom= {this.state.zoom}
                    center= {this.state.ownPosition}
                    options={this.createMapOptions()}
                >
                    {this.listingSpots()}
                    {/*{this.state.selectedMarker === marker &&*/}
                    {/*<InfoWindow>*/}
                    {/*    <div>*/}
                    {/*        {marker.shelter}*/}
                    {/*    </div>*/}
                    {/*</InfoWindow>}*/}
                    {/*}*/}
                </GoogleMap>
            </div>

        );
    }
}

export default Map;