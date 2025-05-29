---
title: Fokus-effects
category: Guide
---

# Fokus-effects

the `focus.css` file bietet a Sammlung from Effekten, the angewendet become, if a element den Fokus erhalt (z.B. through Tastaturnavigation or Mausklick). these effects verbessern the Accessibility Ihrer Benutzeroberflache, indem them den aktuellen Fokus deutlich sichtbar machen, and unterstutzen gleichzeitig a asthetisch ansprechende Gestaltung.

## Overview

Fokus-effects sind entscheidend for the Accessibility and User-friendliness, besonders for Tastaturnutzer and Menschen with motorischen Einschrankungen. the Casoon UI Library bietet a Reihe from modernen, anpassbaren Fokus-Effekten, the sowohl funktional as also asthetisch ansprechend sind.

## Base-Fokus-effects

```html
<!-- Standard-Fokusringe -->
<button class="focus-ring">Standard Fokusring</button>
<button class="focus-ring-sm">smaller Fokusring</button>
<button class="focus-ring-lg">Grosser Fokusring</button>

<!-- Fokusring-Styles -->
<button class="focus-ring-solid">Durchgezogener Fokusring</button>
<button class="focus-ring-dashed">Gestrichelter Fokusring</button>
<button class="focus-ring-dotted">Gepunkteter Fokusring</button>

<!-- Gerundete Fokusringe -->
<button class="focus-ring-rounded">Abgerundeter Fokusring</button>
<button class="focus-ring-pill">Pillenformiger Fokusring</button>
<button class="focus-ring-circle">Kreisformiger Fokusring</button>
```

## Farbvarianten for Fokusringe

```html
<!-- Farbige Fokusringe -->
<button class="focus-ring-primary">Primarfarbener Fokusring</button>
<button class="focus-ring-secondary">Sekundarfarbener Fokusring</button>
<button class="focus-ring-accent">Akzentfarbener Fokusring</button>
<button class="focus-ring-success">Erfolgs-Fokusring</button>
<button class="focus-ring-warning">Warnungs-Fokusring</button>
<button class="focus-ring-error">errors-Fokusring</button>
<button class="focus-ring-info">info-Fokusring</button>

<!-- with transparency -->
<button class="focus-ring-primary-translucent">Halbtransparenter Fokusring</button>
```

## Offset- and Inset-Fokusringe

```html
<!-- Offset-Fokusringe (ausserhalb des Elements) -->
<button class="focus-ring-offset">Offset-Fokusring</button>
<button class="focus-ring-offset-sm">smaller Offset-Fokusring</button>
<button class="focus-ring-offset-lg">Grosser Offset-Fokusring</button>

<!-- Inset-Fokusringe (within des Elements) -->
<button class="focus-ring-inset">Inset-Fokusring</button>
<button class="focus-ring-inset-sm">smaller Inset-Fokusring</button>
<button class="focus-ring-inset-lg">Grosser Inset-Fokusring</button>
```

## Effektvolle Fokusringe

```html
<!-- Glow-effect at Fokus -->
<button class="focus-glow">Leuchtender Fokuseffekt</button>
<button class="focus-glow-primary">Primarfarbener Leuchteffekt</button>
<button class="focus-glow-subtle">Subtiler Leuchteffekt</button>
<button class="focus-glow-intense">Intensiver Leuchteffekt</button>

<!-- shadow-effect at Fokus -->
<button class="focus-shadow">shadow-Fokuseffekt</button>
<button class="focus-shadow-sm">smaller shadow-Fokuseffekt</button>
<button class="focus-shadow-lg">Grosser shadow-Fokuseffekt</button>

<!-- Puls-effect at Fokus -->
<button class="focus-pulse">Pulsierender Fokuseffekt</button>
<button class="focus-pulse-subtle">Subtiles Pulsieren</button>
<button class="focus-pulse-intense">Intensives Pulsieren</button>
```

## Transformationseffekte at Fokus

```html
<!-- Skalierung at Fokus -->
<button class="focus-scale">Skaliert at Fokus</button>
<button class="focus-scale-sm">Skaliert leicht at Fokus</button>
<button class="focus-scale-lg">Skaliert stark at Fokus</button>

<!-- Verschiebung at Fokus -->
<button class="focus-lift">Hebt oneself at Fokus</button>
<button class="focus-lift-sm">Hebt oneself leicht at Fokus</button>
<button class="focus-lift-lg">Hebt oneself stark at Fokus</button>
```

## Componentsspezifische Fokuseffekte

