<template>
  <div class="nav-container">
    <div class="nav-items">
      <a href="/ui-docs/" class="nav-item nav-logo">
        <!-- Logo vorerst entfernt -->
      </a>
      <a href="/ui-docs/getting-started/" class="nav-item">Getting Started</a>
      
      <div class="nav-item-with-menu">
        <a href="/ui-docs/ui/" class="nav-item" @click.prevent="toggleComponentsMenu">Components</a>
      </div>
      
      <a href="/ui-docs/effects/" class="nav-item">Effects</a>
      <a href="/ui-docs/examples/" class="nav-item">Examples</a>
      <a href="https://github.com/casoon/dragonfly" class="nav-item" target="_blank">GitHub</a>
    </div>
    
    <!-- Debug-Steuerung, immer sichtbar -->
    <div class="debug-controls">
      <button @click="toggleComponentsMenu" class="debug-button">
        {{ showComponentsMenu ? 'Hide Menu' : 'Show Menu' }}
      </button>
    </div>
    
    <!-- Neue Komponenten-Übersicht -->
    <ComponentsMenu :is-visible="showComponentsMenu" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentsMenu from './ComponentsMenu.vue'

const showComponentsMenu = ref(false)

function toggleComponentsMenu() {
  showComponentsMenu.value = !showComponentsMenu.value
  console.log('Toggle Components Menu:', showComponentsMenu.value)
}
</script>

<style>
.nav-container {
  padding: 0 24px;
  position: relative;
}

.nav-items {
  display: flex;
  align-items: center;
  height: 56px;
}

.nav-item {
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
  height: 56px;
  display: flex;
  align-items: center;
}

.nav-logo {
  padding: 0;
  margin-right: 12px;
}

.logo-image {
  height: 32px;
  width: auto;
}

.nav-item:hover {
  color: var(--vp-c-brand);
}

.nav-item-with-menu {
  position: relative;
  height: 56px;
  cursor: pointer;
}

/* Debug-Steuerung */
.debug-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99999;
}

.debug-button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
</style> 