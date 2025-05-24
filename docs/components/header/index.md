---
title: Header Komponente
category: Components
---

# Header Komponente

Die Header-Komponente dient als Kopfbereich einer Webseite oder Anwendung und enthält in der Regel ein Logo, eine Navigation und weitere wichtige Bedienelemente.

## Grundlegende Verwendung

```html
<header class="header">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="/" class="header__nav-link header__nav-link--active">Start</a></li>
        <li class="header__nav-item"><a href="/produkte" class="header__nav-link">Produkte</a></li>
        <li class="header__nav-item"><a href="/dienstleistungen" class="header__nav-link">Dienstleistungen</a></li>
        <li class="header__nav-item"><a href="/kontakt" class="header__nav-link">Kontakt</a></li>
      </ul>
    </nav>
    
    <div class="header__actions">
      <button class="button button--ghost">Anmelden</button>
      <button class="button button--primary">Registrieren</button>
    </div>
  </div>
</header>
```

## Varianten

### Einfacher Header

```html
<header class="header header--simple">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="/" class="header__nav-link">Start</a></li>
        <li class="header__nav-item"><a href="/ueber-uns" class="header__nav-link">Über uns</a></li>
        <li class="header__nav-item"><a href="/kontakt" class="header__nav-link">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### Header mit Suchfunktion

```html
<header class="header">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="/" class="header__nav-link">Start</a></li>
        <li class="header__nav-item"><a href="/produkte" class="header__nav-link">Produkte</a></li>
        <li class="header__nav-item"><a href="/dienstleistungen" class="header__nav-link">Dienstleistungen</a></li>
      </ul>
    </nav>
    
    <div class="header__search">
      <div class="input-group">
        <input type="text" class="input" placeholder="Suchen...">
        <button class="button button--primary">Suchen</button>
      </div>
    </div>
  </div>
</header>
```

### Header mit Dropdown-Menü

```html
<header class="header">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="/" class="header__nav-link">Start</a></li>
        
        <li class="header__nav-item header__nav-item--has-dropdown">
          <a href="/produkte" class="header__nav-link">Produkte <span class="icon-chevron-down"></span></a>
          <ul class="header__dropdown">
            <li class="header__dropdown-item"><a href="/produkte/kategorie-1" class="header__dropdown-link">Kategorie 1</a></li>
            <li class="header__dropdown-item"><a href="/produkte/kategorie-2" class="header__dropdown-link">Kategorie 2</a></li>
            <li class="header__dropdown-item"><a href="/produkte/kategorie-3" class="header__dropdown-link">Kategorie 3</a></li>
          </ul>
        </li>
        
        <li class="header__nav-item"><a href="/dienstleistungen" class="header__nav-link">Dienstleistungen</a></li>
        <li class="header__nav-item"><a href="/kontakt" class="header__nav-link">Kontakt</a></li>
      </ul>
    </nav>
    
    <div class="header__actions">
      <button class="button button--primary">Anmelden</button>
    </div>
  </div>
</header>
```

### Sticky Header

```html
<header class="header header--sticky">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="/" class="header__nav-link">Start</a></li>
        <li class="header__nav-item"><a href="/produkte" class="header__nav-link">Produkte</a></li>
        <li class="header__nav-item"><a href="/dienstleistungen" class="header__nav-link">Dienstleistungen</a></li>
        <li class="header__nav-item"><a href="/kontakt" class="header__nav-link">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .header--sticky {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--color-background);
    box-shadow: var(--shadow-sm);
  }
</style>
```

### Responsive Header mit Hamburger-Menü

```html
<header class="header header--responsive">
  <div class="header__container">
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" height="32">
      </a>
    </div>
    
    <button class="header__mobile-toggle" aria-label="Menü öffnen" aria-expanded="false">
      <span class="header__mobile-toggle-icon"></span>
    </button>
    
    <div class="header__mobile-nav">
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><a href="/" class="header__nav-link">Start</a></li>
          <li class="header__nav-item"><a href="/produkte" class="header__nav-link">Produkte</a></li>
          <li class="header__nav-item"><a href="/dienstleistungen" class="header__nav-link">Dienstleistungen</a></li>
          <li class="header__nav-item"><a href="/kontakt" class="header__nav-link">Kontakt</a></li>
        </ul>
      </nav>
      
      <div class="header__actions">
        <button class="button button--ghost">Anmelden</button>
        <button class="button button--primary">Registrieren</button>
      </div>
    </div>
  </div>
</header>

<script>
  document.querySelector('.header__mobile-toggle').addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    document.querySelector('.header__mobile-nav').classList.toggle('header__mobile-nav--open');
  });
</script>
```

## Anpassung

Die Header-Komponente kann über CSS-Variablen angepasst werden:

```css
.header {
  --header-height: 4rem;
  --header-padding: 0 1.5rem;
  --header-bg: var(--color-background);
  --header-border-color: var(--color-gray-200);
  --header-nav-gap: 1.5rem;
  --header-nav-font-weight: 500;
  --header-nav-color: var(--color-gray-700);
  --header-nav-color-active: var(--color-primary);
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Stellen Sie sicher, dass der Header semantisch korrekt mit dem `<header>`-Element gekennzeichnet ist
- Verwenden Sie für die Navigation das `<nav>`-Element
- Kennzeichnen Sie die aktuelle Seite durch ein `aria-current="page"` oder eine entsprechende Klasse
- Fügen Sie bei Dropdown-Menüs die Attribute `aria-haspopup` und `aria-expanded` hinzu
- Stellen Sie sicher, dass das mobile Menü mit der Tastatur bedienbar ist und korrekte ARIA-Attribute hat
- Sorgen Sie für ausreichenden Kontrast zwischen Text und Hintergrund
- Setzen Sie sinnvolle alt-Texte für Bilder und Logos

## Best Practices

- Halten Sie den Header einfach und präzise, um die Benutzer nicht zu überfordern
- Platzieren Sie das Logo in der Regel links und machen Sie es klickbar (zur Startseite führend)
- Beschränken Sie die Anzahl der Hauptnavigationspunkte auf 5-7
- Machen Sie die aktive Seite deutlich erkennbar
- Sorgen Sie für eine konsistente Darstellung auf allen Seiten
- Testen Sie die mobile Ansicht gründlich
- Stellen Sie sicher, dass der Header auf allen Bildschirmgrößen gut funktioniert 