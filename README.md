# Symbian Clinic

Aplicativo Symbian Clinic desenvolvido com o framework React Native como exercício desenvolvido pela instituição de ensino SENAI cujo o objetivo é uma  aplicação   para   o agendamento  de  cirurgias  em  uma  clínica.  Essa  aplicação  será  usada  por  pacientes, enfermeiras(os)  e  médicas(os)  onde  esses  diferentes  usuários  realizarão  diferentes tarefas.

## Pre-requisitos

É necessário ter instalado:
- Git
- NodeJs (Versão LTS)
- Expo-cli

#### É necessário que esteja funcionando o backend dessa aplição, clone o repositorio e siga os passos para o funcionamendo do projeto backend 
#### link do projeto : https://github.com/Ezequiel-Mathias/Project-Symbian-Backend-API

## Instalação

Acesse https://nodejs.org/en/ para installar o Node JS versão LTS

Depois de installar o Node JS instale o Expo-cli, para isso abra o seu terminal e digite:
```
npm install expo-cli --global
```

## Inicialização do projeto

Escolha uma pasta para armazenar o projeto e em seguida digite no terminal:

```
git clone https://github.com/Ezequiel-Mathias/Project-Symbian-Clinic
```
Em seguida entre na pasta do repositório no seu computador e execute o comando abaixo
```
npm i
```
## Executar o projeto

Para executar o projeto basta estar na pasta do repositório e executar
```
expo start
```
ou

```
npm start
```
Em seguida, será aberto no seu navegador padrão uma aba na porta http://localhost:19002/<br/>
O app pode rodar no seu próprio celular ou em um emulador no computador.<br/>
No celular basta baixar o aplicativo Expo na Play Store e pegar o QRCODE da aba aberta no navegador. O dowload do App será em seguida feito.<br/>


##### Caso esteja usando o backend do projeto Sybian que esta no repositorio:

https://github.com/Ezequiel-Mathias/Project-Symbian-Backend-API

##### Neste projeto voce deve acessar o caminho src/service/apiSybiam.tsx e colocar seu ip no lugar dos xxx para que o backend consiga "conversar" com o front e o projeto possa funcionar por completo !

