import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PTpostObj = {
    id: number
    message: string
    likesCount: number
}
export type PTdialogsObj = {
    id: number
    name: string
}
 type PTmessagesObj = {
    messages: string
}

let posts = [
    {id: 1, message: 'Hello', likesCount: 22},
    {id: 2, message: 'How Are You?', likesCount: 32},
];
let messages = [
    {id: 1, messages: 'Hello'},
    {id: 2, messages: 'How are you'},
    {id: 3, messages: 'Hello'},
    {id: 4, messages: 'Okey'},

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
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
