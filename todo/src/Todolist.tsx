import React from 'react';
import {PropTypesFilter} from "./App";


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    tasksDel: (id: number) => void
     filterSetState: (value: PropTypesFilter) => void

}


export function Todolist(props: PropsType) {
    let listsEl = props.tasks.map(t => <li key={t.id}><input type='checkbox' checked={t.isDone}/><span>{t.title}</span>
        <button onClick={() => props.tasksDel(t.id)}>X</button></li>);
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {listsEl}
        </ul>
        <div>
            <button onClick={() => props.filterSetState('all')}>All</button>
            <button onClick={() => props.filterSetState('active')}>Active</button>
            <button onClick={() => props.filterSetState('completed')}>Completed</button>
        </div>
    </div>
}
