import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {UsersPropTypes} from "../redux/store";
import {
    followSuccess,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    toggleIsFollowingProgressAC,
    unfollowSuccess,
    getUsersThunkCreator,
    FollowType,
    UnfollowType,
    SetUsersType,
    setCurrentPageType,
    toggleIsFollowingProgressType,
    toggleIsFetchingType, followThunkCreator, unfollowThunkCreator
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type mapStateToPropsPropType = {
    users: Array<UsersPropTypes>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type OwnProps = {}

export type UsersPropsType = mapStateToPropsPropType & mapDispatchPropType & OwnProps

class UsersContainer extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
        this.props.getUsersThunkCreator();
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(data.items)
            })
    }

    render(): React.ReactNode {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.followThunkCreator}
                    unfollow={this.props.unfollowThunkCreator}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgressAC}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type mapDispatchPropType = {
    followAC: (userId: number) => FollowType
    unfollowAC: (userId: number) => UnfollowType
    setUsersAC: (users: Array<UsersPropTypes>) => SetUsersType
    setCurrentPageAC: (currentPage: number) => setCurrentPageType
    toggleIsFetchingAC: (isFetching: boolean) => toggleIsFetchingType
    toggleIsFollowingProgressAC: (isFetching: boolean, userID: number) => toggleIsFollowingProgressType
    getUsersThunkCreator: () => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}

export default compose<React.ComponentElement<any, any>>(
    withAuthRedirect,
    connect<mapStateToPropsPropType,
        mapDispatchPropType, OwnProps,
        AppStateType>(mapStateToProps, {
        followAC: followSuccess,
        unfollowAC: unfollowSuccess,
        getUsersThunkCreator,
        setUsersAC,
        setCurrentPageAC,
        toggleIsFetchingAC,
        toggleIsFollowingProgressAC,unfollowThunkCreator,followThunkCreator}
) (UsersContainer))