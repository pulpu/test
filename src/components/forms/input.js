import React from 'react'
import TextField from '@material-ui/core/TextField';


const Input = props => {

    return (
            <TextField
                label={props.label}
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete} //"email"
                margin={props.margin} //"normal"
                variant={props.variant} //"outlined"
                helperText={props.helperText} //"Month looking to book"
                {...props}
            />
    );
};

export default Input;