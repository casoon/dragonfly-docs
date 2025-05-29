# Outline-effects

Outline-effects become verwendet, um elements to betonen or hervorzuheben, without den Fluss or the layout the Seite to beeinflussen. the `@casoon/ui-lib` bietet verschiedene Outline-effects, the for that beitragen, wichtige elements hervorzuheben and visuelle Hierarchien to verdeutlichen.

## Basic Usage

the grundlegende Outline-effect kann on jedes element angewendet become:

```html
<div class="outline">element with Outline</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Outline-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.outline` | Basisklasse for Outline-effects |
| `.outline-thin` | Dunne Outline |
| `.outline-thick` | Dicke Outline |
| `.outline-dashed` | Gestrichelte Outline |
| `.outline-dotted` | Gepunktete Outline |
| `.outline-double` | Doppelte Outline |
| `.outline-inset` | after innen versetzte Outline |
| `.outline-outset` | after aussen versetzte Outline |
| `.outline-glow` | Leuchtende Outline |
| `.outline-pulse` | Pulsierende Outline |
| `.outline-colored` | Farbige Outline |
| `.outline-offset` | Outline with spacing |
| `.outline-focus` | Outline at Fokus |
| `.outline-hover` | Outline at Hover |
| `.outline-active` | Outline at Aktivierung |

## Variants

### Dicke-Variants

Verschiedene Dicken for Outlines:

```html
<div class="outline-thin">Dunne Outline</div>
<div class="outline">Standard Outline</div>
<div class="outline-thick">Dicke Outline</div>
<div class="outline-extra-thick">Extra dicke Outline</div>
```

### Style-Variants

Verschiedene Styles for Outlines:

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

Verschiedene Colors for Outlines:

```html
<div class="outline-primary">Primarfarbene Outline</div>
<div class="outline-secondary">Sekundarfarbene Outline</div>
<div class="outline-accent">Akzentfarbene Outline</div>
<div class="outline-success">Erfolgs-Outline</div>
<div class="outline-warning">Warnungs-Outline</div>
<div class="outline-error">errors-Outline</div>
<div class="outline-info">info-Outline</div>
<div class="outline-light">Helle Outline</div>
<div class="outline-dark">Dunkle Outline</div>
<div class="outline-contrast">Kontrastreiche Outline</div>
```

### Offset-Variants

Outlines with verschiedenen spacings zum element:

```html
<div class="outline-offset-sm">smaller spacing</div>
<div class="outline-offset">Standardabstand</div>
<div class="outline-offset-lg">Grosser spacing</div>
<div class="outline-offset-xl">Extra grosser spacing</div>
```

### Spezielle effects

Besondere Outline-effects for more Aufmerksamkeit:

```html
<div class="outline-glow">Leuchtende Outline</div>
<div class="outline-glow-primary">Primarfarbig leuchtende Outline</div>
<div class="outline-pulse">Pulsierende Outline</div>
<div class="outline-pulse-slow">Langsam pulsierende Outline</div>
<div class="outline-pulse-fast">Schnell pulsierende Outline</div>
<div class="outline-dashed-animated">Animierte gestrichelte Outline</div>
<div class="outline-gradient">Verlaufs-Outline</div>
<div class="outline-rainbow">Regenbogen-Outline</div>
```

### Ecken-Variants

Outlines with unterschiedlich geformten Ecken:

```html
<div class="outline-rounded">Abgerundete Outline</div>
<div class="outline-rounded-sm">Leicht abgerundete Outline</div>
<div class="outline-rounded-lg">Stark abgerundete Outline</div>
<div class="outline-pill">Pillenformige Outline</div>
<div class="outline-circle">Kreisformige Outline</div>
```

## Interaktive Outline-effects

Outlines, the on Benutzerinteraktionen reagieren:

```html
<div class="outline-hover">Outline at Hover</div>
<div class="outline-focus">Outline at Fokus</div>
<div class="outline-active">Outline at Aktivierung</div>

<div class="outline-hover-glow">Leuchtende Outline at Hover</div>
<div class="outline-focus-pulse">Pulsierende Outline at Fokus</div>
<div class="outline-active-thick">Dicke Outline at Aktivierung</div>
```

