# CYBERPUNK RED - Criador de Personagem

Uma Single Page Application (SPA) temática cyberpunk para criação parcial de personagens do Cyberpunk RED.

## 🎮 Características

### ✨ Stats (Atributos)
- **10 Atributos em Português:**
  - Inteligência (INT)
  - Reflexos (REF)
  - Destreza (DEX)
  - Técnica (TECH)
  - Cool (COOL)
  - Vontade (WILL)
  - Sorte (LUCK)
  - Movimento (MOVE)
  - Corpo (BODY)
  - Empatia (EMP)

- **Regras de Validação:**
  - Total máximo: 57 pontos
  - Valor mínimo: 2
  - Valor máximo: 8
  - Apenas 1 atributo pode ter valor 8
  - Contador flutuante em tempo real mostrando pontos restantes
  - Display dinâmico do total com avisos visuais

### 🎯 Habilidades (Skills)
- **42 Habilidades disponíveis** baseadas no Cyberpunk RED
- Seleção de exatamente 12 habilidades
- **Descrições completas:** Cada habilidade tem um ícone ⓘ que abre um modal com a descrição detalhada
- Sistema de checkbox com desabilitação automática após 12 seleções

### 📊 Distribuição de Níveis
- Campos dinâmicos gerados para as 12 habilidades selecionadas
- **Regras de Validação:**
  - Total máximo: 54 pontos
  - Níveis entre 2-8
  - Apenas 1 habilidade pode ter nível 8
  - Display em tempo real da soma

### 📝 Informações do Jogador
- Campos para nome do jogador
- Campo para nome do personagem
- Integrados no formulário de criação

### 💾 Exportação
- Exporta para arquivo JSON estruturado
- Formato inclui:
  - `playerName`: Nome do jogador
  - `characterName`: Nome do personagem
  - `stats`: Objeto com todos os atributos
  - `skills`: Array com nome e nível das habilidades
  - `metadata`: Data de criação, versão do sistema (2.077) e tipo

## 🎨 Estilo Cyberpunk
- **Cores Neon:** Ciano, Magenta, Amarelo
- **Efeitos visuais:**
  - Glitch no título
  - Scan lines animadas
  - Bordas brilhantes
  - Modal com animações suaves
- **Tipografia:** Orbitron + Share Tech Mono
- **Design Responsivo** para desktop e mobile

## 🚀 Como Usar

1. Abra `index.html` no navegador
2. Preencha o nome do jogador e do personagem
3. Distribua os 57 pontos entre os 10 atributos
4. Selecione exatamente 12 habilidades
5. Clique no ícone ⓘ para ver a descrição de cada habilidade
6. Distribua 54 pontos entre as habilidades selecionadas
7. Clique em "EXPORT TO JSON" para baixar o personagem

## 📦 Deploy

A aplicação é uma SPA pura (sem dependências externas), podendo ser deployada em qualquer servidor web estático.

### Opções de Deploy:
- **Netlify:** Arraste a pasta completa para o Netlify Drop
- **GitHub Pages:** Faça upload dos arquivos para um repositório e ative GitHub Pages
- **Qualquer servidor web:** Copie os 3 arquivos para o diretório público do seu servidor

### Requisitos Técnicos:
- Navegador moderno com suporte a ES6+
- Sem dependências externas
- Funciona offline após carregamento inicial

## 📄 Arquivos

- `index.html` - Estrutura da página com formulários e seções
- `style.css` - Estilos cyberpunk com animações (glitch, scan lines, gradientes neon)
- `script.js` - Lógica de validação, gerenciamento de estado e exportação JSON
- `README.md` - Documentação do projeto

## 🔧 Funcionalidades Técnicas

- **Validação em Tempo Real:** Feedback imediato sobre pontos restantes
- **Armazenamento Local:** Possibilidade de salvar progresso (pode ser implementado)
- **JSON Export:** Estrutura pronta para integração com sistemas de RPG
- **Design Responsivo:** Funciona em desktop e mobile
- **Sem Dependências:** Apenas HTML, CSS e JavaScript vanilla

---

**© 2077 PANDORA SYSTEMS // ALL RIGHTS RESERVED**
Guilherme Santana :D
