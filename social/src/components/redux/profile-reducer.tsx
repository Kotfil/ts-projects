import React from "react";
import {ActionsTypes, PostsPropTypes, profilePagePropTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    newPostText: '',
    posts: [
        {id: 1, messages: 'Hello', likesCount: 22},
        {id: 2, messages: 'How Are You?', likesCount: 32},]
};

export const ProfileReducer = (state: profilePagePropTypes = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsPropTypes = {
                id: 5,
                messages: state.newPostText,
                likesCount: 22
            };
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.newPostText;
            return copyState;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
};
export const updateNewPostTextActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
};

export default ProfileReducer