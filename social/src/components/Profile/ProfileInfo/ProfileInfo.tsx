import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={s.profileInfo}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/03/30/13/01/sun-3275314_960_720.jpg'/>
            </div>
            <div className={s.avatar}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo