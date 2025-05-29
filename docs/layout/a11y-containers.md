---
title: Accessibility Containers
category: Layout
---

# Accessibility Containers

Die Casoon UI Library bietet spezielle barrierefreie Container (A11y Containers), die darauf ausgelegt sind, die Accessibility Ihrer Anwendung zu verbessern. Diese Dokumentation erklärt, wie Sie diese Container verwenden können, um Accessibilitysstandards zu erfüllen.

## Overview

A11y Container bieten folgende Vorteile:

1. **Semantische Struktur** - Container mit korrekter Semantik für Screenreader
2. **Fokus-Management** - Verbesserte Tastaturbedienung und Fokus-Steuerung
3. **ARIA-Integration** - Vorkonfigurierte ARIA-Attribute
4. **Kontrast-Sicherheit** - Container mit garantierten Kontrastverhältnissen
5. **Dynamische Anpassung** - Container mit Anpassungsmöglichkeiten für Benutzer mit speziellen Bedürfnissen

## Landmark Container

Container, die Landmark-Regionen für Screenreader definieren:

```html
<div class="landmark-container" role="main">
  <h1>Hauptinhalt</h1>
  <p>Dies ist der Hauptinhalt der Seite.</p>
</div>

<div class="landmark-container" role="navigation">
  <nav>
    <ul>
      <li><a href="#">Startseite</a></li>
      <li><a href="#">Über uns</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
</div>
```

Implementierung:

```css
.landmark-container {
  width: 100%;
  margin-bottom: var(--space-6);
}

/* Visuelle Unterscheidung für verschiedene Landmark-Typen */
.landmark-container[role="main"] {
  /* Keine speziellen Styles nötig, da Hauptinhalt */
}

.landmark-container[role="navigation"] {
  background-color: var(--color-background-subtle);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

.landmark-container[role="complementary"] {
  background-color: var(--color-background-muted);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

## Focus Trap Container

Container, der den Fokus innerhalb seiner Grenzen hält (nützlich für Modals, Dialoge):

```html
<div class="focus-trap-container" tabindex="-1">
  <h2 id="dialog-title">Dialog-Titel</h2>
  <div class="dialog-content">
    <p>Dialog-Inhalt...</p>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="E-Mail">
  </div>
  <div class="dialog-actions">
    <button class="btn btn-secondary focus-trap-exit">Abbrechen</button>
    <button class="btn btn-primary">Bestätigen</button>
  </div>
</div>
```

Implementierung mit JavaScript:

```javascript
class FocusTrap {
  constructor(container) {
    this.container = container;
    this.focusableElements = this.getFocusableElements();
    this.firstFocusableEl = this.focusableElements[0];
    this.lastFocusableEl = this.focusableElements[this.focusableElements.length - 1];
    
    this.previousActiveElement = document.activeElement;
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.init();
  }
  
