<script setup>
import { ref } from 'vue'
import { Users, Plus } from 'lucide-vue-next'
import DropdownMenu from '../components/DropdownMenu.vue'
import Modal from '../components/Modal.vue'
import { useToast } from '../composables/useToast'

const { success } = useToast()
const isInviteModalOpen = ref(false)

const team = [
  { id: 1, name: 'João Almeida', email: 'joao@juris.com.br', role: 'Administrador', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, name: 'Maria Costa', email: 'maria@juris.com.br', role: 'Advogada Senior', avatar: 'https://i.pravatar.cc/150?u=b042581f4e29026024d' },
  { id: 3, name: 'Pedro Lima', email: 'pedro@juris.com.br', role: 'Assistente Jurídico', avatar: 'https://i.pravatar.cc/150?u=c042581f4e29026024d' },
]

function handleCopyLink() {
  success('Link de convite copiado para a área de transferência!')
  isInviteModalOpen.value = false
}
</script>

<template>
  <div class="team-view">
    <div class="page-content">
      <div class="page-header mb-8">
        <div class="header-left">
          <div class="title-with-icon">
            <Users :size="28" class="text-primary" />
            <h1>Equipe</h1>
          </div>
          <p class="subtitle">Gerencie os membros do seu escritório.</p>
        </div>
        
        <button class="btn-primary" @click="isInviteModalOpen = true">
          <Plus :size="18" /> Convidar membro
        </button>
      </div>

      <div class="docs-table-wrapper">
        <table class="docs-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>Cargo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in team" :key="member.id">
              <td>
                <div class="user-cell">
                  <img :src="member.avatar" class="member-avatar" />
                  <span class="font-medium">{{ member.name }}</span>
                </div>
              </td>
              <td class="text-secondary">{{ member.email }}</td>
              <td>
                <span class="role-tag">{{ member.role }}</span>
              </td>
              <td class="actions-cell">
                <DropdownMenu />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Invite Modal -->
    <Modal :isOpen="isInviteModalOpen" title="Convidar Membro" @close="isInviteModalOpen = false">
      <p style="color: var(--text-secondary); margin-bottom: 20px;">
        Compartilhe este link com a pessoa que você deseja convidar para o escritório.
      </p>
      <div style="display: flex; gap: 12px; margin-bottom: 24px;">
        <input 
          type="text" 
          value="https://juris.ai/invite/x8j92k" 
          readonly 
          style="flex: 1; padding: 10px 14px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; font-size: 0.875rem;"
        />
      </div>
      <button class="btn-primary w-full" @click="handleCopyLink" style="width: 100%; padding: 12px;">
        Copiar Link
      </button>
    </Modal>
  </div>
</template>

<style scoped>
.team-view { flex: 1; display: flex; flex-direction: column; }

.page-content { padding: 40px; width: 100%; margin: 0 auto; }
.mb-8 { margin-bottom: 32px; }

.page-header { display: flex; justify-content: space-between; align-items: flex-end; }
.title-with-icon { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.title-with-icon h1 { font-size: 1.5rem; font-weight: 700; }
.subtitle { color: var(--text-secondary); margin-left: 40px; }
.text-primary { color: var(--primary); }

.docs-table-wrapper { background: white; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; }
.docs-table { width: 100%; border-collapse: collapse; }
.docs-table th, .docs-table td { padding: 16px 20px; text-align: left; border-bottom: 1px solid var(--border-color); }
.docs-table th { font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 600; background-color: #F8FAFC; }
.docs-table tbody tr { transition: background-color 0.2s; }
.docs-table tbody tr:hover { background-color: #F8FAFC; }
.docs-table tbody tr:last-child td { border-bottom: none; }

.user-cell { display: flex; align-items: center; gap: 12px; }
.member-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.font-medium { font-weight: 500; color: var(--text-primary); font-size: 0.9375rem; }
.text-secondary { color: var(--text-secondary); font-size: 0.875rem; }

.role-tag { background-color: #F1F5F9; color: var(--text-secondary); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
.actions-cell { text-align: right; }

@media (max-width: 768px) {
  .page-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .docs-table-wrapper { overflow-x: auto; }
}
</style>
