---
title: Neos Effects
category: Effects
---

# Neos-Effekte

Die Neos-Effekte der Casoon UI Library bieten eine Sammlung moderner, futuristischer Gestaltungselemente im Neon-Cyberpunk-Stil, die Ihrer Benutzeroberfläche ein einzigartiges, futuristisches Aussehen verleihen.

## Überblick

Die Neos-Effekte kombinieren leuchtende Farben, scharfe Kontraste und dynamische Elemente, um eine futuristische Ästhetik zu schaffen. Sie eignen sich hervorragend für moderne Web-Apps, Spieleoberflächen und Projekte mit Cyberpunk- oder Sci-Fi-Thematik.

## Installation

Importieren Sie das Neos-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/neos.css';
```

## Verfügbare Klassen

### Grundlegende Neos-Elemente

| Klasse | Beschreibung |
|--------|-------------|
| `.neos` | Grundlegende Neos-Stilisierung mit leuchtenden Kanten |
| `.neos-text` | Text mit Neos-Stilisierung |
| `.neos-border` | Element mit leuchtender Neos-Umrandung |
| `.neos-box` | Box mit Neos-Stilisierung |
| `.neos-card` | Karte mit Neos-Stilisierung |
| `.neos-button` | Button mit Neos-Stilisierung |

### Neos-Farben

| Klasse | Beschreibung |
|--------|-------------|
| `.neos-cyan` | Cyan-farbene Neos-Stilisierung |
| `.neos-magenta` | Magenta-farbene Neos-Stilisierung |
| `.neos-yellow` | Gelbe Neos-Stilisierung |
| `.neos-green` | Grüne Neos-Stilisierung |
| `.neos-blue` | Blaue Neos-Stilisierung |
| `.neos-purple` | Violette Neos-Stilisierung |
| `.neos-red` | Rote Neos-Stilisierung |
| `.neos-orange` | Orange Neos-Stilisierung |
| `.neos-multi` | Mehrfarbige Neos-Stilisierung |

### Neos-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.neos-glow` | Verstärkter Leuchteffekt |
| `.neos-pulse` | Pulsierender Leuchteffekt |
| `.neos-flicker` | Flackernder Leuchteffekt |
| `.neos-shadow` | Neos-Schatteneffekt |
| `.neos-scanline` | Scanline-Effekt für Retro-CRT-Look |
| `.neos-glitch` | Glitch-Effekt für digitale Störungen |
| `.neos-circuit` | Schaltkreis-Muster-Effekt |
| `.neos-grid` | Neos-Rasterhintergrund |
| `.neos-hologram` | Hologramm-ähnlicher Effekt |

### Neos-Layouts

| Klasse | Beschreibung |
|--------|-------------|
| `.neos-container` | Container mit Neos-Stilisierung |
| `.neos-panel` | Panel mit Neos-Stilisierung |
| `.neos-terminal` | Terminal-ähnliches Element |
| `.neos-dashboard` | Dashboard mit Neos-Stilisierung |
| `.neos-hud` | Head-up-Display-Stil |

## Beispiele

### Neos-Button

```html
<button class="neos-button neos-cyan">
  <span class="neos-button-text">Neos Button</span>
</button>

<style>
  .neos-button {
    padding: 0.8em 2em;
    border: 2px solid var(--neos-cyan-color);
    background-color: transparent;
    color: var(--neos-cyan-color);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    box-shadow: 0 0 10px 0 var(--neos-cyan-glow);
  }
  
  .neos-button:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--neos-cyan-rgb), 0.4),
      transparent
    );
    transition: all 0.5s;
  }
  
  .neos-button:hover:before {
    left: 100%;
  }
  
  .neos-button:hover {
    background-color: rgba(var(--neos-cyan-rgb), 0.1);
    box-shadow: 0 0 20px 5px var(--neos-cyan-glow);
  }
</style>
```

### Neos-Karte

```html
<div class="neos-card neos-purple">
  <div class="neos-card-header">
    <h3 class="neos-text">Neos Card</h3>
  </div>
  <div class="neos-card-body">
    <p>Dieser Inhalt wird im futuristischen Neos-Stil dargestellt.</p>
  </div>
  <div class="neos-card-footer">
    <button class="neos-button neos-purple">Mehr erfahren</button>
  </div>
</div>

<style>
  .neos-card {
    background-color: rgba(10, 10, 15, 0.8);
    border: 1px solid var(--neos-purple-color);
    border-radius: 4px;
    box-shadow: 0 0 15px 0 var(--neos-purple-glow);
    padding: 0;
    overflow: hidden;
    max-width: 350px;
  }
  
  .neos-card-header {
    background-color: rgba(var(--neos-purple-rgb), 0.1);
    padding: 1rem;
    border-bottom: 1px solid var(--neos-purple-color);
  }
  
  .neos-card-body {
    padding: 1.5rem;
    color: #e0e0e0;
  }
  
  .neos-card-footer {
    padding: 1rem;
    border-top: 1px solid var(--neos-purple-color);
    text-align: right;
  }
</style>
```

