import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {PTdialogsObj, PTmessageObj, PTpostObj} from "../../index";

type PropsType = {
    dialogs: Array<PTdialogsObj>
    message: Array<PTmessageObj>
}

const Dialogs = ({message, dialogs}:PropsType) => {

    const dialogsDataEl = dialogs.map(e => <DialogsItem id={e.id} name={e.name}/> );
    const messageDataEl = message.map(el => <Message id={el.id} message={el.message}/> );
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
export default Dialogs