# Success-Effekte

Success-Effekte werden verwendet, um dem Benutzer visuell zu signalisieren, dass eine Aktion erfolgreich abgeschlossen wurde. Die `@casoon/ui-lib` bietet verschiedene Success-Effekte, die dazu beitragen, positive Feedbacks klar und ansprechend darzustellen.

## Grundlegende Verwendung

Der grundlegende Success-Effekt kann auf jedes Element angewendet werden:

```html
<div class="success">Aktion erfolgreich</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Success-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.success` | Basisklasse für Erfolgsdarstellung |
| `.success-border` | Erfolg mit grünem Rand |
| `.success-bg` | Erfolg mit Hintergrundfarbe |
| `.success-text` | Erfolg mit grüner Textfarbe |
| `.success-icon` | Erfolg mit Icon-Indikator |
| `.success-fade-in` | Erfolg mit Einblendeeffekt |
| `.success-scale` | Erfolg mit Skalierungseffekt |
| `.success-check` | Erfolg mit Animiertem Häkchen |
| `.success-glow` | Erfolg mit grünem Glüheffekt |

## Varianten

### Border-Effekt

Der klassische Erfolgseffekt mit grünem Rand:

```html
<div class="card success-border">
  <div class="card-body">Daten wurden gespeichert</div>
</div>
```

### Background-Effekt

Erfolgsdarstellung mit subtiler Hintergrundfarbe:

```html
<div class="alert success-bg">
  <p>Die Einstellungen wurden erfolgreich aktualisiert.</p>
</div>
```

### Text-Effekt

Erfolgsdarstellung mit grüner Textfarbe:

```html
<p class="success-text">Ihre Zahlung wurde bestätigt.</p>
```

### Icon-Effekt

Erfolgsdarstellung mit Success-Icon:

```html
<div class="notification success-icon">
  Registrierung abgeschlossen
</div>
```

### Fade-In-Effekt

Erfolgsdarstellung mit sanftem Einblendeeffekt:

```html
<div class="toast success-fade-in">
  <div class="toast-body">E-Mail wurde gesendet</div>
</div>
```

### Scale-Effekt

Erfolgsdarstellung mit kurzer Skalierungsanimation:

```html
<button class="btn success-scale">Gespeichert</button>
```

### Check-Effekt

Erfolgsdarstellung mit animiertem Häkchen:

```html
<div class="success-check-container">
  <div class="success-check"></div>
  <p>Erfolgreich abgeschlossen</p>
</div>
```

### Glow-Effekt

Erfolgsdarstellung mit grünem Glüheffekt:

```html
<input type="text" class="success-glow" value="Gültiger Wert">
```

## Kombination mit anderen Elementen

Success-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Formularelemente

```html
<div class="form-group">
  <label for="username">Benutzername</label>
  <input type="text" id="username" class="success-border" value="verfügbar">
  <p class="success-text">Dieser Benutzername ist verfügbar</p>
</div>

<div class="form-group">
  <label for="password">Passwort</label>
  <input type="password" id="password" class="success-glow" value="********">
  <p class="success-text">Starkes Passwort</p>
</div>
```

### Buttons und Aktionen

```html
<button class="btn success-bg">Erfolgreich abgeschlossen</button>
<a href="#" class="link success-text">Verifizierter Link</a>
```

### Benachrichtigungen und Alerts

```html
<div class="alert success-bg">
  <h4>Erfolgreich</h4>
  <p>Ihre Daten wurden gespeichert.</p>
</div>

<div class="toast success-border">
  <div class="toast-header">Erfolg</div>
  <div class="toast-body">Aktion erfolgreich abgeschlossen</div>
</div>
```

### Statusanzeigen

```html
<div class="status-indicator">
  <span class="status-dot success-bg"></span>
  <span class="status-text success-text">Online</span>
</div>

<div class="progress">
  <div class="progress-bar success-bg" style="width: 100%">100%</div>
</div>
```

## Anpassung

