import React from "react";
import {ActionsTypes, dialogsPagePropTypes, DialogsPropTypes} from "./store";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    newMessageText: '',
    dialogs: [
        {id: 1, messages: 'What time is it now?'},
        {id: 2, messages: 'Hello'},
        {id: 3, messages: 'Hey friend'},
        {id: 4, messages: 'Haha'},
    ],
    messages: [
        {id: 1, name: 'Filipp'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'SSSR'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Ann'},
    ],
}

export const DialogsReducer = (state: dialogsPagePropTypes = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: DialogsPropTypes = {
                id: 8,
                messages: state.newMessageText
            };
            state.dialogs.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
           state.newMessageText = action.newMessageText;
            return state;
           default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
};
export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
};
export default DialogsReducer