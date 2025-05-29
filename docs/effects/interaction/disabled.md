# Disabled-Effekte

Disabled-Effekte werden verwendet, um dem Benutzer visuell zu signalisieren, dass ein Element nicht interaktiv oder verfügbar ist. Die `@casoon/ui-lib` bietet verschiedene Disabled-Effekte, die auf konsistente Weise zeigen, dass ein Element deaktiviert ist.

## Grundlegende Verwendung

Der grundlegende Disabled-Effekt kann auf jedes interaktive Element angewendet werden:

```html
<button class="btn disabled">Deaktivierter Button</button>
```

Oder mit dem HTML-Attribut `disabled`:

```html
<button class="btn" disabled>Deaktivierter Button</button>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Disabled-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.disabled` | Basisklasse für deaktivierte Elemente |
| `.disabled-opacity` | Deaktivierung durch reduzierte Deckkraft |
| `.disabled-grayscale` | Deaktivierung durch Umwandlung in Graustufen |
| `.disabled-blur` | Deaktivierung durch leichtes Weichzeichnen |
| `.disabled-muted` | Deaktivierung durch gedämpfte Farben |
| `.disabled-striped` | Deaktivierung durch diagonale Streifen |
| `.disabled-overlay` | Deaktivierung durch Überlagerung |

## Varianten

### Opacity-Effekt

Die einfachste Form der visuellen Deaktivierung ist die Reduzierung der Deckkraft:

```html
<button class="btn disabled-opacity">Reduzierte Deckkraft</button>
```

### Grayscale-Effekt

Umwandlung in Graustufen für eine deutlichere Deaktivierung:

```html
<button class="btn disabled-grayscale">Graustufen</button>
```

### Blur-Effekt

Leichtes Weichzeichnen des Elements:

```html
<button class="btn disabled-blur">Weichgezeichnet</button>
```

### Muted-Effekt

Reduzierung der Farbsättigung und Anpassung der Helligkeit:

```html
<button class="btn disabled-muted">Gedämpfte Farben</button>
```

### Striped-Effekt

Diagonale Streifen über dem Element:

```html
<button class="btn disabled-striped">Mit Streifen</button>
```

### Overlay-Effekt

Ein halbtransparentes Overlay über dem Element:

```html
<button class="btn disabled-overlay">Mit Overlay</button>
```

## Kombination mit anderen Elementen

Disabled-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Formularelemente

```html
<!-- Standard HTML disabled Attribut -->
<input type="text" disabled placeholder="Deaktiviertes Textfeld">
<select disabled>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Mit CSS-Klassen -->
<input type="text" class="disabled-opacity" placeholder="Deaktiviertes Textfeld">
<select class="disabled-grayscale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Buttons und Links

```html
<button class="btn btn-primary disabled">Deaktivierter Primär-Button</button>
<button class="btn btn-secondary disabled-grayscale">Deaktivierter Sekundär-Button</button>
<a href="#" class="btn disabled-muted">Deaktivierter Link-Button</a>
```

### Interaktive Komponenten

```html
<div class="card disabled-opacity">
  <div class="card-header">Deaktivierte Karte</div>
  <div class="card-body">Inhalt nicht verfügbar</div>
</div>

<div class="dropdown disabled">
  <button class="dropdown-toggle">Dropdown</button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
  </div>
</div>
```

## Anpassung

Die Disabled-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --disabled-opacity: 0.5; /* Deckkraft für disabled-opacity */
  --disabled-grayscale: 100%; /* Graustufen-Wert für disabled-grayscale */
  --disabled-blur: 1px; /* Weichzeichnungs-Radius für disabled-blur */
  --disabled-saturation: 40%; /* Sättigungswert für disabled-muted */
  --disabled-brightness: 90%; /* Helligkeitswert für disabled-muted */
  --disabled-stripe-color: rgba(255, 255, 255, 0.3); /* Streifenfarbe */
  --disabled-stripe-angle: 45deg; /* Streifenwinkel */
  --disabled-stripe-size: 10px; /* Streifenbreite */
  --disabled-overlay-color: rgba(240, 240, 240, 0.6); /* Overlay-Farbe */
  --disabled-cursor: not-allowed; /* Cursor für deaktivierte Elemente */
}
```

## Barrierefreiheit

Bei der Verwendung von Disabled-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Semantik**: Verwenden Sie immer das native `disabled`-Attribut für Formularelemente
2. **ARIA**: Für nicht-native Elemente verwenden Sie `aria-disabled="true"`
3. **Kontrast**: Achten Sie auf ausreichenden Kontrast, auch im deaktivierten Zustand
4. **Feedback**: Geben Sie zusätzliches Feedback bei Interaktionsversuchen
5. **Text**: Erklären Sie, warum ein Element deaktiviert ist

