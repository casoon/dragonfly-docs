import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { UI_LIB_VERSION } from "./data/versions";
import { generateNav, generateSidebar } from "./data/generateNavAndSidebar.js";

// Benutzerdefiniertes Plugin für CSS-Imports aus Node-Modulen
function cssImportPlugin() {
  const nodeModulesDir = "../../node_modules/";

  return {
    name: "css-transform",
    transform(code, id) {
      // Ignoriere Nicht-CSS-Dateien
      if (!id.endsWith(".css")) return null;

      // Wenn es ein direkter Import aus node_modules ist
      if (id.includes("@casoon/dragonfly")) {
        console.log(`Transformiere CSS-Import: ${id}`);

        // Tatsächlichen CSS-Inhalt laden
        try {
          const actualPath = id.replace(
            "@casoon/dragonfly",
            nodeModulesDir + "@casoon/dragonfly",
          );
          console.log(`Versuch, Datei zu laden: ${actualPath}`);
          return null; // Lasse Vite die Datei laden
        } catch (error) {
          console.error(`Fehler beim Laden von ${id}:`, error);
          return null;
        }
      }

      return null;
    },
  };
}

export default defineConfig({
  title: "Dragonfly UI Library",
  description: "A modern, flexible and accessible component library",
  base: "/dragonfly-docs/",
  ignoreDeadLinks: true,

  head: [["link", { rel: "stylesheet", href: "/dragonfly-docs/custom.css" }]],

  vite: {
    plugins: [vueJsx(), cssImportPlugin()],
    ssr: {
      noExternal: ["vitepress"],
    },
    define: {
      // Nur die Standard-Variante für Vite
      __UI_LIB_VERSION__: JSON.stringify(UI_LIB_VERSION),
    },
    optimizeDeps: {
      exclude: ["@casoon/dragonfly"],
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        external: [/^@casoon\/dragonfly\/.*/],
        preserveEntrySignatures: "strict",
      },
    },
    server: {
      fs: {
        // Erlaube den Zugriff auf Node-Module außerhalb des Projekts
        allow: ["..", "../../node_modules"],
      },
    },
    css: {
      // CSS-Modulunterstützung aktivieren
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },
  },

  themeConfig: {
    // Standard VitePress Navigation - nur Logo, kein Text
    logo: "/img/dragonfly.svg",
    siteTitle: false, // Entfernt "Dragonfly UI" Text neben dem Logo

    // Labels für UI-Elemente
    outlineTitle: "On this page",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Back to top",
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    lastUpdatedText: "Last updated",
    langMenuLabel: "Change language",
    notFound: {
      title: "Page not found",
      quote: "Sorry, we could not find the page you are looking for.",
      linkText: "Go to homepage",
    },

    // Search-Konfiguration
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },
          modal: {
            noResultsText: "No results for",
            resetButtonTitle: "Reset search filters",
            footer: {
              selectText: "Select",
              navigateText: "Navigate",
              closeText: "Close",
            },
          },
        },
      },
    },

    // Navigation - automatisch generiert
    nav: generateNav(),

    // Social Links
    socialLinks: [
      { icon: "github", link: "https://github.com/casoon/dragonfly" },
    ],

    footer: {
      message: `MIT License`,
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/casoon/ui-lib" target="_blank">Casoon UI Library</a>`,
    },

    // Sidebar automatisch aus Ordnerstruktur generieren
    sidebar: generateSidebar(),
  },
});
