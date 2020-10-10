import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, profilePagePropTypes, storeType} from "../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: storeType
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer  store={props.store}/>
    </div>
    );
}
export default Profile