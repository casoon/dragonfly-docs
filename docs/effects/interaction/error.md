# Error-effects

Error-effects become verwendet, um dem user visuell to signalisieren, that at einer interaction a errors aufgetreten ist or that a element einen fehlerhaften state aufweist. the `@casoon/ui-lib` bietet verschiedene Error-effects, the for that beitragen, Fehlerzustande klar and konsistent darzustellen.

## Basic Usage

the grundlegende Error-effect kann on jedes element angewendet become:

```html
<input type="text" class="error">
```

## CSS-classes

the folgenden CSS-classes stehen for Error-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.error` | Basisklasse for Fehlerdarstellung |
| `.error-border` | errors with rotem margin |
| `.error-bg` | errors with Hintergrundfarbe |
| `.error-text` | errors with roter Textfarbe |
| `.error-shake` | errors with Schuttelanimation |
| `.error-pulse` | errors with Pulsiereffekt |
| `.error-glow` | errors with rotem Gluheffekt |
| `.error-icon` | errors with icon-Indikator |

## Variants

### Border-effect

the klassische Fehlereffekt with rotem margin:

```html
<input type="text" class="error-border" placeholder="Ungultige E-Mail">
```

### Background-effect

Fehlerdarstellung with subtiler Hintergrundfarbe:

```html
<div class="form-group error-bg">
  <label>Name</label>
  <input type="text" placeholder="Ungultiger Name">
</div>
```

### Text-effect

Fehlerdarstellung with roter Textfarbe:

```html
<p class="error-text">these Aktion konnte not ausgefuhrt become.</p>
```

### Shake-effect

Dynamische Fehlerdarstellung with kurzer Schuttelanimation:

```html
<button class="btn error-shake">Ungultige input</button>
```

### Pulse-effect

Pulsierende Fehlerdarstellung for hohere Aufmerksamkeit:

```html
<div class="notification error-pulse">
  Verbindung fehlgeschlagen
</div>
```

### Glow-effect

Fehlerdarstellung with rotem Gluheffekt:

```html
<input type="password" class="error-glow" placeholder="Passwort ist to schwach">
```

### icon-effect

Fehlerdarstellung with Error-icon:

```html
<div class="form-control error-icon">
  <input type="email" placeholder="E-Mail Adresse">
  <!-- icon wird per CSS eingefugt -->
</div>
```

## Kombination with anderen Elementen

Error-effects can with verschiedenen UI-Elementen kombiniert become:

### form elements

```html
<div class="form-group">
  <label for="username">Benutzername</label>
  <input type="text" id="username" class="error-border">
  <p class="error-text">Benutzername ist bereits vergeben</p>
</div>

<div class="form-group">
  <label for="password">Passwort</label>
  <input type="password" id="password" class="error-glow">
  <p class="error-text">Passwort muss mindestens 8 Zeichen enthalten</p>
</div>

<select class="error-border">
  <option value="">please wahlen</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### buttons and Aktionen

```html
<button class="btn error-border">Fehlgeschlagene Aktion</button>
<a href="#" class="link error-text">Ungultiger link</a>
```

### notifications and Alerts

```html
<div class="alert error-bg">
  <h4>errors aufgetreten</h4>
  <p>the Daten konnten not gespeichert become.</p>
</div>

<div class="toast error-border">
  <div class="toast-header">errors</div>
  <div class="toast-body">Aktion fehlgeschlagen</div>
</div>
```

## Customization

the Error-effects can over CSS Variables angepasst become:

```css
:root {
  --error-color: #dc3545; /* Grundlegende Fehlerfarbe */
  --error-border-color: #dc3545; /* Fehlerrandfarbe */
  --error-border-width: 1px; /* Fehlerrandbreite */
  --error-background: rgba(220, 53, 69, 0.1); /* Fehlerhintergrundfarbe */
  --error-text-color: #dc3545; /* Fehlertextfarbe */
  --error-shake-distance: 5px; /* Distanz for Schuttelanimation */
  --error-shake-duration: 0.4s; /* Dauer the Schuttelanimation */
  --error-pulse-opacity: 0.8; /* Deckkraft for Pulsiereffekt */
  --error-pulse-duration: 1.5s; /* Dauer des Pulsiereffekts */
  --error-glow-radius: 4px; /* Radius for Gluheffekt */
  --error-glow-intensity: 0.5; /* Intensitat des Gluheffekts */
  --error-icon-size: 16px; /* size des errors-icons */
}

/* Customization for dunkle themes */
.dark-theme {
  --error-color: #ff6b6b;
  --error-background: rgba(255, 107, 107, 0.15);
  --error-text-color: #ff6b6b;
}
```

## Dynamische Fehlerdarstellung

Error-effects can dynamisch hinzugefugt become, typischerweise at the Formvalidierung:

```html
<form id="example-form">
  <div class="form-group">
    <label for="email">E-Mail *</label>
    <input type="email" id="email" required>
    <div class="error-message"></div>
  </div>
  
  <div class="form-group">
    <label for="password">Passwort *</label>
    <input type="password" id="password" required minlength="8">
    <div class="error-message"></div>
  </div>
  
  <button type="submit">Registrieren</button>
</form>
```

