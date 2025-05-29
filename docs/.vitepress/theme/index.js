import DefaultTheme from 'vitepress/theme'
import { UI_LIB_VERSION } from '../data/versions'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Füge die Versionsinformation als globale Eigenschaft hinzu
    app.config.globalProperties.$ui_lib_version = UI_LIB_VERSION
  }
} 