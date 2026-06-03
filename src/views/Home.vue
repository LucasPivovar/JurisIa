<script setup>
import { 
  Briefcase, 
  Clock, 
  FileText, 
  Zap,
  ArrowRight,
  Activity,
  ArrowUpRight
} from 'lucide-vue-next'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js'
import { useRouter } from 'vue-router'
import { useToast } from '../composables/useToast'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

const router = useRouter()
const { info } = useToast()

function handleHistoryClick() {
  info('Tela de histórico completo em desenvolvimento!')
}

// Chart Data
const chartData = {
  labels: ['01/06', '05/06', '10/06', '15/06', '20/06', '25/06', '30/06'],
  datasets: [
    {
      label: 'Consultas à IA',
      data: [12, 45, 30, 80, 55, 90, 65],
      fill: true,
      borderColor: '#4F46E5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#4F46E5',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4F46E5',
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
      grid: { color: '#F1F5F9', drawBorder: false },
      ticks: { color: '#64748B', font: { family: 'Inter' } }
    },
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { color: '#64748B', font: { family: 'Inter' } }
    }
  }
}

// Mock Data
const kpis = [
  { id: 1, title: 'Casos Ativos', value: '42', icon: Briefcase, color: 'text-primary', bg: 'bg-primary-light' },
  { id: 2, title: 'Prazos nesta semana', value: '8', icon: Clock, color: 'text-warning', bg: 'bg-warning-light' },
  { id: 3, title: 'Documentos analisados', value: '1.240', icon: FileText, color: 'text-success', bg: 'bg-success-light' },
  { id: 4, title: 'Horas economizadas', value: '315h', icon: Zap, color: 'text-danger', bg: 'bg-danger-light' },
]

const recentActivities = [
  { id: 1, action: 'Nova jurisprudência encontrada', target: 'Processo 001243-98.2023', time: 'Há 15 minutos', type: 'ai' },
  { id: 2, action: 'Documento resumido', target: 'Contrato de Honorários - XYZ', time: 'Há 2 horas', type: 'doc' },
  { id: 3, action: 'Maria Costa editou o caso', target: 'João Silva vs. Tech Corp', time: 'Ontem, 16:45', type: 'user' },
  { id: 4, action: 'Novo caso cadastrado', target: 'Empresa ABC x Receita Federal', time: 'Ontem, 09:30', type: 'system' }
]

function navigateToCase() {
  router.push('/case/1')
}
</script>

<template>
  <div class="home-view">
    <div class="page-content">
      
      <!-- Welcome Header -->
      <div class="welcome-header mb-8">
        <div class="welcome-text">
          <h1>Bem-vindo de volta, João! 👋</h1>
          <p class="subtitle">Aqui está o resumo do seu escritório hoje.</p>
        </div>
        <button class="btn-primary" @click="router.push('/new')">
          <Zap :size="18" /> Nova Análise com IA
        </button>
      </div>

      <!-- KPI Cards -->
      <div class="kpi-grid mb-8">
        <div v-for="kpi in kpis" :key="kpi.id" class="kpi-card">
          <div class="kpi-icon-wrapper" :class="kpi.bg">
            <component :is="kpi.icon" :size="24" :class="kpi.color" />
          </div>
          <div class="kpi-info">
            <p class="kpi-title">{{ kpi.title }}</p>
            <p class="kpi-value">{{ kpi.value }}</p>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="main-grid">
        
        <!-- Left Column: Chart & Recent Case -->
        <div class="left-col">
          
          <!-- Last Accessed Case -->
          <div class="card mb-8 p-0 overflow-hidden continue-card">
            <div class="card-header bg-gray-50 border-b">
              <h2 class="card-title text-sm"><Clock :size="16" /> Continue de onde parou</h2>
            </div>
            <div class="card-body p-6 flex-between">
              <div>
                <span class="tag Trabalhista mb-2 inline-block">Trabalhista</span>
                <h3 class="text-lg font-bold mb-1">João Silva vs. Tech Corp (Assédio)</h3>
                <p class="text-secondary text-sm">Última modificação há 2 horas</p>
              </div>
              <button class="btn-primary-outline" @click="navigateToCase">
                Abrir Caso <ArrowRight :size="16" class="ml-2" />
              </button>
            </div>
          </div>

          <!-- AI Consumption Chart -->
          <div class="card p-6 chart-card">
            <div class="card-header-flex mb-6">
              <div>
                <h2 class="card-title flex-align"><Activity :size="20" class="text-primary mr-2" /> Consumo da Inteligência Artificial</h2>
                <p class="text-sm text-secondary">Utilização do seu pacote de consultas neste mês.</p>
              </div>
              <div class="chart-stats">
                <span class="text-2xl font-bold">278</span>
                <span class="text-sm text-secondary">/ 1.000 consultas</span>
              </div>
            </div>
            <div class="chart-container">
              <Line :data="chartData" :options="chartOptions" />
            </div>
          </div>
          
        </div>

        <!-- Right Column: Activity Feed -->
        <div class="right-col">
          <div class="card p-6 h-full">
            <h2 class="card-title flex-align mb-6"><Activity :size="20" class="mr-2" /> Últimas Atualizações</h2>
            
            <div class="activity-feed">
              <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
                <div class="activity-timeline">
                  <div class="timeline-dot" :class="`dot-${activity.type}`"></div>
                  <div class="timeline-line"></div>
                </div>
                <div class="activity-content">
                  <p class="activity-action">{{ activity.action }}</p>
                  <p class="activity-target">{{ activity.target }}</p>
                  <span class="activity-time">{{ activity.time }}</span>
                </div>
              </div>
            </div>
            
            <button class="btn-primary-outline w-full mt-6 justify-center" @click="handleHistoryClick">
              Ver todo o histórico <ArrowRight :size="16" class="ml-2" />
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.home-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 40px;
  width: 100%;
  margin: 0; /* Ensures 100% width with no auto-margin restriction */
}

