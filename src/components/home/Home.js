import React, { useState } from "react";
import Header from "../header/Header";
import AddNew from "../add/AddNew";
import TaskList from "../list/TaskList";
// import classes from "./Home.module.css";

const Home = (props) => {
    const taskList = [];
    const [tasks, setTaskInList] = useState(taskList);

    const handleAddTask = (item) => {
        setTaskInList((prevData) => {
            return [...prevData, item];
        });
    };

    const handleCompletedTask = (checkedValue, id) => {
        console.log(checkedValue);

        const filteredTaskList = tasks.filter((element) => element.id !== id);
        console.log(filteredTaskList);
        setTaskInList(filteredTaskList);
    };

    return (
        <div>
            <Header handleLogout={props.onLogout} />
            <AddNew setTaskInList={handleAddTask} />
            {tasks.length > 0 && (
                <TaskList
                    data={tasks}
                    handleCompletedTask={handleCompletedTask}
                />
            )}
        </div>
    );
};

export default Home;
