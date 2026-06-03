<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Share2, MoreHorizontal, Bell, HelpCircle } from 'lucide-vue-next'
import OverviewTab from '../components/Tabs/OverviewTab.vue'
import ChatTab from '../components/Tabs/ChatTab.vue'
import DocumentsTab from '../components/Tabs/DocumentsTab.vue'
import TimelineTab from '../components/Tabs/TimelineTab.vue'
import JurisprudenceTab from '../components/Tabs/JurisprudenceTab.vue'
import DropdownMenu from '../components/DropdownMenu.vue'
import { useToast } from '../composables/useToast'

const route = useRoute()
const { success } = useToast()
const activeTab = ref('overview') // overview, chat, documents, timeline

const tabs = [
  { id: 'overview', label: 'Visão geral' },
  { id: 'chat', label: 'Chat' },
  { id: 'jurisprudence', label: 'Jurisprudências' },
  { id: 'documents', label: 'Documentos' },
  { id: 'timeline', label: 'Linha do tempo' }
]

// Mock data based on id, but for now just use a static one
const caseData = {
  title: 'João Silva x Empresa XPTO Ltda',
  area: 'Trabalhista',
  updated: 'há 2 horas'
}
</script>

<template>
  <div class="case-details-view">
    <div class="page-header">
      <div class="breadcrumbs">
        <router-link to="/">Casos</router-link>
        <span class="separator">></span>
        <span class="current">{{ caseData.title }}</span>
      </div>
      
      <div class="header-main">
        <div class="title-area">
          <h1>{{ caseData.title }}</h1>
          <span class="tag Trabalhista">{{ caseData.area }}</span>
        </div>
        <div class="header-actions">
          <button class="btn-outline" @click="success('Link do caso copiado!')">
            <Share2 :size="16" /> Compartilhar
          </button>
          <div class="btn-outline icon-only" style="padding: 0 8px;">
            <DropdownMenu horizontal />
          </div>
        </div>
      </div>
      <p class="last-updated">Atualizado {{ caseData.updated }}</p>

      <div class="tabs-nav">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab-btn', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="tab-content">
      <OverviewTab v-if="activeTab === 'overview'" />
      <ChatTab v-if="activeTab === 'chat'" />
      <JurisprudenceTab v-if="activeTab === 'jurisprudence'" />
      <DocumentsTab v-if="activeTab === 'documents'" />
      <TimelineTab v-if="activeTab === 'timeline'" />
    </div>
  </div>
</template>

<style scoped>
.case-details-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-header {
  background: white;
  padding: 24px 40px 0;
  border-bottom: 1px solid var(--border-color);
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.breadcrumbs a:hover {
  color: var(--primary);
}

.separator {
  color: #CBD5E1;
}

.current {
  color: var(--text-primary);
  font-weight: 500;
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.title-area {
  display: flex;
  align-items: center;
  gap: 16px;
}

.title-area h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.icon-only {
  padding: 8px;
}

.last-updated {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 32px;
}

.tabs-nav {
  display: flex;
  gap: 32px;
}

.tab-btn {
  background: transparent;
  border: none;
  padding: 0 0 16px 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.tab-content {
  padding: 32px 40px;
  flex: 1;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .page-header {
    padding: 16px 20px 0;
  }
  .header-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .tabs-nav {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 8px;
    gap: 20px;
  }
  .tab-content {
    padding: 20px;
  }
}
</style>
