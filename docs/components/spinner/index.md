---
title: Spinner Komponente
category: Components
---

# Spinner Komponente

Die Spinner-Komponente wird verwendet, um Lade- und Verarbeitungszustände in der Benutzeroberfläche anzuzeigen. Sie signalisiert dem Benutzer, dass eine Aktion im Hintergrund ausgeführt wird.

## Einfacher Spinner

Der Standard-Spinner ist ein rotierendes Element, das anzeigt, dass ein Prozess läuft.

```html
<div class="spinner"></div>
```

## Spinner-Varianten

### Kreisförmiger Spinner

```html
<div class="spinner-circle"></div>
```

### Punktbasierter Spinner

```html
<div class="spinner-dots"></div>
```

### Pulsierender Spinner

```html
<div class="spinner-pulse"></div>
```

## Größenvarianten

Der Spinner kann in verschiedenen Größen dargestellt werden.

```html
<div class="spinner spinner-sm"></div>
<div class="spinner"></div>
<div class="spinner spinner-lg"></div>
<div class="spinner spinner-xl"></div>
```

## Farbvarianten

```html
<div class="spinner spinner-primary"></div>
<div class="spinner spinner-secondary"></div>
<div class="spinner spinner-accent"></div>
<div class="spinner spinner-success"></div>
<div class="spinner spinner-warning"></div>
<div class="spinner spinner-error"></div>
```

## Spinner mit Text

```html
<div class="spinner-container">
  <div class="spinner"></div>
  <div class="spinner-text">Lädt...</div>
</div>
```

```css
.spinner-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner-text {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
```

## Spinner in Buttons

Der Spinner kann auch in Buttons verwendet werden, um anzuzeigen, dass eine Aktion ausgeführt wird.

```html
<button class="button primary">
  <span class="spinner-inline"></span>
  Lädt...
</button>
```

## Anpassung

Der Spinner kann über CSS-Variablen angepasst werden:

```css
.spinner {
  --spinner-size: 1.5rem;
  --spinner-border-width: 0.2rem;
  --spinner-border-color: var(--color-primary);
  --spinner-duration: 1.5s;
}
```

## Best Practices

- Verwenden Sie Spinner, um Benutzern anzuzeigen, dass eine Aktion im Hintergrund ausgeführt wird
- Setzen Sie den Spinner an geeigneten Stellen ein, z.B. beim Laden von Daten oder beim Absenden von Formularen
- Fügen Sie bei längeren Ladezeiten eine Textnachricht hinzu, um den Benutzer zu informieren
- Verwenden Sie die gleiche Spinner-Art in Ihrer gesamten Anwendung für ein konsistentes Erlebnis
- Achten Sie auf ausreichenden Kontrast, damit der Spinner gut sichtbar ist

## Barrierefreiheit

Für eine verbesserte Barrierefreiheit sollten Sie die folgenden Attribute verwenden:

```html
<div class="spinner" role="status" aria-label="Laden...">
  <span class="visually-hidden">Laden...</span>
</div>
```

Dies teilt Screenreadern mit, dass es sich um einen Ladeindikator handelt und stellt einen beschreibenden Text bereit. 