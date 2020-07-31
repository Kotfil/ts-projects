import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PTposts} from "../../index";


const Profile = ({posts}: PTposts) => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts} />
    </div>
    );
}
export default Profile