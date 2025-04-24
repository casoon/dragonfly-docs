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
      { text: 'Components', link: '/components/' },
      { text: 'Foundation', link: '/foundation/colors' },
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
      '/components/': [
        {
          text: 'Grundlegende Komponenten',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Select', link: '/components/select' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'File', link: '/components/file' },
            { text: 'Forms', link: '/components/forms' }
          ]
        },
        {
          text: 'Feedback-Komponenten',
          items: [
            { text: 'Alert', link: '/components/alert' },
            { text: 'Toast', link: '/components/toast' },
            { text: 'Notification', link: '/components/notification' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Progress', link: '/components/progress' },
            { text: 'Spinner', link: '/components/spinner' }
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
            { text: 'Sidebar', link: '/components/sidebar' },
            { text: 'Header', link: '/components/header' },
            { text: 'Hamburger', link: '/components/hamburger' }
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
          text: 'Zusätzliche Komponenten',
          items: [
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Chip', link: '/components/chip' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Widget', link: '/components/widget' },
            { text: 'Wizard', link: '/components/wizard' },
            { text: 'Blog', link: '/components/blog' },
            { text: 'Skeleton', link: '/components/skeleton' }
          ]
        },
        {
          text: 'Effekte & Darstellung',
          items: [
            { text: 'Animationen', link: '/components/effects' },
            { text: 'Code', link: '/components/code' }
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