  getFocusableElements() {
    return Array.from(
      this.container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }
  
  init() {
    // Focus auf Container setzen, wenn er ein tabIndex hat
    if (this.container.getAttribute('tabindex') === '-1') {
      this.container.focus();
    } else if (this.firstFocusableEl) {
      // Sonst auf das erste fokussierbare Element
      this.firstFocusableEl.focus();
    }
    
    this.container.addEventListener('keydown', this.handleKeyDown);
    
    // Exit-Handler
    const exitButton = this.container.querySelector('.focus-trap-exit');
    if (exitButton) {
      exitButton.addEventListener('click', () => this.destroy());
    }
  }
  
  handleKeyDown(e) {
    if (e.key === 'Tab') {
      // Shift + Tab vom ersten Element zum letzten
      if (e.shiftKey && document.activeElement === this.firstFocusableEl) {
        e.preventDefault();
        this.lastFocusableEl.focus();
      }
      // Tab vom letzten Element zum ersten
      else if (!e.shiftKey && document.activeElement === this.lastFocusableEl) {
        e.preventDefault();
        this.firstFocusableEl.focus();
      }
    }
    
    // ESC drücken zum Beenden
    if (e.key === 'Escape') {
      this.destroy();
    }
  }
  
  destroy() {
    this.container.removeEventListener('keydown', this.handleKeyDown);
    
    // Zurück zum vorherigen Element
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
    
    // Event auslösen, dass der Focus-Trap beendet wurde
    this.container.dispatchEvent(new CustomEvent('focusTrapExit'));
  }
}

// Initialisierung
document.querySelectorAll('.focus-trap-container').forEach(container => {
  new FocusTrap(container);
});
```

## Skip Link Container

Container für Sprunglinks, um Screenreader-Benutzern zu ermöglichen, Navigationsbereiche zu überspringen:

```html
<div class="skip-link-container">
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
</div>

<!-- Rest der Navigation -->

<main id="main-content" tabindex="-1">
  <h1>Hauptinhalt</h1>
  <!-- Hauptinhalt -->
</main>
```

Implementierung:

```css
.skip-link-container {
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
  transition: top 0.2s;
}

.skip-link {
  background-color: var(--color-primary-500);
  color: white;
  padding: var(--space-2) var(--space-4);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  text-decoration: none;
}

.skip-link-container:focus-within {
  top: 0;
}

/* Sicherstellen, dass das Hauptinhaltsziel korrekt fokussierbar ist */
main[tabindex="-1"]:focus {
  outline: none;
}
```

## Live Region Container

Container für dynamische Inhalte, die für Screenreader automatisch vorgelesen werden sollen:

```html
<div class="live-region-container" aria-live="polite" aria-atomic="true">
  <div class="live-region-content">
    <!-- Dynamischer Inhalt wird hier eingefügt -->
  </div>
</div>
```

Implementierung mit JavaScript:

```javascript
class LiveRegion {
  constructor(container) {
    this.container = container;
    this.contentElement = container.querySelector('.live-region-content');
    
    // Politeness Level
    this.politeness = container.getAttribute('aria-live') || 'polite';
    // Ob der gesamte Inhalt oder nur Änderungen gelesen werden
    this.isAtomic = container.getAttribute('aria-atomic') === 'true';
  }
  
