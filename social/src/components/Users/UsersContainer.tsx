import React from "react";
import {connect} from "react-redux";
import UsersC from "./Users";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {PostsPropTypes, UsersPropTypes} from "../redux/store";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../redux/users-reducer";

type mapStateToPropsPropType = {
    users: Array<UsersPropTypes>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchPropType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropTypes>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapStateToPropsPropType & mapDispatchPropType

let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersPropTypes>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },


    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);
export default UsersContainer;