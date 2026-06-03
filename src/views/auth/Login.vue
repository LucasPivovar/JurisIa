<script setup>
import { ref } from 'vue'
import { Mail, Lock, Loader2 } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AuthLayout from '../../components/AuthLayout.vue'

const router = useRouter()
const isLoading = ref(false)

function handleLogin() {
  isLoading.value = true
  
  // Simulate backend validation
  setTimeout(() => {
    isLoading.value = false
    router.push('/verify')
  }, 2000)
}
</script>

<template>
  <AuthLayout>
    <h2 class="form-title">Bem-vindo de volta</h2>
    <p class="form-subtitle">Acesse sua conta para continuar.</p>
    
    <form @submit.prevent="handleLogin" class="auth-form">
      <div class="input-group">
        <label>E-mail corporativo</label>
        <div class="input-with-icon">
          <Mail :size="20" class="input-icon" />
          <input type="email" placeholder="nome@escritorio.com.br" required :disabled="isLoading" />
        </div>
      </div>
      
      <div class="input-group">
        <div class="label-row">
          <label>Senha</label>
          <router-link to="/forgot-password" class="forgot-password">Esqueceu a senha?</router-link>
        </div>
        <div class="input-with-icon">
          <Lock :size="20" class="input-icon" />
          <input type="password" placeholder="••••••••" required :disabled="isLoading" />
        </div>
      </div>
      
      <button type="submit" class="btn-primary btn-block mt-4" :disabled="isLoading">
        <Loader2 v-if="isLoading" class="spinner" :size="20" />
        <span v-else>Entrar</span>
      </button>
    </form>
    
    <p class="auth-footer">
      Não tem uma conta? <router-link to="/register">Cadastre-se</router-link>
    </p>
  </AuthLayout>
</template>

<style scoped>
.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-subtitle {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.label-row label {
  margin-bottom: 0;
}

.forgot-password {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
}

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

.input-with-icon input {
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-with-icon input:focus {
  border-color: var(--primary);
}

.input-with-icon input:disabled {
  background-color: #F8FAFC;
  color: #94A3B8;
  cursor: not-allowed;
}

.btn-block {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.mt-4 { margin-top: 16px; }

.auth-footer {
  text-align: center;
  margin-top: 32px;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.auth-footer a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
