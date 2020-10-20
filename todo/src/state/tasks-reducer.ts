import {v1} from "uuid";
import {TasksStateType} from "../App";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string
    isDone: boolean
    taskId: string
}
export type TitleTaskActionType = {
    type: 'TITLE-TASK-STATUS',
    todolistId: string
    title: string
    taskId: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskActionType | TitleTaskActionType
// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
                const copyState = {...state};
                const todoListId = copyState[action.todolistId];
                const taskIdfind = todoListId.filter(t => t.id !== action.taskId)
                copyState[action.todolistId] = taskIdfind;
                return copyState
        }

        case 'ADD-TASK': {
            const copyState = {...state};
            const todoAct = copyState[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newTasks = [newTask,...todoAct];
            copyState[action.todolistId] = newTasks
            return copyState

        }

        case 'CHANGE-TASK-STATUS': {
            const copyState = {...state};
            //достанем нужный массив по todolistId:
            let todolistNum = copyState[action.todolistId];
            // найдём нужную таску:
            let task = todolistNum.find(t => t.id === action.taskId);
            //изменим таску, если она нашлась
            if (task) {
                task.isDone = action.isDone;
                // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
               return copyState
            }
                return {...state}
        }

        case 'TITLE-TASK-STATUS': {
         const copyState = {...state}
            let todolistNum = copyState[action.todolistId];
            let task = todolistNum.find(t => t.id === action.taskId);
            if (task) {
                task.title = action.title;
            }
            return copyState

        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string,todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId,todolistId}
}
export const addTaskAC = (title: string,todolistId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title,todolistId}
}
export const changeTaskStatusAC = (taskId: string,isDone: boolean,todolistId: string): ChangeTaskActionType => {
    return { type: 'CHANGE-TASK-STATUS', todolistId,isDone,taskId}
}
export const titleTaskAC = (taskId: string,title: string,todolistId: string): TitleTaskActionType => {
    return { type: 'TITLE-TASK-STATUS', todolistId,title,taskId}
}
