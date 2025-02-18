![cover](https://github.com/user-attachments/assets/78d49ac0-db68-4f39-8753-b6d58b6723c1)

# SportCenter

Uma interface totalmente responsiva, simulando o painel de uma plataforma. O objetivo da aplicação é que o usuário possa acessar o sistema, visualizar as pessoas cadastradas e gerenciar o cadastro.

É possível ver o projeto através do link: [https://fpf-rodrigofontes.vercel.app/](https://fpf-rodrigofontes.vercel.app/)

A estrutura do projeto está organizada da seguinte forma:

- :open_file_folder: **/src:**
  
  - :open_file_folder: **/components:** Componentes de UI que podem ser reaproveitados.
    
  - :open_file_folder: **/static:** Arquivos de assets, como fontes, imagens e CSS.
    
  - :open_file_folder: **/utils:** Mocks e funções auxiliares.

## Pré-requisitos

- Git
- Node 20 (ou superior)

## Como iniciar

Clone o repositório em um novo diretório:

```
git clone git@github.com:rodrigofontesdev/fpf.git
```

```
cd fpf
```

Instale as dependências do projeto:

```
npm install
```

Inicie o projeto em ambiente de desenvolvimento:

```
npm run dev
```

## Funcionalidades

- Abrir e fechar barra lateral
- Modal para cadastrar usuário

## Considerações finais

Para fins de demonstração, os dados dos usuários são armazenados em um mock em memória. Em um cenário real, esses dados seriam obtidos de um backend, ao consumir uma API através de um cliente HTTP como **Axios**.

O gerenciamento do formulário de cadastro, poderia ser implementado com **React Hook Form** e a validação dos dados com **Zod**.

A navegação entre as páginas pode ser alcançada com **React Router**, que também permitiria destacar o link ativo na barra lateral de acordo com a rota atual.

## Construído com

- **Vite:** Build e bundling otimizado da aplicação.

- **React:** Construção de interfaces de usuário (UI).

- **TypeScript:** Tipagem estática para JavaScript.

- **CSS Modules:** Estilização CSS com escopo local para componentes.

- **ESLint:** Análise estática de código.

- **Prettier:** Formatação consistente de código.

- **Husky:** Gerenciador de Git hooks, executando o Prettier antes dos commits.

- **Commitlint:** Padronização de mensagens de commit, aplicando o padrão "Conventional Commits".

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE) para obter detalhes.
