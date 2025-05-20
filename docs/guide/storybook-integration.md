---
title: Storybook-Integration
category: Guide
---

# Storybook-Integration in die Casoon UI Dokumentation

Die Casoon UI Library nutzt VitePress für die Hauptdokumentation und Storybook für interaktive Komponenten-Demos. Die Integration erfolgt per `<iframe>`, sodass die Doku und die Demos nahtlos zusammenarbeiten.

## 1. Storybook starten

```bash
npm run storybook
```

Storybook ist dann unter http://localhost:6006 erreichbar.

## 2. Storybook in VitePress einbetten

Füge in einer beliebigen Markdown-Datei folgenden Code ein:

```markdown
## Interaktive Button-Demo

<iframe
  src="http://localhost:6006/iframe.html?id=components-button--primary"
  style="width: 400px; height: 120px; border: none;"
></iframe>
```

Im Deployment kann das gebaute Storybook z.B. unter `/storybook/` ausgeliefert werden:

```markdown
<iframe
  src="/storybook/iframe.html?id=components-button--primary"
  style="width: 400px; height: 120px; border: none;"
></iframe>
```

## 3. Build & Deployment

- Baue zuerst die VitePress-Doku:
  ```bash
  npm run docs:build
  ```
- Baue dann Storybook:
  ```bash
  npm run build-storybook
  ```
- Das gebaute Storybook liegt dann in `docs/public/storybook` und ist nach dem Deployment unter `/storybook/` erreichbar.

## Vorteile
- Interaktive, echte Komponenten-Demos in der Doku
- Keine Code-Duplikation
- Addons wie Accessibility, Controls, Actions funktionieren weiterhin

## Best Practices
- Stories und Doku im gleichen Repo pflegen
- In der Doku immer auf die aktuelle Storybook-URL verlinken
- Bei größeren Komponenten eigene Stories pro Variante anlegen 