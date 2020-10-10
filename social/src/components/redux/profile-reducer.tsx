import React from "react";
import {ActionsTypes, PostsPropTypes, profilePagePropTypes} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const ProfileReducer = (state: profilePagePropTypes, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsPropTypes = {
                id: 5,
                messages: state.newPostText,
                likesCount: 22
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
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