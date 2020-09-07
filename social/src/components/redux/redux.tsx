import {rerenderEntireThree} from "../../render";

export type stateObjectPropTypes = {
    profilePage: profilePagePropTypes
    dialogsPage: dialogsPagePropTypes
    sidebarSlide: sidebarPagePropTypes
}
export type profilePagePropTypes = {
    newPostText: string
    posts: Array<PostsPropTypes>
}
export type sidebarPagePropTypes = {
    friends: Array<FriendsPropTypes>
}
export type dialogsPagePropTypes = {
    newMessageText: string
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>

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

let state: stateObjectPropTypes = {
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
};
export let addPost = () => {
    let newPost: PostsPropTypes = {
        id: 5,
        messages: state.profilePage.newPostText,
        likesCount: 22
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireThree(state);
};
export let updateNewPostText = (newPostText: string) => {

    state.profilePage.newPostText = newPostText;
    rerenderEntireThree(state);
};
export let addMessage = () => {
    let newMessage: DialogsPropTypes = {
        id: 8,
        messages: state.dialogsPage.newMessageText
    };
    state.dialogsPage.dialogs.push(newMessage);
    rerenderEntireThree(state);
};
export let updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireThree(state);
};

export default state;