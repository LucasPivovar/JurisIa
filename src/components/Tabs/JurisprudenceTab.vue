<script setup>
import { Search, ExternalLink, Bookmark, Scale } from 'lucide-vue-next'

const items = [
  { id: 1, relator: 'Min. Maurício Godinho Delgado', orgao: 'TST - 3ª Turma', date: '15/04/2025', ementa: 'JUSTA CAUSA. FALTAS INJUSTIFICADAS. ATESTADOS MÉDICOS. A apresentação de atestados médicos válidos afasta o ânimo de abandono de emprego e descaracteriza a justa causa por desídia, impondo-se a reversão da penalidade máxima.', favorability: 'Alta' },
  { id: 2, relator: 'Des. Ivani Contini Bramante', orgao: 'TRT-2 - 4ª Turma', date: '20/02/2025', ementa: 'REVERSÃO DE JUSTA CAUSA. REQUISITOS. A justa causa, por ser a penalidade mais severa aplicável ao empregado, exige prova robusta e inconteste. Existindo atestados que justificam as faltas, ainda que entregues com atraso, não se configura a desídia.', favorability: 'Alta' },
  { id: 3, relator: 'Min. Dora Maria da Costa', orgao: 'TST - 8ª Turma', date: '10/11/2024', ementa: 'ABANDONO DE EMPREGO. NÃO CONFIGURAÇÃO. A intenção de abandonar o emprego (animus abandonandi) não se presume quando o trabalhador comprova, por meio de atestados médicos, a impossibilidade de comparecimento ao serviço.', favorability: 'Média' },
]

function getTagColor(fav) {
  if (fav === 'Alta') return 'bg-success text-success-dark';
  if (fav === 'Média') return 'bg-warning text-warning-dark';
  return 'bg-danger text-danger-dark';
}
</script>

<template>
  <div class="juris-container">
    <div class="toolbar">
      <div class="search-box">
        <Search :size="18" class="search-icon" />
        <input type="text" placeholder="Buscar jurisprudências e precedentes..." />
      </div>
      <button class="btn-outline">
        <Scale :size="18" /> Refinar busca
      </button>
    </div>

    <div class="juris-list">
      <div v-for="item in items" :key="item.id" class="juris-card">
        <div class="juris-header">
          <div class="juris-meta">
            <span class="meta-item font-semibold">{{ item.orgao }}</span>
            <span class="meta-divider">•</span>
            <span class="meta-item text-secondary">Relator: {{ item.relator }}</span>
            <span class="meta-divider">•</span>
            <span class="meta-item text-secondary">Publicado em: {{ item.date }}</span>
          </div>
          <div class="juris-actions">
            <span :class="['fav-tag', getTagColor(item.favorability)]">Aderência: {{ item.favorability }}</span>
            <button class="icon-btn"><Bookmark :size="18" /></button>
          </div>
        </div>
        
        <div class="juris-body">
          <p class="ementa-text">{{ item.ementa }}</p>
        </div>
        
        <div class="juris-footer">
          <button class="btn-link"><ExternalLink :size="16" /> Ler acórdão na íntegra</button>
          <button class="btn-primary-sm">Utilizar tese na petição</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.juris-container {
  display: flex;
  flex-direction: column;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.search-box {
  position: relative;
  width: 400px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

.search-box input {
  width: 100%;
  padding: 10px 14px 10px 40px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-box input:focus {
  border-color: var(--primary);
}

.juris-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.juris-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: box-shadow 0.2s;
}

.juris-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.juris-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.juris-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.875rem;
}

.font-semibold { font-weight: 600; color: var(--primary); }
.text-secondary { color: var(--text-secondary); }
.meta-divider { color: #CBD5E1; }

.juris-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.fav-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}

.bg-success { background-color: #DCFCE7; }
.text-success-dark { color: #166534; }
.bg-warning { background-color: #FEF3C7; }
.text-warning-dark { color: #92400E; }
.bg-danger { background-color: #FEE2E2; }
.text-danger-dark { color: #991B1B; }

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
}

.icon-btn:hover { color: var(--text-primary); }

.juris-body {
  margin-bottom: 20px;
}

.ementa-text {
  font-size: 0.9375rem;
  color: var(--text-primary);
  line-height: 1.6;
  text-align: justify;
}

.juris-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 16px;
}

.btn-link {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

.btn-link:hover { color: var(--primary); }

.btn-primary-sm {
  background-color: #F5F3FF;
  color: var(--primary);
  border: 1px solid #DDD6FE;
  border-radius: var(--radius-sm);
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary-sm:hover {
  background-color: var(--primary);
  color: white;
}

@media (max-width: 768px) {
  .toolbar { flex-direction: column; gap: 16px; }
  .search-box { width: 100%; }
  .juris-header { flex-direction: column; gap: 12px; }
}
</style>
