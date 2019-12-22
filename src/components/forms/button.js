import React from 'react'

const Button = props => {
    return (
        <button
            style={props.style}
            type={props.type}
            className={props.class}
            onClick={props.action}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    );
};

export default Button;