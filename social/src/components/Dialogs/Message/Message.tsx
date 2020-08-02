import React from "react";
import s from './../Dialogs.module.css'
import {PTdialogsObj, PTmessagesObj} from "../../../index";

type PropsType = {
    dialogs: Array<PTdialogsObj>
    messages: string
}

const Message = ({messages}: PropsType) => {
    return <div className={s.message}>{messages}</div>
};

export default Message