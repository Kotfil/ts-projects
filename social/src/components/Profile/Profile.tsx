import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsPropTypes} from "../redux/redux";

type PropsType = {
    posts: Array<PostsPropTypes>
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