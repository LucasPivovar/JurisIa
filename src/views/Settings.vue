<script setup>
import { HelpCircle, Bell, Settings, Globe, Shield, Moon } from 'lucide-vue-next'
</script>

<template>
  <div class="settings-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <div class="title-with-icon">
          <Settings :size="28" class="text-primary" />
          <h1>Configurações</h1>
        </div>
        <p class="subtitle">Ajuste o idioma, notificações e tema da plataforma.</p>
      </div>

      <div class="settings-list card p-0">
        <div class="settings-item">
          <div class="settings-icon-wrapper"><Globe :size="20" /></div>
          <div class="settings-info">
            <h3>Idioma</h3>
            <p>Selecione o idioma de preferência da plataforma</p>
          </div>
          <select class="settings-select">
            <option>Português (BR)</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
        
        <div class="settings-item">
          <div class="settings-icon-wrapper"><Moon :size="20" /></div>
          <div class="settings-info">
            <h3>Tema escuro</h3>
            <p>Altere para um tema escuro para descansar a visão</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>

        <div class="settings-item">
          <div class="settings-icon-wrapper"><Bell :size="20" /></div>
          <div class="settings-info">
            <h3>Notificações por e-mail</h3>
            <p>Receba alertas sobre atualizações dos seus casos</p>
          </div>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>

        <div class="settings-item">
          <div class="settings-icon-wrapper"><Shield :size="20" /></div>
          <div class="settings-info">
            <h3>Autenticação em duas etapas (2FA)</h3>
            <p>Proteja sua conta adicionando uma camada extra de segurança</p>
          </div>
          <button class="btn-outline">Configurar 2FA</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-view { flex: 1; display: flex; flex-direction: column; }

.page-content { padding: 40px; width: 100%; margin: 0 auto; }
.mb-8 { margin-bottom: 32px; }
.p-0 { padding: 0; }

.title-with-icon { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.title-with-icon h1 { font-size: 1.5rem; font-weight: 700; }
.subtitle { color: var(--text-secondary); margin-left: 40px; }
.text-primary { color: var(--primary); }

.settings-item {
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--border-color);
}
.settings-item:last-child {
  border-bottom: none;
}

.settings-icon-wrapper {
  width: 48px;
  height: 48px;
  background-color: #F8FAFC;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  margin-right: 20px;
}

.settings-info {
  flex: 1;
}
.settings-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.settings-info p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.settings-select {
  padding: 10px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: white;
  font-family: inherit;
  font-size: 0.875rem;
  color: var(--text-primary);
  outline: none;
}
.settings-select:focus { border-color: var(--primary); }

/* Switch Toggle CSS */
.switch { position: relative; display: inline-block; width: 50px; height: 26px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; }
.slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; transition: .4s; }
input:checked + .slider { background-color: var(--primary); }
input:focus + .slider { box-shadow: 0 0 1px var(--primary); }
input:checked + .slider:before { transform: translateX(24px); }
.slider.round { border-radius: 34px; }
.slider.round:before { border-radius: 50%; }

@media (max-width: 768px) {
  .settings-item { flex-direction: column; align-items: flex-start; gap: 16px; }
  .settings-icon-wrapper { margin-bottom: -8px; }
}
</style>
