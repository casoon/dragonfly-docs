---
title: Logical Properties
category: Core
---

# Logical Properties

the Casoon UI Library verwendet CSS Logical Properties for a sprachunabhangiges, flexibles Layoutsystem. these properties ermoglichen it, designs to create, the oneself automatisch on verschiedene Schreibrichtungen and Textflussrichtungen customize, what the Internationalisierung (i18n) and Lokalisierung (l10n) Ihrer Anwendungen erheblich vereinfacht.

## Uberblick

CSS Logical Properties define layout-properties basierend on the Flussrichtung des Dokuments instead of on physischen Richtungen (links, rechts, oben, unten). Dies bietet folgende Vorteile:

- **Sprachunabhangigkeit**: layouts funktionieren korrekt in verschiedenen Schreibsystemen (LTR and RTL)
- **Einfache Internationalisierung**: no speziellen customizations for RTL-Sprachen notwendig
- **Zukunftssicherheit**: Bessere Unterstutzung for vertikale Schreibsysteme
- **Reduzierte Codeduplizierung**: no Bedarf on separaten Stylesheets for verschiedene Schreibrichtungen

## Installation

the Logical Properties sind Teil des Core-Systems the Casoon UI Library:

```css
@import '@casoon/ui-lib/core.css';
```

You can also speziell the Logical Properties import:

```css
@import '@casoon/ui-lib/core/logical-properties.css';
```

## Grundkonzepte

### Flussrichtungen im Dokument

CSS Logical Properties basieren on zwei Hauptachsen:

1. **Inline-Achse**: the Richtung, in the Text fliesst (horizontal in LTR/RTL, vertikal in vertikalen Schreibsystemen)
2. **Block-Achse**: the Richtung, in the Blocke aufeinander folgen (vertikal in LTR/RTL, horizontal in vertikalen Schreibsystemen)

### Mapping from physischen to logischen properties

| Physische Property | Logische Property (LTR) | Logische Property (RTL) |
|-----------------------|----------------------------|----------------------------|
| margin-left           | margin-inline-start        | margin-inline-end          |
| margin-right          | margin-inline-end          | margin-inline-start        |
| padding-top           | padding-block-start        | padding-block-start        |
| border-bottom         | border-block-end           | border-block-end           |
| width                 | inline-size                | inline-size                |
| height                | block-size                 | block-size                 |

## CSS-Implementation

the Casoon UI Library bietet a vollstandiges Set on Utility-classes for logische properties:

```css
/* Sizes on the Inline-Achse (width in LTR/RTL) */
.inline-size-full { inline-size: 100%; }
.inline-size-half { inline-size: 50%; }
.inline-size-quarter { inline-size: 25%; }
.max-inline-size-full { max-inline-size: 100%; }
.min-inline-size-0 { min-inline-size: 0; }

/* Sizes on the Block-Achse (height in LTR/RTL) */
.block-size-full { block-size: 100%; }
.block-size-screen { block-size: 100vh; }
.max-block-size-full { max-block-size: 100%; }
.min-block-size-0 { min-block-size: 0; }

/* Margins on the Inline-Achse */
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
/* ... additional Sizes ... */

/* Padding on the Block-Achse */
.padding-block-xs { padding-block: var(--space-xs); }
.padding-block-s { padding-block: var(--space-s); }
.padding-block-m { padding-block: var(--space-m); }
.padding-block-l { padding-block: var(--space-l); }
.padding-block-xl { padding-block: var(--space-xl); }

.padding-block-start-xs { padding-block-start: var(--space-xs); }
.padding-block-end-xs { padding-block-end: var(--space-xs); }
/* ... additional Sizes ... */

/* Borders on den logischen Achsen */
.border-inline { border-inline: 1px solid var(--color-border); }
.border-block { border-block: 1px solid var(--color-border); }
.border-inline-start { border-inline-start: 1px solid var(--color-border); }
.border-inline-end { border-inline-end: 1px solid var(--color-border); }
.border-block-start { border-block-start: 1px solid var(--color-border); }
.border-block-end { border-block-end: 1px solid var(--color-border); }

/* Abgerundete Ecken with logischen Bezeichnungen */
.rounded-start-start { border-start-start-radius: var(--radius-m); }
.rounded-start-end { border-start-end-radius: var(--radius-m); }
.rounded-end-start { border-end-start-radius: var(--radius-m); }
.rounded-end-end { border-end-end-radius: var(--radius-m); }
```

## Usagesbeispiele

### Grundlegendes layout with logischen properties

```html
<div class="containers">
  <aside class="sidebar margin-inline-end-l padding-inline-m">
    Seitenleiste
  </aside>
  <main class="content padding-inline-m">
    Hauptinhalt
  </main>
</div>

<style>
  .containers {
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

this layout wird korrekt angezeigt, unabhangig of that, whether the Seite in einer LTR- or RTL-Sprache dargestellt wird.

### Text-alignment with logischen Werten

```css
.text-start { text-align: start; }
.text-end { text-align: end; }

