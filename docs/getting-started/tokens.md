---
title: Design Tokens
category: Getting Started
---

# Design Tokens

Design Tokens sind die grundlegenden Bausteine des Casoon UI Design Systems. Sie definieren visuelle Eigenschaften wie Farben, Abstände, Schriftgrößen und mehr. Diese Tokens sind als CSS-Variablen implementiert und ermöglichen eine konsistente Gestaltung über alle Anwendungen hinweg.

## CSS-Import

Um alle Design Tokens der Casoon UI Library zu nutzen, importieren Sie einfach die `core.css` Datei:

```css
@import "@casoon/ui-lib/core.css";
```

Dadurch wird automatisch das Layer-System geladen, welches den `tokens`-Layer enthält.

## Layer-Struktur

Die Design Tokens sind Teil des zentralen Layer-Systems und werden unter dem `tokens`-Layer definiert. Die Reihenfolge der Layer bestimmt die CSS-Spezifität:

```css
@layer reset,               /* Browser-Reset */
       tokens,              /* Design-Tokens, Variablen */
       core,                /* Kernfunktionalitäten */
       ...
```

## Farben

Die Farbpalette besteht aus primären, sekundären, Akzent- und Funktionsfarben sowie einer umfassenden Graupalette.

### Primäre Farbpalette

```css
:root {
  --color-primary: var(--color-blue-600);
  --color-primary-light: var(--color-blue-500);
  --color-primary-dark: var(--color-blue-700);

  --color-secondary: var(--color-gray-600);
  --color-secondary-light: var(--color-gray-500);
  --color-secondary-dark: var(--color-gray-700);

  --color-accent: var(--color-orange-500);
  --color-accent-light: var(--color-orange-400);
  --color-accent-dark: var(--color-orange-600);
}
```

### Funktionale Farben

```css
:root {
  --color-success: var(--color-green-600);
  --color-success-light: var(--color-green-500);
  --color-success-dark: var(--color-green-700);

  --color-warning: var(--color-yellow-500);
  --color-warning-light: var(--color-yellow-400);
  --color-warning-dark: var(--color-yellow-600);

  --color-error: var(--color-red-600);
  --color-error-light: var(--color-red-500);
  --color-error-dark: var(--color-red-700);

  --color-info: var(--color-blue-600);
  --color-info-light: var(--color-blue-500);
  --color-info-dark: var(--color-blue-700);
}
```

### Graupalette

```css
:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
}
```

### Anwendungsbeispiel:

```html
<div class="bg-primary text-white">
  Element mit Primärfarbe als Hintergrund und weißem Text
</div>
<div class="bg-success-light text-success-dark">
  Erfolgsbereich mit hellem Hintergrund und dunkler Textfarbe
</div>
```

## Abstände (Spacing)

Das Spacing-System verwendet eine Skala, die auf einem Basiswert von 0.25rem aufbaut:

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.5rem;
  --spacing-6: 2rem;
  --spacing-8: 3rem;
  --spacing-10: 4rem;
  --spacing-12: 5rem;
  --spacing-16: 6rem;
  --spacing-20: 8rem;
  --spacing-24: 10rem;
  --spacing-32: 12rem;
}
```

### Anwendungsbeispiel:

```html
<div class="p-4">Element mit Padding von 1rem (16px)</div>
<div class="m-2">Element mit Margin von 0.5rem (8px)</div>
<div class="gap-6">Grid mit Abstand von 2rem (32px) zwischen Elementen</div>
```

## Bildschirmgrößen (Breakpoints)

Die Breakpoints definieren Schwellenwerte für responsives Design:

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Schrift-Tokens

Basiswerte für die Typografie:

```css
:root {
  /* Schriftfamilien */
  --font-family-base: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Schriftgrößen */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
}
```

## Radius-Tokens

Werte für abgerundete Ecken:

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
}
```

### Anwendungsbeispiel:

```html
<div class="rounded-md">Element mit mittlerem Radius (0.25rem)</div>
<div class="rounded-lg">Element mit großem Radius (0.5rem)</div>
<div class="rounded-full">Vollständig abgerundetes Element (Kreis/Oval)</div>
```

## Schatten-Tokens

Vordefinierte Schatten für Tiefenwirkung:

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

### Anwendungsbeispiel:

```html
<div class="shadow-sm">Element mit leichtem Schatten</div>
<div class="shadow-md">Element mit mittlerem Schatten</div>
<div class="shadow-lg">Element mit starkem Schatten</div>
```

## Z-Index-Tokens

Z-Index-Werte zur Steuerung der Stapelreihenfolge:

```css
:root {
  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-fixed: 300;
  --z-index-modal-backdrop: 400;
  --z-index-modal: 500;
  --z-index-popover: 600;
  --z-index-tooltip: 700;
}
```

### Anwendungsbeispiel:

```html
<div class="z-10">Dropdown-Element mit z-index 100</div>
<div class="z-50">Modal-Element mit z-index 500</div>
```

## Animation-Tokens

Vordefinierte Animationszeiten und Easing-Funktionen:

```css
:root {
  --transition-duration-fast: 150ms;
  --transition-duration-normal: 300ms;
  --transition-duration-slow: 500ms;

  --transition-timing-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --transition-timing-ease-in: cubic-bezier(0.42, 0, 1, 1);
  --transition-timing-ease-out: cubic-bezier(0, 0, 0.58, 1);
  --transition-timing-ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
}
```

### Anwendungsbeispiel:

```html
<div class="transition-normal ease-in-out">
  Element mit normaler Übergangszeit und ease-in-out Timing
</div>
```

## Anpassung und Erweiterung von Tokens

Sie können die Design Tokens auch mit eigenen Werten überschreiben oder erweitern, indem Sie den entsprechenden Layer verwenden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigene Tokens zum Tokens-Layer hinzufügen */
@layer tokens {
  :root {
    --color-brand-primary: #c0ffee;
    --color-brand-secondary: #facade;
    --font-family-custom: 'Meine-Marken-Schrift', sans-serif;
  }
}
```

## Best Practices für Design Tokens

- **Verwenden Sie Design Tokens statt hartcodierter Werte** - Dies gewährleistet Konsistenz und vereinfacht Änderungen
- **Nutzen Sie semantische Token-Namen** - Verwenden Sie beschreibende Namen wie `--color-primary` statt `--blue-600`
- **Nutzen Sie die Vererbung von Tokens** - Definieren Sie Basis-Tokens und leiten Sie daraus spezifischere Tokens ab
- **Halten Sie Token-Dokumentation aktuell** - Sorgen Sie für eine aktuelle Referenz aller verfügbaren Tokens 
