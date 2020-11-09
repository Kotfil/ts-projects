import React from "react";
import {ActionsTypes} from "./store";

const SET_USER_DATA = 'SET_USER_DATA'

export type authPropType = {
    id: null
    email: null
    login: null
}

const initialState = {
    id: null,
    email: null,
    login: null,
};
export const authReducer = (state:authPropType  = initialState, action: ActionsTypes)  => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,action.data
            }

        default:
            return state;
    }
};
export const setUserData = (id,email,loigin) => ({type: SET_USER_DATA,data: {user}})

export default authReducer