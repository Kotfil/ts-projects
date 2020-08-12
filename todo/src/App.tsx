import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';
import {v1} from "uuid";

export type PropType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "C#", isDone: false}
    ]);
    console.log(tasks);

    function removeTask(id: string) {
        tasks = tasks.filter(t => t.id != id);
        setTasks(tasks);
    }

    function filterTask(value: PropType) {
        setFilters(value)
    }

    function addTask(title: string) {
        if(title.trim() !== '') {
            let newTask = {id: v1(), title: title, isDone: false};
            let newTasks = [newTask, ...tasks];
            setTasks(newTasks);
        }

    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(  t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        let copy = [...tasks]
        setTasks(copy)

    }

    let [filters, setFilters] = useState('all');
    let filtersEl = tasks;

    if (filters === 'active') {
        filtersEl = tasks.filter(t => t.isDone === false)
    }
    if (filters === 'completed') {
        filtersEl = tasks.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filtersEl}
                filterTask={filterTask}
                removeTask={removeTask}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filters={filters}
            />
        </div>
    );
}


export default App;
