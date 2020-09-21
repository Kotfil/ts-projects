import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import store, {
    ActionsTypes,
    addPostActionCreator,
    storeType,
    updateNewPostTextActionCreator
} from "../../redux/state";
import MyPosts from "./MyPosts";

type PropsType = {
    store: storeType
}

const MyPostsContainer = ({store}: PropsType) => {
    let state = store.getState()

    let addPost = () => {
        store.dispatch(addPostActionCreator())
    };

    const postChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action)

    };

    return (
        <div>
            <MyPosts
                updateNewPostText={postChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
        </div>
    );
};
export default MyPostsContainer