---
title: Muster & Texturen
category: Effects
---

# Muster & Texturen

Die Muster- und Textur-Effekte der Casoon UI Library bieten eine umfassende Sammlung von visuellen Hintergrundmustern und Texturen, die Ihren UI-Elementen zusätzliche Tiefe und visuelle Komplexität verleihen.

## Überblick

Die Muster- und Textur-Effekte sind leistungsoptimiert und in verschiedenen Stilen verfügbar. Sie können verwendet werden, um Hintergründe interessanter zu gestalten, Abschnitte visuell zu trennen und Ihrem Design mehr Charakter zu verleihen.

## Installation

Importieren Sie das Muster- und Textur-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/patterns.css';
```

## Grundlegende Muster

### Geometrische Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-grid` | Einfaches Rastermuster |
| `.pattern-dots` | Punktmuster |
| `.pattern-diagonal-lines` | Diagonale Linien |
| `.pattern-zigzag` | Zickzackmuster |
| `.pattern-triangles` | Dreiecksmuster |
| `.pattern-hexagons` | Sechseckmuster |

```html
<div class="card pattern-grid">Karte mit Rastermuster</div>
<div class="card pattern-dots">Karte mit Punktmuster</div>
```

### Organische Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-noise` | Rauscheffekt |
| `.pattern-waves` | Wellenmuster |
| `.pattern-swirl` | Wirbelmuster |
| `.pattern-marble` | Marmoreffekt |
| `.pattern-clouds` | Wolkeneffekt |

```html
<div class="card pattern-noise">Karte mit Rauscheffekt</div>
<div class="card pattern-waves">Karte mit Wellenmuster</div>
```

## Texturen

| Klasse | Beschreibung |
|--------|-------------|
| `.texture-paper` | Papier-Textur |
| `.texture-fabric` | Stoff-Textur |
| `.texture-concrete` | Beton-Textur |
| `.texture-wood` | Holz-Textur |
| `.texture-leather` | Leder-Textur |
| `.texture-brushed-metal` | Gebürstetes Metall |

```html
<div class="card texture-paper">Karte mit Papier-Textur</div>
<div class="card texture-wood">Karte mit Holz-Textur</div>
```

## Muster-Intensität

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-subtle` | Subtiles, dezentes Muster |
| `.pattern-medium` | Muster mit mittlerer Intensität |
| `.pattern-strong` | Auffälliges, starkes Muster |

```html
<div class="card pattern-grid pattern-subtle">Karte mit subtilem Rastermuster</div>
<div class="card pattern-grid pattern-strong">Karte mit starkem Rastermuster</div>
```

## Muster-Größe

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-size-sm` | Kleines Muster |
| `.pattern-size-md` | Mittelgroßes Muster (Standard) |
| `.pattern-size-lg` | Großes Muster |
| `.pattern-size-xl` | Extra großes Muster |

```html
<div class="card pattern-dots pattern-size-sm">Karte mit kleinem Punktmuster</div>
<div class="card pattern-dots pattern-size-lg">Karte mit großem Punktmuster</div>
```

## Farbige Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-color-primary` | Muster in Primärfarbe |
| `.pattern-color-secondary` | Muster in Sekundärfarbe |
| `.pattern-color-accent` | Muster in Akzentfarbe |
| `.pattern-color-light` | Helles Muster |
| `.pattern-color-dark` | Dunkles Muster |

```html
<div class="card pattern-grid pattern-color-primary">Karte mit Primärfarben-Raster</div>
<div class="card pattern-dots pattern-color-accent">Karte mit Akzentfarben-Punkten</div>
```

## Muster-Überlagerungen

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-overlay` | Muster als Überlagerung |
| `.pattern-overlay-light` | Helle Muster-Überlagerung |
| `.pattern-overlay-dark` | Dunkle Muster-Überlagerung |

```html
<div class="image-container">
  <img src="image.jpg" alt="Bild mit Muster">
  <div class="pattern-overlay pattern-dots"></div>
