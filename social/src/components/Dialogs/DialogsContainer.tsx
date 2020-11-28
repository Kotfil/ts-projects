import React from "react";
import Dialogs from "./Dialogs";
import {DialogsPropTypes, MessagesPropTypes} from "../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type mapStateToPropsPropType = {
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
    newMessageText: string
}

type mapDispatchPropType = {
    addMessage: () => void
    changeMessage: (newTextMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsPropType & mapDispatchPropType


let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
    return {

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);