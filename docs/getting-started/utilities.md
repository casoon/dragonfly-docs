# Utilities

Die Utilities sind eine Sammlung von Hilfsklassen für schnelles Styling in der Casoon UI Library.

## Spacing

### Margin

```html
<div class="m-0">Kein Margin</div>
<div class="m-1">Kleiner Margin</div>
<div class="m-2">Normaler Margin</div>
<div class="m-3">Großer Margin</div>
<div class="m-4">Extra großer Margin</div>

<div class="mt-2">Margin Top</div>
<div class="mr-2">Margin Right</div>
<div class="mb-2">Margin Bottom</div>
<div class="ml-2">Margin Left</div>
```

### Padding

```html
<div class="p-0">Kein Padding</div>
<div class="p-1">Kleines Padding</div>
<div class="p-2">Normales Padding</div>
<div class="p-3">Großes Padding</div>
<div class="p-4">Extra großes Padding</div>

<div class="pt-2">Padding Top</div>
<div class="pr-2">Padding Right</div>
<div class="pb-2">Padding Bottom</div>
<div class="pl-2">Padding Left</div>
```

## Display

```html
<div class="d-none">Versteckt</div>
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-Block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>
```

## Position

```html
<div class="position-static">Static</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>
```

## Flexbox

### Direction

```html
<div class="flex-row">Row</div>
<div class="flex-row-reverse">Row Reverse</div>
<div class="flex-column">Column</div>
<div class="flex-column-reverse">Column Reverse</div>
```

### Justify Content

```html
<div class="justify-content-start">Start</div>
<div class="justify-content-end">End</div>
<div class="justify-content-center">Center</div>
<div class="justify-content-between">Between</div>
<div class="justify-content-around">Around</div>
```

### Align Items

```html
<div class="align-items-start">Start</div>
<div class="align-items-end">End</div>
<div class="align-items-center">Center</div>
<div class="align-items-baseline">Baseline</div>
<div class="align-items-stretch">Stretch</div>
```

## Grid

### Columns

```html
<div class="grid">
  <div class="col-1">1 Spalte</div>
  <div class="col-2">2 Spalten</div>
  <div class="col-3">3 Spalten</div>
  <div class="col-4">4 Spalten</div>
  <div class="col-5">5 Spalten</div>
  <div class="col-6">6 Spalten</div>
  <div class="col-7">7 Spalten</div>
  <div class="col-8">8 Spalten</div>
  <div class="col-9">9 Spalten</div>
  <div class="col-10">10 Spalten</div>
  <div class="col-11">11 Spalten</div>
  <div class="col-12">12 Spalten</div>
</div>
```

### Gaps

```html
<div class="grid gap-0">Kein Gap</div>
<div class="grid gap-1">Kleiner Gap</div>
<div class="grid gap-2">Normaler Gap</div>
<div class="grid gap-3">Großer Gap</div>
<div class="grid gap-4">Extra großer Gap</div>
```

## Typography

### Text Alignment

```html
<div class="text-left">Links</div>
<div class="text-center">Zentriert</div>
<div class="text-right">Rechts</div>
<div class="text-justify">Blocksatz</div>
```

### Font Weight

```html
<div class="font-weight-light">Light</div>
<div class="font-weight-normal">Normal</div>
<div class="font-weight-bold">Bold</div>
```

### Text Transform

```html
<div class="text-lowercase">Kleinbuchstaben</div>
<div class="text-uppercase">Großbuchstaben</div>
<div class="text-capitalize">Erster Buchstabe Groß</div>
```

## CSS Variablen

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 1rem;
  --spacing-4: 1.5rem;
  
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Abstände an mobile Geräte an

### Performance

- Minimieren Sie CSS
- Vermeiden Sie zu viele Utility-Klassen
- Optimieren Sie die Ladezeit
``` 