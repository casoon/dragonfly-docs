---
title: Neon-Effekte
category: Guide
---

# Neon-Effekte

Die `neon.css` Datei bietet leuchtende Neon-Effekte für Text, Rahmen und Elemente in Ihrer Benutzeroberfläche. Diese Effekte erzeugen strahlende, lebendige Highlights, die an Neonröhren erinnern und Ihrer UI eine moderne, cyberpunkartige Ästhetik verleihen können.

## Übersicht

Neon-Effekte verwenden leuchtende Farben mit Glow-Effekten (Textschatten oder Box-Schatten), um das Erscheinungsbild von leuchtendem Neon zu simulieren. Die Casoon UI Library bietet eine umfassende Sammlung von Neon-Effekten für verschiedene UI-Elemente.

## Basis-Neon-Effekte

```html
<!-- Neon-Text (Standard-Primärfarbe) -->
<div class="neon-text">Leuchtender Neon-Text</div>

<!-- Neon-Rahmen -->
<div class="neon-border">Element mit Neon-Rahmen</div>

<!-- Neon-Glow (Hintergrundleuchten) -->
<div class="neon-glow">Element mit Neon-Hintergrundleuchten</div>

<!-- Neon-Box (Text und Rahmen) -->
<div class="neon-box">Element mit Neon-Text und Rahmen</div>
```

## Farbvarianten

Die Neon-Effekte sind in verschiedenen vordefinierten Farben verfügbar:

```html
<!-- Neon-Textfarben -->
<div class="neon-text-primary">Primärfarben-Neon</div>
<div class="neon-text-secondary">Sekundärfarben-Neon</div>
<div class="neon-text-accent">Akzentfarben-Neon</div>
<div class="neon-text-success">Erfolgs-Neon</div>
<div class="neon-text-warning">Warnungs-Neon</div>
<div class="neon-text-error">Fehler-Neon</div>
<div class="neon-text-info">Info-Neon</div>

<!-- Klassische Neon-Farben -->
<div class="neon-text-blue">Blaues Neon</div>
<div class="neon-text-green">Grünes Neon</div>
<div class="neon-text-red">Rotes Neon</div>
<div class="neon-text-pink">Pinkes Neon</div>
<div class="neon-text-purple">Violettes Neon</div>
<div class="neon-text-orange">Oranges Neon</div>
<div class="neon-text-teal">Türkises Neon</div>
<div class="neon-text-yellow">Gelbes Neon</div>
```

## Intensitätsvarianten

Die Neon-Effekte sind in verschiedenen Intensitätsstufen verfügbar:

```html
<!-- Neon-Text-Intensitäten -->
<div class="neon-text-sm">Subtiler Neon-Effekt</div>
<div class="neon-text-md">Standard-Neon-Effekt</div>
<div class="neon-text-lg">Starker Neon-Effekt</div>
<div class="neon-text-xl">Extra starker Neon-Effekt</div>

<!-- Neon-Rahmen-Intensitäten -->
<div class="neon-border-sm">Subtiler Neon-Rahmen</div>
<div class="neon-border-md">Standard-Neon-Rahmen</div>
<div class="neon-border-lg">Starker Neon-Rahmen</div>
<div class="neon-border-xl">Extra starker Neon-Rahmen</div>
```

## Animierte Neon-Effekte

```html
<!-- Pulsierende Neon-Effekte -->
<div class="neon-text-pulse">Pulsierender Neon-Text</div>
<div class="neon-border-pulse">Pulsierender Neon-Rahmen</div>

<!-- Flackernde Neon-Effekte -->
<div class="neon-text-flicker">Flackernder Neon-Text</div>
<div class="neon-border-flicker">Flackernder Neon-Rahmen</div>

<!-- Atmende Neon-Effekte -->
<div class="neon-text-breathe">Atmender Neon-Text</div>
<div class="neon-border-breathe">Atmender Neon-Rahmen</div>

<!-- Langsame/Schnelle Animationen -->
<div class="neon-text-pulse-slow">Langsam pulsierender Neon-Text</div>
<div class="neon-text-pulse-fast">Schnell pulsierender Neon-Text</div>
```

## Interaktive Neon-Effekte

Neon-Effekte können für interaktive Elemente und bei bestimmten Zuständen aktiviert werden:

```html
<!-- Hover-aktivierte Neon-Effekte -->
<div class="neon-text-hover">Text leuchtet bei Hover</div>
<div class="neon-border-hover">Rahmen leuchtet bei Hover</div>
<div class="neon-glow-hover">Hintergrund leuchtet bei Hover</div>

<!-- Fokus-aktivierte Neon-Effekte -->
<button class="neon-text-focus">Leuchtet bei Fokus</button>
<input class="neon-border-focus" placeholder="Rahmen leuchtet bei Fokus">

<!-- Aktiv-Zustands-Neon-Effekte -->
<button class="neon-text-active">Leuchtet bei Aktivierung</button>
<button class="neon-border-active">Rahmen leuchtet bei Aktivierung</button>

<!-- Kombinierte Zustände -->
<button class="neon-interactive">Reagiert auf alle Interaktionen</button>
```

