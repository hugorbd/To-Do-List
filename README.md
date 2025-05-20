# 📝 To-Do-List API

<div align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status">
</div>

## 🌟 Sobre o Projeto
API simples para gerenciamento de tarefas, desenvolvida como parte do meu aprendizado em **Node.js** e **MongoDB**. O objetivo principal foi entender os conceitos de:

- Criação de APIs RESTful
- Conexão com bancos de dados NoSQL
- Estruturação de projetos em Node.js

## 🛠 Pilha Tecnológica
| Camada          | Tecnologias                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Backend**     | ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey) |
| **Banco de Dados** | ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green) ![Mongoose](https://img.shields.io/badge/Mongoose-7.x-yellowgreen) |
| **Ferramentas** | ![Nodemon](https://img.shields.io/badge/Nodemon-3.x-red) ![Dotenv](https://img.shields.io/badge/Dotenv-16.x-grey) |

## 📌 Principais Características
✔️ **CRUD Básico**  
✔️ **Persistência em Nuvem** (MongoDB Atlas)  
✔️ **Validação Automática** de Dados  
✔️ **Estrutura Modular** (MVC-like)  

## 🏗 Estrutura do Código
```plaintext
src/
├── controllers/   # Lógica das operações
├── models/        # Definições do banco de dados
├── routes/        # Configuração dos endpoints
└── server.js      # Núcleo da aplicação
