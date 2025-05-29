---
title: Neumorphism Effects
category: Effects
---

# Neumorphism-Effekte

Die Neumorphism-Effekte der Casoon UI Library bieten eine moderne Design-Ästhetik, die weiche Schatten und einen subtilen, realistischen Look kombiniert, um eine haptische und elegante Benutzeroberfläche zu schaffen.

## Überblick

Neumorphism (auch Soft UI genannt) ist ein Design-Stil, der Elemente so erscheinen lässt, als wären sie aus der Oberfläche herausgedrückt oder in sie hineingedrückt. Diese Effekte verwenden subtile Schatten und Highlights, um einen dreidimensionalen Look zu erzeugen, ohne die Einfachheit des Designs zu beeinträchtigen.

## Installation

Importieren Sie das Neumorphism-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/neumorphism.css';
```

## Verfügbare Klassen

### Grundlegende Neumorphism-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.neumorph` | Grundlegender Neumorphism-Effekt (erhaben) |
| `.neumorph-inset` | Eingesenkter Neumorphism-Effekt |
| `.neumorph-flat` | Flacher Neumorphism-Effekt |
| `.neumorph-concave` | Konkaver Neumorphism-Effekt |
| `.neumorph-convex` | Konvexer Neumorphism-Effekt |

### Neumorphism-Variants

| Klasse | Beschreibung |
|--------|-------------|
| `.neumorph-sm` | Kleiner Neumorphism-Effekt |
| `.neumorph-md` | Mittlerer Neumorphism-Effekt (Standard) |
| `.neumorph-lg` | Großer Neumorphism-Effekt |
| `.neumorph-xl` | Extra großer Neumorphism-Effekt |

### Neumorphism-Elemente

| Klasse | Beschreibung |
|--------|-------------|
| `.neumorph-button` | Neumorphism-Stil für Buttons |
| `.neumorph-card` | Neumorphism-Stil für Cardn |
| `.neumorph-input` | Neumorphism-Stil für Inputer |
| `.neumorph-switch` | Neumorphism-Stil für Switch |
| `.neumorph-checkbox` | Neumorphism-Stil für Checkboxen |
| `.neumorph-radio` | Neumorphism-Stil für Radiobuttons |
| `.neumorph-slider` | Neumorphism-Stil für Slider |
| `.neumorph-progress` | Neumorphism-Stil für Fortschrittsanzeigen |
| `.neumorph-dropdown` | Neumorphism-Stil für Dropdown-Menüs |
| `.neumorph-nav` | Neumorphism-Stil für Navigation |

### Interaktive States

| Klasse | Beschreibung |
|--------|-------------|
| `.neumorph-hover` | Ändert den Neumorphism-Effekt bei Hover |
| `.neumorph-active` | Ändert den Neumorphism-Effekt bei aktivem Zustand |
| `.neumorph-focus` | Ändert den Neumorphism-Effekt bei Fokus |
| `.neumorph-toggle` | Umschaltbarer Neumorphism-Effekt |

## Examples

### Neumorphism-Buttons

```html
<div class="neumorph-container">
  <button class="neumorph neumorph-button">Standard Button</button>
  <button class="neumorph-inset neumorph-button">Inset Button</button>
  <button class="neumorph neumorph-button neumorph-hover">Hover Button</button>
  <button class="neumorph neumorph-button neumorph-active">Active Button</button>
</div>

<style>
  .neumorph-container {
    padding: 3rem;
    background-color: var(--neumorph-background);
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .neumorph-button {
    padding: 0.8em 1.6em;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    color: var(--neumorph-text-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
```

### Neumorphism-Card

```html
<div class="neumorph-card">
  <div class="neumorph-card-header">
    <h3>Neumorphism Card</h3>
  </div>
  <div class="neumorph-card-body">
    <p>Dieser Inhalt wird im Neumorphism-Stil dargestellt, der einen weichen, plastischen Look erzeugt.</p>
  </div>
  <div class="neumorph-card-footer">
    <button class="neumorph neumorph-button neumorph-sm">Mehr erfahren</button>
  </div>
</div>

<style>
  .neumorph-card {
    max-width: 350px;
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--neumorph-background);
    box-shadow: var(--neumorph-shadow);
  }
  
  .neumorph-card-header {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .neumorph-card-body {
    padding: 1.5rem;
  }
  
  .neumorph-card-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: flex-end;
  }
</style>
```

### Neumorphism-Formelemente

