---
title: Icon-System
category: Guide
---

# Icon-System

Das Icon-System der Casoon UI Library bietet eine umfassende Lösung für die Integration und Verwendung von Icons in Webanwendungen durch eine strukturierte Sammlung verschiedener Icon-Sets.

## Struktur des Icon-Systems

Die Icons sind Teil des Layer-Systems und werden unter dem `icons`-Layer definiert:

```css
@layer reset,
       tokens,
       ...
       utilities,
       smooth-scroll,
       accessibility,
       icons,           /* Icon-System */
       animations,
       effects,
       themes;
```

Die Icons werden in der `icons.css` Datei organisiert:

```css
/**
 * Icons CSS
 *
 * Zentrale Datei zur Organisation und Einbindung aller Icon-Sets.
 */

/* Icon-Basis */
@import url('./icons/base.css');

/* Icon-Sets */
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

## Verfügbare Icon-Sets

Die Casoon UI Library integriert mehrere populäre Icon-Bibliotheken:

| Icon-Set | Beschreibung | Präfix |
|----------|--------------|--------|
| Feather | Einfache, klare Icons | `feather-` |
| Heroicons | Moderne Icons im Apple-Stil | `heroicon-` |
| Phosphor | Flexible, konsistente Icons | `phosphor-` |
| Bootstrap | Icons im Bootstrap-Stil | `bs-` |
| Remix | Vielseitige Open-Source Icons | `remix-` |
| MDI (Material) | Google Material Design Icons | `mdi-` |
| Font Awesome | Beliebte Icon-Sammlung | `fa-` |
| Lucide | Fortführung der Feather Icons | `lucide-` |
| Tabler | Über 3000 pixelperfekte Icons | `tabler-` |

## Icon-Verwendung in eigenen Projekten

Um Icons in Ihrem Projekt zu nutzen:

### 1. Vollständige Einbindung aller Icon-Sets

Importieren Sie die core.css, die automatisch alle Icon-Sets lädt:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selektive Einbindung einzelner Icon-Sets

Sie können auch nur ausgewählte Icon-Sets importieren:

```css
/* Basis-Layer-System importieren */
@import "@casoon/ui-lib/layers.css";

/* Icon-Basis importieren */
@import "@casoon/ui-lib/icons/base.css";

/* Nur benötigte Icon-Sets importieren */
@import "@casoon/ui-lib/icons/feather.css";
@import "@casoon/ui-lib/icons/heroicons.css";
```

## Icon-Verwendung

### Standardmethode mit Icon-Klassen

Das Icon-System verwendet einheitliche Klassennamen für alle Icon-Sets mit dem entsprechenden Präfix:

```html
<!-- Feather Icons -->
<span class="feather-home"></span>
<span class="feather-settings"></span>
<span class="feather-user"></span>

<!-- Heroicons -->
<span class="heroicon-home"></span>
<span class="heroicon-cog"></span>
<span class="heroicon-user"></span>

<!-- Material Design Icons -->
<span class="mdi-home"></span>
<span class="mdi-cog"></span>
<span class="mdi-account"></span>
```

### Icon-Größen

Sie können die Größe der Icons anpassen:

```html
<span class="feather-home icon--xs"></span> <!-- Extra klein -->
<span class="feather-home icon--sm"></span> <!-- Klein -->
<span class="feather-home"></span> <!-- Standard (24px) -->
<span class="feather-home icon--md"></span> <!-- Mittel -->
<span class="feather-home icon--lg"></span> <!-- Groß -->
<span class="feather-home icon--xl"></span> <!-- Extra groß -->
```

### Icon-Farben

Icons erben standardmäßig die Textfarbe ihres Elternelements (`currentColor`):

```html
<div class="text-primary">
  <span class="feather-info"></span> <!-- Icon in Primärfarbe -->
</div>
```

Sie können auch direkte Farbklassen verwenden:

```html
<span class="heroicon-check icon--success"></span> <!-- Erfolgsfarbe -->
<span class="heroicon-alert icon--warning"></span> <!-- Warnfarbe -->
<span class="heroicon-x-circle icon--error"></span> <!-- Fehlerfarbe -->
```

## Icon-Anpassungen

### Icon-Rotation und Spiegelung

```html
<span class="mdi-arrow-right icon--rotate-90"></span> <!-- 90° gedreht -->
<span class="mdi-arrow-right icon--rotate-180"></span> <!-- 180° gedreht -->
<span class="mdi-arrow-right icon--rotate-270"></span> <!-- 270° gedreht -->
<span class="mdi-arrow-right icon--flip-h"></span> <!-- Horizontal gespiegelt -->
<span class="mdi-arrow-right icon--flip-v"></span> <!-- Vertikal gespiegelt -->
```

### Icon-Animationen

```html
<span class="feather-refresh icon--spin"></span> <!-- Rotierendes Icon -->
<span class="feather-alert-circle icon--pulse"></span> <!-- Pulsierendes Icon -->
<span class="feather-arrow-down icon--bounce"></span> <!-- Hüpfendes Icon -->
```

## Barrierefreiheit

Für bessere Barrierefreiheit sollten Icons, die funktionale Bedeutung haben, entsprechende Beschreibungen enthalten:

```html
<button class="btn btn--icon" aria-label="Löschen">
  <span class="feather-trash" aria-hidden="true"></span>
</button>
```

Bei Icons mit begleitendem Text:

```html
<button class="btn">
  <span class="feather-save" aria-hidden="true"></span>
  <span>Speichern</span>
</button>
```

## Eigene Icons einbinden

Sie können eigene Icons erstellen und in das Layer-System integrieren:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigene Icons zum icons-Layer hinzufügen */
@layer icons {
  .custom-icon-home {
    background-image: url('path/to/home.svg');
    /* Weitere Stile */
  }

  .custom-icon-settings {
    background-image: url('path/to/settings.svg');
    /* Weitere Stile */
  }
}
```

## Best Practices

- **Wählen Sie konsistente Icons** - Verwenden Sie Icons aus demselben Set für ein einheitliches Erscheinungsbild
- **Semantische Icons nutzen** - Wählen Sie Icons, die intuitiv für ihre Funktion sind
- **Barrierefreiheit beachten** - Fügen Sie aria-label für funktionale Icons hinzu
- **Größenkonsistenz gewährleisten** - Halten Sie Icongrößen innerhalb von Funktionsgruppen konsistent
- **Farben sinnvoll einsetzen** - Verwenden Sie Farbakzente sparsam und bedeutungsvoll
- **Text mit Icons kombinieren** - Bei wichtigen Aktionen Text und Icons zusammen verwenden 
