import {addPostActionCreator, ProfileReducer} from '../redux/profile-reducer'
import {PostsPropTypes, profilePagePropTypes} from "../redux/store";





test('user reducer should increment only age', () => {

    const startState: profilePagePropTypes = {
        posts: [
            {id: 1,messages: 'Hello programmer',likesCount: 1}
        ],
        newPostText: ''
    };
    const endState = ProfileReducer(startState, addPostActionCreator())

    expect(endState.posts.length).toBe(2)
});