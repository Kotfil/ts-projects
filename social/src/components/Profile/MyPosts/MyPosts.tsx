import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsPropTypes} from "../../redux/store";

type PropsType = {
    posts: Array<PostsPropTypes>
    addPost: () => void
    valueChange: (text: string) => void
    newPostText: string
}

const MyPosts = ({posts, valueChange, addPost,newPostText}: PropsType) => {

    const postsDataEl = posts.map(el => <Post key={el.id} message={el.messages} likesCount={el.likesCount}/>);

    let onAddPost = () => {
        addPost()
    };

    const valueChanger = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        valueChange(text)
    };
    return (
        <div className={s.posts}>
            <div>
                MyPost
            </div>
            <div>
                <div>
                <textarea value={newPostText}
                          onChange={valueChanger}>
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
