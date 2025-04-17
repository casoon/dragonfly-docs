# Chip

Die Chip-Komponente der Casoon UI Library wird verwendet, um kompakte Elemente wie Tags, Filter oder Auswahloptionen darzustellen.

## Verwendung

```html
<div class="chip">
  <span class="chip__text">Tag</span>
</div>
```

## Module importieren

```css
/* Notwendige Abhängigkeit */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css'; /* oder ein anderes Theme */

/* Chip-Modul */
@import 'casoon-ui-lib/modules/chip.module.css';
```

## Varianten

### Standard-Chip

```html
<div class="chip">
  <span class="chip__text">Standard-Chip</span>
</div>
```

### Chip mit Schließen-Button

```html
<div class="chip">
  <span class="chip__text">Schließbar</span>
  <button class="chip__close" aria-label="Entfernen">×</button>
</div>
```

### Chip mit Icon

```html
<div class="chip">
  <span class="chip__icon">🏷️</span>
  <span class="chip__text">Mit Icon</span>
</div>
```

### Chip mit Icon und Schließen-Button

```html
<div class="chip">
  <span class="chip__icon">🏷️</span>
  <span class="chip__text">Vollständig</span>
  <button class="chip__close" aria-label="Entfernen">×</button>
</div>
```

### Chip-Farben

```html
<div class="chip chip--primary">
  <span class="chip__text">Primär</span>
</div>

<div class="chip chip--secondary">
  <span class="chip__text">Sekundär</span>
</div>

<div class="chip chip--success">
  <span class="chip__text">Erfolg</span>
</div>

<div class="chip chip--warning">
  <span class="chip__text">Warnung</span>
</div>

<div class="chip chip--error">
  <span class="chip__text">Fehler</span>
</div>

<div class="chip chip--info">
  <span class="chip__text">Info</span>
</div>
```

### Outline-Chips

```html
<div class="chip chip--outline chip--primary">
  <span class="chip__text">Primär Outline</span>
</div>

<div class="chip chip--outline chip--secondary">
  <span class="chip__text">Sekundär Outline</span>
</div>
```

### Größen

```html
<div class="chip chip--sm">
  <span class="chip__text">Klein</span>
</div>

<div class="chip">
  <span class="chip__text">Standard</span>
</div>

<div class="chip chip--lg">
  <span class="chip__text">Groß</span>
</div>
```

### Abgerundete oder Pill-Form

```html
<div class="chip chip--rounded">
  <span class="chip__text">Abgerundet</span>
</div>

<div class="chip chip--pill">
  <span class="chip__text">Pill-Form</span>
</div>
```

## Chip-Gruppe

```html
<div class="chip-group">
  <div class="chip">
    <span class="chip__text">JavaScript</span>
  </div>
  <div class="chip">
    <span class="chip__text">CSS</span>
  </div>
  <div class="chip">
    <span class="chip__text">HTML</span>
  </div>
</div>
```

## Interaktive Chips

Für interaktive Chips können Sie eines der folgenden Muster verwenden:

### Als Button

```html
<button class="chip chip--interactive">
  <span class="chip__text">Klickbar</span>
</button>
```

### Als Link

```html
<a href="#" class="chip chip--interactive">
  <span class="chip__text">Link</span>
</a>
```

### Als Checkbox

```html
<label class="chip chip--checkbox">
  <input type="checkbox" class="chip__input">
  <span class="chip__text">Option auswählen</span>
</label>
```

### Als Radio-Button

```html
<div class="chip-group chip-group--radio">
  <label class="chip chip--radio">
    <input type="radio" name="options" class="chip__input">
    <span class="chip__text">Option 1</span>
  </label>
  <label class="chip chip--radio">
    <input type="radio" name="options" class="chip__input">
    <span class="chip__text">Option 2</span>
  </label>
</div>
```

## CSS-Variablen

Die Chip-Komponente verwendet folgende CSS-Variablen, die Sie anpassen können:

```css
:root {
  --chip-height: 2rem;
  --chip-height-sm: 1.5rem;
  --chip-height-lg: 2.5rem;
  
  --chip-padding: 0.5rem 0.75rem;
  --chip-padding-sm: 0.25rem 0.5rem;
  --chip-padding-lg: 0.75rem 1rem;
  
  --chip-font-size: 0.875rem;
  --chip-font-size-sm: 0.75rem;
  --chip-font-size-lg: 1rem;
  
  --chip-border-radius: 0.25rem;
  --chip-border-radius-rounded: 0.5rem;
  --chip-border-radius-pill: 999px;
  
  --chip-bg: var(--color-gray-100);
  --chip-color: var(--color-gray-800);
  --chip-border-color: var(--color-gray-300);
  
  --chip-primary-bg: var(--color-primary-light);
  --chip-primary-color: var(--color-primary-dark);
  
  --chip-secondary-bg: var(--color-secondary-light);
  --chip-secondary-color: var(--color-secondary-dark);
  
  --chip-success-bg: var(--color-success-light);
  --chip-success-color: var(--color-success-dark);
  
  --chip-warning-bg: var(--color-warning-light);
  --chip-warning-color: var(--color-warning-dark);
  
  --chip-error-bg: var(--color-error-light);
  --chip-error-color: var(--color-error-dark);
  
  --chip-info-bg: var(--color-info-light);
  --chip-info-color: var(--color-info-dark);
  
  --chip-group-spacing: 0.5rem;
}
```

## JavaScript-Funktionalität

### Schließbare Chips

Fügen Sie JavaScript hinzu, um schließbare Chips zu implementieren:

```js
document.querySelectorAll('.chip__close').forEach(button => {
  button.addEventListener('click', function() {
    const chip = this.closest('.chip');
    chip.remove();
  });
});
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie `aria-label` für Buttons ohne sichtbaren Text
- Stellen Sie sicher, dass interaktive Chips ausreichenden Kontrast haben
- Bieten Sie alternative Interaktionsmöglichkeiten für Tastaturbenutzer
- Fügen Sie Focus-Styles für Tastaturbedienung hinzu

### Responsive Design

- Verwenden Sie relative Einheiten für Größen
- Stellen Sie sicher, dass Chip-Gruppen auf kleinen Bildschirmen gut funktionieren
- Erwägen Sie das Umbrechen von Chip-Gruppen auf mobilen Geräten

## Anwendungsbeispiele

### Filter-Chips

```html
<div class="filter">
  <label class="filter__label">Filter:</label>
  <div class="chip-group">
    <div class="chip chip--interactive chip--active">
      <span class="chip__text">Alle</span>
    </div>
    <div class="chip chip--interactive">
      <span class="chip__text">Verfügbar</span>
    </div>
    <div class="chip chip--interactive">
      <span class="chip__text">Ausverkauft</span>
    </div>
  </div>
</div>
```

### Tag-Liste

```html
<div class="tags">
  <label class="tags__label">Tags:</label>
  <div class="chip-group">
    <div class="chip">
      <span class="chip__text">JavaScript</span>
      <button class="chip__close" aria-label="JavaScript entfernen">×</button>
    </div>
    <div class="chip">
      <span class="chip__text">CSS</span>
      <button class="chip__close" aria-label="CSS entfernen">×</button>
    </div>
    <div class="chip">
      <span class="chip__text">HTML</span>
      <button class="chip__close" aria-label="HTML entfernen">×</button>
    </div>
  </div>
</div>
``` 