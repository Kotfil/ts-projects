import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, profilePagePropTypes, storeType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: storeType
}

const Profile = () => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer  />
    </div>
    );
}
export default Profile