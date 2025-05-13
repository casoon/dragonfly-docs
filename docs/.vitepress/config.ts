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
    outlineTitle: 'Auf dieser Seite',
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
      { text: 'Anleitung', link: '/guide/' },
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
          text: 'Stile',
          items: [
            { text: 'Design-Tokens', link: '/getting-started/tokens' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Themes', link: '/getting-started/themes' },
            { text: 'Icon-Sets', link: '/getting-started/iconsets' },
            { text: 'Utility-Klassen', link: '/getting-started/utilities' },
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
          text: 'Anleitung',
          items: [
            { text: 'Übersicht', link: '/guide/' },
            { text: 'Layer-System', link: '/guide/layer-system' },
            { text: 'Komponenten-System', link: '/guide/component-system' },
            { text: 'Theme-System', link: '/guide/theme-system' },
            { text: 'Icon-System', link: '/guide/icon-system' }
          ]
        },
        {
          text: 'Grundlagen',
          items: [
            { text: 'Farben', link: '/getting-started/tokens#farben' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Theming', link: '/getting-started/themes' },
            { text: 'Design-Tokens', link: '/getting-started/tokens' },
            { text: 'Effekte', link: '/guide/effects' },
            { text: 'Barrierefreiheit', link: '/getting-started/#zugänglichkeit' }
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
