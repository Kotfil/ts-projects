import React from "react";
import Dialogs from "./Dialogs";
import {DialogsPropTypes, MessagesPropTypes} from "../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsPropType = {
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
    newMessageText: string
    isAuth: boolean
}

type mapDispatchPropType = {
    addMessage: () => void
    changeMessage: (newTextMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsPropType & mapDispatchPropType


let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
    return {
        isAuth: state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessage: (newTextMessage: string) => {
            dispatch(updateNewMessageTextActionCreator(newTextMessage))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;