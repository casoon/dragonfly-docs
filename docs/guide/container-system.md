# Container-System

Das Container-System der Casoon UI Library bietet eine konsistente Methode zur Verwaltung von Inhaltsbreiten und -abständen in Ihrer Anwendung.

## Module importieren

**Wichtig:** Das Container-System ist im `layout.css` Layer enthalten, welches `core.css` als Abhängigkeit hat. Stellen Sie sicher, dass diese in der richtigen Reihenfolge importiert werden:

```css
/* Notwendige Abhängigkeit */
@import 'casoon-ui-lib/core.css';

/* Layout-System, enthält Container */
@import 'casoon-ui-lib/layers/layout.css';
```

## Best Practices

- **Container für konsistente Breiten verwenden**: Nutzen Sie Container, um eine einheitliche Inhaltsbreite auf Ihrer gesamten Website zu gewährleisten.
- **Container-Varianten gezielt einsetzen**: Wählen Sie zwischen `.container`, `.container-fluid` und `.container-{breakpoint}` je nach Anforderung des Layouts.
- **Verschachtelte Container vermeiden**: Verschachteln Sie Container nur, wenn unbedingt nötig, um unerwartete Layout-Probleme zu vermeiden.
- **Container mit Grid kombinieren**: Container eignen sich hervorragend als Wrapper für Grid-Layouts, um konsistente Seitenränder zu gewährleisten.
- **Container-Abmessungen anpassen**: Passen Sie bei Bedarf die Container-Variablen an, um den Designanforderungen Ihres Projekts gerecht zu werden.
- **Container für Abschnitte verwenden**: Nutzen Sie Container, um verschiedene Seitenabschnitte visuell zu trennen und zu organisieren.
- **Responsive Überlegungen beachten**: Beachten Sie, wie sich Container auf verschiedenen Bildschirmgrößen verhalten, insbesondere bei Übergängen zwischen Breakpoints. 