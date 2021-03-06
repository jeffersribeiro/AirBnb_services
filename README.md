# fakeAirBnbServices

> projeto de principais serviços da empresa AirBnb sendo eles App e API

[node](https://nodejs.org/en/download/) v10.19.0

[Adonis.js](https://adonisjs.com/docs/4.1/installation#_installing_adonisjs) v4.1

[React Native](https://reactnative.dev/docs/environment-setup#docsNav) v0.62

[ngrok](https://ngrok.com/download) LTS

Projeto desenvolvido conforme curso da Rocket Seat, tem como objetivo mostrar o uso de bibliotecas react.js, react Native e Adonis.js com o background simulando serviços da empresa AirBnb

## instalação

faça clone do projeto em alguma pasta de preferência, exemplo: _/documents/projects_

verifique se as demais dependências estão instaladas:

- [x] node.js >= v10.19.0

- [x] react-native-cli >= v0.62

- [x] adonis.js >= v4.1

### Clone with SSH

```bash
git clone git@github.com:jeffersribeiro/AirBnb_services.git
```

### Clone with HTTPS

```bash
git clone https://github.com/jeffersribeiro/AirBnb_services.git
```

#### Para o servidor Adonis.js

Entre no seu diretório do projeto:

```bash
cd ~/documents/projects/AirBnb_services/airbnb-server

```

e em sua pasta raiz rode:

```bash
npm install && adonis serve -dev
```

Abra uma nova bash e veja as rotas da API com:

```bash
adonis route:list
```

#### usando ngrok

> o ngrok é como um tunnel sobre as rotas da API ele vai te permitir ter rotas HTTP e HTTPS, as rotas HTTPS são necessárias para versões novas do Android no react native pois não é permitido por padrão requisições HTTP.

```bash
ngrok http 3333
```

com isso novas rotas serão abertas e a requisição no App será possível, as novas rotas seguem um padrão como por
exemplo:

```bash
https://75882420.ngrok.io/users
```

trocando o _/users_ por novos rotas

#### Para o AirBnbApp

Entre no seu diretório do projeto:

```bash
cd ~/Documents/Projects/AirBnb_services/AirBnbApp

```

e em sua pasta raiz rode:

```bash
npm install && adb devices && react-native run-android && npm start --reset-cache
```

## Meta

Jefferson RIbeiro costa - @jeffersribeiro - jefferson_ribeiro12345@hotmail.com

https://github.com/jeffersribeiro

## Contribuições

1. Faça o fork do projeto (https://github.com/jeffersribeiro/AirBnb_services/fork)
2. Crie uma branch para sua modificação (git checkout -b feature/fooBar)
3. Faça o commit (git commit -am 'Add some fooBar')
4. Push (git push origin feature/fooBar)
5. Crie um novo Pull Request
