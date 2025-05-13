---
title: Animations- und Effekt-System
category: Guide
---

# Animations- und Effekte-System

Das Animations- und Effekte-System der Casoon UI Library bietet eine umfassende Sammlung von vordefinierten Animationen, Übergängen und visuellen Effekten zur Verbesserung der Benutzeroberfläche.

> **Update in Version 0.5.1:** Das Animationssystem wurde umfassend überarbeitet mit vereinheitlichtem Benennungsschema (`slide-in-*` statt `slide-from-*`), reduzierter Redundanz und verbesserten Custom Properties.

## CSS-Import

Um das komplette Casoon UI Animations-System zu nutzen, importieren Sie die `core.css` Datei, die automatisch die grundlegenden Animationen enthält:

```css
@import "@casoon/ui-lib/core.css";
```

Für spezielle Animationen und Effekte können Sie zusätzliche Module importieren:

```css
/* Erweiterte Animationen */
@import "@casoon/ui-lib/effects/animations.css";

/* Spezielle Effekte */
@import "@casoon/ui-lib/effects/glass.css";
@import "@casoon/ui-lib/effects/neon.css";
```

## Layer-Struktur

Die Animationen und Effekte sind Teil des zentralen Layer-Systems und werden unter den Layern `animations` und `effects` definiert:

```css
@layer reset,
       tokens,
       /* ... andere Layer ... */
       animations,       /* Bewegungssystem */
       effects,          /* Visuelle Effekte */
       themes;
```

## Grundlegende Animationen

Das System bietet eine Reihe von vordefinierten Animationen, die leicht angewendet werden können:

### Fade-Animationen

```css
.fade-in { animation: fade-in 0.3s ease-out forwards; }
.fade-out { animation: fade-out 0.3s ease-in forwards; }
```

### Slide-Animationen (Vereinheitlichtes Benennungsschema in v0.5.0)

```css
.slide-in-top { animation: slide-in-top 0.3s ease-out forwards; }
.slide-in-right { animation: slide-in-right 0.3s ease-out forwards; }
.slide-in-bottom { animation: slide-in-bottom 0.3s ease-out forwards; }
.slide-in-left { animation: slide-in-left 0.3s ease-out forwards; }
```

### Scale-Animationen

```css
.scale-in { animation: scale-in 0.3s ease-out forwards; }
.scale-out { animation: scale-out 0.3s ease-in forwards; }
```

### Rotation

```css
.rotate-in { animation: rotate-in 0.3s ease-out forwards; }
.rotate-out { animation: rotate-out 0.3s ease-in forwards; }
```

## Timing und Verzögerung

Sie können die Animationsgeschwindigkeit und -verzögerung anpassen:

```css
/* Geschwindigkeit */
.animation-fast { animation-duration: 0.15s; }
.animation-slow { animation-duration: 0.6s; }

/* Verzögerung */
.animation-delay-1 { animation-delay: 0.1s; }
.animation-delay-2 { animation-delay: 0.2s; }
.animation-delay-3 { animation-delay: 0.3s; }
```

## Barrierefreiheit in Animationen (Neu in v0.5.0)

In Version 0.5.0 wurde der Support für `prefers-reduced-motion` erheblich verbessert:

```css
/* Motion-Safe und Motion-Reduce Utilities */
.motion-safe {
  /* Animationen nur anzeigen, wenn keine Einschränkung besteht */
  @media (prefers-reduced-motion: no-preference) {
    animation: fade-in 0.3s ease-out;
  }
}

.motion-reduce {
  /* Alternative für Nutzer mit aktiviertem 'prefers-reduced-motion' */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
}
```

### System-weite Reduzierung

Das System respektiert automatisch die Benutzereinstellung `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Dialog-Animationen (Neu in v0.5.0)

Spezielle Animationen für `<dialog>`-Elemente:

```html
<button id="openDialog">Dialog öffnen</button>
<dialog id="myDialog" class="dialog dialog-enter">
  Dialog-Inhalt
  <button id="closeDialog">Schließen</button>
</dialog>

<script>
  document.getElementById('openDialog').addEventListener('click', () => {
    document.getElementById('myDialog').showModal();
  });
  
  document.getElementById('closeDialog').addEventListener('click', () => {
    const dialog = document.getElementById('myDialog');
    dialog.classList.remove('dialog-enter');
    dialog.classList.add('dialog-exit');
    setTimeout(() => {
      dialog.close();
      dialog.classList.remove('dialog-exit');
      dialog.classList.add('dialog-enter');
    }, 300);
  });
</script>
```

## Gestaffelte Animationen (Neu in v0.5.0)

Sequentielle Animationen für Listen und Gruppen:

```html
<ul class="staggered-list">
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
  <li>Element 4</li>
</ul>

<style>
  .staggered-list li {
    opacity: 0;
    animation: fade-in 0.3s ease-out forwards;
  }
  
  .staggered-list li:nth-child(1) { animation-delay: 0.1s; }
  .staggered-list li:nth-child(2) { animation-delay: 0.2s; }
  .staggered-list li:nth-child(3) { animation-delay: 0.3s; }
  .staggered-list li:nth-child(4) { animation-delay: 0.4s; }
