# Komponenten

Die Casoon UI Library bietet eine Vielzahl von wiederverwendbaren Komponenten für moderne Webanwendungen.

## Übersicht

### Grundlegende Komponenten

- [Button](/components/button) - Interaktive Schaltflächen
- [Input](/components/input) - Eingabefelder
- [Modal](/components/modal) - Dialogfenster
- [Alert](/components/alert) - Benachrichtigungen
- [Toast](/components/toast) - Popup-Benachrichtigungen
- [Badge](/components/badge) - Statusanzeigen
- [Tooltip](/components/tooltip) - Kontexthilfen

### Navigationskomponenten

- [Navigation](/components/navigation) - Hauptnavigation
- [Sidebar](/components/sidebar) - Seitenleiste
- [Tabs](/components/tabs) - Registerkarten
- [Dropdown](/components/dropdown) - Dropdown-Menüs
- [Pagination](/components/pagination) - Seitenzahlen

### Layout-Komponenten

- [Card](/components/card) - Karten
- [Table](/components/table) - Tabellen
- [Accordion](/components/accordion) - Aufklappbare Bereiche
- [Slider](/components/slider) - Schieberegler
- [Progress](/components/progress) - Fortschrittsbalken

### Formulare

- [Forms](/components/forms) - Formular-Komponenten
- [Input](/components/input) - Eingabefelder
- [Dropdown](/components/dropdown) - Auswahlfelder
- [Slider](/components/slider) - Schieberegler

### Effekte

- [Effects](/components/effects) - Animationen und Übergänge

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation
- Fügen Sie ARIA-Attribute hinzu

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Komponenten an mobile Geräte an

### Performance

- Minimieren Sie CSS und JavaScript
- Optimieren Sie die Ladezeit
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie Lazy Loading für große Komponenten

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/components.module.css';
---

<button class="btn btn--primary">
  Primärer Button
</button>
```

### React

```jsx
import 'casoon-ui-lib/modules/components.module.css';

function App() {
  return (
    <button className="btn btn--primary">
      Primärer Button
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="btn btn--primary">
    Primärer Button
  </button>
</template>

<script setup>
import 'casoon-ui-lib/modules/components.module.css';
</script>
``` 