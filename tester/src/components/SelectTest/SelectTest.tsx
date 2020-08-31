import React, {useState} from "react";
import toggleClass from './SelectTest.module.css'

type namesType = {
    value: string
    title: string
}
type PropType = {
    onChange: (value: string) => void
    value?: any
    names: namesType[]
}

export function SelectTest(props: PropType) {
    const selectNames = props.names.find(f => f.value === props.value);
    return(

        <>
            <h3>{selectNames && selectNames.title}</h3>
            <div>
                {
                    props.names.map(i=><div key={i.value}>{i.title}</div>)
                }
            </div>
            </>
    )
}
