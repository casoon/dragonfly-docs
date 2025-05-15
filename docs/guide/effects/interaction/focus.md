---
title: Fokus-Effekte
category: Guide
---

# Fokus-Effekte

Die `focus.css` Datei bietet eine Sammlung von Effekten, die angewendet werden, wenn ein Element den Fokus erhält (z.B. durch Tastaturnavigation oder Mausklick). Diese Effekte verbessern die Barrierefreiheit Ihrer Benutzeroberfläche, indem sie den aktuellen Fokus deutlich sichtbar machen, und unterstützen gleichzeitig eine ästhetisch ansprechende Gestaltung.

## Übersicht

Fokus-Effekte sind entscheidend für die Barrierefreiheit und Benutzerfreundlichkeit, besonders für Tastaturnutzer und Menschen mit motorischen Einschränkungen. Die Casoon UI Library bietet eine Reihe von modernen, anpassbaren Fokus-Effekten, die sowohl funktional als auch ästhetisch ansprechend sind.

## Basis-Fokus-Effekte

```html
<!-- Standard-Fokusringe -->
<button class="focus-ring">Standard Fokusring</button>
<button class="focus-ring-sm">Kleiner Fokusring</button>
<button class="focus-ring-lg">Großer Fokusring</button>

<!-- Fokusring-Stile -->
<button class="focus-ring-solid">Durchgezogener Fokusring</button>
<button class="focus-ring-dashed">Gestrichelter Fokusring</button>
<button class="focus-ring-dotted">Gepunkteter Fokusring</button>

<!-- Gerundete Fokusringe -->
<button class="focus-ring-rounded">Abgerundeter Fokusring</button>
<button class="focus-ring-pill">Pillenförmiger Fokusring</button>
<button class="focus-ring-circle">Kreisförmiger Fokusring</button>
```

## Farbvarianten für Fokusringe

```html
<!-- Farbige Fokusringe -->
<button class="focus-ring-primary">Primärfarbener Fokusring</button>
<button class="focus-ring-secondary">Sekundärfarbener Fokusring</button>
<button class="focus-ring-accent">Akzentfarbener Fokusring</button>
<button class="focus-ring-success">Erfolgs-Fokusring</button>
<button class="focus-ring-warning">Warnungs-Fokusring</button>
<button class="focus-ring-error">Fehler-Fokusring</button>
<button class="focus-ring-info">Info-Fokusring</button>

<!-- Mit Transparenz -->
<button class="focus-ring-primary-translucent">Halbtransparenter Fokusring</button>
```

## Offset- und Inset-Fokusringe

```html
<!-- Offset-Fokusringe (außerhalb des Elements) -->
<button class="focus-ring-offset">Offset-Fokusring</button>
<button class="focus-ring-offset-sm">Kleiner Offset-Fokusring</button>
<button class="focus-ring-offset-lg">Großer Offset-Fokusring</button>

<!-- Inset-Fokusringe (innerhalb des Elements) -->
<button class="focus-ring-inset">Inset-Fokusring</button>
<button class="focus-ring-inset-sm">Kleiner Inset-Fokusring</button>
<button class="focus-ring-inset-lg">Großer Inset-Fokusring</button>
```

## Effektvolle Fokusringe

```html
<!-- Glow-Effekt bei Fokus -->
<button class="focus-glow">Leuchtender Fokuseffekt</button>
<button class="focus-glow-primary">Primärfarbener Leuchteffekt</button>
<button class="focus-glow-subtle">Subtiler Leuchteffekt</button>
<button class="focus-glow-intense">Intensiver Leuchteffekt</button>

<!-- Schatten-Effekt bei Fokus -->
<button class="focus-shadow">Schatten-Fokuseffekt</button>
<button class="focus-shadow-sm">Kleiner Schatten-Fokuseffekt</button>
<button class="focus-shadow-lg">Großer Schatten-Fokuseffekt</button>

<!-- Puls-Effekt bei Fokus -->
<button class="focus-pulse">Pulsierender Fokuseffekt</button>
<button class="focus-pulse-subtle">Subtiles Pulsieren</button>
<button class="focus-pulse-intense">Intensives Pulsieren</button>
```

## Transformationseffekte bei Fokus