  announce(message, options = {}) {
    // Temporäre Politeness-Änderung, falls nötig
    if (options.politeness) {
      this.container.setAttribute('aria-live', options.politeness);
    }
    
    // Inhalt aktualisieren
    if (this.isAtomic || options.clear) {
      this.contentElement.innerHTML = '';
    }
    
    // Neue Nachricht hinzufügen
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    this.contentElement.appendChild(messageElement);
    
    // Optionale Bereinigung nach einer Zeit
    if (options.clearAfter) {
      setTimeout(() => {
        messageElement.remove();
      }, options.clearAfter);
    }
    
    // Politeness zurücksetzen, falls geändert
    if (options.politeness) {
      setTimeout(() => {
        this.container.setAttribute('aria-live', this.politeness);
      }, 100);
    }
  }
}

// Initialisierung und Usage
const liveRegions = {};
document.querySelectorAll('.live-region-container').forEach(container => {
  const id = container.id || 'default';
  liveRegions[id] = new LiveRegion(container);
});

// Example für die Usage
function notifyUser(message, isError = false) {
  const options = {
    politeness: isError ? 'assertive' : 'polite',
    clearAfter: 5000
  };
  liveRegions.default.announce(message, options);
}
```

## High Contrast Container

Container mit garantierten hohen Kontrastverhältnissen:

```html
<div class="high-contrast-container high-contrast-dark">
  <h2>Hochkontrast-Inhalt (Dunkel)</h2>
  <p>Dieser Text hat einen garantierten hohen Kontrast auf dunklem Hintergrund.</p>
</div>

<div class="high-contrast-container high-contrast-light">
  <h2>Hochkontrast-Inhalt (Hell)</h2>
  <p>Dieser Text hat einen garantierten hohen Kontrast auf hellem Hintergrund.</p>
</div>
```

Implementierung:

```css
.high-contrast-container {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.high-contrast-dark {
  background-color: var(--color-contrast-dark);
  color: var(--color-contrast-light);
}

.high-contrast-light {
  background-color: var(--color-contrast-light);
  color: var(--color-contrast-dark);
}

/* CSS Variables mit Colors, die WCAG AA-Kontrastverhältnis garantieren */
:root {
  --color-contrast-dark: #121212;
  --color-contrast-light: #f8f9fa;
}

/* Verbesserte Kontraste im High-Contrast-Modus des Browsers */
@media (forced-colors: active) {
  .high-contrast-container {
    border: 1px solid CanvasText;
  }
}
```

## Reduced Motion Container

Container, der Animationen basierend auf Benutzereinstellungen reduziert:

```html
<div class="reduced-motion-container">
  <div class="animated-element">
    Dieser Inhalt wird animiert, respektiert aber die Reduced-Motion-Einstellung.
  </div>
</div>
```

Implementierung:

```css
.reduced-motion-container .animated-element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.reduced-motion-container:hover .animated-element {
  transform: translateY(-5px);
  opacity: 0.8;
}

/* Animationen reduzieren, wenn vom Benutzer gewünscht */
@media (prefers-reduced-motion: reduce) {
  .reduced-motion-container .animated-element {
    transition: none;
  }
  
  .reduced-motion-container:hover .animated-element {
    transform: none;
  }
}
```

## Font Size Adjustable Container

Container, der eine Schriftgrößenanpassung für den Benutzer ermöglicht:

```html
<div class="font-size-adjustable-container" data-font-size="medium">
  <div class="font-size-controls">
    <button class="font-size-decrease" aria-label="Schriftgröße verkleinern">A-</button>
    <button class="font-size-reset" aria-label="Schriftgröße zurücksetzen">A</button>
    <button class="font-size-increase" aria-label="Schriftgröße vergrößern">A+</button>
  </div>
  
  <div class="adjustable-content">
    <h2>Anpassbarer Inhalt</h2>
    <p>Dieser Text kann in der Größe angepasst werden.</p>
  </div>
</div>
```

Implementierung:

```css
.font-size-adjustable-container {
  width: 100%;
}

.font-size-controls {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.font-size-controls button {
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-background-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

/* Verschiedene Schriftgrößen */
.font-size-adjustable-container[data-font-size="small"] .adjustable-content {
  font-size: 0.875rem;
}

.font-size-adjustable-container[data-font-size="medium"] .adjustable-content {
  font-size: 1rem;
}

.font-size-adjustable-container[data-font-size="large"] .adjustable-content {
  font-size: 1.25rem;
}

.font-size-adjustable-container[data-font-size="x-large"] .adjustable-content {
  font-size: 1.5rem;
}
```

JavaScript für die Funktionalität:

```javascript
class FontSizeAdjuster {
  constructor(container) {
    this.container = container;
    this.decreaseBtn = container.querySelector('.font-size-decrease');
    this.resetBtn = container.querySelector('.font-size-reset');
    this.increaseBtn = container.querySelector('.font-size-increase');
    
    this.sizes = ['small', 'medium', 'large', 'x-large'];
    this.currentSizeIndex = this.sizes.indexOf(container.dataset.fontSize || 'medium');
    
    this.initEvents();
  }
  
  initEvents() {
    if (this.decreaseBtn) {
      this.decreaseBtn.addEventListener('click', () => this.decreaseSize());
    }
    
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetSize());
    }
    
    if (this.increaseBtn) {
      this.increaseBtn.addEventListener('click', () => this.increaseSize());
    }
  }
  
  decreaseSize() {
    if (this.currentSizeIndex > 0) {
      this.currentSizeIndex--;
      this.updateSize();
    }
  }
  
  increaseSize() {
    if (this.currentSizeIndex < this.sizes.length - 1) {
      this.currentSizeIndex++;
      this.updateSize();
    }
  }
  
  resetSize() {
    this.currentSizeIndex = 1; // medium
    this.updateSize();
  }
  
  updateSize() {
    const newSize = this.sizes[this.currentSizeIndex];
    this.container.dataset.fontSize = newSize;
    
    // Speichern der Präferenz, falls gewünscht
    localStorage.setItem('preferredFontSize', newSize);
    
    // Event auslösen
    this.container.dispatchEvent(new CustomEvent('fontSizeChanged', {
      detail: { size: newSize }
    }));
  }
}

// Initialisierung
document.querySelectorAll('.font-size-adjustable-container').forEach(container => {
  // Gespeicherte Präferenz wiederherstellen, falls vorhanden
  const savedSize = localStorage.getItem('preferredFontSize');
  if (savedSize) {
    container.dataset.fontSize = savedSize;
  }
  
  new FontSizeAdjuster(container);
});
```

## Keyboard Navigation Container

Container mit verbesserter Tastaturnavigation für komplexe Components:

```html
<div class="keyboard-nav-container" role="toolbar" aria-label="Formatierungsoptionen">
  <button class="keyboard-nav-item" aria-label="Fett" data-key="b">B</button>
  <button class="keyboard-nav-item" aria-label="Kursiv" data-key="i">I</button>
  <button class="keyboard-nav-item" aria-label="Unterstrichen" data-key="u">U</button>
  <div class="keyboard-nav-separator"></div>
  <button class="keyboard-nav-item" aria-label="Linksbündig" data-key="l">L</button>
  <button class="keyboard-nav-item" aria-label="Zentriert" data-key="c">C</button>
  <button class="keyboard-nav-item" aria-label="Rechtsbündig" data-key="r">R</button>
</div>
```

Implementierung:

```css
.keyboard-nav-container {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.keyboard-nav-item {
  padding: var(--space-1) var(--space-2);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.keyboard-nav-item:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.keyboard-nav-item[aria-pressed="true"] {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-200);
}

.keyboard-nav-separator {
  width: 1px;
  height: 1.5rem;
  background-color: var(--color-border);
  margin: 0 var(--space-1);
}
```

JavaScript für die Funktionalität:

```javascript
class KeyboardNavigation {
  constructor(container) {
    this.container = container;
    this.items = Array.from(container.querySelectorAll('.keyboard-nav-item'));
    this.currentIndex = 0;
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.initEvents();
  }
  
  initEvents() {
    this.container.addEventListener('keydown', this.handleKeyDown);
    
    // Tastenkürzel
    window.addEventListener('keydown', (e) => {
      // Nur reagieren, wenn Strg/Cmd gedrückt ist
      if (e.ctrlKey || e.metaKey) {
        this.items.forEach(item => {
          const key = item.dataset.key;
          if (key && e.key.toLowerCase() === key.toLowerCase()) {
            e.preventDefault();
            item.click();
          }
        });
      }
    });
    
    // Toggle-Zustand für Buttons
    this.items.forEach(item => {
      item.addEventListener('click', () => {
        if (item.getAttribute('aria-pressed') === 'true') {
          item.setAttribute('aria-pressed', 'false');
        } else {
          item.setAttribute('aria-pressed', 'true');
        }
      });
    });
  }
  
  handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        this.focusNextItem();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        this.focusPrevItem();
        break;
      case 'Home':
        e.preventDefault();
        this.focusFirstItem();
        break;
      case 'End':
        e.preventDefault();
        this.focusLastItem();
        break;
    }
  }
  
  focusNextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.items[this.currentIndex].focus();
  }
  
  focusPrevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.items[this.currentIndex].focus();
  }
  
  focusFirstItem() {
    this.currentIndex = 0;
    this.items[0].focus();
  }
  
  focusLastItem() {
    this.currentIndex = this.items.length - 1;
    this.items[this.currentIndex].focus();
  }
}

// Initialisierung
document.querySelectorAll('.keyboard-nav-container').forEach(container => {
  new KeyboardNavigation(container);
});
```

## Best Practices

1. **WCAG-Standards befolgen** - Stellen Sie sicher, dass A11y Container die WCAG 2.1 AA-Richtlinien erfüllen
2. **Semantisches HTML verwenden** - Nutzen Sie die passenden HTML-Elemente für Ihre Inhalte
3. **Tastaturnutzung testen** - Überprüfen Sie, ob alle Funktionen ohne Maus erreichbar sind
4. **ARIA sparsam einsetzen** - Verwenden Sie ARIA nur, wenn native HTML-Semantik nicht ausreicht
5. **Screenreader testen** - Testen Sie Ihre Container mit verschiedenen Screenreadern
6. **Text-Alternativen bereitstellen** - Bieten Sie Alternativen für nicht-textuelle Inhalte
7. **Benutzereinstellungen respektieren** - Respektieren Sie Systemeinstellungen wie Reduced Motion

## Use Cases

### Barrierefreies Kontaktformular

```html
<div class="landmark-container" role="form" aria-labelledby="form-title">
  <h2 id="form-title">Kontaktformular</h2>
  
  <form class="a11y-form">
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
      <div class="error-message" aria-live="polite"></div>
    </div>
    
    <div class="form-field">
      <label for="email">E-Mail</label>
      <input type="email" id="email" name="email" required>
      <div class="error-message" aria-live="polite"></div>
    </div>
    
    <div class="form-field">
      <label for="message">Nachricht</label>
      <textarea id="message" name="message" required></textarea>
      <div class="error-message" aria-live="polite"></div>
    </div>
    
    <button type="submit">Absenden</button>
  </form>
