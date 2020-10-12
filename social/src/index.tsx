import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store';
import ContextStore from './components/redux/create-context';

export let rerenderEntireThree = () => {

    ReactDOM.render(
        <ContextStore.Provider value={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </ContextStore.Provider>,
        document.getElementById('root')
    );
}
rerenderEntireThree();








