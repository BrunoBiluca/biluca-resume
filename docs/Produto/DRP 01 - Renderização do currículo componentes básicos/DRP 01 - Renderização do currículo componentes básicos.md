# DRP 01 - Componentes obrigatórios do currículo

> [!important] Resumo
> Em todo currículo é necessário definir alguns componentes que os avaliadores necessitam verificar para avaliar a compatibilidade com as vagas disponíveis.

Objetivos:

- Permitir ao usuário da biblioteca exibir informações necessárias aos currículo

Métricas para mensurar sucesso:

- Nenhuma específica

Métricas para monitorar:

- Downloads da biblioteca

# Contexto

Os componentes obrigatórios são elementos que os avaliadores precisam avaliar para verificar a compatibilidade com as vagas que eles estão procurando candidatos.

### Hipóteses

- __Hipótese 1__

### Restrições

- __Restrição 1__
### Dependências

- __Dependência 1__

### Dúvidas

- __Dúvida 1__

### Fora do escopo

- __Fora do escopo 1__

### Referências

- __Referências de concorrentes ou inspirações__

# Requisitos

### ⬛ RF 01.10 - Projetos pessoais e contribuições em projetos

__Descrição__

Como avaliador de currículo quero verificar as competências dos candidatos em relação a projetos pessoais e contribuições em outros projetos para validar a compatibilidade com a vaga.

__Impacto__

Os projetos pessoais ou contribuições em projetos também é uma boa fonte para demonstrar habilidades e competências para os avaliadores. Atualmente temos muito desenvolvedores que desenvolvem projetos paralelos ao trabalho e precisam de destacar esse tipo de projeto.

__Critérios de aceite__

- Quando uma seção de projetos for definida dela deve ser apresentada no currículo
- Cada projeto definido deve ser exibido na seção de projetos
- A estrutura final de definição de projeto deve ser documentada na documentação do usuário

# Especificação de arquitetura

### Descrição de estratégias e soluções técnicas

Todas as informações necessárias para a exibição do currículo serão enviadas para a biblioteca e serão renderizadas para o visitante do site.

Essas informações estarão definidas no que chamaremos de **Estrutura do currículo**. A estrutura do currículo será um json com as definições para cada elemento presente no currículo.

### Diagramas arquiteturais, modelagem, relacionamentos...

#### Estrutura do currículo

Todas as informações do currículo são disponibilizadas na estrutura do currículo.

##### Projetos

```json
{
  "id": "",
  "title": [],
  "type": "Projects",
  "entries": [
    {
      "title": locale(),
      "description": [],
      "role": [],
      "tech_stack": [],
      "repo": "",
      "release_link": ""
    }
  ]
}
```

Para projetos temos as seguintes propriedades:

- **title:** nome do projeto
- **description:** descrição do projeto, como objetivo, público alvo
- **role:** descrição da responsabilidade do autor no projeto
- **tech_stack:** habilidades e competências técnicas relacionadas ao projeto
- **repo:** link do repositório do projeto, caso seja um projeto aberto
- **release_link:** link para download ou aquisição do projeto

## Requisitos técnicos


## Requisitos não funcionais


# Qualidade

- __Definição de Pronto__
- __Planos de testes__

# Esboços ou protótipos de UX

##### Projetos

![[Mockup da seção de projetos.png|mockup da seção de projetos|300]]