# DIO - Introdução ao ReactJS - Lição 01 - JSX

## Anotações

- JSX é uma sintaxe de marcação "html" com javascript
- Com ele, é possível criar componentes que possuem tanto HTML como Javascript
- Exemplo de uso:
    ```jsx
    function somar(a, b) {
        return a + b;
    }

    function primeiroJSX() {
        return (
            <div>
                <h1>Introdução ao ReactJS</h1>
                <h2>Usando JSX</h2>
                <h3>Soma: {somar(5, 13)}</h3>
            </div>
        );
    }
    ```