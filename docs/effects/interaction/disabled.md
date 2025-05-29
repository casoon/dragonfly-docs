# Disabled-effects

Disabled-effects become verwendet, um dem user visuell to signalisieren, that a element not interaktiv or verfugbar ist. the `@casoon/ui-lib` bietet verschiedene Disabled-effects, the on konsistente Weise zeigen, that a element deaktiviert ist.

## Basic Usage

the grundlegende Disabled-effect kann on jedes interaktive element angewendet become:

```html
<button class="btn disabled">Deaktivierter button</button>
```

or with dem HTML-attributes `disabled`:

```html
<button class="btn" disabled>Deaktivierter button</button>
```

## CSS-classes

the folgenden CSS-classes stehen for Disabled-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.disabled` | Basisklasse for deaktivierte elements |
| `.disabled-opacity` | Deaktivierung through reduzierte Deckkraft |
| `.disabled-grayscale` | Deaktivierung through Umwandlung in Graustufen |
| `.disabled-blur` | Deaktivierung through leichtes Weichzeichnen |
| `.disabled-muted` | Deaktivierung through gedampfte Colors |
| `.disabled-striped` | Deaktivierung through diagonale Streifen |
| `.disabled-overlay` | Deaktivierung through Uberlagerung |

## Variants

### Opacity-effect

the einfachste Form the visuellen Deaktivierung ist the Reduzierung the Deckkraft:

```html
<button class="btn disabled-opacity">Reduzierte Deckkraft</button>
```

### Grayscale-effect

Umwandlung in Graustufen for a deutlichere Deaktivierung:

```html
<button class="btn disabled-grayscale">Graustufen</button>
```

### Blur-effect

Leichtes Weichzeichnen des Elements:

```html
<button class="btn disabled-blur">Weichgezeichnet</button>
```

### Muted-effect

Reduzierung the Farbsattigung and Customization the Helligkeit:

```html
<button class="btn disabled-muted">Gedampfte Colors</button>
```

### Striped-effect

Diagonale Streifen over dem element:

```html
<button class="btn disabled-striped">with Streifen</button>
```

### Overlay-effect

a halbtransparentes Overlay over dem element:

```html
<button class="btn disabled-overlay">with Overlay</button>
```

## Kombination with anderen Elementen

Disabled-effects can with verschiedenen UI-Elementen kombiniert become:

### form elements

```html
<!-- Standard HTML disabled attributes -->
<input type="text" disabled placeholder="Deaktiviertes text field">
<select disabled>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- with CSS-classes -->
<input type="text" class="disabled-opacity" placeholder="Deaktiviertes text field">
<select class="disabled-grayscale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### buttons and links

```html
<button class="btn btn-primary disabled">Deaktivierter Primar-button</button>
<button class="btn btn-secondary disabled-grayscale">Deaktivierter Sekundar-button</button>
<a href="#" class="btn disabled-muted">Deaktivierter link-button</a>
```

### Interaktive Components

```html
<div class="card disabled-opacity">
  <div class="card-header">Deaktivierte Card</div>
  <div class="card-body">content not verfugbar</div>
</div>

<div class="dropdown disabled">
  <button class="dropdown-toggle">Dropdown</button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
  </div>
</div>
```

## Customization

the Disabled-effects can over CSS Variables angepasst become:

```css
:root {
  --disabled-opacity: 0.5; /* Deckkraft for disabled-opacity */
  --disabled-grayscale: 100%; /* Graustufen-Value for disabled-grayscale */
  --disabled-blur: 1px; /* Weichzeichnungs-Radius for disabled-blur */
  --disabled-saturation: 40%; /* Sattigungswert for disabled-muted */
  --disabled-brightness: 90%; /* Helligkeitswert for disabled-muted */
  --disabled-stripe-color: rgba(255, 255, 255, 0.3); /* Streifenfarbe */
  --disabled-stripe-angle: 45deg; /* Streifenwinkel */
  --disabled-stripe-size: 10px; /* Streifenbreite */
  --disabled-overlay-color: rgba(240, 240, 240, 0.6); /* Overlay-color */
  --disabled-cursor: not-allowed; /* Cursor for deaktivierte elements */
}
```

## Accessibility

at the Usage from Disabled-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Semantik**: use them immer the native `disabled`-attributes for form elements
2. **ARIA**: for not-native elements use them `aria-disabled="true"`
3. **Kontrast**: ensure them on ausreichenden Kontrast, also im deaktivierten state
4. **Feedback**: Geben them zusatzliches Feedback at Interaktionsversuchen
5. **Text**: Erklaren them, why a element deaktiviert ist

