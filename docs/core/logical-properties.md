---
title: Logical Properties
category: Core
---

# Logical Properties

Die Casoon UI Library verwendet CSS Logical Properties für ein sprachunabhängiges, flexibles Layoutsystem. Diese Eigenschaften ermöglichen es, Designs zu erstellen, die sich automatisch an verschiedene Schreibrichtungen und Textflussrichtungen anpassen, was die Internationalisierung (i18n) und Lokalisierung (l10n) Ihrer Anwendungen erheblich vereinfacht.

## Überblick

CSS Logical Properties definieren Layout-Eigenschaften basierend auf der Flussrichtung des Dokuments statt auf physischen Richtungen (links, rechts, oben, unten). Dies bietet folgende Vorteile:

- **Sprachunabhängigkeit**: Layouts funktionieren korrekt in verschiedenen Schreibsystemen (LTR und RTL)
- **Einfache Internationalisierung**: Keine speziellen Customizations für RTL-Sprachen notwendig
- **Zukunftssicherheit**: Bessere Unterstützung für vertikale Schreibsysteme
- **Reduzierte Codeduplizierung**: Kein Bedarf an separaten Stylesheets für verschiedene Schreibrichtungen

## Installation

Die Logical Properties sind Teil des Core-Systems der Casoon UI Library:

```css
@import '@casoon/ui-lib/core.css';
```

Sie können auch speziell die Logical Properties importieren:

```css
@import '@casoon/ui-lib/core/logical-properties.css';
```

## Grundkonzepte

### Flussrichtungen im Dokument

CSS Logical Properties basieren auf zwei Hauptachsen:

1. **Inline-Achse**: Die Richtung, in der Text fließt (horizontal in LTR/RTL, vertikal in vertikalen Schreibsystemen)
2. **Block-Achse**: Die Richtung, in der Blöcke aufeinander folgen (vertikal in LTR/RTL, horizontal in vertikalen Schreibsystemen)

### Mapping von physischen zu logischen Eigenschaften

| Physische Eigenschaft | Logische Eigenschaft (LTR) | Logische Eigenschaft (RTL) |
|-----------------------|----------------------------|----------------------------|
| margin-left           | margin-inline-start        | margin-inline-end          |
| margin-right          | margin-inline-end          | margin-inline-start        |
| padding-top           | padding-block-start        | padding-block-start        |
| border-bottom         | border-block-end           | border-block-end           |
| width                 | inline-size                | inline-size                |
| height                | block-size                 | block-size                 |

## CSS-Implementierung

Die Casoon UI Library bietet ein vollständiges Set an Utility-Klassen für logische Eigenschaften:

```css
/* Sizes auf der Inline-Achse (width in LTR/RTL) */
.inline-size-full { inline-size: 100%; }
.inline-size-half { inline-size: 50%; }
.inline-size-quarter { inline-size: 25%; }
.max-inline-size-full { max-inline-size: 100%; }
.min-inline-size-0 { min-inline-size: 0; }

/* Sizes auf der Block-Achse (height in LTR/RTL) */
.block-size-full { block-size: 100%; }
.block-size-screen { block-size: 100vh; }
.max-block-size-full { max-block-size: 100%; }
.min-block-size-0 { min-block-size: 0; }

/* Margins auf der Inline-Achse */
.margin-inline-auto { margin-inline: auto; }
.margin-inline-xs { margin-inline: var(--space-xs); }
.margin-inline-s { margin-inline: var(--space-s); }
.margin-inline-m { margin-inline: var(--space-m); }
.margin-inline-l { margin-inline: var(--space-l); }
.margin-inline-xl { margin-inline: var(--space-xl); }

.margin-inline-start-auto { margin-inline-start: auto; }
.margin-inline-end-auto { margin-inline-end: auto; }
.margin-inline-start-xs { margin-inline-start: var(--space-xs); }
.margin-inline-end-xs { margin-inline-end: var(--space-xs); }
/* ... weitere Sizes ... */

/* Padding auf der Block-Achse */
.padding-block-xs { padding-block: var(--space-xs); }
.padding-block-s { padding-block: var(--space-s); }
.padding-block-m { padding-block: var(--space-m); }
.padding-block-l { padding-block: var(--space-l); }
.padding-block-xl { padding-block: var(--space-xl); }

.padding-block-start-xs { padding-block-start: var(--space-xs); }
.padding-block-end-xs { padding-block-end: var(--space-xs); }
/* ... weitere Sizes ... */

/* Borders auf den logischen Achsen */
.border-inline { border-inline: 1px solid var(--color-border); }
.border-block { border-block: 1px solid var(--color-border); }
.border-inline-start { border-inline-start: 1px solid var(--color-border); }
.border-inline-end { border-inline-end: 1px solid var(--color-border); }
.border-block-start { border-block-start: 1px solid var(--color-border); }
.border-block-end { border-block-end: 1px solid var(--color-border); }

/* Abgerundete Ecken mit logischen Bezeichnungen */
.rounded-start-start { border-start-start-radius: var(--radius-m); }
.rounded-start-end { border-start-end-radius: var(--radius-m); }
.rounded-end-start { border-end-start-radius: var(--radius-m); }
.rounded-end-end { border-end-end-radius: var(--radius-m); }
```

