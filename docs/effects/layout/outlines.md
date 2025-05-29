# Outline-Effekte

Outline-Effekte werden verwendet, um Elemente zu betonen oder hervorzuheben, ohne den Fluss oder das Layout der Seite zu beeinflussen. Die `@casoon/ui-lib` bietet verschiedene Outline-Effekte, die dazu beitragen, wichtige Elemente hervorzuheben und visuelle Hierarchien zu verdeutlichen.

## Basic Usage

Der grundlegende Outline-Effekt kann auf jedes Element angewendet werden:

```html
<div class="outline">Element mit Outline</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Outline-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.outline` | Basisklasse für Outline-Effekte |
| `.outline-thin` | Dünne Outline |
| `.outline-thick` | Dicke Outline |
| `.outline-dashed` | Gestrichelte Outline |
| `.outline-dotted` | Gepunktete Outline |
| `.outline-double` | Doppelte Outline |
| `.outline-inset` | Nach innen versetzte Outline |
| `.outline-outset` | Nach außen versetzte Outline |
| `.outline-glow` | Leuchtende Outline |
| `.outline-pulse` | Pulsierende Outline |
| `.outline-colored` | Farbige Outline |
| `.outline-offset` | Outline mit Abstand |
| `.outline-focus` | Outline bei Fokus |
| `.outline-hover` | Outline bei Hover |
| `.outline-active` | Outline bei Aktivierung |

## Variants

### Dicke-Variants

Verschiedene Dicken für Outlines:

```html
<div class="outline-thin">Dünne Outline</div>
<div class="outline">Standard Outline</div>
<div class="outline-thick">Dicke Outline</div>
<div class="outline-extra-thick">Extra dicke Outline</div>
```

### Stil-Variants

Verschiedene Styles für Outlines:

```html
<div class="outline-solid">Durchgezogene Outline</div>
<div class="outline-dashed">Gestrichelte Outline</div>
<div class="outline-dotted">Gepunktete Outline</div>
<div class="outline-double">Doppelte Outline</div>
<div class="outline-groove">Vertiefungseffekt-Outline</div>
<div class="outline-ridge">Erhebungseffekt-Outline</div>
<div class="outline-inset">Eingelassene Outline</div>
<div class="outline-outset">Hervorstehende Outline</div>
```

### Farb-Variants

Verschiedene Colors für Outlines:

```html
<div class="outline-primary">Primärfarbene Outline</div>
<div class="outline-secondary">Sekundärfarbene Outline</div>
<div class="outline-accent">Akzentfarbene Outline</div>
<div class="outline-success">Erfolgs-Outline</div>
<div class="outline-warning">Warnungs-Outline</div>
<div class="outline-error">Fehler-Outline</div>
<div class="outline-info">Info-Outline</div>
<div class="outline-light">Helle Outline</div>
<div class="outline-dark">Dunkle Outline</div>
<div class="outline-contrast">Kontrastreiche Outline</div>
```

### Offset-Variants

Outlines mit verschiedenen Abständen zum Element:

```html
<div class="outline-offset-sm">Kleiner Abstand</div>
<div class="outline-offset">Standardabstand</div>
<div class="outline-offset-lg">Großer Abstand</div>
<div class="outline-offset-xl">Extra großer Abstand</div>
```

### Spezielle Effekte

Besondere Outline-Effekte für mehr Aufmerksamkeit:

```html
<div class="outline-glow">Leuchtende Outline</div>
<div class="outline-glow-primary">Primärfarbig leuchtende Outline</div>
<div class="outline-pulse">Pulsierende Outline</div>
<div class="outline-pulse-slow">Langsam pulsierende Outline</div>
<div class="outline-pulse-fast">Schnell pulsierende Outline</div>
<div class="outline-dashed-animated">Animierte gestrichelte Outline</div>
<div class="outline-gradient">Verlaufs-Outline</div>
<div class="outline-rainbow">Regenbogen-Outline</div>
```

### Ecken-Variants

