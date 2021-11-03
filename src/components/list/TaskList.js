import React from "react";
import TaskListItem from "./TaskListItem";
import { List } from "@mui/material";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
    const handleCompleteTask = (list) => {
        props.handleCompletedTask(list);
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
                    <TaskListItem
                        list={props.data}
                        key={task.id}
                        taskItem={task}
                        onComplete={handleCompleteTask}
                    />
                ))}
            </List>
        </div>
    );
};

export default TaskList;
