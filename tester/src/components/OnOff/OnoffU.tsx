import React, {useState} from "react";

export type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnoffU(props: PropsType) {
    console.log('Rendering');
    let [on,setOn] = useState(false);
    console.log("on" + props.on);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'green'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'red': 'white'
    };
    const indicatorStyle = {
        width:'30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'red': 'green'
    };
return <div>
    <div style={onStyle} onClick={() => {props.onChange(true)} }>On</div>
    <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
    <div style={indicatorStyle}></div>
</div>
}
