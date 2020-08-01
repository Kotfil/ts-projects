import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PTpost = {
    id: number
    messages: string
    likesCount: number
}
let posts: Array<PTpost> = [
    {id: 1, messages: 'Hello', likesCount: 22},
    {id: 2, messages: 'How Are You?', likesCount: 32},
];


export type PTdialogs= {
    id: number
    name: string
}
let dialogs: Array<PTdialogs> = [
    {id: 1, name: 'Filipp'},
    {id: 2, name: 'Vika'},
    {id: 3, name: 'SSSR'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Ann'},
];

export type PTmessages = {
    id: number
    messages: string
}


let messages: Array<PTmessages> = [
    {id: 1, messages: 'ddddd'},
];



ReactDOM.render(
    <React.StrictMode>
        <App
            posts={posts}
            messages={messages}
            dialogs={dialogs}
            />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
