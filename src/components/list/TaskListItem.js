import React, { useState, useEffect } from "react";
import {
    ListItem,
    ListItemText,
    FormControlLabel,
    Checkbox,
} from "@mui/material";

const TaskListItem = (props) => {
    const [checkedValue, setCheckedValue] = useState();
    const [checkedValueId, setCheckedValueId] = useState();

    useEffect(() => {
        let timeout;

        // console.log("checked: ", checkedValue);
        // console.log("id: ", checkedValueId);

        if (checkedValue === true) {
            timeout = setTimeout(() => {
                const filteredTaskList = props.list.filter(
                    (element) => element.id !== checkedValueId
                );
                console.log("task list item: ", filteredTaskList);
                props.onComplete(filteredTaskList);
            }, 1000);
        } else {
            props.onComplete(props.list);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [checkedValue]);

    const complete = (checked, id) => {
        setCheckedValue(checked);
        setCheckedValueId(id);
    };

    return (
        <ListItem>
            <ListItemText
                primary={
                    <FormControlLabel
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
