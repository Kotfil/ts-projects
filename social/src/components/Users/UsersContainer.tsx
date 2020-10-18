import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {PostsPropTypes, UsersPropTypes} from "../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../redux/users-reducer";
type mapStateToPropsPropType = {
    users: Array<UsersPropTypes>
}
type mapDispatchPropType = {

}
let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersPropTypes>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;