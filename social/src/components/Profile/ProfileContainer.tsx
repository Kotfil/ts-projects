import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import {getProfileUserThunkCreator, ProfileType, setUserNameAC, setUserProfileAC} from "../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {compose, Dispatch} from "redux";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {setCurrentPageAC} from "../redux/users-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


type PathParamsType = {
    userId: string,
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
}
type MapDispatchPropsType = {
    getProfileUserThunkCreator: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

        useEffect(() => {

            let userId = +props.match.params.userId;
            if (!userId) {
                userId = 2
            }
            props.getProfileUserThunkCreator(userId)
            props.getUserStatus(userId)
        },[] )

        return (
            <Profile {...props} />
        )

    }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return  {
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }}


export default compose<React.ComponentType>(
        connect<MapStatePropsType,
            MapDispatchPropsType, {},
            AppStateType>(mapStateToProps, {getProfileUserThunkCreator}),
        withRouter,
        // withAuthRedirect
)(ProfileContainer)


