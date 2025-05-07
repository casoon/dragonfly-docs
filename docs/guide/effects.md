# Effekte-System

Das Effekte-System in Casoon UI wurde überarbeitet, um eine bessere Modularität und Flexibilität zu bieten. Es besteht aus Basis-Effekten (wie Animationen und Transitions) und spezifischen visuellen Effekten, die einzeln importiert und verwendet werden können.

## Basis-Effekte

Die Basis-Effekte sind in der Core-CSS enthalten und bieten grundlegende Animationen und Übergänge:

```css
@import '@casoon/ui-lib/core.css';
```

### Verfügbare Basis-Effekte

#### Transitions
```css
/* Standard-Transition */
.transition {
  transition: all 0.3s ease;
}

/* Schnelle Transition */
.transition-fast {
  transition: all 0.15s ease;
}

/* Langsame Transition */
.transition-slow {
  transition: all 0.5s ease;
}

/* Spezifische Transition */
.transition-transform {
  transition: transform 0.3s ease;
}
```

#### Animationen
```css
/* Fade-In */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}

/* Fade-Out */
.animate-fade-out {
  animation: fadeOut 0.3s ease-out;
}

/* Slide-In */
.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

/* Slide-Out */
.animate-slide-out {
  animation: slideOut 0.3s ease-in;
}
```

## Spezifische Effekte

Die spezifischen Effekte müssen einzeln importiert werden, um die Bundle-Größe zu optimieren.

### Blur-Effekt
```css
@import '@casoon/ui-lib/effects/blur.css';
```

Verfügbare Klassen:
- `.blur-sm`: Leichter Blur-Effekt (4px)
- `.blur-md`: Mittlerer Blur-Effekt (8px)
- `.blur-lg`: Starker Blur-Effekt (16px)
- `.blur-xl`: Extra starker Blur-Effekt (24px)

Beispiel mit Transition:
```html
<div class="blur-sm transition">
  <!-- Inhalt wird sanft verschwommen -->
</div>
```

### Schatten-Effekt
```css
@import '@casoon/ui-lib/effects/shadow.css';
```

Verfügbare Klassen:
- `.shadow-sm`: Leichter Schatten (2px)
- `.shadow-md`: Mittlerer Schatten (4px)
- `.shadow-lg`: Starker Schatten (8px)
- `.shadow-xl`: Extra starker Schatten (16px)
- `.shadow-inner`: Innerer Schatten
- `.shadow-none`: Kein Schatten

Beispiel mit Hover-Effekt:
```html
<div class="shadow-md transition hover:shadow-lg">
  <!-- Schatten wird beim Hover verstärkt -->
</div>
```

### Glass-Effekt
```css
@import '@casoon/ui-lib/effects/glass.css';
```

Verfügbare Klassen:
- `.glass`: Standard Glass-Effekt
- `.glass-dark`: Dunkler Glass-Effekt
- `.glass-light`: Heller Glass-Effekt
- `.glass-blur`: Glass-Effekt mit Blur
- `.glass-border`: Glass-Effekt mit Rahmen

Beispiel mit Animation:
```html
<div class="glass animate-fade-in">
  <!-- Glass-Effekt wird eingeblendet -->
</div>
```

## Kombinierte Effekte

Effekte können kombiniert werden, um komplexere visuelle Erscheinungen zu erzeugen:

```html
<!-- Glass-Karte mit Schatten und Blur -->
<div class="glass shadow-lg blur-sm transition hover:shadow-xl">
  <h2 class="text-xl font-bold">Glaskarte</h2>
  <p>Eine Karte mit kombinierten Effekten</p>
</div>

<!-- Animierter Container mit Blur -->
<div class="blur-md animate-fade-in">
  <div class="glass-light shadow-md">
    <p>Animierter Inhalt mit Blur und Glass</p>
  </div>
</div>
```

## Performance-Optimierung

1. **Selektive Imports**
   ```css
   /* Nur die benötigten Effekte importieren */
   @import '@casoon/ui-lib/effects/shadow.css';
   @import '@casoon/ui-lib/effects/glass.css';
   ```

2. **Effekte zusammenfassen**
   ```css
   /* In Ihrer eigenen CSS-Datei */
   @import '@casoon/ui-lib/effects/shadow.css';
   @import '@casoon/ui-lib/effects/glass.css';
   
   /* Eigene Kombinationen definieren */
   .card-glass {
     @apply glass shadow-lg transition;
   }
   ```

## Best Practices

1. **Zugänglichkeit**
   - Verwenden Sie Blur-Effekte sparsam
   - Stellen Sie sicher, dass Text mit Blur-Effekt noch lesbar ist
   - Bieten Sie Alternativen für Nutzer, die Animationen deaktiviert haben

2. **Performance**
   - Importieren Sie nur die benötigten Effekte
   - Vermeiden Sie zu viele kombinierte Effekte
   - Nutzen Sie Hardware-Beschleunigung wo möglich

3. **Responsive Design**
   - Testen Sie Effekte auf verschiedenen Geräten
   - Reduzieren Sie Effekte auf mobilen Geräten
   - Berücksichtigen Sie die Performance auf schwächeren Geräten

4. **Browser-Kompatibilität**
   - Testen Sie Effekte in verschiedenen Browsern
   - Bieten Sie Fallbacks für ältere Browser
   - Nutzen Sie Feature-Detection für progressive Enhancement

## Troubleshooting

### Effekte werden nicht angezeigt
- Überprüfen Sie die Import-Pfade
- Stellen Sie sicher, dass die Layer-Reihenfolge korrekt ist
- Prüfen Sie auf CSS-Konflikte

### Performance-Probleme
- Reduzieren Sie die Anzahl der Effekte
- Optimieren Sie Animationen mit `will-change`
- Nutzen Sie `transform` statt `top/left` für Animationen

### Browser-spezifische Probleme
- Verwenden Sie Vendor-Prefixes wo nötig
- Testen Sie in verschiedenen Browsern
- Bieten Sie Fallbacks für ältere Browser 