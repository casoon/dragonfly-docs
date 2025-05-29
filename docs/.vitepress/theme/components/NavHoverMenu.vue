<template>
  <div class="nav-hover-menu-wrapper">
    <div class="nav-hover-menu">
      <div class="nav-hover-menu-content">
        <!-- Linke Spalte mit Kategorien -->
        <div class="nav-hover-menu-categories">
          <h3 class="nav-hover-menu-title">Komponenten-Kategorien</h3>
          <ul class="nav-hover-menu-category-list">
            <li>
              <a href="/ui-docs/ui/#elements" class="nav-hover-menu-category-item">
                Basis-Elemente
              </a>
            </li>
            <li>
              <a href="/ui-docs/ui/#components" class="nav-hover-menu-category-item">
                Komplexe Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/ui/#layout-components" class="nav-hover-menu-category-item">
                Layout-Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/ui/#patterns" class="nav-hover-menu-category-item">
                UI-Muster
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Rechte Spalte mit Komponenten-Links -->
        <div class="nav-hover-menu-components">
          <div class="nav-hover-menu-components-section">
            <h3 class="nav-hover-menu-subtitle">Basis-Elemente</h3>
            <div class="nav-hover-menu-components-grid">
              <a href="/ui-docs/ui/elements/avatar" class="nav-hover-menu-component-item">Avatar</a>
              <a href="/ui-docs/ui/elements/blockquote" class="nav-hover-menu-component-item">Blockquote</a>
              <a href="/ui-docs/ui/elements/button" class="nav-hover-menu-component-item">Button</a>
              <a href="/ui-docs/ui/elements/checkbox" class="nav-hover-menu-component-item">Checkbox</a>
              <a href="/ui-docs/ui/elements/chip" class="nav-hover-menu-component-item">Chip</a>
              <a href="/ui-docs/ui/elements/input" class="nav-hover-menu-component-item">Input</a>
            </div>
          </div>
          
          <div class="nav-hover-menu-components-section">
            <h3 class="nav-hover-menu-subtitle">Komplexe Komponenten</h3>
            <div class="nav-hover-menu-components-grid">
              <a href="/ui-docs/ui/components/action-bar" class="nav-hover-menu-component-item">Action Bar</a>
              <a href="/ui-docs/ui/components/alert" class="nav-hover-menu-component-item">Alert</a>
              <a href="/ui-docs/ui/components/badge" class="nav-hover-menu-component-item">Badge</a>
              <a href="/ui-docs/ui/components/card" class="nav-hover-menu-component-item">Card</a>
              <a href="/ui-docs/ui/components/dialog" class="nav-hover-menu-component-item">Dialog</a>
              <a href="/ui-docs/ui/components/toast" class="nav-hover-menu-component-item">Toast</a>
            </div>
          </div>
          
          <div class="nav-hover-menu-footer">
            <a href="/ui-docs/ui/" class="nav-hover-menu-all-link">
              Alle Komponenten anzeigen →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine zusätzliche Logik erforderlich
</script>

<style>
.nav-hover-menu-wrapper {
  position: relative;
  width: 100%;
  height: 0;
}

.nav-hover-menu {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  max-width: calc(100vw - 32px);
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 24px;
  z-index: 100;
  margin-top: 8px;
}

/* Pfeil oben am Menü */
.nav-hover-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 16px;
  height: 16px;
  background-color: var(--vp-c-bg);
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
}

.nav-hover-menu-content {
  display: flex;
  gap: 40px;
}

.nav-hover-menu-categories {
  width: 220px;
  border-right: 1px solid var(--vp-c-divider);
  padding-right: 20px;
}

.nav-hover-menu-components {
  flex: 1;
}

.nav-hover-menu-title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.nav-hover-menu-subtitle {
  font-size: 14px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.nav-hover-menu-category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-hover-menu-category-item {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-hover-menu-category-item:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.nav-hover-menu-components-section {
  margin-bottom: 20px;
}

.nav-hover-menu-components-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.nav-hover-menu-component-item {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-hover-menu-component-item:hover {
  background-color: var(--vp-c-bg-soft-up);
  border-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.nav-hover-menu-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: right;
}

.nav-hover-menu-all-link {
  color: var(--vp-c-brand);
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
}

.nav-hover-menu-all-link:hover {
  text-decoration: underline;
}
</style> 