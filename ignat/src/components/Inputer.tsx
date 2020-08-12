import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {checkArr} from "../App";



type PropTypes = {
    setInputer: (e: any) => void
    onKeyInput: (e:any) => void
    changeInput: (e: any) => void
    addName: () => void
    inputer: string
    inputCheck:Array<checkArr>
}

function Inputer(props: PropTypes) {

    return(
        <div>
            <input
                type='text'
                value={props.inputer}
                onChange={props.changeInput}
                onKeyPress={props.onKeyInput}
            />
            <button onClick={() => props.onKeyInput}>Enter</button>
            <button onClick={props.addName}>Enter</button>
            <div>
                {props.inputCheck.map(t =>
                <li key={t.id}><span>{t.name}</span></li>)}
            </div>

        </div>
    )
}

export default Inputer;