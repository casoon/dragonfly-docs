# Cursor-effects

Cursor-effects change the Erscheinungsbild des Mauszeigers, um dem user zusatzliches Feedback over the Interaktionsmoglichkeiten to geben. the `@casoon/ui-lib` bietet a umfangreiche Sammlung from Cursor-Effekten, the for that beitragen, the Benutzererfahrung to verbessern and the Interaktivitat from Elementen to verdeutlichen.

## Basic Usage

Cursor-effects can on jedes HTML-element angewendet become:

```html
<div class="cursor-pointer">Interaktives element</div>
```

## Standard-Cursor-Typen

the folgenden classes sind for the gangigsten Cursor-Typen verfugbar:

| Class | Description | Usage |
|--------|-------------|------------|
| `.cursor-auto` | Standard-Cursor | for normale contents |
| `.cursor-default` | Standardpfeil | for normale UI-elements |
| `.cursor-pointer` | Zeigefinger | for klickbare elements |
| `.cursor-text` | I-Balken | for Text-Selektion |
| `.cursor-move` | Kreuzpfeil | for bewegbare elements |
| `.cursor-not-allowed` | Verbotssymbol | for deaktivierte elements |
| `.cursor-wait` | Sanduhr/Uhr | for Ladezustande |
| `.cursor-help` | Fragezeichen | for Hilfselemente |
| `.cursor-crosshair` | Fadenkreuz | for prazise selection |
| `.cursor-grab` | Offene Hand | for ziehbare elements (inaktiv) |
| `.cursor-grabbing` | Geschlossene Hand | for ziehbare elements (aktiv) |
| `.cursor-zoom-in` | Lupe with Plus | for Vergrosserung |
| `.cursor-zoom-out` | Lupe with Minus | for Verkleinerung |

## Spezielle Cursor-effects

next to den Standard-Cursorn bietet `@casoon/ui-lib` also erweiterte Cursor-effects:

### Richtungs-Cursor

```html
<div class="cursor-n-resize">Nord-Resize</div>
<div class="cursor-e-resize">Ost-Resize</div>
<div class="cursor-s-resize">Sud-Resize</div>
<div class="cursor-w-resize">West-Resize</div>
<div class="cursor-ne-resize">Nordost-Resize</div>
<div class="cursor-nw-resize">Nordwest-Resize</div>
<div class="cursor-se-resize">Sudost-Resize</div>
<div class="cursor-sw-resize">Sudwest-Resize</div>
<div class="cursor-ew-resize">Ost-West-Resize</div>
<div class="cursor-ns-resize">Nord-Sud-Resize</div>
<div class="cursor-nesw-resize">Nordost-Sudwest-Resize</div>
<div class="cursor-nwse-resize">Nordwest-Sudost-Resize</div>
```

### Kontext-Cursor

```html
<div class="cursor-copy">Kopieren-Aktion</div>
<div class="cursor-alias">Aliasing-Aktion</div>
<div class="cursor-progress">in Bearbeitung</div>
<div class="cursor-context-menu">Kontextmenu verfugbar</div>
<div class="cursor-cell">Zellenselektion</div>
<div class="cursor-col-resize">Spaltenbreite customize</div>
<div class="cursor-row-resize">line height customize</div>
<div class="cursor-all-scroll">in all Richtungen scrollbar</div>
```

### Benutzerdefinierte Cursor

with the `cursor-custom` Class can them benutzerdefinierte Cursor-images use:

```html
<div class="cursor-custom" style="--cursor-url: url('/path/to/cursor.png')">
  Benutzerdefinierter Cursor
</div>
```

## Animierte Cursor

the Bibliothek unterstutzt also animierte Cursor:

```html
<div class="cursor-pulse">Pulsierender Cursor</div>
<div class="cursor-ping">Ping-effect Cursor</div>
<div class="cursor-follow">Folgender Cursor-effect</div>
```

## Usage in Kombinationen

Cursor-effects can with anderen Elementen kombiniert become, um the Benutzererlebnis to verbessern:

### Interaktive elements

```html
<button class="btn cursor-pointer">Klickbarer button</button>
<div class="drag-handle cursor-grab">Drag-Handler (inaktiv)</div>
<div class="drag-handle cursor-grabbing">Drag-Handler (aktiv)</div>
```

### form elements

