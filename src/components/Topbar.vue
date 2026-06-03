<script setup>
import { ref } from 'vue'
import { HelpCircle, Bell, LogOut, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import Modal from './Modal.vue'

const router = useRouter()
const isProfileOpen = ref(false)
const isHelpOpen = ref(false)
const isNotificationsOpen = ref(false)

function toggleProfileMenu() {
  isProfileOpen.value = !isProfileOpen.value
}

function handleLogout() {
  isProfileOpen.value = false
  router.push('/login')
}
</script>

<template>
  <header class="topbar">
    <div class="spacer"></div>
    <div class="topbar-actions">
      <!-- Help -->
      <button class="icon-btn" @click="isHelpOpen = true">
        <HelpCircle :size="20" />
      </button>

      <!-- Notifications -->
      <button class="icon-btn relative" @click="isNotificationsOpen = true">
        <Bell :size="20" />
        <span class="notification-dot"></span>
      </button>

      <!-- Profile Menu -->
      <div class="profile-dropdown-wrapper">
        <div class="topbar-user" @click="toggleProfileMenu">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" class="topbar-avatar" />
          <span class="topbar-name">João Almeida</span>
        </div>
        
        <transition name="fade">
          <div v-if="isProfileOpen" class="profile-menu">
            <button class="profile-menu-item text-danger" @click="handleLogout">
              <LogOut :size="16" /> Sair da conta
            </button>
          </div>
        </transition>
      </div>
    </div>

    <!-- Help Modal -->
    <Modal :isOpen="isHelpOpen" title="Central de Ajuda" @close="isHelpOpen = false">
      <div class="modal-content-inner">
        <p>Precisa de ajuda com o JurisAI? Nossa equipe está pronta para auxiliar.</p>
        <div class="help-options mt-4">
          <button class="btn-outline w-full mb-2">Falar com o suporte (Chat)</button>
          <button class="btn-outline w-full">Acessar documentação</button>
        </div>
      </div>
    </Modal>

    <!-- Notifications Modal -->
    <Modal :isOpen="isNotificationsOpen" title="Notificações" @close="isNotificationsOpen = false">
      <div class="notification-list">
        <div class="notification-item unread">
          <div class="notif-dot"></div>
          <div>
            <strong>Processo Trabalhista</strong>
            <p class="text-sm">Nova jurisprudência encontrada pela IA com alta aderência.</p>
            <span class="text-xs text-secondary">Há 5 minutos</span>
          </div>
        </div>
        <div class="notification-item">
          <div>
            <strong>Equipe</strong>
            <p class="text-sm">Maria Costa aceitou seu convite para o workspace.</p>
            <span class="text-xs text-secondary">Há 2 horas</span>
          </div>
        </div>
      </div>
    </Modal>
  </header>
</template>

<style scoped>
.topbar {
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  background: white;
  position: sticky;
  top: 0;
  z-index: 30;
}

@media (max-width: 768px) {
  .topbar { display: none; } /* On mobile, we use mobile-header in App.vue */
}

.spacer { flex: 1; }
.topbar-actions { display: flex; align-items: center; gap: 16px; }

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.icon-btn:hover { background-color: var(--bg-color); color: var(--text-primary); }

.relative { position: relative; }
.notification-dot { position: absolute; top: 10px; right: 12px; width: 8px; height: 8px; background-color: #EF4444; border-radius: 50%; border: 2px solid white; }

.profile-dropdown-wrapper { position: relative; }

.topbar-user {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: background-color 0.2s;
}
.topbar-user:hover { background-color: var(--bg-color); }
.topbar-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.topbar-name { font-weight: 500; font-size: 0.875rem; color: var(--text-primary); }

.profile-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 50;
  padding: 4px 0;
}

.profile-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
}
.profile-menu-item:hover { background-color: #FEF2F2; }
.text-danger { color: #EF4444; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-5px); }

/* Modals Content */
.modal-content-inner p { color: var(--text-secondary); margin-bottom: 24px; line-height: 1.5; }
.w-full { width: 100%; }
.mb-2 { margin-bottom: 8px; }
.mt-4 { margin-top: 16px; }

.notification-list { display: flex; flex-direction: column; gap: 16px; }
.notification-item { display: flex; align-items: flex-start; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color); }
.notification-item:last-child { border-bottom: none; padding-bottom: 0; }
.notif-dot { width: 8px; height: 8px; background-color: var(--primary); border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
.text-sm { font-size: 0.875rem; color: var(--text-secondary); margin: 4px 0; }
.text-xs { font-size: 0.75rem; }
.text-secondary { color: var(--text-secondary); }
</style>
