import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, profilePagePropTypes, storeType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {getProfileUserThunkCreator, ProfileType} from "../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: ProfileType | null
    isAuth: boolean
    getProfileUserThunkCreator: (profile: any) => void
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