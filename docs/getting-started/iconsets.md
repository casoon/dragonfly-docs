---
title: Icon-System
category: Getting Started
---

# Icon-System

Das Casoon UI Library Icon-System bietet eine umfassende Lösung für die Integration und Verwendung von Icons in Ihrer Anwendung.

## Überblick

Das Icon-System basiert auf SVG-Icons und bietet verschiedene Implementierungsmethoden:

1. **Inline SVG-Icons** - die empfohlene Methode mit der besten Leistung und Anpassbarkeit
2. **Sprite-basierte Icons** - für effiziente Wiederverwendung über ein zentrales Sprite-Sheet
3. **Icon-Komponenten** - für einfache Integration in Framework-Projekte

## Einrichtung

### Methode 1: Inline SVG-Icons

Importieren Sie das core Icon-Modul:

```html
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/modules/icons/icons.css">
```

Oder per JavaScript:

```javascript
import '@casoon/ui-lib/modules/icons/icons.css';
```

### Methode 2: SVG-Sprite Sheet

Integrieren Sie das Sprite-Sheet in Ihr HTML:

```html
<div style="display:none">
  <!-- Sprite-Sheet wird meist einmalig am Anfang des <body> eingebunden -->
  <svg id="icon-sprite">
    <include src="node_modules/@casoon/ui-lib/assets/icons/sprite.svg"></include>
  </svg>
</div>
```

## Icon-Verwendung

### Inline SVG-Icons

```html
<div class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</div>
```

### SVG-Sprite Referenzierung

```html
<div class="icon">
  <svg>
    <use xlink:href="#icon-plus"></use>
  </svg>
</div>
```

### Icon-Größen

Das Icon-System bietet vordefinierte Größen:

```html
<div class="icon icon--xs"><!-- Extra klein (16px) --></div>
<div class="icon icon--sm"><!-- Klein (20px) --></div>
<div class="icon"><!-- Standard (24px) --></div>
<div class="icon icon--md"><!-- Mittel (32px) --></div>
<div class="icon icon--lg"><!-- Groß (40px) --></div>
<div class="icon icon--xl"><!-- Extra groß (48px) --></div>
```

### Icon-Farben

Icons erben standardmäßig die Textfarbe ihres Elternelements (`currentColor`):

```html
<div class="text-primary">
  <div class="icon"><!-- Icon übernimmt die primäre Textfarbe --></div>
</div>

<div class="icon" style="color: var(--color-accent)">
  <!-- Direktes Setzen einer Farbe -->
</div>
```

### Farbvariationen über CSS-Klassen

```html
<div class="icon icon--primary"><!-- Primärfarbe --></div>
<div class="icon icon--secondary"><!-- Sekundärfarbe --></div>
<div class="icon icon--accent"><!-- Akzentfarbe --></div>
<div class="icon icon--success"><!-- Erfolgsfarbe --></div>
<div class="icon icon--warning"><!-- Warnfarbe --></div>
<div class="icon icon--error"><!-- Fehlerfarbe --></div>
<div class="icon icon--info"><!-- Infofarbe --></div>
<div class="icon icon--light"><!-- Helle Farbe --></div>
<div class="icon icon--dark"><!-- Dunkle Farbe --></div>
```

## Icon mit Text kombinieren

### Horizontale Anordnung

```html
<div class="flex flex--items-center flex--gap-2">
  <div class="icon">
    <svg><!-- Icon-Inhalt --></svg>
  </div>
  <span>Beschreibungstext</span>
</div>
```

### Icon-Button

```html
<button class="btn btn--primary">
  <span class="flex flex--items-center flex--gap-2">
    <div class="icon">
      <svg><!-- Icon-Inhalt --></svg>
    </div>
    <span>Button mit Icon</span>
  </span>
</button>
```

## Icon-Anpassungen

### Icon-Ausrichtung

```html
<div class="flex flex--items-center flex--justify-center" style="height: 100px;">
  <div class="icon"><!-- Zentriertes Icon --></div>
</div>
```

### Rotation und Spiegelung

```html
<div class="icon icon--rotate-90"><!-- 90° im Uhrzeigersinn gedreht --></div>
<div class="icon icon--rotate-180"><!-- 180° gedreht --></div>
<div class="icon icon--rotate-270"><!-- 270° im Uhrzeigersinn gedreht --></div>
<div class="icon icon--flip-h"><!-- Horizontal gespiegelt --></div>
<div class="icon icon--flip-v"><!-- Vertikal gespiegelt --></div>
```

### Animationen

```html
<div class="icon icon--pulse"><!-- Pulsierendes Icon --></div>
<div class="icon icon--spin"><!-- Rotierendes Icon --></div>
<div class="icon icon--bounce"><!-- Hüpfendes Icon --></div>
```

## Barrierefreiheit

Für bessere Barrierefreiheit sollten Icons, die funktionale Bedeutung haben, entsprechende Beschreibungen enthalten:

