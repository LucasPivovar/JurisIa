<script setup>
import { Paperclip, Sparkles, Folder, Bell, HelpCircle } from 'lucide-vue-next'
import DropdownMenu from '../components/DropdownMenu.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cases = [
  { id: 1, title: 'João Silva x Empresa XPTO Ltda', area: 'Trabalhista', updated: 'há 2 horas', prob: 76 },
  { id: 2, title: 'Maria Oliveira x INSS', area: 'Previdenciário', updated: 'há 1 dia', prob: 82 },
  { id: 3, title: 'Banco ABC S/A x Fulano de Tal', area: 'Cível', updated: 'há 3 dias', prob: 61 },
  { id: 4, title: 'Empresa XPTO Ltda x Carlos Souza', area: 'Trabalhista', updated: 'há 1 semana', prob: 71 }
]

function getProbColor(prob) {
  if (prob >= 75) return '#22C55E';
  if (prob >= 60) return '#F59E0B';
  return '#EF4444';
}

function navigateToCase(id) {
  router.push(`/case/${id}`)
}
</script>

<template>
  <div class="dashboard-view">
    <div class="page-content">
      <div class="hero-section">
        <h1 class="hero-title">Como posso ajudar no <span class="text-primary">seu caso</span> hoje?</h1>
        <p class="hero-subtitle">Descreva sua situação jurídica e nossa IA irá analisar, encontrar precedentes, sugerir estratégias e muito mais.</p>
        
        <div class="prompt-box">
          <textarea class="prompt-input" placeholder="Descreva aqui seu caso, ex.: &quot;Meu cliente foi demitido por justa causa após faltar 3 dias...&quot;"></textarea>
          <div class="prompt-actions">
            <button class="btn-icon"><Paperclip :size="20" /></button>
            <div class="prompt-right">
              <span class="char-count">0/4000</span>
              <button class="btn-primary">
                <Sparkles :size="16" /> Analisar caso
              </button>
            </div>
          </div>
        </div>
        
        <div class="examples-section">
          <span class="examples-label">Exemplos:</span>
          <div class="examples-list">
            <button class="example-btn"><Folder :size="14" /> Demissão por justa causa</button>
            <button class="example-btn"><Folder :size="14" /> Auxílio-doença negado pelo INSS</button>
            <button class="example-btn"><Folder :size="14" /> Cobrança indevida em contrato</button>
            <button class="example-btn"><Folder :size="14" /> Acidente de trânsito com danos</button>
          </div>
        </div>
      </div>

      <div class="recent-cases-section">
        <div class="section-header">
          <h2>Seus casos recentes</h2>
          <a href="#" class="view-all">Ver todos</a>
        </div>
        
        <div class="cases-list">
          <div v-for="c in cases" :key="c.id" class="case-card" @click="navigateToCase(c.id)">
            <div class="case-icon-wrapper">
              <Folder :size="24" class="case-folder-icon" />
            </div>
            <div class="case-details">
              <div class="case-title-row">
                <h3 class="case-title">{{ c.title }}</h3>
                <span :class="['tag', c.area]">{{ c.area }}</span>
              </div>
              <p class="case-updated">Atualizado {{ c.updated }}</p>
            </div>
            <div class="case-stats">
              <div class="prob-value" :style="{ color: getProbColor(c.prob) }">{{ c.prob }}%</div>
              <div class="prob-label">Prob. de sucesso</div>
            </div>
            <DropdownMenu class="ml-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-view { flex: 1; display: flex; flex-direction: column; }
.page-content { padding: 40px; width: 100%; margin: 0 auto; }
.hero-section { margin-bottom: 40px; text-align: center; }

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.text-primary {
  color: var(--primary);
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 40px;
}

.prompt-box {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.prompt-input {
  width: 100%;
  border: none;
  resize: none;
  min-height: 80px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
}

.prompt-input::placeholder {
  color: #94A3B8;
}

.prompt-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.btn-icon {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: var(--bg-color);
  color: var(--text-primary);
}

.prompt-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.char-count {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.examples-section {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.examples-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.examples-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.example-btn {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.875rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.example-btn:hover {
  background: var(--bg-color);
  border-color: #CBD5E1;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
}

.view-all {
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 500;
}

.cases-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.case-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

.case-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-color: #CBD5E1;
}

.case-icon-wrapper {
  width: 48px;
  height: 48px;
  background-color: #F5F3FF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.case-folder-icon {
  color: var(--primary);
}

.case-details {
  flex: 1;
}

.case-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.case-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.case-updated {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.case-stats {
  text-align: right;
}

.prob-value {
  font-size: 1.125rem;
  font-weight: 700;
}

.prob-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.ml-4 {
  margin-left: 16px;
}
</style>
