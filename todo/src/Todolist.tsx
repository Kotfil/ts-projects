import React, {useState} from 'react';
import {PropType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id: string) => void
    filterTask:(value: PropType) => void
    addTask:(title: string) => void

}

export function Todolist(props: PropsType) {

 const [newTaskTitle,setNewTaskTitle] =  useState('');
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={(e) =>
                {setNewTaskTitle(e.currentTarget.value)}
            } onKeyPress={(e) => {
                if(e.keyCode === 13) {
                    props.addTask(newTaskTitle);
                    setNewTaskTitle('');
                }
            }
            }/>
            <button onClick={() =>
            {
                props.addTask(newTaskTitle);
                setNewTaskTitle('');
            }}>+</button>
        </div>
        {
            props.tasks.map(task => {
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => props.removeTask(task.id)}>x</button>
                    </li>
                )
            })
        }
        <ul>
        </ul>
        <div>
            <button onClick={() => {props.filterTask('all')}}>All</button>
            <button onClick={() => {props.filterTask('active')}}>Active</button>
            <button onClick={() => {props.filterTask('completed')}}>Completed</button>
        </div>
    </div>
}
