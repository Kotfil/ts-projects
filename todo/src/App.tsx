import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

 export type FilterValuesType = "all" | "active" | "completed";

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
        </div>
    );
}

export default App;