```html
<input type="text" class="cursor-text">
<select class="cursor-pointer">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<input type="range" class="cursor-ew-resize">
```

### Status-abhangige Cursor

```html
<button class="btn" disabled class="cursor-not-allowed">Deaktivierter button</button>
<div class="loading-area cursor-wait">Ladender content</div>
<div class="draggable cursor-grab active-cursor-grabbing">Ziehbares element</div>
```

## Kontextbezogene Cursor

Je after Kontext can unterschiedliche Cursor verwendet become:

```html
<div class="image-editor">
  <div class="toolbar">
    <button class="tool-select cursor-default">selection</button>
    <button class="tool-move cursor-move">Verschieben</button>
    <button class="tool-crop cursor-crosshair">Zuschneiden</button>
    <button class="tool-zoom-in cursor-zoom-in">enlarge</button>
    <button class="tool-zoom-out cursor-zoom-out">reduce</button>
  </div>
  <div class="canvas cursor-crosshair">
    <!-- Bearbeitungsbereich -->
  </div>
</div>
```

## CSS Variables

the Cursor-effects can over CSS Variables angepasst become:

```css
:root {
  --cursor-custom-size: 32px; /* size des benutzerdefinierten Cursors */
  --cursor-custom-offset-x: 0; /* X-Versatz for den benutzerdefinierten Cursor */
  --cursor-custom-offset-y: 0; /* Y-Versatz for den benutzerdefinierten Cursor */
  --cursor-animation-duration: 0.3s; /* Dauer for Cursor-animations */
  --cursor-animation-timing: ease-in-out; /* Timing-Function for Cursor-animations */
}
```

## Accessibility

at the Usage from Cursor-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Consistency**: use them konsistente Cursor for ahnliche Aktionen im gesamten Interface
2. **Verstandlichkeit**: the Cursor sollte the mogliche interaction eindeutig vermitteln
3. **Alternative input**: ensure, that all functions also with the Tastatur zuganglich sind
4. **Kontrast**: Benutzerdefinierte Cursor should ausreichend Kontrast zum background have

```html
<!-- Barrierefreier button with passendem Cursor -->
<button 
  class="btn cursor-pointer" 
  role="button"
  tabindex="0"
>
  Barrierefreier button
</button>
```

## JavaScript-Integration

for dynamische Cursor-Anderungen kann JavaScript verwendet become:

```javascript
// Dynamische Cursor-Anderung
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

## Cursor-Kontext system

the Cursor-Kontext-system ermoglicht the automatische Anderung des Cursors basierend on dem aktuellen Kontext:

```html
<div class="cursor-context" data-context="editor">
  <div class="cursor-context__tool" data-tool="select">
    <div class="cursor-context__canvas">
      <!-- content -->
    </div>
  </div>
</div>
```

```javascript
// Cursor-Kontext-system
document.querySelectorAll('.cursor-context__tool').forEach(tool => {
  tool.addEventListener('click', function() {
    const context = this.closest('.cursor-context');
    const canvas = context.querySelector('.cursor-context__canvas');
    const toolType = this.getAttribute('data-tool');
    
    // all Tool-buttons zurucksetzen
    context.querySelectorAll('.cursor-context__tool').forEach(t => {
      t.classList.remove('active');
    });
    
    // Aktuelles Tool activate
    this.classList.add('active');
    
    // Cursor on Canvas setzen
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
      // additional Tools...
    }
  });
});
```

## Browser-Kompatibilitat

the meisten Cursor-Typen become from allen modernen Browsern unterstutzt. Benutzerdefinierte Cursor have however some Einschrankungen:

| Browser | Unterstutzung |
|---------|--------------|
| Chrome | Vollstandige Unterstutzung for all Cursor-Typen |
| Firefox | Vollstandige Unterstutzung for all Cursor-Typen |
| Safari | Unterstutzt the meisten Cursor-Typen, some animierte Cursor can Probleme have |
| Edge | Vollstandige Unterstutzung for all Cursor-Typen |
| IE11 | Eingeschrankte Unterstutzung for benutzerdefinierte and animierte Cursor |

## Verwandte effects

- [Hover-effects](/docs/effects/interaction/hover.md) - effects beim Uberfahren with the Maus
- [Active-effects](/docs/effects/interaction/active.md) - effects beim activate from Elementen
- [Focus-effects](/docs/effects/interaction/focus.md) - effects beim Fokussieren from Elementen 