import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import { setUserProfile} from "../redux/profile-reducer";
import Preloader from "../common/Preloader";


type mapStateToPropsPropType = {
    profile: null
    setUserProfile: (profile: number) => void
}

class ProfileContainer extends React.Component<mapStateToPropsPropType, any> {
    constructor(props: mapStateToPropsPropType) {
         super(props);
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
                  props.setUserProfile(response.data)
             });
     }
     render(): React.ReactNode {
         return this.props.profile ? <Profile profile={this.props.profile} {...this.props}/> : <Preloader/>
     }
 }
 const mapStateToProps = (state: AppStateType) => ({
     profile: state.profilePage.profile
 })

export default connect(mapStateToProps,{setUserProfile})(Profile)