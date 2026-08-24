# DevOps Task API

Projeto desenvolvido para a disciplina de DevOps, com foco na Fase 1: Configuração e Automação Inicial.

## Objetivo

O projeto consiste em uma API REST simples para gerenciamento de tarefas.

O objetivo desta primeira fase é aplicar conceitos de:

* DevOps
* Integração Contínua
* GitHub Actions
* Infraestrutura como Código
* Terraform

## Tecnologias

* Node.js
* TypeScript
* Express
* Jest
* GitHub Actions
* Terraform

## Estrutura do Projeto

```text
devops-task-api/
├── .github/
│   └── workflows/
│       └── ci.yml
├── infra/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── src/
│   ├── server.ts
│   └── tasks.ts
├── tests/
│   └── tasks.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/stasiak603/devops-task-api.git
```

Acesse a pasta do projeto:

```bash
cd devops-task-api
```

Instale as dependências:

```bash
npm install
```

## Execução

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação será executada na porta 3000.

## Rotas

### Verificar API

```text
GET /
```

### Health Check

```text
GET /health
```

### Listar tarefas

```text
GET /tasks
```

### Criar tarefa

```text
POST /tasks
```

Exemplo de corpo da requisição:

```json
{
  "title": "Estudar DevOps"
}
```

## Integração Contínua

A pipeline de CI foi implementada utilizando GitHub Actions.

Ela é executada automaticamente quando ocorre:

* Push para a branch `main`.
* Pull Request direcionado para a branch `main`.

A pipeline executa:

1. Checkout do código.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Compilação do TypeScript.
5. Execução dos testes automatizados.

## Infraestrutura como Código

A infraestrutura foi definida utilizando Terraform.

Os arquivos estão localizados na pasta:

```text
infra/
```

A configuração contém:

* Provider AWS.
* Variáveis de configuração.
* Security Group.
* Outputs.

Para validar os arquivos:

```bash
cd infra
terraform init
terraform fmt -check
terraform validate
terraform plan
```

## Autor

Cauã Rodrigues
