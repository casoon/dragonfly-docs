---
title: Glass Effects
category: Effects
---

# Glass-Effekte

Die Glass-Effekte der Casoon UI Library bieten moderne, elegante Glasmorphismus-Stilelemente, die Transparenz, Unschärfe und subtile Lichteffekte kombinieren, um eine zeitgemäße und elegante Benutzeroberfläche zu schaffen.

## Überblick

Der Glasmorphismus (auch "Frosted Glass" oder "Glaseffekt" genannt) ist ein Design-Trend, der transparente, verschwommene Elemente verwendet, um den Eindruck von durchscheinendem Glas zu erzeugen. Diese Effekte verleihen Ihrer Benutzeroberfläche Tiefe und Leichtigkeit und eignen sich hervorragend für moderne, minimalistische Designs.

## Installation

Importieren Sie das Glass-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/glass.css';
```

## Verfügbare Klassen

### Grundlegende Glass-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.glass` | Grundlegender Glaseffekt mit Transparenz und Unschärfe |
| `.glass-light` | Hellere Variante des Glaseffekts |
| `.glass-dark` | Dunklere Variante des Glaseffekts |
| `.glass-frosted` | Stark verschwommener "Frosted Glass"-Effekt |
| `.glass-thin` | Dünnerer Glaseffekt mit weniger Opazität |
| `.glass-thick` | Dickerer Glaseffekt mit mehr Opazität |

### Glass-Farbvarianten

| Klasse | Beschreibung |
|--------|-------------|
| `.glass-primary` | Glaseffekt mit Primärfarben-Tönung |
| `.glass-secondary` | Glaseffekt mit Sekundärfarben-Tönung |
| `.glass-success` | Glaseffekt mit Erfolgsfarben-Tönung |
| `.glass-warning` | Glaseffekt mit Warnfarben-Tönung |
| `.glass-danger` | Glaseffekt mit Gefahrenfarben-Tönung |
| `.glass-info` | Glaseffekt mit Informationsfarben-Tönung |
| `.glass-blue` | Glaseffekt mit blauer Tönung |
| `.glass-green` | Glaseffekt mit grüner Tönung |
| `.glass-red` | Glaseffekt mit roter Tönung |
| `.glass-purple` | Glaseffekt mit violetter Tönung |
| `.glass-amber` | Glaseffekt mit bernsteinfarbener Tönung |
| `.glass-teal` | Glaseffekt mit türkisfarbener Tönung |

### Glass-Elemente

| Klasse | Beschreibung |
|--------|-------------|
| `.glass-card` | Karte mit Glaseffekt |
| `.glass-button` | Button mit Glaseffekt |
| `.glass-nav` | Navigationsleiste mit Glaseffekt |
| `.glass-sidebar` | Seitenleiste mit Glaseffekt |
| `.glass-modal` | Modal mit Glaseffekt |
| `.glass-dropdown` | Dropdown-Menü mit Glaseffekt |
| `.glass-tooltip` | Tooltip mit Glaseffekt |
| `.glass-form` | Formular mit Glaseffekt für Eingabefelder |
| `.glass-header` | Header-Bereich mit Glaseffekt |
| `.glass-footer` | Footer-Bereich mit Glaseffekt |
| `.glass-badge` | Badge mit Glaseffekt |
| `.glass-alert` | Benachrichtigung mit Glaseffekt |

### Glass-Modifikatoren

| Klasse | Beschreibung |
|--------|-------------|
| `.glass-border` | Fügt einen feinen Rand zum Glaseffekt hinzu |
| `.glass-rounded` | Fügt abgerundete Ecken zum Glaseffekt hinzu |
| `.glass-shadow` | Fügt einen subtilen Schatten zum Glaseffekt hinzu |
| `.glass-hover` | Ändert den Glaseffekt bei Hover |
| `.glass-glow` | Fügt einen Leuchteffekt zum Glaseffekt hinzu |
| `.glass-reflect` | Fügt einen leichten Reflexionseffekt hinzu |
| `.glass-backdrop` | Glaseffekt für Hintergrundelemente |

## Beispiele

### Einfache Glass-Karte

