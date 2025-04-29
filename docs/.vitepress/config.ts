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
      { text: 'Components', link: '/components/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/casoon/ui-lib' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casoon/ui-lib' }
    ],

    footer: {
      message: 'Version 0.3.11 | MIT License',
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
          text: 'Basis-Komponenten',
          items: [
            { text: 'Übersicht', link: '/components/' },
            { text: 'Alert', link: '/components/alert/' },
            { text: 'Avatar', link: '/components/avatar/' },
            { text: 'Badge', link: '/components/badge/' },
            { text: 'Button', link: '/components/button/' },
            { text: 'Card', link: '/components/card/' },
            { text: 'Chip', link: '/components/chip/' },
            { text: 'Code', link: '/components/code/' },
            { text: 'Spinner', link: '/components/spinner/' },
            { text: 'Tooltip', link: '/components/tooltip/' }
          ]
        },
        {
          text: 'Formular-Komponenten',
          items: [
            { text: 'Checkbox', link: '/components/checkbox/' },
            { text: 'File', link: '/components/file/' },
            { text: 'Form', link: '/components/forms/' },
            { text: 'Input', link: '/components/input/' },
            { text: 'Input Group', link: '/components/input-group/' },
            { text: 'Radio', link: '/components/radio/' },
            { text: 'Select', link: '/components/select/' },
            { text: 'Slider', link: '/components/slider/' },
            { text: 'Switch', link: '/components/switch/' },
            { text: 'Textarea', link: '/components/textarea/' }
          ]
        },
        {
          text: 'Layout-Komponenten',
          items: [
            { text: 'Footer', link: '/components/footer/' },
            { text: 'Header', link: '/components/header/' },
            { text: 'Sidebar', link: '/components/sidebar/' },
            { text: 'Table', link: '/components/table/' },
            { text: 'Tabs', link: '/components/tabs/' }
          ]
        },
        {
          text: 'Feedback-Komponenten',
          items: [
            { text: 'Modal', link: '/components/modal/' },
            { text: 'Notification', link: '/components/notification/' },
            { text: 'Progress', link: '/components/progress/' },
            { text: 'Skeleton', link: '/components/skeleton/' },
            { text: 'Toast', link: '/components/toast/' }
          ]
        },
        {
          text: 'Fortgeschrittene Komponenten',
          items: [
            { text: 'Blog', link: '/components/blog/' },
            { text: 'Hamburger', link: '/components/hamburger/' },
            { text: 'Widget', link: '/components/widget/' },
            { text: 'Wizard', link: '/components/wizard/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Übersicht', link: '/guide/' },
            { text: 'Layer-System', link: '/guide/layer-system' },
            { text: 'Modul-System', link: '/guide/module-system' },
            { text: 'Theme-System', link: '/guide/theme-system' },
            { text: 'Icon-System', link: '/guide/icon-system' }
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
