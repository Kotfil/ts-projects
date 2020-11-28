import React, {useState} from "react";

type MusicStatusPropsType = {
    status: string
}

const MusicStatus = (props: MusicStatusPropsType) => {
    let [editMode,setEditMode] = useState(false);

    return(
        <div>
            {!editMode &&   <div><span onClick={() => setEditMode(true)}>{props.status}</span></div>}
            {editMode &&  <div><input autoFocus={true} onBlur={() => setEditMode(false)} value={props.status}/></div>}
    </div>)
}

export default MusicStatus;