## Usagesbeispiele

### Grundlegendes Layout mit logischen Eigenschaften

```html
<div class="container">
  <aside class="sidebar margin-inline-end-l padding-inline-m">
    Seitenleiste
  </aside>
  <main class="content padding-inline-m">
    Hauptinhalt
  </main>
</div>

<style>
  .container {
    display: flex;
    max-inline-size: 1200px;
    margin-inline: auto;
  }
  
  .sidebar {
    inline-size: 250px;
    border-inline-end: 1px solid var(--color-border);
  }
  
  .content {
    flex: 1;
  }
</style>
```

Dieses Layout wird korrekt angezeigt, unabhängig davon, ob die Seite in einer LTR- oder RTL-Sprache dargestellt wird.

### Text-Ausrichtung mit logischen Werten

```css
.text-start { text-align: start; }
.text-end { text-align: end; }

.float-start { float: inline-start; }
.float-end { float: inline-end; }
```

### Positionierung mit logischen Werten

```css
.position-inline-start-0 { inset-inline-start: 0; }
.position-inline-end-0 { inset-inline-end: 0; }
.position-block-start-0 { inset-block-start: 0; }
.position-block-end-0 { inset-block-end: 0; }
```

## Komplexere Examples

### Cardnkomponente mit logischen Eigenschaften

```html
<div class="card">
  <div class="card-header border-block-end">
    <h3 class="title">Cardntitel</h3>
  </div>
  <div class="card-body">
    <p class="text-start">Dieser Text ist am Anfang der Zeile ausgerichtet.</p>
    <p class="text-end">Dieser Text ist am Ende der Zeile ausgerichtet.</p>
  </div>
  <div class="card-footer border-block-start">
    <button class="button margin-inline-end-s">Abbrechen</button>
    <button class="button button-primary">Bestätigen</button>
  </div>
</div>

<style>
  .card {
    border-radius: var(--radius-m);
    border: 1px solid var(--color-border);
    max-inline-size: 400px;
  }
  
  .card-header,
  .card-footer {
    padding-block: var(--space-s);
    padding-inline: var(--space-m);
  }
  
  .card-body {
    padding-block: var(--space-m);
    padding-inline: var(--space-m);
  }
  
  .title {
    margin-block: 0;
  }
  
  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
</style>
```

### Form mit logischen Eigenschaften

```html
<form class="form">
  <div class="form-group">
    <label class="label margin-inline-end-s" for="name">Name:</label>
    <input class="input" id="name" type="text">
  </div>
  
  <div class="form-group">
    <label class="label margin-inline-end-s" for="email">E-Mail:</label>
    <input class="input" id="email" type="email">
  </div>
  
  <div class="form-actions margin-block-start-l">
    <button type="submit" class="button button-primary margin-inline-start-auto">Absenden</button>
  </div>
</form>

<style>
  .form {
    max-inline-size: 500px;
    margin-inline: auto;
    padding-block: var(--space-l);
    padding-inline: var(--space-m);
  }
  
  .form-group {
    display: flex;
    align-items: center;
    margin-block-end: var(--space-m);
  }
  
  .label {
    inline-size: 100px;
    text-align: end;
  }
  
  .input {
    flex: 1;
  }
  
  .form-actions {
    display: flex;
  }
</style>
```

## Integration mit dem Writing Mode

Logical Properties arbeiten nahtlos mit verschiedenen Schreibmodi zusammen:

```css
/* Horizontale Schreibrichtung (Standard) */
.horizontal {
  writing-mode: horizontal-tb;
}

/* Vertikale Schreibrichtung (wie in traditionellem Japanisch) */
.vertical-rl {
  writing-mode: vertical-rl;
}

/* Vertikale Schreibrichtung (wie in traditionellem Mongolisch) */
.vertical-lr {
  writing-mode: vertical-lr;
}
```

