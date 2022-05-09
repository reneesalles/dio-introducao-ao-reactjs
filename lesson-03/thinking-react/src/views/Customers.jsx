import React from 'react';
import mock from '../mock';
import Button from '../components/Button';
import List from '../components/List';
import ListItem from '../components/ListItem';

const CustomerView = () => {
    const handleDeleteClick = (id) => {
        console.log('event onClick com argumentos customizados');
        let { name } = mock.find((customer) => customer.id == id);
        alert(`removendo cliente: ${name}, id: ${id}`);
    };

    const renderCustomers = (customer, index) => {
        return <ListItem key={`customer-${index}`}>
            <div>
                <b>{customer.id}: {customer.name}</b> <Button onClick={() => handleDeleteClick(customer.id)}>Remover</Button>
            </div>
            {customer.skills && (<div>
                <b>Skills:</b>
                <List>
                    {customer.skills.map(renderSkills)}
                </List>
            </div>)}
            <br />
        </ListItem>
    };

    const renderSkills = (skill, index) => {
        return <ListItem key={`skill-${index}`}>{skill}</ListItem>;
    }

    return (
        <div>
            <h2>Customers:</h2>
            <List>
                {mock.map(renderCustomers)}
            </List>
        </div>
    );
};
export default CustomerView;