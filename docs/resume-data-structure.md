# Estrutura do Currículo

O currículo é montado a partir de um objeto JSON passado na raiz da tag `<Resume>` que irá definir todos os seus aspectos como o tema, variáveis visuais (css), seções, entradas para as seções e seus conteúdos.

# Raiz do documento

```json
{
  "theme": {},
  "locale": [],
  "main_information": {
    "type": "MainInformation",
    ...
  },
  "contact_information": {
    "type": "ContactInformation",
    "entries": []
  },
  "sections": []
}
```

# Informação principal

```json
{
  "type": "MainInformation",
  "picture": caminho da imagem,
  "name": texto,
  "summary": [],
  "goal": []
}
```

# Informação de contatos
As informações de contato são adicionadas a lista. 

Existem os seguintes tipos:

```json
{
  "type": "Mail",
  "email": ""
},
{
  "type": "Phone",
  "number": ""
},
{
  "type": "Location",
  "place": "",
  "google_maps": ""
},
{
  "type": "Github",
  "profile": ""
},
{
  "type": "LinkedIn",
  "profile": ""
},
{
  "type": "Website",
  "url": ""
}
```

# Tema

## Página única
Tema criado para que o currículo seja apresentado em apenas uma única página.

```json
{
  "type": "OnePager",
  "background": imagem,
  "variables": {
    "sections_gap": tamanho,
    "contents_gap": tamanho
  }
}
```

Esse tema também tem a opção de escolher a posição da seção dentro da página:

```json
// objeto da seção
{
  ...outros atributos da seção
  "theme": {
    "place": "side" // opcional
  }
}
```

# Localização
Localização é o serviço que possbilita criar um currículo em vários idiomas.

A localização é configurada na raíz do documento pela chave `locale` e deve ser passada uma lista das línguas disponíveis para o currículo.

Exemplo de configuração inglês/brasileiro:

```json
[
  {
    "key": "ptbr",
    "label": "Brasileiro"
  },
  {
    "key": "en",
    "label": "English"
  }
]
```

A ordem dos idiomas configurados na lista irá influenciar na ordem de cada texto no conteúdo do currículo.

# Seções

## Línguas

```json
{
  "title": [],
  "type": "Language",
  "entries": [
    {
      "label": [],
      "level": []
    }
  ]
}
```

## Experiências de trabalho

```json
{
  "title": [],
  "type": "WorkExperience",
  "entries": [
    {
      "title": [],
      "period_begin": "",
      "period_end": "",
      "is_current_job": true,
      "description": [],
      "company": "",
      "company_url": "",
      "company_location": ""
    }
  ]
}
```

## Educação

```json
{
  "title": [],
  "type": "Education",
  "entries": [
    {
      "title": [],
      "institution": "",
      "period_begin": "",
      "period_end": "",
      "location": "",
      "description": []
    }
  ]
}
```

## Certificados

```json
{
  "type": "Certificate",
  "entries": [
    {
      "is_active": false,
      "title": "",
      "platform": "",
      "emission_date": "",
      "description": "",
      "url": ""
    }
  ]
}
```

## Habilidades

```json
{
  "title": [],
  "type": "Skill",
  "entries": [
    {
      "label": "skill"
    }
  ]
}
```

## Jogos

```json
{
  "title": [
    "Meus jogos",
    "My Games"
  ],
  "type": "Game",
  "theme": {
    "place": "side"
  },
  "entries": [
    {
      "is_active": true,
      "name": "",
      "description": [],
      "role": "",
      "repository": "",
      "screenshoot": ""
    },
  ]
}
```

# Conteúdos

## Imagens

Todos os caminhos de arquivos na configuração do currículo são relacionados a pasta `public`.
