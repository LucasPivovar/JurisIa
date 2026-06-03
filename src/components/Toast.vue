<script setup>
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-vue-next'
import { useToast } from '../composables/useToast'

const { toasts, removeToast } = useToast()
</script>

<template>
  <div class="toast-container">
    <transition-group name="toast-list">
      <div 
        v-for="toast in toasts" 
        :key="toast.id" 
        :class="['toast-item', `toast-${toast.type}`]"
      >
        <div class="toast-icon">
          <CheckCircle2 v-if="toast.type === 'success'" :size="20" />
          <AlertCircle v-else-if="toast.type === 'error'" :size="20" />
          <Info v-else :size="20" />
        </div>
        <div class="toast-message">{{ toast.message }}</div>
        <button class="toast-close" @click="removeToast(toast.id)">
          <X :size="16" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none; /* Let clicks pass through empty space */
}

.toast-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  pointer-events: auto;
  border-left: 4px solid transparent;
}

.toast-success { border-left-color: #10B981; }
.toast-success .toast-icon { color: #10B981; }

.toast-error { border-left-color: #EF4444; }
.toast-error .toast-icon { color: #EF4444; }

.toast-info { border-left-color: #3B82F6; }
.toast-info .toast-icon { color: #3B82F6; }

.toast-message {
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.toast-close {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast-close:hover { color: var(--text-primary); }

/* Transition animations */
.toast-list-enter-active,
.toast-list-leave-active {
  transition: all 0.3s ease;
}
.toast-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.toast-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
