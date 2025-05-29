# Error-Effekte

Error-Effekte werden verwendet, um dem Benutzer visuell zu signalisieren, dass bei einer Interaktion ein Fehler aufgetreten ist oder dass ein Element einen fehlerhaften Zustand aufweist. Die `@casoon/ui-lib` bietet verschiedene Error-Effekte, die dazu beitragen, Fehlerzustände klar und konsistent darzustellen.

## Basic Usage

Der grundlegende Error-Effekt kann auf jedes Element angewendet werden:

```html
<input type="text" class="error">
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Error-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.error` | Basisklasse für Fehlerdarstellung |
| `.error-border` | Fehler mit rotem Rand |
| `.error-bg` | Fehler mit Hintergrundfarbe |
| `.error-text` | Fehler mit roter Textfarbe |
| `.error-shake` | Fehler mit Schüttelanimation |
| `.error-pulse` | Fehler mit Pulsiereffekt |
| `.error-glow` | Fehler mit rotem Glüheffekt |
| `.error-icon` | Fehler mit Icon-Indikator |

## Variants

### Border-Effekt

Der klassische Fehlereffekt mit rotem Rand:

```html
<input type="text" class="error-border" placeholder="Ungültige E-Mail">
```

### Background-Effekt

Fehlerdarstellung mit subtiler Hintergrundfarbe:

```html
<div class="form-group error-bg">
  <label>Name</label>
  <input type="text" placeholder="Ungültiger Name">
</div>
```

### Text-Effekt

Fehlerdarstellung mit roter Textfarbe:

```html
<p class="error-text">Diese Aktion konnte nicht ausgeführt werden.</p>
```

### Shake-Effekt

Dynamische Fehlerdarstellung mit kurzer Schüttelanimation:

```html
<button class="btn error-shake">Ungültige Eingabe</button>
```

### Pulse-Effekt

Pulsierende Fehlerdarstellung für höhere Aufmerksamkeit:

```html
<div class="notification error-pulse">
  Verbindung fehlgeschlagen
</div>
```

### Glow-Effekt

Fehlerdarstellung mit rotem Glüheffekt:

```html
<input type="password" class="error-glow" placeholder="Passwort ist zu schwach">
```

### Icon-Effekt

Fehlerdarstellung mit Error-Icon:

```html
<div class="form-control error-icon">
  <input type="email" placeholder="E-Mail Adresse">
  <!-- Icon wird per CSS eingefügt -->
</div>
```

## Kombination mit anderen Elementen

Error-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Formelemente

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
  <option value="">Bitte wählen</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Buttons und Aktionen

```html
<button class="btn error-border">Fehlgeschlagene Aktion</button>
<a href="#" class="link error-text">Ungültiger Link</a>
```

### Benachrichtigungen und Alerts

```html
<div class="alert error-bg">
  <h4>Fehler aufgetreten</h4>
  <p>Die Daten konnten nicht gespeichert werden.</p>
</div>

<div class="toast error-border">
  <div class="toast-header">Fehler</div>
  <div class="toast-body">Aktion fehlgeschlagen</div>
</div>
```

## Anpassung

Die Error-Effekte können über CSS Variables angepasst werden:

```css
:root {
  --error-color: #dc3545; /* Grundlegende Fehlerfarbe */
  --error-border-color: #dc3545; /* Fehlerrandfarbe */
  --error-border-width: 1px; /* Fehlerrandbreite */
  --error-background: rgba(220, 53, 69, 0.1); /* Fehlerhintergrundfarbe */
  --error-text-color: #dc3545; /* Fehlertextfarbe */
  --error-shake-distance: 5px; /* Distanz für Schüttelanimation */
  --error-shake-duration: 0.4s; /* Dauer der Schüttelanimation */
  --error-pulse-opacity: 0.8; /* Deckkraft für Pulsiereffekt */
  --error-pulse-duration: 1.5s; /* Dauer des Pulsiereffekts */
  --error-glow-radius: 4px; /* Radius für Glüheffekt */
  --error-glow-intensity: 0.5; /* Intensität des Glüheffekts */
  --error-icon-size: 16px; /* Größe des Fehler-Icons */
}

/* Anpassung für dunkle Themes */
.dark-theme {
  --error-color: #ff6b6b;
  --error-background: rgba(255, 107, 107, 0.15);
  --error-text-color: #ff6b6b;
}
```

## Dynamische Fehlerdarstellung

