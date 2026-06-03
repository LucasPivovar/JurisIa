<script setup>
import { CheckCircle2, AlertTriangle, Scale } from 'lucide-vue-next'
</script>

<template>
  <div class="overview-grid">
    <div class="left-col">
      <div class="card mb-6">
        <h3 class="section-title">Resumo do caso</h3>
        <p class="summary-text">
          Trata-se de ação trabalhista proposta por João Silva em face da Empresa XPTO Ltda., discutindo a nulidade da justa causa aplicada. O autor alega que as faltas que motivaram a penalidade foram justificadas por atestados médicos e que não houve abandono de emprego.
        </p>
        <button class="btn-link">Ver mais</button>
      </div>

      <div class="stats-grid mb-6">
        <div class="card">
          <h3 class="section-title-sm">Probabilidade de sucesso</h3>
          <div class="prob-wrapper mt-4">
            <span class="prob-large">76%</span>
            <span class="prob-status text-success">Alta chance de procedência</span>
          </div>
          <div class="progress-bar mt-4">
            <div class="progress-fill bg-success" style="width: 76%"></div>
          </div>
        </div>

        <div class="card">
          <h3 class="section-title-sm">Pontos fortes</h3>
          <ul class="points-list mt-4">
            <li><CheckCircle2 :size="16" class="text-success" /> Atestados médicos anexados</li>
            <li><CheckCircle2 :size="16" class="text-success" /> Jurisprudência favorável</li>
            <li><CheckCircle2 :size="16" class="text-success" /> Ausência de advertências prévias</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title-sm">Próximas ações sugeridas</h3>
        <ol class="actions-list mt-4">
          <li>Contestar a justa causa</li>
          <li>Requerer produção de prova testemunhal</li>
          <li>Pleitear danos morais e materiais</li>
        </ol>
      </div>
    </div>

    <div class="right-col">
      <div class="card mb-6">
        <h3 class="section-title-sm">Informações principais</h3>
        <div class="info-list mt-4">
          <div class="info-item">
            <span class="info-label">Área do direito</span>
            <span class="info-value">Trabalhista</span>
          </div>
          <div class="info-item">
            <span class="info-label">Ramo do caso</span>
            <span class="info-value">Justa causa / Rescisão contratual</span>
          </div>
          <div class="info-item">
            <span class="info-label">Data de criação</span>
            <span class="info-value">12/05/2025</span>
          </div>
          <div class="info-item">
            <span class="info-label">Última atualização</span>
            <span class="info-value">12/05/2025 às 10:30</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title-sm">Pontos de atenção</h3>
        <ul class="points-list mt-4">
          <li><AlertTriangle :size="16" class="text-warning" /> Empresa possui testemunhas</li>
          <li><AlertTriangle :size="16" class="text-warning" /> Prazo recursal em aberto</li>
          <li><AlertTriangle :size="16" class="text-warning" /> Dependência da prova oral</li>
        </ul>
      </div>

      <div class="illustration-wrapper mt-8">
        <div class="scale-icon-bg">
          <Scale :size="48" class="text-primary opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overview-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.left-col, .right-col {
  display: flex;
  flex-direction: column;
}

.mb-6 { margin-bottom: 24px; }
.mt-4 { margin-top: 16px; }
.mt-8 { margin-top: 32px; }
.p-0 { padding: 0 !important; }
.border-none { border: none !important; }

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.section-title-sm {
  font-size: 1rem;
  font-weight: 600;
}

.summary-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

.btn-link {
  background: transparent;
  color: var(--primary);
  font-weight: 500;
  font-size: 0.875rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.prob-wrapper {
  display: flex;
  flex-direction: column;
}

.prob-large {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--success);
  line-height: 1;
  margin-bottom: 4px;
}

.prob-status {
  font-size: 0.875rem;
  font-weight: 500;
}

.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-primary { color: var(--primary); }

.bg-success { background-color: var(--success); }

.progress-bar {
  height: 8px;
  background-color: var(--border-color);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
}

.points-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.points-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.actions-list {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.actions-list li::marker {
  font-weight: 600;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.info-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.illustration-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.scale-icon-bg {
  width: 120px;
  height: 120px;
  background-color: #F5F3FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.opacity-50 {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .overview-grid, .stats-grid {
    grid-template-columns: 1fr;
  }
  .right-col {
    order: -1; /* Put key info above summary on mobile */
  }
}
</style>
