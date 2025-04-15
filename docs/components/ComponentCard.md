# Component Card

Die Component Card ist eine wiederverwendbare Kartenkomponente für die Dokumentation von UI-Komponenten.

## Verwendung

```markdown
<div class="component-card">
  <h3>Button</h3>
  <p>Ein vielseitiger Button mit verschiedenen Varianten</p>
  <div class="component-card__content">
    <button class="button">Beispiel Button</button>
  </div>
  <a href="/getting-started/button">Mehr erfahren</a>
</div>
```

## Eigenschaften

| Eigenschaft | Typ | Beschreibung |
|------------|-----|--------------|
| title | String | Der Titel der Komponente |
| description | String | Eine kurze Beschreibung der Komponente |
| link | String | Der Link zur detaillierten Dokumentation |

## Styling

```css
.component-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.component-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.component-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.component-card__description {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
```

## Best Practices

- Halten Sie die Beschreibung kurz und prägnant
- Verwenden Sie aussagekräftige Titel
- Stellen Sie sicher, dass der Link zur korrekten Dokumentation führt
- Nutzen Sie den Content-Bereich für interaktive Beispiele 