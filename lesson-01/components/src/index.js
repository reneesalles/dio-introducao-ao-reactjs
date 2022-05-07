import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';
import './styles.css';

const App = () => {
    const soma = (a, b) => alert(a + b);

    return (
        <div className='App'>
            Olá Mundo!!
            <br/>
            <Button onClick={() => soma(1, 2)} name="Renêe Sales" />
            <ComponenteA title="Componente A :)">
                <ComponenteB>
                    <Button onClick={() => soma(10, 22)} name="Componente Dentro de componentes" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);