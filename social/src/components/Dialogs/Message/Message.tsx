import React from "react";
import s from './../Dialogs.module.css'

export type PropsType = {
    messages: string
}


const Message = (props: PropsType) => {

    return(
        <div className={s.message}>{props.messages}</div>
    )
};

export default Message