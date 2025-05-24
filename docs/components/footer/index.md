---
title: Footer
category: Components
---

# Footer

The Footer component provides a structured area at the bottom of a web page for additional information, links, and legal notices.

## CSS Import

The Footer component is automatically imported with the `core.css`:

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Footer module */
@import '@casoon/ui-lib/components/footer.css';
```

Alternatively, you can import the component directly:

```css
@import "@casoon/ui-lib/components/footer.css";
```

## Basic Usage

```html
<footer class="footer">
  <div class="footer__content">
    <div class="footer__section">
      <h4 class="footer__title">Company</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">About Us</a></li>
        <li><a href="#" class="footer__link">Careers</a></li>
        <li><a href="#" class="footer__link">Contact</a></li>
      </ul>
    </div>
    <div class="footer__section">
      <h4 class="footer__title">Legal</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">Privacy Policy</a></li>
        <li><a href="#" class="footer__link">Terms of Service</a></li>
        <li><a href="#" class="footer__link">Imprint</a></li>
      </ul>
    </div>
    <div class="footer__section">
      <h4 class="footer__title">Follow Us</h4>
      <ul class="footer__social">
        <li><a href="#" class="footer__social-link">Twitter</a></li>
        <li><a href="#" class="footer__social-link">LinkedIn</a></li>
        <li><a href="#" class="footer__social-link">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <p class="footer__copyright">© 2023 Company GmbH. All rights reserved.</p>
  </div>
</footer>
```

## Variants

### Simple Footer

```html
<footer class="footer footer--simple">
  <div class="footer__content">
    <p class="footer__copyright">© 2023 Company GmbH. All rights reserved.</p>
    <ul class="footer__links">
      <li><a href="#" class="footer__link">Privacy Policy</a></li>
      <li><a href="#" class="footer__link">Terms of Service</a></li>
      <li><a href="#" class="footer__link">Imprint</a></li>
    </ul>
  </div>
</footer>
```

### Two-Tone Footer

```html
<footer class="footer footer--two-tone">
  <div class="footer__main">
    <!-- Main content of the footer -->
  </div>
  <div class="footer__bottom footer--dark">
    <p class="footer__copyright">© 2023 Company GmbH</p>
  </div>
</footer>
```

## Customization

The Footer component can be customized via CSS variables:

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

## Accessibility

For better accessibility:

- Use sufficient contrast between text and background
- Provide clear focus states for links
- Ensure all interactive elements are keyboard operable

## Best Practices

- Keep the footer clean and well-structured
- Group related links in sections
- Provide important legal information (privacy policy, imprint)
- Offer contact options
- Avoid too many links or information 