import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {

    const dialogsDataEl = state.dialogs.map(e => <DialogsItem id={e.id} name={e.name} /> );
    const messagesDataEl = props.messages.map(e => <Message messages={e.messages} key={e.id} /> );

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messagesDataEl}K
            </div>
        </div>

    );

};

export default Dialogs;