import DefaultTheme from 'vitepress/theme'
import { UI_LIB_VERSION } from '../data/versions'
import { h } from 'vue'
import type { Theme } from 'vitepress'

// Import CSS from @casoon/dragonfly
import '@casoon/dragonfly/core.css'
import '@casoon/dragonfly/themes/day.css'

// Import custom components
import CustomNav from './components/CustomNav.vue'

// Import custom CSS
import './custom.css'

const theme: Theme = {
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
  },
  // Füge die CustomNav in die Standardnavigationsleiste ein
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(CustomNav)
    })
  }
}

export default theme 