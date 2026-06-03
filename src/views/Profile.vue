<script setup>
import { ref } from 'vue'
import { HelpCircle, Bell, User, CreditCard, Activity, Edit2 } from 'lucide-vue-next'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js'
import { useToast } from '../composables/useToast'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

const { info, success } = useToast()

const chartData = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Consultas realizadas',
      backgroundColor: 'rgba(99, 67, 240, 0.1)',
      borderColor: '#6343F0',
      borderWidth: 2,
      pointBackgroundColor: '#6343F0',
      fill: true,
      data: [45, 80, 65, 88]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#1E293B',
      padding: 12,
      titleFont: { size: 14, family: 'Inter' },
      bodyFont: { size: 14, family: 'Inter' },
      cornerRadius: 8,
      displayColors: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { borderDash: [4, 4] }
    },
    x: {
      grid: { display: false }
    }
  }
}
</script>

<template>
  <div class="profile-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <h1>Meu Perfil</h1>
        <p class="subtitle">Gerencie suas informações pessoais e visualize seu consumo.</p>
      </div>

      <div class="profile-grid">
        <!-- Personal Info -->
        <div class="card p-6">
          <div class="section-title-row">
            <h2 class="section-title"><User :size="20" class="text-primary" /> Informações Pessoais</h2>
            <button class="btn-link" @click="success('Modo de edição habilitado.')"><Edit2 :size="16" /> Editar</button>
          </div>
          
          <div class="profile-avatar-row mb-6">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="João Almeida" class="avatar-large" />
            <div class="avatar-info">
              <h3>João Almeida</h3>
              <p>Administrador</p>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>Nome completo</label>
              <div class="value">João Almeida Silva</div>
            </div>
            <div class="info-item">
              <label>E-mail</label>
              <div class="value">joao.almeida@juris.com.br</div>
            </div>
            <div class="info-item">
              <label>Telefone</label>
              <div class="value">(11) 98888-7777</div>
            </div>
            <div class="info-item">
              <label>Senha</label>
              <div class="value">••••••••</div>
            </div>
          </div>
        </div>

        <!-- Billing & Plan -->
        <div class="card p-6">
          <h2 class="section-title mb-6"><CreditCard :size="20" class="text-primary" /> Assinatura e Pagamento</h2>
          
          <div class="plan-card mb-6">
            <div class="plan-info">
              <h3>Plano Profissional</h3>
              <p>R$ 149,90 / mês</p>
            </div>
            <span class="status-tag bg-success text-success-dark">Ativo</span>
          </div>

          <div class="payment-method">
            <div class="card-icon">💳</div>
            <div class="card-details">
              <h4>Mastercard terminando em 4242</h4>
              <p>Expira em 12/2026</p>
            </div>
          </div>
          
          <button class="btn-outline w-full mt-4" @click="info('Em breve: Integração com provedor de pagamento.')">Alterar forma de pagamento</button>
        </div>

        <!-- AI Usage Chart -->
        <div class="card p-6 chart-card">
          <h2 class="section-title mb-6"><Activity :size="20" class="text-primary" /> Consumo da IA (Este mês)</h2>
          
          <div class="usage-stats mb-4">
            <div class="stat-large">278 <span class="stat-label">/ 1.000 consultas</span></div>
          </div>

          <div class="chart-wrapper">
            <Line :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-view { flex: 1; display: flex; flex-direction: column; }

.page-content { padding: 40px; width: 100%; margin: 0 auto; }
.mb-8 { margin-bottom: 32px; }
.mb-6 { margin-bottom: 24px; }
.mb-4 { margin-bottom: 16px; }
.p-6 { padding: 24px; }

.page-header h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
.subtitle { color: var(--text-secondary); }

.profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.chart-card {
  grid-column: 1 / -1; /* Spans across all columns */
}

.section-title-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.section-title { font-size: 1.125rem; font-weight: 600; display: flex; align-items: center; gap: 12px; }
.text-primary { color: var(--primary); }

.btn-link { background: transparent; border: none; color: var(--primary); display: flex; align-items: center; gap: 6px; font-weight: 500; font-size: 0.875rem; cursor: pointer; }

.profile-avatar-row { display: flex; align-items: center; gap: 16px; }
.avatar-large { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; }
.avatar-info h3 { font-size: 1.125rem; font-weight: 600; margin-bottom: 4px; }
.avatar-info p { color: var(--text-secondary); font-size: 0.875rem; }

.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.info-item label { display: block; font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; margin-bottom: 4px; }
.info-item .value { font-size: 0.9375rem; color: var(--text-primary); font-weight: 500; }

.plan-card { display: flex; justify-content: space-between; align-items: center; padding: 16px; border: 1px solid var(--primary); border-radius: var(--radius-md); background-color: #F5F3FF; }
.plan-info h3 { font-size: 1rem; font-weight: 600; color: var(--primary); margin-bottom: 4px; }
.plan-info p { font-size: 0.875rem; color: var(--text-secondary); }
.status-tag { padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
.bg-success { background-color: #DCFCE7; }
.text-success-dark { color: #166534; }

.payment-method { display: flex; align-items: center; gap: 16px; padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md); }
.card-icon { font-size: 1.5rem; }
.card-details h4 { font-size: 0.9375rem; font-weight: 500; margin-bottom: 4px; }
.card-details p { font-size: 0.875rem; color: var(--text-secondary); }

.w-full { width: 100%; }
.mt-4 { margin-top: 16px; }

.usage-stats { display: flex; justify-content: space-between; align-items: baseline; }
.stat-large { font-size: 2.5rem; font-weight: 700; color: var(--text-primary); line-height: 1; }
.stat-label { font-size: 1rem; font-weight: 500; color: var(--text-secondary); }

.chart-wrapper { height: 300px; width: 100%; }

@media (max-width: 768px) {
  .profile-grid { grid-template-columns: 1fr; }
  .info-grid { grid-template-columns: 1fr; }
}
</style>
