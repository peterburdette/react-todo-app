import React from "react";
// import classes from "./List.module.css";
import Input from "../ui/Input";

const List = (props) => {
    const handleComplete = (event, id) => {
        props.handleCompletedTask(event.target.checked, id);
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
                                onChange={(event) =>
                                    handleComplete(event, task.id)
                                }
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
