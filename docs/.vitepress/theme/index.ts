import DefaultTheme from 'vitepress/theme'
import { UI_LIB_VERSION } from '../data/versions'
import { h } from 'vue'
import type { Theme } from 'vitepress'

// Import custom components
import CustomNav from './components/CustomNav.vue'

// Import CSS files from @casoon/ui-lib
import '@casoon/ui-lib/core.css'
import '@casoon/ui-lib/themes/day.css'
import '@casoon/ui-lib/components/button.css'
import '@casoon/ui-lib/components/badge.css'
import '@casoon/ui-lib/components/alert.css'
import '@casoon/ui-lib/components/card.css'
import '@casoon/ui-lib/components/chip.css'
import '@casoon/ui-lib/components/tooltip.css'
import '@casoon/ui-lib/components/spinner.css'
import '@casoon/ui-lib/components/avatar.css'

// Import custom CSS
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
  },
  // Ersetze die Standardnavigation mit unserer benutzerdefinierten Navigation
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(CustomNav)
    })
  }
} as Theme 