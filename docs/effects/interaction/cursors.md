# Cursor-Effekte

Cursor-Effekte ändern das Erscheinungsbild des Mauszeigers, um dem Benutzer zusätzliches Feedback über die Interaktionsmöglichkeiten zu geben. Die `@casoon/ui-lib` bietet eine umfangreiche Sammlung von Cursor-Effekten, die dazu beitragen, die Benutzererfahrung zu verbessern und die Interaktivität von Elementen zu verdeutlichen.

## Basic Usage

Cursor-Effekte können auf jedes HTML-Element angewendet werden:

```html
<div class="cursor-pointer">Interaktives Element</div>
```

## Standard-Cursor-Typen

Die folgenden Klassen sind für die gängigsten Cursor-Typen verfügbar:

| Klasse | Beschreibung | Usage |
|--------|-------------|------------|
| `.cursor-auto` | Standard-Cursor | Für normale Inhalte |
| `.cursor-default` | Standardpfeil | Für normale UI-Elemente |
| `.cursor-pointer` | Zeigefinger | Für klickbare Elemente |
| `.cursor-text` | I-Balken | Für Text-Selektion |
| `.cursor-move` | Kreuzpfeil | Für bewegbare Elemente |
| `.cursor-not-allowed` | Verbotssymbol | Für deaktivierte Elemente |
| `.cursor-wait` | Sanduhr/Uhr | Für Ladezustände |
| `.cursor-help` | Fragezeichen | Für Hilfselemente |
| `.cursor-crosshair` | Fadenkreuz | Für präzise Auswahl |
| `.cursor-grab` | Offene Hand | Für ziehbare Elemente (inaktiv) |
| `.cursor-grabbing` | Geschlossene Hand | Für ziehbare Elemente (aktiv) |
| `.cursor-zoom-in` | Lupe mit Plus | Für Vergrößerung |
| `.cursor-zoom-out` | Lupe mit Minus | Für Verkleinerung |

## Spezielle Cursor-Effekte

Neben den Standard-Cursorn bietet `@casoon/ui-lib` auch erweiterte Cursor-Effekte:

### Richtungs-Cursor

```html
<div class="cursor-n-resize">Nord-Resize</div>
<div class="cursor-e-resize">Ost-Resize</div>
<div class="cursor-s-resize">Süd-Resize</div>
<div class="cursor-w-resize">West-Resize</div>
<div class="cursor-ne-resize">Nordost-Resize</div>
<div class="cursor-nw-resize">Nordwest-Resize</div>
<div class="cursor-se-resize">Südost-Resize</div>
<div class="cursor-sw-resize">Südwest-Resize</div>
<div class="cursor-ew-resize">Ost-West-Resize</div>
<div class="cursor-ns-resize">Nord-Süd-Resize</div>
<div class="cursor-nesw-resize">Nordost-Südwest-Resize</div>
<div class="cursor-nwse-resize">Nordwest-Südost-Resize</div>
```

### Kontext-Cursor

```html
<div class="cursor-copy">Kopieren-Aktion</div>
<div class="cursor-alias">Aliasing-Aktion</div>
<div class="cursor-progress">In Bearbeitung</div>
<div class="cursor-context-menu">Kontextmenü verfügbar</div>
<div class="cursor-cell">Zellenselektion</div>
<div class="cursor-col-resize">Spaltenbreite anpassen</div>
<div class="cursor-row-resize">Zeilenhöhe anpassen</div>
<div class="cursor-all-scroll">In alle Richtungen scrollbar</div>
```

### Benutzerdefinierte Cursor

Mit der `cursor-custom` Klasse können Sie benutzerdefinierte Cursor-Bilder verwenden:

```html
<div class="cursor-custom" style="--cursor-url: url('/path/to/cursor.png')">
  Benutzerdefinierter Cursor
</div>
```

## Animierte Cursor

Die Bibliothek unterstützt auch animierte Cursor:

```html
<div class="cursor-pulse">Pulsierender Cursor</div>
<div class="cursor-ping">Ping-Effekt Cursor</div>
<div class="cursor-follow">Folgender Cursor-Effekt</div>
```

## Usage in Kombinationen

Cursor-Effekte können mit anderen Elementen kombiniert werden, um das Benutzererlebnis zu verbessern:

### Interaktive Elemente

```html
<button class="btn cursor-pointer">Klickbarer Button</button>
<div class="drag-handle cursor-grab">Drag-Handler (inaktiv)</div>
<div class="drag-handle cursor-grabbing">Drag-Handler (aktiv)</div>
```

### Formelemente

```html
<input type="text" class="cursor-text">
<select class="cursor-pointer">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<input type="range" class="cursor-ew-resize">
```

### Status-abhängige Cursor

```html
<button class="btn" disabled class="cursor-not-allowed">Deaktivierter Button</button>
<div class="loading-area cursor-wait">Ladender Inhalt</div>
<div class="draggable cursor-grab active-cursor-grabbing">Ziehbares Element</div>
```

## Kontextbezogene Cursor

Je nach Kontext können unterschiedliche Cursor verwendet werden:

```html
<div class="image-editor">
  <div class="toolbar">
    <button class="tool-select cursor-default">Auswahl</button>
    <button class="tool-move cursor-move">Verschieben</button>
    <button class="tool-crop cursor-crosshair">Zuschneiden</button>
    <button class="tool-zoom-in cursor-zoom-in">Vergrößern</button>
    <button class="tool-zoom-out cursor-zoom-out">Verkleinern</button>
  </div>
  <div class="canvas cursor-crosshair">
    <!-- Bearbeitungsbereich -->
  </div>
</div>
```

## CSS Variables

Die Cursor-Effekte können über CSS Variables angepasst werden:

```css
:root {
  --cursor-custom-size: 32px; /* Größe des benutzerdefinierten Cursors */
  --cursor-custom-offset-x: 0; /* X-Versatz für den benutzerdefinierten Cursor */
  --cursor-custom-offset-y: 0; /* Y-Versatz für den benutzerdefinierten Cursor */
  --cursor-animation-duration: 0.3s; /* Dauer für Cursor-Animationen */
  --cursor-animation-timing: ease-in-out; /* Timing-Funktion für Cursor-Animationen */
}
```

## Accessibility

Bei der Usage von Cursor-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Consistency**: Verwenden Sie konsistente Cursor für ähnliche Aktionen im gesamten Interface
2. **Verständlichkeit**: Der Cursor sollte die mögliche Interaktion eindeutig vermitteln
3. **Alternative Eingabe**: Stellen Sie sicher, dass alle Funktionen auch mit der Tastatur zugänglich sind
4. **Kontrast**: Benutzerdefinierte Cursor sollten ausreichend Kontrast zum Hintergrund haben

```html
<!-- Barrierefreier Button mit passendem Cursor -->
<button 
  class="btn cursor-pointer" 
  role="button"
  tabindex="0"
>
  Barrierefreier Button
</button>
```

## JavaScript-Integration

Für dynamische Cursor-Änderungen kann JavaScript verwendet werden:

```javascript
// Dynamische Cursor-Änderung
document.querySelectorAll('.draggable').forEach(element => {
  element.addEventListener('mousedown', function() {
    this.classList.remove('cursor-grab');
    this.classList.add('cursor-grabbing');
  });
  
  element.addEventListener('mouseup', function() {
    this.classList.remove('cursor-grabbing');
    this.classList.add('cursor-grab');
  });
  
  element.addEventListener('mouseleave', function() {
    this.classList.remove('cursor-grabbing');
    this.classList.add('cursor-grab');
  });
});
```

## Cursor-Kontext System

Das Cursor-Kontext-System ermöglicht die automatische Änderung des Cursors basierend auf dem aktuellen Kontext:

```html
<div class="cursor-context" data-context="editor">
  <div class="cursor-context__tool" data-tool="select">
    <div class="cursor-context__canvas">
      <!-- Inhalt -->
    </div>
  </div>
</div>
```

```javascript
// Cursor-Kontext-System
document.querySelectorAll('.cursor-context__tool').forEach(tool => {
  tool.addEventListener('click', function() {
    const context = this.closest('.cursor-context');
    const canvas = context.querySelector('.cursor-context__canvas');
    const toolType = this.getAttribute('data-tool');
    
    // Alle Tool-Buttons zurücksetzen
    context.querySelectorAll('.cursor-context__tool').forEach(t => {
      t.classList.remove('active');
    });
    
    // Aktuelles Tool aktivieren
    this.classList.add('active');
    
    // Cursor auf Canvas setzen
    canvas.className = 'cursor-context__canvas';
    
    switch(toolType) {
      case 'select':
        canvas.classList.add('cursor-default');
        break;
      case 'move':
        canvas.classList.add('cursor-move');
        break;
      case 'crop':
        canvas.classList.add('cursor-crosshair');
        break;
      case 'zoom-in':
        canvas.classList.add('cursor-zoom-in');
        break;
      case 'zoom-out':
        canvas.classList.add('cursor-zoom-out');
        break;
      // Weitere Tools...
    }
  });
});
```

## Browser-Kompatibilität

Die meisten Cursor-Typen werden von allen modernen Browsern unterstützt. Benutzerdefinierte Cursor haben jedoch einige Einschränkungen:

| Browser | Unterstützung |
|---------|--------------|
| Chrome | Vollständige Unterstützung für alle Cursor-Typen |
| Firefox | Vollständige Unterstützung für alle Cursor-Typen |
| Safari | Unterstützt die meisten Cursor-Typen, einige animierte Cursor können Probleme haben |
| Edge | Vollständige Unterstützung für alle Cursor-Typen |
| IE11 | Eingeschränkte Unterstützung für benutzerdefinierte und animierte Cursor |

## Verwandte Effekte

- [Hover-Effekte](/docs/effects/interaction/hover.md) - Effekte beim Überfahren mit der Maus
- [Active-Effekte](/docs/effects/interaction/active.md) - Effekte beim Aktivieren von Elementen
- [Focus-Effekte](/docs/effects/interaction/focus.md) - Effekte beim Fokussieren von Elementen 