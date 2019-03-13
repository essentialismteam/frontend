import React from 'react';
import { Projects, Values } from '../components'

export default () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <Projects />
                <Values />
            </div>
        </div>
    );
};