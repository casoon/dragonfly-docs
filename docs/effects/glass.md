---
title: Glass Effects
category: Effects
---

# Glass-effects

the Glass-effects the Casoon UI Library bieten moderne, elegante Glasmorphismus-Styleslemente, the transparency, Unscharfe and subtile Lichteffekte combine, um a zeitgemasse and elegante Benutzeroberflache to schaffen.

## Uberblick

the Glasmorphismus (also "Frosted Glass" or "Glaseffekt" genannt) ist a design-Trend, the transparente, verschwommene elements verwendet, um den Eindruck from durchscheinendem Glas to erzeugen. these effects verleihen Ihrer Benutzeroberflache Tiefe and Leichtigkeit and eignen oneself hervorragend for moderne, minimalistische designs.

## Installation

import them the Glass-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/glass.css';
```

## Verfugbare classes

### Grundlegende Glass-effects

| Class | Description |
|--------|-------------|
| `.glass` | Grundlegender Glaseffekt with transparency and Unscharfe |
| `.glass-light` | Hellere Variante des Glaseffekts |
| `.glass-dark` | Dunklere Variante des Glaseffekts |
| `.glass-frosted` | Stark verschwommener "Frosted Glass"-effect |
| `.glass-thin` | Dunnerer Glaseffekt with less opacity |
| `.glass-thick` | Dickerer Glaseffekt with more opacity |

### Glass-Farbvarianten

| Class | Description |
|--------|-------------|
| `.glass-primary` | Glaseffekt with Primarfarben-Tonung |
| `.glass-secondary` | Glaseffekt with Sekundarfarben-Tonung |
| `.glass-success` | Glaseffekt with Erfolgsfarben-Tonung |
| `.glass-warning` | Glaseffekt with Warnfarben-Tonung |
| `.glass-danger` | Glaseffekt with Gefahrenfarben-Tonung |
| `.glass-info` | Glaseffekt with Informationsfarben-Tonung |
| `.glass-blue` | Glaseffekt with blauer Tonung |
| `.glass-green` | Glaseffekt with gruner Tonung |
| `.glass-red` | Glaseffekt with roter Tonung |
| `.glass-purple` | Glaseffekt with violetter Tonung |
| `.glass-amber` | Glaseffekt with bernsteinfarbener Tonung |
| `.glass-teal` | Glaseffekt with turkisfarbener Tonung |

### Glass-elements

| Class | Description |
|--------|-------------|
| `.glass-card` | Card with Glaseffekt |
| `.glass-button` | button with Glaseffekt |
| `.glass-nav` | Navigationsleiste with Glaseffekt |
| `.glass-sidebar` | Seitenleiste with Glaseffekt |
| `.glass-modal` | modal with Glaseffekt |
| `.glass-dropdown` | Dropdown-Menu with Glaseffekt |
| `.glass-tooltip` | tooltip with Glaseffekt |
| `.glass-form` | Form with Glaseffekt for Inputer |
| `.glass-header` | header-area with Glaseffekt |
| `.glass-footer` | footer-area with Glaseffekt |
| `.glass-badge` | badge with Glaseffekt |
| `.glass-alert` | notification with Glaseffekt |

### Glass-Modifikatoren

| Class | Description |
|--------|-------------|
| `.glass-border` | Fugt einen feinen margin zum Glaseffekt hinzu |
| `.glass-rounded` | Fugt abgerundete Ecken zum Glaseffekt hinzu |
| `.glass-shadow` | Fugt einen subtilen shadow zum Glaseffekt hinzu |
| `.glass-hover` | Andert den Glaseffekt at Hover |
| `.glass-glow` | Fugt einen Leuchteffekt zum Glaseffekt hinzu |
| `.glass-reflect` | Fugt einen leichten Reflexionseffekt hinzu |
| `.glass-backdrop` | Glaseffekt for Hintergrundelemente |

## Examples

### Einfache Glass-Card

```html
<div class="glass-card glass-rounded glass-shadow">
  <div class="glass-card-header">
    <h3>Glass Card</h3>
  </div>
  <div class="glass-card-body">
    <p>this content wird in einer eleganten Glaskarte dargestellt. the background schimmert through the transparente Oberflache.</p>
  </div>
  <div class="glass-card-footer">
    <button class="glass-button glass-primary">more erfahren</button>
  </div>
</div>

