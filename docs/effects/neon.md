---
title: Neon Effects
category: Effects
---

# Neon Effects

Die Datei `neon.css` bietet leuchtende Neon-Effekte für Text, Ränder und Elemente in Ihrer Benutzeroberfläche. Diese Effekte erzeugen strahlende, lebendige Hervorhebungen, die an Neonröhren erinnern und Ihrer UI eine moderne, cyberpunk-ähnliche Ästhetik verleihen.

## Überblick

Neon-Effekte verwenden leuchtende Farben mit Glüheffekten (Textschatten oder Box-Schatten), um das Erscheinungsbild von leuchtendem Neon zu simulieren. Die Casoon UI Library bietet eine umfassende Sammlung von Neon-Effekten für verschiedene UI-Elemente.

## Grundlegende Neon-Effekte

```html
<!-- Neon-Text (Standard-Primärfarbe) -->
<div class="neon-text">Leuchtender Neon-Text</div>

<!-- Neon-Rand -->
<div class="neon-border">Element mit Neon-Rand</div>

<!-- Neon-Glühen (Hintergrund-Glühen) -->
<div class="neon-glow">Element mit Neon-Hintergrund-Glühen</div>

<!-- Neon-Box (Text und Rand) -->
<div class="neon-box">Element mit Neon-Text und -Rand</div>
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
<div class="neon-text-pink">Rosa Neon</div>
<div class="neon-text-purple">Lila Neon</div>
<div class="neon-text-orange">Orangefarbenes Neon</div>
<div class="neon-text-teal">Türkisfarbenes Neon</div>
<div class="neon-text-yellow">Gelbes Neon</div>
```

## Intensitätsvarianten

Die Neon-Effekte sind in verschiedenen Intensitätsstufen verfügbar:

```html
<!-- Neon-Text-Intensitäten -->
<div class="neon-text-sm">Subtiler Neon-Effekt</div>
<div class="neon-text-md">Standard-Neon-Effekt</div>
<div class="neon-text-lg">Starker Neon-Effekt</div>
<div class="neon-text-xl">Besonders starker Neon-Effekt</div>

<!-- Neon-Rand-Intensitäten -->
<div class="neon-border-sm">Subtiler Neon-Rand</div>
<div class="neon-border-md">Standard-Neon-Rand</div>
<div class="neon-border-lg">Starker Neon-Rand</div>
<div class="neon-border-xl">Besonders starker Neon-Rand</div>
```

## Animierte Neon-Effekte

```html
<!-- Pulsierende Neon-Effekte -->
<div class="neon-text-pulse">Pulsierender Neon-Text</div>
<div class="neon-border-pulse">Pulsierender Neon-Rand</div>

<!-- Flackernde Neon-Effekte -->
<div class="neon-text-flicker">Flackernder Neon-Text</div>
<div class="neon-border-flicker">Flackernder Neon-Rand</div>

<!-- Atmende Neon-Effekte -->
<div class="neon-text-breathe">Atmender Neon-Text</div>
<div class="neon-border-breathe">Atmender Neon-Rand</div>

<!-- Langsame/Schnelle Animationen -->
<div class="neon-text-pulse-slow">Langsam pulsierender Neon-Text</div>
<div class="neon-text-pulse-fast">Schnell pulsierender Neon-Text</div>
```

## Interaktive Neon-Effekte

Neon-Effekte können für interaktive Elemente und in bestimmten Zuständen aktiviert werden:

```html
<!-- Hover-aktivierte Neon-Effekte -->
<div class="neon-text-hover">Text leuchtet bei Hover</div>
<div class="neon-border-hover">Rand leuchtet bei Hover</div>
<div class="neon-glow-hover">Hintergrund leuchtet bei Hover</div>

<!-- Fokus-aktivierte Neon-Effekte -->
<button class="neon-text-focus">Leuchtet bei Fokussierung</button>
<input class="neon-border-focus" placeholder="Rand leuchtet bei Fokussierung">

<!-- Aktive Zustand Neon-Effekte -->
<button class="neon-text-active">Leuchtet bei Aktivierung</button>
<button class="neon-border-active">Rand leuchtet bei Aktivierung</button>

<!-- Kombinierte Zustände -->
<button class="neon-interactive">Reagiert auf alle Interaktionen</button>
```

## Komponentenspezifische Neon-Effekte

Für häufig verwendete UI-Komponenten gibt es spezialisierte Neon-Klassen:

```html
<!-- Neon-Buttons -->
<button class="button neon-button">Neon-Button</button>
<button class="button neon-button-primary">Primärer Neon-Button</button>
<button class="button neon-button-secondary">Sekundärer Neon-Button</button>

<!-- Neon-Karte -->
<div class="card neon-card">
  <div class="card-header">Neon-Kartenkopf</div>
  <div class="card-body">Neon-Karteninhalt</div>
  <div class="card-footer">Neon-Kartenfuß</div>
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
  Neon-Rand mit Hover-Anhebung
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
  /* Neon-Text-Effekt-Basis */
  --neon-text-color: var(--color-primary, #0080ff);
  --neon-text-glow-sm: 0 0 2px var(--neon-text-color), 0 0 4px var(--neon-text-color);
  --neon-text-glow-md: 0 0 4px var(--neon-text-color), 0 0 8px var(--neon-text-color), 0 0 12px var(--neon-text-color);
  --neon-text-glow-lg: 0 0 6px var(--neon-text-color), 0 0 12px var(--neon-text-color), 0 0 18px var(--neon-text-color), 0 0 24px var(--neon-text-color);
  --neon-text-glow-xl: 0 0 8px var(--neon-text-color), 0 0 16px var(--neon-text-color), 0 0 24px var(--neon-text-color), 0 0 32px var(--neon-text-color), 0 0 42px var(--neon-text-color);
  
  /* Neon-Rand-Effekt-Basis */
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
  
  /* Neon-Animations-Parameter */
  --neon-animation-duration-normal: 2s;
  --neon-animation-duration-slow: 4s;
  --neon-animation-duration-fast: 1s;
  --neon-pulse-opacity-min: 0.6;
  --neon-flicker-sequence: 3s, 0.5s, 0.7s, 0.1s;
}
```

## Animations-Definitionen

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

## Dunkelmodus-Verbesserung

Im Dunkelmodus können Neon-Effekte verstärkt werden:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --neon-text-glow-sm: 0 0 4px var(--neon-text-color), 0 0 8px var(--neon-text-color);
    --neon-text-glow-md: 0 0 6px var(--neon-text-color), 0 0 12px var(--neon-text-color), 0 0 18px var(--neon-text-color);
    --neon-text-glow-lg: 0 0 8px var(--neon-text-color), 0 0 16px var(--neon-text-color), 0 0 24px var(--neon-text-color), 0 0 32px var(--neon-text-color);
    --neon-text-glow-xl: 0 0 10px var(--neon-text-color), 0 0 20px var(--neon-text-color), 0 0 30px var(--neon-text-color), 0 0 40px var(--neon-text-color), 0 0 50px var(--neon-text-color);
  }
}
```

## Barrierefreiheit

Für beste Barrierefreiheit:

1. Vermeiden Sie blinkende Neon-Effekte, die zu schnell blinken (weniger als 3 Sekunden pro Zyklus)
2. Sorgen Sie für ausreichenden Kontrast zwischen Neon-Text und Hintergrund
3. Verwenden Sie reduzierte Animationen für Benutzer, die dies bevorzugen

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
```

## Browser-Unterstützung

Neon-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser werden Fallbacks mit einfacheren Hervorhebungen bereitgestellt. 