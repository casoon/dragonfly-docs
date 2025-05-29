# Warning-Effekte

Warning-Effekte werden verwendet, um Benutzer auf potenzielle Probleme oder wichtige Informationen aufmerksam zu machen, die Beachtung erfordern, aber keinen kritischen Fehler darstellen. Die `@casoon/ui-lib` bietet verschiedene Warning-Effekte, die dazu beitragen, Warnhinweise klar und auffällig zu präsentieren.

## Basic Usage

Der grundlegende Warning-Effekt kann auf jedes Element angewendet werden:

```html
<div class="warning">Achtung: Wichtige Information</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Warning-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.warning` | Basisklasse für Warnhinweise |
| `.warning-border` | Warnung mit orangefarbenem Rand |
| `.warning-bg` | Warnung mit Hintergrundfarbe |
| `.warning-text` | Warnung mit orangefarbener Textfarbe |
| `.warning-icon` | Warnung mit Icon-Indikator |
| `.warning-pulse` | Warnung mit Pulsiereffekt |
| `.warning-flash` | Warnung mit Blinkeffekt |
| `.warning-glow` | Warnung mit orangefarbenem Glüheffekt |
| `.warning-badge` | Warnung als kleines Badge-Element |

## Variants

### Border-Effekt

Der klassische Warneffekt mit orangefarbenem Rand:

```html
<div class="card warning-border">
  <div class="card-body">Ihre Sitzung läuft in 5 Minuten ab</div>
</div>
```

### Background-Effekt

Warndarstellung mit subtiler Hintergrundfarbe:

```html
<div class="alert warning-bg">
  <p>Diese Aktion kann nicht rückgängig gemacht werden.</p>
</div>
```

### Text-Effekt

Warndarstellung mit orangefarbener Textfarbe:

```html
<p class="warning-text">Ihre Zahlungsinformationen sind nicht aktuell.</p>
```

### Icon-Effekt

Warndarstellung mit Warning-Icon:

```html
<div class="notification warning-icon">
  Fast erreichte Speichergrenze
</div>
```

### Pulse-Effekt

Pulsierende Warndarstellung für höhere Aufmerksamkeit:

```html
<div class="badge warning-pulse">
  Neue Nachricht
</div>
```

### Flash-Effekt

Blinkende Warndarstellung für kritische Hinweise:

```html
<div class="notification warning-flash">
  Batterie fast leer
</div>
```

### Glow-Effekt

Warndarstellung mit orangefarbenem Glüheffekt:

```html
<button class="btn warning-glow">
  Vorsicht
</button>
```

### Badge-Effekt

Kompakte Warndarstellung als kleines Badge:

```html
<span class="warning-badge">99+</span>
```

## Kombination mit anderen Elementen

Warning-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Formelemente

```html
<div class="form-group">
  <label for="password">Passwort</label>
  <input type="password" id="password" class="warning-border" value="Abc123">
  <p class="warning-text">Passwort ist zu schwach</p>
</div>

<select class="warning-border">
  <option value="1">Alte Version (nicht empfohlen)</option>
  <option value="2">Aktuelle Version</option>
</select>
```

### Buttons und Aktionen

```html
<button class="btn warning-bg">Mit Vorsicht fortfahren</button>
<a href="#" class="link warning-text">Nicht empfohlene Option</a>
```

### Benachrichtigungen und Alerts

```html
<div class="alert warning-bg">
  <h4>Achtung</h4>
  <p>Sie haben ungespeicherte Änderungen.</p>
</div>

<div class="toast warning-border">
  <div class="toast-header">Hinweis</div>
  <div class="toast-body">Updates verfügbar</div>
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

## Anpassung

Die Warning-Effekte können über CSS Variables angepasst werden:

```css
:root {
  --warning-color: #ffc107; /* Grundlegende Warnfarbe */
  --warning-border-color: #ffc107; /* Warnrandfarbe */
  --warning-border-width: 1px; /* Warnrandbreite */
  --warning-background: rgba(255, 193, 7, 0.1); /* Warnhintergrundfarbe */
  --warning-text-color: #ffc107; /* Warntextfarbe */
  --warning-icon-size: 16px; /* Größe des Warn-Icons */
  --warning-pulse-opacity: 0.6; /* Deckkraft für Pulsiereffekt */
  --warning-pulse-duration: 2s; /* Dauer des Pulsiereffekts */
  --warning-flash-duration: 1s; /* Dauer des Blinkeffekts */
  --warning-flash-color: #fff3cd; /* Farbe für Blinkeffekt */
  --warning-glow-radius: 4px; /* Radius für Glüheffekt */
  --warning-glow-intensity: 0.5; /* Intensität des Glüheffekts */
  --warning-badge-size: 18px; /* Größe des Warning-Badges */
}

