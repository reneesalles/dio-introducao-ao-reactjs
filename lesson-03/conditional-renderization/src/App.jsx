import React, { useState } from 'react';

const buttonA = <button>Primeiro Botão</button>;
const buttonB = <button>Segundo Botão</button>;

let hasCustomer = false;
const buttonCustomer = <button>Histórico de Clientes</button>;
const buttonNewCustomer = <button>Cadastrar novo Cliente</button>

const App = () => {
    const renderBtnCustomer =
        <div>
            {buttonCustomer}
        </div>;

    const renderBtnNewCustomer =
        <div>
            {buttonNewCustomer}
        </div>;

    const renderNull = !hasCustomer ? null :
        <div>
            <h3>Cliente: Renêe Sales</h3>
        </div>;

    return (
        <div>
            <p>Renderizando Elementos</p>
            <hr />

            <h5>Sem nenhum condicional</h5>
            <div>{buttonA}</div>
            <div>{buttonB}</div>
            <hr />

            <h5>Com condicional &&</h5>
            {hasCustomer && renderBtnCustomer}
            <hr />

            <h5>Com ternário (if/else)</h5>
            {hasCustomer ? renderBtnCustomer : renderBtnNewCustomer}
            <hr />

            <h5>Opcional</h5>
            {renderNull}
        </div>
    );
};
export default App;