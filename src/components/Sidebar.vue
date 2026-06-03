<script setup>
import { 
  Sparkles, 
  Folder, 
  Star, 
  Trash2, 
  Users, 
  Settings, 
  Plus,
  Crown
} from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

function handleLinkClick() {
  emit('close')
}
</script>

<template>
  <aside :class="['sidebar', { 'open': isOpen }]">
    <div class="sidebar-header desktop-only">
      <div class="logo">
        <Sparkles class="logo-icon" :size="24" strokeWidth="2.5" />
        <span>JurisAI</span>
      </div>
    </div>
    
    <div class="sidebar-new-case">
      <router-link to="/new" class="btn-primary w-full" style="text-decoration: none;" @click="handleLinkClick">
        <Plus :size="18" /> Novo caso
      </router-link>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/" class="nav-item" exact-active-class="active" @click="handleLinkClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg> Visão Geral
      </router-link>
      <router-link to="/casos" class="nav-item" active-class="active" @click="handleLinkClick">
        <Folder :size="18" /> Casos
      </router-link>
      <router-link to="/favorites" class="nav-item" active-class="active" @click="handleLinkClick">
        <Star :size="18" /> Favoritos
      </router-link>
      <router-link to="/trash" class="nav-item" active-class="active" @click="handleLinkClick">
        <Trash2 :size="18" /> Lixeira
      </router-link>
      <router-link to="/team" class="nav-item mt-auto" active-class="active" @click="handleLinkClick">
        <Users :size="18" /> Equipe
      </router-link>
      <router-link to="/settings" class="nav-item" active-class="active" @click="handleLinkClick">
        <Settings :size="18" /> Configurações
      </router-link>
    </nav>

    <div class="sidebar-plan">
      <div class="plan-header">
        <Crown :size="16" class="plan-icon" />
        <span>Plano Profissional</span>
      </div>
      <div class="plan-stats">
        <span class="plan-label">Consultas este mês</span>
        <span class="plan-value">278 / 1.000</span>
      </div>
      <div class="plan-progress">
        <div class="plan-progress-bar" style="width: 27.8%"></div>
      </div>
    </div>

    <router-link to="/profile" class="sidebar-user" style="text-decoration: none" @click="handleLinkClick">
      <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" class="user-avatar" />
      <div class="user-info">
        <span class="user-name">João Almeida</span>
        <span class="user-role">Administrador</span>
      </div>
    </router-link>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  background-color: var(--bg-sidebar);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 24px 20px;
  z-index: 50;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    top: 60px; /* Below mobile header */
    height: calc(100vh - 60px);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .desktop-only {
    display: none !important;
  }
  
  .sidebar-new-case {
    margin-top: 0;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.logo-icon {
  fill: var(--primary);
}

.sidebar-new-case {
  margin-top: 32px;
  margin-bottom: 24px;
}

.w-full {
  width: 100%;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover, .nav-item.active {
  background-color: #F5F3FF;
  color: var(--primary);
}

.mt-auto {
  margin-top: auto;
}

.sidebar-plan {
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.plan-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  color: #D97706; /* Golden color for crown */
  margin-bottom: 16px;
}

.plan-icon {
  fill: #FDE68A;
}

.plan-stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}

.plan-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.plan-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.plan-progress {
  height: 6px;
  background-color: var(--border-color);
  border-radius: 10px;
  overflow: hidden;
}

.plan-progress-bar {
  height: 100%;
  background-color: var(--primary);
  border-radius: 10px;
}

.sidebar-user {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-secondary);
}
</style>