Die Success-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --success-color: #28a745; /* Grundlegende Erfolgsfarbe */
  --success-border-color: #28a745; /* Erfolgsrandfarbe */
  --success-border-width: 1px; /* Erfolgsrandbreite */
  --success-background: rgba(40, 167, 69, 0.1); /* Erfolgshintergrundfarbe */
  --success-text-color: #28a745; /* Erfolgstextfarbe */
  --success-icon-size: 16px; /* Größe des Erfolgs-Icons */
  --success-fade-duration: 0.5s; /* Dauer des Fade-In-Effekts */
  --success-scale-factor: 1.05; /* Skalierungsfaktor für Scale-Effekt */
  --success-scale-duration: 0.3s; /* Dauer der Skalierungsanimation */
  --success-check-size: 80px; /* Größe des animierten Häkchens */
  --success-check-thickness: 4px; /* Dicke des Häkchenstrichs */
  --success-glow-radius: 4px; /* Radius für Glüheffekt */
  --success-glow-intensity: 0.4; /* Intensität des Glüheffekts */
}

/* Anpassung für dunkle Themes */
.dark-theme {
  --success-color: #48d869;
  --success-background: rgba(72, 216, 105, 0.15);
  --success-text-color: #48d869;
}
```

## Animierte Erfolgseffekte

### Check-Animation

Die animierte Häkchen-Animation ist ein häufig verwendeter Erfolgseffekt:

```css
@keyframes successCheck {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  60% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.success-check-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-check {
  width: var(--success-check-size);
  height: var(--success-check-size);
  border-radius: 50%;
  position: relative;
  background-color: var(--success-background);
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-check::before {
  content: '';
  width: 35%;
  height: 70%;
  border-right: var(--success-check-thickness) solid var(--success-color);
  border-bottom: var(--success-check-thickness) solid var(--success-color);
  transform: rotate(45deg) translate(-10%, -20%);
  animation: successCheck 0.8s ease-in-out forwards;
  opacity: 0;
  transform-origin: center;
}
```

### Fade-In-Animation

```css
@keyframes successFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-fade-in {
  animation: successFadeIn var(--success-fade-duration) ease-out forwards;
}
```

### Scale-Animation

```css
@keyframes successScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(var(--success-scale-factor));
  }
  100% {
    transform: scale(1);
  }
}

.success-scale {
  animation: successScale var(--success-scale-duration) ease-in-out;
}
```

## JavaScript-Integration

Für dynamische Success-Effekte kann JavaScript verwendet werden:

```javascript
// Dynamisches Hinzufügen von Success-Effekten
function showSuccessEffect(element, type = 'border', duration = 3000) {
  // Success-Klasse hinzufügen
  const successClass = `success-${type}`;
  element.classList.add(successClass);
  
  // ARIA für Screenreader
  const successMessage = element.getAttribute('data-success-message') || 'Aktion erfolgreich';
  const successAlert = document.createElement('div');
  successAlert.setAttribute('role', 'status');
  successAlert.setAttribute('aria-live', 'polite');
  successAlert.classList.add('sr-only');
  successAlert.textContent = successMessage;
  document.body.appendChild(successAlert);
  
  // Nach angegebener Dauer entfernen
  if (duration) {
    setTimeout(() => {
      element.classList.remove(successClass);
      successAlert.remove();
    }, duration);
  }
  
  return {
    clear: () => {
      element.classList.remove(successClass);
      successAlert.remove();
    }
  };
}

// Verwendung
const submitButton = document.getElementById('submit-button');
const formElement = document.getElementById('my-form');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulieren Sie eine Formularübermittlung
  setTimeout(() => {
    // Success-Effekt auf dem Button anzeigen
    showSuccessEffect(submitButton, 'bg');
    
    // Success-Text anzeigen
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = 'Daten erfolgreich gespeichert';
    resultMessage.classList.add('success-text');
    
    // Success-Icon anzeigen
    const icon = document.getElementById('status-icon');
    icon.classList.add('success-icon');
  }, 1000);
});
```

## Fortschrittsverfolgung mit Success-Effekten

Success-Effekte können zur Anzeige von Fortschritten verwendet werden:

```html
<div class="steps-container">
  <div class="step success-bg">
    <span class="step-number">1</span>
    <span class="step-label">Registrierung</span>
  </div>
  <div class="step success-bg">
    <span class="step-number">2</span>
    <span class="step-label">Bestätigung</span>
  </div>
  <div class="step active">
    <span class="step-number">3</span>
    <span class="step-label">Einrichtung</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span class="step-label">Abschluss</span>
  </div>
</div>
```

```css
.steps-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
}

.step::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  z-index: -1;
}

.step:last-child::after {
  display: none;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  z-index: 1;
}

.step.active .step-number {
  background-color: #007bff;
  color: white;
}

.step.success-bg .step-number {
  background-color: var(--success-color);
  color: white;
}

