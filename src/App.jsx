import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');


const App = () => {
    const x = 5;
    return (
        <div>
            <h1 style={{ 'textAlign': 'center'}}> Social Distancing </h1>
        </div>
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