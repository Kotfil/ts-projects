import {ProfileReducer} from '../redux/profile-reducer'
import {profilePagePropTypes} from "../redux/store";





test('user reducer should increment only age', () => {

    const startState = { id: 1, messages: 'TestRun', likesCount: 11 };
    const endState = ProfileReducer<profilePagePropTypes>(startState, { type: 'ADD-POST' })

    expect(endState.id).toBe(2);
    expect(endState.messages).toBe('TestRun');
});