import React from "react";
import {ActionsTypes, dialogsPagePropTypes, DialogsPropTypes} from "./state";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const DialogsReducer = (state: dialogsPagePropTypes, action: ActionsTypes) => {
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