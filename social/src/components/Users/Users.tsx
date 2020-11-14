import React, {MouseEvent} from "react";
import s from "./Users.module.css"
import userPhoto from './../Img/userPhoto.jpg'
import {UsersPropTypes} from "../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                        ? <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "424d30ae-6281-4a44-aa2a-443211a7e193"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0) {
                                                    follow(u.id)
                                                }
                                            });
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "34a9fca2-85bd-4469-b62d-e4d2b8bcaf19"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0) {
                                                    unfollow(u.id)
                                                }
                                            })}}>Unfollow</button>
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
