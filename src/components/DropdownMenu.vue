<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MoreVertical, MoreHorizontal, Edit2, Share2, Archive, Trash2 } from 'lucide-vue-next'
import { useToast } from '../composables/useToast'

const props = defineProps({
  horizontal: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
const dropdownRef = ref(null)
const { success, info, error } = useToast()

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

function handleAction(type) {
  if (type === 'edit') success('Modo de edição ativado.')
  if (type === 'share') success('Link de compartilhamento gerado!')
  if (type === 'archive') info('Movido para os arquivos.')
  if (type === 'delete') error('Item movido para a lixeira.')
  isOpen.value = false
}
</script>

<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="icon-btn" @click.stop="toggleMenu">
      <MoreHorizontal v-if="props.horizontal" :size="20" />
      <MoreVertical v-else :size="20" />
    </button>
    
    <transition name="fade">
      <div v-if="isOpen" class="dropdown-menu">
        <button class="dropdown-item" @click="handleAction('edit')">
          <Edit2 :size="16" /> Editar
        </button>
        <button class="dropdown-item" @click="handleAction('share')">
          <Share2 :size="16" /> Compartilhar
        </button>
        <button class="dropdown-item" @click="handleAction('archive')">
          <Archive :size="16" /> Arquivar
        </button>
        <div class="divider"></div>
        <button class="dropdown-item text-danger" @click="handleAction('delete')">
          <Trash2 :size="16" /> Excluir
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.2s;
  cursor: pointer;
}

.icon-btn:hover {
  background-color: var(--border-color);
  color: var(--text-primary);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 50;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 16px;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  color: var(--text-primary);
  text-align: left;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #F8FAFC;
}

.text-danger {
  color: #EF4444;
}

.text-danger:hover {
  background-color: #FEF2F2;
}

.divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 4px 0;
}

/* Vue Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