.step.success-bg::after {
  background-color: var(--success-color);
}
```

## Barrierefreiheit

Bei der Verwendung von Success-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Semantik**: Verwenden Sie passende ARIA-Attribute wie `role="status"`
2. **Live-Regions**: Verwenden Sie `aria-live="polite"` für dynamische Updates
3. **Kontrast**: Achten Sie auf ausreichenden Kontrast für Erfolgsfarben
4. **Multiple Signale**: Verlassen Sie sich nicht nur auf Farbe zur Erfolgsdarstellung
5. **Dauer**: Stellen Sie sicher, dass wichtige Erfolgsmeldungen lang genug sichtbar sind

```html
<!-- Barrierefreie Erfolgsmeldung -->
<div 
  class="alert success-bg" 
  role="status" 
  aria-live="polite"
>
  <div class="alert-icon success-icon" aria-hidden="true"></div>
  <div class="alert-content">
    <strong>Erfolg!</strong> Ihre Daten wurden gespeichert.
  </div>
</div>
```

## Success-States in Formularen

Success-Effekte in Formularen verbessern die Benutzererfahrung:

```html
<form id="signup-form">
  <div class="form-group">
    <label for="email">E-Mail</label>
    <div class="input-wrapper">
      <input 
        type="email" 
        id="email" 
        class="form-control"
        data-validation="email"
      >
      <div class="validation-icon"></div>
    </div>
    <div class="validation-message"></div>
  </div>
  
  <div class="form-group">
    <label for="password">Passwort</label>
    <div class="input-wrapper">
      <input 
        type="password" 
        id="password" 
        class="form-control"
        data-validation="password"
      >
      <div class="validation-icon"></div>
    </div>
    <div class="validation-message"></div>
  </div>
  
  <button type="submit" class="btn">Registrieren</button>
</form>
```

```javascript
// Live-Validierung mit Success-Effekten
document.querySelectorAll('[data-validation]').forEach(field => {
  field.addEventListener('input', function() {
    validateField(this);
  });
  
  field.addEventListener('blur', function() {
    validateField(this);
  });
});

function validateField(field) {
  const type = field.getAttribute('data-validation');
  const wrapper = field.closest('.input-wrapper');
  const iconElement = wrapper.querySelector('.validation-icon');
  const messageElement = field.closest('.form-group').querySelector('.validation-message');
  
  // Zurücksetzen
  field.classList.remove('success-border', 'error-border');
  iconElement.className = 'validation-icon';
  messageElement.className = 'validation-message';
  messageElement.textContent = '';
  
  // Leer lassen, wenn noch nichts eingegeben wurde
  if (!field.value.trim()) {
    return;
  }
  
  let isValid = false;
  let message = '';
  
  // Validierung nach Typ
  switch(type) {
    case 'email':
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      message = isValid ? 'Gültige E-Mail' : 'Ungültige E-Mail';
      break;
    case 'password':
      isValid = field.value.length >= 8;
      message = isValid ? 'Passwort ist stark genug' : 'Passwort zu kurz';
      break;
    // Weitere Validierungstypen...
  }
  
  if (isValid) {
    // Success-Effekte anwenden
    field.classList.add('success-border');
    iconElement.classList.add('success-icon');
    messageElement.classList.add('success-text');
    messageElement.textContent = message;
  } else {
    // Error-Effekte anwenden (hier für Vollständigkeit)
    field.classList.add('error-border');
    iconElement.classList.add('error-icon');
    messageElement.classList.add('error-text');
    messageElement.textContent = message;
  }
}
```

## Browser-Kompatibilität

Die meisten Success-Effekte sind mit allen modernen Browsern kompatibel. Einige Animationseffekte haben jedoch Einschränkungen in älteren Browsern.

| Browser | Kompatibilität |
|---------|---------------|
| Chrome | Vollständige Unterstützung |
| Firefox | Vollständige Unterstützung |
| Safari | Vollständige Unterstützung |
| Edge | Vollständige Unterstützung |
| IE11 | Eingeschränkte Unterstützung für Animationen und Glüheffekte |

## Verwandte Effekte

- [Error-Effekte](/docs/effects/interaction/error.md) - Effekte für Fehlerzustände
- [Warning-Effekte](/docs/effects/interaction/warning.md) - Warnhinweiseffekte
- [Focus-Effekte](/docs/effects/interaction/focus.md) - Effekte beim Fokussieren von Elementen 