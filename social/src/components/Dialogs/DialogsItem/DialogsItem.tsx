import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {PTdialogs, PTdialogsObj, PTmessageObj, PTpostObj} from "../../../index";

type PropsType = {
   id: number
    name: string
}

const DialogsItem = (props: PropsType) => {

    let path = '/dialogs/' + props.id;
    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};
export default DialogsItem