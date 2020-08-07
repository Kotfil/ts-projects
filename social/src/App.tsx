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
import {dialogsPagePropTypes, profilePagePropTypes, stateObjectPropTypes} from "./components/redux/redux";
import Sidebar from "./components/Sidebr/Sidebar";

type PropsType = {
    state: stateObjectPropTypes
}
const App = (props : PropsType) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                <Route exact  path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />}/>
                <Route exact  path ='/sidebar' render={() => <Sidebar friends={props.state.sidebarSlide.friends} />}/>
                <Route exact  path='/news' render={News}/>
                <Route exact  path='/music' render={Music}/>
                <Route exact path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

