# Warning-effects

Warning-effects become verwendet, um user on potenzielle Probleme or wichtige Informationen aufmerksam to machen, the Beachtung erfordern, but keinen kritischen errors darstellen. the `@casoon/ui-lib` bietet verschiedene Warning-effects, the for that beitragen, Warnhinweise klar and auffallig to prasentieren.

## Basic Usage

the grundlegende Warning-effect kann on jedes element angewendet become:

```html
<div class="warning">attention: Wichtige Information</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Warning-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.warning` | Basisklasse for Warnhinweise |
| `.warning-border` | warning with orangefarbenem margin |
| `.warning-bg` | warning with Hintergrundfarbe |
| `.warning-text` | warning with orangefarbener Textfarbe |
| `.warning-icon` | warning with icon-Indikator |
| `.warning-pulse` | warning with Pulsiereffekt |
| `.warning-flash` | warning with Blinkeffekt |
| `.warning-glow` | warning with orangefarbenem Gluheffekt |
| `.warning-badge` | warning as kleines badge-element |

## Variants

### Border-effect

the klassische Warneffekt with orangefarbenem margin:

```html
<div class="card warning-border">
  <div class="card-body">Ihre Sitzung lauft in 5 Minuten ab</div>
</div>
```

### Background-effect

Warndarstellung with subtiler Hintergrundfarbe:

```html
<div class="alert warning-bg">
  <p>these Aktion kann not ruckgangig gemacht become.</p>
</div>
```

### Text-effect

Warndarstellung with orangefarbener Textfarbe:

```html
<p class="warning-text">Ihre Zahlungsinformationen sind not aktuell.</p>
```

### icon-effect

Warndarstellung with Warning-icon:

```html
<div class="notification warning-icon">
  Fast erreichte Speichergrenze
</div>
```

### Pulse-effect

Pulsierende Warndarstellung for hohere Aufmerksamkeit:

```html
<div class="badge warning-pulse">
  Neue Nachricht
</div>
```

### Flash-effect

Blinkende Warndarstellung for kritische Notee:

```html
<div class="notification warning-flash">
  Batterie fast leer
</div>
```

### Glow-effect

Warndarstellung with orangefarbenem Gluheffekt:

```html
<button class="btn warning-glow">
  Vorsicht
</button>
```

### badge-effect

Kompakte Warndarstellung as kleines badge:

```html
<span class="warning-badge">99+</span>
```

## Kombination with anderen Elementen

Warning-effects can with verschiedenen UI-Elementen kombiniert become:

### form elements

```html
<div class="form-group">
  <label for="password">Passwort</label>
  <input type="password" id="password" class="warning-border" value="Abc123">
  <p class="warning-text">Passwort ist to schwach</p>
</div>

<select class="warning-border">
  <option value="1">Alte version (not empfohlen)</option>
  <option value="2">Aktuelle version</option>
</select>
```

### buttons and Aktionen

```html
<button class="btn warning-bg">with Vorsicht fortfahren</button>
<a href="#" class="link warning-text">not empfohlene Option</a>
```

### notifications and Alerts

```html
<div class="alert warning-bg">
  <h4>attention</h4>
  <p>them have ungespeicherte Anderungen.</p>
</div>

<div class="toast warning-border">
  <div class="toast-header">Note</div>
  <div class="toast-body">Updates verfugbar</div>
</div>
```

### Statusanzeigen

```html
<div class="status-indicator">
  <span class="status-dot warning-bg"></span>
  <span class="status-text warning-text">Wartend</span>
</div>

<div class="progress">
  <div class="progress-bar warning-bg" style="width: 85%">85%</div>
</div>
```

## Customization

the Warning-effects can over CSS Variables angepasst become:

```css
:root {
  --warning-color: #ffc107; /* Grundlegende Warnfarbe */
  --warning-border-color: #ffc107; /* Warnrandfarbe */
  --warning-border-width: 1px; /* Warnrandbreite */
  --warning-background: rgba(255, 193, 7, 0.1); /* Warnhintergrundfarbe */
  --warning-text-color: #ffc107; /* Warntextfarbe */
  --warning-icon-size: 16px; /* size des Warn-icons */
  --warning-pulse-opacity: 0.6; /* Deckkraft for Pulsiereffekt */
  --warning-pulse-duration: 2s; /* Dauer des Pulsiereffekts */
  --warning-flash-duration: 1s; /* Dauer des Blinkeffekts */
  --warning-flash-color: #fff3cd; /* color for Blinkeffekt */
  --warning-glow-radius: 4px; /* Radius for Gluheffekt */
  --warning-glow-intensity: 0.5; /* Intensitat des Gluheffekts */
  --warning-badge-size: 18px; /* size des Warning-badges */
}

/* Customization for dunkle themes */
.dark-theme {
  --warning-color: #ffda6a;
  --warning-background: rgba(255, 218, 106, 0.15);
  --warning-text-color: #ffda6a;
  --warning-flash-color: rgba(255, 218, 106, 0.3);
}
```

