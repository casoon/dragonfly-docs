import DefaultTheme from "vitepress/theme";
import { UI_LIB_VERSION } from "../data/versions";
import type { Theme } from "vitepress";

// Import CSS from @casoon/dragonfly
//import "@casoon/dragonfly/index.css";
//import "@casoon/dragonfly/themes/variants/day-night/day.css";

// Import custom CSS
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Make UI library version available globally
    app.config.globalProperties.$uiLibVersion = UI_LIB_VERSION;
  },
  setup() {
    // Add theme-day class to document body on client-side
    if (typeof document !== "undefined") {
      document.body.classList.add("theme-day");
    }
  },
  // Layout() entfernt - verwende Standard VitePress Layout
};

export default theme;
