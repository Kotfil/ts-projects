import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/state';

export let rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree();








