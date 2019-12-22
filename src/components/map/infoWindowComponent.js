import React from 'react';
import {InfoWindow} from "react-google-maps";
import Button from "../forms/button";

function InfoWindowComponent(props) {
    return (
        (props.selectedMarker === props.id ) &&
        <InfoWindow key={props.id} onCloseClick={props.onToggleOpen}>
                    <div className="info-window">
                        <div className="info-window__header">
                            <h5 className="info-window__title">{props.name}</h5>
                            <p className="info-window__subtitle">{props.country}</p>
                        </div>
                        <div className="info-window__body">
                            <div>
                                <h3>Wind Probability</h3>
                                <p>{props.probability}</p>
                            </div>
                            <div>
                                <h3>LATITUDE</h3>
                                <p>{props.lat}</p>
                            </div>
                            <div>
                                <h3>LONGITUDE</h3>
                                <p>{props.long}</p>
                            </div>
                            <div>
                                <h3>WHEN TO GO</h3>
                                <p>{props.month}</p>
                            </div>
                        </div>
                        <div className="info-window__footer">
                            {props.favorites ?
                            <Button
                                type={"button"}
                                class={"btn btn-block btn-warning"}
                                action={()=>{props.actionAdd(props.id)}}
                                title={'ADD TO FAVORITES'}
                            /> :
                                <Button
                                    type={"button"}
                                    class={"btn btn-block btn-danger"}
                                    action={()=>{props.actionRemove(props.favouritesId)}}
                                    title={'REMOVE FROM FAVORITES'}
                                />}
                        </div>
                    </div>
                </InfoWindow>

    );
}

export default InfoWindowComponent;
