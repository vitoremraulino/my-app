import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

export default function About() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                TESTE DO VITERA
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
        </>
    );
}