```html
<div class="neumorph-form">
  <div class="neumorph-form-group">
    <label for="name">Name</label>
    <input id="name" type="text" class="neumorph-inset neumorph-input" placeholder="Ihr Name">
  </div>
  
  <div class="neumorph-form-group">
    <label for="email">E-Mail</label>
    <input id="email" type="email" class="neumorph-inset neumorph-input" placeholder="Ihre E-Mail">
  </div>
  
  <div class="neumorph-form-group">
    <div class="neumorph-checkbox-wrapper">
      <input id="terms" type="checkbox" class="neumorph-checkbox">
      <label for="terms">Ich akzeptiere die AGB</label>
    </div>
  </div>
  
  <div class="neumorph-form-group">
    <label>Präferenz</label>
    <div class="neumorph-radio-group">
      <div class="neumorph-radio-wrapper">
        <input id="option1" type="radio" name="preference" class="neumorph-radio">
        <label for="option1">Option 1</label>
      </div>
      <div class="neumorph-radio-wrapper">
        <input id="option2" type="radio" name="preference" class="neumorph-radio">
        <label for="option2">Option 2</label>
      </div>
    </div>
  </div>
  
  <div class="neumorph-form-group">
    <button type="submit" class="neumorph neumorph-button">Absenden</button>
  </div>
</div>

<style>
  .neumorph-form {
    max-width: 500px;
    padding: 2rem;
    background-color: var(--neumorph-background);
    border-radius: 16px;
    box-shadow: var(--neumorph-shadow);
  }
  
  .neumorph-form-group {
    margin-bottom: 1.5rem;
  }
  
  .neumorph-form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--neumorph-text-color);
  }
  
  .neumorph-input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    background-color: var(--neumorph-background);
    color: var(--neumorph-text-color);
    font-size: 1rem;
  }
  
  .neumorph-checkbox-wrapper,
  .neumorph-radio-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .neumorph-checkbox,
  .neumorph-radio {
    margin-right: 0.8rem;
  }
</style>
```

### Neumorphism-Navigationselemente

```html
<nav class="neumorph-nav">
  <div class="neumorph-nav-item neumorph neumorph-active">
    <i class="icon-home"></i>
    <span>Home</span>
  </div>
  <div class="neumorph-nav-item neumorph">
    <i class="icon-user"></i>
    <span>Profil</span>
  </div>
  <div class="neumorph-nav-item neumorph">
    <i class="icon-settings"></i>
    <span>Einstellungen</span>
  </div>
  <div class="neumorph-nav-item neumorph">
    <i class="icon-bell"></i>
    <span>Benachrichtigungen</span>
  </div>
</nav>

<style>
  .neumorph-nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--neumorph-background);
    border-radius: 16px;
    box-shadow: var(--neumorph-shadow);
  }
  
  .neumorph-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .neumorph-nav-item i {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .neumorph-nav-item.neumorph-active {
    color: var(--neumorph-accent-color);
    box-shadow: var(--neumorph-inset-shadow);
  }
</style>
```

### Neumorphism-Dashboard-Components

```html
<div class="neumorph-dashboard">
  <div class="neumorph neumorph-stat">
    <div class="neumorph-stat-icon">
      <i class="icon-users"></i>
    </div>
    <div class="neumorph-stat-content">
      <div class="neumorph-stat-value">1,248</div>
      <div class="neumorph-stat-label">Benutzer</div>
    </div>
  </div>
  
  <div class="neumorph neumorph-stat">
    <div class="neumorph-stat-icon">
      <i class="icon-chart"></i>
    </div>
    <div class="neumorph-stat-content">
      <div class="neumorph-stat-value">$8,942</div>
      <div class="neumorph-stat-label">Umsatz</div>
    </div>
  </div>
  
  <div class="neumorph neumorph-stat">
    <div class="neumorph-stat-icon">
      <i class="icon-cart"></i>
    </div>
    <div class="neumorph-stat-content">
      <div class="neumorph-stat-value">342</div>
      <div class="neumorph-stat-label">Bestellungen</div>
    </div>
  </div>
  
  <div class="neumorph neumorph-progress-container">
    <div class="neumorph-progress-header">
      <h4>Projektstatus</h4>
      <span>75%</span>
    </div>
    <div class="neumorph-inset neumorph-progress-track">
      <div class="neumorph-convex neumorph-progress-bar" style="width: 75%"></div>
    </div>
  </div>
</div>

<style>
  .neumorph-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: var(--neumorph-background);
    border-radius: 20px;
  }
  
  .neumorph-stat {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .neumorph-stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--neumorph-accent-light);
    color: var(--neumorph-accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    margin-right: 1rem;
  }
  
  .neumorph-stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  
  .neumorph-stat-label {
    color: var(--neumorph-text-light);
    font-size: 0.9rem;
  }
  
  .neumorph-progress-container {
    grid-column: 1 / -1;
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .neumorph-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .neumorph-progress-track {
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .neumorph-progress-bar {
    height: 100%;
    background-color: var(--neumorph-accent-color);
    border-radius: 6px;
  }
</style>
```

## Anpassung

