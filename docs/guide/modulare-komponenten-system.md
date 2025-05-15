---
title: Modulares Komponenten-System
category: Guide
---

# Modulares Komponenten-System

Das modulare Komponenten-System der Casoon UI Library bietet eine umfangreiche Sammlung wiederverwendbarer UI-Komponenten, die durch ein strukturiertes Layer-System organisiert sind. Jede Komponente wird in einem eigenen Layer definiert, was die Isolation, Wartbarkeit und Flexibilität erhöht.

## Grundprinzip

Das Komponenten-System setzt auf ein modulares Design, bei dem:

1. Jede Komponente in einer eigenen CSS-Datei definiert ist
2. Jede Komponente ihren eigenen CSS-Layer hat
3. Die Gesamtstruktur in `modules.css` zentral verwaltet wird
4. Alles automatisch durch den Import von `core.css` geladen wird

## Importieren

Der einfachste Weg, das gesamte Komponenten-System zu nutzen:

```css
@import '@casoon/ui-lib/core.css';
```

Oder für selektive Nutzung nur bestimmter Komponenten:

```css
/* Nur die modules.css für die Struktur */
@import '@casoon/ui-lib/modules.css';

/* Gezielt einzelne Komponenten */
@import '@casoon/ui-lib/modules/button.module.css';
@import '@casoon/ui-lib/modules/card.module.css';
```

## Verfügbare Komponenten

Das Komponenten-System umfasst über 30 UI-Komponenten, die in vier Hauptkategorien unterteilt sind:

### Eingabe- und Formular-Komponenten

Diese Komponenten bieten interaktive Elemente für Benutzereingaben:

| Komponente | Beschreibung | CSS-Klassen |
|------------|--------------|-------------|
| Button | Schaltflächen in verschiedenen Stilen | `.button`, `.button.primary`, `.button.secondary` |
| Checkbox | Auswahlboxen für mehrere Optionen | `.checkbox`, `.checkbox__input`, `.checkbox__label` |
| Input | Textfelder und andere Eingabetypen | `.input`, `.input--large`, `.input--rounded` |
| Radio | Optionsfelder für gegenseitig ausschließende Auswahl | `.radio`, `.radio__input`, `.radio__label` |
| Select | Auswahlmenüs | `.select`, `.select--multiple` |
| Slider | Schieberegler für Zahlenwerte | `.slider`, `.slider__track`, `.slider__thumb` |
| Switch | Umschalter für Ein/Aus-Zustände | `.switch`, `.switch__slider` |
| Textarea | Mehrzeilige Textfelder | `.textarea`, `.textarea--resizable` |
| File | Datei-Upload-Elemente | `.file-input`, `.file-label` |

### Layout-Komponenten

Diese Komponenten bieten Strukturelemente für das Seitenlayout:

| Komponente | Beschreibung | CSS-Klassen |
|------------|--------------|-------------|
| Card | Karten-Container für Inhaltsblöcke | `.card`, `.card__header`, `.card__body`, `.card__footer` |
| Modal | Dialogfenster, die über dem Inhalt schweben | `.modal`, `.modal__content`, `.modal__close` |
| Tabs | Registerkartennavigation | `.tabs`, `.tab-list`, `.tab-panel` |
| Footer | Seitenfußbereich | `.footer`, `.footer__content` |
| Header | Kopfbereich | `.header`, `.header__logo`, `.header__nav` |
| Sidebar | Seitenleisten | `.sidebar`, `.sidebar--left`, `.sidebar--right` |
| Content | Strukturierte Inhaltscontainer | `.content`, `.content__section` |
| Widget | Wiederverwendbare Inhaltsmodule | `.widget`, `.widget__header`, `.widget__body` |

### Feedback-Komponenten

Diese Komponenten kommunizieren Status und Informationen:

