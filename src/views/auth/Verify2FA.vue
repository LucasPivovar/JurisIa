<script setup>
import { ref } from 'vue'
import { ShieldCheck, ArrowLeft, Loader2 } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AuthLayout from '../../components/AuthLayout.vue'

const router = useRouter()
const isLoading = ref(false)

function handleVerify() {
  isLoading.value = true
  
  // Simulate successful 2FA
  setTimeout(() => {
    isLoading.value = false
    router.push('/')
  }, 2000)
}
</script>

<template>
  <AuthLayout 
    title="Proteção total dos seus dados."
    subtitle="A segurança dos processos dos seus clientes é nossa prioridade número um."
  >
    <button class="back-btn" @click="router.back()">
      <ArrowLeft :size="20" /> Voltar
    </button>
    
    <div class="icon-wrapper">
      <ShieldCheck :size="48" class="text-primary" />
    </div>
    <h2 class="form-title text-center">Autenticação em duas etapas</h2>
    <p class="form-subtitle text-center">Enviamos um código de 6 dígitos para o seu e-mail/celular. Insira-o abaixo para verificar sua identidade.</p>
    
    <form @submit.prevent="handleVerify" class="auth-form">
      <div class="code-inputs">
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
        <span class="dash">-</span>
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
        <input type="text" maxlength="1" class="code-input" placeholder="0" :disabled="isLoading" />
      </div>
      
      <button type="submit" class="btn-primary btn-block mt-8" :disabled="isLoading">
        <Loader2 v-if="isLoading" class="spinner" :size="20" />
        <span v-else>Verificar código</span>
      </button>
    </form>
    
    <p class="auth-footer">
      Não recebeu o código? <a href="#">Reenviar</a>
    </p>
  </AuthLayout>
</template>

<style scoped>
.back-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.back-btn:hover { color: var(--text-primary); }

.icon-wrapper {
  width: 80px;
  height: 80px;
  background-color: #F5F3FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.text-primary { color: var(--primary); }
.text-center { text-align: center; }

.form-title { font-size: 1.75rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
.form-subtitle { color: var(--text-secondary); margin-bottom: 32px; line-height: 1.5; }

.code-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.code-input {
  width: 48px;
  height: 56px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
}
.code-input:focus { border-color: var(--primary); }
.code-input:disabled { background-color: #F8FAFC; color: #94A3B8; cursor: not-allowed; }

.dash { color: var(--border-color); font-weight: bold; }

.btn-block { width: 100%; padding: 14px; font-size: 1rem; display: flex; align-items: center; justify-content: center; }
.btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
.mt-8 { margin-top: 32px; }

.auth-footer { text-align: center; margin-top: 32px; font-size: 0.875rem; color: var(--text-secondary); }
.auth-footer a { color: var(--primary); font-weight: 600; text-decoration: none; }

.spinner { animation: spin 1s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

@media (max-width: 768px) {
  .code-input { width: 40px; height: 48px; }
  .code-inputs { gap: 8px; }
}
</style>
