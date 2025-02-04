# DRP 03 - Customização dinâmica

> [!important] Resumo
> Permitir a customização dinâmica de perfis de currículos, dessa forma eu posso manter as informações centralizadas e apenas escolher o que mostrar, em vez de sempre criar um novo arquivo de estrutura.

**Objetivos:**

- Permitir ao usuário criar perfis de currículo diferentes a fim de facilitar a construção do currículo

**Métricas para mensurar sucesso:**

- Conseguir gerar um currículo utilizando apenas a interface gráfica.

# Contexto

Uma das principais dificuldades que tenho atualmente é modificar as informações do currículo. 

Para cada perfil de currículo que quero criar é necessário criar um novo arquivo com a estrutura do currículo, isso faz com que eu tenha vários documentos diferentes e quando preciso de atualizar uma nova informação é necessário atualizar em todos os documentos.

Isso cria um barreira na criação de currículos o que vai contra o propósito do [[Biluca Currículos]].

### Hipóteses

- Assumindo que seja mais fácil de criar currículos por meio de perfis pode influenciar em customizar para cada aplicação um currículo diferente.

### Restrições

- Utilizar apenas armazenamento local do browser na versão publicada
	- Como a publicação de páginas no Github exige a publicação de sites estáticos não é possível alterar as informações de forma persistente

### Dependências

- Nenhuma

### Dúvidas

- Caso uma pessoa acesse o currículo, o que será exibido?
	- A configuração completa

- Caso uma pessoal qualquer acesse o currículo ela poderá editar o modelo?
	- Não, para publicações é possível configurar para apenas exibir os modelos sem a possibilidade de edição.
	- Para a pessoa dona do website é possível registrar uma chave para permitir que o currículo seja configurado.

### Fora do escopo

- Criar qualquer modelo de armazenamento remoto
- Adicionar qualquer tipo de informação a estrutura do currículo

### Referências

- Fonte: Vozes da minha cabeça

# Requisitos

### ✅ RF 03.01 - Adição de perfis

__Descrição__

Como autor do currículo quero poder criar perfis para alterar informações a partir do perfil completo em vez de criar um documento de estrutura de currículo do zero.

__Impacto__

Dessa forma é possível facilitar a criação de outros modelos de currículo e poder assim focar nas tecnologias necessárias para a vaga desejada.

__Critérios de aceite__

- Quando um perfil é criado 
	- Ele deve ter todas as informações do perfil completo exibidas
	- Ele tem o nome "Novo perfil"
	- Um novo perfil deve ser exibido ao usuário

- Quando um novo perfil é criado e já existe seu nome ele deve apresentar um sufixo numérico definindo sua posição
	- Por exemplo, se já existe "Novo perfil" o novo perfil deve ter o nome "Novo perfil 2"

- Quando o perfil criado for selecionado ele deve demonstrar ao usuário que está ativo

- Quando o perfil completo é atualizado, as novas informações devem aparecer como escondidas em perfil já adicionado

### ✅ RF 03.01.01 - Renomear perfil 

__Descrição__

Como autor quero renomear o nome do perfil a fim de ter deixar ele mais descritivo para os visitantes.

__Impacto__

Os visitantes precisam de uma descrição mais descritiva sobre cada perfil para entender qual currículo está sendo explicado.

__Critérios de aceite__

- Quando um perfil tem seu nome alterado deve registrar essa informação para futuros carregamentos


### ✅ RF 03.02 - Remoção de perfis locais

__Descrição__

Como autor do currículo quero poder remover os perfis criados localmente para facilitar o meu gerenciamento na construção de currículos.

__Impacto__

Dessa forma perfis que não fazem mais sentido podem ser removidos para dar destaque apenas a perfis relevantes.

__Critérios de aceite__

- Quando um perfil está criado e é acionada a ação de remoção 
	- Este perfil não deve ser mais exibido na lista
	- Nenhuma informação desse perfil deve ser mantida

### ✅ RF 03.03 - Permitir modo de edição de currículo

__Descrição__

Eu autor do currículo quero poder desativar a possibilidade de criar, editar ou remover perfis quando faço a publicação do currículo para não permitir a visitantes que alterem informações.

__Impacto__

Impedir que outras pessoas alterem as informações de perfis é uma medida de segurança e garante que os visitantes do site terão a exibição desejada pelo autor.

__Critérios de aceite__

- Quando configuro para não permitir a edição
	- Não são apresentados os botões de Adicionar perfil e de Salvar a edição
	- Não são apresentados os ícones de Editar ou Remover perfil

