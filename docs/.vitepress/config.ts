import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { UI_LIB_VERSION } from './data/versions'

// Benutzerdefiniertes Plugin für CSS-Imports aus Node-Modulen
function cssImportPlugin() {
  const nodeModulesDir = '../../node_modules/';
  
  return {
    name: 'css-transform',
    transform(code, id) {
      // Ignoriere Nicht-CSS-Dateien
      if (!id.endsWith('.css')) return null;
      
      // Wenn es ein direkter Import aus node_modules ist
      if (id.includes('@casoon/dragonfly')) {
        console.log(`Transformiere CSS-Import: ${id}`);
        
        // Tatsächlichen CSS-Inhalt laden
        try {
          const actualPath = id.replace('@casoon/dragonfly', nodeModulesDir + '@casoon/dragonfly');
          console.log(`Versuch, Datei zu laden: ${actualPath}`);
          return null; // Lasse Vite die Datei laden
        } catch (error) {
          console.error(`Fehler beim Laden von ${id}:`, error);
          return null;
        }
      }
      
      return null;
    }
  };
}

export default defineConfig({
  title: 'Dragonfly UI Library',
  description: 'A modern, flexible and accessible component library',
  base: '/dragonfly-docs/',
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'stylesheet', href: '/dragonfly-docs/custom.css' }]
  ],

  vite: {
    plugins: [
      vueJsx(),
      cssImportPlugin()
    ],
    ssr: {
      noExternal: ['vitepress']
    },
    define: {
      __UI_LIB_VERSION__: JSON.stringify(UI_LIB_VERSION)
    },
    optimizeDeps: {
      exclude: ['@casoon/dragonfly'],
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        external: [
          /^@casoon\/dragonfly\/.*/
        ],
        preserveEntrySignatures: 'strict'
      }
    },
    server: {
      fs: {
        // Erlaube den Zugriff auf Node-Module außerhalb des Projekts
        allow: ['..', '../../node_modules']
      }
    },
    css: {
      // CSS-Modulunterstützung aktivieren
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    }
  },

  themeConfig: {
    // Logo in der Navigation - vorerst nicht anzeigen
    logo: undefined,
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
      { 
        text: 'Getting Started', 
        items: [
          { text: 'Overview', link: '/getting-started/' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Themes', link: '/getting-started/themes' },
          { text: 'Tokens', link: '/getting-started/tokens' },
          { text: 'Layout', link: '/getting-started/layout' },
          { text: 'Utilities', link: '/getting-started/utilities' },
          { text: 'Icon Sets', link: '/getting-started/iconsets' },
          { text: 'Styles', link: '/getting-started/styles' },
          { text: 'Typography', link: '/getting-started/typography' }
        ] 
      },
      { 
        text: 'UI System', 
        items: [
          { text: 'Overview', link: '/ui/' },
          { 
            text: 'Elements', 
            items: [
              { text: 'Overview', link: '/ui/elements/' },
              { text: 'Avatar', link: '/ui/elements/avatar/' },
              { text: 'Blockquote', link: '/ui/elements/blockquote/' },
              { text: 'Button', link: '/ui/elements/button/' },
              { text: 'Chip', link: '/ui/elements/chip/' },
              { text: 'Lists', link: '/ui/elements/lists/' },
              { text: 'Media', link: '/ui/elements/media/' },
              { text: 'Radio', link: '/ui/elements/radio/' },
              { text: 'Select', link: '/ui/elements/select/' },
              { text: 'Slider', link: '/ui/elements/slider/' },
              { text: 'Spinner', link: '/ui/elements/spinner/' },
              { text: 'Switch', link: '/ui/elements/switch/' }
            ]
          },
          { 
            text: 'Components', 
            items: [
              { text: 'Overview', link: '/ui/components/' },
              { text: 'Back to Top', link: '/ui/components/back-to-top/' },
              { text: 'Breadcrumbs', link: '/ui/components/breadcrumbs/' },
              { text: 'Card', link: '/ui/components/card/' },
              { text: 'Dialog', link: '/ui/components/dialog/' },
              { text: 'Drawer', link: '/ui/components/drawer/' },
              { text: 'Dropdown', link: '/ui/components/dropdown/' },
              { text: 'File', link: '/ui/components/file/' },
              { text: 'Footer', link: '/ui/components/footer/' },
              { text: 'Input Group', link: '/ui/components/input-group/' },
              { text: 'Modal', link: '/ui/components/modal/' },
              { text: 'Pagination', link: '/ui/components/pagination/' },
              { text: 'Tabs', link: '/ui/components/tabs/' }
            ]
          },
          { 
            text: 'Patterns', 
            link: '/ui/patterns/tags' 
          }
        ] 
      },
      { 
        text: 'Layout & Core', 
        items: [
          { text: 'Layout System', link: '/layout/' },
          { text: 'Core System', link: '/core/' },
          { text: 'Typography', link: '/typography/' }
        ] 
      },
      { 
        text: 'Styling', 
        items: [
          { text: 'Themes', link: '/themes/' },
          { text: 'Tokens', link: '/tokens/' },
          { text: 'Icons', link: '/icons/' },
          { text: 'Effects', link: '/effects/' },
          { text: 'Utilities', link: '/utilities/' }
        ] 
      },
      { 
        text: 'Reference', 
        items: [
          { text: 'Guides', link: '/guide/' },
          { text: 'Examples', link: '/examples/' },
          { text: 'API', link: '/api/' },
          { text: 'Compatibility', link: '/compatibility/' },
          { text: 'Accessibility', link: '/accessibility/' }
        ] 
      },
      { 
        text: 'GitHub', 
        link: 'https://github.com/casoon/dragonfly'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casoon/dragonfly' }
    ],

    footer: {
      message: `MIT License`,
      copyright: 'Copyright © 2025 <a href="https://github.com/casoon/ui-lib" target="_blank">Casoon UI Library</a>'
    },

    sidebar: {
      '/core/': [
        {
          text: 'Core System',
          items: [
            { text: 'Introduction', link: '/core/' },
            { text: 'Layer System', link: '/core/layer-system' },
            { text: 'CSS Architecture', link: '/core/css-system' },
            { text: 'Color System', link: '/core/colors-system' },
            { text: 'Color-Mix System', link: '/core/color-mix-system' },
            { text: 'Logical Properties', link: '/core/logical-properties' },
            { text: 'Smooth Scrolling', link: '/core/smooth-scroll' }
          ]
        }
      ],
      '/layout/': [
        {
          text: 'Layout System',
          items: [
            { text: 'Overview', link: '/layout/' },
            { text: 'Grid System', link: '/layout/grid' },
            { text: 'Flexbox System', link: '/layout/flexbox' },
            { text: 'Container System', link: '/layout/container' },
            { text: 'Responsive Layout', link: '/layout/responsive' },
            { text: 'Spacing', link: '/layout/spacing' }
          ]
        }
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Overview', link: '/tokens/' },
            { text: 'Color Tokens', link: '/tokens/colors' },
            { text: 'Typography Tokens', link: '/tokens/typography' },
            { text: 'Spacing Tokens', link: '/tokens/spacing' },
            { text: 'Border Tokens', link: '/tokens/borders' },
            { text: 'Shadow Tokens', link: '/tokens/shadows' },
            { text: 'Z-Index Tokens', link: '/tokens/z-index' }
          ]
        }
      ],
      '/typography/': [
        {
          text: 'Typography',
          items: [
            { text: 'Overview', link: '/typography/' },
            { text: 'Font Families', link: '/typography/fonts' },
            { text: 'Headings', link: '/typography/headings' },
            { text: 'Paragraphs', link: '/typography/paragraphs' },
            { text: 'Inline Elements', link: '/typography/inline' },
            { text: 'Lists', link: '/typography/lists' },
            { text: 'Responsive Typography', link: '/typography/responsive' }
          ]
        }
      ],
      '/ui/': [
        {
          text: 'UI System',
          items: [
            { text: 'Overview', link: '/ui/' }
          ]
        },
        {
          text: 'Elements',
          collapsed: false,
          items: [
            { text: 'Avatar', link: '/ui/elements/avatar' },
            { text: 'Blockquote', link: '/ui/elements/blockquote' },
            { text: 'Button', link: '/ui/elements/button' },
            { text: 'Checkbox', link: '/ui/elements/checkbox' },
            { text: 'Chip', link: '/ui/elements/chip' },
            { text: 'Code', link: '/ui/elements/code' },
            { text: 'Input', link: '/ui/elements/input' },
            { text: 'Lists', link: '/ui/elements/lists' },
            { text: 'Media', link: '/ui/elements/media' },
            { text: 'Radio', link: '/ui/elements/radio' },
            { text: 'Select', link: '/ui/elements/select' },
            { text: 'Slider', link: '/ui/elements/slider' },
            { text: 'Spinner', link: '/ui/elements/spinner' },
            { text: 'Switch', link: '/ui/elements/switch' },
            { text: 'Tables', link: '/ui/elements/tables' },
            { text: 'Textarea', link: '/ui/elements/textarea' }
          ]
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Action Bar', link: '/ui/components/action-bar' },
            { text: 'Alert', link: '/ui/components/alert' },
            { text: 'Back to Top', link: '/ui/components/back-to-top' },
            { text: 'Badge', link: '/ui/components/badge' },
            { text: 'Breadcrumbs', link: '/ui/components/breadcrumbs' },
            { text: 'Calendar Picker', link: '/ui/components/calendar-picker' },
            { text: 'Card', link: '/ui/components/card' },
            { text: 'Chat', link: '/ui/components/chat' },
            { text: 'Code Block', link: '/ui/components/code-block' },
            { text: 'Comment', link: '/ui/components/comment' },
            { text: 'Data Table', link: '/ui/components/data-table' },
            { text: 'Dialog', link: '/ui/components/dialog' },
            { text: 'Drawer', link: '/ui/components/drawer' },
            { text: 'Dropdown', link: '/ui/components/dropdown' },
            { text: 'File', link: '/ui/components/file' },
            { text: 'Form', link: '/ui/components/form' }
          ]
        },
        {
          text: 'Components (Cont.)',
          collapsed: false,
          items: [
            { text: 'Hamburger', link: '/ui/components/hamburger' },
            { text: 'Input Group', link: '/ui/components/input-group' },
            { text: 'Modal', link: '/ui/components/modal' },
            { text: 'Notification', link: '/ui/components/notification' },
            { text: 'Pagination', link: '/ui/components/pagination' },
            { text: 'Popover', link: '/ui/components/popover' },
            { text: 'Progress Bar', link: '/ui/components/progress-bar' },
            { text: 'Progress', link: '/ui/components/progress' },
            { text: 'Search', link: '/ui/components/search' },
            { text: 'Sidebar', link: '/ui/components/sidebar' },
            { text: 'Skeleton', link: '/ui/components/skeleton' },
            { text: 'Table', link: '/ui/components/table' },
            { text: 'Tabs', link: '/ui/components/tabs' },
            { text: 'Tag', link: '/ui/components/tag' },
            { text: 'Toast', link: '/ui/components/toast' },
            { text: 'Tooltip', link: '/ui/components/tooltip' },
            { text: 'Wizard', link: '/ui/components/wizard' }
          ]
        },
        {
          text: 'Layout Components',
          collapsed: true,
          items: [
            { text: 'Footer', link: '/ui/layout/footer' },
            { text: 'Header', link: '/ui/layout/header' },
            { text: 'Sidebar', link: '/ui/layout/sidebar' }
          ]
        },
        {
          text: 'UI Patterns',
          collapsed: true,
          items: [
            { text: 'Blog', link: '/ui/patterns/blog' },
            { text: 'Code', link: '/ui/patterns/code' },
            { text: 'Skeleton', link: '/ui/patterns/skeleton' },
            { text: 'Tags', link: '/ui/patterns/tags' },
            { text: 'Widget', link: '/ui/patterns/widget' }
          ]
        }
      ],
      '/themes/': [
        {
          text: 'Theme System',
          items: [
            { text: 'Overview', link: '/themes/' },
            { text: 'Day Theme', link: '/themes/day' },
            { text: 'Night Theme', link: '/themes/night' },
            { text: 'Ocean Theme', link: '/themes/ocean' },
            { text: 'Contrast Theme', link: '/themes/contrast' },
            { text: 'Custom Themes', link: '/themes/custom' },
            { text: 'CSS Variables', link: '/themes/custom-properties' }
          ]
        }
      ],
      '/icons/': [
        {
          text: 'Icon System',
          items: [
            { text: 'Overview', link: '/icons/' },
            { text: 'Icon Sets', link: '/icons/sets' },
            { text: 'Usage', link: '/icons/usage' },
            { text: 'Customization', link: '/icons/customization' }
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
          collapsed: false,
          items: [
            { text: 'Filters', link: '/effects/filters' },
            { text: 'Glass', link: '/effects/glass' },
            { text: 'Glow', link: '/effects/glow' },
            { text: 'Light', link: '/effects/light' },
            { text: 'Neon', link: '/effects/neon' },
            { text: 'Noise', link: '/effects/noise' },
            { text: 'Patterns', link: '/effects/patterns' },
            { text: 'Reflections', link: '/effects/reflections' },
            { text: 'Shadows', link: '/effects/shadows' },
            { text: 'Shine', link: '/effects/shine' },
            { text: 'Sparkle', link: '/effects/sparkle' },
            { text: 'Textures', link: '/effects/textures' },
            { text: 'Vignette', link: '/effects/vignette' }
          ]
        },
        {
          text: 'Theme Effects',
          collapsed: false,
          items: [
            { text: '3D Effects', link: '/effects/3d' },
            { text: 'Blends', link: '/effects/blends' },
            { text: 'Gradient', link: '/effects/gradient' },
            { text: 'Neos', link: '/effects/neos' },
            { text: 'Neumorphism', link: '/effects/neumorphism' }
          ]
        },
        {
          text: 'Motion Effects',
          collapsed: false,
          items: [
            { text: 'Animations', link: '/effects/animations' },
            { text: 'Loading', link: '/effects/state/loading' },
            { text: 'Morph', link: '/effects/animation/morph' },
            { text: 'Ripple', link: '/effects/animation/ripple' },
            { text: 'Scroll', link: '/effects/animation/scroll' },
            { text: 'Transitions', link: '/effects/transitions' },
            { text: 'Typing', link: '/effects/animation/typing' }
          ]
        },
        {
          text: 'Layout Effects',
          collapsed: true,
          items: [
            { text: 'Backdrops', link: '/effects/layout/backdrops' },
            { text: 'Clip Path', link: '/effects/layout/clip-path' },
            { text: 'Masks', link: '/effects/layout/masks' },
            { text: 'Outlines', link: '/effects/layout/outlines' },
            { text: 'Overlays', link: '/effects/layout/overlays' },
            { text: 'Positioning', link: '/effects/layout/positioning' },
            { text: 'Skeleton', link: '/effects/layout/skeleton' },
            { text: 'Transforms', link: '/effects/layout/transforms' }
          ]
        },
        {
          text: 'Interaction Effects',
          collapsed: true,
          items: [
            { text: 'Active', link: '/effects/interaction/active' },
            { text: 'Cursors', link: '/effects/interaction/cursors' },
            { text: 'Disabled', link: '/effects/interaction/disabled' },
            { text: 'Error', link: '/effects/interaction/error' },
            { text: 'Focus', link: '/effects/interaction/focus' },
            { text: 'Hover', link: '/effects/interaction/hover' },
            { text: 'Success', link: '/effects/interaction/success' },
            { text: 'Warning', link: '/effects/interaction/warning' }
          ]
        }
      ],
      '/utilities/': [
        {
          text: 'Utility Classes',
          items: [
            { text: 'Overview', link: '/utilities/' },
            { text: 'Color Utilities', link: '/utilities/colors' },
            { text: 'Spacing Utilities', link: '/utilities/spacing' },
            { text: 'Typography Utilities', link: '/utilities/typography' },
            { text: 'Display Utilities', link: '/utilities/display' },
            { text: 'Flex Utilities', link: '/utilities/flex' },
            { text: 'Grid Utilities', link: '/utilities/grid' },
            { text: 'Position Utilities', link: '/utilities/position' },
            { text: 'Size Utilities', link: '/utilities/size' }
          ]
        }
      ],
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Searchable Index', link: '/api/search-index' },
          ]
        }
      ],
      '/compatibility/': [
        {
          text: 'Browser Compatibility',
          items: [
            { text: 'Overview', link: '/compatibility/' },
            { text: 'Core Features', link: '/compatibility/core' },
            { text: 'Visual Effects', link: '/compatibility/effects' },
            { text: 'Fallback Strategies', link: '/compatibility/fallbacks' }
          ]
        }
      ],
      '/maintenance/': [
        {
          text: 'Documentation Maintenance',
          items: [
            { text: 'Overview', link: '/maintenance/' },
            { text: 'Version Checking', link: '/maintenance/version-checking' },
            { text: 'Component Diff Analysis', link: '/maintenance/component-diff' }
          ]
        }
      ],
      '/accessibility/': [
        {
          text: 'Accessibility',
          items: [
            { text: 'ARIA', link: '/accessibility/aria' },
            { text: 'Contrast', link: '/accessibility/contrast' },
            { text: 'Keyboard Navigation', link: '/accessibility/keyboard' },
            { text: 'Screen Readers', link: '/accessibility/screenreader' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Advanced Guides',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Component System', link: '/guide/component-system' },
            { text: 'Animations & Effects', link: '/guide/animations-effects-system' },
            { text: 'Color Mix System', link: '/guide/color-mix-system' },
            { text: 'Container System', link: '/guide/container-system' },
            { text: 'Core CSS System', link: '/guide/core-css-system' },
            { text: 'Custom Properties', link: '/guide/custom-properties' },
            { text: 'Flexbox System', link: '/guide/flexbox-system' },
            { text: 'Forms System', link: '/guide/forms-system' },
            { text: 'Grid System', link: '/guide/grid-system' },
            { text: 'Icon System', link: '/guide/icon-system' },
            { text: 'Layer System', link: '/guide/layer-system' },
            { text: 'Modular Component System', link: '/guide/modular-component-system' },
            { text: 'Theme System', link: '/guide/theme-system' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Overview', link: '/examples/' },
            { text: 'Layout Examples', link: '/examples/layout/' },
            { text: 'Form Examples', link: '/examples/form/' },
            { text: 'Effects Examples', link: '/examples/effects/' },
            { text: 'Advanced Examples', link: '/examples/advanced/' }
          ]
        }
      ]
    }
  }
})
