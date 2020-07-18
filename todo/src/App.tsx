import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: 'HelloWorld',isDone: true},
        {id: 2, title: 'HelloWorld1',isDone: false},
        {id: 3, title: 'HelloWorld2',isDone: true},
        {id: 4, title: 'HelloWorld3',isDone: false},
    ]
    const tasks2 = [
        {id: 1, title: 'HelloWorld4',isDone: true},
        {id: 2, title: 'HelloWorld5',isDone: false},
        {id: 3, title: 'HelloWorld6',isDone: false},
        {id: 4, title: 'HelloWorld7',isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={'Welcome'} tasks={tasks1}/>
            <Todolist title={'ToDo'} tasks={tasks2}/>
        </div>
    );
}

export default App;
