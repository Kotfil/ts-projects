import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                MyPost
            </div>
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
            <Post message='Hello' likesCount={22}/>
            <Post message='How Are You?' likesCount={22}/>

            </div>
        </div>
    );
}
export default MyPosts