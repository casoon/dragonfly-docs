<template>
  <div v-if="isVisible" class="components-menu">
    <div class="components-menu-content">
      <div class="components-menu-left">
        <h3>Komponenten-Kategorien</h3>
        <ul class="component-categories">
          <li><a href="/ui-docs/ui/#elements">Basis-Komponenten</a></li>
          <li><a href="/ui-docs/ui/#form-components">Formular-Komponenten</a></li>
          <li><a href="/ui-docs/ui/#layout-components">Layout-Komponenten</a></li>
          <li><a href="/ui-docs/ui/#feedback-components">Feedback-Komponenten</a></li>
          <li><a href="/ui-docs/ui/#advanced-components">Erweiterte Komponenten</a></li>
        </ul>
      </div>
      
      <div class="components-menu-right">
        <section class="component-section">
          <h3>Basis-Komponenten</h3>
          <div class="component-grid">
            <a href="/ui-docs/ui/components/alert" class="component-item">Alert</a>
            <a href="/ui-docs/ui/elements/avatar" class="component-item">Avatar</a>
            <a href="/ui-docs/ui/components/badge" class="component-item">Badge</a>
            <a href="/ui-docs/ui/elements/button" class="component-item">Button</a>
            <a href="/ui-docs/ui/components/card" class="component-item">Card</a>
            <a href="/ui-docs/ui/elements/chip" class="component-item">Chip</a>
          </div>
        </section>
        
        <section class="component-section">
          <h3>Formular-Komponenten</h3>
          <div class="component-grid">
            <a href="/ui-docs/ui/elements/checkbox" class="component-item">Checkbox</a>
            <a href="/ui-docs/ui/elements/input" class="component-item">Input</a>
            <a href="/ui-docs/ui/elements/radio" class="component-item">Radio</a>
            <a href="/ui-docs/ui/elements/select" class="component-item">Select</a>
            <a href="/ui-docs/ui/elements/slider" class="component-item">Slider</a>
            <a href="/ui-docs/ui/elements/switch" class="component-item">Switch</a>
          </div>
        </section>
        
        <a href="/ui-docs/ui/" class="show-all-link">
          Alle Komponenten anzeigen <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
/* Komponenten-Menü im neuen Design */
.components-menu {
  position: fixed;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  z-index: 99999;
}

.components-menu-content {
  display: flex;
  padding: 30px;
  max-height: 80vh;
  overflow-y: auto;
}

.components-menu-left {
  width: 250px;
  padding-right: 30px;
  border-right: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

.components-menu-right {
  flex-grow: 1;
  padding-left: 30px;
}

.component-categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.component-categories li {
  margin-bottom: 15px;
}

.component-categories a {
  display: block;
  font-size: 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

.component-categories a:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.component-section {
  margin-bottom: 30px;
}

.component-section h3 {
  font-size: 18px;
  margin: 0 0 20px 0;
  color: var(--vp-c-text-1);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.component-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  padding: 20px 15px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s;
  text-align: center;
}

.component-item:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.show-all-link {
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.show-all-link:hover {
  opacity: 0.8;
}

.arrow {
  display: inline-block;
  transition: transform 0.2s;
}

.show-all-link:hover .arrow {
  transform: translateX(4px);
}

.components-menu h3 {
  font-size: 18px;
  color: var(--vp-c-brand);
  margin-bottom: 16px;
  font-weight: 600;
}
</style> 