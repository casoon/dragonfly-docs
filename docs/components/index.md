---
title: Komponenten
outline: false
---

# Komponenten-Übersicht

Die Casoon UI Library bietet eine umfangreiche Sammlung modularer Komponenten für verschiedene UI-Anforderungen. Jede Komponente ist als eigenständiges CSS-Modul implementiert und lässt sich flexibel in deine Projekte integrieren.

<div class="intro-card">
  <div class="intro-icon">🧩</div>
  <div class="intro-content">
    <h2>Komponenten-Bibliothek</h2>
    <p>Die wichtigsten UI-Bausteine für moderne Web-Anwendungen</p>
  </div>
</div>

## Komponenten-Kategorien

<div class="category-grid">
  <a href="#basis-komponenten" class="category-card">
    <span>Basis-Komponenten</span>
  </a>
  <a href="#formular-komponenten" class="category-card">
    <span>Formular-Komponenten</span>
  </a>
  <a href="#layout-komponenten" class="category-card">
    <span>Layout-Komponenten</span>
  </a>
  <a href="#feedback-komponenten" class="category-card">
    <span>Feedback-Komponenten</span>
  </a>
  <a href="#erweiterte-komponenten" class="category-card">
    <span>Erweiterte Komponenten</span>
  </a>
</div>

## Basis-Komponenten {#basis-komponenten}

<div class="component-grid">
  <a href="/ui-docs/components/alert/" class="component-item">Alert</a>
  <a href="/ui-docs/components/avatar/" class="component-item">Avatar</a>
  <a href="/ui-docs/components/badge/" class="component-item">Badge</a>
  <a href="/ui-docs/components/button/" class="component-item">Button</a>
  <a href="/ui-docs/components/card/" class="component-item">Card</a>
  <a href="/ui-docs/components/chip/" class="component-item">Chip</a>
  <a href="/ui-docs/components/code/" class="component-item">Code</a>
  <a href="/ui-docs/components/spinner/" class="component-item">Spinner</a>
  <a href="/ui-docs/components/tooltip/" class="component-item">Tooltip</a>
</div>

## Formular-Komponenten {#formular-komponenten}

<div class="component-grid">
  <a href="/ui-docs/components/checkbox/" class="component-item">Checkbox</a>
  <a href="/ui-docs/components/file/" class="component-item">File</a>
  <a href="/ui-docs/components/forms/" class="component-item">Form</a>
  <a href="/ui-docs/components/input/" class="component-item">Input</a>
  <a href="/ui-docs/components/input-group/" class="component-item">Input Group</a>
  <a href="/ui-docs/components/radio/" class="component-item">Radio</a>
  <a href="/ui-docs/components/select/" class="component-item">Select</a>
  <a href="/ui-docs/components/slider/" class="component-item">Slider</a>
  <a href="/ui-docs/components/switch/" class="component-item">Switch</a>
  <a href="/ui-docs/components/textarea/" class="component-item">Textarea</a>
</div>

## Layout-Komponenten {#layout-komponenten}

<div class="component-grid">
  <a href="/ui-docs/components/footer/" class="component-item">Footer</a>
  <a href="/ui-docs/components/header/" class="component-item">Header</a>
  <a href="/ui-docs/components/sidebar/" class="component-item">Sidebar</a>
  <a href="/ui-docs/components/table/" class="component-item">Table</a>
  <a href="/ui-docs/components/tabs/" class="component-item">Tabs</a>
</div>

## Feedback-Komponenten {#feedback-komponenten}

<div class="component-grid">
  <a href="/ui-docs/components/modal/" class="component-item">Modal</a>
  <a href="/ui-docs/components/notification/" class="component-item">Notification</a>
  <a href="/ui-docs/components/progress/" class="component-item">Progress</a>
  <a href="/ui-docs/components/skeleton/" class="component-item">Skeleton</a>
  <a href="/ui-docs/components/toast/" class="component-item">Toast</a>
</div>

## Erweiterte Komponenten {#erweiterte-komponenten}

<div class="component-grid">
  <a href="/ui-docs/components/blog/" class="component-item">Blog</a>
  <a href="/ui-docs/components/hamburger/" class="component-item">Hamburger Menu</a>
  <a href="/ui-docs/components/widget/" class="component-item">Widget</a>
  <a href="/ui-docs/components/wizard/" class="component-item">Wizard</a>
</div>

## Komponenten verwenden

Um Komponenten aus der Casoon UI Library zu nutzen, musst du die Core-Datei, ein Theme und jede gewünschte Komponente einzeln importieren:

```css
/* Erforderliche Basis-Dateien */
@import "@casoon/ui-lib/core.css";
@import "@casoon/ui-lib/themes/day.css";

/* Importiere einzelne Komponenten nach Bedarf */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/card.css";
@import "@casoon/ui-lib/components/alert.css";
```

<style>
/* Intro Card Styles */
.intro-card {
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
}

.intro-icon {
  font-size: 32px;
  margin-right: 20px;
  background-color: #e0f2fe;
  height: 64px;
  width: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-content h2 {
  margin-top: 0;
  margin-bottom: 8px;
}

.intro-content p {
  margin: 0;
  color: #64748b;
}

/* Category Grid Styles */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.category-card {
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #334155;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.category-card:hover {
  background-color: #e0f2fe;
  color: #0369a1;
  transform: translateY(-2px);
}

/* Component Grid Styles */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 32px;
}

.component-item {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px 16px;
  color: #334155;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.component-item:hover {
  background-color: #e0f2fe;
  border-color: #bae6fd;
  color: #0369a1;
  transform: translateY(-2px);
}
</style> 