```javascript
// Formvalidierung with Error-Effekten
const form = document.getElementById('example-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // all errors zurucksetzen
  resetErrors();
  
  // validation durchfuhren
  let hasErrors = false;
  
  // E-Mail validieren
  const emailInput = document.getElementById('email');
  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'please geben them a gultige E-Mail-Adresse a');
    hasErrors = true;
  }
  
  // Passwort validieren
  const passwordInput = document.getElementById('password');
  if (passwordInput.value.length < 8) {
    showError(passwordInput, 'the Passwort muss mindestens 8 Zeichen enthalten');
    hasErrors = true;
  }
  
  // if no errors, Form absenden
  if (!hasErrors) {
    // Form absenden...
    console.log('Form wird abgesendet');
  }
});

function showError(inputElement, message) {
  // Fehlerklassen add
  inputElement.classList.add('error-border');
  inputElement.classList.add('error-shake');
  
  // Fehlermeldung anzeigen
  const errorContainer = inputElement.nextElementSibling;
  if (errorContainer && errorContainer.classList.contains('error-message')) {
    errorContainer.textContent = message;
    errorContainer.classList.add('error-text');
  }
  
  // after Shake-animation the Class remove
  setTimeout(() => {
    inputElement.classList.remove('error-shake');
  }, 500);
}

function resetErrors() {
  // all Fehlerklassen remove
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.classList.remove('error-border', 'error-shake', 'error-glow');
  });
  
  // all Fehlermeldungen leeren
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(containers => {
    containers.textContent = '';
    containers.classList.remove('error-text');
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

## Accessibility

at the Usage from Error-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Semantik**: use them `aria-invalid="true"` for fehlerhafte Inputer
2. **Fehlermeldungen**: connect them Fehlermeldungen with `aria-describedby`
3. **Kontrast**: ensure them on ausreichenden Kontrast for Fehlerfarben
4. **Multiple Signale**: Verlassen them oneself not only on color zur Fehlerdarstellung
5. **Live-Regions**: use them `aria-live` for dynamisch hinzugefugte Fehlermeldungen

```html
<!-- Barrierefreies Form with Error-Effekten -->
<div class="form-group">
  <label for="creditcard">Kreditkartennummer</label>
  <input 
    type="text" 
    id="creditcard" 
    class="error-border" 
    aria-invalid="true" 
    aria-describedby="cc-error"
  >
  <p id="cc-error" class="error-text" role="alert">
    Ungultige Kreditkartennummer
  </p>
</div>
```

## animation and Timing

the Dauer and the Timing from Error-animations sind important for a gute Benutzererfahrung:

```css
/* Schuttelanimation */
@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(var(--error-shake-distance)); }
  40%, 80% { transform: translateX(calc(-1 * var(--error-shake-distance))); }
}

.error-shake {
  animation: errorShake var(--error-shake-duration) cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

/* Pulsieranimation */
@keyframes errorPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: var(--error-pulse-opacity); }
}

.error-pulse {
  animation: errorPulse var(--error-pulse-duration) ease-in-out infinite;
}
```

## Formlive-validation

Error-effects can with Live-validation kombiniert become:

```javascript
// Live-validation with Error-Effekten
document.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('blur', function() {
    validateField(this);
  });
  
  field.addEventListener('input', function() {
    if (this.classList.contains('error-border')) {
      validateField(this);
    }
  });
});

function validateField(field) {
  // Validierungslogik basierend on Feldtyp
  let isValid = true;
  let errorMessage = '';
  
  // Prufen, whether a Value vorhanden ist, if erforderlich
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    errorMessage = 'this Feld ist erforderlich';
  } 
  // E-Mail-validation
  else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
    isValid = false;
    errorMessage = 'please geben them a gultige E-Mail-Adresse a';
  }
  // Passwortlangenprufung
  else if (field.type === 'password' && field.minLength && field.value.length < field.minLength) {
    isValid = false;
    errorMessage = `the Passwort muss mindestens ${field.minLength} Zeichen enthalten`;
  }
  
  // Fehlerdarstellung anwenden or remove
  if (!isValid) {
    field.classList.add('error-border');
    field.setAttribute('aria-invalid', 'true');
    
    // Fehlermeldung aktualisieren, if vorhanden
    const errorContainer = field.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('error-message')) {
      errorContainer.textContent = errorMessage;
      errorContainer.classList.add('error-text');
      
      // ARIA-Verbindung herstellen
      const errorId = errorContainer.id || `error-${Math.random().toString(36).substr(2, 9)}`;
      errorContainer.id = errorId;
      field.setAttribute('aria-describedby', errorId);
    }
  } else {
    // errors remove
    field.classList.remove('error-border');
    field.setAttribute('aria-invalid', 'false');
    
    // Fehlermeldung leeren, if vorhanden
    const errorContainer = field.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('error-message')) {
      errorContainer.textContent = '';
      errorContainer.classList.remove('error-text');
      field.removeAttribute('aria-describedby');
    }
  }
}
```

## Browser-Kompatibilitat

the meisten Error-effects sind with allen modernen Browsern kompatibel. some Animationseffekte have however Einschrankungen in alteren Browsern.

| Browser | Kompatibilitat |
|---------|---------------|
| Chrome | Vollstandige Unterstutzung |
| Firefox | Vollstandige Unterstutzung |
| Safari | Vollstandige Unterstutzung |
| Edge | Vollstandige Unterstutzung |
| IE11 | Eingeschrankte Unterstutzung for animations and Gluheffekte |

## Verwandte effects

- [Focus-effects](/docs/effects/interaction/focus.md) - effects beim Fokussieren from Elementen
- [Warning-effects](/docs/effects/interaction/warning.md) - Warnhinweiseffekte
- [Success-effects](/docs/effects/interaction/success.md) - Erfolgseffekte 