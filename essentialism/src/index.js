import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { RootContext } from './RootContext';

ReactDOM.render(
    // <RootContext>
        <Router>
            <App />
        </Router>,
    // </RootContext>,
    document.getElementById('root')
);
