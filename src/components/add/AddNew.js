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
        const enteredDate = new Date(event.target.value + " 00:00");
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const monthIndex = enteredDate.getMonth();
        const day = enteredDate.getDate();
        const year = enteredDate.getFullYear();
        const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

        if (event.target.value.length !== 0) {
            setDate(formattedDate);
        } else {
            setDate("");
        }
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
        <Card id={styles.addTaskFormWrapper}>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className={styles.formControlInput}>
                        <TextField
                            required
                            id="taskItem"
                            label="Task Item"
                            variant="outlined"
                            onChange={handleTaskUpdate}
                        />
                    </div>
                    <div className={styles.formControlInput}>
                        <TextField
                            id="dueDate"
                            type="date"
                            variant="outlined"
                            onChange={handleDateUpdate}
                        />
                    </div>
                </CardContent>
                <CardActions id={styles.formActions}>
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default Home;
