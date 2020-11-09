import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props:PropsType) => {

    return(
        <div className={s.profileInfo}>
            <div>
                {props.profile?.fullName}
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/03/30/13/01/sun-3275314_960_720.jpg'/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile?.photos.large || undefined}/>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo