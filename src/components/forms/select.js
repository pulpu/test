import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


const DropDown = props => {

    return (
        <FormControl>
            <InputLabel htmlFor="age-native-simple">{props.name}</InputLabel>
            <Select
                native
                onChange={props.action}
                inputProps={{
                    name: props.name,
                    id: props.name + '-native-simple',
                    ...props
                }}
            >
                <option value="" />
                { typeof props.values !== 'undefined' ? props.values.map((_el,_index) =>{
                    return <option value={_el} key={_index}>{_el}</option>
                }) : null}
            </Select>
        </FormControl>

    );
};

export default DropDown;