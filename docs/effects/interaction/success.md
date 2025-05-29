# Success-effects

Success-effects become verwendet, um dem user visuell to signalisieren, that a Aktion erfolgreich abgeschlossen wurde. the `@casoon/ui-lib` bietet verschiedene Success-effects, the for that beitragen, positive Feedbacks klar and ansprechend darzustellen.

## Basic Usage

the grundlegende Success-effect kann on jedes element angewendet become:

```html
<div class="success">Aktion erfolgreich</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Success-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.success` | Basisklasse for Erfolgsdarstellung |
| `.success-border` | success with grunem margin |
| `.success-bg` | success with Hintergrundfarbe |
| `.success-text` | success with gruner Textfarbe |
| `.success-icon` | success with icon-Indikator |
| `.success-fade-in` | success with Einblendeeffekt |
| `.success-scale` | success with Skalierungseffekt |
| `.success-check` | success with Animiertem Hakchen |
| `.success-glow` | success with grunem Gluheffekt |

## Variants

### Border-effect

the klassische Erfolgseffekt with grunem margin:

```html
<div class="card success-border">
  <div class="card-body">Daten wurden gespeichert</div>
</div>
```

### Background-effect

Erfolgsdarstellung with subtiler Hintergrundfarbe:

```html
<div class="alert success-bg">
  <p>the Einstellungen wurden erfolgreich aktualisiert.</p>
</div>
```

### Text-effect

Erfolgsdarstellung with gruner Textfarbe:

```html
<p class="success-text">Ihre Zahlung wurde bestatigt.</p>
```

### icon-effect

Erfolgsdarstellung with Success-icon:

```html
<div class="notification success-icon">
  Registrierung abgeschlossen
</div>
```

### Fade-in-effect

Erfolgsdarstellung with sanftem Einblendeeffekt:

```html
<div class="toast success-fade-in">
  <div class="toast-body">E-Mail wurde gesendet</div>
</div>
```

### Scale-effect

Erfolgsdarstellung with kurzer Skalierungsanimation:

```html
<button class="btn success-scale">Gespeichert</button>
```

### Check-effect

Erfolgsdarstellung with animiertem Hakchen:

```html
<div class="success-check-containers">
  <div class="success-check"></div>
  <p>Erfolgreich abgeschlossen</p>
</div>
```

### Glow-effect

Erfolgsdarstellung with grunem Gluheffekt:

```html
<input type="text" class="success-glow" value="Gultiger Value">
```

## Kombination with anderen Elementen

Success-effects can with verschiedenen UI-Elementen kombiniert become:

### form elements

```html
<div class="form-group">
  <label for="username">Benutzername</label>
  <input type="text" id="username" class="success-border" value="verfugbar">
  <p class="success-text">this Benutzername ist verfugbar</p>
</div>

<div class="form-group">
  <label for="password">Passwort</label>
  <input type="password" id="password" class="success-glow" value="********">
  <p class="success-text">Starkes Passwort</p>
</div>
```

### buttons and Aktionen

```html
<button class="btn success-bg">Erfolgreich abgeschlossen</button>
<a href="#" class="link success-text">Verifizierter link</a>
```

### notifications and Alerts

```html
<div class="alert success-bg">
  <h4>Erfolgreich</h4>
  <p>Ihre Daten wurden gespeichert.</p>
</div>

<div class="toast success-border">
  <div class="toast-header">success</div>
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

## Customization

the Success-effects can over CSS Variables angepasst become:

```css
:root {
  --success-color: #28a745; /* Grundlegende Erfolgsfarbe */
  --success-border-color: #28a745; /* Erfolgsrandfarbe */
  --success-border-width: 1px; /* Erfolgsrandbreite */
  --success-background: rgba(40, 167, 69, 0.1); /* Erfolgshintergrundfarbe */
  --success-text-color: #28a745; /* Erfolgstextfarbe */
  --success-icon-size: 16px; /* size des Erfolgs-icons */
  --success-fade-duration: 0.5s; /* Dauer des Fade-in-Effekts */
  --success-scale-factor: 1.05; /* Skalierungsfaktor for Scale-effect */
  --success-scale-duration: 0.3s; /* Dauer the Skalierungsanimation */
  --success-check-size: 80px; /* size des animierten Hakchens */
  --success-check-thickness: 4px; /* Dicke des Hakchenstrichs */
  --success-glow-radius: 4px; /* Radius for Gluheffekt */
  --success-glow-intensity: 0.4; /* Intensitat des Gluheffekts */
}

