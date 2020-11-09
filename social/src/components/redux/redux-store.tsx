import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";
import {ActionsTypes, stateObjectPropTypes} from "./store";
import UsersReducer from "./users-reducer";

export type newStoreType = {
    getState: () => stateObjectPropTypes
    dispatch: (action: ActionsTypes) => void
}

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebarPage: SidebarReducer,
    usersPage: UsersReducer,
    authPage: AuthReducer
});

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store