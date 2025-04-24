# Component Grid

Die Component Grid ist ein flexibles Grid-System für die Darstellung von Komponenten in der Dokumentation.

## Verwendung

```markdown
<div class="component-grid">
  <div class="component-card">
    <h3>Button</h3>
    <p>Ein vielseitiger Button mit verschiedenen Varianten</p>
    <a href="/getting-started/button">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Input</h3>
    <p>Eingabefelder mit verschiedenen Typen und Zuständen</p>
    <a href="/getting-started/input">Mehr erfahren</a>
  </div>
</div>
```

## Eigenschaften

- Responsive Grid-Layout
- Automatische Anpassung der Spaltenanzahl
- Einheitliche Abstände zwischen den Komponenten

## Styling

```css
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
```

## Best Practices

- Verwenden Sie die Component Grid für die Darstellung von Komponenten-Karten
- Stellen Sie sicher, dass alle Komponenten-Karten die gleiche Höhe haben
- Nutzen Sie die responsive Eigenschaften für verschiedene Bildschirmgrößen 