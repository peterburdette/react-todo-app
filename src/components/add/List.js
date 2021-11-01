import React from "react";
// import classes from "./List.module.css";
import Input from "../ui/Input";

const List = (props) => {
    const handleComplete = (event) => {
        props.handleCompletedTask(event.target.value);
    };

    return (
        <div>
            <ul>
                {props.data.map((task) => (
                    <li key={task.id}>
                        <div>{task.taskName}</div>
                        <div>{task.dueDate}</div>
                        <div>
                            <Input
                                type="checkbox"
                                value={task.taskName}
                                onChange={handleComplete}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
