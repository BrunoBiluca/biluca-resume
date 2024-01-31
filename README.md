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