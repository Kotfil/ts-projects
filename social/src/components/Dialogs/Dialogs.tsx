import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import {PTdialogs, PTmessages} from "../../index";
import Message from "./Message/Message";

export type PropsType = {
    dialogs: Array<PTdialogs>
    messages: Array<PTmessages>
}

const Dialogs = (props: PropsType) => {

    const dialogsDataEl = props.dialogs.map(e => <DialogsItem id={e.id} name={e.name} /> );
    const messagesDataEl = props.messages.map(e => <Message messages={e.messages} id={e.id} /> );

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messagesDataEl}
            </div>
        </div>

    );

};

export default Dialogs;