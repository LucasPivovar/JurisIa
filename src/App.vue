<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, Sparkles, X } from 'lucide-vue-next'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import Toast from './components/Toast.vue'

const route = useRoute()
const isAuthRoute = computed(() => route.meta.layout === 'auth')

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div v-if="isAuthRoute" class="auth-layout">
    <router-view />
  </div>

  <div v-else class="app-layout">
    <!-- Mobile Header -->
    <header class="mobile-header">
      <div class="logo">
        <Sparkles class="logo-icon" :size="24" strokeWidth="2.5" />
        <span>JurisAI</span>
      </div>
      <button class="menu-btn" @click="toggleMobileMenu">
        <Menu v-if="!isMobileMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </header>

    <!-- Overlay for mobile -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-overlay" 
      @click="closeMobileMenu"
    ></div>

    <Sidebar :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
    
    <main class="main-content">
      <Topbar />
      <router-view />
    </main>
  </div>
  <Toast />
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  background-color: var(--bg-color);
}

.app-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.mobile-header {
  display: none; /* Hidden on desktop */
  height: 60px;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 40;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.logo-icon {
  fill: var(--primary);
}

.menu-btn {
  background: transparent;
  border: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  background-color: var(--bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease;
}

.mobile-overlay {
  display: none;
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
  }
  
  .main-content {
    margin-left: 0;
  }

  .mobile-overlay {
    display: block;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 45;
  }
}
</style>