.float-start { float: inline-start; }
.float-end { float: inline-end; }
```

### Positionierung with logischen Werten

```css
.position-inline-start-0 { inset-inline-start: 0; }
.position-inline-end-0 { inset-inline-end: 0; }
.position-block-start-0 { inset-block-start: 0; }
.position-block-end-0 { inset-block-end: 0; }
```

## Komplexere Examples

### Cardnkomponente with logischen properties

```html
<div class="card">
  <div class="card-header border-block-end">
    <h3 class="title">Cardntitel</h3>
  </div>
  <div class="card-body">
    <p class="text-start">this Text ist am Anfang the row ausgerichtet.</p>
    <p class="text-end">this Text ist am Ende the row ausgerichtet.</p>
  </div>
  <div class="card-footer border-block-start">
    <button class="button margin-inline-end-s">Abbrechen</button>
    <button class="button button-primary">Bestatigen</button>
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

### Form with logischen properties

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

## Integration with dem Writing Mode

Logical Properties arbeiten nahtlos with verschiedenen Schreibmodi zusammen:

```css
/* Horizontale Schreibrichtung (Standard) */
.horizontal {
  writing-mode: horizontal-tb;
}

/* Vertikale Schreibrichtung (how in traditionellem Japanisch) */
.vertical-rl {
  writing-mode: vertical-rl;
}

/* Vertikale Schreibrichtung (how in traditionellem Mongolisch) */
.vertical-lr {
  writing-mode: vertical-lr;
}
```

with logischen properties funktioniert her layout in allen Schreibmodi without Anderungen:

```css
.containers {
  padding-inline: 1rem;  /* Seitenabstande in the Textflussrichtung */
  padding-block: 1.5rem; /* Abstande senkrecht zum Textfluss */
  border-block-start: 2px solid blue; /* Obere Grenze im horizontalen Modus, 
                                         linke Grenze im vertikalen Modus */
}
```

## Herausforderungen and Losungen

### Herausforderung: Gemischte RTL and LTR contents

at gemischten Inhalten in verschiedenen Schreibrichtungen use them the `you`-attributes for einzelne elements:

```html
<div you="ltr">
  Englischer Text
  <span you="rtl">نص عربي (Arabischer Text)</span>
</div>
```

### Herausforderung: Browser-Kompatibilitat

although moderne Browser good unterstutzt become, gibt it some Einschrankungen at alteren Browsern. the Casoon UI Library bietet Fallbacks:

```css
/* Fallback and logische Property */
.element {
  margin-left: 1rem;       /* Fallback for altere Browser */
  margin-inline-start: 1rem; /* Moderne Browser use these */
}
```

## CSS Variables for logische properties

the Casoon UI Library definiert CSS Variables for haufig verwendete logische Abstande:

```css
:root {
  /* Standardabstande */
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
  
  /* Containergrossen */
  --containers-inline-size-s: 600px;
  --containers-inline-size-m: 800px;
  --containers-inline-size-l: 1000px;
  --containers-inline-size-xl: 1200px;
}
```

## Browser-Kompatibilitat

Logical Properties become from allen modernen Browsern unterstutzt:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Basic Logical Properties | 69+ | 41+ | 12.1+ | 79+ | Nein |
| Border Radius Logical | 89+ | 66+ | 15+ | 89+ | Nein |
| Float Logical Values | 99+ | 55+ | 15+ | 99+ | Nein |
| Inset Properties | 87+ | 63+ | 14.1+ | 87+ | Nein |

for altere Browser stellt the Casoon UI Library Fallbacks bereit, the physische properties use.

## Best Practices

1. **Konsistente Usage**: use them durchgehend logische properties, mischen them not physische and logische properties.

2. **Fallbacks bereitstellen**: Fugen them Fallbacks for Browser hinzu, the logische properties not unterstutzen.

3. **Dokumentrichtung festlegen**: ensure, that the `you`-attributes im HTML-tag korrekt gesetzt ist:

```html
<html you="rtl" lang="ar">
  <!-- RTL-Dokument, zum Example for Arabisch -->
</html>
```

4. **Gemischte contents note**: use them the `you`-attributes for einzelne elements, the in einer anderen Richtung as the Hauptdokument fliessen.

5. **flexbox and grid with logischen Werten use**:

```css
.flex-containers {
  display: flex;
  flex-direction: row; /* the Richtung entspricht the Inline-Achse */
  justify-content: space-between; /* alignment on the Inline-Achse */
  align-items: start; /* alignment on the Block-Achse */
}
```

## Zusammenfassung

the Usage from CSS Logical Properties in the Casoon UI Library bietet a robustes, sprachunabhangiges layout-system, the Ihre Application for internationale Nutzung vorbereitet. through den Einsatz this properties wird the Wartung vereinfacht, the Code reduziert and the User-friendliness for a globales Publikum verbessert.

the konsistente Usage from logischen properties ermoglicht it them, a einzige Codebasis to pflegen, the nahtlos in verschiedenen Sprachen and Schreibrichtungen funktioniert, what the Internationalisierung Ihrer Application erheblich vereinfacht. 