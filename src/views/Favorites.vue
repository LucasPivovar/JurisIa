<script setup>
import { Star, FileText, Scale } from 'lucide-vue-next'
import DropdownMenu from '../components/DropdownMenu.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToCase(id) {
  router.push(`/case/${id}`)
}

const favoriteCases = [
  { id: 1, title: 'Processo 001243-98.2023.8.26.0100', area: 'Cível' },
  { id: 2, title: 'João Silva vs. Tech Corp (Assédio)', area: 'Trabalhista' }
]

const favoriteDocs = [
  { id: 1, title: 'Contrato de Honorários - Maria', type: 'PDF' },
  { id: 2, title: 'Petição Inicial - Atraso Voo', type: 'DOCX' }
]
</script>

<template>
  <div class="favorites-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <div class="title-with-icon">
          <Star :size="28" class="text-warning fill-warning" />
          <h1>Favoritos</h1>
        </div>
        <p class="subtitle">Acesse rapidamente os casos que você marcou como importantes.</p>
      </div>

      <div class="cases-list">
        <div v-for="c in favoriteCases" :key="c.id" class="case-card" @click="navigateToCase(c.id)">
          <div class="case-icon-wrapper star-wrapper">
            <Scale :size="24" />
          </div>
          <div class="case-details">
            <div class="case-title-row">
              <h3 class="case-title">{{ c.title }}</h3>
              <span class="tag">{{ c.area }}</span>
            </div>
          </div>
          <DropdownMenu class="ml-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorites-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 40px;
  width: 100%;
}

.mb-8 { margin-bottom: 32px; }

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.title-with-icon h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

.subtitle {
  color: var(--text-secondary);
  margin-left: 40px;
}

.text-warning {
  color: var(--warning);
}

.fill-warning {
  fill: var(--warning);
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
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.star-wrapper {
  background-color: #FEF3C7; /* warning bg */
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
