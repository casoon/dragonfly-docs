import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'Casoon UI Library',
  description: 'Eine moderne, flexible und zugängliche Komponentenbibliothek',
  base: "/casoon-ui-docs/",
  ignoreDeadLinks: true,

  vite: {
    plugins: [vueJsx()],
    ssr: {
      noExternal: ['vitepress']
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Components', link: '/components/' },
      { text: 'Foundation', link: '/foundation/colors' },
      { text: 'GitHub', link: 'https://github.com/casoon/casoon-ui-lib' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casoon/casoon-ui-lib' }
    ],

    footer: {
      message: 'Version 0.0.3 | MIT License',
      copyright: 'Copyright © 2024 Casoon'
    },

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Einführung', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Design Tokens', link: '/getting-started/tokens' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Utilities', link: '/getting-started/utilities' },
            { text: 'Best Practices', link: '/getting-started/#best-practices' },
            { text: 'FAQ', link: '/getting-started/#häufige-fragen-faq' },
            { text: 'Troubleshooting', link: '/getting-started/#troubleshooting' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Grundlegende Komponenten',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/forms' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Alert', link: '/components/alert' },
            { text: 'Toast', link: '/components/toast' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Progress', link: '/components/progress' }
          ]
        },
        {
          text: 'Navigationskomponenten',
          items: [
            { text: 'Tabs', link: '/components/tabs' },
            { text: 'Accordion', link: '/components/accordion' },
            { text: 'Dropdown', link: '/components/dropdown' },
            { text: 'Pagination', link: '/components/pagination' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Sidebar', link: '/components/sidebar' }
          ]
        },
        {
          text: 'Datenkomponenten',
          items: [
            { text: 'Table', link: '/components/table' },
            { text: 'Card', link: '/components/card' },
            { text: 'Slider', link: '/components/slider' }
          ]
        },
        {
          text: 'Effekte',
          items: [
            { text: 'Animationen', link: '/components/effects' }
          ]
        }
      ],
      '/foundation/': [
        {
          text: 'Foundation',
          items: [
            { text: 'Colors', link: '/foundation/colors' },
            { text: 'Typography', link: '/foundation/typography' },
            { text: 'Layout', link: '/foundation/layout' },
            { text: 'Theming', link: '/foundation/theming' },
            { text: 'Accessibility', link: '/foundation/accessibility' }
          ]
        }
      ]
    }
  }
})