## Animierte Warneffekte

### Pulse-animation

```css
@keyframes warningPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: var(--warning-pulse-opacity); }
}

.warning-pulse {
  animation: warningPulse var(--warning-pulse-duration) ease-in-out infinite;
}
```

### Flash-animation

```css
@keyframes warningFlash {
  0%, 100% { background-color: var(--warning-background); }
  50% { background-color: var(--warning-flash-color); }
}

.warning-flash {
  animation: warningFlash var(--warning-flash-duration) linear infinite;
}
```

### badge-animation

```css
@keyframes warningBadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.warning-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--warning-badge-size);
  height: var(--warning-badge-size);
  border-radius: 50%;
  background-color: var(--warning-color);
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0 4px;
  animation: warningBadgePulse 2s ease-in-out infinite;
}
```

## Kontextbezogene warnings

Warning-effects can je after Kontext unterschiedlich gestaltet become:

### Ablaufende Sitzung

```html
<div class="session-warning warning-bg">
  <div class="warning-icon"></div>
  <div class="warning-content">
    <h5>Sitzung lauft bald ab</h5>
    <p>Ihre Sitzung lauft in <span class="countdown">5:00</span> Minuten ab.</p>
  </div>
  <button class="btn btn-sm">Verlangern</button>
</div>
```

### Kapazitatswarnung

```html
<div class="storage-indicator">
  <div class="storage-bar">
    <div class="storage-used" style="width: 85%"></div>
  </div>
  <p class="warning-text">
    <span class="warning-icon"></span>
    85% Ihres Speichers sind belegt
  </p>
</div>
```

### Validierungswarnung

```html
<div class="form-group">
  <label for="username">Benutzername</label>
  <input type="text" id="username" class="warning-border" value="user1">
  <p class="warning-text">
    <span class="warning-icon"></span>
    this Benutzername ist bereits vergeben. Verfugbarkeit prufen?
  </p>
</div>
```

## JavaScript-Integration

for dynamische Warning-effects kann JavaScript verwendet become:

```javascript
// Dynamisches add from Warning-Effekten
function showWarningEffect(element, type = 'border', message = '', autoHide = true) {
  // Warning-Class add
  const warningClass = `warning-${type}`;
  element.classList.add(warningClass);
  
  // if a Nachricht vorhanden ist, these anzeigen
  if (message) {
    // Bestehende warning remove, if vorhanden
    const existingWarning = element.nextElementSibling;
    if (existingWarning && existingWarning.classList.contains('warning-message')) {
      existingWarning.remove();
    }
    
    // Neue Warnmeldung create
    const warningMessage = document.createElement('p');
    warningMessage.classList.add('warning-text', 'warning-message');
    warningMessage.innerHTML = `<span class="warning-icon"></span> ${message}`;
    
    // Warnmeldung after dem element einfugen
    element.parentNode.insertBefore(warningMessage, element.nextSibling);
    
    // ARIA for Accessibility
    const warningId = `warning-${Math.random().toString(36).substr(2, 9)}`;
    warningMessage.id = warningId;
    element.setAttribute('aria-describedby', warningId);
    
    // for Screenreader ankundigen
    warningMessage.setAttribute('role', 'alert');
    warningMessage.setAttribute('aria-live', 'polite');
  }
  
  // Optional automatisch ausblenden
  if (autoHide) {
    setTimeout(() => {
      element.classList.remove(warningClass);
      
      // Warnmeldung remove, if vorhanden
      const warningMessage = element.nextElementSibling;
      if (warningMessage && warningMessage.classList.contains('warning-message')) {
        warningMessage.remove();
        element.removeAttribute('aria-describedby');
      }
    }, 5000);
  }
  
  // Ruckgabe einer Function zum manuellen remove
  return {
    clear: () => {
      element.classList.remove(warningClass);
      
      // Warnmeldung remove, if vorhanden
      const warningMessage = element.nextElementSibling;
      if (warningMessage && warningMessage.classList.contains('warning-message')) {
        warningMessage.remove();
        element.removeAttribute('aria-describedby');
      }
    }
  };
}

// Usage
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', function() {
  // Einfache Passwortvalidierung
  if (this.value.length > 0 && this.value.length < 8) {
    showWarningEffect(this, 'border', 'Passwort sollte mindestens 8 Zeichen lang be', false);
  } else {
    // warning remove, if Passwort leer or lang genug ist
    this.classList.remove('warning-border');
    
    // Warnmeldung remove, if vorhanden
    const warningMessage = this.nextElementSibling;
    if (warningMessage && warningMessage.classList.contains('warning-message')) {
      warningMessage.remove();
      this.removeAttribute('aria-describedby');
    }
  }
});
```

