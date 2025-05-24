import DefaultTheme from 'vitepress/theme'
import { UI_LIB_VERSION } from '../data/versions'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Stellt die UI-Lib-Version global für alle Markdown-Dateien bereit
    app.config.globalProperties.$uiLibVersion = UI_LIB_VERSION
  },
  setup() {
    // Add theme-day class to document body
    if (typeof document !== 'undefined') {
      document.body.classList.add('theme-day')
    }
  }
} as Theme 