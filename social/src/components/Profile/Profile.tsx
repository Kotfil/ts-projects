import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, profilePagePropTypes, storeType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
}

const Profile = (props:PropsType) => {
    return (
        <div className={s.content}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer  />
    </div>
    );
}
export default Profile