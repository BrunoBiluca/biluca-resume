# Arquitetura

# Sistema de Temas

A biblioteca Biluca Resume permite escolher entre vários modelos de currículos a fim que o autor possa exibir as informações da forma que ele entenda ser mais efetiva. Essa funcionalidade está definida em [[DRP 02 - Temas]].

O sistema de modelos de currículos utiliza principalmente 4 estruturas:

- **ThemeFactory:** responsável por retornar a estrutura inicial que irá renderizar o tema do currículo
- **ThemeInitializer:** classe abstrata que permite a implementação de um tema, é necessário definir o ComponentFactory, Variables e o componente de renderização utilizado
- **ComponentFactory:** fábrica de componentes do temas escolhido de acordo com as informações provenientes da estrutura do curríuclo
- **ResumeComponent:** todo componente do currículo precisa herdar da classe ResumeComponent, onde é definido suas renderização e identificador

