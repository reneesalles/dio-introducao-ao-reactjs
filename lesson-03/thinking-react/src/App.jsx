import React from 'react';
import Button from './components/Button';
import CustomerView from './views/Customers';

const App = () => {
    const name = 'Digital Innovation One';

    const handleClick = (e) => {
        console.log('evento onClick');
        console.log(e);
        alert(name);
    };

    const handleChange = (e) => {
        console.log('evento onChange');
        console.log(e);
        let { value } = e.target;
        console.log(value);
    };

    return (
        <div>
            <h1>Manipulação de Eventos</h1>
            <input onChange={handleChange} />
            <Button onClick={handleClick}>Mostrar Evento</Button>

            <hr />

            <CustomerView />
        </div>
    );
};
export default App;