# Installation

Die Casoon UI Library kann auf verschiedene Arten in Ihr Projekt integriert werden. Wählen Sie die Methode, die am besten zu Ihrem Projekt passt.

## NPM Installation

```bash
npm install casoon-ui-lib
```

## Yarn Installation

```bash
yarn add casoon-ui-lib
```

## CDN Einbindung

Fügen Sie die folgenden Links in den `<head>` Ihrer HTML-Datei ein:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/dist/casoon-ui.min.css">

<!-- JavaScript -->
<script src="https://unpkg.com/casoon-ui-lib/dist/casoon-ui.min.js"></script>
```

## Framework Integration

### React

```bash
npm install casoon-ui-lib @types/casoon-ui-lib
```

```tsx
import 'casoon-ui-lib/dist/casoon-ui.min.css';
import { Button, Input, Modal } from 'casoon-ui-lib/react';

function App() {
  return (
    <div>
      <Button variant="primary">Klick mich</Button>
      <Input placeholder="Eingabe..." />
      <Modal isOpen={true}>
        <h2>Modal Titel</h2>
        <p>Modal Inhalt</p>
      </Modal>
    </div>
  );
}
```

### Vue

```bash
npm install casoon-ui-lib
```

```vue
<template>
  <div>
    <c-button variant="primary">Klick mich</c-button>
    <c-input placeholder="Eingabe..." />
    <c-modal :is-open="true">
      <h2>Modal Titel</h2>
      <p>Modal Inhalt</p>
    </c-modal>
  </div>
</template>

<script>
import 'casoon-ui-lib/dist/casoon-ui.min.css';
import { Button, Input, Modal } from 'casoon-ui-lib/vue';

export default {
  components: {
    'c-button': Button,
    'c-input': Input,
    'c-modal': Modal
  }
}
</script>
```

### Angular

```bash
npm install casoon-ui-lib
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'casoon-ui-lib/dist/casoon-ui.min.css';
import { CasoonUIModule } from 'casoon-ui-lib/angular';

@NgModule({
  imports: [
    BrowserModule,
    CasoonUIModule
  ]
})
export class AppModule { }
```

```html
<div>
  <c-button variant="primary">Klick mich</c-button>
  <c-input placeholder="Eingabe..."></c-input>
  <c-modal [isOpen]="true">
    <h2>Modal Titel</h2>
    <p>Modal Inhalt</p>
  </c-modal>
</div>
```

### Astro

```bash
npm install casoon-ui-lib
```

```astro
---
import 'casoon-ui-lib/dist/casoon-ui.min.css';
import { Button, Input, Modal } from 'casoon-ui-lib/astro';
---

<Button variant="primary">Klick mich</Button>
<Input placeholder="Eingabe..." />
<Modal isOpen={true}>
  <h2>Modal Titel</h2>
  <p>Modal Inhalt</p>
</Modal>
```

## Theme Anpassung

### CSS Variablen

```css
:root {
  --color-primary: #0073ff;
  --color-secondary: #6c757d;
  --font-family: system-ui, -apple-system, sans-serif;
  --border-radius: 0.25rem;
  --spacing-unit: 1rem;
}
```

### SCSS Mixins

```scss
@use 'casoon-ui-lib/scss/mixins' as *;

.custom-component {
  @include button-base;
  @include button-variant(primary);
  @include button-size(large);
}
```

## Best Practices

### Performance

- Verwenden Sie Tree Shaking
- Laden Sie nur benötigte Komponenten
- Optimieren Sie CSS-Bundles
- Nutzen Sie Code Splitting

### Wartbarkeit

- Halten Sie Abhängigkeiten aktuell
- Dokumentieren Sie Anpassungen
- Verwenden Sie Versionierung
- Implementieren Sie Tests

### Zugänglichkeit

- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie Tastaturnavigation sicher
- Implementieren Sie Screenreader-Unterstützung
- Testen Sie mit verschiedenen Geräten

## Troubleshooting

### Häufige Probleme

1. **CSS-Konflikte**
   - Verwenden Sie CSS-Modules
   - Setzen Sie spezifische Selektoren
   - Nutzen Sie CSS-Reset

2. **JavaScript-Fehler**
   - Überprüfen Sie die Version
   - Aktualisieren Sie Abhängigkeiten
   - Debuggen Sie mit DevTools

3. **Build-Probleme**
   - Konfigurieren Sie Bundler
   - Optimieren Sie Assets
   - Überprüfen Sie Pfade

### Support

- Dokumentation lesen
- GitHub Issues prüfen
- Community-Forum nutzen
- Support-Ticket erstellen 