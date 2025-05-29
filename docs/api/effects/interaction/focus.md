---
title: Focus Effects
category: API
outline: deep
---

# Focus Effects

Die Casoon UI Library bietet eine Sammlung von Focus-Effekten, die die Accessibility und Benutzererfahrung verbessern. Diese Effekte werden aktiviert, wenn Elemente fokussiert werden, sei es durch Tastaturnavigation oder Mausklicks.

## Overview

Focus-Effekte sind ein wichtiger Bestandteil der Accessibility, da sie visuelles Feedback geben, welches Element aktuell fokussiert ist. Dies ist besonders wichtig für Tastaturbenutzer und Screenreader-Benutzer.

## Import

```css
/* Entweder alle Interaktionseffekte importieren */
@import '@casoon/ui-lib/effects/interaction/index.css';

/* Oder spezifisch nur die Focus-Effekte */
@import '@casoon/ui-lib/effects/interaction/focus.css';
```

## Focus-Ring-Effekte

Focus-Ring-Effekte fügen einen Schattenring um fokussierte Elemente hinzu:

| Klasse | Beschreibung |
|--------|--------------|
| `.focus-ring` | Standard-Focus-Ring (3px) bei Fokussierung |
| `.focus-ring-sm` | Kleinerer Focus-Ring (2px) bei Fokussierung |
| `.focus-ring-lg` | Größerer Focus-Ring (4px) bei Fokussierung |

### Example

```html
<button class="focus-ring">
  Standard Focus-Ring
</button>

<input type="text" class="focus-ring-sm" placeholder="Kleiner Focus-Ring">

<select class="focus-ring-lg">
  <option>Großer Focus-Ring</option>
</select>
```

## Outline-Effekte

Outline-Effekte fügen einen Umriss um fokussierte Elemente hinzu:

| Klasse | Beschreibung |
|--------|--------------|
| `.focus-outline` | Standard-Outline (2px) mit Abstand bei Fokussierung |
| `.focus-outline-sm` | Dünne Outline (1px) mit kleinem Abstand bei Fokussierung |
| `.focus-outline-lg` | Dicke Outline (3px) mit größerem Abstand bei Fokussierung |

### Example

```html
<button class="focus-outline">
  Standard Outline
</button>

<input type="text" class="focus-outline focus-outline-sm" placeholder="Dünne Outline">

<select class="focus-outline focus-outline-lg">
  <option>Dicke Outline</option>
</select>
```

## Hintergrundeffekte

Hintergrundeffekte ändern die Hintergrundfarbe beim Fokussieren:

| Klasse | Beschreibung |
|--------|--------------|
| `.focus-bg` | Standard-Hintergrundfarbe bei Fokussierung |
| `.focus-bg-sm` | Leichte Hintergrundfarbe bei Fokussierung |
| `.focus-bg-lg` | Intensive Hintergrundfarbe bei Fokussierung |

### Example

```html
<button class="focus-bg">
  Standard Hintergrund
</button>

<input type="text" class="focus-bg-sm" placeholder="Leichter Hintergrund">

<select class="focus-bg-lg">
  <option>Intensiver Hintergrund</option>
</select>
```

## Farbvarianten

Sie können die Farbe der Focus-Effekte mit diesen Klassen anpassen:

| Klasse | Beschreibung |
|--------|--------------|
| `.focus-color-primary` | Primärfarbe für Focus-Effekte |
| `.focus-color-secondary` | Sekundärfarbe für Focus-Effekte |
| `.focus-color-success` | Erfolgsfarbe für Focus-Effekte |
| `.focus-color-error` | Fehlerfarbe für Focus-Effekte |
| `.focus-color-warning` | Warnfarbe für Focus-Effekte |
| `.focus-color-info` | Infofarbe für Focus-Effekte |

### Example

```html
<button class="focus-ring focus-color-primary">
  Primärfarbener Focus-Ring
</button>

<input type="text" class="focus-outline focus-color-success" placeholder="Erfolgsfarben-Outline">

<select class="focus-bg focus-color-warning">
  <option>Warnfarben-Hintergrund</option>
</select>
```