```html
<div class="glass-card glass-rounded glass-shadow">
  <div class="glass-card-header">
    <h3>Glass Card</h3>
  </div>
  <div class="glass-card-body">
    <p>Dieser Inhalt wird in einer eleganten Glaskarte dargestellt. Der Hintergrund schimmert durch die transparente Oberfläche.</p>
  </div>
  <div class="glass-card-footer">
    <button class="glass-button glass-primary">Mehr erfahren</button>
  </div>
</div>

<style>
  /* Hintergrund für den Glaseffekt */
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
      <li class="glass-nav-item"><a href="#" class="glass-nav-link">Über uns</a></li>
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
      <p class="glass-panel-subtitle">Neue Benutzer</p>
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
      <p class="glass-panel-subtitle">Benachrichtigungen</p>
    </div>
  </div>
  
  <div class="glass-card glass-shadow glass-wide">
    <div class="glass-card-header">
      <h3>Aktivitätsübersicht</h3>
    </div>
    <div class="glass-card-body">
      <div class="glass-chart">
        <!-- Hier könnte ein Chart eingebunden werden -->
        <div class="glass-chart-placeholder">Aktivitätsdaten werden hier angezeigt</div>
      </div>
    </div>
  </div>
  
  <div class="glass-card glass-shadow">
    <div class="glass-card-header">
      <h3>Neueste Aktivitäten</h3>
    </div>
    <div class="glass-card-body">
      <ul class="glass-activity-list">
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-blue">
            <i class="icon-document"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Neues Dokument erstellt</p>
            <span class="glass-activity-time">Vor 5 Minuten</span>
          </div>
        </li>
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-green">
            <i class="icon-user"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Profil aktualisiert</p>
            <span class="glass-activity-time">Vor 2 Stunden</span>
          </div>
        </li>
        <li class="glass-activity-item">
          <div class="glass-activity-icon glass-amber">
            <i class="icon-message"></i>
          </div>
          <div class="glass-activity-content">
            <p class="glass-activity-text">Neue Nachricht erhalten</p>
            <span class="glass-activity-time">Vor 1 Tag</span>
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

### Glass-Login-Formular

```html
<div class="glass-container">
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
          <input type="password" id="password" class="glass-input" placeholder="Ihr Passwort">
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
      <p>Noch kein Konto? <a href="#" class="glass-link">Registrieren</a></p>
    </div>
  </div>
</div>

<style>
  .glass-container {
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

## Anpassung

Die Glass-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Basis-Glaseffekt-Parameter */
  --glass-opacity: 0.15;
  --glass-blur: 10px;
  --glass-saturation: 180%;
  --glass-background: rgba(255, 255, 255, 0.15);
  --glass-border-color: rgba(255, 255, 255, 0.2);
  --glass-shadow-color: rgba(0, 0, 0, 0.2);
  
  /* Varianten */
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
  
  /* Elemente */
  --glass-border-width: 1px;
  --glass-border-radius: 8px;
  --glass-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  --glass-glow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* Dunkles Farbschema */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-background: rgba(16, 18, 27, 0.4);
    --glass-border-color: rgba(255, 255, 255, 0.1);
  }
}
```

## CSS-Implementierung

Der grundlegende Glaseffekt wird durch folgende CSS-Eigenschaften erzeugt:

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

## Barrierefreiheit

Bei der Verwendung von Glass-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass trotz Transparenz ein ausreichender Kontrast zwischen Text und Hintergrund besteht
2. **Lesbarkeit**: Vermeiden Sie zu starke Unschärfe-Effekte, die die Lesbarkeit beeinträchtigen könnten
3. **Alternativ-Ansicht**: Bieten Sie eine nicht-transparente Alternative für Nutzer, die Schwierigkeiten mit transparenten Oberflächen haben

```css
/* Verbesserte Lesbarkeit für Text in Glaseffekten */
.glass-text {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Alternative Stile für reduzierte Transparenz */
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

Glaseffekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Begrenzen Sie die Fläche**: Wenden Sie Glaseffekte nur auf kleinere UI-Elemente an, nicht auf große Flächen
2. **Reduzieren Sie die Anzahl**: Nutzen Sie nicht zu viele Glaselemente auf einer Seite
3. **Will-change**: Nutzen Sie `will-change: backdrop-filter` für verbesserte Performance bei Animationen
4. **Layer-Promotion**: Verwenden Sie `transform: translateZ(0)` für Hardware-Beschleunigung

```css
/* Performance-Optimierung für Glaseffekte */
.glass-optimized {
  will-change: backdrop-filter;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die Glass-Effekte werden von den meisten modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| backdrop-filter | ✓ | ✓* | ✓ | ✓ | ✗ |
| -webkit-backdrop-filter | ✓ | ✗ | ✓ | ✓ | ✗ |

\* In Firefox muss backdrop-filter über die Einstellung `layout.css.backdrop-filter.enabled` aktiviert werden.

Für Browser, die keine `backdrop-filter` unterstützen, wird ein Fallback bereitgestellt, der eine ähnliche Ästhetik mit reduzierter Transparenz bietet. 