</style>
```

## Animierte Fokus-Indikatoren (Neu in v0.5.0)

Pulsierende Fokus-Ringe für bessere Barrierefreiheit:

```css
.focus-ring-animated {
  outline: none;
}

.focus-ring-animated:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary);
  animation: focus-ring-pulse 1.5s infinite;
}

@keyframes focus-ring-pulse {
  0% { box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 1); }
  50% { box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.5); }
  100% { box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 1); }
}
```

## Experimentelles Feature: animation-composition (Neu in v0.5.0)

Unterstützung für `animation-composition` zur Kombination mehrerer Animationen:

```css
/* Mehrere Animationen gleichzeitig anwenden und kombinieren */
.element-combined {
  animation: slide-in-top 0.5s ease-out, 
             fade-in 0.3s ease-out, 
             scale-in 0.4s ease-out;
  animation-composition: add;
}
```

## Effekte-System

Das Effekte-System bietet visuelle Effekte wie Schatten, Glanzeffekte und Materialien:

### Schatten-Effekte

```css
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }
```

### Glasmorphismus

```css
.glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-dark {
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

### Neon-Effekte

```css
.neon-text {
  color: var(--color-primary);
  text-shadow: 0 0 5px rgba(var(--color-primary-rgb), 0.8),
               0 0 10px rgba(var(--color-primary-rgb), 0.5),
               0 0 15px rgba(var(--color-primary-rgb), 0.3);
}

.neon-border {
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 5px rgba(var(--color-primary-rgb), 0.8),
              0 0 10px rgba(var(--color-primary-rgb), 0.5),
              inset 0 0 5px rgba(var(--color-primary-rgb), 0.2);
}
```

## Dark-Mode Integration (Verbessert in v0.5.0)

Durchgängige Implementierung mit `color-scheme` und `light-dark()` CSS-Funktion:

```css
:root {
  color-scheme: light dark;
}

.element {
  background-color: light-dark(#ffffff, #121212);
  color: light-dark(#000000, #ffffff);
  border-color: light-dark(#e5e5e5, #333333);
}
```

## Animation-Komposition mit CSS-Eigenschaften

Animationen können durch CSS-Eigenschaften gesteuert werden:

```css
:root {
  --animation-scale: 1;
  --animation-duration: 0.3s;
  --animation-delay: 0s;
}

.custom-animation {
  animation-name: custom-fade;
  animation-duration: var(--animation-duration);
  animation-delay: var(--animation-delay);
  animation-fill-mode: forwards;
}

@keyframes custom-fade {
  0% {
    opacity: 0;
    transform: scale(calc(1 - var(--animation-scale) * 0.2));
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

## Integrierte Übergänge

Standardmäßige Übergänge für interaktive Elemente:

```css
.transition-base {
  transition: var(--transition-base);
}

.transition-transform {
  transition: var(--transition-transform);
}

.transition-colors {
  transition: var(--transition-colors);
}
```

## Kombinieren mit Utilities

Animationen können mit anderen Utility-Klassen kombiniert werden:

```html
<div class="fade-in shadow-lg glass p-4 rounded-lg">
  Ein animiertes Element mit Schatten und Glaseffekt
</div>
```

## Anpassen der Animationen

Sie können die Animationsparameter über CSS-Variablen anpassen:

```css
:root {
  --animation-duration-default: 0.3s;
  --animation-timing-default: ease-out;
  --animation-delay-default: 0s;
}

/* Angepasste Animationsklasse */
.custom-fade-in {
  animation: fade-in var(--animation-duration-custom, var(--animation-duration-default))
             var(--animation-timing-custom, var(--animation-timing-default))
             var(--animation-delay-custom, var(--animation-delay-default))
             forwards;
}
```

## RTL-Support (Verbessert in v0.5.0)

Erweiterte bidirektionale Animation-Unterstützung:

```css
/* Standard LTR Animation */
.slide-in-start { animation: slide-in-left 0.3s ease-out forwards; }

/* Automatische RTL-Anpassung */
[dir="rtl"] .slide-in-start { animation: slide-in-right 0.3s ease-out forwards; }
```

## Best Practices

1. **Maßvoll einsetzen** - Zu viele Animationen können ablenkend wirken
2. **Barrierefreiheit beachten** - Berücksichtigen Sie die Einstellung `prefers-reduced-motion`
3. **Performance im Blick behalten** - Animationen nur für Eigenschaften verwenden, die effizient vom Browser animiert werden können (transform, opacity)
4. **Animation-Layer beachten** - Eigene Animationen im `animations`-Layer definieren
5. **Timing-Funktionen anpassen** - Passende Easing-Funktionen für natürlichere Bewegungen verwenden

## Browser-Kompatibilität

Das Animations- und Effekte-System ist mit allen modernen Browsern kompatibel. Einige fortgeschrittene Features wie `animation-composition` benötigen möglicherweise einen neueren Browser oder Lightning CSS zur Kompilierung 