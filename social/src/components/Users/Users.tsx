import React from "react";
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import userPhoto from './../Img/userPhoto.jpg'
import axios from 'axios';

type userType = {
    name: string
    id: number
    status: string | null
    photos: any

}

export default class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            });
    }

    render(): React.ReactNode {
        return (
            <div className={s.users}>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span></span>
                        <div> <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/></div>
                        <div>
                            {
                                !user.followed ?
                                <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                            }
                        </div>
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

