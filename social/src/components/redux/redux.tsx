export type stateObjectPropTypes = {
    profilePage: profilePagePropTypes
    dialogsPage: dialogsPagePropTypes
}

type profilePagePropTypes = {
    posts: Array<PostsPropTypes>
}
type dialogsPagePropTypes = {
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
}

type PostsPropTypes = {
    id: number
    messages: string
    likesCount: number
}
type DialogsPropTypes = {
    id: number
    messages: string
}
type MessagesPropTypes = {
    id: number
    name: string
}

let state: stateObjectPropTypes = {
    profilePage: {
        posts: [
            {id: 1, messages: 'Hello', likesCount: 22},
            {id: 2, messages: 'How Are You?', likesCount: 32},
        ]
    },
    dialogsPage: {
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
        ]
    }

};

export default state;