### Neos-Terminal

```html
<div class="neos-terminal neos-green">
  <div class="neos-terminal-header">
    <div class="neos-terminal-controls">
      <span class="neos-terminal-control"></span>
      <span class="neos-terminal-control"></span>
      <span class="neos-terminal-control"></span>
    </div>
    <div class="neos-terminal-title">Terminal</div>
  </div>
  <div class="neos-terminal-body">
    <div class="neos-terminal-line">$ system_init</div>
    <div class="neos-terminal-line">Initialisiere System...</div>
    <div class="neos-terminal-line">Zugriff auf Netzwerk hergestellt</div>
    <div class="neos-terminal-line">Status: Online</div>
    <div class="neos-terminal-line neos-terminal-cursor">$</div>
  </div>
</div>

<style>
  .neos-terminal {
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid var(--neos-green-color);
    border-radius: 6px;
    box-shadow: 0 0 20px 0 var(--neos-green-glow);
    font-family: 'Source Code Pro', monospace;
    max-width: 600px;
    overflow: hidden;
  }
  
  .neos-terminal-header {
    background-color: rgba(var(--neos-green-rgb), 0.1);
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--neos-green-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .neos-terminal-controls {
    display: flex;
    gap: 8px;
  }
  
  .neos-terminal-control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #555;
  }
  
  .neos-terminal-control:first-child {
    background-color: #ff5f57;
  }
  
  .neos-terminal-control:nth-child(2) {
    background-color: #ffbd2e;
  }
  
  .neos-terminal-control:nth-child(3) {
    background-color: #28ca41;
  }
  
  .neos-terminal-title {
    color: var(--neos-green-color);
    font-size: 0.8rem;
  }
  
  .neos-terminal-body {
    padding: 1rem;
    color: var(--neos-green-color);
    min-height: 200px;
  }
  
  .neos-terminal-line {
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  
  .neos-terminal-cursor:after {
    content: "■";
    animation: cursor-blink 1s infinite;
  }
  
  @keyframes cursor-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
```

### Neos-Dashboard

```html
<div class="neos-dashboard">
  <div class="neos-dashboard-header">
    <h2 class="neos-text neos-blue">Neos Dashboard</h2>
    <div class="neos-dashboard-controls">
      <button class="neos-button neos-blue neos-small">Refresh</button>
      <button class="neos-button neos-blue neos-small">Settings</button>
    </div>
  </div>
  
  <div class="neos-dashboard-grid">
    <div class="neos-panel neos-cyan">
      <div class="neos-panel-header">
        <h3 class="neos-text">System Status</h3>
      </div>
      <div class="neos-panel-body">
        <div class="neos-stat">
          <div class="neos-stat-label">CPU</div>
          <div class="neos-progress">
            <div class="neos-progress-bar" style="width: 65%"></div>
          </div>
          <div class="neos-stat-value">65%</div>
        </div>
        
        <div class="neos-stat">
          <div class="neos-stat-label">Memory</div>
          <div class="neos-progress">
            <div class="neos-progress-bar" style="width: 42%"></div>
          </div>
          <div class="neos-stat-value">42%</div>
        </div>
        
        <div class="neos-stat">
          <div class="neos-stat-label">Network</div>
          <div class="neos-progress">
            <div class="neos-progress-bar" style="width: 89%"></div>
          </div>
          <div class="neos-stat-value">89%</div>
        </div>
      </div>
    </div>
    
    <div class="neos-panel neos-magenta">
      <div class="neos-panel-header">
        <h3 class="neos-text">Aktivität</h3>
      </div>
      <div class="neos-panel-body">
        <div class="neos-activity-log">
          <div class="neos-activity-item">
            <span class="neos-activity-time">10:42</span>
            <span class="neos-activity-text">System-Update abgeschlossen</span>
          </div>
          <div class="neos-activity-item">
            <span class="neos-activity-time">10:31</span>
            <span class="neos-activity-text">Neue Verbindung hergestellt</span>
          </div>
          <div class="neos-activity-item">
            <span class="neos-activity-time">10:15</span>
            <span class="neos-activity-text">Daten synchronisiert</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="neos-panel neos-yellow">
      <div class="neos-panel-header">
        <h3 class="neos-text">Benachrichtigungen</h3>
      </div>
      <div class="neos-panel-body">
        <div class="neos-notification">
          <div class="neos-notification-icon">!</div>
          <div class="neos-notification-content">
            <div class="neos-notification-title">System-Warnung</div>
            <div class="neos-notification-message">Speichernutzung über 80%</div>
          </div>
        </div>
        
        <div class="neos-notification">
          <div class="neos-notification-icon">i</div>
          <div class="neos-notification-content">
            <div class="neos-notification-title">Info</div>
            <div class="neos-notification-message">5 neue Updates verfügbar</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .neos-dashboard {
    background-color: rgba(10, 10, 20, 0.9);
    border: 1px solid var(--neos-blue-color);
    border-radius: 8px;
    box-shadow: 0 0 30px 0 var(--neos-blue-glow);
    overflow: hidden;
    padding: 1rem;
  }
  
  .neos-dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .neos-dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .neos-panel {
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .neos-panel-header {
    padding: 0.8rem;
    border-bottom: 1px solid;
  }
  
  .neos-panel-body {
    padding: 1rem;
  }
  
  .neos-stat {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #e0e0e0;
  }
  
  .neos-stat-label {
    width: 80px;
  }
  
  .neos-progress {
    flex: 1;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  
  .neos-progress-bar {
    height: 100%;
    background-color: currentColor;
  }
  
  .neos-stat-value {
    width: 50px;
    text-align: right;
  }
  
  .neos-activity-log {
    color: #e0e0e0;
  }
  
  .neos-activity-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .neos-activity-time {
    font-weight: bold;
    margin-right: 0.5rem;
    color: var(--neos-magenta-color);
  }
  
  .neos-notification {
    display: flex;
    padding: 0.8rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    margin-bottom: 0.8rem;
    color: #e0e0e0;
  }
  
  .neos-notification-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--neos-yellow-color);
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 0.8rem;
  }
  
  .neos-notification-title {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
</style>
```

