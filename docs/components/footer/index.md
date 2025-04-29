---
title: Footer
category: Komponenten
---

# Footer

Die Footer-Komponente bietet einen strukturierten Bereich am unteren Ende einer Webseite für zusätzliche Informationen, Links und rechtliche Hinweise.

## CSS-Import

Die Footer-Komponente wird automatisch mit der `core.css` importiert:

```css
@import "@casoon/ui-lib/core.css";
```

Alternativ können Sie die Komponente auch direkt importieren:

```css
@import "@casoon/ui-lib/modules/footer.module.css" layer(module-footer);
```

## Basis-Verwendung

```html
<footer class="footer">
  <div class="footer__content">
    <div class="footer__section">
      <h4 class="footer__title">Unternehmen</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">Über uns</a></li>
        <li><a href="#" class="footer__link">Karriere</a></li>
        <li><a href="#" class="footer__link">Kontakt</a></li>
      </ul>
    </div>
    <div class="footer__section">
      <h4 class="footer__title">Rechtliches</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">Datenschutz</a></li>
        <li><a href="#" class="footer__link">AGB</a></li>
        <li><a href="#" class="footer__link">Impressum</a></li>
      </ul>
    </div>
    <div class="footer__section">
      <h4 class="footer__title">Folgen Sie uns</h4>
      <ul class="footer__social">
        <li><a href="#" class="footer__social-link">Twitter</a></li>
        <li><a href="#" class="footer__social-link">LinkedIn</a></li>
        <li><a href="#" class="footer__social-link">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <p class="footer__copyright">© 2023 Unternehmen GmbH. Alle Rechte vorbehalten.</p>
  </div>
</footer>
```

## Varianten

### Einfacher Footer

```html
<footer class="footer footer--simple">
  <div class="footer__content">
    <p class="footer__copyright">© 2023 Unternehmen GmbH. Alle Rechte vorbehalten.</p>
    <ul class="footer__links">
      <li><a href="#" class="footer__link">Datenschutz</a></li>
      <li><a href="#" class="footer__link">AGB</a></li>
      <li><a href="#" class="footer__link">Impressum</a></li>
    </ul>
  </div>
</footer>
```

### Zweifarbiger Footer

```html
<footer class="footer footer--two-tone">
  <div class="footer__main">
    <!-- Hauptinhalt des Footers -->
  </div>
  <div class="footer__bottom footer--dark">
    <p class="footer__copyright">© 2023 Unternehmen GmbH</p>
  </div>
</footer>
```

## Anpassung

Die Footer-Komponente kann über CSS-Variablen angepasst werden:

```css
@layer module-footer {
  .footer {
    --footer-bg: var(--color-gray-900);
    --footer-text: var(--color-gray-100);
    --footer-link: var(--color-primary);
    --footer-padding: var(--spacing-6);
  }
}
```

## Barrierefreiheit

Für bessere Zugänglichkeit:

- Verwenden Sie ausreichenden Kontrast zwischen Text und Hintergrund
- Sorgen Sie für deutliche Fokus-Zustände bei Links
- Stellen Sie sicher, dass alle interaktiven Elemente mit der Tastatur bedienbar sind

## Best Practices

- Halten Sie den Footer übersichtlich und gut strukturiert
- Gruppieren Sie verwandte Links in Sektionen
- Stellen Sie wichtige rechtliche Informationen bereit (Datenschutz, Impressum)
- Bieten Sie Kontaktmöglichkeiten an
- Vermeiden Sie zu viele Links oder Informationen 