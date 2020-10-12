import React from "react";
import {ActionsTypes, FriendsPropTypes, sidebarPagePropTypes, stateObjectPropTypes} from "./store";

let initialState = {
    friends: [] as Array<FriendsPropTypes>
}


const SidebarReducer = (state = initialState, action: ActionsTypes) => {


    return state
}

export default SidebarReducer