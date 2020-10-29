import React, {MouseEvent} from "react";
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import userPhoto from './../Img/userPhoto.jpg'
import axios from 'axios';

type userType = {
    name: string
    id: number
    status: string | null
    photos: any
    onPageChanged: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export default class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

            .then(response => {

             return    this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render(): React.ReactNode {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.users}>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : undefined}
                                     onClick={() => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>

                    })}
                </div>
                <div>
                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span>
                            <div><img src={user.photos.small != null ? user.photos.small : userPhoto}
                                      className={s.userPhoto}/></div><div>
                            {
                                !user.followed ? <button onClick={() => {
                                        this.props.follow(user.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.unfollow(user.id)
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
}

