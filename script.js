// CYBERPUNK CHARACTER CREATION - SCRIPT
// Lista completa de habilidades com descrições
const AVAILABLE_SKILLS = [
    { name: 'Contabilidade (INT)', description: 'Habilidade de equilibrar livros contábeis, criar ou identificar falsificações, manipular números, elaborar orçamentos e lidar com operações comerciais do dia a dia.' },
    { name: 'Atuação (COOL)', description: 'Habilidade de assumir papéis, disfarçar-se como outra pessoa (real ou fictícia) e simular emoções e humores.' },
    { name: 'Atletismo (DEX)', description: 'Habilidade de saltar, escalar, nadar, lançar objetos, levantar pesos e realizar tarefas físicas básicas. Inclui o uso de armas de arremesso.' },
    { name: 'Briga (DEX)', description: 'Habilidade de lutar e agarrar usando força bruta.' },
    { name: 'Suborno (COOL)', description: 'Habilidade de saber quando subornar alguém, como abordar a pessoa e quanto oferecer.' },
    { name: 'Burocracia (INT)', description: 'Habilidade de lidar com burocratas, reduzir entraves e extrair informações de sistemas burocráticos.' },
    { name: 'Negócios (INT)', description: 'Habilidade relacionada a práticas comerciais básicas, oferta e demanda, gestão de funcionários, compras, vendas e marketing.' },
    { name: 'Composição (INT)', description: 'Habilidade de escrever músicas, artigos, histórias ou outros conteúdos criativos.' },
    { name: 'Ocultar/Revelar Objeto (INT)', description: 'Habilidade de esconder objetos ou localizar itens que foram escondidos. Usada também para esconder armas sob as roupas ou detectá-las.' },
    { name: 'Concentração (WILL)', description: 'Habilidade de foco e controle mental, abrangendo memória, lembrança e controle fisiológico.' },
    { name: 'Conversa (EMP)', description: 'Habilidade de extrair informações das pessoas sem alertá-las, usando conversas cuidadosas.' },
    { name: 'Criminologia (INT)', description: 'Habilidade de descobrir pistas por meio de coleta de impressões digitais, testes balísticos, análise de provas e pesquisa em arquivos policiais.' },
    { name: 'Criptografia (INT)', description: 'Habilidade de codificar e decodificar mensagens.' },
    { name: 'Dedução (INT)', description: 'Habilidade de reunir pistas para chegar a conclusões complexas ou diagnósticos não óbvios.' },
    { name: 'Dirigir Veículos Terrestres (REF)', description: 'Habilidade de dirigir e manobrar veículos terrestres.' },
    { name: 'Educação (INT)', description: 'Habilidade de conhecimento geral equivalente a uma educação básica: leitura, escrita, matemática e noções de história.' },
    { name: 'Eletrônica/Tecnologia de Segurança (TECH)', description: 'Habilidade de identificar, reparar, neutralizar e instalar dispositivos eletrônicos, computadores, cyberdecks, gadgets e sistemas de segurança.' },
    { name: 'Evasão (DEX)', description: 'Habilidade de se esquivar de ataques corpo a corpo.' },
    { name: 'Primeiros Socorros (TECH)', description: 'Habilidade de aplicar tratamentos médicos para impedir que alguém morra ou para tratar ferimentos críticos comuns.' },
    { name: 'Falsificação (TECH)', description: 'Habilidade de criar e identificar documentos, obras de arte e identificações falsas.' },
    { name: 'Arma (REF)', description: 'Habilidade de disparar armas de projétil portáteis com precisão.' },
    { name: 'Percepção Humana (EMP)', description: 'Habilidade de ler expressões faciais e linguagem corporal para identificar emoções, mentiras ou enganos.' },
    { name: 'Interrogatório (COOL)', description: 'Habilidade de extrair informações de alguém por meio de pressão ou força psicológica.' },
    { name: 'Pesquisa na Biblioteca (INT)', description: 'Habilidade de usar bancos de dados, Data Pool, bibliotecas e arquivos para encontrar informações.' },
    { name: 'Especialista Local (INT)', description: 'Habilidade de conhecer profundamente uma área e entender as agendas de suas facções políticas e criminosas.' },
    { name: 'Armas Brancas (DEX)', description: 'Habilidade de lutar usando armas brancas.' },
    { name: 'Paramédico (TECH)', description: 'Habilidade de aplicar tratamentos médicos avançados que não exigem cirurgia, impedindo a morte e tratando ferimentos críticos.' },
    { name: 'Percepção (INT)', description: 'Habilidade de detectar coisas ocultas como pistas, armadilhas e pessoas escondidas (embora não objetos, que usam Ocultar/Revelar Objeto).' },
    { name: 'Persuasão (COOL)', description: 'Habilidade de convencer, influenciar ou persuadir indivíduos ou grupos.' },
    { name: 'Fotografia/Cinema (TECH)', description: 'Habilidade de produzir fotografias profissionais, filmes e braindances.' },
    { name: 'Arrombar Fechaduras (TECH)', description: 'Habilidade de abrir fechaduras não eletrônicas e contornar medidas de segurança mecânicas.' },
    { name: 'Furto (TECH)', description: 'Habilidade de roubar carteiras e pequenos objetos sem ser notado.' },
    { name: 'Tocar Instrumento (TECH)', description: 'Habilidade de tocar profissionalmente um instrumento musical.' },
    { name: 'Resistir à Tortura/Drogas (WILL)', description: 'Habilidade de suportar dor, interrogatórios e efeitos de substâncias químicas.' },
    { name: 'Armas nos Ombros (REF)', description: 'Habilidade de disparar armas apoiadas no ombro.' },
    { name: 'Furtividade (DEX)', description: 'Habilidade de mover-se silenciosamente, esconder-se, agir discretamente ou evitar ser detectado.' },
    { name: 'Conhecimento das Ruas (COOL)', description: 'Habilidade de saber onde conseguir itens ilegais, lidar com criminosos e evitar problemas em áreas perigosas.' },
    { name: 'Táticas (INT)', description: 'Habilidade de gerir batalhas em larga escala de forma eficiente e antecipar reações inimigas.' },
    { name: 'Rastreamento (INT)', description: 'Habilidade de seguir rastros por meio de pegadas e outras pistas deixadas para trás.' },
    { name: 'Negociação (COOL)', description: 'Habilidade de fazer bons acordos, fechar negócios e lidar com clientes ou comerciantes.' },
    { name: 'Guarda-roupa e Estilo (COOL)', description: 'Habilidade de saber o que vestir, quando vestir e como parecer estiloso em qualquer situação.' },
    { name: 'Lidar com Animais (INT)', description: 'Habilidade de entender comportamentos animais e controlar ou acalmar criaturas.' },
    { name: 'Leitura Labial (INT)', description: 'Habilidade de entender conversas observando apenas o movimento dos lábios.' }
];

