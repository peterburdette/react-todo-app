import React from "react";

const Button = (props) => {
    return (
        <button type={props.type || "button"} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default Button;