<style>
  /* background for den Glaseffekt */
  body {
    background-image: url('gradient-background.jpg');
    background-size: cover;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .glass-card {
    max-width: 400px;
    padding: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .glass-card-header {
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  .glass-card-body {
    margin-bottom: 1.5rem;
  }
  
  .glass-card-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  
  .glass-button {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
</style>
```

### Glass-Navigationsleiste

```html
<header class="glass-header glass-sticky">
  <nav class="glass-nav">
    <div class="glass-nav-brand">
      <a href="#">GlassBrand</a>
    </div>
    
    <ul class="glass-nav-menu">
      <li class="glass-nav-item"><a href="#" class="glass-nav-link active">Home</a></li>
      <li class="glass-nav-item"><a href="#" class="glass-nav-link">over us</a></li>
      <li class="glass-nav-item"><a href="#" class="glass-nav-link">Dienstleistungen</a></li>
      <li class="glass-nav-item"><a href="#" class="glass-nav-link">Portfolio</a></li>
      <li class="glass-nav-item"><a href="#" class="glass-nav-link">Kontakt</a></li>
    </ul>
    
    <div class="glass-nav-actions">
      <button class="glass-button glass-primary">Anmelden</button>
    </div>
  </nav>
</header>

<style>
  .glass-sticky {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .glass-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  
  .glass-nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .glass-nav-brand a {
    color: white;
    text-decoration: none;
  }
  
  .glass-nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .glass-nav-item {
    margin: 0 0.5rem;
  }
  
  .glass-nav-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .glass-nav-link:hover,
  .glass-nav-link.active {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
```

### Glass-Dashboard

```html
<div class="glass-dashboard">
  <div class="glass-panel glass-primary">
    <div class="glass-panel-icon">
      <i class="icon-users"></i>
    </div>
    <div class="glass-panel-content">
      <h3 class="glass-panel-title">1,248</h3>
      <p class="glass-panel-subtitle">Neue user</p>
    </div>
  </div>
  
  <div class="glass-panel glass-success">
    <div class="glass-panel-icon">
      <i class="icon-chart"></i>
    </div>
    <div class="glass-panel-content">
      <h3 class="glass-panel-title">€8,942</h3>
      <p class="glass-panel-subtitle">Umsatz</p>
    </div>
  </div>
  
  <div class="glass-panel glass-info">
    <div class="glass-panel-icon">
      <i class="icon-tasks"></i>
    </div>
    <div class="glass-panel-content">
      <h3 class="glass-panel-title">64%</h3>
      <p class="glass-panel-subtitle">Aufgaben erledigt</p>
    </div>
  </div>
  
  <div class="glass-panel glass-warning">
    <div class="glass-panel-icon">
      <i class="icon-notification"></i>
    </div>
    <div class="glass-panel-content">
      <h3 class="glass-panel-title">12</h3>
      <p class="glass-panel-subtitle">notifications</p>
    </div>
  </div>
  
  <div class="glass-card glass-shadow glass-wide">
    <div class="glass-card-header">
      <h3>Aktivitatsubersicht</h3>
    </div>
    <div class="glass-card-body">
      <div class="glass-chart">
        <!-- Hier konnte a Chart eingebunden become -->
        <div class="glass-chart-placeholder">Aktivitatsdaten become hier angezeigt</div>
      </div>
    </div>
  </div>
  
  <div class="glass-card glass-shadow">
    <div class="glass-card-header">
      <h3>Neueste Aktivitaten</h3>
    </div>
    <div class="glass-card-body">
      <ul class="glass-activity-list">
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-blue">
            <i class="icon-document"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Neues Dokument erstellt</p>
            <span class="glass-activity-time">before 5 Minuten</span>
          </div>
        </li>
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-green">
            <i class="icon-user"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Profil aktualisiert</p>
            <span class="glass-activity-time">before 2 Stunden</span>
          </div>
        </li>
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-amber">
            <i class="icon-message"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Neue Nachricht erhalten</p>
            <span class="glass-activity-time">before 1 tag</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .glass-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .glass-panel {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .glass-panel-icon {
    font-size: 2rem;
    margin-right: 1rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-panel-title {
    font-size: 1.8rem;
    margin: 0 0 0.3rem 0;
  }
  
  .glass-panel-subtitle {
    margin: 0;
    opacity: 0.8;
  }
  
  .glass-wide {
    grid-column: span 2;
  }
  
  .glass-chart-placeholder {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  .glass-activity-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .glass-activity-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .glass-activity-item:last-child {
    border-bottom: none;
  }
  
  .glass-activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .glass-activity-text {
    margin: 0;
  }
  
  .glass-activity-time {
    font-size: 0.8rem;
    opacity: 0.7;
  }
</style>
```

### Glass-Login-Form

```html
<div class="glass-containers">
  <div class="glass-card glass-form glass-rounded glass-shadow">
    <div class="glass-card-header">
      <h2>Anmelden</h2>
    </div>
    <div class="glass-card-body">
      <form>
        <div class="glass-form-group">
          <label for="email">E-Mail</label>
          <input type="email" id="email" class="glass-input" placeholder="Ihre E-Mail-Adresse">
        </div>
        
        <div class="glass-form-group">
          <label for="password">Passwort</label>
          <input type="password" id="password" class="glass-input" placeholder="her Passwort">
        </div>
        
        <div class="glass-form-group glass-checkbox">
          <input type="checkbox" id="remember" class="glass-check">
          <label for="remember">Angemeldet bleiben</label>
        </div>
        
        <div class="glass-form-actions">
          <button type="submit" class="glass-button glass-primary glass-shadow">Anmelden</button>
        </div>
      </form>
    </div>
    <div class="glass-card-footer">
      <p>Noch no Konto? <a href="#" class="glass-link">Registrieren</a></p>
    </div>
  </div>
</div>

<style>
  .glass-containers {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('blur-background.jpg');
    background-size: cover;
    padding: 2rem;
  }
  
  .glass-form {
    width: 100%;
    max-width: 400px;
  }
  
  .glass-form-group {
    margin-bottom: 1.5rem;
  }
  
  .glass-form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .glass-input {
    width: 100%;
    padding: 0.8rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
  }
  
  .glass-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .glass-checkbox {
    display: flex;
    align-items: center;
  }
  
  .glass-checkbox label {
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
  
  .glass-form-actions {
    margin-top: 2rem;
  }
  
  .glass-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
  }
  
  .glass-link:hover {
    border-bottom-style: solid;
  }
</style>
```

## Customization

the Glass-effects can over CSS Variables angepasst become:

```css
:root {
  /* Base-Glaseffekt-parameter */
  --glass-opacity: 0.15;
  --glass-blur: 10px;
  --glass-saturation: 180%;
  --glass-background: rgba(255, 255, 255, 0.15);
  --glass-border-color: rgba(255, 255, 255, 0.2);
  --glass-shadow-color: rgba(0, 0, 0, 0.2);
  
  /* Variants */
  --glass-light-opacity: 0.1;
  --glass-dark-opacity: 0.25;
  --glass-frosted-blur: 20px;
  --glass-thin-opacity: 0.08;
  --glass-thick-opacity: 0.3;
  
  /* Farbvarianten */
  --glass-primary-color: rgba(59, 130, 246, 0.3);
  --glass-secondary-color: rgba(107, 114, 128, 0.3);
  --glass-success-color: rgba(16, 185, 129, 0.3);
  --glass-warning-color: rgba(245, 158, 11, 0.3);
  --glass-danger-color: rgba(239, 68, 68, 0.3);
  --glass-info-color: rgba(14, 165, 233, 0.3);
  
  /* elements */
  --glass-border-width: 1px;
  --glass-border-radius: 8px;
  --glass-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  --glass-glow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* Dunkles color scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-background: rgba(16, 18, 27, 0.4);
    --glass-border-color: rgba(255, 255, 255, 0.1);
  }
}
```

## CSS-Implementation

the grundlegende Glaseffekt wird through folgende CSS-properties erzeugt:

```css
.glass {
  background-color: var(--glass-background);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: var(--glass-border-width) solid var(--glass-border-color);
}

.glass-light {
  background-color: rgba(255, 255, 255, var(--glass-light-opacity));
}

.glass-dark {
  background-color: rgba(0, 0, 0, var(--glass-dark-opacity));
}

.glass-border {
  border: var(--glass-border-width) solid var(--glass-border-color);
}

.glass-rounded {
  border-radius: var(--glass-border-radius);
}

.glass-shadow {
  box-shadow: var(--glass-shadow);
}

.glass-glow {
  box-shadow: var(--glass-glow);
}
```

## Accessibility

at the Usage from Glass-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that despite transparency a ausreichender Kontrast between Text and background besteht
2. **Lesbarkeit**: Vermeiden them to strength Unscharfe-effects, the the Lesbarkeit beeintrachtigen konnten
3. **Alternativ-Ansicht**: Bieten them a not-transparente Alternative for Nutzer, the Schwierigkeiten with transparenten Oberflachen have

```css
/* Verbesserte Lesbarkeit for Text in Glaseffekten */
.glass-text {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Alternative Styles for reduzierte transparency */
@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass-light,
  .glass-dark,
  .glass-frosted {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background-color: rgba(30, 30, 35, 0.95);
  }
}
```

## Performanceoptimierung

Glaseffekte can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Begrenzen them the Flache**: Wenden them Glaseffekte only on kleinere UI-elements on, not on size Flachen
2. **Reduzieren them the Anzahl**: use them not to many Glaselemente on einer Seite
3. **Will-change**: use them `will-change: backdrop-filter` for verbesserte Performance at animations
4. **Layer-Promotion**: use them `transform: translateZ(0)` for Hardware-Beschleunigung

```css
/* Performance-Optimierung for Glaseffekte */
.glass-optimized {
  will-change: backdrop-filter;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the Glass-effects become from den meisten modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| backdrop-filter | ✓ | ✓* | ✓ | ✓ | ✗ |
| -webkit-backdrop-filter | ✓ | ✗ | ✓ | ✓ | ✗ |

\* in Firefox muss backdrop-filter over the Setting `layout.css.backdrop-filter.enabled` aktiviert become.

for Browser, the no `backdrop-filter` unterstutzen, wird a Fallback bereitgestellt, the a ahnliche Asthetik with reduzierter transparency bietet. 