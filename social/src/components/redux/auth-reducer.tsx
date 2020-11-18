import React from "react";
import {ActionsTypes, authPropTypes} from "./store";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {authAPI, usersAPI} from "../../api/api";
import {toggleIsFollowingProgressAC, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
//
// export type authPropType = {
//     id: null | number
//     email: null | string
//     login: null | string
// }

const initialState= {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
};


export type StateType = typeof initialState

export const authReducer = (state  = initialState, action: ActionsTypes):StateType   => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id:number, login: string, email: string) => ({type: SET_USER_DATA,data: {id,login,email}}) as const

export const authThunkCreator = () => {
    return (dispatch: Dispatch<any>, getState: () => AppStateType ) => {

        authAPI.me()
            .then(data => {
                if (data.data.resultCode === 0) {
                    let {id, email,login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }}



export default authReducer