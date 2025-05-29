---
title: Accessibility Containers
category: layout
---

# Accessibility Containers

the Casoon UI Library bietet spezielle barrierefreie containers (A11y Containers), the thereon ausgelegt sind, the Accessibility Ihrer Application to verbessern. these Documentation erklart, how them these containers use can, um Accessibilitysstandards to erfullen.

## Overview

A11y containers bieten folgende Vorteile:

1. **Semantische Structure** - containers with korrekter Semantik for Screenreader
2. **Fokus-Management** - Verbesserte Tastaturbedienung and Fokus-Steuerung
3. **ARIA-Integration** - Vorkonfigurierte ARIA-attributes
4. **Kontrast-Sicherheit** - containers with garantierten Kontrastverhaltnissen
5. **Dynamische Customization** - containers with Anpassungsmoglichkeiten for user with speziellen Bedurfnissen

## Landmark containers

containers, the Landmark-Regionen for Screenreader define:

```html
<div class="landmark-containers" role="main">
  <h1>Hauptinhalt</h1>
  <p>Dies ist the Hauptinhalt the Seite.</p>
</div>

<div class="landmark-containers" role="navigation">
  <nav>
    <ul>
      <li><a href="#">Startseite</a></li>
      <li><a href="#">over us</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
</div>
```

Implementation:

```css
.landmark-containers {
  width: 100%;
  margin-bottom: var(--space-6);
}

/* Visuelle Unterscheidung for verschiedene Landmark-Typen */
.landmark-containers[role="main"] {
  /* no speziellen Styles notig, da Hauptinhalt */
}

.landmark-containers[role="navigation"] {
  background-color: var(--color-background-subtle);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

.landmark-containers[role="complementary"] {
  background-color: var(--color-background-muted);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

## Focus Trap containers

containers, the den Fokus within seiner Grenzen halt (nutzlich for modals, dialogs):

```html
<div class="focus-trap-containers" tabindex="-1">
  <h2 id="dialog-title">dialog-Titel</h2>
  <div class="dialog-content">
    <p>dialog-content...</p>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="E-Mail">
  </div>
  <div class="dialog-actions">
    <button class="btn btn-secondary focus-trap-exit">Abbrechen</button>
    <button class="btn btn-primary">Bestatigen</button>
  </div>
</div>
```

Implementation with JavaScript:

```javascript
class FocusTrap {
  constructor(containers) {
    this.containers = containers;
    this.focusableElements = this.getFocusableElements();
    this.firstFocusableEl = this.focusableElements[0];
    this.lastFocusableEl = this.focusableElements[this.focusableElements.length - 1];
    
    this.previousActiveElement = document.activeElement;
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.init();
  }
  
