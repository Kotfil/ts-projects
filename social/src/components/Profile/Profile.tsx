import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsPropTypes, profilePagePropTypes} from "../redux/redux";

type PropsType = {
    profilePage: profilePagePropTypes
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
    );
}
export default Profile