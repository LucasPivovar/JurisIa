<script setup>
import { Sparkles } from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    default: 'A inteligência artificial que revoluciona a gestão jurídica.'
  },
  subtitle: {
    type: String,
    default: 'Automatize análises, encontre jurisprudências e foque no que realmente importa: a estratégia do seu caso.'
  }
})
</script>

<template>
  <div class="auth-container">
    <div class="auth-brand">
      <div class="brand-overlay"></div>
      <div class="brand-content">
        <div class="logo">
          <Sparkles class="logo-icon-large" :size="48" strokeWidth="2.5" />
          <span class="logo-text">JurisAI</span>
        </div>
        <h1 class="brand-title">{{ title }}</h1>
        <p class="brand-subtitle">{{ subtitle }}</p>
        
        <div class="kpi-grid">
          <div class="kpi-card">
            <span class="kpi-value">98%</span>
            <span class="kpi-label">Precisão na IA</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-value">+10k</span>
            <span class="kpi-label">Casos analisados</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-value">500h</span>
            <span class="kpi-label">Economizadas/mês</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="auth-form-wrapper">
      <div class="auth-form-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.auth-brand {
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  position: relative;
  overflow: hidden;
}

.brand-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%);
  z-index: 1;
}

.brand-content {
  position: relative;
  z-index: 10;
  max-width: 480px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.logo-icon-large {
  color: white;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.brand-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.brand-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.kpi-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.kpi-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.2;
}

.auth-form-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 40px;
}

.auth-form-container {
  width: 100%;
  max-width: 400px;
}

@media (max-width: 768px) {
  .auth-brand {
    display: none;
  }
}
</style>
