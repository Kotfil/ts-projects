import {rerenderEntireThree} from './../../index';
export type stateObjectPropTypes = {
    profilePage: profilePagePropTypes
    dialogsPage: dialogsPagePropTypes
    sidebarSlide: sidebarPagePropTypes
}
export type profilePagePropTypes = {
    newPostText: string
    posts: Array<PostsPropTypes>
}
export type dialogsPagePropTypes = {
    newMessageText: string
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>

}
export type sidebarPagePropTypes = {
    friends: Array<FriendsPropTypes>
}
export type PostsPropTypes = {
    id: number
    messages: string
    likesCount: number
}
export type DialogsPropTypes = {
    id: number
    messages: string
}
export type MessagesPropTypes = {
    id: number
    name: string
}
export type FriendsPropTypes = {
    id: number
    name: string
}
export type storeType = {
    _state: stateObjectPropTypes
    getState: () => stateObjectPropTypes
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
};
export const updateNewPostTextActionCreator = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
};
export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
};
export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
};

export const store: storeType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, messages: 'Hello', likesCount: 22},
                {id: 2, messages: 'How Are You?', likesCount: 32},
            ]
        },
        dialogsPage: {
            newMessageText: '',
            dialogs: [
                {id: 1, messages: 'What time is it now?'},
                {id: 2, messages: 'Hello'},
                {id: 3, messages: 'Hey friend'},
                {id: 4, messages: 'Haha'},
            ],
            messages: [
                {id: 1, name: 'Filipp'},
                {id: 2, name: 'Vika'},
                {id: 3, name: 'SSSR'},
                {id: 4, name: 'Alena'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Ann'},
            ],

        },
        sidebarSlide: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Ignat'},
                {id: 3, name: 'Artem'},
            ],
        }
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsPropTypes = {
                id: 5,
                messages: this._state.profilePage.newPostText,
                likesCount: 22
            };
            this._state.profilePage.posts.push(newPost);
            rerenderEntireThree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            rerenderEntireThree();
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: DialogsPropTypes = {
                id: 8,
                messages: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.dialogs.push(newMessage);
            rerenderEntireThree();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            rerenderEntireThree();
        }

    }
};
export default store;