Outlines mit unterschiedlich geformten Ecken:

```html
<div class="outline-rounded">Abgerundete Outline</div>
<div class="outline-rounded-sm">Leicht abgerundete Outline</div>
<div class="outline-rounded-lg">Stark abgerundete Outline</div>
<div class="outline-pill">Pillenförmige Outline</div>
<div class="outline-circle">Kreisförmige Outline</div>
```

## Interaktive Outline-Effekte

Outlines, die auf Benutzerinteraktionen reagieren:

```html
<div class="outline-hover">Outline bei Hover</div>
<div class="outline-focus">Outline bei Fokus</div>
<div class="outline-active">Outline bei Aktivierung</div>

<div class="outline-hover-glow">Leuchtende Outline bei Hover</div>
<div class="outline-focus-pulse">Pulsierende Outline bei Fokus</div>
<div class="outline-active-thick">Dicke Outline bei Aktivierung</div>
```

## Kombination mit anderen Elementen

Outline-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Outlines

```html
<button class="btn outline-hover-primary">Button mit Hover-Outline</button>
<button class="btn outline-focus-glow">Button mit Fokus-Glow</button>
```

### Cardn mit Outlines

```html
<div class="card outline">
  <div class="card-header">Cardnüberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>

<div class="card outline-hover-accent">
  <div class="card-header">Cardnüberschrift</div>
  <div class="card-body">Card mit Hover-Outline</div>
</div>
```

### Formelemente mit Outlines

```html
<input type="text" class="outline-focus-success" placeholder="Fokus zeigt Erfolg">
<select class="outline-focus-primary">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Container mit Outlines

```html
<div class="container outline-dashed outline-primary">
  <h2>Container mit gestrichelter Outline</h2>
  <p>Containerinhalt...</p>
</div>
```

## Anpassung

Die Outline-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Outline-Parameter */
  --outline-width: 1px;
  --outline-style: solid;
  --outline-color: currentColor;
  
  /* Dicke-Variants */
  --outline-thin-width: 1px;
  --outline-thick-width: 3px;
  --outline-extra-thick-width: 5px;
  
  /* Offset-Variants */
  --outline-offset: 3px;
  --outline-offset-sm: 1px;
  --outline-offset-lg: 6px;
  --outline-offset-xl: 10px;
  
  /* Farbvarianten */
  --outline-primary-color: var(--color-primary);
  --outline-secondary-color: var(--color-secondary);
  --outline-accent-color: var(--color-accent);
  --outline-success-color: var(--color-success);
  --outline-warning-color: var(--color-warning);
  --outline-error-color: var(--color-error);
  --outline-info-color: var(--color-info);
  
  /* Spezialeffekte */
  --outline-glow-color: rgba(0, 123, 255, 0.5);
  --outline-glow-spread: 3px;
  --outline-pulse-duration: 2s;
  --outline-dashed-animation-duration: 15s;
  
  /* Ecken-Radien */
  --outline-rounded-radius: 4px;
  --outline-rounded-sm-radius: 2px;
  --outline-rounded-lg-radius: 8px;
}
```

## Outline vs. Border

Ein wichtiger Unterschied zwischen `outline` und `border` in CSS:

```html
<div class="comparison">
  <div class="with-border">
    Element mit Border nimmt Platz im Layout ein
  </div>
  <div class="with-outline">
    Element mit Outline nimmt keinen zusätzlichen Platz ein
  </div>
</div>
```

```css
.with-border {
  border: 3px solid red;
  /* Erhöht die Elementgröße um 6px (3px auf jeder Seite) */
}

.with-outline {
  outline: 3px solid blue;
  /* Beeinflusst nicht die Elementgröße oder das Layout */
}
```

## Accessibility

Bei der Usage von Outline-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Fokusindikator**: Entfernen Sie niemals die Outline für Fokuszustände ohne einen alternativen, gut sichtbaren Ersatz
2. **Kontrast**: Stellen Sie sicher, dass Outlines ausreichenden Kontrast zum Hintergrund und zum Element bieten
3. **Consistency**: Verwenden Sie konsistente Outline-Styles für ähnliche Interaktionen

