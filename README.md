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
  - Total máximo: 60 pontos
  - Valor mínimo: 2
  - Valor máximo: 8
  - Apenas 1 atributo pode ter valor 8
  - Display dinâmico do total com avisos visuais

### 🎯 Habilidades (Skills)
- **43 Habilidades disponíveis** baseadas no Cyberpunk RED
- Seleção de exatamente 12 habilidades
- **Descrições completas:** Cada habilidade tem um ícone ⓘ que abre um modal com a descrição detalhada
- Sistema de checkbox com desabilitação automática após 12 seleções

### 📊 Distribuição de Níveis
- Campos dinâmicos gerados para as 12 habilidades selecionadas
- **Regras de Validação:**
  - Total máximo: 54 pontos
  - Níveis entre 2-7
  - Apenas 1 habilidade pode ter nível 8
  - Display em tempo real da soma

### 💾 Exportação
- Exporta para arquivo JSON estruturado
- Formato inclui:
  - `stats`: Objeto com todos os atributos
  - `skills`: Array com nome e nível das habilidades
  - `metadata`: Data de criação, versão e sistema

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
2. Distribua os 60 pontos entre os 10 atributos
3. Selecione exatamente 12 habilidades
4. Clique no ícone ⓘ para ver a descrição de cada habilidade
5. Distribua 54 pontos entre as habilidades selecionadas
6. Clique em "EXPORT TO JSON" para baixar o personagem

## 📦 Deploy

Para fazer deploy no Netlify:
1. Arraste a pasta completa para o Netlify Drop
2. Ou faça upload dos 3 arquivos: `index.html`, `style.css`, `script.js`

## 📄 Arquivos

- `index.html` - Estrutura da página
- `style.css` - Estilos cyberpunk
- `script.js` - Lógica de validação e exportação

---

**© 2077 PANDORA SYSTEMS // ALL RIGHTS RESERVED**
