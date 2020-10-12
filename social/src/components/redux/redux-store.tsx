import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";
import {ActionsTypes, stateObjectPropTypes} from "./store";

export type newStoreType = {
    getState: () => stateObjectPropTypes
    dispatch: (action: ActionsTypes) => void
}

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebarPage: SidebarReducer
});

let store = createStore(reducers);


export default store