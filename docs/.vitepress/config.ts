import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Casoon UI Library',
  description: 'Eine moderne, flexible und zugängliche Komponentenbibliothek',
  
  // MDX-Unterstützung aktivieren
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-mdx'))
    }
  },
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Components', link: '/getting-started/components' },
      { text: 'Foundation', link: '/foundation/colors' }
    ],
    
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Einführung', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Best Practices', link: '/getting-started/#best-practices' },
            { text: 'FAQ', link: '/getting-started/#häufige-fragen-faq' },
            { text: 'Troubleshooting', link: '/getting-started/#troubleshooting' }
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/getting-started/button' },
            { text: 'Input', link: '/getting-started/input' },
            { text: 'Modal', link: '/getting-started/modal' },
            { text: 'Alert', link: '/getting-started/alert' },
            { text: 'Toast', link: '/getting-started/toast' },
            { text: 'Badge', link: '/getting-started/badge' },
            { text: 'Tooltip', link: '/getting-started/tooltip' },
            { text: 'Progress', link: '/getting-started/progress' },
            { text: 'Tabs', link: '/getting-started/tabs' },
            { text: 'Accordion', link: '/getting-started/accordion' },
            { text: 'Dropdown', link: '/getting-started/dropdown' },
            { text: 'Pagination', link: '/getting-started/pagination' },
            { text: 'Table', link: '/getting-started/table' },
            { text: 'Navigation', link: '/getting-started/navigation' },
            { text: 'Card', link: '/getting-started/card' },
            { text: 'Slider', link: '/getting-started/slider' },
            { text: 'Sidebar', link: '/getting-started/sidebar' }
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