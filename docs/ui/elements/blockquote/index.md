---
title: Blockquote Element
outline: deep
---


# Blockquote

Das Blockquote-Element dient zur Darstellung von Zitaten oder hervorgehobenen Textabschnitten. Es ist ein wichtiges typografisches Element, das Zitate visuell vom Haupttext absetzt.

## Installation

Das Blockquote-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Typografie-Komponenten */
@import '@casoon/ui-lib/typography.css';
```

## Grundlegende Verwendung

```html
<blockquote>
  Dies ist ein Zitat oder ein hervorgehobener Textabschnitt.
</blockquote>
```

<div class="example-wrapper">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    Dies ist ein Zitat oder ein hervorgehobener Textabschnitt.
  </blockquote>
</div>

## Varianten

### Standard-Blockquote

Die einfachste Form des Blockquote-Elements mit linkem Randbalken.

```html
<blockquote>
  Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert.
</blockquote>
```

<div class="example-wrapper">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert.
  </blockquote>
</div>

### Mit Quellenangabe

Füge eine Quellenangabe mit dem `<cite>`-Element hinzu.

```html
<blockquote>
  Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert.
  <cite>Steve Jobs</cite>
</blockquote>
```

<div class="example-wrapper">
  <blockquote style="border-left: 4px solid #e5e7eb; color: #4b5563; font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem; padding-left: 1rem;">
    Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert.
    <cite style="color: #6b7280; display: block; font-size: 0.875rem; font-style: normal; font-weight: 500; margin-top: 0.5rem;">Steve Jobs</cite>
  </blockquote>
</div>

### Pull-Quote

Ein hervorgehobenes Zitat mit größerer Schrift und zentrierter Ausrichtung.

```html
<blockquote class="pull-quote">
  Kreativität ist, Fehler zu erlauben. Kunst ist zu wissen, welche man behalten soll.
</blockquote>
```

<div class="example-wrapper">
  <blockquote style="color: #3b82f6; font-size: 1.5rem; font-style: italic; font-weight: 500; line-height: 1.25; margin: 2rem 0; padding: 1.5rem 2rem; position: relative; text-align: center;">
    Kreativität ist, Fehler zu erlauben. Kunst ist zu wissen, welche man behalten soll.
  </blockquote>
</div>

### Im Content-Bereich

Innerhalb eines Content-Bereichs erhält das Blockquote einen leicht anderen Stil.

```html
<div class="content">
  <p>Einleitender Text...</p>
  
  <blockquote>
    Ein Zitat innerhalb eines Content-Bereichs hat einen leicht grauen Hintergrund und einen farbigen Randbalken.
  </blockquote>
  
  <p>Fortführender Text...</p>
</div>
```

<div class="example-wrapper">
  <div style="color: #111827; font-size: 1rem; line-height: 1.6;">
    <p style="margin-bottom: 1em;">Einleitender Text...</p>
    
    <blockquote style="background-color: #f9fafb; border-left: 4px solid #3b82f6; font-style: italic; margin: 1.5em 0; padding: 1em 1.5em;">
      Ein Zitat innerhalb eines Content-Bereichs hat einen leicht grauen Hintergrund und einen farbigen Randbalken.
    </blockquote>
    
    <p style="margin-bottom: 1em;">Fortführender Text...</p>
  </div>
</div>

## Anpassung

Das Blockquote-Element kann über CSS-Variablen angepasst werden:

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

## Barrierefreiheit

- Verwende das `<blockquote>`-Element für Zitate, nicht nur für visuelle Gestaltung
- Achte auf ausreichenden Kontrast zwischen Text und Hintergrund
- Wenn möglich, gib mit `<cite>` die Quelle des Zitats an
- Stelle sicher, dass die Schriftgröße und der Zeilenabstand gut lesbar sind

## Browser-Kompatibilität

Das Blockquote-Element ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| CSS Styling | ✅ | ✅ | ✅ | ✅ |
| CSS-Variablen | 49+ | 31+ | 9.1+ | 15+ | 