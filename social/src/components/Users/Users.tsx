import React, {MouseEvent} from "react";
import s from "./Users.module.css"
import userPhoto from './../Img/userPhoto.jpg'
import {UsersPropTypes} from "../redux/store";
import {NavLink} from "react-router-dom";

type userType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UsersPropTypes>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow}: userType) => {
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
                users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={`./profile/+ ${user.id}`}>
                                     <div>
                                          <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                               className={s.userPhoto}/>
                                     </div>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    !user.followed ? <button onClick={() => {
                                            follow(user.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            unfollow(user.id)
                                        }}>Unfollow</button>
                                }
                        </div>
                        </span>
                    <span>
                        <span><div>{user.name}</div><div>{user.status}</div></span>
                        <span>
                            {/*<div>{user.location.country}</div><div>{user.location.city}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users