  getFocusableElements() {
    return Array.from(
      this.containers.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }
  
  init() {
    // Focus on containers setzen, if he a tabIndex hat
    if (this.containers.getAttribute('tabindex') === '-1') {
      this.containers.focus();
    } else if (this.firstFocusableEl) {
      // Sonst on the erste fokussierbare element
      this.firstFocusableEl.focus();
    }
    
    this.containers.addEventListener('keydown', this.handleKeyDown);
    
    // Exit-Handler
    const exitButton = this.containers.querySelector('.focus-trap-exit');
    if (exitButton) {
      exitButton.addEventListener('click', () => this.destroy());
    }
  }
  
  handleKeyDown(e) {
    if (e.key === 'Tab') {
      // Shift + Tab vom ersten element zum letzten
      if (e.shiftKey && document.activeElement === this.firstFocusableEl) {
        e.preventDefault();
        this.lastFocusableEl.focus();
      }
      // Tab vom letzten element zum ersten
      else if (!e.shiftKey && document.activeElement === this.lastFocusableEl) {
        e.preventDefault();
        this.firstFocusableEl.focus();
      }
    }
    
    // ESC drucken zum Beenden
    if (e.key === 'Escape') {
      this.destroy();
    }
  }
  
  destroy() {
    this.containers.removeEventListener('keydown', this.handleKeyDown);
    
    // back zum vorherigen element
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
    
    // Event auslosen, that the Focus-Trap beendet wurde
    this.containers.dispatchEvent(new CustomEvent('focusTrapExit'));
  }
}

// Initialisierung
document.querySelectorAll('.focus-trap-containers').forEach(containers => {
  new FocusTrap(containers);
});
```

## Skip link containers

containers for Sprunglinks, um Screenreader-Benutzern to ermoglichen, Navigationsbereiche to uberspringen:

```html
<div class="skip-link-containers">
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
</div>

<!-- Rest the navigation -->

<main id="main-content" tabindex="-1">
  <h1>Hauptinhalt</h1>
  <!-- Hauptinhalt -->
</main>
```

Implementation:

```css
.skip-link-containers {
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

.skip-link-containers:focus-within {
  top: 0;
}

/* Sicherstellen, that the Hauptinhaltsziel korrekt fokussierbar ist */
main[tabindex="-1"]:focus {
  outline: none;
}
```

## Live Region containers

containers for dynamische contents, the for Screenreader automatisch vorgelesen become should:

```html
<div class="live-region-containers" aria-live="polite" aria-atomic="true">
  <div class="live-region-content">
    <!-- Dynamischer content wird hier eingefugt -->
  </div>
</div>
```

Implementation with JavaScript:

```javascript
class LiveRegion {
  constructor(containers) {
    this.containers = containers;
    this.contentElement = containers.querySelector('.live-region-content');
    
    // Politeness Level
    this.politeness = containers.getAttribute('aria-live') || 'polite';
    // whether the gesamte content or only Anderungen gelesen become
    this.isAtomic = containers.getAttribute('aria-atomic') === 'true';
  }
  
  announce(message, options = {}) {
    // Temporare Politeness-Anderung, if notig
    if (options.politeness) {
      this.containers.setAttribute('aria-live', options.politeness);
    }
    
    // content aktualisieren
    if (this.isAtomic || options.clear) {
      this.contentElement.innerHTML = '';
    }
    
    // Neue Nachricht add
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    this.contentElement.appendChild(messageElement);
    
    // Optionale Bereinigung after einer Zeit
    if (options.clearAfter) {
      setTimeout(() => {
        messageElement.remove();
      }, options.clearAfter);
    }
    
    // Politeness zurucksetzen, if geandert
    if (options.politeness) {
      setTimeout(() => {
        this.containers.setAttribute('aria-live', this.politeness);
      }, 100);
    }
  }
}

// Initialisierung and Usage
const liveRegions = {};
document.querySelectorAll('.live-region-containers').forEach(containers => {
  const id = containers.id || 'default';
  liveRegions[id] = new LiveRegion(containers);
});

// Example for the Usage
function notifyUser(message, isError = false) {
  const options = {
    politeness: isError ? 'assertive' : 'polite',
    clearAfter: 5000
  };
  liveRegions.default.announce(message, options);
}
```

## High Contrast containers

containers with garantierten hohen Kontrastverhaltnissen:

```html
<div class="high-contrast-containers high-contrast-dark">
  <h2>Hochkontrast-content (Dunkel)</h2>
  <p>this Text hat einen garantierten hohen Kontrast on dunklem background.</p>
</div>

<div class="high-contrast-containers high-contrast-light">
  <h2>Hochkontrast-content (Hell)</h2>
  <p>this Text hat einen garantierten hohen Kontrast on hellem background.</p>
</div>
```

Implementation:

```css
.high-contrast-containers {
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

/* CSS Variables with Colors, the WCAG AA-Kontrastverhaltnis garantieren */
:root {
  --color-contrast-dark: #121212;
  --color-contrast-light: #f8f9fa;
}

/* Verbesserte Kontraste im High-Contrast-Modus des Browsers */
@media (forced-colors: active) {
  .high-contrast-containers {
    border: 1px solid CanvasText;
  }
}
```

## Reduced Motion containers

containers, the animations basierend on Benutzereinstellungen reduziert:

```html
<div class="reduced-motion-containers">
  <div class="animated-element">
    this content wird animiert, respektiert but the Reduced-Motion-Setting.
  </div>
</div>
```

Implementation:

```css
.reduced-motion-containers .animated-element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.reduced-motion-containers:hover .animated-element {
  transform: translateY(-5px);
  opacity: 0.8;
}

/* animations reduzieren, if vom user gewunscht */
@media (prefers-reduced-motion: reduce) {
  .reduced-motion-containers .animated-element {
    transition: none;
  }
  
  .reduced-motion-containers:hover .animated-element {
    transform: none;
  }
}
```

## Font Size Adjustable containers

containers, the a Schriftgrossenanpassung for den user ermoglicht:

```html
<div class="font-size-adjustable-containers" data-font-size="medium">
  <div class="font-size-controls">
    <button class="font-size-decrease" aria-label="font size reduce">A-</button>
    <button class="font-size-reset" aria-label="font size zurucksetzen">A</button>
    <button class="font-size-increase" aria-label="font size enlarge">A+</button>
  </div>
  
  <div class="adjustable-content">
    <h2>Anpassbarer content</h2>
    <p>this Text kann in the size angepasst become.</p>
  </div>
</div>
```

Implementation:

```css
.font-size-adjustable-containers {
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

/* Verschiedene Schriftgrossen */
.font-size-adjustable-containers[data-font-size="small"] .adjustable-content {
  font-size: 0.875rem;
}

.font-size-adjustable-containers[data-font-size="medium"] .adjustable-content {
  font-size: 1rem;
}

.font-size-adjustable-containers[data-font-size="large"] .adjustable-content {
  font-size: 1.25rem;
}

.font-size-adjustable-containers[data-font-size="x-large"] .adjustable-content {
  font-size: 1.5rem;
}
```

JavaScript for the Funktionalitat:

```javascript
class FontSizeAdjuster {
  constructor(containers) {
    this.containers = containers;
    this.decreaseBtn = containers.querySelector('.font-size-decrease');
    this.resetBtn = containers.querySelector('.font-size-reset');
    this.increaseBtn = containers.querySelector('.font-size-increase');
    
    this.sizes = ['small', 'medium', 'large', 'x-large'];
    this.currentSizeIndex = this.sizes.indexOf(containers.dataset.fontSize || 'medium');
    
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
    this.containers.dataset.fontSize = newSize;
    
    // save the Praferenz, if gewunscht
    localStorage.setItem('preferredFontSize', newSize);
    
    // Event auslosen
    this.containers.dispatchEvent(new CustomEvent('fontSizeChanged', {
      detail: { size: newSize }
    }));
  }
}

// Initialisierung
document.querySelectorAll('.font-size-adjustable-containers').forEach(containers => {
  // Gespeicherte Praferenz wiederherstellen, if vorhanden
  const savedSize = localStorage.getItem('preferredFontSize');
  if (savedSize) {
    containers.dataset.fontSize = savedSize;
  }
  
  new FontSizeAdjuster(containers);
});
```

## Keyboard navigation containers

containers with verbesserter Tastaturnavigation for komplexe Components:

```html
<div class="keyboard-nav-containers" role="toolbar" aria-label="Formatierungsoptionen">
  <button class="keyboard-nav-item" aria-label="Fett" data-key="b">B</button>
  <button class="keyboard-nav-item" aria-label="Kursiv" data-key="i">I</button>
  <button class="keyboard-nav-item" aria-label="Unterstrichen" data-key="u">U</button>
  <div class="keyboard-nav-separator"></div>
  <button class="keyboard-nav-item" aria-label="Linksbundig" data-key="l">L</button>
  <button class="keyboard-nav-item" aria-label="Zentriert" data-key="c">C</button>
  <button class="keyboard-nav-item" aria-label="Rechtsbundig" data-key="r">R</button>
</div>
```

Implementation:

```css
.keyboard-nav-containers {
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

JavaScript for the Funktionalitat:

```javascript
class KeyboardNavigation {
  constructor(containers) {
    this.containers = containers;
    this.items = Array.from(containers.querySelectorAll('.keyboard-nav-item'));
    this.currentIndex = 0;
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.initEvents();
  }
  
  initEvents() {
    this.containers.addEventListener('keydown', this.handleKeyDown);
    
    // Tastenkurzel
    window.addEventListener('keydown', (e) => {
      // only reagieren, if Strg/Cmd gedruckt ist
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
    
    // Toggle-state for buttons
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
document.querySelectorAll('.keyboard-nav-containers').forEach(containers => {
  new KeyboardNavigation(containers);
});
```

## Best Practices

1. **WCAG-Standards befolgen** - ensure, that A11y containers the WCAG 2.1 AA-Richtlinien erfullen
2. **Semantisches HTML use** - use them the passenden HTML-elements for Ihre contents
3. **Tastaturnutzung testen** - Uberprufen them, whether all functions without Maus erreichbar sind
4. **ARIA sparsam einsetzen** - use them ARIA only, if native HTML-Semantik not ausreicht
5. **Screenreader testen** - Testen them Ihre containers with verschiedenen Screenreadern
6. **Text-Alternativen bereitstellen** - Bieten them Alternativen for not-textuelle contents
7. **Benutzereinstellungen respektieren** - Respektieren them Systemeinstellungen how Reduced Motion

## Use Cases

### Barrierefreies Kontaktformular

```html
<div class="landmark-containers" role="form" aria-labelledby="form-title">
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

### Barrierefreie Tabbed-Oberflache

```html
<div class="keyboard-nav-containers" role="tablist" aria-label="Produktinformationen">
  <button class="keyboard-nav-item" role="tab" id="tab1" aria-selected="true" aria-controls="panel1">Description</button>
  <button class="keyboard-nav-item" role="tab" id="tab2" aria-selected="false" aria-controls="panel2">Spezifikationen</button>
  <button class="keyboard-nav-item" role="tab" id="tab3" aria-selected="false" aria-controls="panel3">Bewertungen</button>
</div>

<div class="tab-panels">
  <div id="panel1" role="tabpanel" aria-labelledby="tab1" tabindex="0">
    <h2>Produktbeschreibung</h2>
    <p>Ausfuhrliche Description des Produkts...</p>
  </div>
  
  <div id="panel2" role="tabpanel" aria-labelledby="tab2" tabindex="0" hidden>
    <h2>Produktspezifikationen</h2>
    <ul>
      <li>Specification 1</li>
      <li>Specification 2</li>
    </ul>
  </div>
  
  <div id="panel3" role="tabpanel" aria-labelledby="tab3" tabindex="0" hidden>
    <h2>Kundenbewertungen</h2>
    <p>Bewertungen from Kunden...</p>
  </div>
</div>
```

### Barrierefreier Toast-Benachrichtigungsdienst

```html
<button onclick="showAccessibleToast('Anderungen gespeichert', 'success')">Erfolgsbenachrichtigung anzeigen</button>
<button onclick="showAccessibleToast('errors beim save', 'error')">Fehlerbenachrichtigung anzeigen</button>

<div class="live-region-containers" id="toast-live-region" aria-live="polite" aria-atomic="true">
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
    
    // after 5 Sekunden remove
    setTimeout(() => {
      toast.remove();
    }, 5000);
    
    // for Screenreader ankundigen
    const options = {
      politeness: type === 'error' ? 'assertive' : 'polite',
      clearAfter: 5000
    };
    liveRegion.announce(message, options);
  }
</script>
```

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| ARIA-attributes | all | all | all | all |
| Focus Management | all | all | all | all |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ |
| forced-colors media query | 89+ | 89+ | Nein | 89+ |
| aria-live Regionen | all | all | all | all |

## Zusammenfassung

A11y containers the Casoon UI Library bieten umfassende Losungen for barrierefreie user interfaces. through the Usage this containers can them sicherstellen, that Ihre Application for all user zuganglich ist, einschliesslich Menschen with Behinderungen. these containers implement bewahrte Accessibilityspraktiken and helfen them, gesetzliche Anforderungen to erfullen and a inklusive Benutzererfahrung to schaffen. 