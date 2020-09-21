import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsPropTypes} from "../../redux/state";

type PropsType = {
    posts: Array<PostsPropTypes>
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}

const MyPosts = ({posts, newPostText, updateNewPostText, addPost}: PropsType) => {
    const postsDataEl = posts.map(el => <Post message={el.messages} likesCount={el.likesCount}/>);


    let onAddPost = () => {
        addPost()
    };

    const valueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        updateNewPostText(text)
    };


    return (
        <div className={s.posts}>
            <div>
                MyPost
            </div>
            <div>
                <div>
                <textarea value={newPostText}
                          onChange={valueChange}>
                </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={s.postsItems}>
                {postsDataEl}
            </div>
        </div>
    )
}
export default MyPosts
