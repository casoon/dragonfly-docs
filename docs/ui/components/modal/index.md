---
title: Modal Component
outline: deep
---


# Modal

Die Modal-Komponente zeigt Inhalte in einem Dialogfenster an, das über der Hauptseite schwebt. Modals werden verwendet, um wichtige Informationen hervorzuheben oder Benutzerinteraktionen zu erfordern, ohne dass der Benutzer die aktuelle Seite verlassen muss.

## Installation

Die Modal-Komponente ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Komponenten */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Modal-Komponente */
@import '@casoon/ui-lib/ui/components/modal.css';
```

## Grundlegende Verwendung

```html
<button class="button" data-modal-trigger="example-modal">Modal öffnen</button>

<div class="modal" id="example-modal" aria-labelledby="modal-title" aria-modal="true" role="dialog">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title" id="modal-title">Modal-Titel</h2>
      <button class="modal__close" data-modal-close aria-label="Schließen">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Hier ist der Inhalt des Modals. Du kannst beliebige HTML-Elemente einfügen.</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary">Bestätigen</button>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="padding: 2rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Modal öffnen</button>
    
    <div style="position: relative; z-index: 1; margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Modal-Titel</h2>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div style="padding: 1rem;">
        <p>Hier ist der Inhalt des Modals. Du kannst beliebige HTML-Elemente einfügen.</p>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Bestätigen</button>
      </div>
    </div>
  </div>
</div>

## Varianten

### Größen

```html
<!-- Kleines Modal -->
<div class="modal modal--sm">
  <!-- Modal-Inhalt -->
</div>

<!-- Standard-Modal (Standardgröße) -->
<div class="modal">
  <!-- Modal-Inhalt -->
</div>

<!-- Großes Modal -->
<div class="modal modal--lg">
  <!-- Modal-Inhalt -->
</div>

<!-- Extragroßes Modal -->
<div class="modal modal--xl">
  <!-- Modal-Inhalt -->
</div>

<!-- Vollbildmodus -->
<div class="modal modal--full">
  <!-- Modal-Inhalt -->
</div>
```

<div class="example-wrapper" style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">Kleine Modalgröße (modal--sm)</div>
    <div style="width: 300px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 0.75rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 0.75rem;">Inhalt</div>
    </div>
  </div>
  
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">Standard-Modalgröße</div>
    <div style="width: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 1rem;">Inhalt</div>
    </div>
  </div>
  
  <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">Große Modalgröße (modal--lg)</div>
    <div style="width: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <div style="font-weight: 600;">Titel</div>
      </div>
      <div style="padding: 1rem;">Inhalt</div>
    </div>
  </div>
</div>

### Ohne Header oder Footer

```html
<!-- Modal ohne Header -->
<div class="modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__content">
      <p>Modalinhalt ohne Header</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary">Bestätigen</button>
    </div>
  </div>
</div>

<!-- Modal ohne Footer -->
<div class="modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">Modal-Titel</h2>
      <button class="modal__close" data-modal-close aria-label="Schließen">
        <svg><!-- Schließen-Icon --></svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Modalinhalt ohne Footer</p>
    </div>
  </div>
</div>
```

<div class="example-wrapper" style="display: flex; flex-direction: column; gap: 2rem;">
  <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 400px;">
    <div style="padding: 1rem;">
      <p style="margin-top: 0;">Modalinhalt ohne Header</p>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
      <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
      <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Bestätigen</button>
    </div>
  </div>
  
  <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 400px;">
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
      <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Modal-Titel</h2>
      <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div style="padding: 1rem;">
      <p style="margin-top: 0;">Modalinhalt ohne Footer</p>
    </div>
  </div>
</div>

## Verwendungsbeispiele

### Bestätigungsdialog

