import React, { useState } from "react";
import Input from "../ui/Input";
import { TextField, Button } from "@mui/material";

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
        <form onSubmit={handleSubmit}>
            <TextField
                required
                id="outlined-basic"
                label="Task Item"
                variant="outlined"
                onChange={handleTaskUpdate}
            />
            <Input
                id="dueDate"
                label="Due Date"
                type="date"
                onChange={handleDateUpdate}
            />
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Home;
