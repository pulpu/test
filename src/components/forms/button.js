import React from 'react'

const Button = props => {
    return (
        <button
            style={props.style}
            className={
                props.type === "primary" ? "btn btn-primary" : props.type === "danger" ? 'btn btn-danger' : "btn btn-secondary"
            }
            onClick={props.action}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    );
};

export default Button;