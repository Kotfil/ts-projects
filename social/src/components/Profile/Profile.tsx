import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2018/03/30/13/01/sun-3275314_960_720.jpg'/>
            Content
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts/>
    </div>);
}
export default Profile