```html
<!-- Form-Inputer -->
<input type="text" class="focus-field" placeholder="Input with Fokuseffekt">
<input type="text" class="focus-field-underline" placeholder="Unterstrichener Fokuseffekt">
<input type="text" class="focus-field-float-label" placeholder="Schwebende Beschriftung">

<!-- Cardn and containers -->
<div class="card focus-card">
  <div class="card-content">Card with Fokuseffekt</div>
</div>

<!-- links and Navigationselemente -->
<a href="#" class="focus-link">link with Fokuseffekt</a>
<a href="#" class="focus-link-underline">link with Unterstreichungseffekt</a>
<a href="#" class="focus-link-highlight">link with Hervorhebungseffekt</a>
```

## Animierte Fokuseffekte

```html
<!-- Animierte Fokusringe -->
<button class="focus-ring-animated">Animierter Fokusring</button>
<button class="focus-ring-animated-dash">Animierter gestrichelter Ring</button>
<button class="focus-ring-animated-pulse">Animierter pulsierender Ring</button>

<!-- Fokuseffekt-Ubergange -->
<button class="focus-transition-fast">Schneller Fokusubergang</button>
<button class="focus-transition-slow">Langsamer Fokusubergang</button>
<button class="focus-transition-bounce">Federnder Fokusubergang</button>
```

## Fortgeschrittene Fokuseffekte

```html
<!-- Mehrschichtige Fokuseffekte -->
<button class="focus-multi-layer">Mehrschichtiger Fokuseffekt</button>

<!-- Kombinierte Fokuseffekte -->
<button class="focus-ring-primary focus-glow">Fokusring with Glow-effect</button>
<button class="focus-scale focus-shadow">Skalierung with shadow</button>

<!-- Kontextabhangige Fokuseffekte -->
<div class="focus-context-light">
  <button class="focus-ring">Fokusring im hellen Kontext</button>
</div>
<div class="focus-context-dark">
  <button class="focus-ring">Fokusring im dunklen Kontext</button>
</div>
```

## Customization over CSS Variables

the Fokuseffekte can over CSS Variables angepasst become:

```css
:root {
  /* Fokusring-Base-parameter */
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
  --focus-ring-color: var(--color-primary);
  --focus-ring-opacity: 1;
  --focus-ring-style: solid;
  
  /* Fokusring-Radien */
  --focus-ring-radius-sm: 2px;
  --focus-ring-radius-md: 4px;
  --focus-ring-radius-lg: 8px;
  --focus-ring-radius-full: 9999px;
  
  /* Fokus-Glow-parameter */
  --focus-glow-size-sm: 0 0 0 3px rgba(var(--color-primary-rgb), 0.25);
  --focus-glow-size-md: 0 0 0 4px rgba(var(--color-primary-rgb), 0.35);
  --focus-glow-size-lg: 0 0 0 6px rgba(var(--color-primary-rgb), 0.45);
  
  /* Fokus-transition-parameter */
  --focus-transition-duration: 0.2s;
  --focus-transition-timing: ease-out;
  --focus-transition-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Skalierungswerte */
  --focus-scale-sm: 1.02;
  --focus-scale-md: 1.05;
  --focus-scale-lg: 1.1;
  
  /* Anhebungswerte */
  --focus-lift-sm: 1px;
  --focus-lift-md: 2px;
  --focus-lift-lg: 4px;
}
```

## only-Tastatur-Fokuseffekte

a wichtiger Aspekt the Accessibility ist the Unterscheidung between Maus- and Tastaturfokus with `:focus-visible`:

```css
/* Example for einen Fokuseffekt, the only at Tastaturfokus sichtbar ist */
.focus-keyboard-only:focus {
  /* no sichtbarer Fokuseffekt at Mausklick */
  outline: none;
}

.focus-keyboard-only:focus-visible {
  /* Fokuseffekt at Tastaturfokus */
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

## Accessibility-Uberlegungen

```css
/* Hoher Kontrast for bessere visibility */
@media (prefers-contrast: more) {
  :root {
    --focus-ring-width: 3px;
    --focus-ring-color: currentColor;
    --focus-ring-style: solid;
    --focus-glow-size-md: none;
  }
}

/* Reduzierte Bewegung berucksichtigen */
@media (prefers-reduced-motion: reduce) {
  .focus-ring-animated,
  .focus-ring-animated-dash,
  .focus-ring-animated-pulse,
  .focus-pulse,
  .focus-pulse-subtle,
  .focus-pulse-intense {
    animation: none !important;
  }
  
  .focus-transition-bounce,
  .focus-transition-slow,
  .focus-transition-fast {
    transition-duration: 0.05s !important;
    transition-timing-function: ease-out !important;
  }
}
```

## Form-element-Fokus

```html
<!-- text fields -->
<input type="text" class="input focus-field" placeholder="text field">

<!-- Checkboxer -->
<select class="select focus-field">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Textbereiche -->
<textarea class="textarea focus-field" placeholder="Textbereich"></textarea>

<!-- checkboxes and radio buttons -->
<label class="checkbox-containers">
  <input type="checkbox" class="checkbox focus-control">
  <span class="checkbox-label">checkbox with Fokuseffekt</span>
