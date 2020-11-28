import React, {useState} from 'react'

type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false)

    return (<div>
            {!editMode &&
            <div>
                <span onDoubleClick={() => {setEditMode(true)}}>{props.status}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={() => {setEditMode(false)}} value={props.status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;