## Komponenten-spezifische Neon-Effekte

Für häufig verwendete UI-Komponenten gibt es spezialisierte Neon-Klassen:

```html
<!-- Neon-Buttons -->
<button class="button neon-button">Neon-Button</button>
<button class="button neon-button-primary">Primärer Neon-Button</button>
<button class="button neon-button-secondary">Sekundärer Neon-Button</button>

<!-- Neon-Karte -->
<div class="card neon-card">
  <div class="card-header">Neon-Karten-Header</div>
  <div class="card-body">Neon-Karten-Inhalt</div>
  <div class="card-footer">Neon-Karten-Footer</div>
</div>

<!-- Neon-Badges -->
<span class="badge neon-badge">Neu</span>
<span class="badge neon-badge-primary">Premium</span>

<!-- Neon-Icons -->
<i class="icon neon-icon">★</i>
```

## Kombinationen mit anderen Effekten

Neon-Effekte können mit anderen Effekten kombiniert werden:

```html
<!-- Neon mit Glaseffekt -->
<div class="glass neon-border">
  <span class="neon-text">Neon-Text auf Glas</span>
</div>

<!-- Neon mit Animation -->
<div class="neon-text fade-in">Einblendender Neon-Text</div>

<!-- Neon mit Hover-Interaktion -->
<div class="neon-border-hover hover-lift">
  Neon-Rahmen mit Hover-Anhebung
</div>

<!-- Neon mit Schatten -->
<div class="neon-text shadow-lg">
  Neon-Text mit zusätzlichem Schatten
</div>
```

## Anpassung über CSS-Variablen

Die Neon-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Neon-Texteffekt-Basis */
  --neon-text-color: var(--color-primary, #0080ff);
  --neon-text-glow-sm: 0 0 2px var(--neon-text-color), 0 0 4px var(--neon-text-color);
  --neon-text-glow-md: 0 0 4px var(--neon-text-color), 0 0 8px var(--neon-text-color), 0 0 12px var(--neon-text-color);
  --neon-text-glow-lg: 0 0 6px var(--neon-text-color), 0 0 12px var(--neon-text-color), 0 0 18px var(--neon-text-color), 0 0 24px var(--neon-text-color);
  --neon-text-glow-xl: 0 0 8px var(--neon-text-color), 0 0 16px var(--neon-text-color), 0 0 24px var(--neon-text-color), 0 0 32px var(--neon-text-color), 0 0 42px var(--neon-text-color);
  
  /* Neon-Rahmeneffekt-Basis */
  --neon-border-color: var(--color-primary, #0080ff);
  --neon-border-width: 1px;
  --neon-border-glow-sm: 0 0 2px var(--neon-border-color), 0 0 4px var(--neon-border-color);
  --neon-border-glow-md: 0 0 4px var(--neon-border-color), 0 0 8px var(--neon-border-color), 0 0 12px var(--neon-border-color);
  --neon-border-glow-lg: 0 0 6px var(--neon-border-color), 0 0 12px var(--neon-border-color), 0 0 18px var(--neon-border-color), 0 0 24px var(--neon-border-color);
  --neon-border-glow-xl: 0 0 8px var(--neon-border-color), 0 0 16px var(--neon-border-color), 0 0 24px var(--neon-border-color), 0 0 32px var(--neon-border-color);
  
  /* Neon-Farben */
  --neon-color-blue: #0099ff;
  --neon-color-green: #00ff99;
  --neon-color-red: #ff3366;
  --neon-color-pink: #ff66ff;
  --neon-color-purple: #9966ff;
  --neon-color-orange: #ff9933;
  --neon-color-teal: #00cccc;
  --neon-color-yellow: #ffff00;
  
  /* Neon-Animationsparameter */
  --neon-animation-duration-normal: 2s;
  --neon-animation-duration-slow: 4s;
  --neon-animation-duration-fast: 1s;
  --neon-pulse-opacity-min: 0.6;
  --neon-flicker-sequence: 3s, 0.5s, 0.7s, 0.1s;
}
```

## Animationsdefinitionen

```css
/* Beispiel für Neon-Pulsieren */
@keyframes neon-pulse {
  0%, 100% {
    opacity: 1;
    text-shadow: var(--neon-text-glow-md);
  }
  
  50% {
    opacity: var(--neon-pulse-opacity-min);
    text-shadow: var(--neon-text-glow-sm);
  }
}

/* Beispiel für Neon-Flackern */
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    text-shadow: var(--neon-text-glow-md);
  }
  
  20%, 24%, 55% {
    opacity: var(--neon-pulse-opacity-min);
    text-shadow: var(--neon-text-glow-sm);
  }
}

