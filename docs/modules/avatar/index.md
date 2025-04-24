# Avatar

Die Avatar-Komponente der Casoon UI Library dient zur Darstellung von Benutzerbildern oder Profilbildern.

## Verwendung

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>
```

## Module importieren

```css
/* Notwendige Abhängigkeit */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css'; /* oder ein anderes Theme */

/* Avatar-Modul */
@import 'casoon-ui-lib/modules/avatar.module.css';
```

## Varianten

### Größen

```html
<div class="avatar avatar--xs">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<div class="avatar avatar--sm">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<div class="avatar">
  <!-- Standardgröße -->
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<div class="avatar avatar--lg">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<div class="avatar avatar--xl">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>
```

### Formen

```html
<!-- Standardform: Kreis -->
<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<!-- Quadratisch -->
<div class="avatar avatar--square">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>

<!-- Abgerundetes Quadrat -->
<div class="avatar avatar--rounded">
  <img src="path/to/image.jpg" alt="Benutzername">
</div>
```

### Mit Initials

Wenn kein Bild verfügbar ist, können Initialen angezeigt werden:

```html
<div class="avatar">
  <div class="avatar__initials">MM</div>
</div>
```

### Mit Status

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
  <span class="avatar__status avatar__status--online"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
  <span class="avatar__status avatar__status--offline"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
  <span class="avatar__status avatar__status--away"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Benutzername">
  <span class="avatar__status avatar__status--busy"></span>
</div>
```

### Avatar-Gruppe

```html
<div class="avatar-group">
  <div class="avatar">
    <img src="path/to/image1.jpg" alt="Benutzer 1">
  </div>
  <div class="avatar">
    <img src="path/to/image2.jpg" alt="Benutzer 2">
  </div>
  <div class="avatar">
    <img src="path/to/image3.jpg" alt="Benutzer 3">
  </div>
  <div class="avatar">
    <div class="avatar__initials">+5</div>
  </div>
</div>
```

## CSS-Variablen

Die Avatar-Komponente verwendet folgende CSS-Variablen, die Sie anpassen können:

```css
:root {
  --avatar-size: 3rem;
  --avatar-size-xs: 1.5rem;
  --avatar-size-sm: 2rem;
  --avatar-size-lg: 4rem;
  --avatar-size-xl: 5rem;
  
  --avatar-border-radius: 50%;
  --avatar-border-radius-rounded: 0.5rem;
  --avatar-border-radius-square: 0;
  
  --avatar-border-width: 2px;
  --avatar-border-color: var(--color-white);
  
  --avatar-bg: var(--color-gray-200);
  --avatar-color: var(--color-gray-700);
  
  --avatar-status-size: 0.75rem;
  --avatar-status-border-width: 2px;
  --avatar-status-online-color: var(--color-success);
  --avatar-status-offline-color: var(--color-gray-500);
  --avatar-status-away-color: var(--color-warning);
  --avatar-status-busy-color: var(--color-error);
  
  --avatar-group-spacing: -0.75rem;
}
```

## Best Practices

### Zugänglichkeit

- Stellen Sie sicher, dass alle Bilder ein sinnvolles `alt`-Attribut haben
- Verwenden Sie ausreichenden Kontrast zwischen dem Hintergrund und dem Text der Initialen
- Verwenden Sie `aria-label` oder andere ARIA-Attribute, um zusätzliche Informationen für Screenreader bereitzustellen

### Responsive Design

- Verwenden Sie relative Einheiten (rem, em) für die Größe des Avatars
- Passen Sie die Größe des Avatars an verschiedene Bildschirmgrößen an
- Stellen Sie sicher, dass die Avatar-Gruppe auf kleinen Bildschirmen korrekt dargestellt wird

## Integration mit anderen Komponenten

Die Avatar-Komponente lässt sich gut mit anderen Komponenten kombinieren:

### Mit Card

```html
<div class="card">
  <div class="card__header">
    <div class="avatar">
      <img src="path/to/image.jpg" alt="Benutzername">
    </div>
    <div class="card__title">Max Mustermann</div>
  </div>
  <div class="card__body">
    Inhalt der Karte
  </div>
</div>
```

### Mit Kommentar

```html
<div class="comment">
  <div class="comment__avatar">
    <div class="avatar">
      <img src="path/to/image.jpg" alt="Benutzername">
    </div>
  </div>
  <div class="comment__content">
    <div class="comment__author">Max Mustermann</div>
    <div class="comment__text">Das ist ein Kommentar.</div>
    <div class="comment__date">Vor 2 Stunden</div>
  </div>
</div>
``` 