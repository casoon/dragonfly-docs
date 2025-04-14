export default {
  title: 'Casoon UI Library',
  description: 'Eine modulare CSS-Bibliothek für moderne Webanwendungen',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Komponenten', link: '/components/' },
      { text: 'Beispiele', link: '/examples/' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Einführung', link: '/getting-started/' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Design Tokens', link: '/getting-started/tokens' },
          { text: 'Typografie', link: '/getting-started/typography' },
          { text: 'Layout', link: '/getting-started/layout' },
          { text: 'Utilities', link: '/getting-started/utilities' }
        ]
      },
      {
        text: 'Komponenten',
        items: [
          { text: 'Übersicht', link: '/components/' },
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Formulare', link: '/components/forms' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Sidebar', link: '/components/sidebar' },
          { text: 'Slider', link: '/components/slider' }
        ]
      }
    ]
  }
} 