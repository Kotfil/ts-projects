import React, {ChangeEvent, RefObject, MouseEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {PostsPropTypes} from '../../redux/store'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
type mapStateToPropsPropType = {
    posts: Array<PostsPropTypes>
    newPostText: string
}
type mapDispatchPropType = {
    addPost: () => void,
    valueChange: (text: string) => void
}

    let mapStateToProps = (state: AppStateType): mapStateToPropsPropType => {
        return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText,
        }
    };

    let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropType => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator())
            },
            valueChange: (text: string) => {
                return dispatch(updateNewPostTextActionCreator(text));
            }
        }
    };

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
