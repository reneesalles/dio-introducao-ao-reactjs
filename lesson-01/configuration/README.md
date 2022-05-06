# DIO - Introdução ao ReactJS - Lição 01 - Configurações

## Anotações

- Criar uma pasta no local desejado com o nome do projeto
- Abrir um terminal (bash, cmd, powershell)
  - Verificar se o `node` está instalado:
    ```bash
    node -v
    ```
  - Verificar se o `npm` está instalado:
    ```bash
    npm -v
    ```
- Navegar no terminal até a pasta do projeto
- Iniciar o projeto:
  - rodar o comando no terminal:
    ```bash
    npm init
    ```
  - Ao executar, será solicitada algumas informações. Mas para iniciar, podemos só confirmar até o fim
    - no arquivo `package.json`, procurar o item `"main": "index.js"` e mudá-lo para `"main": "src/index.js"`
- Instalar na pasta do projeto os recursos do React: 
  - rodar o comando no terminal:
    ```bash
    npm install --save react@latest react-dom@latest react-scripts@latest
    ```
    - no arquivo `package.json`, procurar o item `"scripts"` e adicionar antes do `"test": "..."` o valor `"start": "react-scripts start",`, como:
      ```json
      "scripts": {
        "start": "react-scripts start",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      ```
- Criar uma pasta na raiz do projeto com o nome `public`
  - Criar um arquivo `index.html` nessa pasta
    - O arquivo deve ser um arquivo HTML-5 básico, com uma __div com id root__, exemplo:
      ```html
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <title>React App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      </html>
      ```
- Criar uma pasta na raiz do projeto com o nome `src`
  - Criar um arquivo `styles.css` nessa pasta
    - Você pode criar um estilo default pro projeto, exemplo:
      ```css
      * {
        margin: 0;
        padding: 0;
      }

      body {
        font-size: 22px;
      }
      ```
  - Criar um arquivo `index.js` nessa pasta
    - O arquivo terá referências ao arquivo `styles.css` e às bibliotecas `React` e `ReactDOM`
    - O arquivo irá criar o objeto `App` que será o objeto principal do projeto
    - Exemplo do arquivo:
      ```javascript
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './styles.css';

      const App = () => {
          return (
              <div className='App'>
                  Hello World
              </div>
          )
      };

      const rootElement = document.getElementById('root');
      ReactDOM.render(<App />, rootElement);
      ```
  - Testar a aplicação rodando:
    ```bash
    npm start
    ```
    - o terminal irá tentar abrir o navegador já com o link da aplicação, mas caso não abra, você poderá abrir manualmente escrevendo a url apresentada, como:
      ```bash
      Compiled successfully!

      You can now view PROJETO in the browser.

        Local:            http://localhost:3000        
        On Your Network:  http://10.1.1.81:3000        

      Note that the development build is not optimized.
      To create a production build, use npm run build.

      webpack compiled successfully
      ```
