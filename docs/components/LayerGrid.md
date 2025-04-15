# Layer Grid

Die Layer Grid ist ein spezialisiertes Grid-System für die Darstellung von Design-Layern in der Dokumentation.

## Verwendung

```markdown
<div class="layer-grid">
  <div class="layer-card">
    <h3>Base Layer</h3>
    <p>Grundlegende Design-Elemente</p>
    <a href="/foundation/base">Mehr erfahren</a>
  </div>
  <div class="layer-card">
    <h3>Component Layer</h3>
    <p>Wiederverwendbare UI-Komponenten</p>
    <a href="/foundation/components">Mehr erfahren</a>
  </div>
</div>
```

## Eigenschaften

- Responsive Grid-Layout
- Optimiert für Layer-Karten
- Automatische Anpassung an verschiedene Bildschirmgrößen

## Styling

```css
.layer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .layer-grid {
    grid-template-columns: 1fr;
  }
}
```

## Best Practices

- Verwenden Sie die Layer Grid für die Darstellung von Design-Layern
- Gruppieren Sie verwandte Layer zusammen
- Nutzen Sie die responsive Eigenschaften für mobile Ansichten 