---
title: modal Component
outline: deep
---


# modal

the modal-component zeigt contents in einem Dialogfenster on, the over the Hauptseite schwebt. modals become verwendet, um wichtige Informationen hervorzuheben or Benutzerinteraktionen to erfordern, without that the user the aktuelle Seite verlassen muss.

## Installation

the modal-component ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Components */
@import '@casoon/ui-lib/ui.css';

/* or only the modal-component */
@import '@casoon/ui-lib/ui/components/modal.css';
```

## Basic Usage

```html
<button class="button" data-modal-trigger="example-modal">modal offnen</button>

<div class="modal" id="example-modal" aria-labelledby="modal-title" aria-modal="true" role="dialog">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title" id="modal-title">modal-Titel</h2>
      <button class="modal__close" data-modal-close aria-label="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Hier ist the content des modals. you kannst beliebige HTML-elements einfugen.</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary">Bestatigen</button>
    </div>
  </div>
</div>
```

<div class="example-wrappers">
  <div style="padding: 2rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">modal offnen</button>
    
    <div style="position: relative; z-index: 1; margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">modal-Titel</h2>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div style="padding: 1rem;">
        <p>Hier ist the content des modals. you kannst beliebige HTML-elements einfugen.</p>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Bestatigen</button>
      </div>
    </div>
  </div>
</div>

## Variants

### Sizes

```html
<!-- Kleines modal -->
<div class="modal modal--sm">
  <!-- modal-content -->
</div>

<!-- Standard-modal (Standardgrosse) -->
<div class="modal">
  <!-- modal-content -->
</div>

<!-- Grosses modal -->
<div class="modal modal--lg">
  <!-- modal-content -->
</div>

<!-- Extragrosses modal -->
<div class="modal modal--xl">
  <!-- modal-content -->
</div>

<!-- Vollbildmodus -->
<div class="modal modal--full">
  <!-- modal-content -->
</div>
```

<div class="example-wrappers" style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">Kleine Modalgrosse (modal--sm)</div>
    <div style="width: 300px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 0.75rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 0.75rem;">content</div>
    </div>
  </div>
  
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">Standard-Modalgrosse</div>
    <div style="width: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 1rem;">content</div>
    </div>
  </div>
  
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">size Modalgrosse (modal--lg)</div>
    <div style="width: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 1rem;">content</div>
    </div>
  </div>
</div>

### without header or footer

```html
<!-- modal without header -->
<div class="modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__content">
      <p>Modalinhalt without header</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary">Bestatigen</button>
    </div>
  </div>
</div>

<!-- modal without footer -->
<div class="modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">modal-Titel</h2>
      <button class="modal__close" data-modal-close aria-label="close">
        <svg><!-- close-icon --></svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Modalinhalt without footer</p>
    </div>
  </div>
</div>
```

<div class="example-wrappers" style="display: flex; flex-direction: column; gap: 2rem;">
  <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 400px;">
    <div style="padding: 1rem;">
      <p style="margin-top: 0;">Modalinhalt without header</p>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
      <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
      <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Bestatigen</button>
    </div>
  </div>
  
  <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 400px;">
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
      <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">modal-Titel</h2>
      <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div style="padding: 1rem;">
      <p style="margin-top: 0;">Modalinhalt without footer</p>
    </div>
  </div>
</div>

## Usagesbeispiele

### Bestatigungsdialog

```html
<button class="button button--danger" data-modal-trigger="confirm-modal">delete</button>

<div class="modal" id="confirm-modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">Bestatigung erforderlich</h2>
      <button class="modal__close" data-modal-close aria-label="close">
        <svg><!-- close-icon --></svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Bist you sicher, that you this element delete mochtest? these Aktion kann not ruckgangig gemacht become.</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--danger">delete bestatigen</button>
    </div>
  </div>
</div>
```

<div class="example-wrappers">
  <div style="padding: 1.5rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">delete</button>
    
    <div style="margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Bestatigung erforderlich</h2>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div style="padding: 1rem;">
        <p style="margin-top: 0;">Bist you sicher, that you this element delete mochtest? these Aktion kann not ruckgangig gemacht become.</p>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">delete bestatigen</button>
      </div>
    </div>
  </div>
</div>

### Form-modal

```html
<button class="button" data-modal-trigger="form-modal">Neuen user add</button>

<div class="modal" id="form-modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">Neuen user add</h2>
      <button class="modal__close" data-modal-close aria-label="close">
        <svg><!-- close-icon --></svg>
      </button>
    </div>
    <div class="modal__content">
      <form id="user-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="input" required>
        </div>
        <div class="form-group">
          <label for="email">E-Mail</label>
          <input type="email" id="email" class="input" required>
        </div>
        <div class="form-group">
          <label for="role">Rolle</label>
          <select id="role" class="select">
            <option value="user">user</option>
            <option value="admin">Administrator</option>
            <option value="editor">Editor</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary" form="user-form">user add</button>
    </div>
  </div>
</div>
```

<div class="example-wrappers">
  <div style="padding: 1.5rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Neuen user add</button>
    
    <div style="margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Neuen user add</h2>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div style="padding: 1rem;">
        <form style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">Name</label>
            <input type="text" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">E-Mail</label>
            <input type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">Rolle</label>
            <select style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem; background-color: white;">
              <option value="user">user</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
            </select>
          </div>
        </form>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">user add</button>
      </div>
    </div>
  </div>
</div>

## Anpassung

the modal-component kann with CSS Variables angepasst become:

```css
:root {
  --modal-z-index: 1000;
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  
  --modal-containers-width: 32rem;
  --modal-containers-max-width: calc(100vw - 2rem);
  --modal-containers-max-height: calc(100vh - 2rem);
  --modal-containers-bg: var(--color-white);
  --modal-containers-border-radius: var(--radius-lg);
  --modal-containers-shadow: var(--shadow-xl);
  
  --modal-header-padding: 1rem;
  --modal-header-border: 1px solid var(--color-neutral-200);
  
  --modal-title-font-size: 1.25rem;
  --modal-title-font-weight: 600;
  --modal-title-color: var(--color-neutral-900);
  
  --modal-content-padding: 1rem;
  --modal-footer-padding: 1rem;
  --modal-footer-border: 1px solid var(--color-neutral-200);
  
  /* modal-Sizes */
  --modal-sm-width: 20rem;
  --modal-lg-width: 40rem;
  --modal-xl-width: 56rem;
}
```

## JavaScript-Example

Hier ist a einfaches JavaScript-Example for the modal-Funktionalitat:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // modal-Trigger
  const triggers = document.querySelectorAll('[data-modal-trigger]');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-trigger');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        openModal(modal);
      }
    });
  });
  
  // modal close
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // ESC-Taste zum close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.active');
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
  
  // Hilfsfunktionen
  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Fokus on the erste fokussierbare element setzen
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
  
  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
```

## Accessibility

- Verwende `role="dialog"` and `aria-modal="true"` for the modal
- Fuge `aria-labelledby` hinzu, the on the ID des modal-Titels verweist
- Stelle sicher, that the Fokus beim Offnen des modals in the modal gesetzt wird
- Halte den Fokus within des modals, as long as it open ist
- Ermogliche the close des modals with the ESC-Taste
- Gib den Fokus on the auslosende element back, if the modal geschlossen wird
- Achte on korrekten Farbkontrast for bessere Lesbarkeit
- Stelle sicher, that Buttonn beschreibende Text- or ARIA-Labels have

## Browser-Kompatibilitat

the modal-component ist with allen modernen Browsern kompatibel.

| function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| Overlay-effects | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |