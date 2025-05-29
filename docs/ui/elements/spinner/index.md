---
title: spinners element
outline: deep
---


# spinners

the spinners-element bietet Ladeanzeigen and animations for asynchrone Prozesse. spinners informieren user daruber, that a Operation im background ausgefuhrt wird, and verbessern so the wahrgenommene Reaktionsfahigkeit the Benutzeroberflache.

## Installation

the spinners-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the spinners-Component */
@import '@casoon/ui-lib/components/spinners.css';
```

## Basic Usage

```html
<div class="spinners"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

## Sizesvarianten

### Extra small (XS)

```html
<div class="spinners spinners--xs"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 2px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 0.75rem; width: 0.75rem; margin: 1rem auto;">
  </div>
</div>

### small (SM)

```html
<div class="spinners spinners--sm"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 2px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1rem; width: 1rem; margin: 1rem auto;">
  </div>
</div>

### Mittel (MD, Standard)

```html
<div class="spinners spinners--md"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Gross (LG)

```html
<div class="spinners spinners--lg"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 4px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 2rem; width: 2rem; margin: 1rem auto;">
  </div>
</div>

### Extra Gross (XL)

```html
<div class="spinners spinners--xl"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 5px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 3rem; width: 3rem; margin: 1rem auto;">
  </div>
</div>

## Style-Variants

### Ring (Standard)

```html
<div class="spinners spinners--ring"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Punkte

```html
<div class="spinners spinners--dots"></div>
```

<div class="example-wrappers">
  <div style="display: flex; justify-content: center; gap: 0.5rem; margin: 1rem auto;">
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem; animation-delay: -0.32s;"></div>
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem; animation-delay: -0.16s;"></div>
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem;"></div>
  </div>
</div>

<style>
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
}
</style>

### Pulsieren

```html
<div class="spinners spinners--pulse"></div>
```

<div class="example-wrappers">
  <div style="animation: pulse 1.5s infinite; background-color: #3b82f6; border-radius: 50%; height: 1.5rem; width: 1.5rem; margin: 1rem auto;"></div>
</div>

<style>
@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.7;
  }
}
</style>

### Springen

```html
<div class="spinners spinners--bounce"></div>
```

<div class="example-wrappers">
  <div style="animation: bounce-up 0.6s infinite alternate; background-color: #3b82f6; border-radius: 50%; height: 1rem; width: 1rem; margin: 1rem auto;"></div>
</div>

<style>
@keyframes bounce-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>

## Farbvarianten

### Primar

```html
<div class="spinners spinners--primary"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(59, 130, 246, 0.2); border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Sekundar

```html
<div class="spinners spinners--secondary"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(107, 114, 128, 0.2); border-radius: 50%; border-top-color: #6b7280; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Hell

```html
<div class="spinners spinners--light"></div>
```

<div class="example-wrappers" style="background-color: #4b5563; padding: 1rem;">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(255, 255, 255, 0.2); border-radius: 50%; border-top-color: #ffffff; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Dunkel

```html
<div class="spinners spinners--dark"></div>
```

<div class="example-wrappers">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(17, 24, 39, 0.2); border-radius: 50%; border-top-color: #111827; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

## with Text

```html
<div class="spinners-containers">
  <div class="spinners"></div>
  <span class="spinners-text">Ladt...</span>
</div>
```

<div class="example-wrappers">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
    <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem;"></div>
    <span style="font-size: 0.875rem; color: #4b5563;">Ladt...</span>
  </div>
</div>

## Vollbildschirm-Overlay

```html
<div class="spinners-overlay">
  <div class="spinners spinners--lg"></div>
</div>
```

<div class="example-wrappers">
  <div style="position: relative; height: 100px; background-color: #f3f4f6; border-radius: 0.375rem; overflow: hidden;">
    <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center; background-color: rgba(255, 255, 255, 0.8);">
      <div style="animation: spin 0.6s linear infinite; border: 4px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 2rem; width: 2rem;"></div>
    </div>
  </div>
</div>

## Customization

the spinners kann over CSS Variables angepasst become:

```css
:root {
  --color-primary: #3b82f6;     /* Primarfarbe for den spinners */
  --color-gray-300: #d1d5db;    /* Grundfarbe for den spinners-background */
}
```

## Accessibility

for a bessere Accessibility note please folgende Punkte:

- Fugen them geeignete ARIA-attributes hinzu, um den Ladezustand for Screenreader anzukundigen
- use them beschreibenden Text, the angibt, what geladen wird (it sei because, it ist aus dem Kontext offensichtlich)
- ensure, that a ausreichender Kontrast between dem spinners and seinem background besteht
- Fugen them a beschreibendes Label with `aria-label` or `aria-labelledby` hinzu

```html
<div class="spinners" role="status" aria-label="content wird geladen"></div>

<!-- or with sichtbarem Text -->
<div class="spinners-containers" role="status">
  <div class="spinners"></div>
  <span class="spinners-text">Benutzerdaten become geladen...</span>
  <span class="sr-only">please warten them, wahrend we Ihre contents load</span>
</div>
```

## Bewahrte Praktiken

- use them spinners, um anzuzeigen, that contents geladen become or a Aktion verarbeitet wird
- Halten them animations subtil and not ablenkend
- use them for langere Vorgange Fortschrittsanzeigen anstelle from unbestimmten Spinnern
- Platzieren them spinners on einer logischen Stelle (where the content erscheinen wird)
- use them for the load on Seitenebene einen Vollbild-Overlay-spinners
- Vermeiden them the gleichzeitige Usage mehrerer spinners in derselben Ansicht
- Erwagen them the add einer Timeout-Nachricht for lang andauernde Vorgange

## Browser-Kompatibilitat

the spinners ist with allen modernen Browsern kompatibel:

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende animation | ✅ | ✅ | ✅ | ✅ |
| CSS-animations | ✅ | ✅ | ✅ | ✅ |
| Variants | ✅ | ✅ | ✅ | ✅ |

## Integration with icons

You can also icons as spinners use, indem them the entsprechenden icon-classes add:

```html
<!-- Tabler icon as spinners -->
<i class="ti ti-loader ti-spin"></i>

<!-- Lucide icon as spinners -->
<i class="lucide-loader lucide-spin"></i>
``` 