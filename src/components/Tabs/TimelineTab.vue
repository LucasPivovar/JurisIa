<script setup>
import { CheckCircle2, AlertCircle } from 'lucide-vue-next'

const events = [
  { date: '10/01/2024', title: 'Admissão', description: 'João Silva foi admitido pela Empresa XPTO Ltda para o cargo de auxiliar de produção.', type: 'success' },
  { date: '15/02/2025', title: 'Advertência verbal', description: 'Autor recebeu advertência verbal por falta não justificada.', type: 'warning' },
  { date: '20/03/2025', title: 'Atestado médico', description: 'Apresentação de atestado médico referente aos dias 20 e 21/03.', type: 'success' },
  { date: '23/03/2025', title: 'Demissão por justa causa', description: 'Empresa aplica justa causa alegando abandono de emprego.', type: 'warning' },
  { date: '02/04/2025', title: 'Ajuizamento da ação', description: 'Ação trabalhista distribuída na Vara do Trabalho de São Paulo.', type: 'primary' },
]
</script>

<template>
  <div class="timeline-container">
    <div class="timeline">
      <div v-for="(event, index) in events" :key="index" class="timeline-item">
        <div class="timeline-line" v-if="index !== events.length - 1"></div>
        <div class="timeline-icon" :class="'icon-' + event.type">
          <CheckCircle2 v-if="event.type === 'success'" :size="16" />
          <AlertCircle v-else-if="event.type === 'warning'" :size="16" />
          <div v-else class="dot-primary"></div>
        </div>
        <div class="timeline-content">
          <div class="event-date">{{ event.date }}</div>
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="info-box mt-8">
      <AlertCircle :size="16" class="text-primary" />
      <span>Linha do tempo gerada automaticamente com base nos documentos e informações do caso.</span>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  width: 100%;
}

.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
  padding-left: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-line {
  position: absolute;
  top: 24px;
  left: 11px; /* 20px - 9px */
  bottom: 0;
  width: 2px;
  background-color: #E2E8F0;
}

.timeline-icon {
  position: absolute;
  top: 0;
  left: -2px; /* 20px - 12px */
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 1;
}

.icon-success {
  color: var(--success);
}
.icon-warning {
  color: var(--warning);
}
.icon-primary {
  color: var(--primary);
}

.dot-primary {
  width: 12px;
  height: 12px;
  background-color: var(--primary);
  border-radius: 50%;
}

.timeline-content {
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.event-date {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.event-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.event-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.mt-8 {
  margin-top: 32px;
}

.info-box {
  background-color: #F5F3FF;
  border: 1px solid #DDD6FE;
  border-radius: var(--radius-md);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.text-primary {
  color: var(--primary);
}
</style>
