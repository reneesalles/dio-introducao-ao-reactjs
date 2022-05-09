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
    const renderCustomers = (customer, index) => {
        return <li key={`customer-${index}`}>
            <div>
                <b>{customer.id}: {customer.name}</b>
            </div>
            {customer.skills && (<div>
                <b>Skills:</b>
                <ul>
                    {customer.skills.map(renderSkills)}
                </ul>
            </div>)}
            <br/>
        </li>
    };
    
    const renderSkills = (skill, index) => {
        return <li key={`skill-${index}`}>{skill}</li>;
    }
    
    return (
        <div>
            <h1>Listas e Chaves</h1>
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