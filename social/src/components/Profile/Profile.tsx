import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PTpost} from "../../index";

type PropsType = {
    posts: Array<PTpost>
}


const Profile = ({posts}: PropsType) => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts} />
    </div>
    );
}
export default Profile