</label>

<label class="radio-containers">
  <input type="radio" class="radio focus-control">
  <span class="radio-label">Radio with Fokuseffekt</span>
</label>
```

## Dynamische Fokus-Indikatoren

Fokus-Indikatoren, the oneself on ihre Umgebung customize:

```css
/* Dynamischer Fokusindikator-Kontrast */
.focus-adaptive-contrast:focus-visible {
  --focus-color: var(--on-background, currentColor);
  outline-color: var(--focus-color);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--focus-color) 40%, transparent);
}

/* Automatische Farbinvertierung on dunklem background */
.focus-auto-invert:focus-visible {
  outline-color: color-mix(in srgb, var(--color-background, white) 100%, invert);
}
```

## Praktische Examples

### Barrierefreies Navigationsmenu

```html
<nav class="main-nav">
  <ul>
    <li><a href="#" class="nav-link focus-link-underline">Startseite</a></li>
    <li><a href="#" class="nav-link focus-link-underline">over us</a></li>
    <li><a href="#" class="nav-link focus-link-underline">Dienstleistungen</a></li>
    <li><a href="#" class="nav-link focus-link-underline">Kontakt</a></li>
  </ul>
</nav>
```

### Barrierefreies Anmeldeformular

```html
<form class="form">
  <div class="form-group">
    <label for="username">Benutzername</label>
    <input type="text" id="username" class="input focus-field-underline">
  </div>
  
  <div class="form-group">
    <label for="password">Passwort</label>
    <input type="password" id="password" class="input focus-field-underline">
  </div>
  
  <div class="form-group">
    <label class="checkbox-containers">
      <input type="checkbox" class="checkbox focus-control">
      <span class="checkbox-label">Angemeldet bleiben</span>
    </label>
  </div>
  
  <button type="submit" class="button primary focus-ring-primary focus-glow">
    Anmelden
  </button>
</form>
```

### Interaktive Cardn with Fokuseffekten

```html
<div class="card-grid">
  <div class="card focus-card focus-lift" tabindex="0">
    <img src="product1.jpg" alt="Produkt 1">
    <div class="card-content">
      <h3>Produkt 1</h3>
      <p>Description for Produkt 1</p>
      <button class="button focus-ring-primary">Details</button>
    </div>
  </div>
  
  <div class="card focus-card focus-lift" tabindex="0">
    <img src="product2.jpg" alt="Produkt 2">
    <div class="card-content">
      <h3>Produkt 2</h3>
      <p>Description for Produkt 2</p>
      <button class="button focus-ring-primary">Details</button>
    </div>
  </div>
</div>
```

## Performance-Uberlegungen

some Fokuseffekte can Auswirkungen on the Performance have:

1. **Animierte Schatteneffekte** can the Rendering-Performance beeintrachtigen
2. **use them `box-shadow` instead of `filter`** for bessere Performance at Glow-Effekten
3. **Vorsicht at sizes Elementen** with komplexen Fokuseffekten
4. **`will-change` sparsam einsetzen** at very komplexen animations, if notig

## Best Practices

1. **Tastaturzuganglichkeit**: ensure, that all interaktiven elements with the Tastatur fokussierbar sind
2. **Deutliche visibility**: Fokuseffekte should deutlich sichtbar be, with ausreichendem Kontrast
3. **Consistency**: use them ahnliche Fokuseffekte for ahnliche elements
4. **Niemals remove**: remove them nie den Fokuseffekt without einen geeigneten Ersatz anzubieten (`outline: none` ist only with alternativem Fokusindikator erlaubt)
5. **Unterscheide `:focus` and `:focus-visible`**: use them `:focus-visible` for effects, the only at Tastaturfokus sichtbar be should

### Example for korrekte Fokus-Behandlung:

```css
/* FALSCH: Fokus without Ersatz entfernt */
.button-bad:focus {
  outline: none; /* no Ersatz angeboten! */
}

/* RICHTIG: Alternativer Fokusindikator */
.button-good:focus {
  outline: none;
  box-shadow: var(--focus-glow-size-md);
}

/* better: only at Tastaturfokus */
.button-best:focus {
  outline: none; /* Standard-Fokus remove */
}

.button-best:focus-visible {
  box-shadow: var(--focus-glow-size-md); /* Eigener Indikator for Tastaturfokus */
}
```

## Integration with anderen Components

Fokuseffekte should in the gesamten Application konsistent and zuganglich be. Dies gilt for all interaktiven elements:

1. **buttons and links**: Deutliche Fokuseffekte
2. **form elements**: Konsistente Display at Fokus
3. **Cardn and others containers**: if fokussierbar, with klarem Fokusindikator
4. **Benutzerdefinierte Components**: ARIA-konforme Fokussteuerung and visuelle Indikatoren 