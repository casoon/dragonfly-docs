import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { UI_LIB_VERSION } from './data/versions'

export default defineConfig({
  title: 'Casoon UI Library',
  description: 'Eine moderne, flexible und zugängliche Komponentenbibliothek',
  base: "/ui-docs/",
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'stylesheet', href: '/casoon-ui-docs/custom.css' }]
  ],

  vite: {
    plugins: [vueJsx()],
    ssr: {
      noExternal: ['vitepress']
    },
    define: {
      // Stelle die Version als globale Konstante für Client-Code bereit
      __UI_LIB_VERSION__: JSON.stringify(UI_LIB_VERSION)
    }
  },

  themeConfig: {
    outlineTitle: 'Übersicht',
    darkModeSwitchLabel: 'Erscheinungsbild',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück nach oben',
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    lastUpdatedText: 'Zuletzt aktualisiert',
    langMenuLabel: 'Sprache ändern',
    notFound: {
      title: 'Seite nicht gefunden',
      quote: 'Es tut uns leid, aber wir konnten die Seite, nach der Sie suchen, nicht finden.',
      linkText: 'Zur Startseite'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Suchen',
            buttonAriaLabel: 'Suchen'
          },
          modal: {
            noResultsText: 'Keine Ergebnisse für',
            resetButtonTitle: 'Suchfilter zurücksetzen',
            footer: {
              selectText: 'Auswählen',
              navigateText: 'Navigieren',
              closeText: 'Schließen'
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Erste Schritte', link: '/getting-started/' },
      { text: 'Komponenten', link: '/components/' },
      { text: 'Effekte', link: '/guide/effects-system' },
      { text: 'GitHub', link: 'https://github.com/casoon/ui-lib' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casoon/ui-lib' }
    ],

    footer: {
      message: `Version ${UI_LIB_VERSION} | MIT License`,
      copyright: 'Copyright © 2025 Casoon'
    },

    sidebar: {
      '/getting-started/': [
        {
          text: 'Erste Schritte',
          items: [
            { text: 'Einführung', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
          ]
        },
        {
          text: 'Grundlegende Konzepte',
          items: [
            { text: 'Design-Tokens', link: '/getting-started/tokens' },
            { text: 'Layer-System', link: '/guide/layer-system' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Themes', link: '/getting-started/themes' }
          ]
        },
        {
          text: 'Assets & Utilities',
          items: [
            { text: 'Icon-Sets', link: '/getting-started/iconsets' },
            { text: 'Utility-Klassen', link: '/getting-started/utilities' }
          ]
        },
        {
          text: 'Hilfe',
          items: [
            { text: 'Best Practices', link: '/getting-started/#best-practices' },
            { text: 'FAQ', link: '/getting-started/#häufige-fragen-faq' },
            { text: 'Fehlerbehebung', link: '/getting-started/#troubleshooting' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basis-Komponenten',
          items: [
            { text: 'Übersicht', link: '/components/' },
            { text: 'Hinweis', link: '/components/alert/' },
            { text: 'Avatar', link: '/components/avatar/' },
            { text: 'Abzeichen', link: '/components/badge/' },
            { text: 'Button', link: '/components/button/' },
            { text: 'Karte', link: '/components/card/' },
            { text: 'Chip', link: '/components/chip/' },
            { text: 'Code', link: '/components/code/' },
            { text: 'Ladeindikator', link: '/components/spinner/' },
            { text: 'Tooltip', link: '/components/tooltip/' }
          ]
        },
        {
          text: 'Formular-Komponenten',
          items: [
            { text: 'Checkbox', link: '/components/checkbox/' },
            { text: 'Datei', link: '/components/file/' },
            { text: 'Formular', link: '/components/forms/' },
            { text: 'Eingabefeld', link: '/components/input/' },
            { text: 'Eingabegruppe', link: '/components/input-group/' },
            { text: 'Radio', link: '/components/radio/' },
            { text: 'Auswahl', link: '/components/select/' },
            { text: 'Schieberegler', link: '/components/slider/' },
            { text: 'Schalter', link: '/components/switch/' },
            { text: 'Textbereich', link: '/components/textarea/' }
          ]
        },
        {
          text: 'Layout-Komponenten',
          items: [
            { text: 'Fußzeile', link: '/components/footer/' },
            { text: 'Kopfzeile', link: '/components/header/' },
            { text: 'Seitenleiste', link: '/components/sidebar/' },
            { text: 'Tabelle', link: '/components/table/' },
            { text: 'Tabs', link: '/components/tabs/' }
          ]
        },
        {
          text: 'Feedback-Komponenten',
          items: [
            { text: 'Dialog', link: '/components/modal/' },
            { text: 'Benachrichtigung', link: '/components/notification/' },
            { text: 'Fortschritt', link: '/components/progress/' },
            { text: 'Platzhalter', link: '/components/skeleton/' },
            { text: 'Toast', link: '/components/toast/' }
          ]
        },
        {
          text: 'Erweiterte Komponenten',
          items: [
            { text: 'Blog', link: '/components/blog/' },
            { text: 'Hamburger-Menü', link: '/components/hamburger/' },
            { text: 'Widget', link: '/components/widget/' },
            { text: 'Assistent', link: '/components/wizard/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Einführung', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Layer-System', link: '/guide/layer-system' },
            { text: 'Core CSS System', link: '/guide/core-css-system' },
            { text: 'Farbsystem', link: '/guide/colors-system' },
            { text: 'Color-Mix System', link: '/guide/color-mix-system' },
            { text: 'Theme-System', link: '/guide/theme-system' },
            { text: 'CSS Variablen', link: '/guide/css-variablen' },
            { text: 'Modulares Komponenten-System', link: '/guide/modulare-komponenten-system' },
            { text: 'Responsive Anpassungen', link: '/guide/responsive-anpassungen' },
            { text: 'Utility-Klassen', link: '/guide/utility-klassen' },
          ]
        }
      ],
      '/guide/effects-system': [
        {
          text: 'Effekt-System',
          items: [
            { text: 'Übersicht', link: '/guide/effects-system' }
          ]
        },
        {
          text: 'Visuelle Effekte',
          items: [
            { text: '3D-Effekte', link: '/guide/effects/visual/3d' },
            { text: 'Filter-Effekte', link: '/guide/effects/visual/filters' },
            { text: 'Schatten-Effekte', link: '/guide/effects/visual/shadows' },
            { text: 'Gradient-Effekte', link: '/guide/effects/visual/gradient' },
            { text: 'Muster & Texturen', link: '/guide/effects/visual/patterns' },
            { text: 'Partikel-Effekte', link: '/guide/effects/visual/particles' },
            { text: 'Morphing-Effekte', link: '/guide/effects/visual/morph' }
          ]
        },
        {
          text: 'Interaktions-Effekte',
          items: [
            { text: 'Hover-Effekte', link: '/guide/effects/interaction/hover' },
            { text: 'Fokus-Effekte', link: '/guide/effects/interaction/focus' },
            { text: 'Aktiv-Effekte', link: '/guide/effects/interaction/active' },
            { text: 'Ripple-Effekte', link: '/guide/effects/interaction/ripple' },
            { text: 'Scroll-Effekte', link: '/guide/effects/interaction/scroll' }
          ]
        },
        {
          text: 'Status-Effekte',
          items: [
            { text: 'Lade-Effekte', link: '/guide/effects/state/loading' },
            { text: 'Erfolgs-Effekte', link: '/guide/effects/state/success' },
            { text: 'Fehler-Effekte', link: '/guide/effects/state/error' },
            { text: 'Warnungs-Effekte', link: '/guide/effects/state/warning' },
            { text: 'Deaktivierte Zustände', link: '/guide/effects/state/disabled' }
          ]
        }
      ],
      '/themes/': [
        {
          text: 'Themes',
          items: [
            { text: 'Übersicht', link: '/themes/' },
            { text: 'CSS-Variablen', link: '/themes/custom-properties' }
          ]
        }
      ]
    }
  }
})
