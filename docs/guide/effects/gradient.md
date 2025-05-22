---
title: Gradienten-Effekte
category: Effects
---

# Gradienten-Effekte

Die Gradienten-Effekte der Casoon UI Library bieten eine umfassende Sammlung von fließenden Farbverläufen und dynamischen Übergängen für moderne UI-Elemente.

## Überblick

Die Gradienten-Effekte sind leistungsoptimiert und in verschiedenen Stilen und Richtungen verfügbar. Sie können verwendet werden, um UI-Elemente visuell interessanter zu gestalten, Tiefe zu erzeugen und visuelle Hierarchien zu etablieren.

## Installation

Importieren Sie das Gradienten-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/gradient.css';
```

## Grundlegende Gradienten

### Lineare Gradienten

Lineare Gradienten verlaufen in einer geraden Linie.

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient` | Standard-Gradient (oben nach unten) |
| `.gradient-horizontal` | Horizontaler Gradient (links nach rechts) |
| `.gradient-diagonal` | Diagonaler Gradient (oben links nach unten rechts) |
| `.gradient-diagonal-reverse` | Umgekehrter diagonaler Gradient (oben rechts nach unten links) |

```html
<div class="card gradient">Vertikaler Gradient</div>
<div class="card gradient-horizontal">Horizontaler Gradient</div>
```

### Radiale Gradienten

Radiale Gradienten verlaufen von einem Zentrum nach außen.

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-radial` | Radialer Gradient (Mitte nach außen) |
| `.gradient-radial-top` | Radialer Gradient vom oberen Rand |
| `.gradient-radial-bottom` | Radialer Gradient vom unteren Rand |

```html
<div class="card gradient-radial">Radialer Gradient</div>
```

### Conische Gradienten

Conische Gradienten verlaufen kreisförmig um einen Mittelpunkt.

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-conic` | Conischer Gradient vom Mittelpunkt |
| `.gradient-conic-top` | Conischer Gradient vom oberen Rand |
| `.gradient-conic-bottom` | Conischer Gradient vom unteren Rand |

```html
<div class="card gradient-conic">Conischer Gradient</div>
```

## Farbvarianten

Die Gradienten sind in verschiedenen Farbvarianten verfügbar, die auf den Themenvariablen basieren:

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-color-primary` | Gradient mit Primärfarben |
| `.gradient-color-secondary` | Gradient mit Sekundärfarben |
| `.gradient-color-accent` | Gradient mit Akzentfarben |
| `.gradient-color-success` | Gradient mit Erfolgsfarben |
| `.gradient-color-error` | Gradient mit Fehlerfarben |
| `.gradient-color-warning` | Gradient mit Warnfarben |
| `.gradient-color-info` | Gradient mit Infofarben |

```html
<div class="card gradient gradient-color-primary">Primärfarben-Gradient</div>
<div class="card gradient gradient-color-accent">Akzentfarben-Gradient</div>
```

## Mehrfarbige Gradienten

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-rainbow` | Regenbogen-Gradient mit mehreren Farben |
| `.gradient-sunset` | Sonnenuntergangs-Gradient (Orange zu Lila) |
| `.gradient-ocean` | Ozean-Gradient (Blautöne) |
| `.gradient-forest` | Wald-Gradient (Grüntöne) |
| `.gradient-fire` | Feuer-Gradient (Rot zu Gelb) |

```html
<div class="card gradient-rainbow">Regenbogen-Gradient</div>
<div class="card gradient-sunset">Sonnenuntergangs-Gradient</div>
```

## Gradienten-Intensität

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-subtle` | Subtiler Gradient mit geringem Kontrast |
| `.gradient-strong` | Starker Gradient mit hohem Kontrast |
| `.gradient-faded` | Verblasster Gradient mit transparentem Ende |

```html
<div class="card gradient gradient-subtle">Subtiler Gradient</div>
<div class="card gradient gradient-strong">Starker Gradient</div>
```

## Text-Gradienten

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-text` | Text mit Farbverlauf |
| `.gradient-text-rainbow` | Text mit Regenbogen-Farbverlauf |
| `.gradient-text-primary` | Text mit Primärfarben-Farbverlauf |

