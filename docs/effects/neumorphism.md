---
title: Neumorphism Effects
category: Effects
---

# Neumorphism-effects

the Neumorphism-effects the Casoon UI Library bieten a moderne design-Asthetik, the weiche shadow and einen subtilen, realistischen Look kombiniert, um a haptische and elegante Benutzeroberflache to schaffen.

## Uberblick

Neumorphism (also Soft UI genannt) ist a design-Style, the elements so erscheinen lasst, as waren them aus the Oberflache herausgedruckt or in them hineingedruckt. these effects use subtile shadow and Highlights, um einen dreidimensionalen Look to erzeugen, without the Einfachheit des designs to beeintrachtigen.

## Installation

import them the Neumorphism-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/neumorphism.css';
```

## Verfugbare classes

### Grundlegende Neumorphism-effects

| Class | Description |
|--------|-------------|
| `.neumorph` | Grundlegender Neumorphism-effect (erhaben) |
| `.neumorph-inset` | Eingesenkter Neumorphism-effect |
| `.neumorph-flat` | Flacher Neumorphism-effect |
| `.neumorph-concave` | Konkaver Neumorphism-effect |
| `.neumorph-convex` | Konvexer Neumorphism-effect |

### Neumorphism-Variants

| Class | Description |
|--------|-------------|
| `.neumorph-sm` | smaller Neumorphism-effect |
| `.neumorph-md` | Mittlerer Neumorphism-effect (Standard) |
| `.neumorph-lg` | Grosser Neumorphism-effect |
| `.neumorph-xl` | Extra grosser Neumorphism-effect |

### Neumorphism-elements

| Class | Description |
|--------|-------------|
| `.neumorph-button` | Neumorphism-Style for buttons |
| `.neumorph-card` | Neumorphism-Style for Cardn |
| `.neumorph-input` | Neumorphism-Style for Inputer |
| `.neumorph-switch` | Neumorphism-Style for Switch |
| `.neumorph-checkbox` | Neumorphism-Style for checkboxes |
| `.neumorph-radio` | Neumorphism-Style for radio buttons |
| `.neumorph-slider` | Neumorphism-Style for Slider |
| `.neumorph-progress` | Neumorphism-Style for Fortschrittsanzeigen |
| `.neumorph-dropdown` | Neumorphism-Style for Dropdown-Menus |
| `.neumorph-nav` | Neumorphism-Style for navigation |

### Interaktive States

| Class | Description |
|--------|-------------|
| `.neumorph-hover` | Andert den Neumorphism-effect at Hover |
| `.neumorph-active` | Andert den Neumorphism-effect at aktivem state |
| `.neumorph-focus` | Andert den Neumorphism-effect at Fokus |
| `.neumorph-toggle` | Umschaltbarer Neumorphism-effect |

## Examples

### Neumorphism-buttons

```html
<div class="neumorph-containers">
  <button class="neumorph neumorph-button">Standard button</button>
  <button class="neumorph-inset neumorph-button">Inset button</button>
  <button class="neumorph neumorph-button neumorph-hover">Hover button</button>
  <button class="neumorph neumorph-button neumorph-active">Active button</button>
</div>

<style>
  .neumorph-containers {
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
    <p>this content wird im Neumorphism-Style dargestellt, the einen weichen, plastischen Look erzeugt.</p>
  </div>
  <div class="neumorph-card-footer">
    <button class="neumorph neumorph-button neumorph-sm">more erfahren</button>
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

### Neumorphism-form elements

```html
<div class="neumorph-form">
  <div class="neumorph-form-group">
    <label for="name">Name</label>
    <input id="name" type="text" class="neumorph-inset neumorph-input" placeholder="her Name">
  </div>
  
  <div class="neumorph-form-group">
    <label for="email">E-Mail</label>
    <input id="email" type="email" class="neumorph-inset neumorph-input" placeholder="Ihre E-Mail">
  </div>
  
  <div class="neumorph-form-group">
    <div class="neumorph-checkbox-wrappers">
      <input id="terms" type="checkbox" class="neumorph-checkbox">
      <label for="terms">I akzeptiere the AGB</label>
    </div>
  </div>
  
  <div class="neumorph-form-group">
    <label>Praferenz</label>
    <div class="neumorph-radio-group">
      <div class="neumorph-radio-wrappers">
        <input id="option1" type="radio" name="preference" class="neumorph-radio">
        <label for="option1">Option 1</label>
      </div>
      <div class="neumorph-radio-wrappers">
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
  
  .neumorph-checkbox-wrappers,
  .neumorph-radio-wrappers {
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
    <span>notifications</span>
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
      <div class="neumorph-stat-label">user</div>
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
  
  <div class="neumorph neumorph-progress-containers">
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
  
  .neumorph-progress-containers {
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

## Customization

the Neumorphism-effects can over CSS Variables angepasst become:

```css
:root {
  /* Base-Colors */
  --neumorph-background: #e0e5ec;
  --neumorph-text-color: #333;
  --neumorph-text-light: #777;
  --neumorph-accent-color: #4d7cfe;
  --neumorph-accent-light: rgba(77, 124, 254, 0.1);
  
  /* shadow-parameter */
  --neumorph-shadow-distance: 10px;
  --neumorph-shadow-blur: 15px;
  --neumorph-shadow-opacity: 0.1;
  --neumorph-light-angle: 145deg;
  
  /* Berechnete shadow */
  --neumorph-light-x: calc(cos(var(--neumorph-light-angle)) * var(--neumorph-shadow-distance));
  --neumorph-light-y: calc(sin(var(--neumorph-light-angle)) * var(--neumorph-shadow-distance));
  --neumorph-dark-x: calc(cos(var(--neumorph-light-angle) + 180deg) * var(--neumorph-shadow-distance));
  --neumorph-dark-y: calc(sin(var(--neumorph-light-angle) + 180deg) * var(--neumorph-shadow-distance));
  
  /* Neumorphism-shadow */
  --neumorph-shadow: 
    var(--neumorph-light-x) var(--neumorph-light-y) var(--neumorph-shadow-blur) rgba(255, 255, 255, 0.7),
    var(--neumorph-dark-x) var(--neumorph-dark-y) var(--neumorph-shadow-blur) rgba(0, 0, 0, var(--neumorph-shadow-opacity));
  
  /* Eingesenkter Neumorphism-shadow */
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

/* Dark Mode Customization */
@media (prefers-color-scheme: dark) {
  :root {
    --neumorph-background: #2d3748;
    --neumorph-text-color: #e2e8f0;
    --neumorph-text-light: #a0aec0;
    
    /* Dunklere shadow for Dark Mode */
    --neumorph-shadow-opacity: 0.3;
    
    /* Angepasste shadow for Dark Mode */
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

at the Usage from Neumorphism-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Kontrast between Text and background ausreichend ist
2. **Fokus-States**: Bieten them klare Fokus-States for Tastaturnavigation
3. **Sizesanpassung**: ensure, that elements at Textvergrosserung korrekt skalieren

```css
/* Verbesserte Fokus-States for Accessibility */
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

## Browser-Kompatibilitat

the Neumorphism-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| box-Shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |
| Calc-Function | ✓ | ✓ | ✓ | ✓ | Teilweise |

for altere Browser, the no CSS Variables unterstutzen, become Fallback-Styles bereitgestellt. 