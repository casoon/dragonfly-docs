---
title: animation Effects
category: Effects
---

# animation Effects

Die file `animations.css` bietet ein umfassendes system von Animationen, die Ihre Benutzeroberflache zum Leben erwecken can. Mit over 20 verschiedenen Base-Animationseffekten und zahlreichen Konfigurationsoptionen ermoglicht diese Bibliothek eine prazise Steuerung von Bewegungen in Ihrer Application.

## Uberblick

Die Animations-Bibliothek bietet:

- Grundlegende effects (Einblenden, Gleiten, Skalieren)
- Aufmerksamkeitserregende Animationen (Hupfen, Pulsieren, Schutteln)
- Interaktionsbasierte Animationen
- Gestaffelte Animationen for Listenelemente
- Dialog- und Modal-Animationen
- Anpassbare Animations-Kontexte for konsistente Bewegungsstile

Alle Animationen berucksichtigen Barrierefreiheitseinstellungen wie `prefers-reduced-motion` und bieten umfangreiche Konfigurationsmoglichkeiten durch CSS Variables.

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
<div class="animate-bounce">Hupfendes Element</div>
<div class="animate-pulse">Pulsierendes Element</div>
<div class="animate-spin">Rotierendes Element</div>
<div class="animate-ping">Ping-Effekt (nutzlich for Benachrichtigungen)</div>
<div class="animate-wiggle">Wackelndes Element</div>
<div class="animate-float">Schwebendes Element</div>
<div class="animate-shake">Schuttelndes Element</div>
<div class="animate-heartbeat">Herzschlag-animation</div>
<div class="animate-elastic">Elastischer Effekt</div>
```

## Scroll-aktivierte Animationen

elements werden animiert, If you beim Scrollen ins Sichtfeld kommen:

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

## Ubergangsklassen

for sanfte Ubergange zwischen Zustanden:

```html
<div class="transition-opacity">Sanfter transition der transparency</div>
<div class="transition-transform">Sanfter transition von Transformationen</div>
<div class="transition-shadow">Sanfter transition von shadow</div>
<div class="transition-colors">Sanfter transition von Farben</div>
<div class="transition-all">Sanfter transition aller Eigenschaften</div>
```

## Dialog-Animationen

for modale Dialoge und Popups:

```html
<dialog class="dialog-animated">
  Dieser Dialog wird beim Offnen und close animiert
</dialog>

<div class="dialog-enter">animation for eingehende Dialoge</div>
<div class="dialog-exit">animation for ausgehende Dialoge</div>
```

## Fokus-Animationen

for bessere Fokus-Sichtbarkeit (Barrierefreiheit):

```html
<button class="focus-ring-animated">Hat animierten Fokus-Ring</button>
<button class="focus-ring-animated primary">Primarer Fokus-Ring</button>
<button class="focus-ring-animated warning">Warnungs-Fokus-Ring</button>
<button class="focus-ring-animated error">Fehler-Fokus-Ring</button>
```

## Gestaffelte Animationen

for sequentielle Animationen von Listenelementen:

```html
<ul class="staggered-container staggered-fade-in">
  <li>Erscheint zuerst</li>
  <li>Erscheint als zweites</li>
  <li>Erscheint als drittes</li>
  <!-- ... -->
</ul>

<!-- Verschiedene gestaffelte effects -->
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

<!-- Zeitintervall-Customization -->
<ul class="staggered-container staggered-fade-in stagger-increment-small">...</ul>
<ul class="staggered-container staggered-fade-in stagger-increment-normal">...</ul>
<ul class="staggered-container staggered-fade-in stagger-increment-large">...</ul>
```

## background-Animationen

for animierte Overlays und Hintergrunde:

```html
<div class="backdrop">Abgedunkelter background</div>
<div class="backdrop-blur">Verschwommener background</div>
<div class="backdrop-light">Leichter Hintergrundeffekt</div>
<div class="backdrop-dark">Dunkler Hintergrundeffekt</div>
<div class="backdrop-medium">Mittlerer Hintergrundeffekt</div>
<div class="backdrop-strong">Starker Hintergrundeffekt</div>
<div class="backdrop-transition">Animierter background</div>
```

## Customization der Animations-parameter

### Dauerkategorien

```html
<div class="fade-in duration-fastest">Sehr schnell</div>
<div class="fade-in duration-fast">Schnell</div>
<div class="fade-in duration-normal">Normal</div>
<div class="fade-in duration-slow">Langsam</div>
<div class="fade-in duration-slower">Langsamer</div>
<div class="fade-in duration-slowest">Sehr langsam</div>
```

### Verzogerungskategorien

```html
<div class="fade-in delay-xs">Sehr kurze Verzogerung</div>
<div class="fade-in delay-sm">Kurze Verzogerung</div>
<div class="fade-in delay-md">Mittlere Verzogerung</div>
<div class="fade-in delay-lg">length Verzogerung</div>
<div class="fade-in delay-xl">Sehr length Verzogerung</div>
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
<div class="animate-pulse direction-reverse">Ruckwarts</div>
<div class="animate-pulse direction-alternate">Abwechselnd</div>
<div class="animate-pulse direction-alternate-reverse">Abwechselnd ruckwarts</div>
```

### Fullmoduskategorien

```html
<div class="fade-in fill-none">Kein Fullmodus</div>
<div class="fade-in fill-forwards">Vorwarts</div>
<div class="fade-in fill-backwards">Ruckwarts</div>
<div class="fade-in fill-both">Beide</div>
```

## Animations-Kontexte

Animations-Kontexte bieten vordefinierte Einstellungen for konsistente Animationsstile in Ihrem design system:

```html
<!-- Schnellere, energetische Animationen -->
<div class="animation-context-energetic">
  <div class="fade-in">Energetische animation</div>
  <div class="slide-in-up">Dynamischer Gleiteffekt</div>
  <div class="staggered-container staggered-fade-in">
    <div>Schnelle gestaffelte elements</div>
    <div>Mit kurzen Intervallen</div>
  </div>
</div>

<!-- Subtile, sanfte Animationen -->
<div class="animation-context-subtle">
  <div class="fade-in">Subtile animation</div>
  <div class="slide-in-up">Sanfter Gleiteffekt</div>
</div>

<!-- Verspielte Animationen mit mehr Bewegung -->
<div class="animation-context-playful">
  <div class="animate-bounce">Starkeres Hupfen</div>
  <div class="animate-wiggle">Auffalligeres Wackeln</div>
</div>
```

## Bewegungsdistanz-Kontexte

for konsistente Bewegungsdistanzen:

```html
<div class="move-context-small">
  <div class="slide-in-up">Kurze Bewegungsdistanz</div>
</div>

<div class="move-context-medium">
  <div class="slide-in-up">Mittlere Bewegungsdistanz</div>
</div>

<div class="move-context-large">
  <div class="slide-in-up">size Bewegungsdistanz</div>
</div>
```

## Customization over CSS Variables

Die Animations-Einstellungen can over CSS Variables angepasst werden:

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
  
  /* Verzogerungen */
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

Die Animations-Bibliothek respektiert automatisch Benutzereinstellungen for reduzierte Bewegung:

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

## Browser-Unterstutzung

Alle Animationseffekte unterstutzen moderne Browser. for altere Browser werden Fallbacks bereitgestellt, die grundlegende Funktionalitat gewahrleisten, ohne dass Animationen erforderlich sind. 