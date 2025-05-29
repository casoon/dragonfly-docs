---
title: Glow Effects
category: Effects
---

# Glow-Effekte

Die Glow-Effekte der Casoon UI Library bieten eine Sammlung von leuchtenden und strahlenden visuellen Effekten, die Elementen eine ansprechende Tiefe und visuelle Aufmerksamkeit verleihen, ideal für moderne und energiereiche Benutzeroberflächen.

## Überblick

Glow-Effekte nutzen CSS-Schatten und Farbverläufe, um ein strahlendes, leuchtendes Erscheinungsbild zu erzeugen. Sie können verwendet werden, um wichtige Elemente hervorzuheben, visuelle Hierarchien zu schaffen und interaktive Zustände zu verdeutlichen. Diese Effekte verleihen Ihrer Benutzeroberfläche einen modernen, dynamischen Look.

## Installation

Importieren Sie das Glow-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/glow.css';
```

## Verfügbare Klassen

### Grundlegende Glow-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.glow` | Standardmäßiger Glow-Effekt mit weißem Leuchten |
| `.glow-sm` | Kleiner Glow-Effekt mit geringerem Radius |
| `.glow-md` | Mittlerer Glow-Effekt (Standard) |
| `.glow-lg` | Großer Glow-Effekt mit größerem Radius |
| `.glow-xl` | Extra großer Glow-Effekt für dramatische Wirkung |
| `.glow-soft` | Weicher, diffuser Glow-Effekt |
| `.glow-sharp` | Schärferer, intensiverer Glow-Effekt |
| `.glow-intense` | Sehr intensiver, auffälliger Glow-Effekt |
| `.glow-inner` | Nach innen gerichteter Glow-Effekt |
| `.glow-outer` | Nach außen gerichteter Glow-Effekt (Standard) |
| `.glow-both` | Kombinierter innerer und äußerer Glow-Effekt |

### Glow-Farbvarianten

| Klasse | Beschreibung |
|--------|-------------|
| `.glow-primary` | Glow-Effekt in Primärfarbe |
| `.glow-secondary` | Glow-Effekt in Sekundärfarbe |
| `.glow-success` | Glow-Effekt in Erfolgsfarbe (grün) |
| `.glow-warning` | Glow-Effekt in Warnfarbe (gelb/orange) |
| `.glow-danger` | Glow-Effekt in Gefahrenfarbe (rot) |
| `.glow-info` | Glow-Effekt in Informationsfarbe (blau) |
| `.glow-white` | Weißer Glow-Effekt |
| `.glow-blue` | Blauer Glow-Effekt |
| `.glow-green` | Grüner Glow-Effekt |
| `.glow-red` | Roter Glow-Effekt |
| `.glow-purple` | Violetter Glow-Effekt |
| `.glow-cyan` | Cyan-farbener Glow-Effekt |
| `.glow-pink` | Rosa Glow-Effekt |
| `.glow-amber` | Bernsteinfarbener Glow-Effekt |
| `.glow-teal` | Türkisfarbener Glow-Effekt |

### Interaktive Glow-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.glow-hover` | Zeigt Glow-Effekt bei Hover an |
| `.glow-active` | Zeigt Glow-Effekt im aktiven Zustand an |
| `.glow-focus` | Zeigt Glow-Effekt bei Fokus an |
| `.glow-pulse` | Pulsierender Glow-Effekt |
| `.glow-breathe` | Sanft atmender Glow-Effekt |
| `.glow-flash` | Kurz aufblitzender Glow-Effekt |
| `.glow-fade-in` | Langsam einblendender Glow-Effekt |
| `.glow-fade-out` | Langsam ausblendender Glow-Effekt |

### Element-spezifische Glow-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.glow-text` | Glow-Effekt für Text |
| `.glow-button` | Glow-Effekt für Buttons |
| `.glow-card` | Glow-Effekt für Karten |
| `.glow-icon` | Glow-Effekt für Icons |
| `.glow-input` | Glow-Effekt für Eingabefelder |
| `.glow-image` | Glow-Effekt für Bilder |
| `.glow-border` | Glow-Effekt nur für Ränder |
| `.glow-nav` | Glow-Effekt für Navigationselemente |
| `.glow-badge` | Glow-Effekt für Badges |

## Beispiele

### Grundlegende Glow-Effekte

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow">Standard Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-sm">Small Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-lg">Large Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-xl">Extra Large Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-soft">Soft Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-sharp">Sharp Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-intense">Intense Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-inner">Inner Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-both">Inner & Outer Glow</button>
  </div>
</div>

