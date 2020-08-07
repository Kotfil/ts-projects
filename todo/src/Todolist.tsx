import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {PropType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    filterTask: (value: PropType) => void
    addTask: (title: string) => void

}

function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const onNewTitleTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    };
    const onAddTaskHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('');
    }
    const onAllClickHandler = () => props.filterTask('all')
    const onActiveClickHandler = () => props.filterTask('active')
    const onCompletedClickHandler = () => props.filterTask('completed')

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleTaskHandler}
                onKeyPress={onKeyPressHandler}/>
            <button onClick={onAddTaskHandler}>+</button>
        </div>
        {
            props.tasks.map(task => {
                const onRemoveHandler =  () => props.removeTask(task.id);
                return <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={onRemoveHandler}>x</button>
                </li>
            })
        }
        <ul>
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}


export default Todolist;
