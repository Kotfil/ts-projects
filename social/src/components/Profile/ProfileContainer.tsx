import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import {ProfileType, setUserNameAC, setUserProfileAC} from "../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {Dispatch} from "redux";
import { withRouter } from "react-router-dom";
import {setCurrentPageAC} from "../redux/users-reducer";


type PathParamsType = {
    userId: string,
}

class RouteComponentProps<T> {

}

type MapStatePropsType = {
    fullName: string
}
type MapDispatchPropsType = {
    setUserName: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


function ProfileContainer(props: ProfileType) {
    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile ` )
            .then(response => {
                debugger
                props.setUserName(response.data)
            });
    }, [])
    return (
        <Profile profile={props.fullName}/>
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


export default connect (mapStateToProps,{setUserName: setUserNameAC})(ProfileContainer)

//
// class ProfileContainer extends React.Component<mapStateToPropsPropType, any> {
//
//     constructor(props: mapStateToPropsPropType) {
//
//          super(props);
//          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//              .then(response => {
//                   props.setUserProfile(response.data)
//              });
//      }
//      render(): React.ReactNode {
//          debugger
//          return this.props.profile ? <Profile profile={this.props.profile} {...this.props}/> : <Preloader/>
//      }
//  }
//  const mapStateToProps = (state: AppStateType) => ({
//      profile: state.profilePage.profile
//  })
//
// export default connect (mapStateToProps,{setUserProfile})(Profile)