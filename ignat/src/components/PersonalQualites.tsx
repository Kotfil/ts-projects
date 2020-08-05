import s from "./PersonalQualites.module.css";
import React from "react";
import {arrPropType, PropType} from "../App";

type PropTypes = {
    removeTask: (taskId: number) => void
    arrQuality: Array<arrPropType>
    changeFilter: (value: 'all'|'active' |'completed') => void
}



const PersonalQualites = (props: PropTypes) => {
    let taskElements = props.arrQuality.map(t =>
        <li key={t.id}>{t.quality}
        <input type='checkbox' checked={t.status}/>
        <button onClick={() => {props.removeTask(t.id)}}>X</button>
        </li>);
    return (
        <div className={s.wrapper}>
            <h2>Hello</h2>
            <ul className={s.qualitysName}>{taskElements}</ul>
            <div>
                <button onClick={() => props.changeFilter('all')}>All</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}
export default PersonalQualites;