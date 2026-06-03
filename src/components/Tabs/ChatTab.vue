<script setup>
import { Sparkles, Paperclip, Send, Copy, ThumbsUp, ThumbsDown } from 'lucide-vue-next'
</script>

<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div class="message user-message">
        <div class="message-content">
          <p>Quais são os principais riscos desse caso?</p>
        </div>
      </div>
      
      <div class="message ai-message">
        <div class="ai-avatar">
          <Sparkles :size="20" class="text-primary" />
        </div>
        <div class="message-content">
          <p>Após analisar as informações do caso, identifiquei alguns pontos de atenção:</p>
          <ol class="ai-list mt-4 mb-4">
            <li><strong>Testemunhas da empresa:</strong> A empresa apresentou duas testemunhas que podem confirmar a ausência do autor.</li>
            <li><strong>Histórico de faltas:</strong> Mesmo com atestados, o juiz pode entender que houve excesso de faltas.</li>
            <li><strong>Discrição do juiz:</strong> Casos de justa causa dependem muito da interpretação do magistrado.</li>
          </ol>
          <p>No entanto, os atestados médicos fortalecem significativamente a tese do autor.</p>
          
          <div class="message-actions mt-4">
            <button class="action-icon"><Copy :size="14" /></button>
            <button class="action-icon"><ThumbsUp :size="14" /></button>
            <button class="action-icon"><ThumbsDown :size="14" /></button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="chat-suggestions">
      <button class="suggestion-chip">Gere uma petição inicial</button>
      <button class="suggestion-chip">Quais jurisprudências se aplicam?</button>
      <button class="suggestion-chip">Como a empresa pode se defender?</button>
    </div>
    
    <div class="chat-input-area">
      <div class="input-wrapper">
        <textarea placeholder="Pergunte algo sobre este caso..."></textarea>
        <div class="input-actions">
          <button class="btn-icon"><Paperclip :size="18" /></button>
          <button class="btn-send"><Send :size="18" /></button>
        </div>
      </div>
      <p class="disclaimer">A IA pode cometer erros. Sempre revise as informações.</p>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 280px); /* Approximate available height */
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
}

.message {
  display: flex;
  max-width: 85%;
}

.user-message {
  align-self: flex-end;
}

.user-message .message-content {
  background-color: #F5F3FF;
  color: var(--primary);
  border-radius: 16px 16px 0 16px;
  padding: 16px 20px;
  font-weight: 500;
}

.ai-message {
  align-self: flex-start;
  gap: 16px;
}

.ai-avatar {
  width: 40px;
  height: 40px;
  background-color: #F5F3FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ai-message .message-content {
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 16px 16px 16px 0;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
  line-height: 1.6;
}

.ai-list {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mt-4 { margin-top: 16px; }
.mb-4 { margin-bottom: 16px; }

.message-actions {
  display: flex;
  gap: 12px;
}

.action-icon {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.action-icon:hover {
  color: var(--primary);
}

.chat-suggestions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.suggestion-chip {
  background: white;
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.suggestion-chip:hover {
  background: var(--bg-color);
  color: var(--text-primary);
  border-color: #CBD5E1;
}

.chat-input-area {
  margin-top: auto;
}

.input-wrapper {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 12px 16px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

textarea {
  flex: 1;
  border: none;
  resize: none;
  min-height: 44px;
  font-family: inherit;
  font-size: 1rem;
  padding: 10px 0;
  outline: none;
  max-height: 120px;
}

.input-actions {
  display: flex;
  gap: 8px;
  margin-left: 12px;
  padding-bottom: 4px;
}

.btn-icon {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  background: var(--bg-color);
  color: var(--text-primary);
}

.btn-send {
  background: var(--primary);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.btn-send:hover {
  background-color: var(--primary-hover);
}

.disclaimer {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 12px;
}
</style>
