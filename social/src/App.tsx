import React, {PropsWithChildren} from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebr/Sidebar";
import store, {storeType, ActionsTypes} from "./components/redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App  = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile />}/>
                <Route exact  path='/dialogs' render={() => <DialogsContainer  />}/>
                {/*<Route exact  path ='/sidebar' render={() => <Sidebar  />}/>*/}
                <Route exact  path='/news' render={News}/>
                <Route exact  path='/music' render={Music}/>
                <Route exact path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

