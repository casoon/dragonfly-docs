---
title: Functional Containers
category: layout
---

# Functional Containers

the Casoon UI Library bietet spezielle funktionale containers, the over ihre visuellen properties hinaus bestimmte Verhaltensmuster and Funktionalitaten implement. these Documentation erklart the verfugbaren funktionalen containers and ihre Use Cases.

## Overview

Funktionale containers extend the containers system um folgende Aspekte:

1. **Interaktive functions** - containers with eingebauten interactions
2. **Inhaltssteuerung** - containers for spezifische Inhaltsanzeige and -verwaltung
3. **Verhaltenslogik** - containers with speziellen Verhaltensmustern
4. **Status-Management** - containers, the on verschiedene States reagieren
5. **Kontext-Bereitstellung** - containers, the Kontext for Kinder-Components bereitstellen

## Collapsible containers

containers, the a- and ausgeklappt become can:

```html
<div class="collapsible-containers">
  <button class="collapsible-trigger">
    <h3>Click zum extend</h3>
    <span class="collapsible-icon">+</span>
  </button>
  <div class="collapsible-content">
    <p>this content wird angezeigt, if the containers erweitert ist.</p>
  </div>
</div>
```

Implementation:

```css
.collapsible-containers {
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

.collapsible-containers.open .collapsible-content {
  padding: var(--space-4);
  max-height: 500px; /* customize je after content */
}

.collapsible-containers.open .collapsible-icon {
  transform: rotate(45deg);
}

.collapsible-icon {
  transition: transform 0.3s ease;
}
```

JavaScript for the Funktionalitat:

```javascript
document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const containers = trigger.closest('.collapsible-containers');
    containers.classList.toggle('open');
  });
});
```

## Tabs containers

containers for Tab-basierte Inhaltsanzeige:

```html
<div class="tabs-containers">
  <div class="tabs-header">
    <button class="tab-trigger active" data-tab="tab1">Tab 1</button>
    <button class="tab-trigger" data-tab="tab2">Tab 2</button>
    <button class="tab-trigger" data-tab="tab3">Tab 3</button>
  </div>
  <div class="tabs-content">
    <div id="tab1" class="tab-panel active">
      <p>content for Tab 1</p>
    </div>
    <div id="tab2" class="tab-panel">
      <p>content for Tab 2</p>
    </div>
    <div id="tab3" class="tab-panel">
      <p>content for Tab 3</p>
    </div>
  </div>
</div>
```

Implementation:

```css
.tabs-containers {
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

JavaScript for the Funktionalitat:

```javascript
document.querySelectorAll('.tab-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    // all Tabs deactivate
    document.querySelectorAll('.tab-trigger').forEach(t => {
      t.classList.remove('active');
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.remove('active');
    });
    
    // Ausgewahlten Tab activate
    trigger.classList.add('active');
    const tabId = trigger.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});
```

## Accordion containers

containers for Akkordeon-Inhaltsanzeige:

```html
<div class="accordion-containers">
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 1</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>content for Abschnitt 1</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 2</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>content for Abschnitt 2</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <button class="accordion-header">
      <h3>Abschnitt 3</h3>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>content for Abschnitt 3</p>
    </div>
  </div>
</div>
```

Implementation:

```css
.accordion-containers {
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
  max-height: 500px; /* customize je after content */
}

.accordion-item.open .accordion-icon {
  transform: rotate(45deg);
}

.accordion-icon {
  transition: transform 0.3s ease;
}
```

JavaScript for the Funktionalitat:

```javascript
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    
    // Optional: others Accordion-Items close
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    
    // Ausgewahltes Item umschalten
    item.classList.toggle('open');
  });
});
```

## tooltip containers

containers for tooltip-Funktionalitat:

```html
<div class="tooltip-containers">
  <button class="tooltip-trigger">Hover for info</button>
  <div class="tooltip-content">
    Dies ist a tooltip with zusatzlichen Informationen
  </div>