const REQUIRED_SKILLS_COUNT = 12;
const MAX_STATS_TOTAL = 57;
const MAX_LEVELS_TOTAL = 54;
const MIN_STAT_VALUE = 2;
const MAX_STAT_VALUE = 8;
const MAX_EIGHT_COUNT = 1;

let selectedSkills = [];

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeStats();
    initializeSkillsChecklist();
    initializeExportButton();
    updateFloatingCounter();
});

// ============================================
// SEÇÃO DE ATRIBUTOS (STATS)
// ============================================
function initializeStats() {
    const statInputs = document.querySelectorAll('.stat-input');
    
    statInputs.forEach(input => {
        input.addEventListener('input', validateStats);
        input.addEventListener('change', enforceStatLimits);
    });
    
    validateStats();
}

function enforceStatLimits(event) {
    const input = event.target;
    let value = parseInt(input.value) || MIN_STAT_VALUE;
    
    // Forçar limites mínimos e máximos
    if (value < MIN_STAT_VALUE) value = MIN_STAT_VALUE;
    if (value > MAX_STAT_VALUE) value = MAX_STAT_VALUE;
    
    input.value = value;
    validateStats();
}

function validateStats() {
    const statInputs = document.querySelectorAll('.stat-input');
    const totalElement = document.getElementById('stats-total');
    const warningElement = document.getElementById('stats-warning');
    const errorElement = document.getElementById('stats-error');
    
    let total = 0;
    let eightCount = 0;
    let errors = [];
    
    // Calcular total e contar valores 8
    statInputs.forEach(input => {
        const value = parseInt(input.value) || MIN_STAT_VALUE;
        total += value;
        
        if (value === MAX_STAT_VALUE) {
            eightCount++;
        }
        
        // Verificar limites individuais
        if (value < MIN_STAT_VALUE) {
            errors.push(`${input.id.replace('stat-', '').toUpperCase()} não pode ser menor que ${MIN_STAT_VALUE}`);
        }
        if (value > MAX_STAT_VALUE) {
            errors.push(`${input.id.replace('stat-', '').toUpperCase()} não pode ser maior que ${MAX_STAT_VALUE}`);
        }
    });
    
    // Atualizar display do total
    totalElement.textContent = total;
    
    // Atualizar cor baseado no total
    if (total === MAX_STATS_TOTAL) {
        totalElement.style.color = 'var(--neon-yellow)';
    } else if (total > MAX_STATS_TOTAL) {
        totalElement.style.color = 'var(--error-color)';
    } else {
        totalElement.style.color = 'var(--neon-cyan)';
    }
    
    // Mostrar/esconder aviso de limite
    if (total > MAX_STATS_TOTAL) {
        warningElement.textContent = '⚠ LIMITE EXCEDIDO';
        warningElement.style.color = 'var(--error-color)';
        warningElement.classList.remove('hidden');
        errors.push(`Total de pontos (${total}) excede o máximo permitido (${MAX_STATS_TOTAL})`);
    } else if (total === MAX_STATS_TOTAL) {
        warningElement.textContent = '✓ PONTOS COMPLETOS';
        warningElement.style.color = 'var(--neon-yellow)';
        warningElement.classList.remove('hidden');
    } else if (total > MAX_STATS_TOTAL - 5) {
        warningElement.textContent = '⚠ PRÓXIMO DO LIMITE';
        warningElement.style.color = 'var(--warning-color)';
        warningElement.classList.remove('hidden');
    } else {
        warningElement.classList.add('hidden');
    }
    
    // Atualizar contador flutuante
    updateFloatingCounter();
    
    // Verificar regra de apenas 1 atributo pode ser 8
    if (eightCount > MAX_EIGHT_COUNT) {
        errors.push(`Apenas ${MAX_EIGHT_COUNT} atributo pode ter valor 8. Você tem ${eightCount}.`);
    }
    
    // Mostrar erros
    if (errors.length > 0) {
        errorElement.textContent = errors.join(' | ');
        errorElement.classList.remove('hidden');
    } else {
        errorElement.classList.add('hidden');
    }
    
    return errors.length === 0 && total <= MAX_STATS_TOTAL;
}

