# Flexbox-System

Das Flexbox-System der Casoon UI Library ermöglicht flexible und responsive Layouts für eindimensionale Anordnungen von Elementen.

## Module importieren

**Wichtig:** Das Flexbox-System ist im `layout.css` Layer enthalten, welches `core.css` als Abhängigkeit hat. Stellen Sie sicher, dass diese in der richtigen Reihenfolge importiert werden:

```css
/* Notwendige Abhängigkeit */
@import '@casoon/ui-lib/core.css';

/* Layout-System, enthält Flexbox */
@import '@casoon/ui-lib/layout.css';
```

## Best Practices

- **Definierte Höhe für Flex-Container:** Geben Sie Ihren Flex-Containern eine definierte Höhe, wenn Sie vertikale Ausrichtung verwenden möchten.

- **Flex-Grow für ungleichmäßige Verteilung:** Nutzen Sie `flex-grow` unterschiedlich für Elemente, die proportional mehr Platz einnehmen sollen.

- **Flex-Wrap für responsive Designs:** Verwenden Sie `flex-wrap: wrap` für Container, deren Elemente bei kleinen Bildschirmen umbrechen sollen.

- **Reihenfolge strategisch einsetzen:** Nutzen Sie die `order`-Eigenschaft, um die visuelle Reihenfolge von Elementen zu ändern, ohne die DOM-Struktur zu verändern.

- **Verschachtelte Flex-Container begrenzen:** Zu viele verschachtelte Flex-Container können die Performance beeinträchtigen und die Komplexität erhöhen.

- **Flexbox mit Grid kombinieren:** Verwenden Sie Flexbox für eindimensionale Layouts und Grid für zweidimensionale Layouts.

- **Gaps statt Margins verwenden:** Nutzen Sie die `gap`-Eigenschaft für konsistente Abstände zwischen Flex-Elementen.

- **Komponenten-Layout optimieren:** Flexbox eignet sich besonders gut für das Layout einzelner Komponenten oder UI-Elemente. 