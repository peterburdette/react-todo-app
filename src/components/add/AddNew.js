import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Button,
} from "@mui/material";
import styles from "./AddNew.module.css";

const Home = (props) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const handleTaskUpdate = (event) => {
        setTask(event.target.value);
    };

    const handleDateUpdate = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const generatedId = Math.floor(Math.random() * 100000);

        const taskData = {
            id: generatedId,
            taskName: task,
            dueDate: date,
        };

        if (taskData.taskName.length > 0) {
            props.setTaskInList(taskData);
        }
    };

    return (
        <Card id={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Task Item"
                        variant="outlined"
                        onChange={handleTaskUpdate}
                    />
                    <TextField
                        id="dueDate"
                        label="Due Date"
                        type="date"
                        onChange={handleDateUpdate}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default Home;
