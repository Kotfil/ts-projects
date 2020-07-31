import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import {PTdialogsObj, PTmessageObj, PTpostObj} from "./index";

type PropsType = {
    dialogs: Array<PTdialogsObj>
    message: Array<PTmessageObj>
    posts: Array<PTpostObj>
}

const App = ({dialogs,message, posts}:PropsType) => {
    debugger
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile posts={posts}/>}/>
                <Route exact  path='/dialogs' render={() => <Dialogs message={message} dialogs={dialogs}/>}/>
                <Route exact  path='/news' render={News}/>
                <Route exact  path='/music' render={Music}/>
                <Route exact path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

