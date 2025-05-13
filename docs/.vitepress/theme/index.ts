import DefaultTheme from 'vitepress/theme'
import { UI_LIB_VERSION } from '../data/versions'
import { h } from 'vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Stellt die UI-Lib-Version global für alle Markdown-Dateien bereit
    app.config.globalProperties.$uiLibVersion = UI_LIB_VERSION
  }
} as Theme 