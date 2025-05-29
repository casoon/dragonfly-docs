---
title: Icon System
category: Icons
---

# Icon System

Das Icon System der Casoon UI Library bietet eine umfassende Sammlung von Symbolen, die in verschiedenen Formaten und Stilen verfügbar sind, um eine konsistente visuelle Sprache in Ihrer Anwendung zu gewährleisten.

## Übersicht

Das Icon System umfasst:

- **Icon Sets**: Verschiedene Sammlungen von Icons für unterschiedliche Zwecke
- **Formate**: SVG, Webfonts und CSS-basierte Icons
- **Größen und Varianten**: Verschiedene Größen und Stilvarianten
- **Barrierefreiheit**: Zugängliche Icons mit angemessenen Labels

## Icon Sets

Die Casoon UI Library bietet folgende Icon Sets:

- **UI Icons**: Grundlegende Symbole für Benutzeroberflächen (Navigation, Aktionen, Steuerelemente)
- **Application Icons**: Symbole für häufige Anwendungsfunktionen
- **Document Icons**: Symbole für Dokumente und Dateitypen
- **Social Icons**: Symbole für soziale Medien und Kommunikation
- **Device Icons**: Symbole für Geräte und Hardware

## Formate und Implementierung

### SVG-Icons

```html
<span class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
</span>
```

### CSS-Icons

```html
<span class="icon icon-home" aria-hidden="true"></span>
```

### Icon-Webfont

```html
<i class="casoon-icon casoon-home" aria-hidden="true"></i>
```

## Größen und Varianten

Icons sind in verschiedenen Größen und Varianten verfügbar:

```html
<!-- Größen -->
<span class="icon icon-xs">...</span>
<span class="icon icon-s">...</span>
<span class="icon icon-m">...</span>
<span class="icon icon-l">...</span>
<span class="icon icon-xl">...</span>

<!-- Varianten -->
<span class="icon icon-outlined">...</span>
<span class="icon icon-filled">...</span>
<span class="icon icon-two-tone">...</span>
```

## Barrierefreiheit

Für optimale Zugänglichkeit sollten Icons entweder:

1. Mit `aria-hidden="true"` versehen werden, wenn sie rein dekorativ sind
2. Mit einem aussagekräftigen Label versehen werden, wenn sie informativ sind

```html
<!-- Dekoratives Icon -->
<span class="icon icon-star" aria-hidden="true"></span>

<!-- Informatives Icon -->
<span class="icon icon-warning" aria-label="Warnung"></span>
```

## Integration

Das Icon System kann in Ihre Anwendung integriert werden durch:

```css
/* Gesamtes Icon-System */
@import '@casoon/ui-lib/icons.css';

/* Oder nur einzelne Icon Sets */
@import '@casoon/ui-lib/icons/ui-icons.css';
@import '@casoon/ui-lib/icons/social-icons.css';
```

## Weiterführende Themen

- [Icon Sets](/icons/sets)
- [Icon Usage](/icons/usage)
- [Icon Customization](/icons/customization) 