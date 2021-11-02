import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
    const handleComplete = (event, id) => {
        props.handleCompletedTask(event.target.checked, id);
    };

    return (
        <div id={styles.listWrapper}>
            <p>
                There {props.data.length === 1 ? "is" : "are"}{" "}
                {props.data.length} {props.data.length === 1 ? "task" : "tasks"}{" "}
                to complete.
            </p>
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
