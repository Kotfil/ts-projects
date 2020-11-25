import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, profilePagePropTypes, storeType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

const Profile = (props:PropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={s.content}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer  />
    </div>
    );
}
export default Profile