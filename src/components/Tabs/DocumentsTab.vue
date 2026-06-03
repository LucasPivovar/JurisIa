<script setup>
import { Search, Plus, FileText, MoreVertical } from 'lucide-vue-next'

const documents = [
  { id: 1, name: 'Inicial.pdf', type: 'Petição inicial', added: '12/03/2025 10:30', summary: 'Petição inicial da ação trabalhista...' },
  { id: 2, name: 'Contestação.pdf', type: 'Contestação', added: '14/05/2025 09:15', summary: 'Contestação apresentada pela ré...' },
  { id: 3, name: 'Sentença.pdf', type: 'Sentença', added: '02/06/2025 16:45', summary: 'Sentença de 1ª instância...' },
  { id: 4, name: 'Atestados médicos.pdf', type: 'Documento', added: '20/03/2025 11:20', summary: 'Atestados médicos do autor...' },
  { id: 5, name: 'Contrato de trabalho.pdf', type: 'Documento', added: '10/01/2024 15:10', summary: 'Contrato de trabalho do autor...' },
  { id: 6, name: 'Holerites.pdf', type: 'Documento', added: '10/01/2024 15:10', summary: 'Holerites dos últimos 6 meses...' },
]
</script>

<template>
  <div class="documents-container">
    <div class="toolbar">
      <div class="search-box">
        <Search :size="18" class="search-icon" />
        <input type="text" placeholder="Buscar documentos..." />
      </div>
      <button class="btn-primary">
        <Plus :size="18" /> Adicionar documento
      </button>
    </div>
    
    <div class="docs-table-wrapper">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Adicionado em</th>
            <th>Resumo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in documents" :key="doc.id">
            <td>
              <div class="doc-name">
                <FileText :size="16" class="text-danger" />
                {{ doc.name }}
              </div>
            </td>
            <td>{{ doc.type }}</td>
            <td>{{ doc.added }}</td>
            <td>{{ doc.summary }}</td>
            <td class="actions-cell">
              <button class="btn-link">Ver resumo</button>
              <button class="icon-btn"><MoreVertical :size="18" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="docs-footer">
      <span>{{ documents.length }} documentos</span>
    </div>
  </div>
</template>

<style scoped>
.documents-container {
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

.doc-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.text-danger {
  color: #EF4444;
}

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
}

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
}

.icon-btn:hover {
  color: var(--text-primary);
}

.docs-footer {
  margin-top: 16px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}
</style>
