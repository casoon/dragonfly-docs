# Grid-System

Das Grid-System der Casoon UI Library bietet eine leistungsstarke Möglichkeit, komplexe, responsive Layouts zu erstellen.

## Module importieren

**Wichtig:** Das Grid-System ist im `layout.css` Layer enthalten, welches `core.css` als Abhängigkeit hat. Stellen Sie sicher, dass diese in der richtigen Reihenfolge importiert werden:

```css
/* Notwendige Abhängigkeit */
@import '@casoon/ui-lib/core.css';

/* Layout-System, enthält Grid */
@import '@casoon/ui-lib/layout.css';
```

Wenn Sie nur das Layout-Layer importieren ohne core.css, können einige Funktionen nicht korrekt funktionieren, da notwendige Definitionen für Variablen, Utility-Klassen und Grundstile fehlen würden.

## Grid mit Spalten

Sie können die Anzahl der Spalten mit der `grid-cols-*` Klasse definieren:

```html
<div class="grid grid-cols-3">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Verfügbare Spalten-Klassen:
- `grid-cols-1` bis `grid-cols-12`: Definiert eine feste Anzahl von Spalten
- `grid-cols-auto`: Spalten werden automatisch basierend auf dem Inhalt erstellt
- `grid-cols-none`: Keine vordefinierte Spaltenstruktur

## Responsive Grids

Das Grid-System ist vollständig responsiv. Sie können für verschiedene Bildschirmgrößen unterschiedliche Layouts definieren:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Verfügbare Breakpoints:
- `sm:`: Klein (>= 640px)
- `md:`: Mittel (>= 768px)
- `lg:`: Groß (>= 1024px)
- `xl:`: Extra groß (>= 1280px)
- `2xl:`: Extra extra groß (>= 1536px)

## Abstände zwischen Grid-Elementen

Mit `gap-*` Klassen können Sie den Abstand zwischen Grid-Elementen definieren:

```html
<div class="grid grid-cols-3 gap-4">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Abstände können auch unterschiedlich für horizontale und vertikale Richtungen definiert werden:
- `gap-x-*`: Horizontaler Abstand
- `gap-y-*`: Vertikaler Abstand

```html
<div class="grid grid-cols-3 gap-x-4 gap-y-8">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

## Ausrichtung der Grid-Elemente

### Horizontale Ausrichtung

```html
<div class="grid grid-cols-3 justify-items-start">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Optionen:
- `justify-items-start`: Ausrichtung am Anfang
- `justify-items-end`: Ausrichtung am Ende
- `justify-items-center`: Zentrierte Ausrichtung
- `justify-items-stretch`: Ausdehnung über die gesamte Breite (Standard)

### Vertikale Ausrichtung

```html
<div class="grid grid-cols-3 align-items-center">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Optionen:
- `align-items-start`: Ausrichtung am Anfang
- `align-items-end`: Ausrichtung am Ende
- `align-items-center`: Zentrierte Ausrichtung
- `align-items-stretch`: Ausdehnung über die gesamte Höhe (Standard)

## Element-Platzierung

Einzelne Elemente können über mehrere Zellen im Grid platziert werden:

```html
<div class="grid grid-cols-3">
  <div class="col-span-2">Nimmt 2 Spalten ein</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

Verfügbare Klassen:
- `col-span-1` bis `col-span-12`: Definiert, wie viele Spalten das Element einnimmt
- `col-start-1` bis `col-start-13`: Definiert, in welcher Spalte das Element beginnt
- `col-end-1` bis `col-end-13`: Definiert, in welcher Spalte das Element endet

Ähnlich funktioniert es für Zeilen:
- `row-span-1` bis `row-span-6`: Definiert, wie viele Zeilen das Element einnimmt
- `row-start-1` bis `row-start-7`: Definiert, in welcher Zeile das Element beginnt
- `row-end-1` bis `row-end-7`: Definiert, in welcher Zeile das Element endet

## Automatischer Zeilenumbruch

Mit `grid-flow-*` Klassen können Sie steuern, wie Elemente im Grid platziert werden:

```html
<div class="grid grid-cols-3 grid-flow-row-dense">
  <div class="col-span-2">Nimmt 2 Spalten ein</div>
  <div>Element 2</div>
  <div>Element 3</div>
  <div class="col-span-2">Nimmt 2 Spalten ein</div>
</div>
```

