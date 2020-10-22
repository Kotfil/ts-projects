import React from "react";
import {ActionsTypes, PostsPropTypes, profilePagePropTypes} from "./store";

const initialState = {
    newPostText: '',
    posts: [
        {id: 1, messages: 'Hello', likesCount: 22},
        {id: 2, messages: 'How Are You?', likesCount: 32},]
};

export const ProfileReducer = (state: profilePagePropTypes = initialState, action: ActionsTypes): profilePagePropTypes => {
    switch (action.type) {
        case 'ADD-POST': {
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
        case 'UPDATE-NEW-POST-TEXT': {
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
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
};

export default ProfileReducer