Mit logischen Eigenschaften funktioniert Ihr Layout in allen Schreibmodi ohne Änderungen:

```css
.container {
  padding-inline: 1rem;  /* Seitenabstände in der Textflussrichtung */
  padding-block: 1.5rem; /* Abstände senkrecht zum Textfluss */
  border-block-start: 2px solid blue; /* Obere Grenze im horizontalen Modus, 
                                         linke Grenze im vertikalen Modus */
}
```

## Herausforderungen und Lösungen

### Herausforderung: Gemischte RTL und LTR Inhalte

Bei gemischten Inhalten in verschiedenen Schreibrichtungen verwenden Sie das `dir`-Attribut für einzelne Elemente:

```html
<div dir="ltr">
  Englischer Text
  <span dir="rtl">نص عربي (Arabischer Text)</span>
</div>
```

### Herausforderung: Browser-Kompatibilität

Obwohl moderne Browser gut unterstützt werden, gibt es einige Einschränkungen bei älteren Browsern. Die Casoon UI Library bietet Fallbacks:

```css
/* Fallback und logische Eigenschaft */
.element {
  margin-left: 1rem;       /* Fallback für ältere Browser */
  margin-inline-start: 1rem; /* Moderne Browser verwenden diese */
}
```

## CSS Variables für logische Eigenschaften

Die Casoon UI Library definiert CSS Variables für häufig verwendete logische Abstände:

```css
:root {
  /* Standardabstände */
  --space-inline-xs: 0.25rem;
  --space-inline-s: 0.5rem;
  --space-inline-m: 1rem;
  --space-inline-l: 1.5rem;
  --space-inline-xl: 2rem;
  
  --space-block-xs: 0.25rem;
  --space-block-s: 0.5rem;
  --space-block-m: 1rem;
  --space-block-l: 1.5rem;
  --space-block-xl: 2rem;
  
  /* Containergrößen */
  --container-inline-size-s: 600px;
  --container-inline-size-m: 800px;
  --container-inline-size-l: 1000px;
  --container-inline-size-xl: 1200px;
}
```

## Browser-Kompatibilität

Logical Properties werden von allen modernen Browsern unterstützt:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Basic Logical Properties | 69+ | 41+ | 12.1+ | 79+ | Nein |
| Border Radius Logical | 89+ | 66+ | 15+ | 89+ | Nein |
| Float Logical Values | 99+ | 55+ | 15+ | 99+ | Nein |
| Inset Properties | 87+ | 63+ | 14.1+ | 87+ | Nein |

Für ältere Browser stellt die Casoon UI Library Fallbacks bereit, die physische Eigenschaften verwenden.

## Best Practices

1. **Konsistente Usage**: Verwenden Sie durchgehend logische Eigenschaften, mischen Sie nicht physische und logische Eigenschaften.

2. **Fallbacks bereitstellen**: Fügen Sie Fallbacks für Browser hinzu, die logische Eigenschaften nicht unterstützen.

3. **Dokumentrichtung festlegen**: Stellen Sie sicher, dass das `dir`-Attribut im HTML-Tag korrekt gesetzt ist:

```html
<html dir="rtl" lang="ar">
  <!-- RTL-Dokument, zum Example für Arabisch -->
</html>
```

4. **Gemischte Inhalte beachten**: Verwenden Sie das `dir`-Attribut für einzelne Elemente, die in einer anderen Richtung als das Hauptdokument fließen.

5. **Flexbox und Grid mit logischen Werten verwenden**:

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Die Richtung entspricht der Inline-Achse */
  justify-content: space-between; /* Ausrichtung auf der Inline-Achse */
  align-items: start; /* Ausrichtung auf der Block-Achse */
}
```

## Zusammenfassung

Die Usage von CSS Logical Properties in der Casoon UI Library bietet ein robustes, sprachunabhängiges Layout-System, das Ihre Anwendung für internationale Nutzung vorbereitet. Durch den Einsatz dieser Eigenschaften wird die Wartung vereinfacht, der Code reduziert und die User-friendliness für ein globales Publikum verbessert.

Die konsistente Usage von logischen Eigenschaften ermöglicht es Ihnen, eine einzige Codebasis zu pflegen, die nahtlos in verschiedenen Sprachen und Schreibrichtungen funktioniert, was die Internationalisierung Ihrer Anwendung erheblich vereinfacht. 