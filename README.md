<h1 align="center">Cupido Online API</h1>
<h3 align="center">Aplicação desenvolvida para o desafio prático do Processo Seletivo da empresa BGC Brasil</h3>

&nbsp;&nbsp;
## 🔍 Sobre

A aplicação é uma API que possibilita o envio de um e-mail para um destinatário a partir de um único e-mail fixo. Basta fazer uma requisição contendo o nome e e-mail do destinatário, além da mensagem que deseja enviar.

&nbsp;
## ⚒ Tecnologias

Essa aplicação foi desenvolvida utilizando:
* [NodeJS](https://pt-br.reactjs.org)
* [Serverless Framework](https://serverless.com/)
* [AWS Lambda](https://aws.amazon.com/pt/lambda/)
* [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
* [AWS S3](https://aws.amazon.com/pt/s3/)
* [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)

&nbsp;
## 🚀 Rodando a aplicação

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)

```bash
# Clone este repositório
$ git clone "https://github.com/DayaToledo/DesafioBGC-/Back"

# Acesse a pasta do projeto no terminal/cmd
$ cd DesafioBGC-Back

# Instale as dependências
$ npm install
```
Além de baixar o projeto e instalar as dependências, o projeto também requer algumas variáveis de ambiente, sendo assim:
1. Adicione uma arquivo nomeado .env na raiz do projeto
2. Dentro adicione:

```bash
EMAIL_USER=SEU_EMAIL_AQUI
EMAIL_PASS=SUA_SENHA_AQUI
```

3. Salve o arquivo

Esse e-mail adicionado no .env é o e-mail do qual serão enviados os e-mails através da API. 

Agora basta rodar o projeto:

```bash
# Execute a API localmente
$ serverless offline start

# Dando deploy da API
$ serverless deploy
```


&nbsp;
## 📃 Licença
Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório

&nbsp;
## 👩‍💻 Autor
Feito por Dayana Toledo. [Entre em contato!](https://www.linkedin.com/in/toledodayana/)