Die Neumorphism-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Basis-Colors */
  --neumorph-background: #e0e5ec;
  --neumorph-text-color: #333;
  --neumorph-text-light: #777;
  --neumorph-accent-color: #4d7cfe;
  --neumorph-accent-light: rgba(77, 124, 254, 0.1);
  
  /* Schatten-Parameter */
  --neumorph-shadow-distance: 10px;
  --neumorph-shadow-blur: 15px;
  --neumorph-shadow-opacity: 0.1;
  --neumorph-light-angle: 145deg;
  
  /* Berechnete Schatten */
  --neumorph-light-x: calc(cos(var(--neumorph-light-angle)) * var(--neumorph-shadow-distance));
  --neumorph-light-y: calc(sin(var(--neumorph-light-angle)) * var(--neumorph-shadow-distance));
  --neumorph-dark-x: calc(cos(var(--neumorph-light-angle) + 180deg) * var(--neumorph-shadow-distance));
  --neumorph-dark-y: calc(sin(var(--neumorph-light-angle) + 180deg) * var(--neumorph-shadow-distance));
  
  /* Neumorphism-Schatten */
  --neumorph-shadow: 
    var(--neumorph-light-x) var(--neumorph-light-y) var(--neumorph-shadow-blur) rgba(255, 255, 255, 0.7),
    var(--neumorph-dark-x) var(--neumorph-dark-y) var(--neumorph-shadow-blur) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
  
  /* Eingesenkter Neumorphism-Schatten */
  --neumorph-inset-shadow: 
    inset var(--neumorph-dark-x) var(--neumorph-dark-y) var(--neumorph-shadow-blur) rgba(0, 0, 0, var(--neumorph-shadow-opacity)),
    inset var(--neumorph-light-x) var(--neumorph-light-y) var(--neumorph-shadow-blur) rgba(255, 255, 255, 0.7);
  
  /* Variants-Sizes */
  --neumorph-shadow-sm: 
    calc(var(--neumorph-light-x) * 0.5) calc(var(--neumorph-light-y) * 0.5) calc(var(--neumorph-shadow-blur) * 0.5) rgba(255, 255, 255, 0.7),
    calc(var(--neumorph-dark-x) * 0.5) calc(var(--neumorph-dark-y) * 0.5) calc(var(--neumorph-shadow-blur) * 0.5) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
  
  --neumorph-shadow-lg: 
    calc(var(--neumorph-light-x) * 1.5) calc(var(--neumorph-light-y) * 1.5) calc(var(--neumorph-shadow-blur) * 1.5) rgba(255, 255, 255, 0.7),
    calc(var(--neumorph-dark-x) * 1.5) calc(var(--neumorph-dark-y) * 1.5) calc(var(--neumorph-shadow-blur) * 1.5) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
  
  --neumorph-shadow-xl: 
    calc(var(--neumorph-light-x) * 2) calc(var(--neumorph-light-y) * 2) calc(var(--neumorph-shadow-blur) * 2) rgba(255, 255, 255, 0.7),
    calc(var(--neumorph-dark-x) * 2) calc(var(--neumorph-dark-y) * 2) calc(var(--neumorph-shadow-blur) * 2) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
}

/* Dark Mode Anpassung */
@media (prefers-color-scheme: dark) {
  :root {
    --neumorph-background: #2d3748;
    --neumorph-text-color: #e2e8f0;
    --neumorph-text-light: #a0aec0;
    
    /* Dunklere Schatten für Dark Mode */
    --neumorph-shadow-opacity: 0.3;
    
    /* Angepasste Schatten für Dark Mode */
    --neumorph-shadow: 
      var(--neumorph-light-x) var(--neumorph-light-y) var(--neumorph-shadow-blur) rgba(255, 255, 255, 0.1),
      var(--neumorph-dark-x) var(--neumorph-dark-y) var(--neumorph-shadow-blur) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
    
    --neumorph-inset-shadow: 
      inset var(--neumorph-dark-x) var(--neumorph-dark-y) var(--neumorph-shadow-blur) rgba(0, 0, 0, var(--neumorph-shadow-opacity)),
      inset var(--neumorph-light-x) var(--neumorph-light-y) var(--neumorph-shadow-blur) rgba(255, 255, 255, 0.1);
  }
}
```

## Accessibility

Bei der Usage von Neumorphism-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist
2. **Fokus-States**: Bieten Sie klare Fokus-States für Tastaturnavigation
3. **Sizesanpassung**: Stellen Sie sicher, dass Elemente bei Textvergrößerung korrekt skalieren

```css
/* Verbesserte Fokus-States für Accessibility */
.neumorph-button:focus,
.neumorph-input:focus {
  outline: none;
  box-shadow: var(--neumorph-inset-shadow), 0 0 0 3px var(--neumorph-accent-color);
}

/* Kontrastreiche Hover-States */
.neumorph-button:hover {
  color: var(--neumorph-accent-color);
  transform: translateY(-2px);
}

/* Verbesserte Lesbarkeit */
.neumorph-card-body {
  line-height: 1.6;
}
```

## Browser-Kompatibilität

Die Neumorphism-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Box-Shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |
| Calc-Funktion | ✓ | ✓ | ✓ | ✓ | Teilweise |

Für ältere Browser, die keine CSS Variables unterstützen, werden Fallback-Styles bereitgestellt. 