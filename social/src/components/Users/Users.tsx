import React, {MouseEvent} from "react";
import s from "./Users.module.css"
import userPhoto from './../Img/userPhoto.jpg'
import {UsersPropTypes} from "../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type userType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UsersPropTypes>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean,userID: number) => void
    followingInProgress: number[]
}

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow,toggleIsFollowingProgress,followingInProgress}: userType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className={currentPage === p ? s.selectedPage : undefined}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>

                })}
            </div>
            <div>
            </div>
            {
                users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                     <div>
                                          <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                               className={s.userPhoto}/>
                                     </div>
                                </NavLink>
                            </div>
                            <div>
                                {!u.followed
                                        ? <button disabled={followingInProgress.some(id => id === u.id)}  onClick={() => {follow(u.id)}}>Follow</button>
                                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {unfollow(u.id)}}>Unfollow</button>
                                }
                        </div>
                        </span>
                    <span>
                        <span><div>{u.name}</div><div>{u.status}</div></span>
                        <span>
                            {/*<div>{u.location.country}</div><div>{u.location.city}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users
