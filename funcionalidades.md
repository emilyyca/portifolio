# Funcionalidades em ordem de prioridade

1. **Base + hero:** HTML, CSS e JS puro; menu elegante; título grande `Emily Silva`; frase, chamada para projetos, grid editorial assimétrico; `id="inicio"`.
2. **Sobre mim + foto REAL:** seção `id="sobre"`, etiqueta `01 / SOBRE`, texto de `identidade.md`, dados breves, foto em `assets/foto-emily.jpg` com recorte editorial e acessibilidade.
3. **Projeto:** `id="projetos"`, etiqueta `02 / PROJETOS`, um único Sistema de Scout Esportivo para Voleibol com descrição, tecnologias e funcionalidades. Se não houver prints reais, não fingir que existem; incluir espaços/indicação discreta ou composição tipográfica sem imagem fictícia.
4. **Contato:** `id="contato"`, etiqueta `03 / CONTATO`, frase editorial e links de e-mail e LinkedIn funcionais. Github só quando houver URL real. Sem formulário falso.
5. **Navegação real:** menu fixo ou sticky, âncoras que funcionam, menu mobile funcional se necessário, foco teclado.
6. **Responsividade:** validar 360px/375px/768px/desktop; sem conteúdo cortado nem scroll horizontal.
7. **Movimento sutil:** hover em links, reveal opcional, respeitar `prefers-reduced-motion`.
8. **Opcional, só se sobrar tempo:** modo claro/escuro, desde que implemente de verdade e preserve o visual.

## Testes de aceitação
- A foto aparece corretamente em Sobre mim sem distorção ou corte do rosto.
- Pelo menos Sobre mim, Projetos e Contato estão completos.
- Todos os links mostrados levam a destinos reais.
- O site tem personalidade editorial, não uma coleção de cards repetidos.
- Funciona no celular e computador.
- Pode ser aberto via `index.html` ou servidor estático local sem instalar frameworks.
- Pode ser publicado no GitHub e Vercel como site estático, sem comando de build.