```html
<!-- Skalierung bei Fokus -->
<button class="focus-scale">Skaliert bei Fokus</button>
<button class="focus-scale-sm">Skaliert leicht bei Fokus</button>
<button class="focus-scale-lg">Skaliert stark bei Fokus</button>

<!-- Verschiebung bei Fokus -->
<button class="focus-lift">Hebt sich bei Fokus</button>
<button class="focus-lift-sm">Hebt sich leicht bei Fokus</button>
<button class="focus-lift-lg">Hebt sich stark bei Fokus</button>
```

## Komponentenspezifische Fokuseffekte

```html
<!-- Formular-Eingabefelder -->
<input type="text" class="focus-field" placeholder="Eingabefeld mit Fokuseffekt">
<input type="text" class="focus-field-underline" placeholder="Unterstrichener Fokuseffekt">
<input type="text" class="focus-field-float-label" placeholder="Schwebende Beschriftung">

<!-- Karten und Container -->
<div class="card focus-card">
  <div class="card-content">Karte mit Fokuseffekt</div>
</div>

<!-- Links und Navigationselemente -->
<a href="#" class="focus-link">Link mit Fokuseffekt</a>
<a href="#" class="focus-link-underline">Link mit Unterstreichungseffekt</a>
<a href="#" class="focus-link-highlight">Link mit Hervorhebungseffekt</a>
```

## Animierte Fokuseffekte

```html
<!-- Animierte Fokusringe -->
<button class="focus-ring-animated">Animierter Fokusring</button>
<button class="focus-ring-animated-dash">Animierter gestrichelter Ring</button>
<button class="focus-ring-animated-pulse">Animierter pulsierender Ring</button>

<!-- Fokuseffekt-Übergänge -->
<button class="focus-transition-fast">Schneller Fokusübergang</button>
<button class="focus-transition-slow">Langsamer Fokusübergang</button>
<button class="focus-transition-bounce">Federnder Fokusübergang</button>
```

## Fortgeschrittene Fokuseffekte

```html
<!-- Mehrschichtige Fokuseffekte -->
<button class="focus-multi-layer">Mehrschichtiger Fokuseffekt</button>

<!-- Kombinierte Fokuseffekte -->
<button class="focus-ring-primary focus-glow">Fokusring mit Glow-Effekt</button>
<button class="focus-scale focus-shadow">Skalierung mit Schatten</button>

<!-- Kontextabhängige Fokuseffekte -->
<div class="focus-context-light">
  <button class="focus-ring">Fokusring im hellen Kontext</button>
</div>
<div class="focus-context-dark">
  <button class="focus-ring">Fokusring im dunklen Kontext</button>
</div>
```

## Anpassung über CSS-Variablen

Die Fokuseffekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Fokusring-Basis-Parameter */
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
  
  /* Fokus-Glow-Parameter */
  --focus-glow-size-sm: 0 0 0 3px rgba(var(--color-primary-rgb), 0.25);
  --focus-glow-size-md: 0 0 0 4px rgba(var(--color-primary-rgb), 0.35);
  --focus-glow-size-lg: 0 0 0 6px rgba(var(--color-primary-rgb), 0.45);
  
  /* Fokus-Transition-Parameter */
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

## Nur-Tastatur-Fokuseffekte

Ein wichtiger Aspekt der Barrierefreiheit ist die Unterscheidung zwischen Maus- und Tastaturfokus mit `:focus-visible`:

```css
/* Beispiel für einen Fokuseffekt, der nur bei Tastaturfokus sichtbar ist */
.focus-keyboard-only:focus {
  /* Kein sichtbarer Fokuseffekt bei Mausklick */
  outline: none;
}

.focus-keyboard-only:focus-visible {
  /* Fokuseffekt bei Tastaturfokus */
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

## Barrierefreiheit-Überlegungen

```css
/* Hoher Kontrast für bessere Sichtbarkeit */
@media (prefers-contrast: more) {
  :root {
    --focus-ring-width: 3px;
    --focus-ring-color: currentColor;
    --focus-ring-style: solid;
    --focus-glow-size-md: none;
  }
}

/* Reduzierte Bewegung berücksichtigen */
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

## Formular-Element-Fokus

```html
<!-- Textfelder -->
<input type="text" class="input focus-field" placeholder="Textfeld">

<!-- Auswahlfelder -->
<select class="select focus-field">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Textbereiche -->
<textarea class="textarea focus-field" placeholder="Textbereich"></textarea>

<!-- Checkboxen und Radiobuttons -->
<label class="checkbox-container">
  <input type="checkbox" class="checkbox focus-control">
  <span class="checkbox-label">Checkbox mit Fokuseffekt</span>
</label>

<label class="radio-container">
  <input type="radio" class="radio focus-control">
  <span class="radio-label">Radio mit Fokuseffekt</span>
</label>
```