// ============================================
// SEÇÃO DE SELEÇÃO DE HABILIDADES
// ============================================
function initializeSkillsChecklist() {
    const checklistContainer = document.getElementById('skills-checklist');
    
    AVAILABLE_SKILLS.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `skill-${index}`;
        checkbox.value = skill.name;
        checkbox.dataset.description = skill.description;
        checkbox.addEventListener('change', handleSkillSelection);
        
        const label = document.createElement('label');
        label.htmlFor = `skill-${index}`;
        label.textContent = skill.name;
        
        const infoBtn = document.createElement('span');
        infoBtn.className = 'info-icon';
        infoBtn.textContent = 'ℹ';
        infoBtn.title = 'Ver descrição';
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showSkillDescription(skill.name, skill.description);
        });
        
        skillDiv.appendChild(checkbox);
        skillDiv.appendChild(label);
        skillDiv.appendChild(infoBtn);
        checklistContainer.appendChild(skillDiv);
    });
}

function handleSkillSelection() {
    const checkboxes = document.querySelectorAll('.skills-checklist input[type="checkbox"]');
    const selectedElement = document.getElementById('skills-selected');
    const warningElement = document.getElementById('skills-warning');
    const errorElement = document.getElementById('skills-error');
    
    selectedSkills = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSkills.push(checkbox.value);
        }
    });
    
    // Atualizar contador
    selectedElement.textContent = selectedSkills.length;
    selectedElement.style.color = selectedSkills.length !== REQUIRED_SKILLS_COUNT ? 'var(--warning-color)' : 'var(--neon-cyan)';
    
    // Mostrar/esconder avisos
    if (selectedSkills.length !== REQUIRED_SKILLS_COUNT) {
        warningElement.classList.remove('hidden');
    } else {
        warningElement.classList.add('hidden');
    }
    
    // Desabilitar checkboxes se já tem 12 selecionados
    if (selectedSkills.length >= REQUIRED_SKILLS_COUNT) {
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                checkbox.disabled = true;
                checkbox.parentElement.style.opacity = '0.5';
            }
        });
        errorElement.classList.add('hidden');
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.parentElement.style.opacity = '1';
        });
    }
    
    // Gerar campos de distribuição de níveis
    generateSkillLevelsFields();
}

