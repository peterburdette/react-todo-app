import React from "react";
import classes from "./List.module.css";

const List = (props) => {
    return (
        <div>
            <ul>
                {props.data.map((task) => (
                    <li key={task.id}>{task.taskName}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
