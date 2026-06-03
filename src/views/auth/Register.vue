<script setup>
import { ref } from 'vue'
import { Mail, Lock, User, Phone, Loader2 } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AuthLayout from '../../components/AuthLayout.vue'

const router = useRouter()
const authMethod = ref('email') // email or phone
const isLoading = ref(false)
const phoneValue = ref('')

function handleRegister() {
  isLoading.value = true
  
  // Simulate backend processing
  setTimeout(() => {
    isLoading.value = false
    router.push('/verify')
  }, 2000)
}

function onPhoneInput(e) {
  let v = e.target.value.replace(/\D/g, '')
  if (v.length > 11) v = v.slice(0, 11)
  
  if (v.length > 2) {
    v = `(${v.slice(0, 2)}) ${v.slice(2)}`
  }
  if (v.length > 10) {
    v = `${v.slice(0, 10)}-${v.slice(10)}`
  }
  
  phoneValue.value = v
}
</script>

<template>
  <AuthLayout
    title="Junte-se à nova era da advocacia."
    subtitle="Crie sua conta em segundos e ganhe 14 dias gratuitos no Plano Profissional."
  >
    <h2 class="form-title">Criar uma conta</h2>
    <p class="form-subtitle">Preencha seus dados para começar.</p>
    
    <div class="auth-tabs">
      <button 
        :class="['auth-tab', { active: authMethod === 'email' }]" 
        @click="authMethod = 'email'"
        :disabled="isLoading"
      >
        <Mail :size="16" /> E-mail
      </button>
      <button 
        :class="['auth-tab', { active: authMethod === 'phone' }]" 
        @click="authMethod = 'phone'"
        :disabled="isLoading"
      >
        <Phone :size="16" /> Celular
      </button>
    </div>
    
    <form @submit.prevent="handleRegister" class="auth-form">
      <div class="input-group">
        <label>Nome completo</label>
        <div class="input-with-icon">
          <User :size="20" class="input-icon" />
          <input type="text" placeholder="João Almeida" required :disabled="isLoading" />
        </div>
      </div>
      
      <div v-if="authMethod === 'email'" class="input-group">
        <label>E-mail corporativo</label>
        <div class="input-with-icon">
          <Mail :size="20" class="input-icon" />
          <input type="email" placeholder="nome@escritorio.com.br" required :disabled="isLoading" />
        </div>
      </div>
      
      <div v-if="authMethod === 'phone'" class="input-group">
        <label>Número de celular</label>
        <div class="input-with-icon">
          <Phone :size="20" class="input-icon" />
          <input 
            type="tel" 
            placeholder="(11) 99999-9999" 
            v-model="phoneValue" 
            @input="onPhoneInput" 
            required 
            :disabled="isLoading" 
          />
        </div>
      </div>
      
      <div class="input-group">
        <label>Senha</label>
        <div class="input-with-icon">
          <Lock :size="20" class="input-icon" />
          <input type="password" placeholder="Mínimo de 8 caracteres" required :disabled="isLoading" />
        </div>
      </div>
      
      <button type="submit" class="btn-primary btn-block mt-4" :disabled="isLoading">
        <Loader2 v-if="isLoading" class="spinner" :size="20" />
        <span v-else>Criar conta</span>
      </button>
    </form>
    
    <p class="auth-footer">
      Já tem uma conta? <router-link to="/login">Entrar</router-link>
    </p>
  </AuthLayout>
</template>

<style scoped>
.form-title { font-size: 1.75rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
.form-subtitle { color: var(--text-secondary); margin-bottom: 24px; }

/* Tabs for Register */
.auth-tabs {
  display: flex;
  background-color: var(--bg-color);
  border-radius: var(--radius-sm);
  padding: 4px;
  margin-bottom: 24px;
}
.auth-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
}
.auth-tab.active {
  background: white;
  color: var(--primary);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.auth-tab:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.auth-form { display: flex; flex-direction: column; gap: 20px; }
.input-group label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px; }
.input-with-icon { position: relative; }
.input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); }
.input-with-icon input { width: 100%; padding: 12px 16px 12px 44px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.2s; }
.input-with-icon input:focus { border-color: var(--primary); }
.input-with-icon input:disabled { background-color: #F8FAFC; color: #94A3B8; cursor: not-allowed; }

.btn-block { width: 100%; padding: 14px; font-size: 1rem; display: flex; align-items: center; justify-content: center; }
.btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
.mt-4 { margin-top: 16px; }

.auth-footer { text-align: center; margin-top: 32px; font-size: 0.875rem; color: var(--text-secondary); }
.auth-footer a { color: var(--primary); font-weight: 600; text-decoration: none; }

.spinner { animation: spin 1s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
