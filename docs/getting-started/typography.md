---
title: Typografie
category: Getting Started
---

# Typografie-Styles

Die Typografie-Styles der Casoon UI Library bieten eine konsistente und skalierbare Textformatierung für moderne Webanwendungen. Diese Styles können unabhängig von Komponenten verwendet werden.

## Schriftfamilien

Die Casoon UI Library verwendet ein System von Schriftfamilien, die über CSS-Variablen definiert sind:

```css
:root {
  --font-family-base: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```

### Anwendungsbeispiel:

```html
<p class="font-base">Text mit Basis-Schriftart</p>
<h1 class="font-heading">Überschrift mit Heading-Schriftart</h1>
<pre class="font-mono">Code mit Monospace-Schriftart</pre>
```

## Schriftgrößen

Die Schriftgrößen folgen einer konsistenten Skala:

```css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;
  --font-size-7xl: 4.5rem;
  --font-size-8xl: 6rem;
  --font-size-9xl: 8rem;
}
```

### Anwendungsbeispiel:

```html
<p class="text-xs">Extra klein</p>
<p class="text-sm">Klein</p>
<p class="text-base">Basis</p>
<p class="text-lg">Groß</p>
<p class="text-xl">Extra groß</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
```

## Zeilenhöhe

Die Zeilenhöhen sind für verschiedene Textgrößen optimiert:

```css
:root {
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}
```

### Anwendungsbeispiel:

```html
<p class="leading-none">Zeilenhöhe 1</p>
<p class="leading-tight">Zeilenhöhe 1.25</p>
<p class="leading-snug">Zeilenhöhe 1.375</p>
<p class="leading-normal">Zeilenhöhe 1.5</p>
<p class="leading-relaxed">Zeilenhöhe 1.625</p>
<p class="leading-loose">Zeilenhöhe 2</p>
```

## Schriftgewicht

Die verschiedenen Schriftgewichte sind als CSS-Variablen definiert:

```css
:root {
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
```

### Anwendungsbeispiel:

```html
<p class="font-thin">Dünn</p>
<p class="font-extralight">Extra leicht</p>
<p class="font-light">Leicht</p>
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Halbfett</p>
<p class="font-bold">Fett</p>
<p class="font-extrabold">Extra fett</p>
<p class="font-black">Schwarz</p>
```

## Textausrichtung

Utility-Klassen für Textausrichtung:

```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
```

### Anwendungsbeispiel:

```html
<p class="text-left">Linksbündig</p>
<p class="text-center">Zentriert</p>
<p class="text-right">Rechtsbündig</p>
<p class="text-justify">Blocksatz</p>
```

## Textdekoration

Utility-Klassen für Textdekoration:

```css
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }
```

### Anwendungsbeispiel:

```html
<p class="underline">Unterstrichener Text</p>
<p class="line-through">Durchgestrichener Text</p>
<p class="no-underline">Text ohne Unterstrich</p>
```

## Textumwandlung

Utility-Klassen für Textumwandlung:

```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.normal-case { text-transform: none; }
```

### Anwendungsbeispiel:

```html
<p class="uppercase">Großbuchstaben</p>
<p class="lowercase">Kleinbuchstaben</p>
<p class="capitalize">Wortanfänge groß</p>
<p class="normal-case">Normale Schreibweise</p>
```

## Textfarben

Die Textfarben nutzen die Design-Token-Farbpalette:

```css
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }
.text-info { color: var(--color-info); }
```

### Anwendungsbeispiel:

```html
<p class="text-primary">Primäre Textfarbe</p>
<p class="text-secondary">Sekundäre Textfarbe</p>
<p class="text-success">Erfolgs-Textfarbe</p>
<p class="text-warning">Warnungs-Textfarbe</p>
<p class="text-error">Fehler-Textfarbe</p>
<p class="text-info">Info-Textfarbe</p>
```

## Responsive Typografie

Alle Typografie-Utilities können mit Breakpoint-Präfixen verwendet werden:

- `sm:` für Bildschirme ≥ 640px
- `md:` für Bildschirme ≥ 768px
- `lg:` für Bildschirme ≥ 1024px
- `xl:` für Bildschirme ≥ 1280px
- `2xl:` für Bildschirme ≥ 1536px

```html
<p class="text-base md:text-lg lg:text-xl">
  Responsive Textgröße - Basis auf Mobilgeräten, größer auf Tablets und noch größer auf Desktop
</p>
```

## Best Practices für Typografie

- **Konsistente Schriftgrößen** - Verwenden Sie die vordefinierten Größen aus der Skala
- **Optimale Lesbarkeit** - Nutzen Sie die vordefinierten Zeilenhöhen für verschiedene Textgrößen
- **Visuelle Hierarchie** - Setzen Sie Schriftgewichte gezielt ein, um wichtige Elemente hervorzuheben
- **Kombinierte Utilities** - Nutzen Sie Kombinationen von Typografie-Utilities für komplexe Formatierungen
- **Responsive Anpassung** - Verwenden Sie responsive Präfixe für optimale Lesbarkeit auf allen Geräten
- **Fokus auf wenige Schriftfamilien** - Beschränken Sie sich auf wenige, gut ausgewählte Schriftfamilien 