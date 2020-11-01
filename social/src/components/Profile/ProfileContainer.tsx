import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import {ProfileType, setUserProfile} from "../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {Dispatch} from "redux";

type PathParamsUserId = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type PropsType = MapStatePropsType | MapDispatchPropsType

function ProfileContainer(props: PropsType) {
    useEffect(() => {
        let userId = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile ` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            });
    }, [])
    return (
        <Profile profile={props.profile}/>
    )

}
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let mapDispatchToProps = (dispatch: Dispatch) => {


}

export default connect (mapStateToProps,{setUserProfile})(Profile)

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