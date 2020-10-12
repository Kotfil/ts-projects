import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {storeType}  from '../../redux/store'
import MyPosts from "./MyPosts";
import ContextStore from "../../redux/create-context";

type PropsType = {
    store: storeType
}

const MyPostsContainer = () => {
    return (
        <ContextStore.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };

                const postChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)

                };

                return <MyPosts
                    updateNewPostText={postChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </ContextStore.Consumer>
    );
}

export default MyPostsContainer;