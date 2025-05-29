# Active effects

Active-effects become verwendet, um dem user Feedback to geben, if a element aktiv ist or gerade aktiviert wurde. Dies kann through einen Klick, Tap or others interactions geschehen. the `@casoon/ui-lib` bietet verschiedene Active-effects, the for that beitragen, the Benutzererfahrung to verbessern and klares visuelles Feedback to liefern.

## Basic Usage

the grundlegende Active-effect kann on jedes interaktive element angewendet become:

```html
<button class="active-effect">Klick me</button>
```

## CSS-classes

the folgenden CSS-classes stehen for Active-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.active-effect` | Basisklasse for Active-effects |
| `.active-scale` | Skalierungseffekt beim activate |
| `.active-push` | Eindruckeffekt beim activate |
| `.active-highlight` | Hervorhebungseffekt beim activate |
| `.active-glow` | Gluheffekt beim activate |
| `.active-ripple` | Welleneffekt beim activate (Material design inspiriert) |
| `.active-color` | Farbwechseleffekt beim activate |

## Variants

### Scale-effect

the Scale-effect verkleinert a element leicht, if it aktiviert wird, um einen physischen Druckeffekt to simulieren:

```html
<button class="active-scale">Scale-effect</button>
```

### Push-effect

the Push-effect gibt dem user the Gefuhl, that the element after innen gedruckt wird:

```html
<button class="active-push">Push-effect</button>
```

### Highlight-effect

the Highlight-effect hebt the element kurzzeitig through a Farbanderung hervor:

```html
<button class="active-highlight">Highlight-effect</button>
```

### Glow-effect

the Glow-effect fugt einen kurzen Leuchteffekt hinzu, if the element aktiviert wird:

```html
<button class="active-glow">Glow-effect</button>
```

### Ripple-effect

the Ripple-effect erzeugt a after aussen verlaufende Wellenbewegung vom Klickpunkt aus:

```html
<button class="active-ripple">Ripple-effect</button>
```

### Color-effect

the Color-effect andert the color des Elements vorubergehend, if it aktiviert wird:

```html
<button class="active-color">Color-effect</button>
```

## Kombination with anderen Elementen

Active-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Active-Effekten

```html
<button class="btn btn-primary active-scale">Primarer button</button>
<button class="btn btn-secondary active-ripple">Sekundarer button</button>
<button class="btn btn-outline active-push">Outline button</button>
```

### links with Active-Effekten

```html
<a href="#" class="active-highlight">link with Highlight-effect</a>
```

### Cardn with Active-Effekten

```html
<div class="card active-push">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>
```

## Customization

the Active-effects can over CSS Variables angepasst become:

```css
:root {
  --active-scale-factor: 0.97; /* Skalierungsfaktor for active-scale */
  --active-push-distance: 2px; /* Eindruckdistanz for active-push */
  --active-highlight-color: rgba(255, 255, 255, 0.3); /* Hervorhebungsfarbe */
  --active-glow-color: rgba(255, 165, 0, 0.6); /* Gluhfarbe */
  --active-glow-radius: 10px; /* Gluhradius */
  --active-ripple-color: rgba(0, 0, 0, 0.1); /* Wellenfarbe */
  --active-ripple-duration: 0.6s; /* Wellendauer */
  --active-color-from: currentColor; /* Ausgangsfarbe for Farbwechsel */
  --active-color-to: #ff5722; /* Zielfarbe for Farbwechsel */
  --active-transition-duration: 0.15s; /* Ubergangsdauer */
}
```

## Accessibility

at the Usage from Active-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Active-state einen ausreichenden Kontrast zum inaktiven state bietet
2. **Bewegung**: Vermeiden them ubermassige Bewegung, da dies for user with vestibularen Storungen problematisch be kann
3. **Fokusindikatoren**: Active-effects should Fokusindikatoren not ersetzen, but rather erganzen
4. **Eingabemethoden**: effects should for all Eingabemethoden (Maus, Tastatur, Touch) konsistent be

```html
<!-- Barrierefreier button with Active-effect -->
<button 
  class="btn active-scale" 
  aria-pressed="false" 
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')"
>
  Barrierefreier button
</button>
```

## JavaScript-Integration

for komplexere Active-effects, insbesondere den Ripple-effect, kann JavaScript verwendet become:

```javascript
// Ripple-effect JavaScript
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

## Performance-Uberlegungen

Active-effects can the Leistung beeintrachtigen, insbesondere on mobilen Geraten. note folgende Optimierungen:

1. use them `transform` and `opacity` for animations, da these good from the GPU beschleunigt become
2. Vermeiden them aufwandige shadow- or Filteranderungen wahrend the animation
3. for den Ripple-effect should them `will-change` use, um den Browser on the animation vorzubereiten
4. Begrenzen them the Anzahl the gleichzeitigen animations

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

## Browser-Kompatibilitat

the meisten Active-effects sind with allen modernen Browsern kompatibel. the Ripple-effect kann in alteren Browsern Probleme verursachen and erfordert moglicherweise Fallback-Losungen.

| Browser | Kompatibilitat |
|---------|---------------|
| Chrome | Vollstandig unterstutzt |
| Firefox | Vollstandig unterstutzt |
| Safari | Vollstandig unterstutzt |
| Edge | Vollstandig unterstutzt |
| IE11 | Eingeschrankte Unterstutzung for Ripple-effect |

## Verwandte effects

- [Hover-effects](/docs/effects/interaction/hover.md) - effects beim Uberfahren with the Maus
- [Focus-effects](/docs/effects/interaction/focus.md) - effects beim Fokussieren from Elementen
- [Transitions](/docs/effects/transitions.md) - Ubergange between Statesn 