// ============================================
// SEÇÃO DE DISTRIBUIÇÃO DE NÍVEIS
// ============================================
function generateSkillLevelsFields() {
    const gridContainer = document.getElementById('skills-levels-grid');
    gridContainer.innerHTML = '';
    
    if (selectedSkills.length === 0) {
        gridContainer.innerHTML = '<p class="placeholder-text">Select 12 skills above to allocate levels</p>';
        return;
    }
    
    selectedSkills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-level-item';
        
        const label = document.createElement('label');
        label.htmlFor = `level-${index}`;
        label.textContent = skill;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `level-${index}`;
        input.className = 'level-input';
        input.min = MIN_STAT_VALUE;
        input.max = MAX_STAT_VALUE;
        input.value = MIN_STAT_VALUE;
        input.dataset.skill = skill;
        input.addEventListener('input', validateLevels);
        input.addEventListener('change', enforceLevelLimits);
        
        skillDiv.appendChild(label);
        skillDiv.appendChild(input);
        gridContainer.appendChild(skillDiv);
    });
    
    validateLevels();
}

function enforceLevelLimits(event) {
    const input = event.target;
    let value = parseInt(input.value) || MIN_STAT_VALUE;
    
    // Forçar limites
    if (value < MIN_STAT_VALUE) value = MIN_STAT_VALUE;
    if (value > MAX_STAT_VALUE) value = MAX_STAT_VALUE;
    
    input.value = value;
    validateLevels();
}

function validateLevels() {
    const levelInputs = document.querySelectorAll('.level-input');
    const totalElement = document.getElementById('levels-total');
    const warningElement = document.getElementById('levels-warning');
    const errorElement = document.getElementById('levels-error');
    
    if (levelInputs.length === 0) return true;
    
    let total = 0;
    let eightCount = 0;
    let errors = [];
    
    levelInputs.forEach(input => {
        const value = parseInt(input.value) || MIN_STAT_VALUE;
        total += value;
        
        if (value === MAX_STAT_VALUE) {
            eightCount++;
        }
        
        if (value < MIN_STAT_VALUE) {
            errors.push(`${input.dataset.skill} não pode ser menor que ${MIN_STAT_VALUE}`);
        }
        if (value > MAX_STAT_VALUE) {
            errors.push(`${input.dataset.skill} não pode ser maior que ${MAX_STAT_VALUE}`);
        }
    });
    
    // Atualizar display do total
    totalElement.textContent = total;
    
    // Atualizar cor baseado no total
    if (total === MAX_LEVELS_TOTAL) {
        totalElement.style.color = 'var(--neon-yellow)';
    } else if (total > MAX_LEVELS_TOTAL) {
        totalElement.style.color = 'var(--error-color)';
    } else {
        totalElement.style.color = 'var(--neon-cyan)';
    }
    
    // Avisos
    if (total > MAX_LEVELS_TOTAL) {
        warningElement.textContent = '⚠ LIMITE EXCEDIDO';
        warningElement.style.color = 'var(--error-color)';
        warningElement.classList.remove('hidden');
        errors.push(`Total de níveis (${total}) excede o máximo permitido (${MAX_LEVELS_TOTAL})`);
    } else if (total === MAX_LEVELS_TOTAL) {
        warningElement.textContent = '✓ PONTOS COMPLETOS';
        warningElement.style.color = 'var(--neon-yellow)';
        warningElement.classList.remove('hidden');
    } else if (total > MAX_LEVELS_TOTAL - 5) {
        warningElement.textContent = '⚠ PRÓXIMO DO LIMITE';
        warningElement.style.color = 'var(--warning-color)';
        warningElement.classList.remove('hidden');
    } else {
        warningElement.classList.add('hidden');
    }
    
    // Atualizar contador flutuante
    updateFloatingCounter();
    
    // Verificar regra de apenas 1 habilidade pode ser 8
    if (eightCount > MAX_EIGHT_COUNT) {
        errors.push(`Apenas ${MAX_EIGHT_COUNT} habilidade pode ter nível 8. Você tem ${eightCount}.`);
    }
    
    // Mostrar erros
    if (errors.length > 0) {
        errorElement.textContent = errors.join(' | ');
        errorElement.classList.remove('hidden');
    } else {
        errorElement.classList.add('hidden');
    }
    
    return errors.length === 0 && total <= MAX_LEVELS_TOTAL;
}