## Effektkombinationen

Focus-Effekte können miteinander und mit anderen Effekten kombiniert werden:

```html
<!-- Focus-Ring mit Hover-Effekt -->
<button class="focus-ring focus-color-primary hover-scale">
  Fokusring mit Hover-Skalierung
</button>

<!-- Verschiedene States mit konsistenten Colors -->
<input type="text" 
       class="focus-outline focus-color-info hover-border hover-color-info" 
       placeholder="Konsistente Effekte">

<!-- Kombinierte Interaktionseffekte -->
<a href="#" class="focus-bg focus-color-success hover-bg hover-color-success">
  Link mit passenden Hover- und Focus-Effekten
</a>
```

## Accessibility

Alle Focus-Effekte sind so konzipiert, dass sie die Accessibility verbessern:

1. **Hoher Kontrast**: Die Standardfarben bieten einen guten Kontrast zum Hintergrund.
2. **Deutliche Unterscheidung**: Focus-Effekte sind deutlich sichtbar und heben sich von normalen Statesn ab.
3. **Keine Abhängigkeit von Farbe allein**: Die Effekte verwenden sowohl Farbe als auch andere visuelle Hinweise.
4. **Respektieren von Bewegungseinschränkungen**: Alle Transitionen werden deaktiviert, wenn der Benutzer reduzierte Bewegung bevorzugt.

```css
@media (prefers-reduced-motion: reduce) {
  .focus-ring,
  .focus-outline,
  .focus-bg,
  /* usw. */
  {
    transition: none;
  }
}
```

## Anpassung

Sie können die Focus-Effekte mit CSS Variables anpassen:

```css
:root {
  /* Colors für Focus-Effekte */
  --focus-primary: rgb(59 130 246 / 50%);
  --focus-primary-bg: rgb(59 130 246 / 10%);
  --focus-secondary: rgb(107 114 128 / 50%);
  --focus-secondary-bg: rgb(107 114 128 / 10%);
  --focus-success: rgb(16 185 129 / 50%);
  --focus-success-bg: rgb(16 185 129 / 10%);
  --focus-error: rgb(239 68 68 / 50%);
  --focus-error-bg: rgb(239 68 68 / 10%);
  --focus-warning: rgb(245 158 11 / 50%);
  --focus-warning-bg: rgb(245 158 11 / 10%);
  --focus-info: rgb(6 182 212 / 50%);
  --focus-info-bg: rgb(6 182 212 / 10%);
}
```

## Empfohlene Anwendungen

- **Focus-Ring**: Ideal für Buttons, Links, Formelemente und andere interaktive Elemente.
- **Outline**: Gut für größere Elemente oder wenn Sie einen traditionelleren Focus-Stil bevorzugen.
- **Hintergrund**: Nützlich für Menüelemente, Navigationslinks und interaktive Listeneinträge.

## Best Practices

1. **Niemals Focus-Styles entfernen**: Entfernen Sie niemals `outline: none` ohne einen alternativen Focus-Stil hinzuzufügen.
2. **Consistency bewahren**: Verwenden Sie dieselben Focus-Effekte für ähnliche Elemente in Ihrer Anwendung.
3. **Sicherstellung der Sichtbarkeit**: Stellen Sie sicher, dass Focus-Effekte auf verschiedenen Hintergründen sichtbar sind.
4. **Kombination mit anderen Statesn**: Stellen Sie sicher, dass Focus-Effekte auch sichtbar sind, wenn sie mit Hover oder Active-Statesn kombiniert werden.
5. **Ausreichender Kontrast**: Verwenden Sie Focus-Colors mit ausreichendem Kontrast zum Hintergrund (mindestens 3:1).

## Browser-Kompatibilität

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Focus-Effekte | 26+ | 16+ | 9+ | 12+ |
| CSS-Transitions | 26+ | 16+ | 9+ | 12+ |
| Box-Shadow | 10+ | 4+ | 5.1+ | 12+ |
| Outline-Offset | 15+ | 3.5+ | 3+ | 12+ |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ | 