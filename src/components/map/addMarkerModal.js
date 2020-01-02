import React from 'react';
import Input from "../forms/input";
import Button from "../forms/button";
import Dialog from '@material-ui/core/Dialog';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MapWrapper from "./mapWrapper";

const AddMarkerModal = (props) =>{

    return (
        <Dialog open={true}>
            <div className="add-marker-modal vertical-center">
                <div className="add-marker-modal__header">
                    <h5 className="info-window__title mb-2 text-left">Add Spot</h5>
                </div>
                <form onSubmit={props.handleSubmit}>
                    <div className="add-marker-modal__body">
                        <Input
                            type={'text'}
                            name={'country'}
                            placeholder={'insert country'}
                            title={'Country'}
                            onChange={(e) => {
                                props.handleChange(e, 'country')
                            }}
                            required={true}
                        />
                        <Input
                            type={'text'}
                            name={'name'}
                            placeholder={'insert name'}
                            title={'Name'}
                            required={true}
                            onChange={(e) => {
                                props.handleChange(e, 'name')
                            }}
                        />
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={props.selectedDate}
                            onChange={props.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            required={true}
                        />
                    </MuiPickersUtilsProvider>
                    <MapWrapper
                        mapElementHeight        ={'100%'}
                        containerElementHeight  ={'100%'}
                        loadingElementHeight    ={'100%'}
                        divStyle                ={{ width:'100%', height:'257px', minWidth:'257px'}}
                        modal ={true}
                        lat={Number(props.marker.lat)}
                        lng={Number(props.marker.long)}

                    />
                    <div className="add-marker-modal__footer float-right">
                        <Button
                            type={"button"}
                            class={"btn btn-link text-danger mr-3"}
                            action={props.show}
                            title={'Cancel'}
                        />
                        <Button
                            type={"Submit"}
                            class={"btn btn-link mr-2"}
                            value={"Submit"}
                            title={'Confirm'}
                        />
                    </div>
                </form>
            </div>
        </Dialog>
    );
};

export default AddMarkerModal;