```html
<!-- Barrierefreier deaktivierter button -->
<button 
  class="btn disabled" 
  disabled 
  aria-disabled="true" 
  aria-label="button deaktiviert: please zuerst a Form ausfullen"
>
  Form absenden
</button>

<!-- Barrierefreies deaktiviertes benutzerdefiniertes element -->
<div 
  class="custom-control disabled-opacity" 
  aria-disabled="true" 
  tabindex="-1" 
  role="button"
>
  not verfugbar
  <span class="sr-only">these Function ist derzeit not verfugbar</span>
</div>
```

## JavaScript-Integration

for fortgeschrittene Disabled-States kann JavaScript verwendet become:

```javascript
// Dynamische Deaktivierung/Aktivierung from Elementen
function setElementDisabled(element, isDisabled, reason = '') {
  if (isDisabled) {
    // Visuell deactivate
    element.classList.add('disabled');
    
    // Semantisch deactivate
    if (element.tagName === 'button' || element.tagName === 'INPUT' || 
        element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
      element.setAttribute('disabled', 'disabled');
    }
    
    // ARIA-attributes setzen
    element.setAttribute('aria-disabled', 'true');
    
    // tooltip for Grund the Deaktivierung
    if (reason) {
      element.setAttribute('title', reason);
      element.setAttribute('data-disabled-reason', reason);
    }
    
    // Cursor change
    element.style.cursor = 'not-allowed';
    
    // Event-Listener add for zusatzliches Feedback
    element.addEventListener('click', preventInteraction);
  } else {
    // Visuell activate
    element.classList.remove('disabled');
    
    // Semantisch activate
    if (element.hasAttribute('disabled')) {
      element.removeAttribute('disabled');
    }
    
    // ARIA-attributes zurucksetzen
    element.setAttribute('aria-disabled', 'false');
    
    // tooltip remove
    if (element.hasAttribute('data-disabled-reason')) {
      element.removeAttribute('title');
      element.removeAttribute('data-disabled-reason');
    }
    
    // Cursor zurucksetzen
    element.style.cursor = '';
    
    // Event-Listener remove
    element.removeEventListener('click', preventInteraction);
  }
}

function preventInteraction(event) {
  event.preventDefault();
  event.stopPropagation();
  
  // Optionales Feedback
  const reason = this.getAttribute('data-disabled-reason');
  if (reason) {
    // Toast or others notification anzeigen
    showToast(reason);
  }
}

// Usage
const submitButton = document.getElementById('submit-button');
setElementDisabled(submitButton, true, 'please fullen them zuerst all Pflichtfelder aus');

// Spater activate
setElementDisabled(submitButton, false);
```

## Formvalidierung and Disabled-States

Disabled-States can with Formvalidierung kombiniert become:

```html
<form id="example-form">
  <div class="form-group">
    <label for="username">Benutzername *</label>
    <input type="text" id="username" required>
  </div>
  
  <div class="form-group">
    <label for="email">E-Mail *</label>
    <input type="email" id="email" required>
  </div>
  
  <button type="submit" id="submit-button" class="disabled" disabled>
    Absenden
  </button>
</form>
```

```javascript
// Formvalidierung and Disabled-state
const form = document.getElementById('example-form');
const requiredInputs = form.querySelectorAll('[required]');
const submitButton = document.getElementById('submit-button');

// Prufen, whether all Pflichtfelder ausgefullt sind
function validateForm() {
  let isValid = true;
  
  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });
  
  // button activate/deactivate
  setElementDisabled(submitButton, !isValid, 'please fullen them all Pflichtfelder aus');
}

// Event-Listener for Eingabeanderungen
requiredInputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// Initial validieren
validateForm();
```

## Performance-Uberlegungen

Disabled-effects can the Leistung beeinflussen, insbesondere at komplexen Effekten:

1. use them if moglich den einfachen `opacity`-effect
2. Vermeiden them aufwandige effects how `blur` at vielen Elementen
3. at Usage from Streifen or Overlays, vermeiden them unnotige Neuberechnungen des layouts

## Browser-Kompatibilitat

the meisten Disabled-effects sind with allen modernen Browsern kompatibel. some visuelle effects how Graustufenfilter have however Einschrankungen in alteren Browsern.

| Browser | Kompatibilitat |
|---------|---------------|
| Chrome | Vollstandige Unterstutzung |
| Firefox | Vollstandige Unterstutzung |
| Safari | Vollstandige Unterstutzung |
| Edge | Vollstandige Unterstutzung |
| IE11 | Eingeschrankte Unterstutzung for Filter-effects |

## Verwandte effects

- [Hover-effects](/docs/effects/interaction/hover.md) - effects beim Uberfahren with the Maus
- [Focus-effects](/docs/effects/interaction/focus.md) - effects beim Fokussieren from Elementen
- [Cursor-effects](/docs/effects/interaction/cursors.md) - customize des Mauszeigers 