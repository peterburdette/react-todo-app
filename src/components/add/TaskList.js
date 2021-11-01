import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
    const handleComplete = (event, id) => {
        setTimeout(() => {
            props.handleCompletedTask(event.target.checked, id);
        }, 2000);
    };

    return (
        <div id={classes.listWrapper}>
            <List
                sx={{
                    bgcolor: "background.paper",
                }}
            >
                {props.data.map((task) => (
                    <ListItem key={task.id}>
                        <ListItemText
                            primary={
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={task.taskName}
                                    onChange={(event) =>
                                        handleComplete(event, task.id)
                                    }
                                />
                            }
                            secondary={task.dueDate}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;