</div>
```

## Mischbare Muster

Muster können miteinander kombiniert werden, um komplexere Effekte zu erzielen:

```html
<div class="card pattern-grid pattern-overlay pattern-color-primary">
  <div class="inner-content pattern-dots pattern-size-lg pattern-color-accent pattern-subtle">
    Gemischte Muster
  </div>
</div>
```

## Anpassung

Die Muster- und Textur-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --pattern-color: currentColor;
  --pattern-opacity: 0.1;
  --pattern-background: transparent;
  
  --pattern-size-sm: 8px;
  --pattern-size-md: 16px;
  --pattern-size-lg: 32px;
  --pattern-size-xl: 64px;
  
  --pattern-weight-thin: 1px;
  --pattern-weight-regular: 2px;
  --pattern-weight-bold: 3px;
  
  --texture-opacity: 0.15;
  --texture-blend-mode: multiply;
}
```

## Beispiele

### Karten mit verschiedenen Mustern

```html
<div class="card-container">
  <div class="card pattern-grid pattern-color-primary">
    <h3>Raster-Muster</h3>
    <p>Mit Primärfarbe</p>
  </div>
  
  <div class="card pattern-dots pattern-size-lg pattern-color-secondary">
    <h3>Punkt-Muster</h3>
    <p>Große Punkte in Sekundärfarbe</p>
  </div>
  
  <div class="card texture-paper">
    <h3>Papier-Textur</h3>
    <p>Für einen natürlichen Look</p>
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
    background-color: white;
    width: 200px;
  }
</style>
```

### Hintergrund mit Muster

```html
<div class="hero-section pattern-hexagons pattern-size-xl pattern-color-primary pattern-subtle">
  <div class="hero-content">
    <h1>Willkommen zur Casoon UI</h1>
    <p>Eine moderne UI-Bibliothek für anspruchsvolle Webanwendungen</p>
    <button class="button">Mehr erfahren</button>
  </div>
</div>

<style>
  .hero-section {
    padding: 4rem 2rem;
    text-align: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-content {
    max-width: 600px;
  }
  
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    margin-top: 1.5rem;
  }
</style>
```

### Bild mit Muster-Überlagerung

```html
<div class="image-with-pattern">
  <img src="city.jpg" alt="Stadtbild">
  <div class="pattern-overlay pattern-dots pattern-size-md"></div>
  <div class="image-content">
    <h2>Moderne Architektur</h2>
    <p>Entdecken Sie innovative Designkonzepte</p>
  </div>
</div>

<style>
  .image-with-pattern {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 500px;
  }
  
  .image-with-pattern img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .pattern-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .image-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.5rem 1rem;
    color: white;
  }
</style>
```

## CSS-Implementierung

Die Muster werden mit CSS generiert, wobei verschiedene Techniken zum Einsatz kommen:

1. Für einfache Muster: CSS `background` mit `repeating-linear-gradient`
2. Für komplexere Muster: CSS `mask-image` und `background-image`
3. Für Texturen: Optimierte SVG-Hintergründe

Beispiel für ein Punktmuster:

```css
.pattern-dots {
  --dot-size: var(--pattern-size, var(--pattern-size-md));
  --dot-color: var(--pattern-color, currentColor);
  --dot-opacity: var(--pattern-opacity, 0.1);
  --dot-spacing: calc(var(--dot-size) * 2);
  
  background-image: radial-gradient(
    circle at center,
    var(--dot-color) 0,
    var(--dot-color) calc(var(--dot-size) / 2),
    transparent calc(var(--dot-size) / 2)
  );
  background-size: var(--dot-spacing) var(--dot-spacing);
  background-position: 0 0;
  background-repeat: repeat;
  opacity: var(--dot-opacity);
}
```

## Leistungsoptimierung

Die Muster- und Textur-Effekte sind für optimale Leistung konzipiert:

1. Verwendung von CSS-Hintergründen anstelle von zusätzlichen DOM-Elementen
2. Optimierte SVG-Dateien für komplexe Texturen
3. Vermeidung von aufwändigen Berechnungen zur Laufzeit

## Browserunterstützung

Die Muster- und Textur-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser werden vereinfachte Fallback-Muster bereitgestellt. 