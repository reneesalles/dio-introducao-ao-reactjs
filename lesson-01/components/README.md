# DIO - Introdução ao ReactJS - Lição 01 - Componentes

## Anotações

- Podemos criar componentes no React em arquivos externos, tanto com extensão `.js`, como com a extensão `.jsx`
    - Como convenção, devemos nomear nossos componentes com a primeira letra maíscula, como:
        ```
        ComponenteA.js
        ComponenteB.jsx
        ```
    - Para que possamos passar argumentos ao nosso componente, usamos a propriedade "props"
        - Podemos receber argumentos pré-definidos do React ("children", por exemplo)
            - children permite que ao usar o componente, possamos adicionar outros elementos dentro dele
        - Podemos criar nossos próprios argumentos
    - Exemplo de componente:
        ```jsx
        import React from 'react';

        const ComponenteA = (props) => {
            const { children, title } = props;

            return (
                <div>
                    <h2>{title}</h2>
                    {children}
                </div>
            );
        }
        export default ComponenteA;
        ```
- Para usarmos o componente, devemos importá-lo da seguinte forma:
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ComponenteA from './ComponenteA';
    import ComponenteB from './ComponenteB';
    import './styles.css';

    const App = () => {
        const soma = (a, b) => alert(a + b);

        return (
            <div className='App'>
                Olá Mundo!!
                <br/>
                <ComponenteA title="Componente A :)">
                    <ComponenteB>
                        Teste
                    </ComponenteB>
                </ComponenteA>
            </div>
        )
    };

    const rootElement = document.getElementById('root');
    ReactDOM.render(<App />, rootElement);
    ```