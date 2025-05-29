# tags

tags sind kompakte UI-elements, the verwendet become, um contents to kategorisieren, to filtern or to kennzeichnen. the `@casoon/ui-lib` bietet verschiedene tag-Variants for unterschiedliche Use Cases.

## Usage

tags become as einfache HTML-elements with CSS-classes implementiert:

```html
<span class="tag">Standard tag</span>
```

## Variants

### Sizes

tags sind in drei Sizes verfugbar:

- **small** (`.tag-sm`): Kompakte tags for platzsparende layouts
- **Standard**: Mittlere size (Standard)
- **Gross** (`.tag-lg`): Grossere tags for bessere visibility

```html
<!-- Kleines tag -->
<span class="tag tag-sm">small</span>

<!-- Standard tag -->
<span class="tag">Standard</span>

<!-- Grosses tag -->
<span class="tag tag-lg">Gross</span>
```

### Colors

tags unterstutzen verschiedene Farbvarianten:

- **Primary** (Standard): `.tag-primary`
- **Secondary**: `.tag-secondary`
- **Success**: `.tag-success`
- **Warning**: `.tag-warning`
- **Error**: `.tag-error`
- **info**: `.tag-info`

```html
<!-- Primary tag (Standard) -->
<span class="tag tag-primary">Primary</span>

<!-- Secondary tag -->
<span class="tag tag-secondary">Secondary</span>

<!-- Success tag -->
<span class="tag tag-success">Success</span>

<!-- Warning tag -->
<span class="tag tag-warning">Warning</span>

<!-- Error tag -->
<span class="tag tag-error">Error</span>

<!-- info tag -->
<span class="tag tag-info">info</span>
```

### Variants

#### Abgerundete tags

for weichere Ecken can abgerundete tags verwendet become:

```html
<span class="tag tag-rounded">Abgerundet</span>
```

#### Outline tags

tags with only Umriss for subtilere Display:

```html
<span class="tag tag-outline">Outline</span>
```

#### tags with icons

tags can with icons kombiniert become:

```html
<span class="tag">
  <i class="icon icon-star"></i>
  With icon
</span>
```

#### Entfernbare tags

tags, the vom user entfernt become can:

```html
<span class="tag tag-removable">
  Entfernbar
  <button class="tag-remove" aria-label="tag remove">×</button>
</span>
```

## Customization

the Display from tags kann mithilfe from CSS Variables angepasst become:

```css
.custom-tag {
  --tag-background: #6a0dad; /* Benutzerdefinierte Hintergrundfarbe */
  --tag-color: #ffffff; /* Benutzerdefinierte Textfarbe */
  --tag-border-radius: 12px; /* Benutzerdefinierte Abrundung */
  --tag-padding: 6px 12px; /* Benutzerdefinierter padding */
}
```

## Interaktive tags

tags can interaktiv gestaltet become, um as Filter or Auswahlmoglichkeiten to dienen:

```html
<div class="tag-group">
  <label class="tag tag-interactive">
    <input type="checkbox" hidden>
    <span class="tag-text">Option 1</span>
  </label>
  <label class="tag tag-interactive">
    <input type="checkbox" hidden>
    <span class="tag-text">Option 2</span>
  </label>
  <label class="tag tag-interactive">
    <input type="checkbox" hidden>
    <span class="tag-text">Option 3</span>
  </label>
</div>
```

## tag-Gruppen

several zusammengehorige tags can in Gruppen organisiert become:

```html
<div class="tag-group">
  <span class="tag">tag 1</span>
  <span class="tag">tag 2</span>
  <span class="tag">tag 3</span>
</div>
```

## Accessibility

for a optimale Accessibility:

- use them ausreichenden Farbkontrast between tag-background and Text
- ensure, that interaktive tags over the Tastatur bedienbar sind
- Fugen them geeignete aria-attributes hinzu, besonders for interaktive or entfernbare tags
- Vermeiden them the alleinige Usage from color zur Unterscheidung from Bedeutungen

```html
<!-- Barrierefreies interaktives tag -->
<label class="tag tag-interactive" role="checkbox" tabindex="0" aria-checked="false">
  <input type="checkbox" hidden>
  <span class="tag-text">Barrierefreies tag</span>
</label>

<!-- Barrierefreies entfernbares tag -->
<span class="tag tag-removable" role="listitem">
  Entfernbares tag
  <button class="tag-remove" aria-label="tag remove" tabindex="0">×</button>
</span>
```

## Browser-Kompatibilitat

the tag-Components sind with allen modernen Browsern kompatibel and use standardkonforme HTML- and CSS-properties.

## Verwandte Components

- [badge](/components/elements/badge.md) - for numerische or Status-Anzeigen
- [chip](/components/elements/chip.md) - for komplexere interaktive elements
- [button](/components/elements/button.md) - for primare Aktionen 