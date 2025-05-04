---
title: Animations- und Effekt-System
category: Guide
---

# Animations- und Effekt-System

Das Animations- und Effekt-System der Casoon UI Library bietet umfassende Werkzeuge für Bewegung, Übergänge und visuelle Effekte in Ihrer Benutzeroberfläche. Mit modernen CSS-Techniken wie CSS Animations API, Scroll-getriebenen Animationen und interaktiven Effekten können Sie ansprechende und reaktionsschnelle Benutzererlebnisse schaffen.

## Importieren

Die Animation- und Effektsysteme werden automatisch geladen, wenn Sie die `core.css` importieren:

```css
@import '@casoon/ui-lib/core.css';
```

Alternativ können Sie die Komponenten separat importieren:

```css
/* Nur Animationen */
@import '@casoon/ui-lib/animations.css';

/* Nur Effekte */
@import '@casoon/ui-lib/effects.css';
```

## Animationssystem

### Variablen und Tokens

Das Animationssystem basiert auf einem umfangreichen Satz von CSS-Variablen, die konsistente Animation in der gesamten Anwendung ermöglichen:

```css
:root {
  /* Dauer-Variablen */
  --animation-duration-fastest: 100ms;
  --animation-duration-fast: 150ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  --animation-duration-slower: 750ms;
  --animation-duration-slowest: 1000ms;

  /* Timing-Funktionen */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.68, -0.6, 0.32, 1.6);

  /* Bewegungsdistanzen */
  --move-xs: 4px;
  --move-sm: 8px;
  --move-md: 16px;
  --move-lg: 24px;
  --move-xl: 36px;

  /* Skalierungsfaktoren */
  --scale-xs: 0.98;
  --scale-sm: 0.95;
  --scale-md: 0.9;
  --scale-lg: 1.05;
  --scale-xl: 1.1;

  /* Verzögerungen */
  --delay-xs: 50ms;
  --delay-sm: 100ms;
  --delay-md: 200ms;
  --delay-lg: 300ms;
  --delay-xl: 500ms;

  /* Wiederholungen */
  --iteration-once: 1;
  --iteration-twice: 2;
  --iteration-thrice: 3;
  --iteration-infinite: infinite;
}
```

### Grundlegende Animationsklassen

Die Basisklasse `.animate` stellt Standardeinstellungen für Animationen bereit:

```html
<div class="animate">
  Diese Element erhält die Basiseinstellungen für Animationen
</div>
```

Die Klasse setzt:
- Animation-Dauer auf `var(--animation-duration-normal)` (300ms)
- Animation-Fill-Mode auf `both` (Beibehaltung des Endstatus)
- Timing-Funktion auf `var(--ease-in-out-cubic)`

### Animationssteuerung

#### Richtung

```html
<div class="animate direction-normal">Normale Richtung</div>
<div class="animate direction-reverse">Umgekehrte Richtung</div>
<div class="animate direction-alternate">Wechselnde Richtung</div>
<div class="animate direction-alternate-reverse">Wechselnd-umgekehrte Richtung</div>
```

#### Füllmodus

```html
<div class="animate fill-none">Kein Füllmodus</div>
<div class="animate fill-forwards">Endstatus beibehalten</div>
<div class="animate fill-backwards">Startstatus anwenden</div>
<div class="animate fill-both">Start- und Endstatus anwenden</div>
```

#### Wiederholung

```html
<div class="animate iteration-once">Einmal abspielen</div>
<div class="animate iteration-twice">Zweimal abspielen</div>
<div class="animate iteration-thrice">Dreimal abspielen</div>
<div class="animate iteration-infinite">Endlos abspielen</div>

<!-- Alternative Kurzformen -->
<div class="animate once">Einmal abspielen</div>
<div class="animate infinite">Endlos abspielen</div>
```

### Scroll-gesteuerte Animationen

Die Library bietet moderne Scroll-getriebene Animationen, die sich am Scrollverhalten des Benutzers orientieren:

```html
<div class="scroll-fade-in">
  Dieses Element blendet sich ein, wenn es ins Sichtfeld scrollt
</div>

<div class="scroll-slide-up">
  Dieses Element gleitet von unten herein
</div>

<div class="scroll-slide-from-left">
  Dieses Element gleitet von links herein
</div>

<div class="scroll-slide-from-right">
  Dieses Element gleitet von rechts herein
</div>
```

