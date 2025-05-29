---
title: Functional Containers
category: Layout
---

# Functional Containers

Die Casoon UI Library bietet spezielle funktionale Container, die über ihre visuellen Eigenschaften hinaus bestimmte Verhaltensmuster und Funktionalitäten implementieren. Diese Dokumentation erklärt die verfügbaren funktionalen Container und ihre Use Cases.

## Overview

Funktionale Container erweitern das Container System um folgende Aspekte:

1. **Interaktive Funktionen** - Container mit eingebauten Interaktionen
2. **Inhaltssteuerung** - Container für spezifische Inhaltsanzeige und -verwaltung
3. **Verhaltenslogik** - Container mit speziellen Verhaltensmustern
4. **Status-Management** - Container, die auf verschiedene States reagieren
5. **Kontext-Bereitstellung** - Container, die Kontext für Kinder-Components bereitstellen

## Collapsible Container

Container, die ein- und ausgeklappt werden können:

```html
<div class="collapsible-container">
  <button class="collapsible-trigger">
    <h3>Klicken zum Erweitern</h3>
    <span class="collapsible-icon">+</span>
  </button>
  <div class="collapsible-content">
    <p>Dieser Inhalt wird angezeigt, wenn der Container erweitert ist.</p>
  </div>
</div>
```

Implementierung:

```css
.collapsible-container {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.collapsible-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--space-4);
  background-color: var(--color-background);
  border: none;
  text-align: left;
  cursor: pointer;
}

.collapsible-content {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.collapsible-container.open .collapsible-content {
  padding: var(--space-4);
  max-height: 500px; /* Anpassen je nach Inhalt */
}

.collapsible-container.open .collapsible-icon {
  transform: rotate(45deg);
}

.collapsible-icon {
  transition: transform 0.3s ease;
}
```

JavaScript für die Funktionalität:

```javascript
document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const container = trigger.closest('.collapsible-container');
    container.classList.toggle('open');
  });
});
```

## Tabs Container

Container für Tab-basierte Inhaltsanzeige:

```html
<div class="tabs-container">
  <div class="tabs-header">
    <button class="tab-trigger active" data-tab="tab1">Tab 1</button>
    <button class="tab-trigger" data-tab="tab2">Tab 2</button>
    <button class="tab-trigger" data-tab="tab3">Tab 3</button>
  </div>
  <div class="tabs-content">
    <div id="tab1" class="tab-panel active">
      <p>Inhalt für Tab 1</p>
    </div>
    <div id="tab2" class="tab-panel">
      <p>Inhalt für Tab 2</p>
    </div>
    <div id="tab3" class="tab-panel">
      <p>Inhalt für Tab 3</p>
    </div>
  </div>
</div>
```

Implementierung:

```css
.tabs-container {
  width: 100%;
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid var(--color-border);
}

.tab-trigger {
  padding: var(--space-3) var(--space-4);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.tab-trigger.active {
  border-bottom-color: var(--color-primary-500);
  color: var(--color-primary-500);
}

.tab-panel {
  display: none;
  padding: var(--space-4);
}

.tab-panel.active {
  display: block;
}
```

JavaScript für die Funktionalität:

```javascript
document.querySelectorAll('.tab-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    // Alle Tabs deaktivieren
    document.querySelectorAll('.tab-trigger').forEach(t => {
      t.classList.remove('active');
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.remove('active');
    });
    
    // Ausgewählten Tab aktivieren
    trigger.classList.add('active');
    const tabId = trigger.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});
```

## Accordion Container

Container für Akkordeon-Inhaltsanzeige:

```html
<div class="accordion-container">
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 1</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Inhalt für Abschnitt 1</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 2</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Inhalt für Abschnitt 2</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 3</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Inhalt für Abschnitt 3</p>
    </div>
  </div>
</div>
```

Implementierung:

