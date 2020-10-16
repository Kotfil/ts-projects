import React from "react";
import {ActionsTypes, dialogsPagePropTypes, DialogsPropTypes, MessagesPropTypes} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    newMessageText: '',
    messages: [
        {id: 1, messages: 'What time is it now?'},
        {id: 2, messages: 'Hello'},
        {id: 3, messages: 'Hey friend'},
        {id: 4, messages: 'Haha'},
    ],
    dialogs: [
        {id: 1, name: 'Filipp'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'SSSR'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Ann'},
    ],
};

export const DialogsReducer = (state: dialogsPagePropTypes = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessagesPropTypes = {
                id: 8,
                messages: state.newMessageText
            };
            let copyState = {...state};
            copyState.messages = [...state.messages];
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newMessageText = action.newMessageText;
            return copyState;
        }
        default:
            return state;
    }
};

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