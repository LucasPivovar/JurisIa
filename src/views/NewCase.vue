<script setup>
import { HelpCircle, Bell, Sparkles, UploadCloud } from 'lucide-vue-next'
</script>

<template>
  <div class="new-case-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <h1>Novo caso</h1>
        <p class="subtitle">Descreva a situação ou envie documentos para nossa IA analisar.</p>
      </div>

      <div class="card form-card">
        <div class="form-group mb-6">
          <label>Descreva seu caso</label>
          <textarea class="textarea-large" placeholder="Ex: &quot;Meu cliente foi demitido por justa causa após faltar 3 dias consecutivos. Ele possui atestados médicos para 2 dos dias.&quot;"></textarea>
        </div>

        <div class="form-group mb-6">
          <label>Área do direito (opcional)</label>
          <div class="pill-group">
            <button class="pill active">Trabalhista</button>
            <button class="pill">Previdenciário</button>
            <button class="pill">Cível</button>
            <button class="pill">Tributário</button>
            <button class="pill">Outros</button>
          </div>
        </div>

        <div class="dropzone mb-6">
          <UploadCloud :size="48" class="text-secondary mb-4" />
          <p class="dropzone-title">Arraste documentos aqui ou clique para anexar</p>
          <p class="dropzone-subtitle">PDF, DOC, DOCX ou imagens (máx. 20MB)</p>
        </div>

        <div class="form-actions">
          <button class="btn-primary ml-auto">
            <Sparkles :size="16" /> Analisar caso
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-case-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 40px;
  width: 100%;
}

.mb-8 { margin-bottom: 32px; }
.mb-6 { margin-bottom: 24px; }
.mb-4 { margin-bottom: 16px; }

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitle {
  color: var(--text-secondary);
}

.form-card {
  padding: 32px;
}

.form-group label {
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.textarea-large {
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
}

.textarea-large:focus {
  border-color: var(--primary);
}

.pill-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pill {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.2s;
}

.pill:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.pill.active {
  border-color: var(--primary);
  background-color: #F5F3FF;
  color: var(--primary);
}

.dropzone {
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-md);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFA;
  cursor: pointer;
  transition: all 0.2s;
}

.dropzone:hover {
  border-color: var(--primary);
  background-color: #F5F3FF;
}

.text-secondary {
  color: var(--text-secondary);
}

.dropzone-title {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.dropzone-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
