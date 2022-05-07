# DIO - Introdução ao ReactJS - Lição 01 - Renderização

## Anotações

- Para adicionar texto na tela, podemos utilizar o método ReactDOM.render
    - Esse método espera uma variável com o elemento a ser renderizado, e onde ele deve ser (normalmente o elemento root)
    - Exemplo:
    ```jsx
    const element = 'Digital Innovation One';

    const rootElement = document.getElementById('root');
    ReactDOM.render(element, rootElement);
    ```
- Podemos também adicionar tags html
    - Exemplo:
    ```jsx
    const element = 'Digital Innovation One';
    const element2 = <h1>Olá turma =D</h1>;

    const rootElement = document.getElementById('root');
    ReactDOM.render(element2, rootElement);
    ```
- Para adicionar vários elementos à tela, devemos sempre englobar os elementos desejados a um "container"
    - Exemplo:
    ```jsx
    const element = 'Digital Innovation One';
    const element2 = <h1>Olá turma =D</h1>;

    const App = () => 
        <div>
            {element}
            {element2}
        </div>;

    const rootElement = document.getElementById('root');
    ReactDOM.render(<App />, rootElement);
    ```