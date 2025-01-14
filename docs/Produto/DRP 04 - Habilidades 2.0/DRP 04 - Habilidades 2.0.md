# DRP - 04 - Habilidades 2.0

> [!important] Resumo
> As habilidades e competências do currículo são pontos muito relevantes para os avaliadores (humano ou máquina), eles buscam essas informações como palavras-chave para entender se os requisitos da vaga batem com o candidato. Assim, é importante ter uma seção de habilidades e competências bem destacada e direta, com informações suficientes para o avaliador fazer esse tipo de análise

Objetivos:

- Aumentar a taxa de conversão do currículo em relação a vagas

Métricas para mensurar sucesso:

- Aumento de chamada para entrevista com os currículos gerados

Métricas para monitorar:

- Nenhuma outra

# Contexto

Em vários guias de criação de currículo é destacado a necessidade direta de citações as habilidades e competências relacionadas as vagas. 

Avaliadores de currículos (humanos ou máquinas) também utilizam essas informações para verificar rapidamente a compatibilidade do candidato a vaga.

### Hipóteses

- Com uma seção de habilidades mais destacada e com mais informações, o currículo será chamado mais para entrevistas em vagas com alta relevância.

### Restrições

- Nenhuma

### Dependências

- Nenhuma

### Dúvidas

- Nenhuma

### Fora do escopo

- Não definido

### Referências

- Guias de criação de currículos: apresentam a necessidade dessas informações para qualquer tipo de avaliador

# Requisitos

### ⬛ RF 04.01 - Categorias de habilidades

__Descrição__

Como avaliador de currículo quero ter a informação mais direta sobre as principais habilidades do candidato a fim de validar a compatibilidade do candidato e vaga.

__Impacto__

Facilitar aos avaliadores terem informações sobre as principais habilidades do candidato separado por categorias pode facilitar pessoas que não tem perfil técnico a entender comparar com as vagas disponíveis.

__Critérios de aceite__

- Quando habilidades da mesma categoria são definidas elas devem aparecer juntas
- Quando uma categoria não tem nenhuma habilidade definida ela não deve aparecer no currículo

### ⬛ RF 04.02 - Proficiência de habilidades

__Descrição__

Como avaliador de currículo quero ter informações sobre a proficiência das habilidades do candidato em relação as competências necessárias da vaga disponível a fim de validar a compatibilidade do candidato e vaga.

__Impacto__

Ter informações sobre a proficiência ajuda o avaliador a comparar com os requisitos da vaga.

__Critérios de aceite__

- Quando uma proficiência for definida ela deve ser exibida no currículo

# Especificação de arquitetura

### Diagramas arquiteturais, modelagem, relacionamentos...

#### Modelo de categoria de habilidade

As categorias de habilidades são definidas na própria seção de habilidades:

```json
{
  "title": locale(),
  "type": "Skill",
  "categories": [
	  {
		  "category_id": "category_1",
		  "label": locale()
	  }
  ],
  "entries": [
    {
	  "category_id": "category_1",
      "label": locale()
    }
  ]
}
```

`locale()` é uma lista de strings onde cada linha significa o valor em uma língua definida na seção de `locale`.

### Descrição de estratégias e soluções técnicas

As categorias e informações de proficiência são definidas na estrutura do currículo.

## Requisitos técnicos

- Alterar a estrutura do currículo para incrementar os novos requisitos

## Requisitos não funcionais

- Nenhum

# Qualidade

- __Definição de Pronto__

Nenhum

- __Planos de testes__

Nenhum

# Esboços ou protótipos de UX

- Tela: nome da tela
- Imagem da tela
- Explicação de cada elemento da tela
- Explicação dos comportamentos da tela