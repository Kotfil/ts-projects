import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "../../api/todolistsAPI";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '424d30ae-6281-4a44-aa2a-443211a7e193'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>
        {JSON.stringify(state)}
    <div>

    </div>

    </div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todo, setTodo] = useState<string>( '')

    const createTodo = () => {
    todolistsAPI.createTodolist(todo)
        .then((res) => {
            setState(res.data)
        })
}
    return <div> {JSON.stringify(state)}
    <>
        <input placeholder={'CreateTODOLIST'}
               value={todo}
               onChange={(e) => {setTodo(e.currentTarget.value)}}/>
        <button
            onClick={createTodo}>ADD TODO
        </button>
        </>

    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [dell, setDell] = useState<string>('')

    const hendler = () => {
        todolistsAPI.deleteTodolist(dell)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder="~send id todo~"
                   value={dell}
                   onChange={(e) => {
                       setDell(e.currentTarget.value)
                   }}/>
            <div>
                <button onClick={hendler}>DELETE TODOLIST</button>
            </div>
        </div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6ae8d45d-4c65-4779-8380-85105c3f90fc'
        const nameTodoList = 'ChangeNameToUpdate'
        todolistsAPI.updeateTodolist(todolistId,nameTodoList)
            .then((res) => {
                setState(res)
            })
        return () => {

        }
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [setState])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f7af7c1f-a742-404c-b85f-3d656e1b201c';
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={'taskId'}
                   value={taskId}
                   onChange={(e) => {
                       setTaskId(e.currentTarget.value)
                   }}/>
            <button
                onClick={deleteTask}>delete task
            </button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const name = '12311111111111111111111111'
        todolistsAPI.addTask(name)
            .then((res) => {
                debugger
                setState(res.data)
            })
        return () => {

        }

    }, [setState])

    return <div> {JSON.stringify(state)}</div>
}