/* Anpassung für dunkle Themes */
.dark-theme {
  --warning-color: #ffda6a;
  --warning-background: rgba(255, 218, 106, 0.15);
  --warning-text-color: #ffda6a;
  --warning-flash-color: rgba(255, 218, 106, 0.3);
}
```

## Animierte Warneffekte

### Pulse-Animation

```css
@keyframes warningPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: var(--warning-pulse-opacity); }
}

.warning-pulse {
  animation: warningPulse var(--warning-pulse-duration) ease-in-out infinite;
}
```

### Flash-Animation

```css
@keyframes warningFlash {
  0%, 100% { background-color: var(--warning-background); }
  50% { background-color: var(--warning-flash-color); }
}

.warning-flash {
  animation: warningFlash var(--warning-flash-duration) linear infinite;
}
```

### Badge-Animation

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

## Kontextbezogene Warnungen

Warning-Effekte können je nach Kontext unterschiedlich gestaltet werden:

### Ablaufende Sitzung

```html
<div class="session-warning warning-bg">
  <div class="warning-icon"></div>
  <div class="warning-content">
    <h5>Sitzung läuft bald ab</h5>
    <p>Ihre Sitzung läuft in <span class="countdown">5:00</span> Minuten ab.</p>
  </div>
  <button class="btn btn-sm">Verlängern</button>
</div>
```

### Kapazitätswarnung

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
    Dieser Benutzername ist bereits vergeben. Verfügbarkeit prüfen?
  </p>
</div>
```

## JavaScript-Integration

Für dynamische Warning-Effekte kann JavaScript verwendet werden:

```javascript
// Dynamisches Hinzufügen von Warning-Effekten
function showWarningEffect(element, type = 'border', message = '', autoHide = true) {
  // Warning-Klasse hinzufügen
  const warningClass = `warning-${type}`;
  element.classList.add(warningClass);
  
  // Wenn eine Nachricht vorhanden ist, diese anzeigen
  if (message) {
    // Bestehende Warnung entfernen, falls vorhanden
    const existingWarning = element.nextElementSibling;
    if (existingWarning && existingWarning.classList.contains('warning-message')) {
      existingWarning.remove();
    }
    
    // Neue Warnmeldung erstellen
    const warningMessage = document.createElement('p');
    warningMessage.classList.add('warning-text', 'warning-message');
    warningMessage.innerHTML = `<span class="warning-icon"></span> ${message}`;
    
    // Warnmeldung nach dem Element einfügen
    element.parentNode.insertBefore(warningMessage, element.nextSibling);
    
    // ARIA für Accessibility
    const warningId = `warning-${Math.random().toString(36).substr(2, 9)}`;
    warningMessage.id = warningId;
    element.setAttribute('aria-describedby', warningId);
    
    // Für Screenreader ankündigen
    warningMessage.setAttribute('role', 'alert');
    warningMessage.setAttribute('aria-live', 'polite');
  }
  
  // Optional automatisch ausblenden
  if (autoHide) {
    setTimeout(() => {
      element.classList.remove(warningClass);
      
      // Warnmeldung entfernen, falls vorhanden
      const warningMessage = element.nextElementSibling;
      if (warningMessage && warningMessage.classList.contains('warning-message')) {
        warningMessage.remove();
        element.removeAttribute('aria-describedby');
      }
    }, 5000);
  }
  
  // Rückgabe einer Funktion zum manuellen Entfernen
  return {
    clear: () => {
      element.classList.remove(warningClass);
      
      // Warnmeldung entfernen, falls vorhanden
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
    showWarningEffect(this, 'border', 'Passwort sollte mindestens 8 Zeichen lang sein', false);
  } else {
    // Warnung entfernen, wenn Passwort leer oder lang genug ist
    this.classList.remove('warning-border');
    
    // Warnmeldung entfernen, falls vorhanden
    const warningMessage = this.nextElementSibling;
    if (warningMessage && warningMessage.classList.contains('warning-message')) {
      warningMessage.remove();
      this.removeAttribute('aria-describedby');
    }
  }
});
```

