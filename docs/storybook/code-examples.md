---
title: Code-Beispiele
category: Storybook
---

# Code-Beispiele für Storybook-Integration

Diese Seite zeigt, wie Sie Code aus Storybook-Stories in Ihre VitePress-Dokumentation einbinden können. Durch die Kombination von Code-Beispielen und interaktiven Demos erhalten Entwickler ein besseres Verständnis der Komponenten.

## Grundlegende Code-Extraktion

Storybook speichert den Code jeder Story. Sie können diesen Code direkt in Ihre Dokumentation einbinden:

```jsx
// Beispiel einer Button-Story
export const Primary = () => ({
  components: { Button },
  template: '<Button variant="primary">Primärer Button</Button>'
});
```

Mit dem entsprechenden HTML-Code:

```html
<button class="btn btn--primary">Primärer Button</button>
```

Und hier sehen Sie das Ergebnis:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="100px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Code und Demo nebeneinander

Eine effektive Methode zur Dokumentation ist die Darstellung von Code und Demo nebeneinander:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px;">
  <div>
    <h3>Code</h3>
    
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Kartentitel</h3>
  </div>
  <div class="card-body">
    <p>Karteninhalt mit Text.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn--primary">Aktion</button>
  </div>
</div>
```
  </div>
  <div>
    <h3>Ergebnis</h3>
    <iframe
      src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
      width="100%"
      height="250px"
      style="border: 1px solid #ddd; border-radius: 4px;"
    ></iframe>
  </div>
</div>

## Varianten und ihre Code-Implementierung

Mit Storybook können Sie verschiedene Varianten einer Komponente demonstrieren und den entsprechenden Code anzeigen:

### Standard-Button

```html
<button class="btn">Standard-Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--default&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Primärer Button

```html
<button class="btn btn--primary">Primärer Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Sekundärer Button

```html
<button class="btn btn--secondary">Sekundärer Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--secondary&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Code für komplexe Komponenten

Bei komplexeren Komponenten ist es wichtig, alle relevanten Code-Teile zu zeigen:

### Tabelle mit Sortierung

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-table--sortable&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**HTML:**

```html
<table class="table table--sortable">
  <thead>
    <tr>
      <th class="sortable" data-sort="name">Name</th>
      <th class="sortable" data-sort="age">Alter</th>
      <th class="sortable" data-sort="city">Stadt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>32</td>
      <td>Berlin</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>28</td>
      <td>Hamburg</td>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>45</td>
      <td>München</td>
    </tr>
  </tbody>
</table>
```

**JavaScript:**

```js
// Sortierlogik für Tabellen
document.querySelectorAll('.sortable').forEach(header => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const column = header.dataset.sort;
    const direction = header.classList.contains('asc') ? 'desc' : 'asc';
    
    // Setze alle Header-Klassen zurück
    header.closest('tr').querySelectorAll('th').forEach(th => {
      th.classList.remove('asc', 'desc');
    });
    
    // Setze Sortierrichtung
    header.classList.add(direction);
    
    // Sortiere Zeilen
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const aValue = a.children[Array.from(header.parentNode.children).indexOf(header)].textContent;
      const bValue = b.children[Array.from(header.parentNode.children).indexOf(header)].textContent;
      
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    
    // Tabelle neu aufbauen
    rows.forEach(row => tbody.appendChild(row));
  });
});
```

## Responsiver Code

Zeigen Sie, wie responsiver Code implementiert wird:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=layout-responsive-grid--default&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px; resize: horizontal; overflow: auto;"
></iframe>

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="p-4 bg-light">Element 1</div>
  <div class="p-4 bg-light">Element 2</div>
  <div class="p-4 bg-light">Element 3</div>
  <div class="p-4 bg-light">Element 4</div>
  <div class="p-4 bg-light">Element 5</div>
  <div class="p-4 bg-light">Element 6</div>
  <div class="p-4 bg-light">Element 7</div>
  <div class="p-4 bg-light">Element 8</div>
