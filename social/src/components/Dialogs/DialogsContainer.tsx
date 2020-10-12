import React from "react";
import Dialogs from "./Dialogs";
import {storeType} from "../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import ContextStore from "../redux/create-context";

type PropTypes = {
    store: storeType
}
const DialogsContainer = () => {
    return (
        <ContextStore.Consumer>
            {
                (store) => {
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
                                updateNewMessageText={changeMessage}/>
                        </>

                    );
                }
            }
        </ContextStore.Consumer>
    )
}

export default DialogsContainer;