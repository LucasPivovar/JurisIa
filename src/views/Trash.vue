<script setup>
import { Trash2, MoreVertical, RefreshCcw } from 'lucide-vue-next'
import DropdownMenu from '../components/DropdownMenu.vue'
import { useToast } from '../composables/useToast'

const { success, info } = useToast()

const deletedCases = [
  { id: 1, title: 'Pedro Santos x Construtora ABC', area: 'Trabalhista', deletedAt: '12/05/2025 10:30', deletedBy: 'João Almeida' },
  { id: 2, title: 'Lucas Ferreira x INSS', area: 'Previdenciário', deletedAt: '03/05/2025 14:22', deletedBy: 'Maria Costa' },
  { id: 3, title: 'Empresa Beta Ltda x Fulano', area: 'Cível', deletedAt: '02/05/2025 09:15', deletedBy: 'João Almeida' },
  { id: 4, title: 'Almeida Comércio x Estado RJ', area: 'Tributário', deletedAt: '28/04/2025 16:40', deletedBy: 'Pedro Lima' }
]

function emptyTrash() {
  success('Lixeira esvaziada com sucesso!')
}

function restoreItem() {
  info('Item restaurado para o workspace.')
}
</script>

<template>
  <div class="trash-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <div class="header-left">
          <div class="title-with-icon">
            <Trash2 :size="28" class="text-secondary" />
            <h1>Lixeira</h1>
          </div>
          <p class="subtitle">Casos excluídos. Eles serão removidos permanentemente após 30 dias.</p>
        </div>
        
        <button class="btn-outline text-danger" @click="emptyTrash">
          <Trash2 :size="16" /> Esvaziar lixeira
        </button>
      </div>

      <div class="docs-table-wrapper mb-6">
        <table class="docs-table">
          <thead>
            <tr>
              <th>Caso</th>
              <th>Área</th>
              <th>Excluído em</th>
              <th>Excluído por</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in deletedCases" :key="c.id">
              <td class="font-medium text-primary">{{ c.title }}</td>
              <td><span :class="['tag', c.area]">{{ c.area }}</span></td>
              <td>{{ c.deletedAt }}</td>
              <td>{{ c.deletedBy }}</td>
              <td class="actions-cell">
                <button class="btn-outline icon-only mr-2" title="Restaurar" @click="restoreItem">
                  <RefreshCcw :size="16" />
                </button>
                <DropdownMenu />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="info-box">
        <div class="info-icon">
          <Info :size="20" class="text-danger" />
        </div>
        <span>Os casos na lixeira serão excluídos permanentemente após 30 dias da exclusão. Após esse período, não será possível recuperá-los.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trash-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 40px;
  width: 100%;
  margin: 0 auto;
}

.mb-8 { margin-bottom: 32px; }
.mb-6 { margin-bottom: 24px; }
.mr-2 { margin-right: 8px; }

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

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

.text-secondary { color: var(--text-secondary); }
.text-danger { color: #EF4444; }

.btn-danger-outline {
  background: transparent;
  color: #EF4444;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: background-color 0.2s;
}

.btn-danger-outline:hover {
  background-color: #FEF2F2;
}

/* Table styles */
.docs-table-wrapper {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.docs-table {
  width: 100%;
  border-collapse: collapse;
}

.docs-table th, .docs-table td {
  padding: 16px 20px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.docs-table th {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-weight: 600;
  background-color: #F8FAFC;
}

.docs-table tbody tr {
  transition: background-color 0.2s;
}

.docs-table tbody tr:hover {
  background-color: #F8FAFC;
}

.docs-table tbody tr:last-child td {
  border-bottom: none;
}

.docs-table td {
  font-size: 0.875rem;
  color: var(--text-primary);
}

.font-medium { font-weight: 500; }

.actions-cell {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.btn-link {
  background: transparent;
  color: var(--primary);
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
}

/* Info box */
.info-box {
  background-color: #FEF2F2; /* very light red */
  border: 1px solid #FECACA;
  border-radius: var(--radius-md);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.info-icon {
  background: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FECACA;
}
</style>