## Dynamische Fokus-Indikatoren

Fokus-Indikatoren, die sich an ihre Umgebung anpassen:

```css
/* Dynamischer Fokusindikator-Kontrast */
.focus-adaptive-contrast:focus-visible {
  --focus-color: var(--on-background, currentColor);
  outline-color: var(--focus-color);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--focus-color) 40%, transparent);
}

/* Automatische Farbinvertierung auf dunklem Hintergrund */
.focus-auto-invert:focus-visible {
  outline-color: color-mix(in srgb, var(--color-background, white) 100%, invert);
}
```

## Praktische Beispiele

### Barrierefreies Navigationsmenü

```html
<nav class="main-nav">
  <ul>
    <li><a href="#" class="nav-link focus-link-underline">Startseite</a></li>
    <li><a href="#" class="nav-link focus-link-underline">Über uns</a></li>
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
    <label class="checkbox-container">
      <input type="checkbox" class="checkbox focus-control">
      <span class="checkbox-label">Angemeldet bleiben</span>
    </label>
  </div>
  
  <button type="submit" class="button primary focus-ring-primary focus-glow">
    Anmelden
  </button>
</form>
```

### Interaktive Karten mit Fokuseffekten

```html
<div class="card-grid">
  <div class="card focus-card focus-lift" tabindex="0">
    <img src="product1.jpg" alt="Produkt 1">
    <div class="card-content">
      <h3>Produkt 1</h3>
      <p>Beschreibung für Produkt 1</p>
      <button class="button focus-ring-primary">Details</button>
    </div>
  </div>
  
  <div class="card focus-card focus-lift" tabindex="0">
    <img src="product2.jpg" alt="Produkt 2">
    <div class="card-content">
      <h3>Produkt 2</h3>
      <p>Beschreibung für Produkt 2</p>
      <button class="button focus-ring-primary">Details</button>
    </div>
  </div>
</div>
```

## Performance-Überlegungen

Einige Fokuseffekte können Auswirkungen auf die Performance haben:

1. **Animierte Schatteneffekte** können die Rendering-Performance beeinträchtigen
2. **Verwenden Sie `box-shadow` statt `filter`** für bessere Performance bei Glow-Effekten
3. **Vorsicht bei großen Elementen** mit komplexen Fokuseffekten
4. **`will-change` sparsam einsetzen** bei sehr komplexen Animationen, wenn nötig

## Best Practices

1. **Tastaturzugänglichkeit**: Stellen Sie sicher, dass alle interaktiven Elemente mit der Tastatur fokussierbar sind
2. **Deutliche Sichtbarkeit**: Fokuseffekte sollten deutlich sichtbar sein, mit ausreichendem Kontrast
3. **Konsistenz**: Verwenden Sie ähnliche Fokuseffekte für ähnliche Elemente
4. **Niemals entfernen**: Entfernen Sie nie den Fokuseffekt ohne einen geeigneten Ersatz anzubieten (`outline: none` ist nur mit alternativem Fokusindikator erlaubt)
5. **Unterscheide `:focus` und `:focus-visible`**: Nutzen Sie `:focus-visible` für Effekte, die nur bei Tastaturfokus sichtbar sein sollen

### Beispiel für korrekte Fokus-Behandlung:

```css
/* FALSCH: Fokus ohne Ersatz entfernt */
.button-bad:focus {
  outline: none; /* Kein Ersatz angeboten! */
}

/* RICHTIG: Alternativer Fokusindikator */
.button-good:focus {
  outline: none;
  box-shadow: var(--focus-glow-size-md);
}

/* BESSER: Nur bei Tastaturfokus */
.button-best:focus {
  outline: none; /* Standard-Fokus entfernen */
}

.button-best:focus-visible {
  box-shadow: var(--focus-glow-size-md); /* Eigener Indikator für Tastaturfokus */
}
```

## Integration mit anderen Komponenten

Fokuseffekte sollten in der gesamten Anwendung konsistent und zugänglich sein. Dies gilt für alle interaktiven Elemente:

1. **Buttons und Links**: Deutliche Fokuseffekte
2. **Formularelemente**: Konsistente Darstellung bei Fokus
3. **Karten und andere Container**: Wenn fokussierbar, mit klarem Fokusindikator
4. **Benutzerdefinierte Komponenten**: ARIA-konforme Fokussteuerung und visuelle Indikatoren 