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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filters: string
}

function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const addTask = () => {
        if(newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle('');
        }else{ setError('Title is required')
        }
    }

    const onNewTitleTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask();
            setNewTaskTitle('');
        }
    };
    const onAddTaskHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('');
    };

    const onAllClickHandler = () => props.filterTask('all');
    const onActiveClickHandler = () => props.filterTask('active');
    const onCompletedClickHandler = () => props.filterTask('completed');

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleTaskHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? 'error' : ''}
            />
            <button onClick={onAddTaskHandler}>+</button>
            {error && <div className='error-message'>{error}</div>}
            <div className='error-message'>Field is requured</div>
        </div>
        {
            props.tasks.map(task => {
                const onRemoveHandler =  () => props.removeTask(task.id);
                const onChangerHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeTaskStatus(task.id , e.currentTarget.checked);
                };

                return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                    <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={onChangerHandler}
                    />
                    <span>{task.title}</span>
                    <button onClick={onRemoveHandler}>x</button>
                </li>
            })
        }
        <ul>
        </ul>
        <div>
            <button className={props.filters === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filters === 'active' ? 'active-filter' : ''}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filters === 'completed' ? 'active-filter' : ''}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}


export default Todolist;
