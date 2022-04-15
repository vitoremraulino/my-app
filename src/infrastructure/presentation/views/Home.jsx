import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
            <Link to="/about">TESTE</Link>
        </>
    );
}
