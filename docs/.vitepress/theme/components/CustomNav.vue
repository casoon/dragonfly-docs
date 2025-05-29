<template>
  <div class="nav-container">
    <div class="nav-items">
      <a href="/ui-docs/" class="nav-item nav-logo">
        <!-- Logo vorerst entfernt -->
      </a>
      <a href="/ui-docs/getting-started/" class="nav-item">Getting Started</a>
      
      <div class="nav-item-with-menu" 
           @mouseenter="showUISystemMenu = true" 
           @mouseleave="showUISystemMenu = false">
        <a href="/ui-docs/ui/" class="nav-item">UI System</a>
        <div v-if="showUISystemMenu" class="nav-menu-container">
          <NavHoverMenu />
        </div>
      </div>
      
      <a href="/ui-docs/effects/" class="nav-item">Effects</a>
      <a href="/ui-docs/examples/" class="nav-item">Examples</a>
      <a href="https://github.com/casoon/dragonfly" class="nav-item" target="_blank">GitHub</a>
    </div>
    
    <!-- Debug-Controls for development -->
    <div class="debug-controls">
      <button @click="toggleUIMenu" class="debug-button">
        {{ showUISystemMenu ? 'Hide UI Menu' : 'Show UI Menu' }}
      </button>
    </div>
    
    <!-- Old components menu (commented out) -->
    <!-- <ComponentsMenu :is-visible="showComponentsMenu" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentsMenu from './ComponentsMenu.vue'
import NavHoverMenu from './NavHoverMenu.vue'

// Legacy click menu (commented out)
const showComponentsMenu = ref(false)

function toggleComponentsMenu() {
  showComponentsMenu.value = !showComponentsMenu.value
  console.log('Toggle Components Menu:', showComponentsMenu.value)
}

// New hover menu
const showUISystemMenu = ref(false)

function toggleUIMenu() {
  showUISystemMenu.value = !showUISystemMenu.value
  console.log('Toggle UI Menu:', showUISystemMenu.value)
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

.nav-menu-container {
  position: absolute;
  top: 100%;
  left: -10px;
  z-index: 9999;
  min-width: 800px;
}

/* Debug controls */
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