import React, {ChangeEvent, RefObject} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import state, {
    ActionsTypes,
    dialogsPagePropTypes,
    DialogsPropTypes, MessagesPropTypes,
    stateObjectPropTypes,
} from "../redux/store";

type PropTypes = {
    newMessageText: string
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
    addMessage: () => void
    updateNewMessageText: (newTextMessage: string) => void
}
const Dialogs = ({newMessageText,dialogs,messages,addMessage,updateNewMessageText}: PropTypes) => {
    const dialogsDataEl = messages.map(e => <DialogsItem id={e.id} name={e.name}/>);
    const messagesDataEl = dialogs.map(e => <Message key={e.id} messages={e.messages} />);


    let onAddMessage = () => {
        addMessage()
    };

    let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextMessage = e.currentTarget.value
        updateNewMessageText(newTextMessage)
    }



    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messagesDataEl}
            </div>
            <div className={s.area}>
                <textarea
                          value={newMessageText}
                          onChange={changeMessage}
                > </textarea>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>

            </div>

        </div>

    );

};

export default Dialogs;