---
title: icon-system
category: Guide
---

# icon-system

the icon-system the Casoon UI Library bietet a umfassende Losung for the Integration and Usage from icons in Webanwendungen through a strukturierte Sammlung verschiedener icon-Sets.

## Structure des icon-Systems

the icons sind Teil des Layer Systems and become under dem `icons`-Layer definiert:

```css
@layer reset,
       tokens,
       ...
       utilities,
       smooth-scroll,
       accessibility,
       icons,           /* icon-system */
       animations,
       effects,
       themes;
```

the icons become in the `icons.css` file organisiert:

```css
/**
 * icons CSS
 *
 * Zentrale file zur Organisation and Einbindung aller icon-Sets.
 */

/* icon-Base */
@import url('./icons/base.css');

/* icon-Sets */
@import url('./icons/bootstrap.css');
@import url('./icons/feather.css');
@import url('./icons/fontawesome.css');
@import url('./icons/heroicons.css');
@import url('./icons/lucide.css');
@import url('./icons/mdi.css');
@import url('./icons/phosphor.css');
@import url('./icons/remix.css');
@import url('./icons/tabler.css');
```

## Verfugbare icon-Sets

the Casoon UI Library integriert several populare icon-Bibliotheken:

| icon-Set | Description | Prafix |
|----------|--------------|--------|
| Feather | Einfache, klare icons | `feather-` |
| Heroicons | Moderne icons im Apple-Style | `heroicon-` |
| Phosphor | Flexible, konsistente icons | `phosphor-` |
| Bootstrap | icons im Bootstrap-Style | `bs-` |
| Remix | Vielseitige Open-Source icons | `remix-` |
| MDI (Material) | Google Material design icons | `mdi-` |
| Font Awesome | Beliebte icon-Sammlung | `fa-` |
| Lucide | Fortfuhrung the Feather icons | `lucide-` |
| Tabler | over 3000 pixelperfekte icons | `tabler-` |

## icon-Usage in eigenen Projekten

Um icons in Ihrem Projekt to use:

### 1. Vollstandige Einbindung aller icon-Sets

import them the core.css, the automatisch all icon-Sets ladt:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selektive Einbindung einzelner icon-Sets

You can also only ausgewahlte icon-Sets import:

```css
/* Base-Layer system import */
@import "@casoon/ui-lib/layers.css";

/* icon-Base import */
@import "@casoon/ui-lib/icons/base.css";

/* only benotigte icon-Sets import */
@import "@casoon/ui-lib/icons/feather.css";
@import "@casoon/ui-lib/icons/heroicons.css";
```

## icon-Usage

### Standardmethode with icon-classes

the icon-system verwendet einheitliche Klassennamen for all icon-Sets with dem entsprechenden Prafix:

```html
<!-- Feather icons -->
<span class="feather-home"></span>
<span class="feather-settings"></span>
<span class="feather-user"></span>

<!-- Heroicons -->
<span class="heroicon-home"></span>
<span class="heroicon-cog"></span>
<span class="heroicon-user"></span>

<!-- Material design icons -->
<span class="mdi-home"></span>
<span class="mdi-cog"></span>
<span class="mdi-account"></span>
```

### icon-Sizes

You can the size the icons customize:

```html
<span class="feather-home icon--xs"></span> <!-- Extra small -->
<span class="feather-home icon--sm"></span> <!-- small -->
<span class="feather-home"></span> <!-- Standard (24px) -->
<span class="feather-home icon--md"></span> <!-- Mittel -->
<span class="feather-home icon--lg"></span> <!-- Gross -->
<span class="feather-home icon--xl"></span> <!-- Extra gross -->
```

### icon-Colors

icons erben by default the Textfarbe ihres Elternelements (`currentColor`):

```html
<div class="text-primary">
  <span class="feather-info"></span> <!-- icon in Primarfarbe -->
</div>
```

You can also direkte Farbklassen use:

```html
<span class="heroicon-check icon--success"></span> <!-- Erfolgsfarbe -->
<span class="heroicon-alert icon--warning"></span> <!-- Warnfarbe -->
<span class="heroicon-x-circle icon--error"></span> <!-- Fehlerfarbe -->
```

## icon-customizations

### icon-Rotation and Spiegelung

```html
<span class="mdi-arrow-right icon--rotate-90"></span> <!-- 90° gedreht -->
<span class="mdi-arrow-right icon--rotate-180"></span> <!-- 180° gedreht -->
<span class="mdi-arrow-right icon--rotate-270"></span> <!-- 270° gedreht -->
<span class="mdi-arrow-right icon--flip-h"></span> <!-- Horizontal gespiegelt -->
<span class="mdi-arrow-right icon--flip-v"></span> <!-- Vertikal gespiegelt -->
```

### icon-animations

```html
<span class="feather-refresh icon--spin"></span> <!-- Rotierendes icon -->
<span class="feather-alert-circle icon--pulse"></span> <!-- Pulsierendes icon -->
<span class="feather-arrow-down icon--bounce"></span> <!-- Hupfendes icon -->
```

## Accessibility

for bessere Accessibility should icons, the funktionale Bedeutung have, entsprechende Beschreibungen enthalten:

```html
<button class="btn btn--icon" aria-label="delete">
  <span class="feather-trash" aria-hidden="true"></span>
</button>
```

at icons with begleitendem Text:

```html
<button class="btn">
  <span class="feather-save" aria-hidden="true"></span>
  <span>save</span>
</button>
```

## own icons integrate

You can own icons create and in the Layer system integrieren:

```css
/* own CSS-file */
@import "@casoon/ui-lib/core.css";

/* own icons zum icons-Layer add */
@layer icons {
  .custom-icon-home {
    background-image: url('path/to/home.svg');
    /* additional Styles */
  }

  .custom-icon-settings {
    background-image: url('path/to/settings.svg');
    /* additional Styles */
  }
}
```

## Best Practices

- **Wahlen them konsistente icons** - use them icons aus demselben Set for a einheitliches Erscheinungsbild
- **Semantische icons use** - Wahlen them icons, the intuitiv for ihre Function sind
- **Accessibility note** - Fugen them aria-label for funktionale icons hinzu
- **Sizeskonsistenz gewahrleisten** - Halten them Icongrossen within from Funktionsgruppen konsistent
- **Colors sinnvoll einsetzen** - use them Farbakzente sparsam and bedeutungsvoll
- **Text with icons combine** - at wichtigen Aktionen Text and icons zusammen use 
