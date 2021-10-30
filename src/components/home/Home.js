import React, { useState } from "react";
import Header from "../header/Header";
import AddNew from "../add/AddNew";
import List from "../add/List";
// import classes from "./Home.module.css";

const Home = (props) => {
    const taskList = [];
    const [tasks, setTaskInList] = useState(taskList);

    const handleAddTask = (item) => {
        setTaskInList((prevData) => {
            return [...prevData, item];
        });
    };

    return (
        <div>
            <Header handleLogout={props.onLogout} />
            <AddNew setTaskInList={handleAddTask} />
            <List data={tasks} />
        </div>
    );
};

export default Home;
