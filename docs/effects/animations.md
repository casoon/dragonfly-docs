---
title: Animation Effects
category: Effects
---

# Animation Effects

Die Datei `animations.css` bietet ein umfassendes System von Animationen, die Ihre Benutzeroberfläche zum Leben erwecken können. Mit über 20 verschiedenen Basis-Animationseffekten und zahlreichen Konfigurationsoptionen ermöglicht diese Bibliothek eine präzise Steuerung von Bewegungen in Ihrer Anwendung.

## Überblick

Die Animations-Bibliothek bietet:

- Grundlegende Effekte (Einblenden, Gleiten, Skalieren)
- Aufmerksamkeitserregende Animationen (Hüpfen, Pulsieren, Schütteln)
- Interaktionsbasierte Animationen
- Gestaffelte Animationen für Listenelemente
- Dialog- und Modal-Animationen
- Anpassbare Animations-Kontexte für konsistente Bewegungsstile

Alle Animationen berücksichtigen Barrierefreiheitseinstellungen wie `prefers-reduced-motion` und bieten umfangreiche Konfigurationsmöglichkeiten durch CSS-Variablen.

## Grundlegende Animationen

### Einblend-Animationen

```html
<div class="fade-in">Erscheint sanft auf der Seite</div>
<div class="fade-out">Verschwindet sanft von der Seite</div>
```

### Gleit-Animationen

```html
<div class="slide-in-up">Gleitet von unten nach oben ein</div>
<div class="slide-in-down">Gleitet von oben nach unten ein</div>
<div class="slide-in-left">Gleitet von links ein</div>
<div class="slide-in-right">Gleitet von rechts ein</div>
```

### Skalierungs-Animationen

```html
<div class="scale-in">Skaliert beim Erscheinen</div>
<div class="scale-out">Skaliert beim Verschwinden</div>
```

## Aufmerksamkeitserregende Animationen

```html
<div class="animate-bounce">Hüpfendes Element</div>
<div class="animate-pulse">Pulsierendes Element</div>
<div class="animate-spin">Rotierendes Element</div>
<div class="animate-ping">Ping-Effekt (nützlich für Benachrichtigungen)</div>
<div class="animate-wiggle">Wackelndes Element</div>
<div class="animate-float">Schwebendes Element</div>
<div class="animate-shake">Schüttelndes Element</div>
<div class="animate-heartbeat">Herzschlag-Animation</div>
<div class="animate-elastic">Elastischer Effekt</div>
```

## Scroll-aktivierte Animationen

Elemente werden animiert, wenn sie beim Scrollen ins Sichtfeld kommen:

```html
<div class="scroll-fade-in">Erscheint beim Scrollen</div>
<div class="scroll-slide-in-up">Gleitet beim Scrollen nach oben</div>
<div class="scroll-slide-in-left">Gleitet beim Scrollen von links ein</div>
<div class="scroll-slide-in-right">Gleitet beim Scrollen von rechts ein</div>
```

## Interaktionsbasierte Animationen

```html
<button class="interaction-scale">Skaliert bei Interaktion</button>
<button class="hover-glow">Leuchtet bei Hover</button>
<button class="tap-feedback">Gibt visuelles Feedback bei Tipp/Klick</button>
```

## Übergangsklassen

Für sanfte Übergänge zwischen Zuständen:

```html
<div class="transition-opacity">Sanfter Übergang der Transparenz</div>
<div class="transition-transform">Sanfter Übergang von Transformationen</div>
<div class="transition-shadow">Sanfter Übergang von Schatten</div>
<div class="transition-colors">Sanfter Übergang von Farben</div>
<div class="transition-all">Sanfter Übergang aller Eigenschaften</div>
```

## Dialog-Animationen

Für modale Dialoge und Popups:

```html
<dialog class="dialog-animated">
  Dieser Dialog wird beim Öffnen und Schließen animiert
</dialog>

<div class="dialog-enter">Animation für eingehende Dialoge</div>
<div class="dialog-exit">Animation für ausgehende Dialoge</div>
```

## Fokus-Animationen

Für bessere Fokus-Sichtbarkeit (Barrierefreiheit):

```html
<button class="focus-ring-animated">Hat animierten Fokus-Ring</button>
<button class="focus-ring-animated primary">Primärer Fokus-Ring</button>
<button class="focus-ring-animated warning">Warnungs-Fokus-Ring</button>
<button class="focus-ring-animated error">Fehler-Fokus-Ring</button>
```

## Gestaffelte Animationen

Für sequentielle Animationen von Listenelementen:

```html
<ul class="staggered-container staggered-fade-in">
  <li>Erscheint zuerst</li>
  <li>Erscheint als zweites</li>
  <li>Erscheint als drittes</li>
  <!-- ... -->
</ul>

<!-- Verschiedene gestaffelte Effekte -->
<ul class="staggered-container staggered-slide-in-up">...</ul>
<ul class="staggered-container staggered-slide-in-down">...</ul>
<ul class="staggered-container staggered-slide-in-left">...</ul>
<ul class="staggered-container staggered-slide-in-right">...</ul>

<!-- Umgekehrte Reihenfolge -->
<ul class="staggered-container staggered-fade-in stagger-reverse">...</ul>

<!-- Gruppierung -->
<ul class="staggered-container staggered-fade-in stagger-group-1">...</ul>
<ul class="staggered-container staggered-fade-in stagger-group-2">...</ul>
<ul class="staggered-container staggered-fade-in stagger-group-3">...</ul>

<!-- Zeitintervall-Anpassung -->
<ul class="staggered-container staggered-fade-in stagger-increment-small">...</ul>
<ul class="staggered-container staggered-fade-in stagger-increment-normal">...</ul>
<ul class="staggered-container staggered-fade-in stagger-increment-large">...</ul>
```

