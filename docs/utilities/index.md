---
title: Utility Classes
category: Utilities
---

# Utility Classes

Das Utility-System der Casoon UI Library bietet eine umfassende Sammlung von CSS-Dienstprogrammklassen für schnelle Styling-Anpassungen ohne die Notwendigkeit, benutzerdefiniertes CSS zu schreiben.

## Übersicht

Das Utility-System umfasst Klassen für:

- **Farben**: Text-, Hintergrund- und Rahmenfarben
- **Spacing**: Abstände, Ränder und Polsterung
- **Typografie**: Schriftarten, -größen, -gewichte und Textausrichtung
- **Display**: Anzeigeeigenschaften und Sichtbarkeit
- **Flexbox**: Flexible Box-Layout-Steuerung
- **Grid**: CSS-Grid-Layout-Steuerung
- **Position**: Elementpositionierung
- **Size**: Breiten- und Höhenkontrolle

## Prinzipien

Das Utility-System basiert auf folgenden Prinzipien:

1. **Atomarität**: Jede Klasse tut genau eine Sache
2. **Vorhersehbarkeit**: Konsistente Namenskonventionen und Verhaltensweisen
3. **Responsivität**: Breakpoint-Präfixe für responsives Verhalten
4. **Effizienz**: Minimale Dateigröße durch optimierte Selektoren

## Namenskonventionen

Utility-Klassen folgen einem konsistenten Benennungsmuster:

```.[Eigenschaft]-[Variante]-[Wert]
```

Beispiele:
- `.color-primary-500`: Textfarbe auf Primary-500 setzen
- `.bg-neutral-100`: Hintergrundfarbe auf Neutral-100 setzen
- `.m-m`: Margin auf mittleren Wert setzen
- `.p-l`: Padding auf großen Wert setzen
- `.flex-center`: Flex-Items zentrieren

## Responsive Utilities

Durch Präfixe können Utilities responsive angewendet werden:

```html
<div class="display-block sm:display-none lg:display-flex">
  <!-- Standardmäßig als Block angezeigt, auf kleinen Bildschirmen ausgeblendet, auf großen als Flex angezeigt -->
</div>
```

## Kategorien von Utilities

### Color Utilities

```html
<!-- Textfarben -->
<p class="color-primary-500">Primärfarbe</p>
<p class="color-danger-400">Warnfarbe</p>

<!-- Hintergrundfarben -->
<div class="bg-neutral-100">Neutraler Hintergrund</div>
<div class="bg-success-200">Erfolgs-Hintergrund</div>
```

### Spacing Utilities

```html
<!-- Margin -->
<div class="m-s">Kleiner Abstand rundum</div>
<div class="mt-m mb-l">Mittlerer Abstand oben, großer unten</div>

<!-- Padding -->
<div class="p-m">Mittlere Polsterung rundum</div>
<div class="px-l py-m">Große horizontale, mittlere vertikale Polsterung</div>
```

### Typography Utilities

```html
<!-- Schriftgröße und -gewicht -->
<p class="text-s">Kleiner Text</p>
<p class="text-l font-bold">Großer, fetter Text</p>

<!-- Textausrichtung -->
<p class="text-center">Zentrierter Text</p>
<p class="text-right">Rechtsbündiger Text</p>
```

## Verwendung

Das Utility-System kann als Ganzes oder modular eingebunden werden:

```css
/* Gesamtes Utility-System */
@import '@casoon/ui-lib/utilities.css';

/* Oder nur einzelne Utility-Kategorien */
@import '@casoon/ui-lib/utilities/spacing.css';
@import '@casoon/ui-lib/utilities/colors.css';
```

## Weiterführende Themen

- [Color Utilities](/utilities/colors)
- [Spacing Utilities](/utilities/spacing)
- [Typography Utilities](/utilities/typography)
- [Display Utilities](/utilities/display)
- [Flex Utilities](/utilities/flex)
- [Grid Utilities](/utilities/grid)
- [Position Utilities](/utilities/position)
- [Size Utilities](/utilities/size) 