Error-Effekte können dynamisch hinzugefügt werden, typischerweise bei der Formvalidierung:

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
// Formvalidierung mit Error-Effekten
const form = document.getElementById('example-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Alle Fehler zurücksetzen
  resetErrors();
  
  // Validierung durchführen
  let hasErrors = false;
  
  // E-Mail validieren
  const emailInput = document.getElementById('email');
  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
    hasErrors = true;
  }
  
  // Passwort validieren
  const passwordInput = document.getElementById('password');
  if (passwordInput.value.length < 8) {
    showError(passwordInput, 'Das Passwort muss mindestens 8 Zeichen enthalten');
    hasErrors = true;
  }
  
  // Wenn keine Fehler, Form absenden
  if (!hasErrors) {
    // Form absenden...
    console.log('Form wird abgesendet');
  }
});

function showError(inputElement, message) {
  // Fehlerklassen hinzufügen
  inputElement.classList.add('error-border');
  inputElement.classList.add('error-shake');
  
  // Fehlermeldung anzeigen
  const errorContainer = inputElement.nextElementSibling;
  if (errorContainer && errorContainer.classList.contains('error-message')) {
    errorContainer.textContent = message;
    errorContainer.classList.add('error-text');
  }
  
  // Nach Shake-Animation die Klasse entfernen
  setTimeout(() => {
    inputElement.classList.remove('error-shake');
  }, 500);
}

function resetErrors() {
  // Alle Fehlerklassen entfernen
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.classList.remove('error-border', 'error-shake', 'error-glow');
  });
  
  // Alle Fehlermeldungen leeren
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(container => {
    container.textContent = '';
    container.classList.remove('error-text');
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

## Accessibility

Bei der Usage von Error-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Semantik**: Verwenden Sie `aria-invalid="true"` für fehlerhafte Inputer
2. **Fehlermeldungen**: Verbinden Sie Fehlermeldungen mit `aria-describedby`
3. **Kontrast**: Achten Sie auf ausreichenden Kontrast für Fehlerfarben
4. **Multiple Signale**: Verlassen Sie sich nicht nur auf Farbe zur Fehlerdarstellung
5. **Live-Regions**: Verwenden Sie `aria-live` für dynamisch hinzugefügte Fehlermeldungen

```html
<!-- Barrierefreies Form mit Error-Effekten -->
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
    Ungültige Kreditkartennummer
  </p>
</div>
```

## Animation und Timing

Die Dauer und das Timing von Error-Animationen sind wichtig für eine gute Benutzererfahrung:

```css
/* Schüttelanimation */
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

## Formlive-Validierung

Error-Effekte können mit Live-Validierung kombiniert werden:

```javascript
// Live-Validierung mit Error-Effekten
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
  // Validierungslogik basierend auf Feldtyp
  let isValid = true;
  let errorMessage = '';
  
  // Prüfen, ob ein Wert vorhanden ist, falls erforderlich
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    errorMessage = 'Dieses Feld ist erforderlich';
  } 
  // E-Mail-Validierung
  else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
    isValid = false;
    errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
  }
  // Passwortlängenprüfung
  else if (field.type === 'password' && field.minLength && field.value.length < field.minLength) {
    isValid = false;
    errorMessage = `Das Passwort muss mindestens ${field.minLength} Zeichen enthalten`;
  }
  
  // Fehlerdarstellung anwenden oder entfernen
  if (!isValid) {
    field.classList.add('error-border');
    field.setAttribute('aria-invalid', 'true');
    
    // Fehlermeldung aktualisieren, wenn vorhanden
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
    // Fehler entfernen
    field.classList.remove('error-border');
    field.setAttribute('aria-invalid', 'false');
    
    // Fehlermeldung leeren, wenn vorhanden
    const errorContainer = field.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('error-message')) {
      errorContainer.textContent = '';
      errorContainer.classList.remove('error-text');
      field.removeAttribute('aria-describedby');
    }
  }
}
```

## Browser-Kompatibilität

Die meisten Error-Effekte sind mit allen modernen Browsern kompatibel. Einige Animationseffekte haben jedoch Einschränkungen in älteren Browsern.

| Browser | Kompatibilität |
|---------|---------------|
| Chrome | Vollständige Unterstützung |
| Firefox | Vollständige Unterstützung |
| Safari | Vollständige Unterstützung |
| Edge | Vollständige Unterstützung |
| IE11 | Eingeschränkte Unterstützung für Animationen und Glüheffekte |

## Verwandte Effekte

- [Focus-Effekte](/docs/effects/interaction/focus.md) - Effekte beim Fokussieren von Elementen
- [Warning-Effekte](/docs/effects/interaction/warning.md) - Warnhinweiseffekte
- [Success-Effekte](/docs/effects/interaction/success.md) - Erfolgseffekte 