.mb-8 { margin-bottom: 32px; }
.mb-6 { margin-bottom: 24px; }
.mb-2 { margin-bottom: 8px; }
.mb-1 { margin-bottom: 4px; }
.p-6 { padding: 24px; }
.p-0 { padding: 0; }
.mr-2 { margin-right: 8px; }
.ml-2 { margin-left: 8px; }
.mt-6 { margin-top: 24px; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.text-center { text-align: center; }
.justify-center { justify-content: center; }
.inline-block { display: inline-block; }
.overflow-hidden { overflow: hidden; }
.border-b { border-bottom: 1px solid var(--border-color); }
.bg-gray-50 { background-color: #F8FAFC; }

.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-2xl { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.text-secondary { color: var(--text-secondary); }

/* Utility Colors */
.text-primary { color: var(--primary); }
.text-warning { color: #F59E0B; }
.text-success { color: #10B981; }
.text-danger { color: #EF4444; }

.bg-primary-light { background-color: #EEF2FF; }
.bg-warning-light { background-color: #FEF3C7; }
.bg-success-light { background-color: #D1FAE5; }
.bg-danger-light { background-color: #FEE2E2; }

/* Welcome Header */
.welcome-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.welcome-text h1 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

/* KPI Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.kpi-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.kpi-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kpi-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.kpi-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

/* Main Grid */
.main-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

.card-header {
  padding: 16px 24px;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.flex-align {
  display: flex;
  align-items: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Continue Card */
.continue-card {
  border-left: 4px solid var(--primary);
}

.btn-primary-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-primary-outline:hover {
  background: var(--primary);
  color: white;
}

/* Chart */
.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.chart-stats {
  text-align: right;
  display: flex;
  flex-direction: column;
}

.chart-container {
  height: 300px;
  width: 100%;
}

/* Activity Feed */
.activity-feed {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  gap: 16px;
}

.activity-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 6px;
  z-index: 2;
}

.dot-ai { background-color: var(--primary); border: 2px solid #EEF2FF; }
.dot-doc { background-color: #10B981; border: 2px solid #D1FAE5; }
.dot-user { background-color: #F59E0B; border: 2px solid #FEF3C7; }
.dot-system { background-color: #64748B; border: 2px solid #F1F5F9; }

.timeline-line {
  flex: 1;
  width: 2px;
  background-color: var(--border-color);
  margin-top: 4px;
  margin-bottom: 4px;
}

.activity-item:last-child .timeline-line {
  display: none;
}

.activity-content {
  padding-bottom: 24px;
}

.activity-item:last-child .activity-content {
  padding-bottom: 0;
}

.activity-action {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9375rem;
  margin-bottom: 4px;
}

.activity-target {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 6px;
}

.activity-time {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .main-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .welcome-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .flex-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .card-header-flex {
    flex-direction: column;
    gap: 16px;
  }
  
  .chart-stats {
    text-align: left;
  }
}
</style>
