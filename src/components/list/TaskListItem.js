import React, { useState, useEffect } from "react";
import {
    ListItem,
    ListItemText,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import styles from "./TaskListItem.module.css";

const TaskListItem = (props) => {
    const [checkedValue, setCheckedValue] = useState();
    const [checkedValueId, setCheckedValueId] = useState();

    useEffect(() => {
        let timeout;

        if (checkedValue === true) {
            timeout = setTimeout(() => {
                const filteredTaskList = props.list.filter(
                    (element) => element.id !== checkedValueId
                );
                console.log("task list item: ", filteredTaskList);
                props.onComplete(filteredTaskList);
            }, 2000);
        } else {
            props.onComplete(props.list);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [checkedValue]); // eslint-disable-line react-hooks/exhaustive-deps

    const complete = (checked, id) => {
        setCheckedValue(checked);
        setCheckedValueId(id);
    };

    return (
        <ListItem
            className={
                new Date(props.taskItem.dueDate).toLocaleDateString() <
                new Date().toLocaleDateString()
                    ? styles.expired
                    : new Date(props.taskItem.dueDate).toLocaleDateString() ===
                      new Date().toLocaleDateString()
                    ? styles.warning
                    : ""
            }
        >
            <ListItemText
                primary={
                    <FormControlLabel
                        className={checkedValue ? styles.strikeThrough : ""}
                        control={<Checkbox />}
                        label={props.taskItem.taskName}
                        onChange={(event) =>
                            complete(event.target.checked, props.taskItem.id)
                        }
                    />
                }
                secondary={props.taskItem.dueDate}
            />
        </ListItem>
    );
};

export default TaskListItem;
