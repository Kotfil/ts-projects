import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PTposts = {
    posts: Array<PTpostObj>
}
export type PTpostObj = {
    id: number
    message: string
    likesCount: number
}

export type PTdialogs = {
    dialogs: Array<PTdialogsObj>
}

export type PTdialogsObj = {
    id: number
    name: string
}

export type PTmessage = {
    message: Array<PTmessageObj>
}

export type PTmessageObj = {
    id: number
    message: string
}

let posts = [
    {id: 1, message: 'Hello', likesCount: 22},
    {id: 2, message: 'How Are You?', likesCount: 32},
];
let message = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'Okey'},

];
let dialogs: Array<PTdialogsObj> = [
    {id: 1, name: 'Filipp'},
    {id: 2, name: 'Vika'},
    {id: 3, name: 'SSSR'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Ann'},
];



ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} message={message}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