| Komponente | Beschreibung | CSS-Klassen |
|------------|--------------|-------------|
| Alert | Hervorgehobene Informations- oder Warnmeldungen | `.alert`, `.alert--success`, `.alert--error` |
| Badge | Kleine Kennzeichnungen für Status oder Zählungen | `.badge`, `.badge--primary`, `.badge--pill` |
| Notification | Temporäre Benachrichtigungen | `.notification`, `.notification--info` |
| Progress | Fortschrittsanzeigen | `.progress`, `.progress__bar` |
| Skeleton | Platzhalter für ladende Inhalte | `.skeleton`, `.skeleton-text`, `.skeleton-circle` |
| Spinner | Ladeanzeigen | `.spinner`, `.spinner--large` |
| Toast | Kurzzeitig eingeblendete Benachrichtigungen | `.toast`, `.toast--success` |
| Tooltip | Hilfetexte bei Hover oder Fokus | `.tooltip`, `.tooltip--top` |

### Navigations- und Interaktionskomponenten

Diese Komponenten unterstützen die Navigation und komplexe Interaktionen:

| Komponente | Beschreibung | CSS-Klassen |
|------------|--------------|-------------|
| Avatar | Benutzerbilder oder Icons | `.avatar`, `.avatar--large`, `.avatar-group` |
| Chip | Kompakte Elemente mit Informationen oder Aktionen | `.chip`, `.chip--removable` |
| Hamburger | Mobile Menü-Icons | `.hamburger`, `.hamburger--active` |
| Table | Datengrids und Tabellen | `.table`, `.table--striped`, `.table--hover` |
| Tags | Schlagworte oder Kategoriemarkierungen | `.tag`, `.tag--primary`, `.tag--removable` |
| Wizard | Schrittweise Anleitungen oder Formulare | `.wizard`, `.wizard-step`, `.wizard-progress` |

## Aufbau der Komponenten

Jede Komponente folgt einem konsistenten Aufbau:

### BEM-Namenskonvention

Die Komponenten verwenden die BEM-Methodik (Block, Element, Modifikator):

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifikator */
.card--primary { }
.card--highlighted { }
```

### Themefähigkeit

Alle Komponenten unterstützen das Theme-System:

```css
.button {
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}

.button--primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
}

[data-theme="dark"] .button {
  /* Anpassungen für Dark Mode */
}
```

### Responsive Design

Alle Komponenten sind vollständig responsiv mit:

1. Fluid-Größen basierend auf relativen Einheiten (rem, em)
2. Flexbox- und Grid-basiertes Layout
3. Container-Queries für komponentenbasierte Responsivität
4. Breakpoint-Utilities für komplexe Anpassungen

### Barrierefreiheit

Die Komponenten sind für Barrierefreiheit optimiert:

1. Semantische HTML-Struktur
2. ARIA-Attribute für komplexe Komponenten
3. Tastaturnavigation
4. Ausreichende Kontrastratios
5. Unterstützung für Bildschirmleser

## Beispielhafte Verwendung

### Einfache Button-Komponente

```html
<button class="button primary">Primär-Button</button>
<button class="button secondary">Sekundär-Button</button>
<button class="button large">Großer Button</button>
<button class="button primary rounded">Abgerundeter Primär-Button</button>
```

### Card-Komponente mit Inhalt

```html
<div class="card">
  <div class="card__header">Karten-Titel</div>
  <div class="card__body">
    <p>Inhalt der Karte...</p>
    <button class="button primary">Aktion</button>
  </div>
  <div class="card__footer">Footer der Karte</div>
</div>
```

### Formular mit verschiedenen Eingabekomponenten

```html
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input" placeholder="Namen eingeben">
  </div>
  
  <div class="form-group">
    <label for="email">E-Mail</label>
    <input type="email" id="email" class="input" placeholder="E-Mail eingeben">
  </div>
  
  <button type="submit" class="button primary">Absenden</button>
</form>
```

### Benachrichtigungssystem

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">
    <h4 class="alert__title">Erfolg!</h4>
    <p class="alert__message">Der Vorgang wurde erfolgreich abgeschlossen.</p>
  </div>
  <button class="alert__close">&times;</button>
</div>

<div class="toast toast--info">
  <div class="toast__content">Neue Nachricht erhalten</div>
</div>

<div class="notification notification--warning">
  <div class="notification__title">Achtung</div>
  <div class="notification__message">Ihre Sitzung läuft in 5 Minuten ab.</div>
  <button class="notification__action">Verlängern</button>
</div>
```

