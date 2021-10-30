import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Home = (props) => {
    const [task, setTask] = useState("");

    const handleTaskUpdate = (event) => {
        setTask(event.target.value);
        console.log(task);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const generatedId = Math.floor(Math.random() * 100000);

        const taskData = {
            id: generatedId,
            taskName: task,
            dueDate: "Nov 1",
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
            <Button type="submit" title="Submit" onClick={handleSubmit} />
        </form>
    );
};

export default Home;
