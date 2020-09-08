import React from "react";
import {ActionsTypes, DialogsPropTypes, PostsPropTypes, profilePagePropTypes, stateObjectPropTypes} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const ProfileReducer = (state: profilePagePropTypes, action: ActionsTypes) => {
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
            return state
        default:
            return state
    }
}

export default ProfileReducer