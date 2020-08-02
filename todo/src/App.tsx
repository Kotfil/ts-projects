import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

<<<<<<< HEAD
export type PropTypesFilter = 'all'|'active'|'completed';

=======
 export type FilterValuesType = "all" | "active" | "completed";
>>>>>>> master

function App() {
    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "Reacter", isDone: false},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "React", isDone: false},
        {id: 6, title: "Impact", isDone: false}
    ])




    let [filter, setFilter] = useState<FilterValuesType>("all")


    const filterId = (id: number) => {
        let tasked = tasks1.filter(i => i.id != id);
        setTasks1(tasked)
    }

    function changeFilter(ChangeValue: FilterValuesType) {
                setFilter(ChangeValue)
    }


<<<<<<< HEAD
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
=======
    let taskForTodoList = tasks1;
    if (filter === "active") {
        taskForTodoList = tasks1.filter(i => i.isDone === false)
    }
    if (filter === "completed") {
        taskForTodoList = tasks1.filter(i => i.isDone === true)
    }
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={taskForTodoList}
                filterId={filterId}
                changeFilter={changeFilter}
            />
>>>>>>> master
        </div>
    );
}

export default App;
