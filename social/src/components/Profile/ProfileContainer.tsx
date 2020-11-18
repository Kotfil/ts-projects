import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import {ProfileType, setUserNameAC, setUserProfileAC} from "../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {Dispatch} from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {setCurrentPageAC} from "../redux/users-reducer";


type PathParamsType = {
    userId: string,
}

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserName: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


function ProfileContainer(props: PropsType) {
    useEffect(() => {
        let userId = +props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId )
            .then(response => {
                props.setUserName(response.data)
            });
    }, [])
    return (
        <Profile profile={props.profile}/>
    )

}
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        setUserName: (profile)  => {
            dispatch(setUserNameAC(profile))
        }
    }
}

const WithRouterComponent = withRouter(ProfileContainer)
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType> (mapStateToProps,{setUserName: setUserNameAC})(WithRouterComponent)

