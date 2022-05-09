import React from 'react';

const customerList = [
    {
        id: 1,
        name: 'Renêe Sales',
        skills: [
            'React', 'C#', 'Flutter', 'Bootstrap', 'JQuery'
        ],
    },
    {
        id: 2,
        name: 'Stefani Sales',
        skills: [
            'Angular', 'Ionic', 'HTML', 'CSS', 'Bootstrap'
        ],
    },
    {
        id: 3,
        name: 'Aroldo Sales',
        skills: [
            'Bancos de Dados', 'Oracle', 'BI',
        ],
    },
    {
        id: 4,
        name: 'Fulano Dital'
    },
];

const App = () => {
    const name = 'Digital Innovation One';

    const handleClick = (e) => {
        console.log('evento onClick');
        console.log(e);
        alert(name);
    };
    const button = <button onClick={handleClick}>Mostrar Evento</button>;

    const handleChange = (e) => {
        console.log('evento onChange');
        console.log(e);
        let { value } = e.target;
        console.log(value);
    };

    const handleDeleteClick = (e, id) => {
        console.log('event onClick com argumentos customizados');
        console.log(e);
        let { name } = customerList.find((customer) => customer.id == id);
        alert(`removendo cliente: ${name}, id: ${id}`);
    };

    const renderCustomers = (customer, index) => {
        return <li key={`customer-${index}`}>
            <div>
                <b>{customer.id}: {customer.name}</b> <button onClick={(e) => handleDeleteClick(e, customer.id)}>Remover</button>
            </div>
            {customer.skills && (<div>
                <b>Skills:</b>
                <ul>
                    {customer.skills.map(renderSkills)}
                </ul>
            </div>)}
            <br />
        </li>
    };

    const renderSkills = (skill, index) => {
        return <li key={`skill-${index}`}>{skill}</li>;
    }

    return (
        <div>
            <h1>Manipulação de Eventos</h1>
            <input onChange={handleChange} />
            {button}

            <hr />

            <div>
                <h2>Customers:</h2>
                <ul>
                    {customerList.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;