```html
<!-- Barrierefreier deaktivierter Button -->
<button 
  class="btn disabled" 
  disabled 
  aria-disabled="true" 
  aria-label="Button deaktiviert: Bitte zuerst ein Formular ausfüllen"
>
  Formular absenden
</button>

<!-- Barrierefreies deaktiviertes benutzerdefiniertes Element -->
<div 
  class="custom-control disabled-opacity" 
  aria-disabled="true" 
  tabindex="-1" 
  role="button"
>
  Nicht verfügbar
  <span class="sr-only">Diese Funktion ist derzeit nicht verfügbar</span>
</div>
```

## JavaScript-Integration

Für fortgeschrittene Disabled-Zustände kann JavaScript verwendet werden:

```javascript
// Dynamische Deaktivierung/Aktivierung von Elementen
function setElementDisabled(element, isDisabled, reason = '') {
  if (isDisabled) {
    // Visuell deaktivieren
    element.classList.add('disabled');
    
    // Semantisch deaktivieren
    if (element.tagName === 'BUTTON' || element.tagName === 'INPUT' || 
        element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
      element.setAttribute('disabled', 'disabled');
    }
    
    // ARIA-Attribute setzen
    element.setAttribute('aria-disabled', 'true');
    
    // Tooltip für Grund der Deaktivierung
    if (reason) {
      element.setAttribute('title', reason);
      element.setAttribute('data-disabled-reason', reason);
    }
    
    // Cursor ändern
    element.style.cursor = 'not-allowed';
    
    // Event-Listener hinzufügen für zusätzliches Feedback
    element.addEventListener('click', preventInteraction);
  } else {
    // Visuell aktivieren
    element.classList.remove('disabled');
    
    // Semantisch aktivieren
    if (element.hasAttribute('disabled')) {
      element.removeAttribute('disabled');
    }
    
    // ARIA-Attribute zurücksetzen
    element.setAttribute('aria-disabled', 'false');
    
    // Tooltip entfernen
    if (element.hasAttribute('data-disabled-reason')) {
      element.removeAttribute('title');
      element.removeAttribute('data-disabled-reason');
    }
    
    // Cursor zurücksetzen
    element.style.cursor = '';
    
    // Event-Listener entfernen
    element.removeEventListener('click', preventInteraction);
  }
}

function preventInteraction(event) {
  event.preventDefault();
  event.stopPropagation();
  
  // Optionales Feedback
  const reason = this.getAttribute('data-disabled-reason');
  if (reason) {
    // Toast oder andere Benachrichtigung anzeigen
    showToast(reason);
  }
}

// Verwendung
const submitButton = document.getElementById('submit-button');
setElementDisabled(submitButton, true, 'Bitte füllen Sie zuerst alle Pflichtfelder aus');

// Später aktivieren
setElementDisabled(submitButton, false);
```

## Formvalidierung und Disabled-Zustände

Disabled-Zustände können mit Formularvalidierung kombiniert werden:

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
// Formularvalidierung und Disabled-Zustand
const form = document.getElementById('example-form');
const requiredInputs = form.querySelectorAll('[required]');
const submitButton = document.getElementById('submit-button');

// Prüfen, ob alle Pflichtfelder ausgefüllt sind
function validateForm() {
  let isValid = true;
  
  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });
  
  // Button aktivieren/deaktivieren
  setElementDisabled(submitButton, !isValid, 'Bitte füllen Sie alle Pflichtfelder aus');
}

// Event-Listener für Eingabeänderungen
requiredInputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// Initial validieren
validateForm();
```

## Performance-Überlegungen

Disabled-Effekte können die Leistung beeinflussen, insbesondere bei komplexen Effekten:

1. Verwenden Sie wenn möglich den einfachen `opacity`-Effekt
2. Vermeiden Sie aufwändige Effekte wie `blur` bei vielen Elementen
3. Bei Verwendung von Streifen oder Overlays, vermeiden Sie unnötige Neuberechnungen des Layouts

## Browser-Kompatibilität

Die meisten Disabled-Effekte sind mit allen modernen Browsern kompatibel. Einige visuelle Effekte wie Graustufenfilter haben jedoch Einschränkungen in älteren Browsern.

| Browser | Kompatibilität |
|---------|---------------|
| Chrome | Vollständige Unterstützung |
| Firefox | Vollständige Unterstützung |
| Safari | Vollständige Unterstützung |
| Edge | Vollständige Unterstützung |
| IE11 | Eingeschränkte Unterstützung für Filter-Effekte |

## Verwandte Effekte

- [Hover-Effekte](/docs/effects/interaction/hover.md) - Effekte beim Überfahren mit der Maus
- [Focus-Effekte](/docs/effects/interaction/focus.md) - Effekte beim Fokussieren von Elementen
- [Cursor-Effekte](/docs/effects/interaction/cursors.md) - Anpassen des Mauszeigers 