---
title: Animations-Effekte
category: Guide
---

# Animations-Effekte

Die `animations.css` Datei bietet ein umfassendes System von Animationen, die Ihre Benutzeroberfläche zum Leben erwecken können. Mit über 20 verschiedenen Basis-Animationseffekten und zahlreichen Konfigurationsmöglichkeiten erlaubt diese Bibliothek die präzise Steuerung von Bewegungen in Ihrer Anwendung.

## Übersicht

Die Animations-Bibliothek bietet:

- Grundlegende Effekte (Fade, Slide, Scale)
- Aufmerksamkeitserzeugende Animationen (Bounce, Pulse, Shake)
- Interaktionsbasierte Animationen
- Gestaffelte (Staggered) Animationen für Listenelemente
- Dialog- und Modal-Animationen
- Anpassbare Animation-Kontexte für konsistente Bewegungsstile

Alle Animationen berücksichtigen Barrierefreiheitseinstellungen wie `prefers-reduced-motion` und bieten umfangreiche Konfigurationsmöglichkeiten durch CSS-Variablen.

## Grundlegende Animationen

### Fade-Animationen

```html
<div class="fade-in">Erscheint sanft auf der Seite</div>
<div class="fade-out">Verschwindet sanft von der Seite</div>
```

### Slide-Animationen

```html
<div class="slide-in-up">Gleitet von unten nach oben ein</div>
<div class="slide-in-down">Gleitet von oben nach unten ein</div>
<div class="slide-in-left">Gleitet von links ein</div>
<div class="slide-in-right">Gleitet von rechts ein</div>
```

### Scale-Animationen

```html
<div class="scale-in">Skaliert beim Erscheinen</div>
<div class="scale-out">Skaliert beim Verschwinden</div>
```

## Aufmerksamkeitserzeugende Animationen

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
<div class="scroll-slide-in-up">Gleitet beim Scrollen hoch</div>
<div class="scroll-slide-in-left">Gleitet beim Scrollen von links</div>
<div class="scroll-slide-in-right">Gleitet beim Scrollen von rechts</div>
```

## Interaktionsbasierte Animationen

```html
<button class="interaction-scale">Skaliert bei Interaktion</button>
<button class="hover-glow">Leuchtet bei Hover</button>
<button class="tap-feedback">Gibt visuelles Feedback bei Tap/Click</button>
```

## Transition-Klassen

Für sanfte Übergänge zwischen Zuständen:

```html
<div class="transition-opacity">Sanfter Übergang der Deckkraft</div>
<div class="transition-transform">Sanfter Übergang bei Transformationen</div>
<div class="transition-shadow">Sanfter Übergang von Schatten</div>
<div class="transition-colors">Sanfter Übergang bei Farben</div>
<div class="transition-all">Sanfter Übergang aller Eigenschaften</div>
```

## Dialog-Animationen

Für Modal-Dialoge und Popups:

```html
<dialog class="dialog-animated">
  Dieser Dialog wird animiert ein- und ausgeblendet
</dialog>

<div class="dialog-enter">Animation für einfahrende Dialoge</div>
<div class="dialog-exit">Animation für ausfahrende Dialoge</div>
```

## Fokus-Animationen

Für bessere Sichtbarkeit des Fokus (Barrierefreiheit):

```html
<button class="focus-ring-animated">Hat animierten Fokusring</button>
<button class="focus-ring-animated primary">Primärer Fokusring</button>
<button class="focus-ring-animated warning">Warnungs-Fokusring</button>
<button class="focus-ring-animated error">Fehler-Fokusring</button>
```

## Gestaffelte Animationen (Staggered)

Für sequenzielle Animationen von Listenelementen:

```html
<ul class="staggered-container staggered-fade-in">
  <li>Erscheint zuerst</li>
  <li>Erscheint als zweites</li>
  <li>Erscheint als drittes</li>
  <!-- ... -->
</ul>

<!-- Verschiedene Staggered-Effekte -->
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

Für animierte Overlays und Backdrops:

```html
<div class="backdrop">Abgedunkelter Hintergrund</div>
<div class="backdrop-blur">Unscharfer Hintergrund</div>
<div class="backdrop-light">Leichter Hintergrund-Effekt</div>
<div class="backdrop-dark">Dunkler Hintergrund-Effekt</div>
<div class="backdrop-medium">Mittlerer Hintergrund-Effekt</div>
<div class="backdrop-strong">Starker Hintergrund-Effekt</div>
<div class="backdrop-transition">Animierter Hintergrund</div>
```

## Animation-Parameter anpassen

### Dauer-Klassen

```html
<div class="fade-in duration-fastest">Sehr schnell</div>
<div class="fade-in duration-fast">Schnell</div>
<div class="fade-in duration-normal">Normal</div>
<div class="fade-in duration-slow">Langsam</div>
<div class="fade-in duration-slower">Langsamer</div>
<div class="fade-in duration-slowest">Sehr langsam</div>
```

### Verzögerungs-Klassen

