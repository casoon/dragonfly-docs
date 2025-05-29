---
title: Shadow Effects
category: API
outline: deep
---

# Shadow Effects

Die Casoon UI Library bietet eine Sammlung von Schatten-Effekten, die Tiefe und Dimensionalität zu Ihren UI-Elementen hinzufügen. Diese Schatten-Utilities helfen, die visuelle Hierarchie in Ihrer Benutzeroberfläche zu definieren.

## Übersicht

Schatten sind ein wesentliches Element des modernen UI-Designs und helfen dabei, Elemente visuell vom Hintergrund abzuheben und die Benutzererfahrung zu verbessern.

## Import

```css
/* Entweder alle visuellen Effekte importieren */
@import '@casoon/ui-lib/effects/visual/index.css';

/* Oder spezifisch nur die Schatten-Effekte */
@import '@casoon/ui-lib/effects/visual/shadows.css';
```

## Shadow Utilities

Die Library bietet verschiedene Shadow-Klassen für unterschiedliche Elevations-Stufen:

| Klasse | Beschreibung |
|--------|--------------|
| `.shadow-sm` | Sehr leichter Schatten für subtile Elevation |
| `.shadow` | Standard-Schatten für allgemeine Elevation |
| `.shadow-md` | Mittlerer Schatten für moderate Elevation |
| `.shadow-lg` | Großer Schatten für deutliche Elevation |
| `.shadow-xl` | Extra großer Schatten für starke Elevation |
| `.shadow-2xl` | Sehr großer Schatten für maximale Elevation |
| `.shadow-inner` | Innerer Schatten für eingedrückte Elemente |
| `.shadow-none` | Kein Schatten (nützlich zum Entfernen von Schatten) |

### Beispiel

```html
<div class="shadow-sm p-4 m-4">
  Element mit sehr leichtem Schatten
</div>

<div class="shadow p-4 m-4">
  Element mit Standard-Schatten
</div>

<div class="shadow-md p-4 m-4">
  Element mit mittlerem Schatten
</div>

<div class="shadow-lg p-4 m-4">
  Element mit großem Schatten
</div>

<div class="shadow-xl p-4 m-4">
  Element mit extra großem Schatten
</div>

<div class="shadow-2xl p-4 m-4">
  Element mit sehr großem Schatten
</div>

<div class="shadow-inner p-4 m-4">
  Element mit innerem Schatten
</div>
```

## Elevation-System

Die Schatten-Utilities folgen einem konsistenten Elevation-System, das die visuelle Hierarchie unterstützt:

| Elevation | Schatten-Klasse | Typische Anwendung |
|-----------|-----------------|-------------------|
| 1 (am niedrigsten) | `.shadow-sm` | Separatoren, abgegrenzte Bereiche |
| 2 | `.shadow` | Karten, Container, Panels |
| 3 | `.shadow-md` | Erhöhte Karten, Dropdown-Menüs |
| 4 | `.shadow-lg` | Dialoge, hervorgehobene Elemente |
| 5 | `.shadow-xl` | Modals, Popups |
| 6 (am höchsten) | `.shadow-2xl` | Kritische Benachrichtigungen |

### Beispiel für eine Elevation-Hierarchie

```html
<div class="shadow-sm p-4 mb-4">
  <h3>Basisebene</h3>
  <p>Niedrigste Elevation mit subtiler Unterscheidung vom Hintergrund</p>
</div>

<div class="shadow p-4 mb-4">
  <h3>Containerebene</h3>
  <p>Standard-Karten und Container</p>
</div>

<div class="shadow-md p-4 mb-4">
  <h3>Erhöhte Ebene</h3>
  <p>Hervorgehobene Elemente und Dropdown-Menüs</p>
</div>

<div class="shadow-lg p-4 mb-4">
  <h3>Darüber schwebende Ebene</h3>
  <p>Dialoge und wichtige Elemente</p>
</div>

<div class="shadow-xl p-4 mb-4">
  <h3>Overlay-Ebene</h3>
  <p>Modals und Popups</p>
</div>

<div class="shadow-2xl p-4">
  <h3>Oberste Ebene</h3>
  <p>Kritische Benachrichtigungen und fokussierte Elemente</p>
</div>
```