// ============================================
// EXPORTAÇÃO PARA JSON
// ============================================
function initializeExportButton() {
    const exportBtn = document.getElementById('export-btn');
    exportBtn.addEventListener('click', exportToJSON);
}

// ============================================
// CONTADOR FLUTUANTE DE PONTOS RESTANTES
// ============================================
function updateFloatingCounter() {
    const statsRemainingElement = document.getElementById('remaining-stats');
    const skillsRemainingElement = document.getElementById('remaining-skills');
    
    // Calcular pontos restantes de STATS
    const statInputs = document.querySelectorAll('.stat-input');
    let statsTotal = 0;
    statInputs.forEach(input => {
        statsTotal += parseInt(input.value) || MIN_STAT_VALUE;
    });
    const statsRemaining = MAX_STATS_TOTAL - statsTotal;
    
    // Calcular pontos restantes de NÍVEIS
    const levelInputs = document.querySelectorAll('.level-input');
    let levelsTotal = 0;
    if (levelInputs.length > 0) {
        levelInputs.forEach(input => {
            levelsTotal += parseInt(input.value) || MIN_STAT_VALUE;
        });
    }
    const skillsRemaining = MAX_LEVELS_TOTAL - levelsTotal;
    
    // Atualizar display
    statsRemainingElement.textContent = statsRemaining;
    skillsRemainingElement.textContent = skillsRemaining;
    
    // Aplicar cores baseado nos valores
    if (statsRemaining === 0) {
        statsRemainingElement.style.color = 'var(--neon-yellow)';
        statsRemainingElement.parentElement.style.borderColor = 'var(--neon-yellow)';
    } else if (statsRemaining < 0) {
        statsRemainingElement.style.color = 'var(--error-color)';
        statsRemainingElement.parentElement.style.borderColor = 'var(--error-color)';
    } else {
        statsRemainingElement.style.color = 'var(--neon-cyan)';
        statsRemainingElement.parentElement.style.borderColor = 'var(--neon-cyan)';
    }
    
    if (skillsRemaining === 0) {
        skillsRemainingElement.style.color = 'var(--neon-yellow)';
        skillsRemainingElement.parentElement.style.borderColor = 'var(--neon-yellow)';
    } else if (skillsRemaining < 0) {
        skillsRemainingElement.style.color = 'var(--error-color)';
        skillsRemainingElement.parentElement.style.borderColor = 'var(--error-color)';
    } else {
        skillsRemainingElement.style.color = 'var(--neon-cyan)';
        skillsRemainingElement.parentElement.style.borderColor = 'var(--neon-cyan)';
    }
}

// ============================================
// MODAL DE DESCRIÇÃO DAS HABILIDADES
// ============================================
function showSkillDescription(skillName, description) {
    const modal = document.getElementById('skill-modal');
    const modalTitle = document.getElementById('modal-skill-name');
    const modalDescription = document.getElementById('modal-skill-description');
    
    modalTitle.textContent = skillName;
    modalDescription.textContent = description;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('skill-modal');
    modal.classList.add('hidden');
}

// Event listeners para o modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('skill-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