```html
<div class="fade-in delay-xs">Sehr kurze Verzögerung</div>
<div class="fade-in delay-sm">Kurze Verzögerung</div>
<div class="fade-in delay-md">Mittlere Verzögerung</div>
<div class="fade-in delay-lg">Lange Verzögerung</div>
<div class="fade-in delay-xl">Sehr lange Verzögerung</div>
```

### Wiederholungs-Klassen

```html
<div class="animate-pulse iteration-once">Einmal</div>
<div class="animate-pulse iteration-twice">Zweimal</div>
<div class="animate-pulse iteration-thrice">Dreimal</div>
<div class="animate-pulse iteration-infinite">Unendlich</div>
```

### Richtungs-Klassen

```html
<div class="animate-pulse direction-normal">Normal</div>
<div class="animate-pulse direction-reverse">Rückwärts</div>
<div class="animate-pulse direction-alternate">Alternierend</div>
<div class="animate-pulse direction-alternate-reverse">Alternierend rückwärts</div>
```

### Fill-Mode-Klassen

```html
<div class="fade-in fill-none">Kein Fill-Mode</div>
<div class="fade-in fill-forwards">Forwards</div>
<div class="fade-in fill-backwards">Backwards</div>
<div class="fade-in fill-both">Both</div>
```

## Animations-Kontexte

Animations-Kontexte bieten vordefinierte Einstellungen für konsistente Animationsstile in Ihrem Design-System:

```html
<!-- Schnellere, energiegeladene Animationen -->
<div class="animation-context-energetic">
  <div class="fade-in">Energiegeladene Animation</div>
  <div class="slide-in-up">Dynamischer Slide-Effekt</div>
  <div class="staggered-container staggered-fade-in">
    <div>Schnell gestaffelte Items</div>
    <div>Mit kurzem Abstand</div>
  </div>
</div>

<!-- Subtile, sanfte Animationen -->
<div class="animation-context-subtle">
  <div class="fade-in">Subtile Animation</div>
  <div class="slide-in-up">Sanfter Slide-Effekt</div>
</div>

<!-- Verspielte Animationen mit mehr Bewegung -->
<div class="animation-context-playful">
  <div class="animate-bounce">Stärkerer Bounce</div>
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

## Verzögerungs-Kontexte

Für konsistente Verzögerungszeiten:

```html
<div class="delay-context-short">
  <div class="staggered-container staggered-fade-in">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</div>

<div class="delay-context-medium">...</div>
<div class="delay-context-long">...</div>
```

## CSS-Variablen

Das Animations-System verwendet folgende CSS-Variablen für präzise Anpassungen:

```css
:root {
  /* Animations-Dauern */
  --animation-duration-fastest: 100ms;
  --animation-duration-fast: 150ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  --animation-duration-slower: 700ms;
  --animation-duration-slowest: 1000ms;
  
  /* Bewegungsdistanzen */
  --move-xs: 2px;
  --move-sm: 4px;
  --move-md: 16px;
  --move-lg: 24px;
  --move-xl: 36px;
  
  /* Verzögerungszeiten */
  --delay-xs: 50ms;
  --delay-sm: 100ms;
  --delay-md: 200ms;
  --delay-lg: 400ms;
  --delay-xl: 600ms;
  
  /* Gestaffelte Animationen */
  --stagger-base-delay: 50ms;
  --stagger-increment: 50ms;
  --stagger-max-delay: 500ms;
  
  /* Timing-Funktionen */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.2, -0.2, 0.1, 1.2);
  
  /* Spezifische Animations-Parameter */
  --scale-sm: 0.95;
  --scale-lg: 1.05;
  --pulse-opacity-min: 50%;
  --ping-scale: 2;
  --wiggle-angle: 3deg;
  --float-distance: 10px;
  --shake-distance-sm: 1px;
  --shake-distance-md: 3px;
  --shake-distance-lg: 6px;
  --bounce-height: 25%;
}
```

## Barrierefreiheit

Das Animations-System berücksichtigt die Barrierefreiheitseinstellung `prefers-reduced-motion` und bietet spezifische Klassen für barrierefreie Animation:

```html
<!-- Animation nur, wenn Nutzer keine reduzierten Animationen bevorzugt -->
<div class="motion-safe animate-bounce">Animiert nur wenn erlaubt</div>

<!-- Animation nur, wenn Nutzer reduzierte Animationen bevorzugt -->
<div class="motion-reduce fade-in">Spezielle Animation für reduzierte Bewegung</div>
```

## Best Practices

1. **Maßvoll einsetzen**: Animationen sollten die Aufmerksamkeit des Nutzers lenken, nicht überfordern.
2. **Konsistenz bewahren**: Verwenden Sie Animations-Kontexte für ein einheitliches Bewegungsdesign.
3. **Barrierefreiheit beachten**: Stellen Sie Alternativen für Nutzer mit reduzierten Bewegungspräferenzen bereit.
4. **Performance optimieren**: Beschränken Sie komplexe Animationen auf wenige Elemente.
5. **Timing optimieren**: Kurze Animationen (100-300ms) für häufige Interaktionen, längere Animationen (300-500ms) für wichtigere Übergänge. 