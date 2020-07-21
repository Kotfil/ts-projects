import React from 'react';
import {FilterValuesType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    filterId: (TaskId:number) => void
    changeFilter:(ChangeValue: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks
                    .map(i => <li key={i.id}>
                        <input type="checkbox" checked={i.isDone}/>
                        <span>{i.title}</span>
                        <button onClick={() => props.filterId(i.id)}>+</button>
                    </li>)
            }
        </ul>
        <div>
            <button onClick={() => props.changeFilter('all')}>All</button>
            <button onClick={() => props.changeFilter('active')}>Active</button>
            <button onClick={() => props.changeFilter('completed')}>Completed</button>
        </div>
    </div>
}