### ✅ RF 03.03.01 - Autor pode entrar em modo de edição mesmo em publicação

__Descrição__

Como autor quero ter a possibilidade de utilizar o modo de edição de perfil mesmo quando o site está publicado.

__Impacto__

Dessa forma posso produzir currículos de qualquer local com apenas acesso a internet. Nem sempre estarei com o meu projeto instalado na máquina quando uma outra pessoa me pedir um currículo.

__Critérios de aceite__

- Se eu tiver uma chave de autor do currículo
	- Mesmo configurado para não permitir são exibidos todos os elementos de customização.

### ⬛ RF 03.04 - Edição do perfil

__Descrição__

Eu autor do currículo que selecionar um perfil para edição.

Conteúdos editáveis:

- Seções
- Habilidades
- Experiências
- Educação
- Certificações
- Jogos

__Impacto__

Poder editar o perfil permite criar vários tipos diferentes de currículo que podem ser apresentados para tipos de vagas diferentes, o que aumenta as chances de ser chamado a uma entrevista.

__Critérios de aceite__

- Quando a ação de edição é executada
	- Todas as informações do currículo completo são exibidas, escondidas ou não
	- Botões de esconder e exibir são adicionados junto aos conteúdos

- Quando uma ação de esconder um conteúdo é acionada
	- Um indicativo de informação escondida é sobreposta aos conteúdo
	- O botão de exibir é exibido

- Quando uma ação de exibir um conteúdo é acionada
	- O indicativo de informação escondida é removida
	- O botão de esconder é exibido

### ✅ RF 03.05 - Salvar/Carregar configuração de perfil estaticamente

__Descrição__

Como autor do currículo quero salvar configurações do perfil para possibilitar a publicação de forma estática dos perfis criados possibilitando assim que visitantes tenham acesso a esses perfis

__Impacto__

Poder salvar os perfis de forma estática é o que irá permitir que visitantes tenham acesso aos perfis criados.

__Critérios de aceite__


- Quando um perfil for criado deve ser possível ter acesso a sua configuração em um arquivo
- Quando existe um arquivo de perfil publicado este deve ser exibido na lista de perfis
- Deve ser possível fazer alterações locais nos perfis criados a partir de configurações em arquivos

### ✅ RF 03.06 - Exibição de um perfil

__Descrição__

Eu visitante quero escolher um perfil definido para ser exibido.

__Impacto__

O recrutador que é visitante do site é pode escolher o tipo de perfil para verificar o currículo

__Critérios de aceite__

- Quando selecionar um perfil a ser exibido a tela deve ser alterada para o perfil selecionado

### ✅ RF 03.07 - Duplicação de perfil

__Descrição__

Como autor do currículo quero criar um novo perfil a partir de um perfil já existente para facilitar a configuração.

__Impacto__

Para vagas parecidas é interessante pensar em destacar algumas experiências, por exemplo Backend Java e Backend .NET ambos vão compartilhar várias informações, porém alguns detalhes podem ser destacados.

__Critérios de aceite__

- Quando seleciono um perfil na lista de exibição deve ser possível ter uma forma de duplicar
- Quando um perfil é duplicado ele aparece com o nome do perfil original com o sufixo "- cópia"

### ✅ RF 03.08 - Objetivo do currículo

__Descrição__

Como autor quero definir qual o objetivo do currículo junto a configuração para que o avaliador do currículo entenda exatamente a vaga que estou aplicando.

__Impacto__

Como o currículo muda de forma dinâmica é importante que o objetivo do currículo também se adeque ao conteúdo do currículo. Não dá para enviar um currículo cheio de jogos feitos se o objetivo está como Backend developer.

__Critérios de aceite__

- Quando um perfil for selecionado o objetivo do currículo deve ser alterado para o definido pelo perfil
- O objetivo do currículo deve permitir localização conforme a línguas configuradas no currículo
- Quando o perfil estiver em edição deve aparecer um botão de editar o objetivo do currículo
- Quando o botão de editar o objetivo do perfil for acionado deve permitir entrar com um novo texto


### ⬛ RF 03.09 - Simplificação de experiências de trabalho

__Descrição__

Como autor quero definir algumas experiências de trabalho para serem exibidas de forma simplificada apenas como referência para o avaliador de currículo.

__Impacto__

Habilitando algumas experiências de forma simplificada evita que o avaliador do currículo fique com dúvidas relacionadas a períodos de tempo em relação as experiências que não estão no currículo.

__Critérios de aceite__

- Quando estiver em modo de edição
	- Se o componente estiver sendo exibido ele pode tem seu estado alterado para versão simplificada
	- Se o componente estiver em versão simplificada ele pode ter ser alterado para a versão completa

