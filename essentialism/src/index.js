import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootContext } from './RootContext';

ReactDOM.render(
    // <RootContext>
        <App />,
    // </RootContext>,
    document.getElementById('root')
);