</div>
```

Implementation:

```css
.tooltip-containers {
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

.tooltip-containers:hover .tooltip-content,
.tooltip-trigger:focus + .tooltip-content {
  opacity: 1;
  visibility: visible;
}
```

## modal containers

containers for modal-dialogs:

```html
<button class="modal-open-btn" data-modal="example-modal">modal offnen</button>

<div id="example-modal" class="modal-containers">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <div class="modal-header">
      <h3>modal-Titel</h3>
      <button class="modal-close-btn">&times;</button>
    </div>
    <div class="modal-body">
      <p>modal-content geht hier...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary modal-close-btn">Abbrechen</button>
      <button class="btn btn-primary">Bestatigen</button>
    </div>
  </div>
</div>
```

Implementation:

```css
.modal-containers {
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

.modal-containers.open {
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

JavaScript for the Funktionalitat:

```javascript
// modal offnen
document.querySelectorAll('.modal-open-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Scroll verhindern
  });
});

// modal close
document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target === btn) {
      const modal = btn.closest('.modal-containers');
      modal.classList.remove('open');
      document.body.style.overflow = ''; // Scroll wiederherstellen
    }
  });
});
```

## Dropdown containers

containers for Dropdown-Menus:

```html
<div class="dropdown-containers">
  <button class="dropdown-trigger">
    Menu offnen
    <span class="dropdown-icon">▼</span>
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
    <a href="#" class="dropdown-item">Option 3</a>
  </div>
</div>
```

Implementation:

```css
.dropdown-containers {
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

.dropdown-containers.open .dropdown-menu {
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

JavaScript for the Funktionalitat:

```javascript
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const containers = trigger.closest('.dropdown-containers');
    containers.classList.toggle('open');
  });
});

// Dropdown at Klick ausserhalb close
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-containers.open').forEach(dropdown => {
    dropdown.classList.remove('open');
  });
});
```

## Toast containers

containers for Toast-notifications:

```html
<button onclick="showToast('success', 'Aktion erfolgreich durchgefuhrt!')">
  Erfolgs-Toast anzeigen
</button>

<div id="toast-containers" class="toast-containers"></div>
```

Implementation:

```css
.toast-containers {
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

JavaScript for the Funktionalitat:

```javascript
function showToast(type, message) {
  const toastContainer = document.getElementById('toast-containers');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  
  toastContainer.appendChild(toast);
  
  // Toast after einer bestimmten Zeit remove
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
```

## Best Practices

1. **Accessibility priorisieren** - ensure, that funktionale containers zuganglich sind, einschliesslich Tastaturnavigation and ARIA-attributes
2. **Konsistentes behavior gewahrleisten** - use them in the gesamten Application einheitliche Interaktionsmuster
3. **Performance note** - Vermeiden them to many JavaScript-intensive containers on einer Seite
4. **Mobile-First-Ansatz verfolgen** - ensure, that funktionale containers on kleinen Bildschirmen good funktionieren
5. **Progressive Enhancement anwenden** - Stellen them a Base-Funktionalitat bereit, also if JavaScript deaktiviert ist
6. **Feedback geben** - Geben them Benutzern immer visuelles Feedback to interactions
7. **transitions anbieten** - use them Ubergange, um Zustandsanderungen to verdeutlichen

## Use Cases

### FAQ-section

```html
<div class="containers">
  <h2 class="mb-6">Haufig gestellte Fragen</h2>
  
  <div class="accordion-containers">
    <div class="accordion-item">
      <button class="accordion-header">
        <h3>what bietet our Service?</h3>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        <p>our Service bietet umfassende Losungen for verschiedene Anforderungen...</p>
      </div>
    </div>
    
    <!-- additional FAQ-Eintrage -->
  </div>
</div>
```

### Produktseite with Tabs

```html
<div class="containers">
  <h1 class="mb-6">Produktname</h1>
  
  <div class="tabs-containers">
    <div class="tabs-header">
      <button class="tab-trigger active" data-tab="description">Description</button>
      <button class="tab-trigger" data-tab="specifications">Spezifikationen</button>
      <button class="tab-trigger" data-tab="reviews">Bewertungen</button>
    </div>
    <div class="tabs-content">
      <div id="description" class="tab-panel active">
        <p>Ausfuhrliche Produktbeschreibung...</p>
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
<div class="toast-containers" id="toast-containers"></div>

<script>
  // notifications anzeigen
  function showNotification(type, message) {
    showToast(type, message);
  }
  
  // after erfolgreichem Form-Submit
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Formverarbeitung...
    showNotification('success', 'Form erfolgreich gesendet!');
  });
</script>
```

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Transitions | all | all | all | all |
| CSS Transforms | all | all | all | all |
| position: fixed | all | all | all | all |
| JavaScript Events | all | all | all | all |
| CSS Animations | all | all | all | all |

the funktionalen containers the Bibliothek sind so konzipiert, that them in allen modernen Browsern funktionieren, with angemessenen Fallbacks for altere Browser.

## Zusammenfassung

Funktionale containers the Casoon UI Library bieten leistungsstarke, wiederverwendbare Components for gangige Interaktionsmuster. through the Usage this vorgefertigten containers can them komplexe Funktionalitaten how Tabs, Akkordeons, Dropdowns, modals and Toasts schnell and konsistent in Ihre Application integrieren. these containers folgen bewahrten UX-Praktiken and sind so konzipiert, that them zuganglich, performant and for verschiedene Gerate optimiert sind. 