- Em modo de exibição
	- Quando o componente estiver marcado como versão simplificada ele deve ser exibido no formato simplificado de acordo com o modelo

# Especificação de arquitetura

### Diagramas arquiteturais, modelagem, relacionamentos...

#### Estrutura de configuração do perfil

Estrutura da configuração é uma lista dos conteúdos escondidos. Essa é uma estrutura simples e fácil de aplicar, cada novo conteúdo aparece como exibido conforme o requisito [[#⬛ RF 03.01 - Adição de perfis]].

```json
// estrutura da configuração
{
	"id": "...",
	"name": "...",
	"hidden_content": [
		"id_1",
		"id_2",
		"id_3"
	],
	"createdAt": ""
}
```

Qualquer novo conteúdo adicionado ao arquivo de currículo completo será dado como um conteúdo em exibição. 

O identificador utilizado para definir os conteúdos escondidos é obtido a partir do campo `id` definido na raiz do objeto de configuração do componente. Em caso de remoção ou alteração do `id` do componente, esse componente passa a não ser mais listado e será exibido no currículo.

### Descrição de estratégias e soluções técnicas

Como a estrutura do currículo não define nenhum identificador para nenhum dos conteúdos, dificultando as referências de esconder e exibir baseados apenas nos títulos.

O arquivo de configuração é baseado então nos identificadores de cada conteúdo. Dessa forma mesmo tendo alteração entre as informações os identificadores ficam estáticos.

#### Armazenamento local das configurações de perfil

As configurações de perfis serão armazenadas no armazenamento local do navegador. A ideia aqui é que podemos montar um currículo ao longo de um tempo maior, sem preocupar em perder alterações ao longo de recarregamentos da página.

Dessa forma também o autor do currículo pode gerar vários currículos locais, que não serão exibidos para os visitantes podendo assim escolher apenas os mais relevantes para serem exibidos.

O armazenamento é feito pelo `localStorage` da seguinte maneira:

- É criada uma chave `profiles` que armazena a referência dos identificadores de cada perfil, essa chave é utilizada para buscar as informações de cada perfil
- É criada uma chave para cada perfil no formato `profile.<identificador>` que armazena todas as informações do perfil.

#### Salvamento/Carregamento de configurações estaticamente

No requisito RF 03.05 é necessário ter acesso aos dados de forma estática do perfil. A estrutura de configuração será consolidada em um arquivo que então pode ser baixado pelo autor do currículo.

Esse arquivo pode ser então adicionado a pasta `public/resume` que pode ser lido para passar como parâmetro no currículo.

Nomenclatura de perfil em arquivo:

- `XXX.profile.json`

Onde `XXX` é o valor correspondente ao nome do perfil. Isso impede ter termos conflitos entre os perfis publicados.


#### Entrada com a chave do autor

Conforme o requisito [[#⬛ RF 03.03.01 - Autor pode entrar em modo de edição mesmo em publicação]] o autor pode entrar com uma chave para poder fazer a edição mesmo quando o modo de edição está desabilitado.

Para isso o autor deve clicar entrar com o texto "chave" no campo exibido ao clicar no título 'Perfis'.'

## Requisitos técnicos

- Criar identificadores para os conteúdos que são editáveis

## Requisitos não funcionais

- Fazer caber no local storage as informações de edição

# Qualidade

__Definição de Pronto__

Nenhuma definida, não sei fazer isso ainda.

__Planos de testes__

Nenhum plano definido, não sei fazer isso ainda.

# Esboços ou protótipos de UX

## Personas

- Autor: quem cria o currículo
	- Tem acesso ao projeto local
- Visitante: quem quer ver o currículo, pode ser um recrutador ou alguém que possa fazer a indicação para uma vaga

## Mockups

### Tela de exibição de currículo

![[mockup.png|Mockup das principais funcionalidades do requisito de customização dinâmica]]


Painel de perfis: esse painel exibe as principais ações possíveis com os perfis.

- Botão de adicionar
- Botão de salvar
- Botão para o currículo completo
- Botões para os modelos salvos
	- Ícone de edição do modelo salvo
	- Ícone de remoção do modelo salvo


Existem dois estados da página de currículo:

- Exibição do currículo: exibição irá exibir todas as informações configuradas como não escondidas no perfil.
- Edição do currículo

Edição do currículo: a edição do currículo é feio na própria renderização do currículo, serão exibidos botões de ação para cada elemento do conteúdo.

- Botão de esconder conteúdo
- Botão de reexibir conteúdo