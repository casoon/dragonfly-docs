---
title: Styles
category: Getting Started
---

# Styles im Casoon UI Design System

Das Casoon UI Design System bietet eine umfassende Sammlung von CSS-Styles und Utility-Klassen, die auf Design Tokens basieren und für konsistente, responsive und zugängliche Benutzeroberflächen sorgen.

## Übersicht

Die Styles der casoon-ui-lib sind in mehrere Kategorien unterteilt:

1. **Design Tokens**: Grundlegende Designvariablen wie Farben, Abstände, Typografie
2. **Layouts**: Grid-System, Flexbox, Container und Positionierung
3. **Typografie**: Schriftarten, -größen, -gewichte und Textformatierung
4. **Utilities**: Hilfsklassen für häufig verwendete Styling-Aufgaben
5. **Themes**: Anpassbare Farbpaletten und visuelle Erscheinungsbilder

## Modularer Aufbau

Die Styles sind modular aufgebaut und verwenden den Layering-Ansatz von CSS:

```css
@layer core {
  /* Grundlegende Styles wie Tokens, Reset, Typografie */
}

@layer utilities {
  /* Utility-Klassen für Layout, Spacing, Farben */
}

@layer components {
  /* Komponenten-spezifische Styles */
}

@layer themes {
  /* Theme-spezifische Überschreibungen */
}
```

## CSS-Variablen-System

Alle Styles basieren auf CSS-Variablen (Custom Properties), die auf der :root-Ebene definiert sind:

```css
:root {
  --color-primary: #3366FF;
  --spacing-4: 1rem;
  --font-size-base: 1rem;
  /* weitere Variablen... */
}
```

## Utility-Klassen

Die casoon-ui-lib bietet umfangreiche Utility-Klassen für häufig verwendete Styling-Aufgaben:

```html
<!-- Farben -->
<div class="bg-primary text-white">Primäre Hintergrundfarbe mit weißem Text</div>

<!-- Abstände -->
<div class="p-4 m-2">Padding und Margin</div>

<!-- Flexbox -->
<div class="flex justify-between items-center">
  <div>Flex-Item links</div>
  <div>Flex-Item rechts</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>Grid-Item 1</div>
  <div>Grid-Item 2</div>
  <div>Grid-Item 3</div>
</div>
```

## Responsive Design

Alle Styles und Utilities unterstützen responsives Design durch Breakpoint-Präfixe:

```html
<div class="text-base md:text-lg lg:text-xl">
  <!-- Textgröße ändert sich je nach Bildschirmgröße -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- Grid-Spaltenanzahl ändert sich je nach Bildschirmgröße -->
</div>
```

## Detaillierte Dokumentation

Detaillierte Informationen zu den verschiedenen Style-Kategorien finden Sie in den folgenden Abschnitten:

- [Design Tokens](/getting-started/tokens) - Grundlegende Designvariablen
- [Layout](/getting-started/layout) - Grid-System, Flexbox und Container
- [Typografie](/getting-started/typography) - Schriftarten und Textformatierung
- [Utilities](/getting-started/utilities) - Hilfsklassen für verschiedene Styling-Aufgaben
- [Themes](/getting-started/themes) - Anpassung des visuellen Erscheinungsbilds
- [Iconsets](/getting-started/iconsets) - Verfügbare Icons und deren Verwendung

## Best Practices

1. **Konsistenz durch Design Tokens**
   - Verwenden Sie vordefinierte Design Tokens statt hartcodierter Werte
   - Behalten Sie konsistente Abstände, Farben und Typografie bei

2. **Utility-First Ansatz**
   - Verwenden Sie Utility-Klassen für schnelles und konsistentes Styling
   - Kombinieren Sie Utilities für komplexere Layouts

3. **Responsives Design**
   - Nutzen Sie die Breakpoint-Präfixe für responsives Verhalten
   - Testen Sie auf verschiedenen Geräten und Bildschirmgrößen

4. **Barrierefreiheit**
   - Achten Sie auf ausreichenden Farbkontrast
   - Verwenden Sie semantisches HTML mit den Styles
   - Stellen Sie sicher, dass Interaktionen tastaturgesteuert möglich sind

5. **Performance**
   - Importieren Sie nur die benötigten Style-Module
   - Verwenden Sie die Layering-Funktion, um Spezifität zu kontrollieren
   - Vermeiden Sie zu viele verschachtelte Selektoren 