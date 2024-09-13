# GitHub Cards
=============

## Descrição
-----------
O projeto "GitHub Cards" é uma aplicação que exibe informações de perfis de usuários do GitHub em cards estilizados. A aplicação busca dados da API do GitHub e mostra detalhes como nome, foto de perfil e tecnologias utilizadas pelos usuários.

## Requisitos
-----------
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- Node.js (versão 14 ou superior)
- Git

## Clonando o Repositório
------------------------
1. Clone o repositório para sua máquina local:
   git clone https://github.com/OwayranTorquato/Desenvolvimento-Web.git

2. Navegue até o diretório do projeto:
   cd github-cards

## Instalando Dependências
------------------------
### 1. Certifique-se de estar no diretório do projeto. Instale as dependências necessárias usando o npm (ou yarn, se preferir):
   npm install
   ou
   yarn install

## Configuração
-------------
O projeto está pronto para rodar após a instalação das dependências. No entanto, se você precisar configurar variáveis de ambiente ou ajustes adicionais, verifique o arquivo .env.example e crie um arquivo .env com as variáveis apropriadas.

## Rodando o Projeto
-------------------
### 1. Para iniciar o servidor de desenvolvimento, use o seguinte comando:
   npm start
   ou
   yarn start

### 2. O projeto será iniciado e você pode acessá-lo no seu navegador em http://localhost:3000.

## Estrutura do Projeto
----------------------
Aqui está uma visão geral da estrutura de diretórios do projeto:
- src/
  - components/: Contém os componentes React da aplicação.
    - Card.js: Componente para exibir as informações do usuário em um card.
    - Card.styles.js: Estilos para o componente Card.
  - pages/
    - Home.js: Página principal onde os cards são exibidos.
  - services/
    - githubAPI.js: Funções para interagir com a API do GitHub.
  - styles/
    - GlobalStyles.js: Estilos globais da aplicação.