```html
<h2 class="gradient-text">Überschrift mit Farbverlauf</h2>
<h2 class="gradient-text-rainbow">Regenbogen-Überschrift</h2>
```

## Interaktive Gradienten

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-hover` | Gradient ändert sich bei Hover |
| `.gradient-active` | Gradient ändert sich bei aktivem Zustand |
| `.gradient-shift` | Gradient verschiebt sich kontinuierlich (Animation) |

```html
<div class="card gradient-hover">Hover für Gradient-Änderung</div>
<div class="card gradient-shift">Animierter Gradient</div>
```

## Gradienten-Überlagerungen

| Klasse | Beschreibung |
|--------|-------------|
| `.gradient-overlay` | Gradient als Überlagerung für Hintergrundbilder |
| `.gradient-overlay-top` | Gradient-Überlagerung von oben |
| `.gradient-overlay-bottom` | Gradient-Überlagerung von unten |

```html
<div class="image-container">
  <img src="image.jpg" alt="Bild mit Gradient">
  <div class="gradient-overlay-bottom"></div>
</div>
```

## Anpassung

Die Gradienten-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --gradient-start: var(--color-primary-300);
  --gradient-end: var(--color-primary-700);
  
  --gradient-angle: 180deg;
  --gradient-position: center;
  
  --gradient-rainbow-colors: #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee;
  --gradient-sunset-colors: #ff7e5f, #feb47b;
  --gradient-ocean-colors: #2193b0, #6dd5ed;
  --gradient-forest-colors: #11998e, #38ef7d;
  --gradient-fire-colors: #ff416c, #ff4b2b;
  
  --gradient-shift-speed: 3s;
  --gradient-hover-transition: 0.3s ease;
}
```

## Beispiele

### Karten mit verschiedenen Gradienten

```html
<div class="card-container">
  <div class="card gradient gradient-color-primary">
    <h3>Primärer Gradient</h3>
    <p>Vertikaler Farbverlauf</p>
  </div>
  
  <div class="card gradient-horizontal gradient-color-secondary">
    <h3>Sekundärer Gradient</h3>
    <p>Horizontaler Farbverlauf</p>
  </div>
  
  <div class="card gradient-radial gradient-color-accent">
    <h3>Akzent Gradient</h3>
    <p>Radialer Farbverlauf</p>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }
  
  .card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    color: white;
    width: 200px;
  }
</style>
```

### Regenbogen-Überschrift

```html
<h1 class="gradient-text-rainbow">Willkommen zur Casoon UI Library</h1>

<style>
  .gradient-text-rainbow {
    font-size: 2.5rem;
    font-weight: bold;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
  }
</style>
```

### Bild mit Gradient-Überlagerung

```html
<div class="image-with-overlay">
  <img src="landscape.jpg" alt="Landschaft">
  <div class="gradient-overlay-bottom">
    <h3>Bildunterschrift</h3>
    <p>Beschreibungstext über dem Gradienten</p>
  </div>
</div>

<style>
  .image-with-overlay {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 500px;
  }
  
  .image-with-overlay img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .gradient-overlay-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.5rem 1rem;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }
</style>
```

## Leistungsoptimierung

Die Gradienten-Effekte sind für optimale Leistung konzipiert:

1. Verwendung von `background-image` anstelle von mehreren DOM-Elementen
2. Beschränkung der animierten Gradienten auf nicht-kritische UI-Elemente
3. Vermeidung von komplexen Gradienten auf mobilen Geräten

## Browserunterstützung

Die Gradienten-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser wird ein Fallback mit einfachen Farbverläufen bereitgestellt. 