## Anpassung

Die Neos-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Basisfarben */
  --neos-cyan-color: #00ffff;
  --neos-cyan-rgb: 0, 255, 255;
  --neos-cyan-glow: rgba(0, 255, 255, 0.6);
  
  --neos-magenta-color: #ff00ff;
  --neos-magenta-rgb: 255, 0, 255;
  --neos-magenta-glow: rgba(255, 0, 255, 0.6);
  
  --neos-yellow-color: #ffff00;
  --neos-yellow-rgb: 255, 255, 0;
  --neos-yellow-glow: rgba(255, 255, 0, 0.6);
  
  --neos-green-color: #00ff00;
  --neos-green-rgb: 0, 255, 0;
  --neos-green-glow: rgba(0, 255, 0, 0.6);
  
  --neos-blue-color: #0088ff;
  --neos-blue-rgb: 0, 136, 255;
  --neos-blue-glow: rgba(0, 136, 255, 0.6);
  
  --neos-purple-color: #9900ff;
  --neos-purple-rgb: 153, 0, 255;
  --neos-purple-glow: rgba(153, 0, 255, 0.6);
  
  --neos-red-color: #ff0055;
  --neos-red-rgb: 255, 0, 85;
  --neos-red-glow: rgba(255, 0, 85, 0.6);
  
  --neos-orange-color: #ff6600;
  --neos-orange-rgb: 255, 102, 0;
  --neos-orange-glow: rgba(255, 102, 0, 0.6);
  
  /* Effekt-Parameter */
  --neos-glow-intensity: 0.7;
  --neos-pulse-speed: 2s;
  --neos-flicker-speed: 0.1s;
  --neos-scanline-size: 2px;
  --neos-scanline-speed: 3s;
  --neos-grid-size: 30px;
  
  /* Textschatten */
  --neos-text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  
  /* Hintergrund */
  --neos-bg-color: rgba(10, 10, 20, 0.95);
}
```

## Barrierefreiheit

Bei der Verwendung von Neos-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie trotz leuchtender Effekte einen ausreichenden Kontrast sicher
2. **Flackernde Effekte**: Vermeiden Sie übermäßig flackernde Effekte für Menschen mit Empfindlichkeiten
3. **Alternative Stile**: Bieten Sie eine nicht-Neos Version für Nutzer, die reduzierte Bewegung bevorzugen

```css
/* Alternative Stile für reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .neos-pulse, 
  .neos-flicker, 
  .neos-scanline, 
  .neos-glitch {
    animation: none !important;
  }
  
  .neos-button:before {
    display: none;
  }
}

/* Verbesserter Kontrast für bessere Lesbarkeit */
.neos-text {
  font-weight: bold;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
}
```

## Browser-Kompatibilität

Die Neos-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser werden alternative Stiloptionen angeboten. 