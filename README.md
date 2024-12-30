# Biluca resume (Currículos Biluca)

Esse projeto tem por objetivo fornecer um sistema simples e prático de criação de currículos de qualidade.

# Utilização

O pacote biluca-resume é utilizado adicionando a tag `<Resume>` a página, todas as outras configurações são adicionadas a partir dessa tag.

O único parâmetro obrigatório de ser passado é `data` que contém o json de conteúdo do currículo.

```javascript
// Tag de entrada do currículo
<Resume data={data} />
```

## Configuração do currículo

O currículo é configurado por meio de um arquivo único de json passado para a tag `<Resume>`.

Para saber mais sobre a estrutura do currículo acesso a [documentação](docs/resume-data-structure.md)


# Guia inicial de desenvolvimento

Esse projeto como resultado final tem a criação de uma biblioteca, mesmo assim é possível verificar a renderização local a partir dos seguintes passos.

Após fazer a clonagem do projeto é necessário ter as seguintes aplicações instaladas:

- [Node ^v22](https://nodejs.org/pt)

Para inicializar o projeto é necessário executar os seguintes comandos:

- `npm install`
  - Instalação das dependências listadas no _package.json_

- `npm run start`
  - Execução local

A página inicial pode ser verificada no endereço: [](http://localhost:3000/).

Inicialmente a página estará vazia, para exibir informações é necessário fornecer um arquivo `resumo.json` no caminho `/public/resume` e com o formato definido.