```css
.accordion-container {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--space-4);
  background-color: var(--color-background);
  border: none;
  text-align: left;
  cursor: pointer;
}

.accordion-content {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.accordion-item.open .accordion-content {
  padding: var(--space-4);
  max-height: 500px; /* Anpassen je nach Inhalt */
}

.accordion-item.open .accordion-icon {
  transform: rotate(45deg);
}

.accordion-icon {
  transition: transform 0.3s ease;
}
```

JavaScript für die Funktionalität:

```javascript
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    
    // Optional: Andere Accordion-Items schließen
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    
    // Ausgewähltes Item umschalten
    item.classList.toggle('open');
  });
});
```

## Tooltip Container

Container für Tooltip-Funktionalität:

```html
<div class="tooltip-container">
  <button class="tooltip-trigger">Hover für Info</button>
  <div class="tooltip-content">
    Dies ist ein Tooltip mit zusätzlichen Informationen
  </div>
</div>
```

Implementierung:

```css
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-neutral-800);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 10;
}

.tooltip-content::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: var(--color-neutral-800) transparent transparent transparent;
}

.tooltip-container:hover .tooltip-content,
.tooltip-trigger:focus + .tooltip-content {
  opacity: 1;
  visibility: visible;
}
```

## Modal Container

Container für Modal-Dialoge:

```html
<button class="modal-open-btn" data-modal="example-modal">Modal öffnen</button>

<div id="example-modal" class="modal-container">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <div class="modal-header">
      <h3>Modal-Titel</h3>
      <button class="modal-close-btn">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal-Inhalt geht hier...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary modal-close-btn">Abbrechen</button>
      <button class="btn btn-primary">Bestätigen</button>
    </div>
  </div>
</div>
```

Implementierung:

```css
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.modal-container.open {
  opacity: 1;
  visibility: visible;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  background-color: var(--color-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.modal-body {
  padding: var(--space-4);
  overflow-y: auto;
  flex-grow: 1;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--space-4);
  border-top: 1px solid var(--color-border);
}
```

JavaScript für die Funktionalität:

```javascript
// Modal öffnen
document.querySelectorAll('.modal-open-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Scroll verhindern
  });
});

// Modal schließen
document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target === btn) {
      const modal = btn.closest('.modal-container');
      modal.classList.remove('open');
      document.body.style.overflow = ''; // Scroll wiederherstellen
    }
  });
});
```

## Dropdown Container

Container für Dropdown-Menüs:

```html
<div class="dropdown-container">
  <button class="dropdown-trigger">
    Menü öffnen
    <span class="dropdown-icon">▼</span>
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
    <a href="#" class="dropdown-item">Option 3</a>
  </div>
</div>
```

Implementierung:

```css
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
}

.dropdown-container.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: var(--space-2) var(--space-3);
  text-decoration: none;
  color: var(--color-text);
}

.dropdown-item:hover {
  background-color: var(--color-background-subtle);
}
```

JavaScript für die Funktionalität:

```javascript
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const container = trigger.closest('.dropdown-container');
    container.classList.toggle('open');
  });
});

// Dropdown bei Klick außerhalb schließen
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-container.open').forEach(dropdown => {
    dropdown.classList.remove('open');
  });
});
```

## Toast Container

Container für Toast-Benachrichtigungen:

```html
<button onclick="showToast('success', 'Aktion erfolgreich durchgeführt!')">
  Erfolgs-Toast anzeigen
</button>

<div id="toast-container" class="toast-container"></div>
```

Implementierung:

