import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropTypes, MessagesPropTypes,} from "../redux/store";
import { DialogsPropsType } from "./DialogsContainer";
import { Redirect } from "react-router-dom";

const Dialogs = (props:DialogsPropsType) => {
    const messagesDataEl = props.messages.map(e => <DialogsItem id={e.id} name={e.messages} key={e.id}/>);
    const dialogsDataEl = props.dialogs.map(e => <Message key={e.id} messages={e.name} />);

    let onAddMessage = () => {
        props.addMessage()
    };

    let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextMessage = e.currentTarget.value;
       props.changeMessage(newTextMessage)
    }
        if(!props.isAuth) return <Redirect to={'/login'} />
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
                          value={props.newMessageText}
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