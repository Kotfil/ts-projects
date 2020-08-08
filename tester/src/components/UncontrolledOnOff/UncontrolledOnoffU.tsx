import React, {useState} from "react";

type PropsType = {
    onChange:(on: boolean) => void
}

function UncontrolledOnoffU(props: PropsType) {
    let [on, setOn] = useState(false);



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
    const onClickedTrue = () => {
        setOn(true);
        props.onChange(true)
    }
    const onClickedFalse = () => {
        setOn(false);
        props.onChange(false)
    }

return <div>
    <div style={onStyle} onClick={onClickedTrue}>On</div>
    <div style={offStyle} onClick={onClickedFalse} >Off</div>
    <div style={indicatorStyle}></div>
</div>
}

export default UncontrolledOnoffU;