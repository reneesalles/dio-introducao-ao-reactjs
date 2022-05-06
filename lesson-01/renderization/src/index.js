import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const element = 'Digital Innovation One';
const element2 = <h1>Olá turma =D</h1>;

const App = () => 
    <div>
        {element}
        {element2}
    </div>;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);