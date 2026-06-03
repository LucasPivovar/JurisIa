<script setup>
import { ref } from 'vue'
import { Mail, ArrowLeft, Loader2 } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AuthLayout from '../../components/AuthLayout.vue'

const router = useRouter()
const isLoading = ref(false)
const email = ref('')
const emailSent = ref(false)

function handleReset() {
  isLoading.value = true
  
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false
    emailSent.value = true
  }, 2000)
}
</script>

<template>
  <AuthLayout 
    title="Esqueceu sua senha?" 
    subtitle="Sem problemas, enviaremos as instruções de recuperação para o seu e-mail corporativo."
  >
    <button class="back-link mb-6" @click="router.push('/login')">
      <ArrowLeft :size="16" /> Voltar para o login
    </button>
    
    <div v-if="!emailSent">
      <h2 class="form-title">Recuperar senha</h2>
      <p class="form-subtitle">Informe o e-mail associado à sua conta.</p>
      
      <form @submit.prevent="handleReset" class="auth-form">
        <div class="input-group">
          <label>E-mail corporativo</label>
          <div class="input-with-icon">
            <Mail :size="20" class="input-icon" />
            <input type="email" v-model="email" placeholder="nome@escritorio.com.br" required :disabled="isLoading" />
          </div>
        </div>
        
        <button type="submit" class="btn-primary btn-block mt-4" :disabled="isLoading">
          <Loader2 v-if="isLoading" class="spinner" :size="20" />
          <span v-else>Enviar instruções</span>
        </button>
      </form>
    </div>
    
    <div v-else class="success-state text-center">
      <div class="success-icon-large">
        <Mail :size="48" class="text-primary" />
      </div>
      <h2 class="form-title">E-mail enviado!</h2>
      <p class="form-subtitle">
        Enviamos um link de recuperação para <strong>{{ email }}</strong>.<br/>
        Verifique sua caixa de entrada e a pasta de spam.
      </p>
      <button class="btn-primary btn-block mt-4" @click="router.push('/login')">
        Voltar para o Login
      </button>
    </div>
  </AuthLayout>
</template>

<style scoped>
.back-link {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--primary);
}

.mb-6 { margin-bottom: 24px; }

.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-subtitle {
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.5;
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

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.success-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.success-icon-large {
  width: 80px;
  height: 80px;
  background-color: #F5F3FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.text-center { text-align: center; }
.text-primary { color: var(--primary); }
</style>
