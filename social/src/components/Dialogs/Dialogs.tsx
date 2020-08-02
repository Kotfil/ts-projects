import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {PTdialogsObj} from "../../index";

export type PropsType = {
    dialogs: Array<PTdialogsObj>
    messages: string
}

const Dialogs = ({messages, dialogs}:PropsType) => {

    const dialogsDataEl = dialogs.map(e => <DialogsItem id={e.id} name={e.name}/> );
    const messageDataEl = messages.map(el => <Message key={el.id} messages={el.messages}/> );
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messageDataEl}
            </div>
        </div>

    );

};

export default Dialogs;