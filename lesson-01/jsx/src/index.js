import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function somar(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        <div>
            <h1>Introdução ao ReactJS</h1>
            <h2>Usando JSX</h2>
            <h3 className='teste'>Soma: {somar(5, 13)}</h3>
        </div>
    );
}

const App = () => {
    return (
        <div className='App'>
            {primeiroJSX()}
        </div>
    )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);