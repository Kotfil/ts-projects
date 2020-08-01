import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import Dialogs from './components/Dialogs/Dialogs';
import {PTdialogs, PTmessages, PTpost} from "./index";

export type PropsType = {
    dialogs: Array<PTdialogs>
    messages: Array<PTmessages>
    posts: Array<PTpost>
}

const App = ({dialogs,messages,posts}:PropsType) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile posts={posts}/>}/>
                <Route exact  path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />}/>
                <Route exact  path='/news' render={News}/>
                <Route exact  path='/music' render={Music}/>
                <Route exact path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

