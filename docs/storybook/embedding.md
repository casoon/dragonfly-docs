---
title: Einbetten von Storybook Stories
category: Storybook
---

# Einbetten von Storybook Stories

Diese Anleitung erklärt, wie Sie Storybook-Stories direkt in Ihre VitePress-Dokumentation einbetten können. Durch die Einbettung von interaktiven Beispielen wird Ihre Dokumentation dynamischer und hilfreicher für Benutzer.

## Methoden zum Einbetten von Stories

Es gibt mehrere Möglichkeiten, Storybook-Stories in VitePress einzubetten:

### 1. Iframe-Integration

Die einfachste Methode ist die Verwendung eines iframes, der auf die veröffentlichte Storybook-URL verweist:

```html
<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>
```

**Ergebnis:**

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### 2. Benutzerdefinierte Vue-Komponente

Für eine bessere Integration können Sie eine benutzerdefinierte Vue-Komponente erstellen:

Erstellen Sie eine `StoryEmbed.vue` Komponente in Ihrem `.vitepress/theme/components` Verzeichnis:

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
      return `https://casoon.github.io/ui-lib/storybook/iframe.html?id=${this.id}&viewMode=story`;
    },
    fullStoryUrl() {
      return `https://casoon.github.io/ui-lib/storybook/?path=/story/${this.id}`;
    }
  }
};
</script>

<style scoped>
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
</style>
```

Registrieren Sie diese Komponente in Ihrer `.vitepress/theme/index.js` Datei:

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

Dann können Sie die Komponente in Ihrer Markdown-Datei verwenden:

```md
<StoryEmbed id="components-button--primary" height="200" title="Primärer Button" />
```

### 3. Storybook Addon für Docs

Für eine noch tiefere Integration können Sie das offizielle [Storybook Addon für VitePress](https://github.com/storybookjs/addon-docs) verwenden. Diese Methode erfordert zusätzliche Konfiguration, bietet aber die beste Integration.

## Story-IDs finden

Um die richtige Story-ID für das Einbetten zu finden:

1. Öffnen Sie die gewünschte Story in Storybook
2. Schauen Sie in die URL: `https://casoon.github.io/ui-lib/storybook/?path=/story/components-button--primary`
3. Der Teil nach `/story/` ist die Story-ID: `components-button--primary`

## Beispiele für eingebettete Stories

### Button-Komponente

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--variants&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Card-Komponente

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
  width="100%"
  height="350px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Responsivität und Größenanpassung

Bei der Einbettung von Stories ist es wichtig, die Responsivität zu berücksichtigen:

- Verwenden Sie relative Breiten (`width="100%"`) für das iframe
- Passen Sie die Höhe je nach Inhalt an
- Berücksichtigen Sie das Verhalten auf mobilen Geräten

## Best Practices

- **Kombinieren Sie Code und Story**: Zeigen Sie den Code zusammen mit der eingebetteten Story, um den Kontext zu verdeutlichen
- **Minimieren Sie die Anzahl**: Betten Sie nur relevante Stories ein, zu viele eingebetteten iframes können die Ladezeit verlangsamen
- **Bieten Sie Alternativen**: Fügen Sie immer einen Link zur vollständigen Storybook-Ansicht hinzu für Benutzer, die mehr Interaktivität wünschen
- **Testen Sie auf verschiedenen Geräten**: Stellen Sie sicher, dass Ihre eingebetteten Stories auf verschiedenen Bildschirmgrößen gut aussehen

## Fehlerbehebung

### Story wird nicht geladen

- Überprüfen Sie die Story-ID
- Stellen Sie sicher, dass Storybook öffentlich zugänglich ist
- Prüfen Sie, ob Content Security Policies (CSP) die Einbettung blockieren

### Layoutprobleme

- Passen Sie die Höhe des iframes an den Inhalt an
- Verwenden Sie CSS, um Overflow-Probleme zu beheben
- Berücksichtigen Sie das Thema der VitePress-Dokumentation (dunkel/hell) 