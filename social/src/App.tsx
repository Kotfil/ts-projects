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
import store, {storeType, ActionsTypes} from "./components/redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropType = {
    store: storeType
}
const App: React.FC<PropType> = (props: PropType) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile store={store} />}/>
                <Route exact  path='/dialogs' render={() => <DialogsContainer  store={store}/>}/>
                <Route exact  path ='/sidebar' render={() => <Sidebar friends={props.store.getState().sidebarSlide.friends} />}/>
                <Route exact  path='/news' render={News}/>
                <Route exact  path='/music' render={Music}/>
                <Route exact path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

