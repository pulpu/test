import React from 'react';
import Input from "../forms/input";
import Button from "../forms/button";

function AddMarkerModal(props) {

    return (
        <div className="add-marker-modal vertical-center" >
            <div className="add-marker-modal__header">
                <h5 className="info-window__title mb-2">Add Spot</h5>
            </div>
            <div className="add-marker-modal__body">
                <Input
                    inputType={'text'}
                    name={'country'}
                    placeholder={'insert country'}
                    title={'Country'}
                />
                <Input
                    inputType={'text'}
                    name={'name'}
                    placeholder={'insert name'}
                    title={'Name'}
                />
            </div>
            <div className="add-marker-modal__footer float-right">
                <Button
                    type={"button"}
                    class={"btn btn-link text-danger mr-3"}
                    action={()=>{props.addMarker({
                        name: 'test',
                        country: 'Romania',
                        lat: props.lat,
                        lng: props.lng,
                        month: 'august' ,
                    })}}
                    title={'Cancel'}
                />
                <Button
                    type={"button"}
                    class={"btn btn-link mr-2"}
                    action={()=>{props.addMarker({
                        name: 'test',
                        country: 'Romania',
                        lat: props.lat,
                        lng: props.lng,
                        month: 'august' ,
                    })}}
                    title={'Confirm'}
                />
            </div>
        </div>
    );
}

export default AddMarkerModal;