## Interaktive Schatten

Schatten können mit Hover- und anderen Interaktionseffekten kombiniert werden, um dynamische UI-Elemente zu erstellen:

```html
<!-- Schatten, der sich beim Hover vergrößert -->
<div class="shadow hover-lift">
  Beim Hover angehobenes Element
</div>

<!-- Karte mit Schatten und Hover-Effekt -->
<div class="shadow-md hover-scale">
  Interaktive Karte mit Skalierung
</div>
```

## Innere Schatten

Der innere Schatten (`.shadow-inner`) ist nützlich für eingedrückte Elemente wie Eingabefelder oder Toggle-Buttons:

```html
<!-- Eingedrücktes Eingabefeld -->
<input type="text" class="shadow-inner p-2" placeholder="Eingedrücktes Eingabefeld">

<!-- Eingedrückter Container -->
<div class="shadow-inner p-4">
  Dieser Container erscheint eingedrückt statt erhöht
</div>
```

## Anpassung

Alle Schatten-Effekte können mit CSS-Variablen angepasst werden:

```css
:root {
  /* Schatten-Variablen */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 5%);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 25%);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 5%);
  --shadow-none: 0 0 #0000;
}
```

### Anpassung der Schatten-Farbe

Sie können die Farbe und Intensität der Schatten anpassen, um sie an Ihr Farbschema anzupassen:

```css
:root {
  /* Blaue Schatten */
  --shadow: 0 1px 3px 0 rgb(0 100 255 / 10%), 0 1px 2px -1px rgb(0 100 255 / 10%);
  
  /* Stärkere Schatten */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 20%), 0 4px 6px -4px rgb(0 0 0 / 20%);
}
```

## Dark Mode Integration

Die Schatten können auch für den Dark Mode angepasst werden, um die richtige visuelle Hierarchie in dunkleren Umgebungen zu erhalten:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 90%);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 80%), 0 1px 2px -1px rgb(0 0 0 / 80%);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 70%), 0 2px 4px -2px rgb(0 0 0 / 70%);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 70%), 0 4px 6px -4px rgb(0 0 0 / 70%);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 70%), 0 8px 10px -6px rgb(0 0 0 / 70%);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 90%);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 90%);
  }
}
```

## Barrierefreiheit

Bei der Verwendung von Schatten zur Darstellung von visueller Hierarchie ist es wichtig, auch andere visuelle Hinweise zu verwenden, damit Benutzer mit Sehschwächen die Hierarchie erkennen können:

1. **Nicht nur auf Schatten verlassen**: Kombinieren Sie Schatten mit anderen visuellen Hinweisen wie Farbe, Größe oder Position.
2. **Ausreichender Kontrast**: Stellen Sie sicher, dass der Kontrast zwischen Elementen auch ohne Schatten ausreichend ist.
3. **Konsistente Hierarchie**: Verwenden Sie Schatten konsistent in Ihrer gesamten Anwendung.

## Best Practices

1. **Verwenden Sie Schatten sparsam**: Zu viele Schatten können die visuelle Hierarchie verwirren.
2. **Befolgen Sie die Elevation-Hierarchie**: Verwenden Sie konsistent die richtigen Schatten für die entsprechende Elevation.
3. **Kombinieren Sie mit anderen Effekten**: Schatten funktionieren gut mit anderen visuellen Effekten wie Border-Radius oder Hover-Effekten.
4. **Berücksichtigen Sie die Performance**: Schatten können die Renderleistung beeinträchtigen, besonders auf mobilen Geräten.
5. **Anpassung an das Farbschema**: Passen Sie Schatten an Ihr Farbschema an, besonders im Dark Mode.

## Browser-Kompatibilität

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Box-Shadow | 10+ | 4+ | 5.1+ | 12+ |
| Multiple Box-Shadows | 10+ | 4+ | 5.1+ | 12+ |
| Inset Box-Shadow | 10+ | 4+ | 5.1+ | 12+ |

Die Schatten-Utilities werden von allen modernen Browsern unterstützt. 