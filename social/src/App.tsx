import React, {PropsWithChildren} from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from "./components/Sidebr/Sidebar";
import {storeType, ActionsTypes} from "./components/redux/state";

type PropType = {
    store: storeType
    dispatch: (action: ActionsTypes) => void
}
const App: React.FC<PropType> = (props: PropType) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact  path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                     dispatch={props.dispatch}
                                                                    />}/>
                <Route exact  path='/dialogs' render={() => <Dialogs  messages={props.store.getState().dialogsPage.messages}
                                                                      newMessageText={props.store.getState().dialogsPage.newMessageText}
                                                                      dispatch={props.dispatch}
                                                                      dialogs={props.store.getState().dialogsPage.dialogs}/>}/>
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

