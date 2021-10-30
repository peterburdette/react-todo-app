import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <Fragment>
            <label htmlFor={props.id} className={classes.label}>
                {props.label}
            </label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </Fragment>
    );
};

export default Input;