Optionen:
- `grid-flow-row`: Zeilenweise Anordnung (Standard)
- `grid-flow-col`: Spaltenweise Anordnung
- `grid-flow-row-dense`: Zeilenweise Anordnung mit dichterer Packung
- `grid-flow-col-dense`: Spaltenweise Anordnung mit dichterer Packung

## Container-Grid

Für eine vordefinierte Grid-Struktur mit maximaler Breite und zentrierter Ausrichtung können Sie die Container-Klasse verwenden:

```html
<div class="container">
  <div class="grid grid-cols-3">
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
  </div>
</div>
```

Der Container passt seine Breite automatisch an verschiedene Bildschirmgrößen an:
- Standard: 100% Breite
- `sm`: maximale Breite von 640px
- `md`: maximale Breite von 768px
- `lg`: maximale Breite von 1024px
- `xl`: maximale Breite von 1280px
- `2xl`: maximale Breite von 1536px

## Best Practices

- **12-Spalten-System nutzen**: Verwenden Sie das standardmäßige 12-Spalten-System für maximale Flexibilität bei der Gestaltung von Layouts.
- **Verschachtelte Grids für komplexe Layouts**: Nutzen Sie verschachtelte Grids, um komplexe UI-Strukturen zu erstellen.
- **Grid-Bereiche benennen**: Verwenden Sie Grid-Bereichsnamen für komplexe Layouts, um die Lesbarkeit und Wartbarkeit zu verbessern.
- **Auto-Fill und Auto-Fit für responsive Galerien**: Nutzen Sie `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` für dynamische, responsive Galerien.
- **Gap-Eigenschaft verwenden**: Nutzen Sie die `gap`-Eigenschaft für konsistente Abstände zwischen Grid-Elementen.
- **Minmax für flexible Zellgrößen**: Verwenden Sie die `minmax()`-Funktion, um minimale und maximale Zellgrößen festzulegen.
- **Grid mit Flexbox kombinieren**: Nutzen Sie Grid für das gesamte Seitenlayout und Flexbox für Komponenten.
- **Responsive Grid-Layouts**: Passen Sie Ihre Grid-Struktur an verschiedene Bildschirmgrößen mit Breakpoint-Klassen an.
- **Implizite Grids für dynamischen Inhalt**: Nutzen Sie `grid-auto-rows` und `grid-auto-columns` für Inhalte mit unbekannter Anzahl von Elementen.

## Beispiele

### Einfaches responsives Layout

```html
<div class="container">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <header class="col-span-full">
      <h1>Meine Webseite</h1>
    </header>
    <aside class="md:col-span-1">
      Seitenleiste
    </aside>
    <main class="md:col-span-2">
      Hauptinhalt
    </main>
    <footer class="col-span-full">
      Footer
    </footer>
  </div>
</div>
```

### Komplexes Grid-Layout

```html
<div class="container">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-8">Hauptinhalt</div>
    <div class="col-span-12 lg:col-span-4">Seitenleiste</div>
    
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">Box 1</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">Box 2</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">Box 3</div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-3">Box 4</div>
  </div>
</div>
```

## Integration mit anderen Komponenten

Das Grid-System lässt sich nahtlos mit anderen Komponenten der Casoon UI Library kombinieren:

```html
<div class="container">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card">
      <div class="card__header">Karte 1</div>
      <div class="card__body">Inhalt der Karte 1</div>
    </div>
    <div class="card">
      <div class="card__header">Karte 2</div>
      <div class="card__body">Inhalt der Karte 2</div>
    </div>
    <div class="card">
      <div class="card__header">Karte 3</div>
      <div class="card__body">Inhalt der Karte 3</div>
    </div>
  </div>
</div>
```

## CSS-Variablen

Das Grid-System verwendet folgende CSS-Variablen, die Sie anpassen können:

```css
:root {
  --grid-columns: 12;
  --grid-gap: 1rem;
  --container-padding: 1rem;
  --container-max-width-sm: 640px;
  --container-max-width-md: 768px;
  --container-max-width-lg: 1024px;
  --container-max-width-xl: 1280px;
  --container-max-width-2xl: 1536px;
}
``` 