import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import AddNew from "../add/AddNew";
import TaskList from "../list/TaskList";
// import classes from "./Home.module.css";

const Home = (props) => {
    const taskList = [];
    const [tasks, setTaskInList] = useState(taskList);
    const [checkedValue, setCheckedValue] = useState();
    const [checkedValueId, setCheckedValueId] = useState();

    useEffect(() => {
        if (checkedValue === true) {
            setTimeout(() => {
                const filteredTaskList = tasks.filter(
                    (element) => element.id !== checkedValueId
                );
                console.log(filteredTaskList);
                setTaskInList(filteredTaskList);
            }, 1000);
        }
    }, [checkedValue, checkedValueId, tasks]);

    const handleAddTask = (item) => {
        setTaskInList((prevData) => {
            return [...prevData, item];
        });
    };

    const handleCompletedTask = (checkedValue, id) => {
        setCheckedValue(checkedValue);
        setCheckedValueId(id);
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
