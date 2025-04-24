---
title: Utilities
category: Getting Started
---

# Utility-Styles

Die Utility-Styles der Casoon UI Library sind eine Sammlung von Hilfsklassen für schnelles und konsistentes Styling ohne die Notwendigkeit, benutzerdefiniertes CSS zu schreiben. Sie folgen dem Utility-First-Ansatz und ermöglichen die direkte Anwendung von Design Tokens auf HTML-Elemente.

## Grundlegende Verwendung

Um die Utility-Styles zu verwenden, importieren Sie die CSS-Datei:

```css
@import "casoon-ui-lib/dist/index.css";
```

## Spacing Utilities

Die Spacing-Utilities bieten Klassen für Margin und Padding basierend auf der Spacing-Skala:

### Margin

```css
.m-0 { margin: 0; }
.m-1 { margin: var(--spacing-1); }
.m-2 { margin: var(--spacing-2); }
.m-3 { margin: var(--spacing-3); }
.m-4 { margin: var(--spacing-4); }
.m-5 { margin: var(--spacing-5); }

.mt-0 { margin-top: 0; }
.mr-0 { margin-right: 0; }
.mb-0 { margin-bottom: 0; }
.ml-0 { margin-left: 0; }

.mt-1 { margin-top: var(--spacing-1); }
.mt-2 { margin-top: var(--spacing-2); }
.mt-3 { margin-top: var(--spacing-3); }
.mt-4 { margin-top: var(--spacing-4); }
.mt-5 { margin-top: var(--spacing-5); }

/* Ähnlich für mr, mb, ml */
```

### Padding

```css
.p-0 { padding: 0; }
.p-1 { padding: var(--spacing-1); }
.p-2 { padding: var(--spacing-2); }
.p-3 { padding: var(--spacing-3); }
.p-4 { padding: var(--spacing-4); }
.p-5 { padding: var(--spacing-5); }

.pt-0 { padding-top: 0; }
.pr-0 { padding-right: 0; }
.pb-0 { padding-bottom: 0; }
.pl-0 { padding-left: 0; }

.pt-1 { padding-top: var(--spacing-1); }
.pt-2 { padding-top: var(--spacing-2); }
.pt-3 { padding-top: var(--spacing-3); }
.pt-4 { padding-top: var(--spacing-4); }
.pt-5 { padding-top: var(--spacing-5); }

/* Ähnlich für pr, pb, pl */
```

### Anwendungsbeispiel:

```html
<div class="m-4 p-2">
  Element mit Margin 1.5rem und Padding 0.5rem
</div>

<div class="mt-3 mb-2 px-4">
  Element mit Margin-Top 0.75rem, Margin-Bottom 0.5rem, und horizontalem Padding 1rem
</div>
```

## Display Utilities

```css
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.inline-grid { display: inline-grid; }
.hidden { display: none; }
```

### Anwendungsbeispiel:

```html
<div class="flex">
  <div class="block">Block-Element in einem Flex-Container</div>
  <span class="inline-block">Inline-Block-Element</span>
</div>
```

## Position Utilities

```css
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }

.top-1 { top: var(--spacing-1); }
.top-2 { top: var(--spacing-2); }
/* usw. für right, bottom, left */
```

### Anwendungsbeispiel:

```html
<div class="relative">
  <div class="absolute top-0 right-0">
    Absolut positioniert, oben rechts
  </div>
</div>
```

## Flexbox Utilities

Die Flexbox-Utilities ermöglichen die schnelle Erstellung von flexiblen Layouts:

```css
/* Flex-Richtung */
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Justify Content */
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* Align Items */
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Flex Wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }

/* Flex (Grow und Shrink) */
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-initial { flex: 0 1 auto; }
.flex-none { flex: none; }
```

### Anwendungsbeispiel:

```html
<div class="flex flex-col md:flex-row justify-between items-center">
  <div>Links ausgerichtet (mobil: oben)</div>
  <div>Zentriert vertikal</div>
  <div>Rechts ausgerichtet (mobil: unten)</div>
</div>
```

## Grid Utilities

```css
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.gap-0 { gap: 0; }
.gap-1 { gap: var(--spacing-1); }
.gap-2 { gap: var(--spacing-2); }
.gap-3 { gap: var(--spacing-3); }
.gap-4 { gap: var(--spacing-4); }
.gap-5 { gap: var(--spacing-5); }

.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
/* usw. bis col-span-12 */
```

### Anwendungsbeispiel:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Nimmt 2/3 der Breite ein</div>
  <div>Nimmt 1/3 der Breite ein</div>
</div>
```

## Text Utilities

```css
/* Textausrichtung */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Schriftgewicht */
.font-thin { font-weight: 100; }
.font-extralight { font-weight: 200; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }

/* Textumwandlung */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.normal-case { text-transform: none; }

/* Text-Dekoration */
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }
```

### Anwendungsbeispiel:

```html
<h1 class="text-center font-bold uppercase">
  Zentrierte, fette Überschrift in Großbuchstaben
</h1>
```

## Farbsystem Utilities

```css
/* Textfarben */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }
.text-info { color: var(--color-info); }

/* Hintergrundfarben */
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-success { background-color: var(--color-success); }
.bg-warning { background-color: var(--color-warning); }
.bg-error { background-color: var(--color-error); }
.bg-info { background-color: var(--color-info); }

/* Rahmenfarben */
.border-primary { border-color: var(--color-primary); }
.border-secondary { border-color: var(--color-secondary); }
.border-success { border-color: var(--color-success); }
.border-warning { border-color: var(--color-warning); }
.border-error { border-color: var(--color-error); }
.border-info { border-color: var(--color-info); }
```

### Anwendungsbeispiel:

```html
<div class="bg-success-light text-success p-3 border border-success">
  Erfolgsbox mit heller Hintergrundfarbe, passender Textfarbe und Rahmen
</div>
```

## Responsive Utilities

Alle Utilities können mit Breakpoint-Präfixen verwendet werden:

- `sm:` für Bildschirme ≥ 640px
- `md:` für Bildschirme ≥ 768px
- `lg:` für Bildschirme ≥ 1024px
- `xl:` für Bildschirme ≥ 1280px
- `2xl:` für Bildschirme ≥ 1536px

```html
<div class="hidden md:block">
  Wird nur auf Tablets und größeren Bildschirmen angezeigt
</div>

<div class="flex-col md:flex-row">
  Vertikal auf mobilen Geräten, horizontal auf größeren Bildschirmen
</div>
```

## Best Practices

- **Kombination von Utilities**: Kombinieren Sie mehrere Utility-Klassen für komplexe Styles
- **Responsive Design**: Verwenden Sie Breakpoint-Präfixe für adaptives Layout
- **Konsistenz**: Halten Sie sich an die vordefinierten Werte der Design Tokens
- **Komponentenextraktion**: Extrahieren Sie häufig verwendete Utility-Kombinationen in eigene Komponenten
- **Modularer Import**: Importieren Sie nur die benötigten Utility-Module für bessere Performance
``` 