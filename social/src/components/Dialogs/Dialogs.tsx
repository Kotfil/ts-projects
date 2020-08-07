import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import state, {dialogsPagePropTypes, stateObjectPropTypes} from "../redux/redux";



const Dialogs = ({messages,dialogs}: dialogsPagePropTypes) => {

    const dialogsDataEl = messages.map(e => <DialogsItem id={e.id} name={e.name} /> );
    const messagesDataEl = dialogs.map(e => <Message messages={e.messages} key={e.id} /> );

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