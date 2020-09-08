import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePagePropTypes} from "../redux/state";

type PropsType = {
    profilePage: profilePagePropTypes
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 dispatch={props.dispatch}
                 newPostText={props.profilePage.newPostText}
        />
    </div>
    );
}
export default Profile