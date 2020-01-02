import React from "react";
import {GoogleMap} from "react-google-maps";
import GetMethod from '../../services/api/APIget/getMethod';
import PostMethod from '../../services/api/APIpost/postMethod';
import DeleteMethod from '../../services/api/APIdelete/deleteMethod';
import FilterSpots from "../../components/map/filterSpots";
import MarkerComponent from '../map/markerComponent'
import AddMarkerModal from "./addMarkerModal";


class Map extends React.Component {
    constructor(props){
        super(props)
        this.MethodGet = new GetMethod(this)
        this.MethodPost = new PostMethod(this)
        this.DeleteMethod = new DeleteMethod(this)
        this.state = {
            originalSpotList:[],
            spotList: [],
            favouritesSpotList: [],
            favouritesList:[],
            ownPosition : {lat:0,lng:0},
            zoom: 2,
            selectedMarker: false,
            showAddModal: false,
            isOpen: false,
            marker: {
                lat: 0,
                long: 0,
                country: '',
                month: '',
                name:'',
            },
            selectedDate:null,
        };
        this.showInfo = this.showInfo.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
        this.addMarkerOpenModal = this.addMarkerOpenModal.bind(this);
        this.toggleAddMarkerModal = this.toggleAddMarkerModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.getSPopsAndFavourites = this.getSPopsAndFavourites.bind(this);
    }


    componentDidMount() {
        this.getSPopsAndFavourites();
    }

    getSPopsAndFavourites(center) {
        let self = this;
        this.MethodGet.get('spot')
            .then(function (response) {
                self.setState({
                    originalSpotList: response.data,
                    spotList: response.data,
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        this.MethodGet.get('favourites')
            .then(function (response) {
                self.setState({
                    favouritesList:response.data,
                    favouritesSpotList: response.data.map((_el) => { return String(_el.spot)}),
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        if(center) {
            self.setState({
                ownPosition: {
                    lat:Number(this.state.marker.lat),
                    lng:Number(this.state.marker.long)
                },
                zoom: 10
            });

        } else if (navigator.geolocation) {
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
    };

    listingSpots() {
        let self = this;

        return this.state.spotList.map(_location => {
            let iconMarkerDefault  = require('../../assets/images/map/hiclipart.png');
            let iconMarkerFavorite = require('../../assets/images/map/marker-default.png');
            let iconMarker = (this.state.favouritesSpotList.indexOf(_location.id) > -1) ? iconMarkerFavorite : iconMarkerDefault;
            let favouritesId =  (self.state.favouritesSpotList.indexOf(_location.id) > -1) ? self.state.favouritesList[self.state.favouritesSpotList.indexOf(_location.id)].id : null ;
            return (
                <MarkerComponent key={_location.id}
                    id={_location.id}
                    selectedMarker = {this.state.selectedMarker}
                    name={_location.name}
                    iconMarker={iconMarker}
                    country={_location.country}
                    probability={_location.probability}
                    lat={Number(_location.lat)}
                    long={Number(_location.long)}
                    month={_location.month}
                    showInfo={this.showInfo}
                    infoIndex={this.state.infoIndex}
                    onToggleOpen={this.onToggleOpen}
                    favorites = {(this.state.favouritesSpotList.indexOf(_location.id) === -1)}
                    actionAdd={this.addToFavorites}
                    actionRemove={this.removeFromFavorites}
                    favouritesId={favouritesId}
                    />
            )}
        )
    };

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
            filterSpotList.length === 1 ? zoom = 10 : zoom = 2
            this.setState({
                ...this.spotList,
                spotList:filterSpotList,
                ownPosition: {lat:0,lng:0},
                zoom: zoom
            })
        }
    };

    showInfo(marker) {
        this.setState({ selectedMarker: marker })
    };

    onToggleOpen = (location) => {
        this.setState({ isOpen: !this.isOpen })
    };

    addToFavorites(_id){
        this.MethodPost.post(`favourites?post=${_id}`, {
            'spot': Number(_id),
        })
    };

    removeFromFavorites(_id){
        this.DeleteMethod.remove(`favourites/${_id}`, {
            'spot': Number(_id),
        })
    };

    toggleAddMarkerModal(){
        this.setState({
            showAddModal: !this.state.showAddModal
        })
    };

    addMarkerOpenModal(t) {
        const lat = String(t.latLng.lat());
        const lng = String(t.latLng.lng());

        this.setState(prevState => ({
            marker: {
                ...prevState.marker,
                lat: lat,
                long: lng,
            },
            ownPosition: {
                ...prevState.ownPosition,
                lat: Number(lat),
                lng: Number(lng),
            }
        }));

        this.toggleAddMarkerModal();
    };

    handleSubmit(event) {
        let self = this;
        event.preventDefault();

        this.MethodPost.post(`spot`, this.state.marker)
            .then(()=>{
                self.getSPopsAndFavourites(true);
            }).then(()=>{
                self.toggleAddMarkerModal();
        })
    };

    handleChange(event, _value) {
        let value = event.target.value
        this.setState(prevState => ({
            marker: {
                ...prevState.marker,
                [_value]: value
            }
        }))
    };

    handleDateChange(date){
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        this.setState(prevState => ({
            marker: {
                ...prevState.marker,
                month: monthNames[d.getMonth()]
            },
            ...prevState.selectedDate,
            selectedDate: date
        }))

    };

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
                    zoom        ={this.state.zoom}
                    center      ={this.state.ownPosition}
                    options     ={this.createMapOptions()}
                    onRightClick={this.addMarkerOpenModal}
                >
                    {this.listingSpots()}
                    {this.state.showAddModal ?
                        <AddMarkerModal
                            marker          ={this.state.marker}
                            show            ={this.toggleAddMarkerModal}
                            handleChange    ={this.handleChange}
                            handleSubmit    ={this.handleSubmit}
                            handleDateChange={this.handleDateChange}
                            selectedDate    ={this.state.selectedDate}
                        /> : null}
                </GoogleMap>
            </div>

        );
    }
}

export default Map;