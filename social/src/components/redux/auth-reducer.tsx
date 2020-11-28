import React from "react";
import {ActionsTypes, authPropTypes} from "./store";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {authAPI, usersAPI} from "../../api/api";
import {toggleIsFollowingProgressAC, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState= {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false
};


export type StateType = typeof initialState

export const authReducer = (state  = initialState, action: ActionsTypes):StateType => {
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

export const setAuthUserData = (email: string,id:number, login: string) => ({type: SET_USER_DATA,data: {email,id,login}}) as const
export const authThunkCreator = () => {
    return (dispatch: Dispatch<any>, getState: () => AppStateType ) => {
        authAPI.me().then(data => {
                if (data.data.resultCode === 0) {
                    let {email,id,login} = data.data.data;
                    dispatch(setAuthUserData(email,id ,login));
                }
            })
    }}



export default authReducer