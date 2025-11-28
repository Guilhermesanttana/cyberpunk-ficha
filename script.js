// CYBERPUNK CHARACTER CREATION - SCRIPT
// Lista completa de habilidades
const AVAILABLE_SKILLS = [
    'Athletics', 'Brawling', 'Concentration', 'Conversation', 'Dance',
    'Deduction', 'Drive Land Vehicle', 'Education', 'Evasion', 'First Aid',
    'Handgun', 'Human Perception', 'Interrogation', 'Language', 'Library Search',
    'Local Expert', 'Melee Weapon', 'Perception', 'Persuasion', 'Pick Lock',
    'Pick Pocket', 'Rifle', 'Stealth', 'Streetwise', 'Tactics',
    'Tracking', 'Trading', 'Wardrobe & Style', 'Wilderness Survival'
];

const REQUIRED_SKILLS_COUNT = 12;
const MAX_STATS_TOTAL = 60;
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
    totalElement.style.color = total > MAX_STATS_TOTAL ? 'var(--error-color)' : 'var(--neon-cyan)';
    
    // Mostrar/esconder aviso de limite
    if (total > MAX_STATS_TOTAL) {
        warningElement.classList.remove('hidden');
        errors.push(`Total de pontos (${total}) excede o máximo permitido (${MAX_STATS_TOTAL})`);
    } else if (total > MAX_STATS_TOTAL - 5) {
        warningElement.textContent = '⚠ PRÓXIMO DO LIMITE';
        warningElement.classList.remove('hidden');
    } else {
        warningElement.classList.add('hidden');
    }
    
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
        checkbox.value = skill;
        checkbox.addEventListener('change', handleSkillSelection);
        
        const label = document.createElement('label');
        label.htmlFor = `skill-${index}`;
        label.textContent = skill;
        
        skillDiv.appendChild(checkbox);
        skillDiv.appendChild(label);
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
    totalElement.style.color = total > MAX_LEVELS_TOTAL ? 'var(--error-color)' : 'var(--neon-cyan)';
    
    // Avisos
    if (total > MAX_LEVELS_TOTAL) {
        warningElement.classList.remove('hidden');
        errors.push(`Total de níveis (${total}) excede o máximo permitido (${MAX_LEVELS_TOTAL})`);
    } else if (total > MAX_LEVELS_TOTAL - 5) {
        warningElement.textContent = '⚠ PRÓXIMO DO LIMITE';
        warningElement.classList.remove('hidden');
    } else {
        warningElement.classList.add('hidden');
    }
    
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

function exportToJSON() {
    const errorElement = document.getElementById('export-error');
    
    // Validar tudo antes de exportar
    const statsValid = validateStats();
    const levelsValid = validateLevels();
    
    if (!statsValid) {
        errorElement.textContent = 'ERRO: Corrija os problemas na seção de STATS antes de exportar.';
        errorElement.classList.remove('hidden');
        return;
    }
    
    if (selectedSkills.length !== REQUIRED_SKILLS_COUNT) {
        errorElement.textContent = `ERRO: Selecione exatamente ${REQUIRED_SKILLS_COUNT} habilidades.`;
        errorElement.classList.remove('hidden');
        return;
    }
    
    if (!levelsValid) {
        errorElement.textContent = 'ERRO: Corrija os problemas na distribuição de NÍVEIS antes de exportar.';
        errorElement.classList.remove('hidden');
        return;
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
    
    // Montar objeto final
    const characterData = {
        stats: stats,
        skills: skills,
        metadata: {
            created: new Date().toISOString(),
            version: "1.0",
            system: "Cyberpunk RED"
        }
    };
    
    // Criar e baixar arquivo JSON
    const jsonString = JSON.stringify(characterData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cyberpunk-character-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Feedback visual
    const exportBtn = document.getElementById('export-btn');
    const originalText = exportBtn.innerHTML;
    exportBtn.innerHTML = '<span class="btn-text">✓ EXPORTED SUCCESSFULLY</span>';
    exportBtn.style.borderColor = 'var(--neon-yellow)';
    exportBtn.style.color = 'var(--neon-yellow)';
    
    setTimeout(() => {
        exportBtn.innerHTML = originalText;
        exportBtn.style.borderColor = 'var(--neon-cyan)';
        exportBtn.style.color = 'var(--neon-cyan)';
    }, 2000);
}
