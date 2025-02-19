# Arquitetura

# Modelo de informação

Todos os currículos compartilham informações que são pertinentes aos avaliadores ao mesmo tempo que cada vaga exige uma composição diferente de informações.

Para isso é necessário a análise de cada um dos componentes que devem ser apresentados ao currículo. Isso nos permite também levantar dicas para melhor preencher as informações.

Todos os temas compartilham a mesma composição de informação e devem definir todas as funcionalidades ativas do sistema, é pelo modelo de dados que será feita a localização, customização dinâmica, entre outras funcionalidades.

> [!important] **Não devemos perder** funcionalidades referentes as informações do currículo entre modelos.

![[Arquitetura - Modelo de informação||%cheio]]
# Sistema de Temas

A biblioteca Biluca Resume permite escolher entre vários modelos de currículos a fim que o autor possa exibir as informações da forma que ele entenda ser mais efetiva. Essa funcionalidade está definida em [[DRP 02 - Temas]].

O sistema de modelos de currículos utiliza principalmente 4 estruturas:

- **ThemeFactory:** responsável por retornar a estrutura inicial que irá renderizar o tema do currículo
- **ThemeInitializer:** classe abstrata que permite a implementação de um tema, é necessário definir o ComponentFactory, Variables e o componente de renderização utilizado
- **ComponentFactory:** fábrica de componentes do temas escolhido de acordo com as informações provenientes da estrutura do curríuclo
- **ResumeComponent:** todo componente do currículo precisa herdar da classe ResumeComponent, onde é definido suas renderização e identificador

