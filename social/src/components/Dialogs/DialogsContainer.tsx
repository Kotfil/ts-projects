import React from "react";
import Dialogs from "./Dialogs";
import {storeType} from "../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";

type PropTypes = {
    store: storeType
}
const DialogsContainer = ({store}: PropTypes) => {

    let state = store.getState()

    const addMessage = () => {
        store.dispatch(addMessageActionCreator())
        };

    const changeMessage = (newTextMessage: string) => {
        store.dispatch(updateNewMessageTextActionCreator(newTextMessage))
    };

    return (
        <>
            <Dialogs
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText}
                addMessage={addMessage}
                updateNewMessageText={changeMessage} />
            </>

    );

};

export default DialogsContainer;