/* Beispiel für Neon-Atmen */
@keyframes neon-breathe {
  0%, 100% {
    text-shadow: var(--neon-text-glow-md);
  }
  
  50% {
    text-shadow: var(--neon-text-glow-lg);
  }
}
```

## Dunkelmodus-Verstärkung

Im Dunkelmodus können Neon-Effekte verstärkt werden:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --neon-text-glow-md: 0 0 5px var(--neon-text-color), 0 0 10px var(--neon-text-color), 0 0 15px var(--neon-text-color);
    --neon-border-glow-md: 0 0 5px var(--neon-border-color), 0 0 10px var(--neon-border-color), 0 0 15px var(--neon-border-color);
  }
}
```

## Barrierefreiheit

Neon-Effekte können die Barrierefreiheit beeinträchtigen. Beachten Sie:

1. **Kontrast**: Stellen Sie sicher, dass Text mit Neon-Effekten ausreichenden Kontrast hat
2. **Flackern reduzieren**: Vermeiden Sie zu starkes Flackern, das Anfälle auslösen könnte
3. **Reduzierte Bewegung**: Respektieren Sie `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  .neon-text-pulse,
  .neon-text-flicker,
  .neon-text-breathe,
  .neon-border-pulse,
  .neon-border-flicker,
  .neon-border-breathe {
    animation: none !important;
  }
}

@media (prefers-contrast: more) {
  .neon-text {
    --neon-text-glow-md: 0 0 0 transparent;
    text-shadow: none;
    font-weight: bold;
  }
  
  .neon-border {
    --neon-border-glow-md: 0 0 0 transparent;
    box-shadow: none;
    border: 2px solid currentColor;
  }
}
```

## Performance-Optimierung

Neon-Effekte können die Rendering-Performance beeinflussen:

1. **Begrenzen Sie die Anzahl** der Neon-Elemente, insbesondere animierte
2. **Verwenden Sie `will-change`** mit Vorsicht bei animierten Neon-Effekten
3. **Vereinfachen Sie Schatten** für mobile Geräte
4. **Vermeiden Sie Neon-Effekte auf großen Flächen**

## Praktische Beispiele

### Neon-Button mit Hover-Effekt

```html
<button class="button neon-button-primary neon-border-hover">
  <span class="neon-text-hover">Kaufen</span>
</button>
```

### Neon-Titel mit Animation

```html
<header class="page-header">
  <h1 class="neon-text-primary neon-text-pulse">
    Cyberpunk 2077
  </h1>
  <p class="neon-text-secondary">
    Willkommen in der Zukunft
  </p>
</header>
```

### Neon-Karte mit gemischten Effekten

```html
<div class="card neon-card">
  <div class="card-header">
    <h3 class="neon-text-blue neon-text-flicker">Futuristische Technologie</h3>
  </div>
  <div class="card-body">
    <p>Erleben Sie die Zukunft mit unseren neuesten Innovationen</p>
    <div class="stats">
      <div class="stat">
        <span class="value neon-text-green">98%</span>
        <span class="label">Effizienz</span>
      </div>
      <div class="stat">
        <span class="value neon-text-red">2.4x</span>
        <span class="label">Leistung</span>
      </div>
    </div>
  </div>
  <div class="card-footer neon-border-pulse">
    <button class="button neon-button-sm">Mehr erfahren</button>
    <button class="button neon-button-primary">Kaufen</button>
  </div>
</div>
```

### Neon-Banner mit gemischten Effekten

```html
<div class="banner neon-border-lg">
  <div class="banner-content">
    <span class="badge neon-badge neon-text-flicker">Neu</span>
    <h2 class="neon-text-pink">Frühjahrsangebote</h2>
    <p>Begrenzt verfügbar. <span class="neon-text-yellow neon-text-pulse">Jetzt sparen!</span></p>
  </div>
</div>
```

## Best Practices

1. **Sparsam einsetzen**: Neon-Effekte sind visuell intensiv und sollten für Schlüsselelemente reserviert werden
2. **Farbharmonie bewahren**: Wählen Sie Neon-Farben, die zu Ihrem Farbschema passen
3. **Animationen begrenzen**: Zu viele blinkende oder pulsierende Elemente können ablenkend sein
4. **Testen Sie auf verschiedenen Geräten**: Neon-Effekte können auf verschiedenen Bildschirmen unterschiedlich aussehen 