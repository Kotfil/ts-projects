import React, {useState} from "react";

type PropsType = {
    on: boolean
}


function OnoffU(props: PropsType) {
    console.log('Rendering');


    let [on,setOn] = useState(false);
    console.log("on" + on);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'green'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'red': 'white'
    };
    const indicatorStyle = {
        width:'30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'red': 'green'
    };
return <div>
    <div style={onStyle} onClick={() => {setOn(true)} }>On</div>
    <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
    <div style={indicatorStyle}></div>
</div>
}

export default OnoffU;