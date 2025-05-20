---
title: Storybook-Integration einrichten
category: Storybook
---

# Storybook-Integration einrichten

Diese Anleitung erklärt Schritt für Schritt, wie Sie Storybook in Ihre VitePress-Dokumentation integrieren können. Diese Integration ermöglicht es, interaktive Beispiele direkt in Ihrer Dokumentation zu präsentieren.

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie folgende Voraussetzungen erfüllen:

- Node.js (v14 oder höher)
- Ein bestehendes VitePress-Projekt
- Zugriff auf eine Storybook-Installation (entweder lokal oder remote)

## 1. Storybook einrichten

Falls Sie noch kein Storybook in Ihrem Projekt haben, können Sie es wie folgt installieren:

```bash
# Navigation zum Projektverzeichnis
cd mein-projekt

# Storybook-Installation
npx storybook@latest init
```

Dieser Befehl richtet Storybook in Ihrem Projekt ein und erstellt eine Basis-Konfiguration.

## 2. Storybook-Komponenten erstellen

Erstellen Sie Stories für Ihre Komponenten. Hier ist ein einfaches Beispiel für eine Button-Komponente:

```js
// button.stories.js
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'outline'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primärer Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Sekundärer Button'
};
```

## 3. Storybook deployen

Damit Ihre Stories in VitePress eingebettet werden können, müssen sie öffentlich zugänglich sein. Deployen Sie Storybook mit einem statischen Website-Hosting-Dienst:

```bash
# Storybook als statische Website bauen
npm run build-storybook

# Die erzeugte Anwendung liegt im storybook-static Verzeichnis
# Dieses Verzeichnis können Sie auf einem Hosting-Dienst Ihrer Wahl deployen
```

Falls Sie GitHub Pages verwenden, können Sie das Deployment automatisieren:

```yaml
# .github/workflows/storybook.yml
name: Storybook Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Build Storybook
        run: npm run build-storybook
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: storybook-static
          target-folder: storybook
```

## 4. VitePress-Konfiguration anpassen

### Erstellen Sie eine benutzerdefinierte Komponente

Erstellen Sie eine Vue-Komponente zum Einbetten von Storybook in VitePress:

```
mkdir -p docs/.vitepress/theme/components
```

Erstellen Sie die Datei `docs/.vitepress/theme/components/StoryEmbed.vue`:

```vue
<template>
  <div class="story-embed">
    <iframe
      :src="storyUrl"
      :style="{ height: height + 'px' }"
      width="100%"
      :title="title"
      allowfullscreen
      frameborder="0"
    ></iframe>
    <div class="story-controls" v-if="showControls">
      <a :href="fullStoryUrl" target="_blank" rel="noopener noreferrer">
        In Storybook öffnen
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 300
    },
    title: {
      type: String,
      default: 'Storybook Story'
    },
    showControls: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    storyUrl() {
      // Passen Sie die URL an Ihre Storybook-Domain an
      return `https://casoon.github.io/ui-lib/storybook/iframe.html?id=${this.id}&viewMode=story`;
    },
    fullStoryUrl() {
      return `https://casoon.github.io/ui-lib/storybook/?path=/story/${this.id}`;
    }
  }
};
</script>

<style>
.story-embed {
  margin: 2rem 0;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  overflow: hidden;
}

.story-embed iframe {
  border: none;
}

.story-controls {
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  text-align: right;
  border-top: 1px solid #eaeaea;
}

.story-controls a {
  font-size: 0.85rem;
  color: #3451b2;
  text-decoration: none;
}

.story-controls a:hover {
  text-decoration: underline;
}

/* Dark mode support */
.dark .story-embed {
  border-color: #333;
}

.dark .story-controls {
  background-color: #333;
}

.dark .story-controls a {
  color: #58a6ff;
}
</style>
```

### Komponente im Theme registrieren

Erstellen oder bearbeiten Sie die Datei `docs/.vitepress/theme/index.js`:

```js
import DefaultTheme from 'vitepress/theme';
import StoryEmbed from './components/StoryEmbed.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('StoryEmbed', StoryEmbed);
  }
};
```

## 5. Komponente in Markdown-Dokumenten verwenden

Jetzt können Sie die Komponente in Ihren Markdown-Dokumenten verwenden:

```md
# Button-Komponente

Die Button-Komponente ist ein grundlegendes UI-Element für Benutzerinteraktionen.

## Primärer Button

<StoryEmbed id="components-button--primary" height="200" title="Primärer Button" />

## Sekundärer Button

<StoryEmbed id="components-button--secondary" height="200" title="Sekundärer Button" />
```

## 6. Erweiterte Integration

### Automatisierung der Integration

Um die Integration noch nahtloser zu gestalten, können Sie ein VitePress-Plugin erstellen, das automatisch Stories basierend auf den Komponenten einfügt:

```js
// .vitepress/plugins/storybook-integrator.js
export default function storybookIntegrator() {
  return {
    name: 'vitepress-storybook-integrator',
    // Plugin-Logik hier implementieren
  };
}
```

### Kommunikation zwischen VitePress und Storybook

Für fortgeschrittene Anwendungsfälle können Sie eine Kommunikation zwischen VitePress und den eingebetteten Storybook-iframes einrichten:

```js
// Senden von Nachrichten an das iframe
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage(
  {
    type: 'UPDATE_ARGS',
    args: { variant: 'primary' }
  },
  '*'
);

// Empfangen von Nachrichten vom iframe
window.addEventListener('message', (event) => {
  if (event.data.type === 'STORY_RENDERED') {
    console.log('Story wurde gerendert:', event.data);
  }
});
```

## Fehlerbehebung

### CORS-Probleme

Falls Sie auf CORS-Probleme stoßen, stellen Sie sicher, dass Ihre Storybook-Domain in der Content-Security-Policy (CSP) Ihrer VitePress-Seite erlaubt ist:

```js
// .vitepress/config.js
export default {
  head: [
    ['meta', {
      'http-equiv': 'Content-Security-Policy',
      content: `frame-src https://casoon.github.io/;`
    }]
  ]
};
```

### iframes werden nicht geladen

Überprüfen Sie die folgenden Punkte:

1. Ist die Story-ID korrekt?
2. Ist die Storybook-URL erreichbar?
3. Werden iframes von Ihrem Browser oder einer Erweiterung blockiert?

## Zusammenfassung

Die Integration von Storybook in VitePress bietet eine leistungsstarke Möglichkeit, interaktive Komponentenbeispiele direkt in Ihrer Dokumentation zu präsentieren. Durch die Kombination von detaillierten Erklärungen und interaktiven Demos wird Ihre Dokumentation benutzerfreundlicher und effektiver. 