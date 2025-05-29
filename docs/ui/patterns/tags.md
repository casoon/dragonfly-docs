# Tags

Tags sind kompakte UI-Elemente, die verwendet werden, um Inhalte zu kategorisieren, zu filtern oder zu kennzeichnen. Die `@casoon/ui-lib` bietet verschiedene Tag-Varianten für unterschiedliche Anwendungsfälle.

## Verwendung

Tags werden als einfache HTML-Elemente mit CSS-Klassen implementiert:

```html
<span class="tag">Standard Tag</span>
```

## Varianten

### Größen

Tags sind in drei Größen verfügbar:

- **Klein** (`.tag-sm`): Kompakte Tags für platzsparende Layouts
- **Standard**: Mittlere Größe (Standard)
- **Groß** (`.tag-lg`): Größere Tags für bessere Sichtbarkeit

```html
<!-- Kleines Tag -->
<span class="tag tag-sm">Klein</span>

<!-- Standard Tag -->
<span class="tag">Standard</span>

<!-- Großes Tag -->
<span class="tag tag-lg">Groß</span>
```

### Farben

Tags unterstützen verschiedene Farbvarianten:

- **Primary** (Standard): `.tag-primary`
- **Secondary**: `.tag-secondary`
- **Success**: `.tag-success`
- **Warning**: `.tag-warning`
- **Error**: `.tag-error`
- **Info**: `.tag-info`

```html
<!-- Primary Tag (Standard) -->
<span class="tag tag-primary">Primary</span>

<!-- Secondary Tag -->
<span class="tag tag-secondary">Secondary</span>

<!-- Success Tag -->
<span class="tag tag-success">Success</span>

<!-- Warning Tag -->
<span class="tag tag-warning">Warning</span>

<!-- Error Tag -->
<span class="tag tag-error">Error</span>

<!-- Info Tag -->
<span class="tag tag-info">Info</span>
```

### Varianten

#### Abgerundete Tags

Für weichere Ecken können abgerundete Tags verwendet werden:

```html
<span class="tag tag-rounded">Abgerundet</span>
```

#### Outline Tags

Tags mit nur Umriss für subtilere Darstellung:

```html
<span class="tag tag-outline">Outline</span>
```

#### Tags mit Icons

Tags können mit Icons kombiniert werden:

```html
<span class="tag">
  <i class="icon icon-star"></i>
  Mit Icon
</span>
```

#### Entfernbare Tags

Tags, die vom Benutzer entfernt werden können:

```html
<span class="tag tag-removable">
  Entfernbar
  <button class="tag-remove" aria-label="Tag entfernen">×</button>
</span>
```

## Anpassung

Die Darstellung von Tags kann mithilfe von CSS-Variablen angepasst werden:

```css
.custom-tag {
  --tag-background: #6a0dad; /* Benutzerdefinierte Hintergrundfarbe */
  --tag-color: #ffffff; /* Benutzerdefinierte Textfarbe */
  --tag-border-radius: 12px; /* Benutzerdefinierte Abrundung */
  --tag-padding: 6px 12px; /* Benutzerdefinierter Innenabstand */
}
```

## Interaktive Tags

Tags können interaktiv gestaltet werden, um als Filter oder Auswahlmöglichkeiten zu dienen:

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

## Tag-Gruppen

Mehrere zusammengehörige Tags können in Gruppen organisiert werden:

```html
<div class="tag-group">
  <span class="tag">Tag 1</span>
  <span class="tag">Tag 2</span>
  <span class="tag">Tag 3</span>
</div>
```

## Barrierefreiheit

Für eine optimale Barrierefreiheit:

- Verwenden Sie ausreichenden Farbkontrast zwischen Tag-Hintergrund und Text
- Stellen Sie sicher, dass interaktive Tags über die Tastatur bedienbar sind
- Fügen Sie geeignete aria-Attribute hinzu, besonders für interaktive oder entfernbare Tags
- Vermeiden Sie die alleinige Verwendung von Farbe zur Unterscheidung von Bedeutungen

```html
<!-- Barrierefreies interaktives Tag -->
<label class="tag tag-interactive" role="checkbox" tabindex="0" aria-checked="false">
  <input type="checkbox" hidden>
  <span class="tag-text">Barrierefreies Tag</span>
</label>

<!-- Barrierefreies entfernbares Tag -->
<span class="tag tag-removable" role="listitem">
  Entfernbares Tag
  <button class="tag-remove" aria-label="Tag entfernen" tabindex="0">×</button>
</span>
```

## Browser-Kompatibilität

Die Tag-Komponenten sind mit allen modernen Browsern kompatibel und verwenden standardkonforme HTML- und CSS-Eigenschaften.

## Verwandte Komponenten

- [Badge](/components/elements/badge.md) - Für numerische oder Status-Anzeigen
- [Chip](/components/elements/chip.md) - Für komplexere interaktive Elemente
- [Button](/components/elements/button.md) - Für primäre Aktionen 