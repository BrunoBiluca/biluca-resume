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

Todos os caminhos de arquivos na configuração do currículo são relacionados a pasta `public`.

## Localização

O currículo pode ser configurado para ser exibido em várias línguas. 
Para isso cada campo de texto pode ser configurado como uma lista que segue a configuração de localização.

Exemplo de configuração Português/Inglês.

```json
{
  ... // Outras configurações
  "locale": [
    {
      "key": "ptbr",
      "label": "Brasileiro"
    },
    {
      "key": "en",
      "label": "English"
    }
  ],
  {
    "main_information": {
    "type": "MainInformation",
    "summary": [
      "Exemplo de resumo do currículo em Brasileiro",
      "Resume's summary example in english"
    ],
    "goal": [
      "Exemplo de objetivo do currículo em Brasileiro",
      "Resume's sample goal in english"
    ]
  },
  ...
}
```

### Exemplo de configuração

Exemplo de configuração do currículo completo.

```json
{
  // Configuração do tema
  "theme": {
    "type": "OnePager",
    "background": "./resume_data/square_pattern.jpg",
    "variables": {
      "sections_gap": "1em",
      "contents_gap": "1em"
    }
  },
  // Configuração da localização (internacionalização)
  "locale": [
    {
      "key": "ptbr",
      "label": "Brasileiro"
    },
    {
      "key": "en",
      "label": "English"
    }
  ],
  // Informações principais
  "main_information": {
    "type": "MainInformation",
    "picture": "./image.png",
    "name": "",
    "summary": "",
    "goal": ""
  },
  "contact_information": {
    "type": "ContactInformation",
    "entries": [
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
    ]
  },
  "sections": [
    {
      "title": "",
      "type": "Language",
      "theme": {
        "place": "side"
      },
      "entries": [
        {
          "label": [
            "Português",
            "Portuguese"
          ],
          "level": [
            "Nativo",
            "Native"
          ]
        }
      ]
    },
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
    },
    {
      "title": [],
      "type": "Skill",
      "entries": [
        {
          "label": "skill"
        }
      ]
    },
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
    },
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
    },
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
  ]
}
```