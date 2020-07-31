import React from "react";
import s from './../Dialogs.module.css'
import {PTmessage} from "../../../index";

const Message = ({message}: PTmessage) => {
    return <div className={s.message}>{message}</div>
};

export default Message