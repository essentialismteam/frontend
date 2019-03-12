import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootContextProvider } from './RootContext';

ReactDOM.render(
    <RootContextProvider>
        <Router>
            <App />
        </Router>
    </RootContextProvider>,
    document.getElementById('root')
);
