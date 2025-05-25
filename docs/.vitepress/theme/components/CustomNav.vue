<template>
  <div class="nav-container">
    <div class="nav-items">
      <a href="/ui-docs/" class="nav-item">Home</a>
      <a href="/ui-docs/getting-started/" class="nav-item">Getting Started</a>
      
      <div class="nav-item-with-menu" 
           @mouseenter="showComponentsMenu = true" 
           @mouseleave="showComponentsMenu = false">
        <a href="/ui-docs/components/" class="nav-item">Components</a>
        <transition name="fade">
          <NavHoverMenu v-if="showComponentsMenu" />
        </transition>
      </div>
      
      <a href="/ui-docs/effects/" class="nav-item">Effects</a>
      <a href="/ui-docs/examples/" class="nav-item">Examples</a>
      <a href="https://github.com/casoon/ui-lib" class="nav-item" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavHoverMenu from './NavHoverMenu.vue'

const showComponentsMenu = ref(false)
</script>

<style scoped>
.nav-container {
  padding: 0 24px;
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

.nav-item:hover {
  color: var(--vp-c-brand);
}

.nav-item-with-menu {
  position: relative;
}

/* Transition Effekte für das Hover-Menü */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 