```html
<button class="button button--danger" data-modal-trigger="confirm-modal">Löschen</button>

<div class="modal" id="confirm-modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">Bestätigung erforderlich</h2>
      <button class="modal__close" data-modal-close aria-label="Schließen">
        <svg><!-- Schließen-Icon --></svg>
      </button>
    </div>
    <div class="modal__content">
      <p>Bist du sicher, dass du dieses Element löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.</p>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--danger">Löschen bestätigen</button>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="padding: 1.5rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Löschen</button>
    
    <div style="margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Bestätigung erforderlich</h2>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div style="padding: 1rem;">
        <p style="margin-top: 0;">Bist du sicher, dass du dieses Element löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.</p>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Löschen bestätigen</button>
      </div>
    </div>
  </div>
</div>

### Formular-Modal

```html
<button class="button" data-modal-trigger="form-modal">Neuen Benutzer hinzufügen</button>

<div class="modal" id="form-modal">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container">
    <div class="modal__header">
      <h2 class="modal__title">Neuen Benutzer hinzufügen</h2>
      <button class="modal__close" data-modal-close aria-label="Schließen">
        <svg><!-- Schließen-Icon --></svg>
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
            <option value="user">Benutzer</option>
            <option value="admin">Administrator</option>
            <option value="editor">Editor</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      <button class="button button--secondary" data-modal-close>Abbrechen</button>
      <button class="button button--primary" form="user-form">Benutzer hinzufügen</button>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="padding: 1.5rem; border: 1px dashed #e5e7eb; border-radius: 0.5rem; text-align: center;">
    <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Neuen Benutzer hinzufügen</button>
    
    <div style="margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); background-color: white; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827;">Neuen Benutzer hinzufügen</h2>
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
              <option value="user">Benutzer</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
            </select>
          </div>
        </form>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="padding: 0.5rem 1rem; background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Abbrechen</button>
        <button style="padding: 0.5rem 1rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;">Benutzer hinzufügen</button>
      </div>
    </div>
  </div>
</div>

## Anpassung

Die Modal-Komponente kann mit CSS-Variablen angepasst werden:

```css
:root {
  --modal-z-index: 1000;
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  
  --modal-container-width: 32rem;
  --modal-container-max-width: calc(100vw - 2rem);
  --modal-container-max-height: calc(100vh - 2rem);
  --modal-container-bg: var(--color-white);
  --modal-container-border-radius: var(--radius-lg);
  --modal-container-shadow: var(--shadow-xl);
  
  --modal-header-padding: 1rem;
  --modal-header-border: 1px solid var(--color-neutral-200);
  
  --modal-title-font-size: 1.25rem;
  --modal-title-font-weight: 600;
  --modal-title-color: var(--color-neutral-900);
  
  --modal-content-padding: 1rem;
  --modal-footer-padding: 1rem;
  --modal-footer-border: 1px solid var(--color-neutral-200);
  
  /* Modal-Größen */
  --modal-sm-width: 20rem;
  --modal-lg-width: 40rem;
  --modal-xl-width: 56rem;
}
```

## JavaScript-Beispiel

Hier ist ein einfaches JavaScript-Beispiel für die Modal-Funktionalität:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Modal-Trigger
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
  
  // Modal schließen
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // ESC-Taste zum Schließen
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
    
    // Fokus auf das erste fokussierbare Element setzen
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

## Barrierefreiheit

- Verwende `role="dialog"` und `aria-modal="true"` für das Modal
- Füge `aria-labelledby` hinzu, das auf die ID des Modal-Titels verweist
- Stelle sicher, dass der Fokus beim Öffnen des Modals in das Modal gesetzt wird
- Halte den Fokus innerhalb des Modals, solange es geöffnet ist
- Ermögliche das Schließen des Modals mit der ESC-Taste
- Gib den Fokus an das auslösende Element zurück, wenn das Modal geschlossen wird
- Achte auf korrekten Farbkontrast für bessere Lesbarkeit
- Stelle sicher, dass Schaltflächen beschreibende Text- oder ARIA-Labels haben

## Browser-Kompatibilität

Die Modal-Komponente ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| Overlay-Effekte | ✅ | ✅ | ✅ | ✅ |
| CSS-Variablen | 49+ | 31+ | 9.1+ | 15+ |