import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './components/Stage';
import Actor from './components/Actor';
import './App.css';

const rootEl = document.getElementById('root');

const App = () => {
    return (
        <Stage>
            <Actor />
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