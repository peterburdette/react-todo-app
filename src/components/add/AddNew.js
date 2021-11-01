import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

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
            <Input
                id="taskItem"
                label="Task"
                type="text"
                onChange={handleTaskUpdate}
            />
            <Input
                id="dueDate"
                label="Due Date"
                type="date"
                onChange={handleDateUpdate}
            />
            <Button type="submit" title="Submit" onClick={handleSubmit} />
        </form>
    );
};

export default Home;