```css
.toast-container {
  position: fixed;
  bottom: var(--space-4);
  right: var(--space-4);
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.toast {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 250px;
  max-width: 350px;
  animation: slideIn 0.3s, fadeOut 0.5s 2.5s forwards;
}

.toast-success {
  background-color: var(--color-success-50);
  border-left: 4px solid var(--color-success-500);
}

.toast-error {
  background-color: var(--color-error-50);
  border-left: 4px solid var(--color-error-500);
}

.toast-info {
  background-color: var(--color-info-50);
  border-left: 4px solid var(--color-info-500);
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

JavaScript für die Funktionalität:

```javascript
function showToast(type, message) {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  
  toastContainer.appendChild(toast);
  
  // Toast nach einer bestimmten Zeit entfernen
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
```

## Best Practices

1. **Accessibility priorisieren** - Stellen Sie sicher, dass funktionale Container zugänglich sind, einschließlich Tastaturnavigation und ARIA-Attribute
2. **Konsistentes Verhalten gewährleisten** - Verwenden Sie in der gesamten Anwendung einheitliche Interaktionsmuster
3. **Performance beachten** - Vermeiden Sie zu viele JavaScript-intensive Container auf einer Seite
4. **Mobile-First-Ansatz verfolgen** - Stellen Sie sicher, dass funktionale Container auf kleinen Bildschirmen gut funktionieren
5. **Progressive Enhancement anwenden** - Stellen Sie eine Basis-Funktionalität bereit, auch wenn JavaScript deaktiviert ist
6. **Feedback geben** - Geben Sie Benutzern immer visuelles Feedback zu Interaktionen
7. **Transitionen anbieten** - Verwenden Sie Übergänge, um Zustandsänderungen zu verdeutlichen

## Use Cases

### FAQ-Sektion

```html
<div class="container">
  <h2 class="mb-6">Häufig gestellte Fragen</h2>
  
  <div class="accordion-container">
    <div class="accordion-item">
      <button class="accordion-header">
        <h3>Was bietet unser Service?</h3>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        <p>Unser Service bietet umfassende Lösungen für verschiedene Anforderungen...</p>
      </div>
    </div>
    
    <!-- Weitere FAQ-Einträge -->
  </div>
</div>
```

### Produktseite mit Tabs

```html
<div class="container">
  <h1 class="mb-6">Produktname</h1>
  
  <div class="tabs-container">
    <div class="tabs-header">
      <button class="tab-trigger active" data-tab="description">Beschreibung</button>
      <button class="tab-trigger" data-tab="specifications">Spezifikationen</button>
      <button class="tab-trigger" data-tab="reviews">Bewertungen</button>
    </div>
    <div class="tabs-content">
      <div id="description" class="tab-panel active">
        <p>Ausführliche Produktbeschreibung...</p>
      </div>
      <div id="specifications" class="tab-panel">
        <!-- Produktspezifikationen -->
      </div>
      <div id="reviews" class="tab-panel">
        <!-- Produktbewertungen -->
      </div>
    </div>
  </div>
</div>
```

### Benachrichtigungssystem

```html
<div class="toast-container" id="toast-container"></div>

<script>
  // Benachrichtigungen anzeigen
  function showNotification(type, message) {
    showToast(type, message);
  }
  
  // Nach erfolgreichem Form-Submit
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Formverarbeitung...
    showNotification('success', 'Form erfolgreich gesendet!');
  });
</script>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Transitions | Alle | Alle | Alle | Alle |
| CSS Transforms | Alle | Alle | Alle | Alle |
| Position: fixed | Alle | Alle | Alle | Alle |
| JavaScript Events | Alle | Alle | Alle | Alle |
| CSS Animations | Alle | Alle | Alle | Alle |

Die funktionalen Container der Bibliothek sind so konzipiert, dass sie in allen modernen Browsern funktionieren, mit angemessenen Fallbacks für ältere Browser.

## Zusammenfassung

Funktionale Container der Casoon UI Library bieten leistungsstarke, wiederverwendbare Components für gängige Interaktionsmuster. Durch die Usage dieser vorgefertigten Container können Sie komplexe Funktionalitäten wie Tabs, Akkordeons, Dropdowns, Modals und Toasts schnell und konsistent in Ihre Anwendung integrieren. Diese Container folgen bewährten UX-Praktiken und sind so konzipiert, dass sie zugänglich, performant und für verschiedene Geräte optimiert sind. 