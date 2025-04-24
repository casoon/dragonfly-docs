import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Styles', link: '/getting-started/styles' },
      { text: 'Module', link: '/modules/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/casoon/ui-lib' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casoon/ui-lib' }
    ],

    footer: {
      message: 'Version 0.3.1 | MIT License',
      copyright: 'Copyright © 2025 Casoon'
    },

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Einführung', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
          ]
        },
        {
          text: 'Styles',
          items: [
            { text: 'Styles Übersicht', link: '/getting-started/styles' },
            { text: 'Design Tokens', link: '/getting-started/tokens' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Themes', link: '/getting-started/themes' },
            { text: 'Iconsets', link: '/getting-started/iconsets' },
            { text: 'Utilities', link: '/getting-started/utilities' },
          ]
        },
        {
          text: 'Hilfe',
          items: [
            { text: 'Best Practices', link: '/getting-started/#best-practices' },
            { text: 'FAQ', link: '/getting-started/#häufige-fragen-faq' },
            { text: 'Troubleshooting', link: '/getting-started/#troubleshooting' }
          ]
        }
      ],
      '/modules/': [
        {
          text: 'Grundlegende Module',
          items: [
            { text: 'Button', link: '/modules/button/' },
            { text: 'Input', link: '/modules/input/' },
            { text: 'Textarea', link: '/modules/textarea/' },
            { text: 'Select', link: '/modules/select/' },
            { text: 'Checkbox', link: '/modules/checkbox/' },
            { text: 'Radio', link: '/modules/radio/' },
            { text: 'Switch', link: '/modules/switch/' },
            { text: 'File', link: '/modules/file/' },
            { text: 'Forms', link: '/modules/forms/' }
          ]
        },
        {
          text: 'Feedback-Module',
          items: [
            { text: 'Alert', link: '/modules/alert/' },
            { text: 'Toast', link: '/modules/toast/' },
            { text: 'Notification', link: '/modules/notification/' },
            { text: 'Modal', link: '/modules/modal/' },
            { text: 'Progress', link: '/modules/progress/' },
            { text: 'Spinner', link: '/modules/spinner/' }
          ]
        },
        {
          text: 'Navigationsmodule',
          items: [
            { text: 'Tabs', link: '/modules/tabs/' },
            { text: 'Accordion', link: '/modules/accordion/' },
            { text: 'Dropdown', link: '/modules/dropdown/' },
            { text: 'Pagination', link: '/modules/pagination/' },
            { text: 'Navigation', link: '/modules/navigation/' },
            { text: 'Sidebar', link: '/modules/sidebar/' },
            { text: 'Header', link: '/modules/header/' },
            { text: 'Hamburger', link: '/modules/hamburger/' }
          ]
        },
        {
          text: 'Datenmodule',
          items: [
            { text: 'Table', link: '/modules/table/' },
            { text: 'Card', link: '/modules/card/' },
            { text: 'Slider', link: '/modules/slider/' }
          ]
        },
        {
          text: 'Zusätzliche Module',
          items: [
            { text: 'Avatar', link: '/modules/avatar/' },
            { text: 'Badge', link: '/modules/badge/' },
            { text: 'Chip', link: '/modules/chip/' },
            { text: 'Tooltip', link: '/modules/tooltip/' },
            { text: 'Widget', link: '/modules/widget/' },
            { text: 'Wizard', link: '/modules/wizard/' },
            { text: 'Blog', link: '/modules/blog/' },
            { text: 'Skeleton', link: '/modules/skeleton/' }
          ]
        },
        {
          text: 'Effekte & Darstellung',
          items: [
            { text: 'Animationen', link: '/modules/effects/' },
            { text: 'Code', link: '/modules/code/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Übersicht', link: '/guide/' },
            { text: 'Layout', link: '/guide/grid-system' },
            { text: 'Flexbox', link: '/guide/flexbox-system' },
            { text: 'Container', link: '/guide/container-system' },
            { text: 'Formulare', link: '/guide/forms-system' }
          ]
        },
        {
          text: 'Foundation',
          items: [
            { text: 'Farben', link: '/getting-started/tokens#farben' },
            { text: 'Typografie', link: '/getting-started/typography' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Theming', link: '/getting-started/themes' },
            { text: 'Barrierefreiheit', link: '/getting-started/#zugänglichkeit' }
          ]
        }
      ]
    }
  }
})