<style>
  .glow-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
  }
  
  .glow-example {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
```

### Farbige Glow-Effekte

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow-primary">Primary Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-success">Success Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-warning">Warning Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-danger">Danger Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-info">Info Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-purple">Purple Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-cyan">Cyan Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-pink">Pink Glow</button>
  </div>
</div>
```

### Interaktive Glow-Effekte

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow-hover">Hover Me</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-active">Click Me</button>
  </div>
  
  <div class="glow-example">
    <input type="text" class="glow-focus" placeholder="Focus Me">
  </div>
  
  <div class="glow-example">
    <button class="glow-pulse">Pulsing Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-breathe">Breathing Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-flash">Flashing Glow</button>
  </div>
</div>

<style>
  input.glow-focus {
    padding: 0.8rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
    width: 100%;
  }
  
  input.glow-focus::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
```

### Glow-Texte und -Elemente

```html
<div class="glow-elements">
  <h2 class="glow-text glow-cyan">Leuchtender Titel</h2>
  
  <div class="glow-card glow-soft">
    <h3>Glow Card</h3>
    <p>Diese Karte hat einen weichen Glow-Effekt.</p>
    <button class="glow-button glow-sharp">Mehr erfahren</button>
  </div>
  
  <div class="glow-icons">
    <span class="glow-icon glow-red"><i class="icon-heart"></i></span>
    <span class="glow-icon glow-blue"><i class="icon-star"></i></span>
    <span class="glow-icon glow-green"><i class="icon-check"></i></span>
    <span class="glow-icon glow-purple"><i class="icon-bell"></i></span>
  </div>
  
  <div class="glow-nav-example">
    <nav class="glow-nav">
      <a href="#" class="active">Home</a>
      <a href="#">Über uns</a>
      <a href="#">Produkte</a>
      <a href="#">Kontakt</a>
    </nav>
  </div>
</div>

<style>
  .glow-elements {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
    color: white;
  }
  
  .glow-text {
    text-align: center;
    font-size: 2.5rem;
    margin: 0;
  }
  
  .glow-card {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .glow-card h3 {
    margin-top: 0;
  }
  
  .glow-card p {
    margin-bottom: 1.5rem;
  }
  
  .glow-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .glow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.5rem;
  }
  
  .glow-nav-example {
    display: flex;
    justify-content: center;
  }
  
  .glow-nav {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .glow-nav a {
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .glow-nav a.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
```

### Kreative Glow-Kompositionen

```html
<div class="glow-compositions">
  <div class="glow-composition">
    <div class="glow-orb glow-lg glow-cyan"></div>
    <div class="glow-orb glow-sm glow-pink"></div>
    <div class="glow-orb glow-md glow-purple"></div>
  </div>
  
  <div class="glow-text-showcase">
    <h1 class="glow-text-gradient">
      <span class="glow-text glow-blue">Casoon</span>
      <span class="glow-text glow-cyan">UI</span>
      <span class="glow-text glow-purple">Library</span>
    </h1>
  </div>
  
  <div class="glow-buttons-showcase">
    <button class="glow-button glow-border glow-primary">Primär</button>
    <button class="glow-button glow-border glow-success">Erfolg</button>
    <button class="glow-button glow-border glow-warning">Warnung</button>
    <button class="glow-button glow-border glow-danger">Gefahr</button>
  </div>
</div>

<style>
  .glow-compositions {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
    background-color: #0f0f1a;
    color: white;
    min-height: 100vh;
  }
  
  .glow-composition {
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .glow-orb {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .glow-orb.glow-lg {
    width: 150px;
    height: 150px;
    left: 30%;
    top: 25%;
  }
  
  .glow-orb.glow-md {
    width: 100px;
    height: 100px;
    right: 35%;
    bottom: 20%;
  }
  
  .glow-orb.glow-sm {
    width: 60px;
    height: 60px;
    right: 30%;
    top: 30%;
  }
  
  .glow-text-showcase {
    text-align: center;
  }
  
  .glow-text-gradient {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: 800;
  }
  
  .glow-buttons-showcase {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .glow-button.glow-border {
    background-color: transparent;
    padding: 1rem 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>
```

## Anpassung

Die Glow-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Glow-Parameter */
  --glow-opacity: 0.6;
  --glow-blur-radius: 15px;
  --glow-spread-radius: 5px;
  --glow-color: rgba(255, 255, 255, var(--glow-opacity));
  
  /* Glow-Größenvarianten */
  --glow-sm-blur: 8px;
  --glow-sm-spread: 2px;
  --glow-md-blur: 15px;
  --glow-md-spread: 5px;
  --glow-lg-blur: 25px;
  --glow-lg-spread: 8px;
  --glow-xl-blur: 40px;
  --glow-xl-spread: 15px;
  
  /* Glow-Stilarten */
  --glow-soft-opacity: 0.4;
  --glow-sharp-opacity: 0.8;
  --glow-intense-opacity: 1;
  
  /* Farbige Glow-Varianten */
  --glow-primary-color: #4f46e5;
  --glow-secondary-color: #64748b;
  --glow-success-color: #10b981;
  --glow-warning-color: #f59e0b;
  --glow-danger-color: #ef4444;
  --glow-info-color: #0ea5e9;
  --glow-white-color: #ffffff;
  --glow-blue-color: #3b82f6;
  --glow-green-color: #22c55e;
  --glow-red-color: #f43f5e;
  --glow-purple-color: #8b5cf6;
  --glow-cyan-color: #06b6d4;
  --glow-pink-color: #ec4899;
  --glow-amber-color: #f59e0b;
  --glow-teal-color: #14b8a6;
  
  /* Animationsparameter */
  --glow-pulse-duration: 2s;
  --glow-breathe-duration: 4s;
  --glow-flash-duration: 0.5s;
  --glow-fade-duration: 1s;
}
```

## CSS-Implementierung

Der grundlegende Glow-Effekt wird durch CSS-Schatten implementiert:

```css
/* Grundlegender Glow-Effekt */
.glow {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Größenvarianten */
.glow-sm {
  box-shadow: 0 0 var(--glow-sm-blur) var(--glow-sm-spread) var(--glow-color);
}

.glow-lg {
  box-shadow: 0 0 var(--glow-lg-blur) var(--glow-lg-spread) var(--glow-color);
}

.glow-xl {
  box-shadow: 0 0 var(--glow-xl-blur) var(--glow-xl-spread) var(--glow-color);
}

/* Stilarten */
.glow-soft {
  --glow-opacity: var(--glow-soft-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-sharp {
  --glow-opacity: var(--glow-sharp-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-intense {
  --glow-opacity: var(--glow-intense-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Richtungsvarianten */
.glow-inner {
  box-shadow: inset 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-both {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color),
              inset 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Farbige Varianten */
.glow-primary {
  --glow-color: rgba(var(--glow-primary-color-rgb), var(--glow-opacity));
}

/* Weitere farbige Varianten... */

/* Interaktive Zustände */
.glow-hover {
  transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Weitere interaktive Zustände... */

/* Animierte Glow-Effekte */
.glow-pulse {
  animation: glow-pulse-animation var(--glow-pulse-duration) infinite ease-in-out;
}

@keyframes glow-pulse-animation {
  0%, 100% {
    box-shadow: 0 0 var(--glow-sm-blur) var(--glow-sm-spread) var(--glow-color);
  }
  50% {
    box-shadow: 0 0 var(--glow-lg-blur) var(--glow-lg-spread) var(--glow-color);
  }
}

/* Weitere Animationen... */
```

## Anwendungsfälle

### Glow für Fokuszustände

```css
.form-control:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--glow-primary-color);
}
```

### Glow für Call-to-Action-Buttons

```css
.cta-button {
  background-color: var(--glow-primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: 0 0 var(--glow-lg-blur) var(--glow-sm-spread) var(--glow-primary-color);
}
```

### Glow für Texthighlights

```css
.highlight-text {
  position: relative;
  color: white;
  z-index: 1;
}

.highlight-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--glow-primary-color);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
}
```

## Barrierefreiheit

Bei der Verwendung von Glow-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund trotz Glow-Effekt ausreichend ist
2. **Animationen**: Bieten Sie eine Option zum Deaktivieren von animierten Glow-Effekten für Nutzer mit Empfindlichkeiten
3. **Fokus-Indikatoren**: Glow-Effekte können als Fokus-Indikatoren dienen, sollten aber deutlich erkennbar sein

```css
/* Verbesserte Fokus-Indikatoren mit Glow */
:focus {
  outline: 2px solid white;
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Reduzierte Bewegung für animierte Glow-Effekte */
@media (prefers-reduced-motion: reduce) {
  .glow-pulse,
  .glow-breathe,
  .glow-flash {
    animation: none !important;
  }
}
```

## Performance-Optimierung

Glow-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Begrenzen Sie die Anzahl**: Verwenden Sie Glow-Effekte sparsam auf einer Seite
2. **Reduzieren Sie die Größe**: Verwenden Sie für große Flächen kleinere Blur- und Spread-Radien
3. **Vermeiden Sie Animationen auf niedrigen Geräten**: Prüfen Sie die Geräteleistung, bevor Sie animierte Glow-Effekte verwenden
4. **Verwenden Sie will-change**: Nutzen Sie `will-change: box-shadow` für animierte Glow-Effekte

```css
/* Performance-Optimierung für Glow-Effekte */
.glow-optimized {
  will-change: box-shadow;
}

/* Bedingte Animationen basierend auf Browser-Unterstützung */
@supports (animation-timeline: scroll()) {
  .glow-advanced-animation {
    animation: advanced-glow-effect 2s infinite;
  }
}
```

## Browser-Kompatibilität

Die Glow-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| animation | ✓ | ✓ | ✓ | ✓ | Teilweise |
| filter (blur) | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Effekte nicht vollständig unterstützen, werden vereinfachte Fallback-Stile bereitgestellt. 