function exportToJSON() {
    const errorElement = document.getElementById('export-error');
    
    // Validar tudo antes de enviar
    const statsValid = validateStats();
    const levelsValid = validateLevels();
    
    if (!statsValid) {
        errorElement.textContent = 'ERRO: Corrija os problemas na seção de STATS antes de enviar.';
        errorElement.classList.remove('hidden');
        return;
    }
    
    // Verificar se todos os pontos de STATS foram distribuídos
    const allStatInputs = document.querySelectorAll('.stat-input');
    let statsTotal = 0;
    allStatInputs.forEach(input => {
        statsTotal += parseInt(input.value) || MIN_STAT_VALUE;
    });
    
    if (statsTotal < MAX_STATS_TOTAL) {
        errorElement.textContent = `ERRO: Você ainda tem ${MAX_STATS_TOTAL - statsTotal} pontos de STATS disponíveis. Distribua todos os pontos antes de enviar.`;
        errorElement.classList.remove('hidden');
        return;
    }
    
    if (selectedSkills.length !== REQUIRED_SKILLS_COUNT) {
        errorElement.textContent = `ERRO: Selecione exatamente ${REQUIRED_SKILLS_COUNT} habilidades.`;
        errorElement.classList.remove('hidden');
        return;
    }
    
    if (!levelsValid) {
        errorElement.textContent = 'ERRO: Corrija os problemas na distribuição de NÍVEIS antes de enviar.';
        errorElement.classList.remove('hidden');
        return;
    }
    
    // Verificar se todos os pontos de NÍVEIS foram distribuídos
    const allLevelInputs = document.querySelectorAll('.level-input');
    if (allLevelInputs.length > 0) {
        let levelsTotal = 0;
        allLevelInputs.forEach(input => {
            levelsTotal += parseInt(input.value) || MIN_STAT_VALUE;
        });
        
        if (levelsTotal < MAX_LEVELS_TOTAL) {
            errorElement.textContent = `ERRO: Você ainda tem ${MAX_LEVELS_TOTAL - levelsTotal} pontos de NÍVEIS disponíveis. Distribua todos os pontos antes de enviar.`;
            errorElement.classList.remove('hidden');
            return;
        }
    }
    
    errorElement.classList.add('hidden');
    
    // Coletar dados dos stats
    const stats = {};
    const statInputs = document.querySelectorAll('.stat-input');
    statInputs.forEach(input => {
        const statName = input.id.replace('stat-', '').toUpperCase();
        stats[statName] = parseInt(input.value);
    });
    
    // Coletar dados das skills
    const skills = [];
    const levelInputs = document.querySelectorAll('.level-input');
    levelInputs.forEach(input => {
        skills.push({
            name: input.dataset.skill,
            level: parseInt(input.value)
        });
    });
    
    // Coletar informações do jogador e personagem
    const playerName = document.getElementById('player-name').value.trim() || 'Sem nome';
    const characterName = document.getElementById('character-name').value.trim() || 'Sem nome';
    
    // Montar objeto final
    const characterData = {
        player: playerName,
        character: characterName,
        stats: stats,
        skills: skills,
        metadata: {
            created: new Date().toISOString(),
            version: "1.0",
            system: "Cyberpunk RED"
        }
    };
    
    // Criar mensagem formatada para WhatsApp
    const jsonString = JSON.stringify(characterData, null, 2);
    
    let message = `🎮 *CYBERPUNK RED - FICHA DE PERSONAGEM*\n\n`;
    message += `👤 *Jogador:* ${playerName}\n`;
    message += `🎭 *Personagem:* ${characterName}\n\n`;
    message += `📊 *STATS:*\n`;
    
    Object.entries(stats).forEach(([stat, value]) => {
        message += `   • ${stat}: ${value}\n`;
    });
    
    message += `\n🎯 *HABILIDADES:*\n`;
    skills.forEach(skill => {
        message += `   • ${skill.name}: ${skill.level}\n`;
    });
    
    message += `\n📦 *Dados completos em JSON:*\n\`\`\`${jsonString}\`\`\``;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Feedback visual
    const exportBtn = document.getElementById('export-btn');
    const originalText = exportBtn.innerHTML;
    exportBtn.innerHTML = '<span class="btn-text">✓ ENVIADO AO WHATSAPP</span>';
    exportBtn.style.borderColor = 'var(--neon-yellow)';
    exportBtn.style.color = 'var(--neon-yellow)';
    
    setTimeout(() => {
        exportBtn.innerHTML = originalText;
        exportBtn.style.borderColor = 'var(--neon-cyan)';
        exportBtn.style.color = 'var(--neon-cyan)';
    }, 2000);
}
