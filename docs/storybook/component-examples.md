---
title: Komponenten-Beispiele
category: Storybook
---

# Komponenten-Beispiele mit Storybook

Diese Seite demonstriert, wie Storybook-Beispiele in die Komponentendokumentation integriert werden können. Sie dient als Referenz, wie interaktive Beispiele die Dokumentation verbessern.

## Button-Komponente

Die Button-Komponente ist ein grundlegendes UI-Element für Benutzerinteraktionen.

### Varianten

Buttons sind in verschiedenen Varianten verfügbar:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--variants&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<button class="btn btn--primary">Primär</button>
<button class="btn btn--secondary">Sekundär</button>
<button class="btn btn--outline">Umriss</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--danger">Gefahr</button>
```

### Größen

Buttons können in verschiedenen Größen dargestellt werden:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--sizes&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<button class="btn btn--sm">Klein</button>
<button class="btn">Standard</button>
<button class="btn btn--lg">Groß</button>
```

## Card-Komponente

Die Card-Komponente wird verwendet, um Inhalte in einem Container mit konsistentem Design darzustellen.

### Basis-Card

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
  width="100%"
  height="350px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Kartentitel</h3>
  </div>
  <div class="card-body">
    <p>Karteninhalt mit Text und weiteren Elementen.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn--primary">Aktion</button>
  </div>
</div>
```

### Media-Card

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--with-media&viewMode=story"
  width="100%"
  height="400px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<div class="card">
  <img src="image.jpg" alt="Kartenbild" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">Medien-Karte</h3>
    <p>Karteninhalt mit Bild und Text.</p>
    <button class="btn btn--primary">Mehr erfahren</button>
  </div>
</div>
```

## Input-Komponente

Die Input-Komponente ermöglicht Benutzern, Text und andere Daten einzugeben.

### Text-Input

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-input--text&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<div class="form-group">
  <label for="username">Benutzername</label>
  <input type="text" id="username" class="input" placeholder="Benutzername eingeben">
</div>
```

### Validierungszustände

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-input--validation-states&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Verwendung:**

```html
<!-- Standard-Input -->
<input type="text" class="input" placeholder="Standard">

<!-- Gültiger Input -->
<input type="text" class="input input--valid" value="Gültige Eingabe">
<div class="feedback feedback--valid">Eingabe ist gültig</div>

<!-- Ungültiger Input -->
<input type="text" class="input input--invalid" value="Ungültige Eingabe">
<div class="feedback feedback--invalid">Bitte korrigieren Sie Ihre Eingabe</div>
```

## Interaktivität und Dokumentation kombinieren

Bei der Dokumentation von Komponenten ist es wichtig, sowohl die technischen Details als auch die visuelle Darstellung zu berücksichtigen. Storybook-Beispiele eignen sich besonders gut, um:

1. **Zustände zu visualisieren**: Zeigen Sie verschiedene Zustände wie Hover, Fokus, aktiv, deaktiviert
2. **Varianten darzustellen**: Demonstrieren Sie verschiedene Design-Varianten der Komponente
3. **Interaktionen zu zeigen**: Lassen Sie Benutzer mit der Komponente interagieren
4. **Responsives Verhalten zu testen**: Zeigen Sie, wie sich die Komponente bei verschiedenen Bildschirmgrößen verhält

Durch die Kombination von schriftlicher Dokumentation, Code-Beispielen und interaktiven Storybook-Demos erhalten Entwickler ein umfassendes Verständnis der Komponenten und deren Verwendung.

## Integration in bestehende Komponentendokumentation

Um Storybook-Beispiele in Ihre bestehende Komponentendokumentation zu integrieren, können Sie folgende Struktur verwenden:

1. **Beschreibung der Komponente**: Allgemeine Informationen und Verwendungszweck
2. **Storybook-Beispiel**: Eingebettetes interaktives Beispiel
3. **Code-Beispiel**: Quellcode zur Implementierung
4. **Props/Parameter**: Beschreibung der verfügbaren Optionen
5. **Varianten und Zustände**: Zusätzliche Beispiele für verschiedene Varianten
6. **Best Practices**: Empfehlungen für die Verwendung

Diese Struktur bietet einen konsistenten Ansatz für die Dokumentation aller Komponenten und macht es Entwicklern leicht, die benötigten Informationen zu finden. 