import React from "react";
import s from './../Dialogs.module.css'
import {PTdialogsObj, PTmessage, PTmessageObj} from "../../../index";

type PropsType = {
    dialogs: Array<PTdialogsObj>
    message: Array<PTmessageObj>
}

const Message = ({message}: PTmessage) => {
    return <div className={s.message}>{message}</div>
};

export default Message