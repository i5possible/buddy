import React from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

const HelloWorld = () => {
    return (
        <div className="hello-world">
            <header className="hello-world-header">
                <img src={logo} className="hello-world-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="hello-world-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default HelloWorld;
