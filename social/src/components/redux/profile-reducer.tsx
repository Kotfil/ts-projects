import React from "react";
import {ActionsTypes, PostsPropTypes, profilePagePropTypes} from "./store";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {profileAPI, usersAPI} from "../../api/api";
import {toggleIsFetchingAC} from "./users-reducer";

export type ProfileType ={
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
type ContactType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null

}
type PhotosType = {
    small: string | null
    large: string | null
}

const initialState = {
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
    fullName: '',
    posts: [
        {id: 1, messages: 'Hello', likesCount: 22},
        {id: 2, messages: 'How Are You?', likesCount: 32}],

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
            copyState.newPostText = action.text;
            return copyState;
        }
        case 'SET-USER-PROFILE': {
            return {...state,profile: action.profile}

        }
        case 'SET-USER-NAME': {
            return {...state,profile: action.fullName}

        }
        case 'SET-STATUS':  {
            return {...state,
                status: action.status}

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

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', text
    } as const
};

export const setUserProfileAC = (profile: ProfileType) => {

        return {
            type: 'SET-USER-PROFILE',profile
        } as const
};
export const setUserNameAC = (fullName: ProfileType) => {
        return {
            type: 'SET-USER-NAME',fullName
        } as const
};
export const setStatusActionCreator = (status: string) => {
    return {
        type: 'SET-STATUS',status
    } as const
};
export const getStatusThunkCreator = (userId:number) => (dispatch: Dispatch<any>, getState: () => AppStateType ) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(toggleIsFetchingAC(true))
            dispatch(setStatusActionCreator(response.data))
            dispatch(toggleIsFetchingAC(false))
        });

}

export const getUpdateStatusThunkCreator = (status:number) => (dispatch: Dispatch<any>, getState: () => AppStateType ) => {
    return profileAPI.updeateStatus(status)
        .then(response => {
            dispatch(toggleIsFetchingAC(true))
          if(response.data.resultCode === 0) {
              dispatch(setStatusActionCreator(response.data))
          }
            dispatch(toggleIsFetchingAC(false))
        });

}

export const getProfileUserThunkCreator = (userId:number) => (dispatch: Dispatch<any>, getState: () => AppStateType ) => {
    return usersAPI.getProfileUser(userId)
        .then(response => {
            dispatch(toggleIsFetchingAC(true))
            dispatch(setUserProfileAC(response.data))
            dispatch(toggleIsFetchingAC(false))
        });

    }


export default ProfileReducer