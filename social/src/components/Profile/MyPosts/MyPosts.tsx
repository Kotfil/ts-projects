import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PTposts} from "../../../index";

const MyPosts = ({posts}: PTposts) => {

    const postsDataEl = posts.map(el => <Post
        message={el.message}
        likesCount={el.likesCount}/> )
    return (
        <div className={s.posts}>
            <div>
                MyPost
            </div>
            <div>
                <div>
                <textarea> </textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.postsItems}>

                {postsDataEl}

            </div>
        </div>
    );
}
export default MyPosts