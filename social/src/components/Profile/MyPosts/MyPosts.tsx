import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsPropTypes} from "../../redux/redux";

type PropsType = {
    posts: Array<PostsPropTypes>
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

const MyPosts = ({posts,addPost,newPostText,updateNewPostText}: PropsType) => {
    const postsDataEl = posts.map(el => <Post message={el.messages} likesCount={el.likesCount}/> );
    let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPoster = () => {
        addPost(newPostRef.current ? newPostRef.current.value : '');
       if (newPostRef.current)
           return newPostRef.current.value = ''
    };

    const postChange = () => {
        updateNewPostText(newPostRef.current ? newPostRef.current.value : '');
        if (newPostRef.current)
            return newPostRef.current.value = ''
    };

    return (
        <div className={s.posts}>
            <div>
                MyPost
            </div>
            <div>
                <div>
                <textarea ref={newPostRef}
                          value={newPostText}
                          onChange={postChange}> </textarea>
                </div>
                <div>
                    <button onClick={addPoster}>Add Post</button>
                </div>
            </div>
            <div className={s.postsItems}>
                {postsDataEl}
            </div>
        </div>
    );
}
export default MyPosts