/* Customization for dunkle themes */
.dark-theme {
  --success-color: #48d869;
  --success-background: rgba(72, 216, 105, 0.15);
  --success-text-color: #48d869;
}
```

## Animierte Erfolgseffekte

### Check-animation

the animierte Hakchen-animation ist a haufig verwendeter Erfolgseffekt:

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

.success-check-containers {
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

### Fade-in-animation

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

### Scale-animation

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

for dynamische Success-effects kann JavaScript verwendet become:

```javascript
// Dynamisches add from Success-Effekten
function showSuccessEffect(element, type = 'border', duration = 3000) {
  // Success-Class add
  const successClass = `success-${type}`;
  element.classList.add(successClass);
  
  // ARIA for Screenreader
  const successMessage = element.getAttribute('data-success-message') || 'Aktion erfolgreich';
  const successAlert = document.createElement('div');
  successAlert.setAttribute('role', 'status');
  successAlert.setAttribute('aria-live', 'polite');
  successAlert.classList.add('sr-only');
  successAlert.textContent = successMessage;
  document.body.appendChild(successAlert);
  
  // after angegebener Dauer remove
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

// Usage
const submitButton = document.getElementById('submit-button');
const formElement = document.getElementById('my-form');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulieren them a Formubermittlung
  setTimeout(() => {
    // Success-effect on dem button anzeigen
    showSuccessEffect(submitButton, 'bg');
    
    // Success-Text anzeigen
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = 'Daten erfolgreich gespeichert';
    resultMessage.classList.add('success-text');
    
    // Success-icon anzeigen
    const icon = document.getElementById('status-icon');
    icon.classList.add('success-icon');
  }, 1000);
});
```

## Fortschrittsverfolgung with Success-Effekten

Success-effects can zur Display from Fortschritten verwendet become:

```html
<div class="steps-containers">
  <div class="step success-bg">
    <span class="step-number">1</span>
    <span class="step-label">Registrierung</span>
  </div>
  <div class="step success-bg">
    <span class="step-number">2</span>
    <span class="step-label">Bestatigung</span>
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
.steps-containers {
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

## Accessibility

at the Usage from Success-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Semantik**: use them passende ARIA-attributes how `role="status"`
2. **Live-Regions**: use them `aria-live="polite"` for dynamische Updates
3. **Kontrast**: ensure them on ausreichenden Kontrast for Erfolgsfarben
4. **Multiple Signale**: Verlassen them oneself not only on color zur Erfolgsdarstellung
5. **Dauer**: ensure, that wichtige Erfolgsmeldungen lang genug sichtbar sind

```html
<!-- Barrierefreie Erfolgsmeldung -->
<div 
  class="alert success-bg" 
  role="status" 
  aria-live="polite"
>
  <div class="alert-icon success-icon" aria-hidden="true"></div>
  <div class="alert-content">
    <strong>success!</strong> Ihre Daten wurden gespeichert.
  </div>
</div>
```

## Success-States in Formen

Success-effects in Formen verbessern the Benutzererfahrung:

```html
<form id="signup-form">
  <div class="form-group">
    <label for="email">E-Mail</label>
    <div class="input-wrappers">
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
    <div class="input-wrappers">
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
// Live-validation with Success-Effekten
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
  const wrappers = field.closest('.input-wrappers');
  const iconElement = wrappers.querySelector('.validation-icon');
  const messageElement = field.closest('.form-group').querySelector('.validation-message');
  
  // Zurucksetzen
  field.classList.remove('success-border', 'error-border');
  iconElement.className = 'validation-icon';
  messageElement.className = 'validation-message';
  messageElement.textContent = '';
  
  // Leer lassen, if noch nothing eingegeben wurde
  if (!field.value.trim()) {
    return;
  }
  
  let isValid = false;
  let message = '';
  
  // validation after Typ
  switch(type) {
    case 'email':
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      message = isValid ? 'Gultige E-Mail' : 'Ungultige E-Mail';
      break;
    case 'password':
      isValid = field.value.length >= 8;
      message = isValid ? 'Passwort ist stark genug' : 'Passwort to kurz';
      break;
    // additional Validierungstypen...
  }
  
  if (isValid) {
    // Success-effects anwenden
    field.classList.add('success-border');
    iconElement.classList.add('success-icon');
    messageElement.classList.add('success-text');
    messageElement.textContent = message;
  } else {
    // Error-effects anwenden (hier for Vollstandigkeit)
    field.classList.add('error-border');
    iconElement.classList.add('error-icon');
    messageElement.classList.add('error-text');
    messageElement.textContent = message;
  }
}
```

## Browser-Kompatibilitat

the meisten Success-effects sind with allen modernen Browsern kompatibel. some Animationseffekte have however Einschrankungen in alteren Browsern.

| Browser | Kompatibilitat |
|---------|---------------|
| Chrome | Vollstandige Unterstutzung |
| Firefox | Vollstandige Unterstutzung |
| Safari | Vollstandige Unterstutzung |
| Edge | Vollstandige Unterstutzung |
| IE11 | Eingeschrankte Unterstutzung for animations and Gluheffekte |

## Verwandte effects

- [Error-effects](/docs/effects/interaction/error.md) - effects for Fehlerzustande
- [Warning-effects](/docs/effects/interaction/warning.md) - Warnhinweiseffekte
- [Focus-effects](/docs/effects/interaction/focus.md) - effects beim Fokussieren from Elementen 