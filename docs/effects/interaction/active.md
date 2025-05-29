# Active Effekte

Active-Effekte werden verwendet, um dem Benutzer Feedback zu geben, wenn ein Element aktiv ist oder gerade aktiviert wurde. Dies kann durch einen Klick, Tap oder andere Interaktionen geschehen. Die `@casoon/ui-lib` bietet verschiedene Active-Effekte, die dazu beitragen, die Benutzererfahrung zu verbessern und klares visuelles Feedback zu liefern.

## Basic Usage

Der grundlegende Active-Effekt kann auf jedes interaktive Element angewendet werden:

```html
<button class="active-effect">Klick mich</button>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Active-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.active-effect` | Basisklasse für Active-Effekte |
| `.active-scale` | Skalierungseffekt beim Aktivieren |
| `.active-push` | Eindrückeffekt beim Aktivieren |
| `.active-highlight` | Hervorhebungseffekt beim Aktivieren |
| `.active-glow` | Glüheffekt beim Aktivieren |
| `.active-ripple` | Welleneffekt beim Aktivieren (Material Design inspiriert) |
| `.active-color` | Farbwechseleffekt beim Aktivieren |

## Variants

### Scale-Effekt

Der Scale-Effekt verkleinert ein Element leicht, wenn es aktiviert wird, um einen physischen Druckeffekt zu simulieren:

```html
<button class="active-scale">Scale-Effekt</button>
```

### Push-Effekt

Der Push-Effekt gibt dem Benutzer das Gefühl, dass das Element nach innen gedrückt wird:

```html
<button class="active-push">Push-Effekt</button>
```

### Highlight-Effekt

Der Highlight-Effekt hebt das Element kurzzeitig durch eine Farbänderung hervor:

```html
<button class="active-highlight">Highlight-Effekt</button>
```

### Glow-Effekt

Der Glow-Effekt fügt einen kurzen Leuchteffekt hinzu, wenn das Element aktiviert wird:

```html
<button class="active-glow">Glow-Effekt</button>
```

### Ripple-Effekt

Der Ripple-Effekt erzeugt eine nach außen verlaufende Wellenbewegung vom Klickpunkt aus:

```html
<button class="active-ripple">Ripple-Effekt</button>
```

### Color-Effekt

Der Color-Effekt ändert die Farbe des Elements vorübergehend, wenn es aktiviert wird:

```html
<button class="active-color">Color-Effekt</button>
```

## Kombination mit anderen Elementen

Active-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Active-Effekten

```html
<button class="btn btn-primary active-scale">Primärer Button</button>
<button class="btn btn-secondary active-ripple">Sekundärer Button</button>
<button class="btn btn-outline active-push">Outline Button</button>
```

### Links mit Active-Effekten

```html
<a href="#" class="active-highlight">Link mit Highlight-Effekt</a>
```

### Cardn mit Active-Effekten

```html
<div class="card active-push">
  <div class="card-header">Cardnüberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>
```

## Anpassung

Die Active-Effekte können über CSS Variables angepasst werden:

```css
:root {
  --active-scale-factor: 0.97; /* Skalierungsfaktor für active-scale */
  --active-push-distance: 2px; /* Eindrückdistanz für active-push */
  --active-highlight-color: rgba(255, 255, 255, 0.3); /* Hervorhebungsfarbe */
  --active-glow-color: rgba(255, 165, 0, 0.6); /* Glühfarbe */
  --active-glow-radius: 10px; /* Glühradius */
  --active-ripple-color: rgba(0, 0, 0, 0.1); /* Wellenfarbe */
  --active-ripple-duration: 0.6s; /* Wellendauer */
  --active-color-from: currentColor; /* Ausgangsfarbe für Farbwechsel */
  --active-color-to: #ff5722; /* Zielfarbe für Farbwechsel */
  --active-transition-duration: 0.15s; /* Übergangsdauer */
}
```

## Accessibility

Bei der Usage von Active-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Active-Zustand einen ausreichenden Kontrast zum inaktiven Zustand bietet
2. **Bewegung**: Vermeiden Sie übermäßige Bewegung, da dies für Benutzer mit vestibulären Störungen problematisch sein kann
3. **Fokusindikatoren**: Active-Effekte sollten Fokusindikatoren nicht ersetzen, sondern ergänzen
4. **Eingabemethoden**: Effekte sollten für alle Eingabemethoden (Maus, Tastatur, Touch) konsistent sein

```html
<!-- Barrierefreier Button mit Active-Effekt -->
<button 
  class="btn active-scale" 
  aria-pressed="false" 
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')"
>
  Barrierefreier Button
</button>
```

## JavaScript-Integration

Für komplexere Active-Effekte, insbesondere den Ripple-Effekt, kann JavaScript verwendet werden:

```javascript
// Ripple-Effekt JavaScript
document.querySelectorAll('.active-ripple').forEach(button => {
  button.addEventListener('mousedown', function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-element');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
```

## Performance-Überlegungen

Active-Effekte können die Leistung beeinträchtigen, insbesondere auf mobilen Geräten. Beachten Sie folgende Optimierungen:

1. Verwenden Sie `transform` und `opacity` für Animationen, da diese gut von der GPU beschleunigt werden
2. Vermeiden Sie aufwändige Schatten- oder Filteränderungen während der Animation
3. Für den Ripple-Effekt sollten Sie `will-change` verwenden, um den Browser auf die Animation vorzubereiten
4. Begrenzen Sie die Anzahl der gleichzeitigen Animationen

```css
.active-ripple {
  position: relative;
  overflow: hidden;
  will-change: transform;
}

.ripple-element {
  position: absolute;
  border-radius: 50%;
  background-color: var(--active-ripple-color);
  transform: scale(0);
  animation: ripple var(--active-ripple-duration) linear;
  will-change: transform, opacity;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

## Browser-Kompatibilität

Die meisten Active-Effekte sind mit allen modernen Browsern kompatibel. Der Ripple-Effekt kann in älteren Browsern Probleme verursachen und erfordert möglicherweise Fallback-Lösungen.

| Browser | Kompatibilität |
|---------|---------------|
| Chrome | Vollständig unterstützt |
| Firefox | Vollständig unterstützt |
| Safari | Vollständig unterstützt |
| Edge | Vollständig unterstützt |
| IE11 | Eingeschränkte Unterstützung für Ripple-Effekt |

## Verwandte Effekte

- [Hover-Effekte](/docs/effects/interaction/hover.md) - Effekte beim Überfahren mit der Maus
- [Focus-Effekte](/docs/effects/interaction/focus.md) - Effekte beim Fokussieren von Elementen
- [Transitions](/docs/effects/transitions.md) - Übergänge zwischen Statesn 