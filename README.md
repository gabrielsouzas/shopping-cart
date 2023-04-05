# Desenvolvendo um Carrinho de Compras com React JS - Manual do Dev

Este projeto está sendo desenvolvido para estudo, com os videos do canal do Youtube [Manual do Dev](https://www.youtube.com/@ManualdoDev).

Videos:

[Desenvolvendo um Carrinho de Compras com React JS - Do zero ao deploy | Aula 01](https://youtu.be/HSAlJJI6K_A)

## Criação do projeto

Crie a pasta shopping-cart para o projeto e abra a pasta com o VSCode.

Acesse o terminal e veja se o caminho está o da pasta do projeto.

Em seguida digite no terminal:

~~~cmd~~~
npx create-react-app .
~~~

Esse comando vai instalar as dependências do React no projeto. O ponto no final do comando indica que será feito o procedimento na pasta que está sendo executado o terminal.

Após finalizar essa instalação digite o seguinte comando para instalar o react-icons, que disponibiliza uma variedade de icones do react:

~~~cmd~~~
npm i react-icons
~~~

Em seguida inicialize o eslint no projeto com o seguinte comando:

~~~cmd~~~
npx eslint --init
~~~

O ESLint já vem instalado com o react, então ele será apenas inicializado no projeto.

Ele serve para padronizar a programação em um projeto, mantendo uma boa prática na escrita do código.

Após o comnado ser executado um questionário será apresentado:

 **How would you like to use ESLint?** · style
**√ What type of modules does your project use?** · esm
**√ Which framework does your project use?** · react
**√ Does your project use TypeScript?** · No / Yes
**√ Where does your code run?** · browser
**√ How would you like to define a style for your project?** · prompt
**√ What format do you want your config file to be in?** · JSON
**√ What style of indentation do you use?** · 4
**√ What quotes do you use for strings?** · single
**√ What line endings do you use?** · unix 
**√ Do you require semicolons?** · No / Yes
Local ESLint installation not found.
The config that you've selected requires the following dependencies:
eslint-plugin-react@latest eslint@latest
**√ Would you like to install them now?** · No / Yes
**√ Which package manager do you want to use?** · npm  

Crie uma pasta chamada .vscode na raiz do projeto para deixar configurações padrões do projeto no VSCode. Essas configurações serão transmitidas na cópia do projeto para outra máquina para facilitar o desenvolvimento.

{
    "files.eol": "\n", // End of line sequence
    "editor.tabSize": 2, // Tamanho da identação
    // Ações a serem executadas ao salvar um arquivo
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true, // Vai tentar resolver os problemas do eslint ao salvar (Aperte CTR+S para corrigir o código, mesmo com salvamento automático)
    }
}

Propriedade de aspas duplas nos elementos react inseridas no arquivo de configuração .eslintrc.json:

"jsx-quotes": [
            2,
            "prefer-double"
        ]

Regra de ultima linha no código:

"eol-last": [
            "error",
            "always"
        ]


# Informações importantes React

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
