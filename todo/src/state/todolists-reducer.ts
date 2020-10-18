import {TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
           return state.filter(tl => tl.id != action.id)
        }

        case 'ADD-TODOLIST': {
            return [...state, {
                id: v1(),
                title: action.title,
                filter: 'all'
            }]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            let findTodoList = state.find(i => i.id === action.id);
            if (findTodoList) {
                findTodoList.title = action.title
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            let findTodoList = state.find(t => t.id === action.id)
            if (findTodoList) {
                findTodoList.filter = action.filter
            }
            return [...state]
        }
        default:
            throw new Error("I don't understand this type")
    }
}

