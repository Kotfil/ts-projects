import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type PropTypesFilter = 'all'|'active'|'completed';


function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Angular", isDone: false}]);

    function tasksDel(id: number) {
        let tasksDelEl = tasks.filter(t => t.id != id);
        setTasks(tasksDelEl)
    }

    let [filter, setFilter] = useState<'all'|'completed'|'active' >('all');

    function filterSetState (value: PropTypesFilter) {
        setFilter(value)
    }

    let filterTaskEl = tasks;
    if (filter === 'active') {
        filterTaskEl = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        filterTaskEl = tasks.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filterTaskEl} tasksDel={tasksDel} filterSetState={filterSetState}/>
        </div>
    );
}

export default App;
