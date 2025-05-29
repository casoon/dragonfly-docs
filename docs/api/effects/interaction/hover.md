---
title: Hover Effects
category: API
outline: deep
---

# Hover Effects

Die Casoon UI Library bietet eine Sammlung von Hover-Effekten, die Sie auf interaktive Elemente anwenden können, um das Benutzererlebnis zu verbessern. Diese Effekte werden aktiviert, wenn Benutzer mit der Maus über Elemente fahren oder sie auf Touch-Geräten berühren.

## Overview

Alle Hover-Effekte sind für optimale Leistung konzipiert und berücksichtigen Accessibilitysaspekte wie `prefers-reduced-motion`.

## Import

```css
/* Entweder alle Interaktionseffekte importieren */
@import '@casoon/ui-lib/effects/interaction/index.css';

/* Oder spezifisch nur die Hover-Effekte */
@import '@casoon/ui-lib/effects/interaction/hover.css';
```

## Skalierungseffekte

Skalierungseffekte vergrößern Elemente, wenn Benutzer mit der Maus darüber fahren:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-scale` | Standardskalierung (5% größer) beim Hover |
| `.hover-scale-sm` | Kleine Skalierung (2% größer) beim Hover |
| `.hover-scale-lg` | Große Skalierung (10% größer) beim Hover |

### Example

```html
<button class="hover-scale">
  Standard-Skalierung
</button>

<button class="hover-scale-sm">
  Kleine Skalierung
</button>

<button class="hover-scale-lg">
  Große Skalierung
</button>
```

## Anhebungseffekte

Anhebungseffekte heben Elemente beim Hover an, kombiniert mit einem Schatteneffekt:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-lift` | Standardanhebung (5px nach oben) mit Schatten |
| `.hover-lift-sm` | Kleine Anhebung (2px nach oben) mit Schatten |
| `.hover-lift-lg` | Große Anhebung (10px nach oben) mit Schatten |

### Example

```html
<div class="card hover-lift">
  Diese Card hebt sich beim Hover
</div>

<div class="card hover-lift-sm">
  Diese Card hebt sich leicht beim Hover
</div>

<div class="card hover-lift-lg">
  Diese Card hebt sich stark beim Hover
</div>
```

## Neigungseffekte

Neigungseffekte (Tilt) erzeugen eine 3D-Rotation beim Hover:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-tilt` | Standard-3D-Neigung (10 Grad) beim Hover |
| `.hover-tilt-sm` | Kleine 3D-Neigung (5 Grad) beim Hover |
| `.hover-tilt-lg` | Große 3D-Neigung (15 Grad) beim Hover |

### Example

```html
<div class="card hover-tilt">
  Diese Card neigt sich beim Hover
</div>

<div class="card hover-tilt-sm">
  Diese Card neigt sich leicht beim Hover
</div>

<div class="card hover-tilt-lg">
  Diese Card neigt sich stark beim Hover
</div>
```

## Glüheffekte

Glüheffekte fügen einen leuchtenden Schatten beim Hover hinzu:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-glow` | Standardleuchten beim Hover |
| `.hover-glow-sm` | Schwaches Leuchten beim Hover |
| `.hover-glow-lg` | Starkes Leuchten beim Hover |

### Example

```html
<button class="hover-glow">
  Leuchtender Button
</button>

<button class="hover-glow-sm">
  Leicht leuchtender Button
</button>

<button class="hover-glow-lg">
  Stark leuchtender Button
</button>
```

## Randeffekte

Randeffekte fügen einen animierten Rand beim Hover hinzu:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-border` | Standardanimierter Rand beim Hover (2px) |
| `.hover-border-sm` | Dünner animierter Rand beim Hover (1px) |
| `.hover-border-lg` | Dicker animierter Rand beim Hover (3px) |

### Example

```html
<a href="#" class="hover-border">
  Link mit animiertem Rand
</a>

<a href="#" class="hover-border-sm">
  Link mit dünnem animiertem Rand
</a>

<a href="#" class="hover-border-lg">
  Link mit dickem animiertem Rand
</a>
```

## Hintergrundeffekte

Hintergrundeffekte ändern die Hintergrundfarbe beim Hover:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-bg` | Standardhintergrund beim Hover |
| `.hover-bg-sm` | Leichter Hintergrund beim Hover |
| `.hover-bg-lg` | Intensiver Hintergrund beim Hover |

### Example

```html
<div class="hover-bg">
  Element mit Hover-Hintergrund
</div>

<div class="hover-bg-sm">
  Element mit leichtem Hover-Hintergrund
</div>

<div class="hover-bg-lg">
  Element mit intensivem Hover-Hintergrund
</div>
```

