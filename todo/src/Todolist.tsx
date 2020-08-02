import React from 'react';
<<<<<<< HEAD
import {PropTypesFilter} from "./App";


=======
import {FilterValuesType} from "./App";

>>>>>>> master
type TaskType = {
    id: number
    title: string
    isDone: boolean
}

<<<<<<< HEAD
type PropsType = {
    title: string
    tasks: Array<TaskType>
    tasksDel: (id: number) => void
     filterSetState: (value: PropTypesFilter) => void
}
export function Todolist(props: PropsType) {
    let listsEl = props.tasks.map(t => <li key={t.id}>
        <input type='checkbox' checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => props.tasksDel(t.id)}>X</button></li>);
=======
export type PropsType = {
    title: string
    tasks: Array<TaskType>
    filterId: (TaskId:number) => void
    changeFilter:(ChangeValue: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
>>>>>>> master
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
<<<<<<< HEAD
        </div>
        <ul>
            {listsEl}
        </ul>
        <div>
            <button onClick={() => props.filterSetState('all')}>All</button>
            <button onClick={() => props.filterSetState('active')}>Active</button>
            <button onClick={() => props.filterSetState('completed')}>Completed</button>
        </div>
=======
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
>>>>>>> master
    </div>
}
