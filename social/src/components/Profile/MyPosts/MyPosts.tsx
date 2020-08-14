import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsPropTypes} from "../../redux/redux";

type PropsType = {
    posts: Array<PostsPropTypes>
}

const MyPosts = ({posts}: PropsType) => {

    let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();


    let addPost = () => {

            let text = newPostRef.current && newPostRef.current.value;
            alert(text)

    }


    const postsDataEl = posts.map(el => <Post message={el.messages} likesCount={el.likesCount}/> )
    return (
        <div className={s.posts}>
            <div>
                MyPost
            </div>
            <div>
                <div>
                <textarea ref={newPostRef}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.postsItems}>
                {postsDataEl}
            </div>
        </div>
    );
}
export default MyPosts