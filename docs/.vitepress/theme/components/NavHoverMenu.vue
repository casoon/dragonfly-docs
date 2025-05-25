<template>
  <div class="nav-hover-menu-wrapper">
    <div class="nav-hover-menu">
      <div class="nav-hover-menu-content">
        <!-- Linke Spalte mit Kategorien -->
        <div class="nav-hover-menu-categories">
          <h3 class="nav-hover-menu-title">Komponenten-Kategorien</h3>
          <ul class="nav-hover-menu-category-list">
            <li>
              <a href="/ui-docs/components/#basis-komponenten" class="nav-hover-menu-category-item">
                Basis-Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/components/#formular-komponenten" class="nav-hover-menu-category-item">
                Formular-Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/components/#layout-komponenten" class="nav-hover-menu-category-item">
                Layout-Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/components/#feedback-komponenten" class="nav-hover-menu-category-item">
                Feedback-Komponenten
              </a>
            </li>
            <li>
              <a href="/ui-docs/components/#erweiterte-komponenten" class="nav-hover-menu-category-item">
                Erweiterte Komponenten
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Rechte Spalte mit Komponenten-Links -->
        <div class="nav-hover-menu-components">
          <div class="nav-hover-menu-components-section">
            <h3 class="nav-hover-menu-subtitle">Basis-Komponenten</h3>
            <div class="nav-hover-menu-components-grid">
              <a href="/ui-docs/components/alert/" class="nav-hover-menu-component-item">Alert</a>
              <a href="/ui-docs/components/avatar/" class="nav-hover-menu-component-item">Avatar</a>
              <a href="/ui-docs/components/badge/" class="nav-hover-menu-component-item">Badge</a>
              <a href="/ui-docs/components/button/" class="nav-hover-menu-component-item">Button</a>
              <a href="/ui-docs/components/card/" class="nav-hover-menu-component-item">Card</a>
              <a href="/ui-docs/components/chip/" class="nav-hover-menu-component-item">Chip</a>
            </div>
          </div>
          
          <div class="nav-hover-menu-components-section">
            <h3 class="nav-hover-menu-subtitle">Formular-Komponenten</h3>
            <div class="nav-hover-menu-components-grid">
              <a href="/ui-docs/components/checkbox/" class="nav-hover-menu-component-item">Checkbox</a>
              <a href="/ui-docs/components/input/" class="nav-hover-menu-component-item">Input</a>
              <a href="/ui-docs/components/radio/" class="nav-hover-menu-component-item">Radio</a>
              <a href="/ui-docs/components/select/" class="nav-hover-menu-component-item">Select</a>
              <a href="/ui-docs/components/slider/" class="nav-hover-menu-component-item">Slider</a>
              <a href="/ui-docs/components/switch/" class="nav-hover-menu-component-item">Switch</a>
            </div>
          </div>
          
          <div class="nav-hover-menu-footer">
            <a href="/ui-docs/components/" class="nav-hover-menu-all-link">
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

<style scoped>
.nav-hover-menu-wrapper {
  position: relative;
}

.nav-hover-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  max-width: calc(100vw - 32px);
  background-color: white;
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
  background-color: white;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
}

.nav-hover-menu-content {
  display: flex;
  gap: 40px;
}

.nav-hover-menu-categories {
  width: 220px;
  border-right: 1px solid #eaeaea;
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
  color: #111827;
}

.nav-hover-menu-subtitle {
  font-size: 14px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 12px;
  color: #111827;
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
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-hover-menu-category-item:hover {
  background-color: #f3f4f6;
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
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-hover-menu-component-item:hover {
  background-color: #e0f2fe;
  border-color: #bae6fd;
  color: #0369a1;
  transform: translateY(-2px);
}

.nav-hover-menu-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eaeaea;
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