## Kombination with anderen Elementen

Outline-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Outlines

```html
<button class="btn outline-hover-primary">button with Hover-Outline</button>
<button class="btn outline-focus-glow">button with Fokus-Glow</button>
```

### Cardn with Outlines

```html
<div class="card outline">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>

<div class="card outline-hover-accent">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Card with Hover-Outline</div>
</div>
```

### form elements with Outlines

```html
<input type="text" class="outline-focus-success" placeholder="Fokus zeigt success">
<select class="outline-focus-primary">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### containers with Outlines

```html
<div class="containers outline-dashed outline-primary">
  <h2>containers with gestrichelter Outline</h2>
  <p>Containerinhalt...</p>
</div>
```

## Customization

the Outline-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Outline-parameter */
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

a wichtiger Unterschied between `outline` and `border` in CSS:

```html
<div class="comparison">
  <div class="with-border">
    element with Border nimmt Platz im layout a
  </div>
  <div class="with-outline">
    element with Outline nimmt keinen zusatzlichen Platz a
  </div>
</div>
```

```css
.with-border {
  border: 3px solid red;
  /* Erhoht the Elementgrosse um 6px (3px on every Seite) */
}

.with-outline {
  outline: 3px solid blue;
  /* Beeinflusst not the Elementgrosse or the layout */
}
```

## Accessibility

at the Usage from Outline-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Fokusindikator**: remove them niemals the Outline for Fokuszustande without einen alternativen, good sichtbaren Ersatz
2. **Kontrast**: ensure, that Outlines ausreichenden Kontrast zum background and zum element bieten
3. **Consistency**: use them konsistente Outline-Styles for ahnliche interactions

```html
<!-- Barrierefreier Fokusindikator -->
<button class="btn outline-focus-enhanced" tabindex="0">
  Verbesserter Fokusindikator
</button>

<style>
  .outline-focus-enhanced:focus {
    outline: 3px solid var(--outline-primary-color);
    outline-offset: 2px;
    /* Zusatzliche Verbesserung for bessere visibility */
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.4);
  }
  
  /* no Outline at Mausklick, but sichtbar at Tastaturfokus */
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

for dynamische Outline-Steuerung kann JavaScript verwendet become:

```javascript
// Dynamisches add/remove from Outlines
function toggleOutline(elementId, outlineClass) {
  const element = document.getElementById(elementId);
  
  if (element.classList.contains(outlineClass)) {
    element.classList.remove(outlineClass);
  } else {
    element.classList.add(outlineClass);
  }
}

// Outline basierend on validation
function validateInput(input) {
  const value = input.value;
  
  // all vorherigen Outline-classes remove
  input.classList.remove('outline-success', 'outline-error');
  
  if (value.length === 0) {
    // Neutral, no spezielle Outline
    return;
  }
  
  if (value.length >= 5) {
    // Gultige input
    input.classList.add('outline-success');
  } else {
    // Ungultige input
    input.classList.add('outline-error');
  }
}

// Event-Listener for Echtzeit-validation
document.querySelectorAll('.validate-length').forEach(input => {
  input.addEventListener('input', function() {
    validateInput(this);
  });
});
```

## Animierte Outline-effects

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

## Browser-Kompatibilitat

the meisten Outline-effects sind with allen modernen Browsern kompatibel. some effects have however Einschrankungen in alteren Browsern.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Outlines | ✓ | ✓ | ✓ | ✓ | ✓ |
| Outline-Offset | ✓ | ✓ | ✓ | ✓ | Nein |
| Outline-Radius | Nein | Nein | Nein | Nein | Nein |
| Gradient Outlines | Nein | Nein | Nein | Nein | Nein |

**Note:** the CSS-Property `outline-radius` wird from keinem Browser by default unterstutzt. for abgerundete Outlines wird in the Bibliothek a Kombination aus `box-shadow` and anderen Techniken verwendet.

## Verwandte effects

- [Border-effects](/docs/effects/visual/borders.md) - Randstyling for elements
- [Focus-effects](/docs/effects/interaction/focus.md) - Fokuseffekte for interaktive elements
- [Glow-effects](/docs/effects/visual/glow.md) - Leuchteffekte for elements 