</div>
```

**Tipp:** Sie können die Größe dieses Beispiels verändern, um zu sehen, wie sich das Grid anpasst.

## Komponentenübergreifende Implementierung

Für komplexere Funktionen können mehrere Komponenten zusammenarbeiten:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=forms-search-filter--default&viewMode=story"
  width="100%"
  height="400px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Implementierung:**

```html
<div class="search-and-filter">
  <div class="search-bar">
    <input type="text" class="input" placeholder="Suchen..." id="search-input">
    <button class="btn btn--primary">Suchen</button>
  </div>
  
  <div class="filters mt-4">
    <div class="filter-group">
      <label>Kategorie</label>
      <select class="select" id="category-filter">
        <option value="">Alle</option>
        <option value="technology">Technologie</option>
        <option value="books">Bücher</option>
        <option value="clothing">Kleidung</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Preis</label>
      <div class="range-slider">
        <input type="range" min="0" max="100" value="50" class="slider" id="price-slider">
        <span class="slider-value">50€</span>
      </div>
    </div>
    
    <div class="filter-group">
      <label>Verfügbarkeit</label>
      <div class="checkbox-group">
        <label class="checkbox">
          <input type="checkbox" checked> Auf Lager
        </label>
        <label class="checkbox">
          <input type="checkbox"> Reduziert
        </label>
      </div>
    </div>
  </div>
  
  <div class="results mt-4">
    <p class="results-count">8 Ergebnisse gefunden</p>
    <!-- Ergebnisliste hier -->
  </div>
</div>
```

**JavaScript:**

```js
// Vereinfachter Code für die Suchfunktionalität
document.getElementById('search-input').addEventListener('input', updateResults);
document.getElementById('category-filter').addEventListener('change', updateResults);
document.getElementById('price-slider').addEventListener('input', function() {
  document.querySelector('.slider-value').textContent = this.value + '€';
  updateResults();
});

document.querySelectorAll('.checkbox input').forEach(checkbox => {
  checkbox.addEventListener('change', updateResults);
});

function updateResults() {
  // In einer realen Anwendung würde hier eine Filterfunktion implementiert
  const resultCount = Math.floor(Math.random() * 20);
  document.querySelector('.results-count').textContent = `${resultCount} Ergebnisse gefunden`;
}
```

## Zusammenspiel mit CSS-Framework

Zeigen Sie, wie Ihre Komponenten mit dem CSS-Framework der Casoon UI Library interagieren:

```html
<div class="card shadow-md rounded-lg overflow-hidden">
  <div class="card-header bg-primary text-white">
    <h3 class="card-title">Erweiterte Karte</h3>
  </div>
  <div class="card-body p-4">
    <p class="mb-4">Dieser Text verwendet Utility-Klassen für Abstände.</p>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-light p-2 rounded">Linke Spalte</div>
      <div class="bg-light p-2 rounded">Rechte Spalte</div>
    </div>
  </div>
  <div class="card-footer bg-light border-top p-3 flex justify-end">
    <button class="btn btn--secondary me-2">Abbrechen</button>
    <button class="btn btn--primary">Speichern</button>
  </div>
</div>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=examples-advanced-card--default&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Best Practices für Code-Beispiele

1. **Vollständigkeit**: Zeigen Sie den vollständigen Code, der benötigt wird, um ein Beispiel zu implementieren.
2. **Kontext**: Bieten Sie ausreichend Kontext, damit Entwickler verstehen, wie der Code funktioniert.
3. **Konsistenz**: Verwenden Sie konsistente Formatierung und Benennungskonventionen.
4. **Minimale Beispiele**: Halten Sie die Beispiele so einfach wie möglich, während sie dennoch das gewünschte Konzept demonstrieren.
5. **Interaktivität**: Ermöglichen Sie es Benutzern, mit dem Code zu interagieren, indem Sie Storybook-Demos einbinden.

Indem Sie diese Prinzipien befolgen, können Sie hochwertige Code-Beispiele erstellen, die Entwicklern helfen, Ihre Komponenten effektiv zu nutzen. 