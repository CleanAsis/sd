import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './components/Stage';
import Person from './components/Person';
import './App.css';

const rootEl = document.getElementById('root');

const App = () => {
    return (
        <Stage>
            <Person />
        </Stage>
    );
};

const renderApp = () => {
    ReactDOM.render(
        <App />, rootEl
    );
}

renderApp();


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}