```html
<!-- Barrierefreier Fokusindikator -->
<button class="btn outline-focus-enhanced" tabindex="0">
  Verbesserter Fokusindikator
</button>

<style>
  .outline-focus-enhanced:focus {
    outline: 3px solid var(--outline-primary-color);
    outline-offset: 2px;
    /* Zusätzliche Verbesserung für bessere Sichtbarkeit */
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.4);
  }
  
  /* Keine Outline bei Mausklick, aber sichtbar bei Tastaturfokus */
  .outline-focus-enhanced:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }
  
  .outline-focus-enhanced:focus-visible {
    outline: 3px solid var(--outline-primary-color);
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.4);
  }
</style>
```

## JavaScript-Integration

Für dynamische Outline-Steuerung kann JavaScript verwendet werden:

```javascript
// Dynamisches Hinzufügen/Entfernen von Outlines
function toggleOutline(elementId, outlineClass) {
  const element = document.getElementById(elementId);
  
  if (element.classList.contains(outlineClass)) {
    element.classList.remove(outlineClass);
  } else {
    element.classList.add(outlineClass);
  }
}

// Outline basierend auf Validierung
function validateInput(input) {
  const value = input.value;
  
  // Alle vorherigen Outline-Klassen entfernen
  input.classList.remove('outline-success', 'outline-error');
  
  if (value.length === 0) {
    // Neutral, keine spezielle Outline
    return;
  }
  
  if (value.length >= 5) {
    // Gültige Eingabe
    input.classList.add('outline-success');
  } else {
    // Ungültige Eingabe
    input.classList.add('outline-error');
  }
}

// Event-Listener für Echtzeit-Validierung
document.querySelectorAll('.validate-length').forEach(input => {
  input.addEventListener('input', function() {
    validateInput(this);
  });
});
```

## Animierte Outline-Effekte

```css
/* Pulsierende Outline */
@keyframes outlinePulse {
  0%, 100% { 
    outline-color: var(--outline-color);
    outline-offset: var(--outline-offset);
  }
  50% { 
    outline-color: rgba(var(--color-primary-rgb), 0.5);
    outline-offset: calc(var(--outline-offset) + 2px);
  }
}

.outline-pulse {
  outline: var(--outline-width) solid var(--outline-color);
  animation: outlinePulse var(--outline-pulse-duration) infinite;
}

/* Animierte gestrichelte Outline */
@keyframes outlineDashed {
  to { 
    outline-offset: calc(var(--outline-offset) + 20px);
  }
}

.outline-dashed-animated {
  outline: var(--outline-width) dashed var(--outline-color);
  outline-offset: var(--outline-offset);
  animation: outlineDashed var(--outline-dashed-animation-duration) linear infinite;
}
```

## Browser-Kompatibilität

Die meisten Outline-Effekte sind mit allen modernen Browsern kompatibel. Einige Effekte haben jedoch Einschränkungen in älteren Browsern.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Outlines | ✓ | ✓ | ✓ | ✓ | ✓ |
| Outline-Offset | ✓ | ✓ | ✓ | ✓ | Nein |
| Outline-Radius | Nein | Nein | Nein | Nein | Nein |
| Gradient Outlines | Nein | Nein | Nein | Nein | Nein |

**Hinweis:** Die CSS-Eigenschaft `outline-radius` wird von keinem Browser standardmäßig unterstützt. Für abgerundete Outlines wird in der Bibliothek eine Kombination aus `box-shadow` und anderen Techniken verwendet.

## Verwandte Effekte

- [Border-Effekte](/docs/effects/visual/borders.md) - Randstyling für Elemente
- [Focus-Effekte](/docs/effects/interaction/focus.md) - Fokuseffekte für interaktive Elemente
- [Glow-Effekte](/docs/effects/visual/glow.md) - Leuchteffekte für Elemente 