## Ablaufende Countdown-Warnung

Ein häufiger Anwendungsfall ist die Warnung vor ablaufenden Sitzungen:

```html
<div id="session-warning" class="warning-bg" style="display: none;">
  <p>Ihre Sitzung läuft in <span id="countdown">5:00</span> Minuten ab.</p>
  <button id="extend-session">Sitzung verlängern</button>
</div>
```

```javascript
// Countdown-Warnung
function startSessionWarning(minutesUntilExpiry) {
  const warningElement = document.getElementById('session-warning');
  const countdownElement = document.getElementById('countdown');
  const extendButton = document.getElementById('extend-session');
  
  let secondsLeft = minutesUntilExpiry * 60;
  let countdownInterval;
  
  // Warnung anzeigen
  warningElement.style.display = 'block';
  warningElement.classList.add('warning-fade-in');
  
  // Countdown starten
  countdownInterval = setInterval(() => {
    secondsLeft--;
    
    // Countdown-Format aktualisieren (MM:SS)
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Zusätzliche Warnung bei kritischer Zeit
    if (secondsLeft <= 60) {
      warningElement.classList.remove('warning-bg');
      warningElement.classList.add('warning-flash');
    }
    
    // Timeout bei 0
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      // Hier Sitzung beenden oder automatisch verlängern
      window.location.href = '/session-expired';
    }
  }, 1000);
  
  // Event-Listener für Verlängerungsbutton
  extendButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    warningElement.style.display = 'none';
    warningElement.classList.remove('warning-fade-in', 'warning-flash');
    
    // Hier Sitzung verlängern (API-Aufruf)
    fetch('/api/extend-session', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Sitzung verlängert', data);
        // Optional: Nach einiger Zeit erneut warnen
        setTimeout(() => startSessionWarning(30), (30 - 5) * 60 * 1000);
      });
  });
}

// Usage: 5 Minuten vor Ablauf warnen
setTimeout(() => startSessionWarning(5), (30 - 5) * 60 * 1000);
```

## Accessibility

Bei der Usage von Warning-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Semantik**: Verwenden Sie passende ARIA-Attribute wie `role="alert"` für wichtige Warnungen
2. **Live-Regions**: Verwenden Sie `aria-live="polite"` für dynamische Warnungen
3. **Kontrast**: Achten Sie auf ausreichenden Kontrast für Warnfarben
4. **Multiple Signale**: Verlassen Sie sich nicht nur auf Farbe zur Warndarstellung
5. **Timing**: Stellen Sie sicher, dass Warnungen lang genug sichtbar sind, um wahrgenommen zu werden

```html
<!-- Barrierefreie Warnung -->
<div 
  class="alert warning-bg" 
  role="alert" 
  aria-live="polite"
>
  <div class="warning-icon" aria-hidden="true"></div>
  <div class="alert-content">
    <strong>Achtung!</strong> Diese Aktion kann nicht rückgängig gemacht werden.
  </div>
</div>
```

## Animation und Timing

Die Dauer und das Timing von Warning-Animationen sind wichtig für eine gute Benutzererfahrung:

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

## Browser-Kompatibilität

Die meisten Warning-Effekte sind mit allen modernen Browsern kompatibel. Einige Animationseffekte haben jedoch Einschränkungen in älteren Browsern.

| Browser | Kompatibilität |
|---------|---------------|
| Chrome | Vollständige Unterstützung |
| Firefox | Vollständige Unterstützung |
| Safari | Vollständige Unterstützung |
| Edge | Vollständige Unterstützung |
| IE11 | Eingeschränkte Unterstützung für Animationen und Glüheffekte |

## Verwandte Effekte

- [Error-Effekte](/docs/effects/interaction/error.md) - Effekte für Fehlerzustände
- [Success-Effekte](/docs/effects/interaction/success.md) - Erfolgseffekte
- [Info-Effekte](/docs/effects/interaction/info.md) - Informationseffekte 