## Farbvarianten

Sie können die Farbe der Hover-Effekte mit diesen Klassen anpassen:

| Klasse | Beschreibung |
|--------|--------------|
| `.hover-color-primary` | Primärfarbe für Hover-Effekte |
| `.hover-color-secondary` | Sekundärfarbe für Hover-Effekte |
| `.hover-color-success` | Erfolgsfarbe für Hover-Effekte |
| `.hover-color-error` | Fehlerfarbe für Hover-Effekte |
| `.hover-color-warning` | Warnfarbe für Hover-Effekte |
| `.hover-color-info` | Infofarbe für Hover-Effekte |

### Example

```html
<button class="hover-glow hover-color-primary">
  Primärfarbener Glüheffekt
</button>

<button class="hover-border hover-color-success">
  Erfolgsfarbe für Randeffekt
</button>

<div class="hover-bg hover-color-warning">
  Warnfarbe für Hintergrundeffekt
</div>
```

## Effektkombinationen

Hover-Effekte können miteinander und mit anderen Effekten kombiniert werden:

```html
<!-- Skalierung und Glühen -->
<button class="hover-scale hover-glow hover-color-primary">
  Skalierende und leuchtende Button
</button>

<!-- Anhebung mit Farbeffekt -->
<div class="card hover-lift hover-color-info">
  Card mit Anhebung und Info-Farbeffekt
</div>

<!-- Mehrere Effekte kombiniert -->
<a href="#" class="hover-scale-sm hover-border hover-color-success">
  Link mit mehreren Hover-Effekten
</a>
```

## Accessibility

Alle Hover-Effekte respektieren die Benutzereinstellung `prefers-reduced-motion`. Wenn ein Benutzer reduzierte Bewegung bevorzugt, werden die Animationen deaktiviert.

```css
@media (prefers-reduced-motion: reduce) {
  .hover-scale,
  .hover-lift,
  .hover-tilt,
  /* usw. */
  {
    transition: none;
  }
  
  .hover-scale:hover,
  .hover-lift:hover,
  .hover-tilt:hover,
  /* usw. */
  {
    transform: none;
  }
}
```

## Anpassung

Sie können die Hover-Effekte mit CSS Variables anpassen:

```css
:root {
  /* Colors für Hover-Effekte */
  --hover-primary: rgb(59 130 246 / 50%);
  --hover-primary-bg: rgb(59 130 246 / 10%);
  --hover-secondary: rgb(107 114 128 / 50%);
  --hover-secondary-bg: rgb(107 114 128 / 10%);
  --hover-success: rgb(16 185 129 / 50%);
  --hover-success-bg: rgb(16 185 129 / 10%);
  --hover-error: rgb(239 68 68 / 50%);
  --hover-error-bg: rgb(239 68 68 / 10%);
  --hover-warning: rgb(245 158 11 / 50%);
  --hover-warning-bg: rgb(245 158 11 / 10%);
  --hover-info: rgb(6 182 212 / 50%);
  --hover-info-bg: rgb(6 182 212 / 10%);
}
```

## Empfohlene Anwendungen

- **Skalierung**: Verwenden Sie diese für kleine UI-Elemente wie Buttons oder Icons.
- **Anhebung**: Ideal für Cardn, Container oder hervorgehobene Elemente.
- **Neigung**: Verwenden Sie diese für spielerische Elemente oder um 3D-Effekte hervorzuheben.
- **Glühen**: Effektiv für Call-to-Action-Buttons oder wichtige Elemente.
- **Rand**: Gut für Links, Menüelemente oder Navigationseinträge.
- **Hintergrund**: Nützlich für Listeneinträge, Menüelemente oder interaktive Container.

## Best Practices

1. **Consistency bewahren**: Verwenden Sie dieselben Hover-Effekte für ähnliche Elemente in Ihrer Anwendung.
2. **Übermäßige Animation vermeiden**: Kombinieren Sie nicht zu viele Effekte auf einmal.
3. **Accessibility beachten**: Stellen Sie sicher, dass Ihre Inhalte auch ohne Hover zugänglich sind.
4. **Leistung optimieren**: Verwenden Sie Transformationen und Opacity für flüssige Animationen.
5. **Mobile Geräte berücksichtigen**: Planen Sie auch für Touch-Interaktionen, da es auf Mobilgeräten keine Hover-Ereignisse gibt.

## Browser-Kompatibilität

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Hover-Effekte | 26+ | 16+ | 9+ | 12+ |
| CSS-Transitions | 26+ | 16+ | 9+ | 12+ |
| 3D-Transformationen | 36+ | 16+ | 9+ | 12+ |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ | 