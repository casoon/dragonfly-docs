import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { UI_LIB_VERSION } from './data/versions'

export default defineConfig({
  title: 'Casoon UI Library',
  description: 'A modern, flexible and accessible component library',
  base: "/ui-docs/",
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'stylesheet', href: '/ui-docs/custom.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/core.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/themes/day.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/button.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/badge.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/alert.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/card.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/chip.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/tooltip.css' }],
    ['link', { rel: 'stylesheet', href: '/node_modules/@casoon/ui-lib/components/spinner.css' }]
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
    outlineTitle: 'On this page',
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    lastUpdatedText: 'Last updated',
    langMenuLabel: 'Change language',
    notFound: {
      title: 'Page not found',
      quote: 'Sorry, we could not find the page you are looking for.',
      linkText: 'Go to homepage'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search filters',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
              closeText: 'Close'
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Home', link: '/', activeMatch: '^/$' },
      { text: 'Getting Started', link: '/getting-started/', activeMatch: '^/getting-started' },
      { text: 'Components', link: '/components/', activeMatch: '^/components' },
      { text: 'Effects', link: '/effects/', activeMatch: '^/effects' },
      { text: 'Examples', link: '/examples/', activeMatch: '^/examples' },
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
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Design Tokens', link: '/getting-started/tokens' },
            { text: 'Layer System', link: '/guide/layer-system' },
            { text: 'Layout', link: '/getting-started/layout' },
            { text: 'Typography', link: '/getting-started/typography' },
            { text: 'Styles', link: '/getting-started/styles' },
            { text: 'Themes', link: '/getting-started/themes' }
          ]
        },
        {
          text: 'Assets & Utilities',
          items: [
            { text: 'Icon Sets', link: '/getting-started/iconsets' },
            { text: 'Utility Classes', link: '/getting-started/utilities' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Base Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Alert', link: '/components/alert/' },
            { text: 'Avatar', link: '/components/avatar/' },
            { text: 'Badge', link: '/components/badge/' },
            { text: 'Button', link: '/components/button/' },
            { text: 'Card', link: '/components/card/' },
            { text: 'Chip', link: '/components/chip/' },
            { text: 'Code', link: '/components/code/' },
            { text: 'Spinner', link: '/components/spinner' },
            { text: 'Tooltip', link: '/components/tooltip/' }
          ]
        },
        {
          text: 'Form Components',
          items: [
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'File', link: '/components/file/' },
            { text: 'Form', link: '/components/forms/' },
            { text: 'Input', link: '/components/input/' },
            { text: 'Input Group', link: '/components/input-group/' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Select', link: '/components/select' },
            { text: 'Slider', link: '/components/slider/' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Textarea', link: '/components/textarea' }
          ]
        },
        {
          text: 'Layout Components',
          items: [
            { text: 'Footer', link: '/components/footer/' },
            { text: 'Header', link: '/components/header' },
            { text: 'Sidebar', link: '/components/sidebar/' },
            { text: 'Table', link: '/components/table/' },
            { text: 'Tabs', link: '/components/tabs/' }
          ]
        },
        {
          text: 'Feedback Components',
          items: [
            { text: 'Modal', link: '/components/modal/' },
            { text: 'Notification', link: '/components/notification' },
            { text: 'Progress', link: '/components/progress/' },
            { text: 'Skeleton', link: '/components/skeleton' },
            { text: 'Toast', link: '/components/toast/' }
          ]
        },
        {
          text: 'Advanced Components',
          items: [
            { text: 'Blog', link: '/components/blog' },
            { text: 'Hamburger Menu', link: '/components/hamburger' },
            { text: 'Widget', link: '/components/widget' },
            { text: 'Wizard', link: '/components/wizard' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Layer System', link: '/guide/layer-system' },
            { text: 'Core CSS System', link: '/guide/core-css-system' },
            { text: 'Color System', link: '/guide/colors-system' },
            { text: 'Color-Mix System', link: '/guide/color-mix-system' },
            { text: 'Theme System', link: '/guide/theme-system' },
            { text: 'CSS Variables', link: '/guide/custom-properties' },
            { text: 'Modular Component System', link: '/guide/modular-component-system' },
            { text: 'Responsive Adaptation', link: '/guide/grid-system' },
            { text: 'Utility Classes', link: '/guide/component-system' },
          ]
        }
      ],
      '/guide/effects-system': [
        {
          text: 'Effects System',
          items: [
            { text: 'Overview', link: '/effects/' }
          ]
        },
        {
          text: 'Visual Effects',
          items: [
            { text: '3D Effects', link: '/effects/3d' },
            { text: 'Filter Effects', link: '/effects/filters' },
            { text: 'Shadow Effects', link: '/effects/shadows' },
            { text: 'Gradient Effects', link: '/effects/gradient' },
            { text: 'Patterns & Textures', link: '/effects/patterns' }
          ]
        },
        {
          text: 'Interaction Effects',
          items: [
            { text: 'Hover Effects', link: '/effects/interaction/hover' },
            { text: 'Focus Effects', link: '/effects/interaction/focus' }
          ]
        },
        {
          text: 'State Effects',
          items: [
            { text: 'Loading Effects', link: '/effects/state/loading' }
          ]
        }
      ],
      '/effects/': [
        {
          text: 'Effects System',
          items: [
            { text: 'Overview', link: '/effects/' }
          ]
        },
        {
          text: 'Visual Effects',
          items: [
            { text: '3D Effects', link: '/effects/3d' },
            { text: 'Filter Effects', link: '/effects/filters' },
            { text: 'Shadow Effects', link: '/effects/shadows' },
            { text: 'Gradient Effects', link: '/effects/gradient' },
            { text: 'Glass Morphism', link: '/effects/glass' },
            { text: 'Patterns & Textures', link: '/effects/patterns' },
            { text: 'Neon Effects', link: '/effects/neon' }
          ]
        },
        {
          text: 'Animation Effects',
          items: [
            { text: 'Transitions', link: '/effects/transitions' },
            { text: 'Animations', link: '/effects/animations' }
          ]
        },
        {
          text: 'Interaction Effects',
          items: [
            { text: 'Hover Effects', link: '/effects/interaction/hover' },
            { text: 'Focus Effects', link: '/effects/interaction/focus' }
          ]
        },
        {
          text: 'State Effects',
          items: [
            { text: 'Loading Effects', link: '/effects/state/loading' }
          ]
        }
      ],
      '/themes/': [
        {
          text: 'Themes',
          items: [
            { text: 'Overview', link: '/themes/' },
            { text: 'CSS Variables', link: '/themes/custom-properties' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Overview', link: '/examples/' }
          ]
        },
        {
          text: 'Komplexe Beispiele',
          items: [
            { text: 'Layout-Beispiele', link: '/examples/layout/' },
            { text: 'Formular-Beispiele', link: '/examples/form/' },
            { text: 'Fortgeschrittene Komponenten', link: '/examples/advanced/' },
            { text: 'Effekt-Beispiele', link: '/examples/effects/' }
          ]
        }
      ]
    }
  }
})