</div>
```

### Barrierefreie Tabbed-Oberfläche

```html
<div class="keyboard-nav-container" role="tablist" aria-label="Produktinformationen">
  <button class="keyboard-nav-item" role="tab" id="tab1" aria-selected="true" aria-controls="panel1">Beschreibung</button>
  <button class="keyboard-nav-item" role="tab" id="tab2" aria-selected="false" aria-controls="panel2">Spezifikationen</button>
  <button class="keyboard-nav-item" role="tab" id="tab3" aria-selected="false" aria-controls="panel3">Bewertungen</button>
</div>

<div class="tab-panels">
  <div id="panel1" role="tabpanel" aria-labelledby="tab1" tabindex="0">
    <h2>Produktbeschreibung</h2>
    <p>Ausführliche Beschreibung des Produkts...</p>
  </div>
  
  <div id="panel2" role="tabpanel" aria-labelledby="tab2" tabindex="0" hidden>
    <h2>Produktspezifikationen</h2>
    <ul>
      <li>Spezifikation 1</li>
      <li>Spezifikation 2</li>
    </ul>
  </div>
  
  <div id="panel3" role="tabpanel" aria-labelledby="tab3" tabindex="0" hidden>
    <h2>Kundenbewertungen</h2>
    <p>Bewertungen von Kunden...</p>
  </div>
</div>
```

### Barrierefreier Toast-Benachrichtigungsdienst

```html
<button onclick="showAccessibleToast('Änderungen gespeichert', 'success')">Erfolgsbenachrichtigung anzeigen</button>
<button onclick="showAccessibleToast('Fehler beim Speichern', 'error')">Fehlerbenachrichtigung anzeigen</button>

<div class="live-region-container" id="toast-live-region" aria-live="polite" aria-atomic="true">
  <div class="live-region-content"></div>
</div>

<script>
  const liveRegion = new LiveRegion(document.getElementById('toast-live-region'));
  
  function showAccessibleToast(message, type) {
    // Visueller Toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    document.body.appendChild(toast);
    
    // Nach 5 Sekunden entfernen
    setTimeout(() => {
      toast.remove();
    }, 5000);
    
    // Für Screenreader ankündigen
    const options = {
      politeness: type === 'error' ? 'assertive' : 'polite',
      clearAfter: 5000
    };
    liveRegion.announce(message, options);
  }
</script>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| ARIA-Attribute | Alle | Alle | Alle | Alle |
| Focus Management | Alle | Alle | Alle | Alle |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ |
| forced-colors Media Query | 89+ | 89+ | Nein | 89+ |
| aria-live Regionen | Alle | Alle | Alle | Alle |

## Zusammenfassung

A11y Container der Casoon UI Library bieten umfassende Lösungen für barrierefreie Benutzeroberflächen. Durch die Usage dieser Container können Sie sicherstellen, dass Ihre Anwendung für alle Benutzer zugänglich ist, einschließlich Menschen mit Behinderungen. Diese Container implementieren bewährte Accessibilityspraktiken und helfen Ihnen, gesetzliche Anforderungen zu erfüllen und eine inklusive Benutzererfahrung zu schaffen. 