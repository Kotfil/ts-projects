import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, PostsPropTypes, updateNewPostTextActionCreator} from "../../redux/state";

type PropsType = {
    posts: Array<PostsPropTypes>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = ({posts, newPostText, dispatch}: PropsType) => {
    const postsDataEl = posts.map(el => <Post message={el.messages} likesCount={el.likesCount}/>);
    let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPoster = () => {
        dispatch(addPostActionCreator())
    };

    const postChange = () => {
       // let text = updateNewPostText(newPostRef.current ? newPostRef.current.value : '');
        if (newPostRef.current) {
            dispatch(updateNewPostTextActionCreator(newPostRef.current.value));
            newPostRef.current.value = '';
        }

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