Diese Klassen verwenden die moderne CSS Animation Timeline API:
- Animation startet, wenn das Element sichtbar wird (`entry 10%`)
- Animation ist abgeschlossen, wenn Element komplett sichtbar ist (`cover 30-40%`)

### Interaktionsanimationen

Diese Animationen reagieren auf Benutzerinteraktionen:

```html
<button class="interaction-scale">
  Knopf, der sich beim Klicken verkleinert
</button>

<div class="hover-glow">
  Element, das bei Hover leuchtet
</div>

<button class="tap-feedback">
  Knopf mit visuellem Feedback bei Berührung
</button>
```

### Übergangshelfer

Für einfache CSS-Übergänge bietet das System spezifische Helferklassen:

```html
<div class="transition-opacity">
  Übergang für Transparenz
</div>

<div class="transition-transform">
  Übergang für Transformationen
</div>

<div class="transition-shadow">
  Übergang für Schatten
</div>

<div class="transition-colors">
  Übergang für Farben (Hintergrund, Text, Rahmen)
</div>
```

## Effekt-System

Das Effekt-System erweitert das Animationssystem mit komplexeren visuellen Effekten.

### Neon-Effekte

```html
<div class="neon-text">Text mit Neon-Leuchteffekt</div>
<div class="neon-border">Element mit leuchtendem Rahmen</div>
<div class="neon-shadow">Element mit leuchtendem Schatten</div>
```

Die Neon-Effekte lassen Elemente durch Textschatten, Boxschatten und Farbverläufe leuchten und können mit unterschiedlichen Farben kombiniert werden:

```html
<div class="neon-text neon-primary">Primärfarbener Neon-Effekt</div>
<div class="neon-text neon-accent">Akzentfarbener Neon-Effekt</div>
```

### Filter-Effekte

```html
<!-- Unschärfe -->
<div class="blur-sm">Leichte Unschärfe</div>
<div class="blur-md">Mittlere Unschärfe</div>
<div class="blur-lg">Starke Unschärfe</div>

<!-- Helligkeit -->
<div class="brightness-50">50% Helligkeit</div>
<div class="brightness-150">150% Helligkeit</div>

<!-- Kontrast -->
<div class="contrast-50">50% Kontrast</div>
<div class="contrast-150">150% Kontrast</div>

<!-- Graustufen -->
<div class="grayscale">Vollständige Graustufen</div>
<div class="grayscale-50">50% Graustufen</div>

<!-- Sepia -->
<div class="sepia">Sepia-Effekt</div>

<!-- Kombinierte Filter -->
<div class="blur-sm brightness-150">Unscharf und heller</div>
```

### Interaktionseffekte

#### 3D-Effekte

```html
<div class="card-3d">
  <div class="card-3d__front">Vorderseite</div>
  <div class="card-3d__back">Rückseite</div>
</div>

<div class="tilt-effect">Element mit Neigungseffekt bei Hover</div>
```

#### Welleneffekte

```html
<button class="ripple">Klick für Welleneffekt</button>
```

#### Dynamische Hover-Effekte

```html
<div class="hover-lift">Element hebt sich bei Hover</div>
<div class="hover-shadow">Element bekommt Schatten bei Hover</div>
<div class="hover-grow">Element wird größer bei Hover</div>
<div class="hover-shrink">Element wird kleiner bei Hover</div>
```

## Kombinieren von Animationen und Effekten

Das System ist so konzipiert, dass Animationen und Effekte miteinander kombiniert werden können:

```html
<div class="card scroll-fade-in hover-lift transition-shadow">
  <h3>Animierte Karte</h3>
  <p>Diese Karte blendet sich beim Scrollen ein, hebt sich bei Hover und
     hat einen sanften Schattenübergang.</p>
</div>

<button class="button button--primary ripple interaction-scale">
  Animierter Button
</button>
```

## Barrierefreiheit

Das Animations- und Effekt-System respektiert die Benutzereinstellung für reduzierte Bewegung (`prefers-reduced-motion`):

