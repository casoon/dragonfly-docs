# grid system

the grid system the Casoon UI Library bietet a leistungsstarke Moglichkeit, komplexe, responsive layouts to create.

## Importing Modules

**important:** the grid system ist im `layout.css` Layer enthalten, welches `core.css` as Abhangigkeit hat. ensure, that these in the richtigen Reihenfolge importiert become:

```css
/* Notwendige Abhangigkeit */
@import '@casoon/ui-lib/core.css';

/* layout-system, enthalt grid */
@import '@casoon/ui-lib/layout.css';
```

If you only the layout-Layer import without core.css, can some functions not korrekt funktionieren, da notwendige Definitionen for variables, Utility-classes and Grundstile fehlen wurden.

## grid with columns

You can the Anzahl the columns with the `grid-cols-*` Class define:

```html
<div class="grid grid-cols-3">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Verfugbare columns-classes:
- `grid-cols-1` until `grid-cols-12`: Definiert a feste Anzahl from columns
- `grid-cols-auto`: columns become automatisch basierend on dem content erstellt
- `grid-cols-none`: no vordefinierte Spaltenstruktur

## responsive Grids

the grid system ist vollstandig responsiv. You can for verschiedene Bildschirmgrossen unterschiedliche layouts define:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Verfugbare Breakpoints:
- `sm:`: small (>= 640px)
- `md:`: Mittel (>= 768px)
- `lg:`: Gross (>= 1024px)
- `xl:`: Extra gross (>= 1280px)
- `2xl:`: Extra extra gross (>= 1536px)

## Abstande between grid-Elementen

with `gap-*` classes can them den spacing between grid-Elementen define:

```html
<div class="grid grid-cols-3 gap-4">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Abstande can also unterschiedlich for horizontale and vertikale Richtungen definiert become:
- `gap-x-*`: Horizontaler spacing
- `gap-y-*`: Vertikaler spacing

```html
<div class="grid grid-cols-3 gap-x-4 gap-y-8">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

## alignment the grid-elements

### Horizontale alignment

```html
<div class="grid grid-cols-3 justify-items-start">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Optionen:
- `justify-items-start`: alignment am Anfang
- `justify-items-end`: alignment am Ende
- `justify-items-center`: Zentrierte alignment
- `justify-items-stretch`: Ausdehnung over the gesamte width (Standard)

### Vertikale alignment

```html
<div class="grid grid-cols-3 align-items-center">
  <div>element 1</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Optionen:
- `align-items-start`: alignment am Anfang
- `align-items-end`: alignment am Ende
- `align-items-center`: Zentrierte alignment
- `align-items-stretch`: Ausdehnung over the gesamte height (Standard)

## element-Platzierung

Einzelne elements can over several Zellen im grid platziert become:

```html
<div class="grid grid-cols-3">
  <div class="col-span-2">Nimmt 2 columns a</div>
  <div>element 2</div>
  <div>element 3</div>
</div>
```

Verfugbare classes:
- `col-span-1` until `col-span-12`: Definiert, how many columns the element einnimmt
- `col-start-1` until `col-start-13`: Definiert, in welcher column the element beginnt
- `col-end-1` until `col-end-13`: Definiert, in welcher column the element endet

Ahnlich funktioniert it for rows:
- `row-span-1` until `row-span-6`: Definiert, how many rows the element einnimmt
- `row-start-1` until `row-start-7`: Definiert, in welcher row the element beginnt
- `row-end-1` until `row-end-7`: Definiert, in welcher row the element endet

## Automatischer Zeilenumbruch

with `grid-flow-*` classes can them steuern, how elements im grid platziert become:

```html
<div class="grid grid-cols-3 grid-flow-row-dense">
  <div class="col-span-2">Nimmt 2 columns a</div>
  <div>element 2</div>
  <div>element 3</div>
  <div class="col-span-2">Nimmt 2 columns a</div>
</div>
```

Optionen:
- `grid-flow-row`: Zeilenweise Anordnung (Standard)
- `grid-flow-col`: Spaltenweise Anordnung
- `grid-flow-row-dense`: Zeilenweise Anordnung with dichterer Packung
- `grid-flow-col-dense`: Spaltenweise Anordnung with dichterer Packung

## containers-grid

for a vordefinierte grid-Structure with maximaler width and zentrierter alignment can them the containers-Class use:

```html
<div class="containers">
  <div class="grid grid-cols-3">
    <div>element 1</div>
    <div>element 2</div>
    <div>element 3</div>
  </div>
</div>
```

the containers passt seine width automatisch on verschiedene Bildschirmgrossen on:
- Standard: 100% width
- `sm`: maximale width from 640px
- `md`: maximale width from 768px
- `lg`: maximale width from 1024px
- `xl`: maximale width from 1280px
- `2xl`: maximale width from 1536px

## Best Practices

- **12-columns-system use**: use them the standardmassige 12-columns-system for maximale Flexibility at the Gestaltung from layouts.
- **Verschachtelte Grids for komplexe layouts**: use them verschachtelte Grids, um komplexe UI-Strukturen to create.
- **grid-areas benennen**: use them grid-Bereichsnamen for komplexe layouts, um the Lesbarkeit and Maintainability to verbessern.
- **Auto-Fill and Auto-Fit for responsive Galerien**: use them `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` for dynamische, responsive Galerien.
- **Gap-Property use**: use them the `gap`-Property for konsistente Abstande between grid-Elementen.
- **Minmax for flexible Zellgrossen**: use them the `minmax()`-Function, um minimale and maximale Zellgrossen festzulegen.
- **grid with flexbox combine**: use them grid for the gesamte Seitenlayout and flexbox for Components.
- **responsive grid-layouts**: Passen them Ihre grid-Structure on verschiedene Bildschirmgrossen with breakpoint-classes on.
- **Implizite Grids for dynamischen content**: use them `grid-auto-rows` and `grid-auto-columns` for contents with unbekannter Anzahl from Elementen.

## Examples

### Einfaches responsives layout

```html
<div class="containers">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <header class="col-span-full">
      <h1>Meine Webseite</h1>
    </header>
    <aside class="md:col-span-1">
      Seitenleiste
    </aside>
    <main class="md:col-span-2">
      Hauptinhalt
    </main>
    <footer class="col-span-full">
      footer
    </footer>
  </div>
</div>
```

### Komplexes grid-layout

```html
<div class="containers">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-8">Hauptinhalt</div>
    <div class="col-span-12 lg:col-span-4">Seitenleiste</div>
    
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">box 1</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">box 2</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">box 3</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">box 4</div>
  </div>
</div>
```

## Integration with anderen Components

the grid system lasst oneself nahtlos with anderen Components the Casoon UI Library combine:

```html
<div class="containers">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card">
      <div class="card__header">Card 1</div>
      <div class="card__body">content the Card 1</div>
    </div>
    <div class="card">
      <div class="card__header">Card 2</div>
      <div class="card__body">content the Card 2</div>
    </div>
    <div class="card">
      <div class="card__header">Card 3</div>
      <div class="card__body">content the Card 3</div>
    </div>
  </div>
</div>
```

## CSS Variables

the grid system verwendet folgende CSS Variables, the them customize can:

```css
:root {
  --grid-columns: 12;
  --grid-gap: 1rem;
  --containers-padding: 1rem;
  --containers-max-width-sm: 640px;
  --containers-max-width-md: 768px;
  --containers-max-width-lg: 1024px;
  --containers-max-width-xl: 1280px;
  --containers-max-width-2xl: 1536px;
}
``` 