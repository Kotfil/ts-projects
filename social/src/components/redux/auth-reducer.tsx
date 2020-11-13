import React from "react";
import {ActionsTypes, authPropTypes} from "./store";

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

export default authReducer