```css
@media (prefers-reduced-motion: reduce) {
  /* Reduzierte oder deaktivierte Animationen */
  .animate {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .scroll-fade-in,
  .scroll-slide-up,
  .scroll-slide-from-left,
  .scroll-slide-from-right {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## Performance-Optimierung

Das System verwendet hardwarebeschleunigte Eigenschaften für optimale Performance:

- `transform` und `opacity` werden bevorzugt gegenüber `top`, `left`, etc.
- `will-change` wird selektiv für komplexere Animationen eingesetzt
- Animationsklassen werden nur bei Bedarf angewendet, um unnötige Repaints zu vermeiden

## Erweiterung des Animations- und Effekt-Systems

### Eigene Animationen definieren

```css
@import '@casoon/ui-lib/core.css';

@layer animations {
  /* Eigene Animation definieren */
  @keyframes bounce-in {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
  
  /* Eigene Animationsklasse */
  .animate-bounce-in {
    animation-name: bounce-in;
    animation-duration: var(--animation-duration-slow);
    animation-timing-function: var(--ease-out);
    animation-fill-mode: both;
  }
}
```

### Eigene Effekte hinzufügen

```css
@import '@casoon/ui-lib/core.css';

@layer effects {
  /* Eigener Filter-Effekt */
  .mirror {
    transform: scaleX(-1);
  }
  
  /* Eigener interaktiver Effekt */
  .hover-rotate {
    transition: transform var(--animation-duration-normal) var(--ease-out);
  }
  
  .hover-rotate:hover {
    transform: rotate(5deg);
  }
}
```

## Optimierung für Lightning CSS

Das Animations- und Effekt-System ist für Lightning CSS optimiert:

1. **Automatische Präfixierung**: Lightning CSS fügt automatisch Browser-Präfixe für Animationen und Transformationen hinzu
2. **Optimierung**: Redundanzen in Keyframes und Eigenschaften werden minimiert
3. **Unterstützung für moderne Funktionen**: Lightning CSS ermöglicht die Verwendung moderner Animationsfunktionen mit Fallbacks für ältere Browser

## Beispiele für komplexe Animations-Kombinationen

### Animierte Karten-Einblendung

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Karte 1: Verzögerung 0 -->
    <div class="card scroll-fade-in" style="--delay: 0ms">
      <div class="card__header">Karte 1</div>
      <div class="card__body">Inhalt</div>
    </div>
    
    <!-- Karte 2: Verzögerung 100ms -->
    <div class="card scroll-fade-in" style="--delay: 100ms">
      <div class="card__header">Karte 2</div>
      <div class="card__body">Inhalt</div>
    </div>
    
    <!-- Karte 3: Verzögerung 200ms -->
    <div class="card scroll-fade-in" style="--delay: 200ms">
      <div class="card__header">Karte 3</div>
      <div class="card__body">Inhalt</div>
    </div>
  </div>
</div>
```

### Animiertes Helden-Banner

```html
<div class="hero">
  <h1 class="scroll-fade-in" style="--delay: 0ms">Willkommen</h1>
  <p class="scroll-fade-in" style="--delay: 200ms">Ein modernes CSS-Framework</p>
  <button class="button button--primary scroll-fade-in ripple" style="--delay: 400ms">
    Mehr erfahren
  </button>
</div>
```

### Interaktives Dashboard

```html
<div class="dashboard">
  <div class="widget hover-lift transition-shadow">
    <div class="widget__header">Benutzer</div>
    <div class="widget__body">
      <div class="counter animate" data-animation="count-up" data-value="1248">0</div>
    </div>
  </div>
  
  <div class="widget hover-lift transition-shadow">
    <div class="widget__header">Umsatz</div>
    <div class="widget__body">
      <div class="chart animate" data-animation="fade-in-up">
        <!-- Chart-Inhalt -->
      </div>
    </div>
  </div>
</div>
```

## Best Practices

1. **Sparsamkeit**: Nutzen Sie Animationen gezielt und zur Verbesserung der UX, nicht als Selbstzweck
2. **Performance im Auge behalten**: Vermeiden Sie zu viele gleichzeitige Animationen oder komplexe Animationen auf mobilen Geräten
3. **Barrierefreiheit**: Respektieren Sie stets die Benutzereinstellung `prefers-reduced-motion`
4. **Konsistenz**: Verwenden Sie die definierten Variablen für konsistente Animationszeiten und Timingfunktionen
5. **Flüssigkeit**: Zielen Sie auf 60 FPS (oder höher) für alle Animationen ab
6. **Bedeutung**: Nutzen Sie Animationen, um Benutzerinteraktionen zu verstärken und Zusammenhänge zu verdeutlichen 