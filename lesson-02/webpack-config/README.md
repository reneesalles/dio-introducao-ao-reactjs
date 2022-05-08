# DIO - Introdução ao ReactJS - Lição 02 - Webpack Config

## Anotações

### Webpack básico

- Iniciar o projeto:
    ```bash
    npm init
    ```
    - aceitar todos os valores padrões, a não ser que seja desejado alterar algo
- Instalar os pacotes `webpack` e `webpack-cli`:
    ```bash
    npm i -D webpack webpack-cli
    ```
    - o argumento `i` é o diminutivo de `install`
    - o argumento `-D` é o diminutivo de `--save-dev`
        - esse argumento serve para adicionar o(s) pacote(s) como `devDependencies`
- na raiz do projeto, criar um arquivo chamado `webpack.config.js`, contendo:
    ```js
    const path = require('path');

    module.exports = {
        entry: './teste.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    };
    ```
    - a primeira linha está importando o módulo `path` para podermos pegar caminhos de arquivos
    - nesse exemplo, `module.exports` tem as propriedades:
        1. `entry`: é o arquivo inicial usado pelo webpack para criar um bundle
            - no exemplo está `'./teste.js'`, mas normalmente colocamos no arquivo principal, como o `'./src/index.js'`
        2. `output`: possui propriedades que dirão onde vai ser a saída do bundle (propriedade `path`) e o nome do arquivo do bundle (propriedade `filename`)
            - não confundir o objeto `path` (início do arquivo) e a propriedade `path` (do `output`), pois o objeto usamos para resolver o caminho completo do arquivo
- No arquivo `package.json` ir no bloco `task` e adicionar a linha:
    ```json
    "build": "webpack --mode production"
    ```
    - o nome `"build"` pode ser qualquer nome, e o mesmo será usado para rodarmos a aplicação usando:
        ```bash
        npm run build
        ```
    - o `webpack --mode production` está executando o webpack no modo produção, utilizando de minificadores de código e outros plugins padrão
        - também é possível passar outros argumentos depois do `--mode`, como `development`

### Webpack com `babel`

- Após criar e configurar o webpack acima, podemos também adicionar modulos, como o `babel`
- Instalar os pacotes do `babel`:
    ```bash
    npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
    ```
- No arquivo `webpack.config.js`, devemos adicionar ao `module.exports` a propriedade `module`, e mudar o valor da propriedade `entry` para `./src/index.js` (caso ainda não tenha sido feito):
    ```js
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    };
    ```