## Komponentenkombinationen

Die Komponenten sind für die nahtlose Kombination miteinander konzipiert:

### Dashboard-Layout

```html
<div class="layout">
  <header class="header">
    <div class="header__logo">Logo</div>
    <nav class="header__nav">
      <a href="#" class="header__link header__link--active">Dashboard</a>
      <a href="#" class="header__link">Einstellungen</a>
      <a href="#" class="header__link">Profil</a>
    </nav>
    <div class="header__actions">
      <div class="badge badge--notification">3</div>
      <div class="avatar">JS</div>
    </div>
  </header>
  
  <div class="layout__content">
    <aside class="sidebar">
      <nav class="sidebar__nav">
        <a href="#" class="sidebar__link sidebar__link--active">Übersicht</a>
        <a href="#" class="sidebar__link">Statistiken</a>
        <a href="#" class="sidebar__link">Berichte</a>
      </nav>
    </aside>
    
    <main class="content">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card">
          <div class="card__header">Benutzer</div>
          <div class="card__body">
            <h3 class="text-xl">1,254</h3>
            <div class="progress">
              <div class="progress__bar" style="width: 65%"></div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__header">Umsatz</div>
          <div class="card__body">
            <h3 class="text-xl">€8,741</h3>
            <div class="chip chip--success">+12%</div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__header">Aktivität</div>
          <div class="card__body">
            <div class="spinner spinner--small"></div>
            <span>Daten werden geladen...</span>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <footer class="footer">
    <div class="footer__content">© 2023 Casoon UI Library</div>
  </footer>
</div>
```

## Anpassung und Erweiterung

Sie können das Komponenten-System auf verschiedene Weisen anpassen:

### 1. Variablen überschreiben

```css
@import '@casoon/ui-lib/core.css';

:root {
  /* Anpassung der Button-Variablen */
  --button-border-radius: 8px;
  --button-primary-bg: #8e44ad;
  --button-primary-hover-bg: #9b59b6;
}
```

### 2. Komponenten erweitern

```css
@import '@casoon/ui-lib/core.css';

@layer modules {
  /* Erweiterung der Card-Komponente */
  .card--special {
    border: 2px solid var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .card--special .card__header {
    background-color: var(--color-accent-light);
  }
}
```

### 3. Eigene Komponenten erstellen

```css
@import '@casoon/ui-lib/core.css';

/* Eigene Komponente im eigenen Layer */
@layer custom-components {
  .feature-box {
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
    transition: transform 0.3s var(--ease-out);
  }
  
  .feature-box:hover {
    transform: translateY(-5px);
  }
  
  .feature-box__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  .feature-box__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .feature-box__description {
    color: var(--text-secondary);
  }
}
```

## Optimierung für Lightning CSS

Das modulare Komponenten-System ist für Lightning CSS optimiert:

1. **Effizientes Layer-System**: Jede Komponente in ihrem eigenen Layer für bessere Kompilierung
2. **Modulare Import-Struktur**: Ermöglicht Tree-Shaking für ungenutzte Komponenten
3. **CSS-Variablen-System**: Ermöglicht dynamische Anpassungen ohne CSS-Duplizierung
4. **Automatische Präfix-Generierung**: Für maximale Browserkompatibilität

## Best Practices

1. **Konsistentes Naming**: Verwenden Sie die BEM-Konvention für eigene Komponenten
2. **Respektieren Sie Layer**: Platzieren Sie Anpassungen im richtigen CSS-Layer
3. **Mobile-First**: Beginnen Sie mit der mobilen Ansicht und erweitern Sie für größere Screens
4. **Semantisches HTML**: Verwenden Sie das passende HTML-Element für jeden Zweck
5. **CSS-Variablen nutzen**: Verwenden Sie vorhandene CSS-Variablen statt fester Werte 

```css
/* Button-Modul */
@layer components {
  .button {
    /* Basis-Stile für alle Buttons */
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    font-family: var(--font-family-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .button.primary {
    background-color: var(--color-primary);
    color: white;
    border: 1px solid var(--color-primary);
  }
  
  /* Weitere Varianten... */
} 