## Ablaufende Countdown-warning

a haufiger Anwendungsfall ist the warning before ablaufenden Sitzungen:

```html
<div id="session-warning" class="warning-bg" style="display: none;">
  <p>Ihre Sitzung lauft in <span id="countdown">5:00</span> Minuten ab.</p>
  <button id="extend-session">Sitzung verlangern</button>
</div>
```

```javascript
// Countdown-warning
function startSessionWarning(minutesUntilExpiry) {
  const warningElement = document.getElementById('session-warning');
  const countdownElement = document.getElementById('countdown');
  const extendButton = document.getElementById('extend-session');
  
  let secondsLeft = minutesUntilExpiry * 60;
  let countdownInterval;
  
  // warning anzeigen
  warningElement.style.display = 'block';
  warningElement.classList.add('warning-fade-in');
  
  // Countdown starten
  countdownInterval = setInterval(() => {
    secondsLeft--;
    
    // Countdown-Format aktualisieren (MM:SS)
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Zusatzliche warning at kritischer Zeit
    if (secondsLeft <= 60) {
      warningElement.classList.remove('warning-bg');
      warningElement.classList.add('warning-flash');
    }
    
    // Timeout at 0
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      // Hier Sitzung beenden or automatisch verlangern
      window.location.href = '/session-expired';
    }
  }, 1000);
  
  // Event-Listener for Verlangerungsbutton
  extendButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    warningElement.style.display = 'none';
    warningElement.classList.remove('warning-fade-in', 'warning-flash');
    
    // Hier Sitzung verlangern (API-Aufruf)
    fetch('/api/extend-session', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Sitzung verlangert', data);
        // Optional: after einiger Zeit erneut warnen
        setTimeout(() => startSessionWarning(30), (30 - 5) * 60 * 1000);
      });
  });
}

// Usage: 5 Minuten before Ablauf warnen
setTimeout(() => startSessionWarning(5), (30 - 5) * 60 * 1000);
```

## Accessibility

at the Usage from Warning-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Semantik**: use them passende ARIA-attributes how `role="alert"` for wichtige warnings
2. **Live-Regions**: use them `aria-live="polite"` for dynamische warnings
3. **Kontrast**: ensure them on ausreichenden Kontrast for Warnfarben
4. **Multiple Signale**: Verlassen them oneself not only on color zur Warndarstellung
5. **Timing**: ensure, that warnings lang genug sichtbar sind, um wahrgenommen to become

```html
<!-- Barrierefreie warning -->
<div 
  class="alert warning-bg" 
  role="alert" 
  aria-live="polite"
>
  <div class="warning-icon" aria-hidden="true"></div>
  <div class="alert-content">
    <strong>attention!</strong> these Aktion kann not ruckgangig gemacht become.
  </div>
</div>
```

## animation and Timing

the Dauer and the Timing from Warning-animations sind important for a gute Benutzererfahrung:

```css
/* Pulsieranimation */
@keyframes warningPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: var(--warning-pulse-opacity); }
}

.warning-pulse {
  animation: warningPulse var(--warning-pulse-duration) ease-in-out infinite;
}

/* Blinkanimation */
@keyframes warningFlash {
  0%, 100% { background-color: var(--warning-background); }
  50% { background-color: var(--warning-flash-color); }
}

.warning-flash {
  animation: warningFlash var(--warning-flash-duration) linear infinite;
}

/* Einblendeanimation */
@keyframes warningFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.warning-fade-in {
  animation: warningFadeIn 0.3s ease-out forwards;
}
```

## Browser-Kompatibilitat

the meisten Warning-effects sind with allen modernen Browsern kompatibel. some Animationseffekte have however Einschrankungen in alteren Browsern.

| Browser | Kompatibilitat |
|---------|---------------|
| Chrome | Vollstandige Unterstutzung |
| Firefox | Vollstandige Unterstutzung |
| Safari | Vollstandige Unterstutzung |
| Edge | Vollstandige Unterstutzung |
| IE11 | Eingeschrankte Unterstutzung for animations and Gluheffekte |

## Verwandte effects

- [Error-effects](/docs/effects/interaction/error.md) - effects for Fehlerzustande
- [Success-effects](/docs/effects/interaction/success.md) - Erfolgseffekte
- [info-effects](/docs/effects/interaction/info.md) - Informationseffekte 