```html
<button class="btn btn--icon" aria-label="Löschen">
  <div class="icon">
    <svg aria-hidden="true"><!-- Lösch-Icon --></svg>
  </div>
</button>
```

Oder bei Icons mit begleitendem Text:

```html
<button class="btn">
  <div class="icon" aria-hidden="true"><!-- Icon ist dekorativ --></div>
  <span>Speichern</span>
</button>
```

## Verfügbare Icon-Sets

Casoon UI Library bietet verschiedene Icon-Sets:

### Standard-Icons

Dies sind die Basis-Icons für UI-Elemente wie Navigation, Aktionen und Formulare.

```html
<div class="icon">
  <svg><use xlink:href="#icon-home"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-settings"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-user"></use></svg>
</div>
```

### Erweiterte Icons

Zusätzliche Icons für spezifischere Anwendungsfälle:

```html
<div class="icon">
  <svg><use xlink:href="#icon-calendar"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-chart-bar"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-document"></use></svg>
</div>
```

### Soziale Medien Icons

Icons für Soziale Medien und externe Dienste:

```html
<div class="icon">
  <svg><use xlink:href="#icon-facebook"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-twitter"></use></svg>
</div>

<div class="icon">
  <svg><use xlink:href="#icon-linkedin"></use></svg>
</div>
```

## Icon-Import und -Export

### SVG-Icons importieren

Sie können eigene SVG-Icons zum Sprite-Sheet hinzufügen:

1. Optimieren Sie Ihre SVG-Datei (z.B. mit SVGO)
2. Fügen Sie die SVG-Datei mit einer eindeutigen ID zum Sprite-Sheet hinzu
3. Referenzieren Sie das Icon über die ID

### Icons von Drittanbietern

Sie können auch Icon-Sets von Drittanbietern integrieren:

```javascript
// Beispiel für die Integration von Font Awesome oder ähnlichen Icon-Sets
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser);
dom.watch();
```

## Framework-spezifische Integration

### React

```jsx
// Icon-Komponente in React
import React from 'react';

const Icon = ({ name, size = 'default', className = '' }) => {
  const sizeClass = size !== 'default' ? `icon--${size}` : '';
  
  return (
    <div className={`icon ${sizeClass} ${className}`}>
      <svg>
        <use xlinkHref={`#icon-${name}`}></use>
      </svg>
    </div>
  );
};

// Verwendung
<Icon name="home" size="lg" className="icon--primary" />
```

### Vue.js

```vue
<!-- Icon-Komponente in Vue -->
<template>
  <div :class="['icon', size ? `icon--${size}` : '', className]">
    <svg>
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: { type: String, required: true },
    size: { type: String, default: '' },
    className: { type: String, default: '' }
  }
}
</script>

<!-- Verwendung -->
<Icon name="home" size="lg" class-name="icon--primary" />
```

### Angular

```typescript
// Icon-Komponente in Angular
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div class="icon" [ngClass]="[size ? 'icon--' + size : '', className]">
      <svg>
        <use [attr.xlink:href]="'#icon-' + name"></use>
      </svg>
    </div>
  `
})
export class IconComponent {
  @Input() name: string;
  @Input() size: string = '';
  @Input() className: string = '';
}

// Verwendung
<app-icon name="home" size="lg" className="icon--primary"></app-icon>
```

## Performance-Optimierungen

### Lazy Loading

Für große Icon-Sets kann Lazy Loading implementiert werden:

```javascript
// Beispiel für dynamisches Nachladen von Icons bei Bedarf
function loadIconSet(setName) {
  return fetch(`/assets/icons/${setName}.svg`)
    .then(response => response.text())
    .then(svgContent => {
      const div = document.createElement('div');
      div.innerHTML = svgContent;
      document.body.appendChild(div.firstChild);
    });
}

// Icons bei Bedarf laden
if (document.querySelector('.needs-commerce-icons')) {
  loadIconSet('commerce-icons');
}
```

### Preloading wichtiger Icons

Wichtige Icons können für schnellere Ladezeiten vorgeladen werden:

```html
<link rel="preload" href="/assets/icons/core-icons.svg" as="image" type="image/svg+xml">
```

## Best Practices für Icons

- **SVG statt Icon-Fonts** - Verwenden Sie SVG-Icons für bessere Barrierefreiheit und Anpassbarkeit
- **Sprite-Sheet Nutzung** - Bündeln Sie häufig verwendete Icons in einem Sprite-Sheet
- **Barrierefreie Attribute** - Setzen Sie `aria-hidden="true"` für dekorative Icons und `aria-label` für funktionale Icons
- **Farbanpassung mit currentColor** - Nutzen Sie `currentColor` für flexible Farbgestaltung
- **Icon-Optimierung** - Optimieren Sie SVGs vor der Verwendung (unnötige Attribute entfernen)
- **Angemessene Größen** - Verwenden Sie die passende Icon-Größe für den jeweiligen Kontext
- **Konsistentes Styling** - Halten Sie Icon-Design und -Farben innerhalb der Anwendung einheitlich
