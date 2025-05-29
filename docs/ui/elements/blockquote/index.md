---
title: Blockquote element
outline: deep
---


# Blockquote

the Blockquote-element dient zur display from Zitaten or hervorgehobenen Textabschnitten. it ist a wichtiges typografisches element, the Zitate visuell vom Haupttext absetzt.

## Installation

the Blockquote-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Typography-Components */
@import '@casoon/ui-lib/typography.css';
```

## Basic Usage

```html
<blockquote>
  Dies ist a Zitat or a hervorgehobener Textabschnitt.
</blockquote>
```

<div class="example-wrappers">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    Dies ist a Zitat or a hervorgehobener Textabschnitt.
  </blockquote>
</div>

## Variants

### Standard-Blockquote

the einfachste Form des Blockquote-Elements with linkem Randbalken.

```html
<blockquote>
  design ist not only, how it aussieht and oneself anfuhlt. design ist, how it funktioniert.
</blockquote>
```

<div class="example-wrappers">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    design ist not only, how it aussieht and oneself anfuhlt. design ist, how it funktioniert.
  </blockquote>
</div>

### with Quellenangabe

Fuge a Quellenangabe with dem `<cite>`-element hinzu.

```html
<blockquote>
  design ist not only, how it aussieht and oneself anfuhlt. design ist, how it funktioniert.
  <cite>Steve Jobs</cite>
</blockquote>
```

<div class="example-wrappers">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    design ist not only, how it aussieht and oneself anfuhlt. design ist, how it funktioniert.
    <cite style="color: #6b7280; display: block; font-size: 0.875rem; font-style: normal; font-weight: 500; margin-top: 0.5rem;">Steve Jobs</cite>
  </blockquote>
</div>

### Pull-Quote

a hervorgehobenes Zitat with grosserer font and zentrierter alignment.

```html
<blockquote class="pull-quote">
  Kreativitat ist, errors to erlauben. Kunst ist to wissen, welche one behalten soll.
</blockquote>
```

<div class="example-wrappers">
  <blockquote style="color: #3b82f6; font-size: 1.5rem; font-style: italic; font-weight: 500; line-height: 1.25; margin: 2rem 0; padding: 1.5rem 2rem; position: relative; text-align: center;">
    Kreativitat ist, errors to erlauben. Kunst ist to wissen, welche one behalten soll.
  </blockquote>
</div>

### Im Content-area

within eines Content-Bereichs erhalt the Blockquote einen leicht anderen style.

```html
<div class="content">
  <p>Einleitender Text...</p>
  
  <blockquote>
    a Zitat within eines Content-Bereichs hat einen leicht grauen background and einen farbigen Randbalken.
  </blockquote>
  
  <p>Fortfuhrender Text...</p>
</div>
```

<div class="example-wrappers">
  <div style="color: #111827; font-size: 1rem; line-height: 1.6;">
    <p style="margin-bottom: 1em;">Einleitender Text...</p>
    
    <blockquote style="background-color: #f9fafb; border-left: 4px solid #3b82f6; font-style: italic; margin: 1.5em 0; padding: 1em 1.5em;">
      a Zitat within eines Content-Bereichs hat einen leicht grauen background and einen farbigen Randbalken.
    </blockquote>
    
    <p style="margin-bottom: 1em;">Fortfuhrender Text...</p>
  </div>
</div>

## Anpassung

the Blockquote-element kann over CSS Variables angepasst become:

```css
:root {
  /* Standard-Blockquote */
  --blockquote-border-color: var(--color-gray-200);
  --blockquote-border-width: 4px;
  --blockquote-color: var(--color-gray-700);
  --blockquote-font-size: var(--font-size-lg);
  --blockquote-padding-left: var(--space-4);
  --blockquote-margin-bottom: var(--space-6);
  
  /* Quellenangabe */
  --blockquote-cite-color: var(--color-gray-600);
  --blockquote-cite-font-size: var(--font-size-sm);
  --blockquote-cite-margin-top: var(--space-2);
  
  /* Pull-Quote */
  --pull-quote-color: var(--color-primary);
  --pull-quote-font-size: var(--font-size-2xl);
  --pull-quote-padding: var(--space-6) var(--space-8);
  --pull-quote-margin: var(--space-8) 0;
}
```

## Accessibility

- Verwende the `<blockquote>`-element for Zitate, not only for visuelle Gestaltung
- Achte on ausreichenden Kontrast between Text and background
- if moglich, gib with `<cite>` the Quelle des Zitats on
- Stelle sicher, that the Schriftgrosse and the line-height good lesbar sind

## Browser-Kompatibilitat

the Blockquote-element ist with allen modernen Browsern kompatibel.

| function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| CSS Styling | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 