## Hintergrund-Animationen

Für animierte Overlays und Hintergründe:

```html
<div class="backdrop">Abgedunkelter Hintergrund</div>
<div class="backdrop-blur">Verschwommener Hintergrund</div>
<div class="backdrop-light">Leichter Hintergrundeffekt</div>
<div class="backdrop-dark">Dunkler Hintergrundeffekt</div>
<div class="backdrop-medium">Mittlerer Hintergrundeffekt</div>
<div class="backdrop-strong">Starker Hintergrundeffekt</div>
<div class="backdrop-transition">Animierter Hintergrund</div>
```

## Anpassung der Animations-Parameter

### Dauerkategorien

```html
<div class="fade-in duration-fastest">Sehr schnell</div>
<div class="fade-in duration-fast">Schnell</div>
<div class="fade-in duration-normal">Normal</div>
<div class="fade-in duration-slow">Langsam</div>
<div class="fade-in duration-slower">Langsamer</div>
<div class="fade-in duration-slowest">Sehr langsam</div>
```

### Verzögerungskategorien

```html
<div class="fade-in delay-xs">Sehr kurze Verzögerung</div>
<div class="fade-in delay-sm">Kurze Verzögerung</div>
<div class="fade-in delay-md">Mittlere Verzögerung</div>
<div class="fade-in delay-lg">Lange Verzögerung</div>
<div class="fade-in delay-xl">Sehr lange Verzögerung</div>
```

### Wiederholungskategorien

```html
<div class="animate-pulse iteration-once">Einmal</div>
<div class="animate-pulse iteration-twice">Zweimal</div>
<div class="animate-pulse iteration-thrice">Dreimal</div>
<div class="animate-pulse iteration-infinite">Unendlich</div>
```

### Richtungskategorien

```html
<div class="animate-pulse direction-normal">Normal</div>
<div class="animate-pulse direction-reverse">Rückwärts</div>
<div class="animate-pulse direction-alternate">Abwechselnd</div>
<div class="animate-pulse direction-alternate-reverse">Abwechselnd rückwärts</div>
```

### Füllmoduskategorien

```html
<div class="fade-in fill-none">Kein Füllmodus</div>
<div class="fade-in fill-forwards">Vorwärts</div>
<div class="fade-in fill-backwards">Rückwärts</div>
<div class="fade-in fill-both">Beide</div>
```

## Animations-Kontexte

Animations-Kontexte bieten vordefinierte Einstellungen für konsistente Animationsstile in Ihrem Designsystem:

```html
<!-- Schnellere, energetische Animationen -->
<div class="animation-context-energetic">
  <div class="fade-in">Energetische Animation</div>
  <div class="slide-in-up">Dynamischer Gleiteffekt</div>
  <div class="staggered-container staggered-fade-in">
    <div>Schnelle gestaffelte Elemente</div>
    <div>Mit kurzen Intervallen</div>
  </div>
</div>

<!-- Subtile, sanfte Animationen -->
<div class="animation-context-subtle">
  <div class="fade-in">Subtile Animation</div>
  <div class="slide-in-up">Sanfter Gleiteffekt</div>
</div>

<!-- Verspielte Animationen mit mehr Bewegung -->
<div class="animation-context-playful">
  <div class="animate-bounce">Stärkeres Hüpfen</div>
  <div class="animate-wiggle">Auffälligeres Wackeln</div>
</div>
```

## Bewegungsdistanz-Kontexte

Für konsistente Bewegungsdistanzen:

```html
<div class="move-context-small">
  <div class="slide-in-up">Kurze Bewegungsdistanz</div>
</div>

<div class="move-context-medium">
  <div class="slide-in-up">Mittlere Bewegungsdistanz</div>
</div>

<div class="move-context-large">
  <div class="slide-in-up">Große Bewegungsdistanz</div>
</div>
```

## Anpassung über CSS-Variablen

Die Animations-Einstellungen können über CSS-Variablen angepasst werden:

```css
:root {
  /* Animations-Dauer */
  --duration-fastest: 150ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  --duration-slowest: 1000ms;
  
  /* Bewegungsdistanzen */
  --move-distance-small: 10px;
  --move-distance-medium: 30px;
  --move-distance-large: 50px;
  
  /* Verzögerungen */
  --delay-xs: 50ms;
  --delay-sm: 100ms;
  --delay-md: 200ms;
  --delay-lg: 300ms;
  --delay-xl: 500ms;
  
  /* Gestaffelte Animations-Einstellungen */
  --stagger-increment-small: 50ms;
  --stagger-increment-normal: 100ms;
  --stagger-increment-large: 200ms;
  
  /* Animations-Kurven */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Barrierefreiheit

Die Animations-Bibliothek respektiert automatisch Benutzereinstellungen für reduzierte Bewegung:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .scroll-fade-in,
  .scroll-slide-in-up,
  .scroll-slide-in-left,
  .scroll-slide-in-right {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## Browser-Unterstützung

Alle Animationseffekte unterstützen moderne Browser. Für ältere Browser werden Fallbacks bereitgestellt, die grundlegende Funktionalität gewährleisten, ohne dass Animationen erforderlich sind. 