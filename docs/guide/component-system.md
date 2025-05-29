---
title: modules system
category: Guide
---

# modules system

The Casoon UI Library modules system organizes components into independent, standalone CSS modules that are loaded through a central control.

## Structure of the modules system

The modules are organized in the `modules.css` file:

```css
/**
 * Modules CSS
 *
 * Central file for organizing and including all modules.
 * Each modules is defined in its own layer to avoid conflicts.
 */

/* Alert modules */
@import '@casoon/ui-lib/components/alert.css';

/* avatar modules */
@import '@casoon/ui-lib/components/avatar.css';

/* badge modules */
@import '@casoon/ui-lib/components/badge.css';

/* Additional modules... */
```

Each modules is imported in its own layer, which offers the following advantages:
- Avoiding name conflicts
- Clear separation of responsibilities
- Independent modification of individual modules
- Improved maintainability through modularity

## Available Modules

The Casoon UI Library includes the following modules:

- **alert** - Feedback and notification messages
- **avatar** - User images and representations
- **badge** - Status indicators and small labels
- **blog** - layout elements for blog posts
- **button** - Interactive buttons
- **card** - Containers for related content
- **checkbox** - Multiple-choice elements
- **chip** - Compact information elements
- **code** - Display of code blocks
- **file** - File upload components
- **footer** - Page footer area
- **form** - Form elements and layouts
- **hamburger** - Mobile menu control
- **header** - Page header area
- **input** - Text input fields
- **input-group** - Grouped inputs
- **modal** - Dialogs and overlays
- **notification** - Notification system
- **progress** - Progress indicators
- **radio** - Single-choice elements
- **select** - Selects
- **sidebar** - Side navigation
- **skeleton** - Loading placeholders
- **slider** - Value sliders
- **spinners** - Loading animations
- **switch** - On/Off switches
- **table** - Table components
- **tabs** - Tab navigation
- **textarea** - Multi-line text fields
- **toast** - Temporary notifications
- **tooltip** - Help texts
- **widget** - Flexible content containers
- **wizard** - Multi-step processes

## modules Usage in Your Own Projects

To use modules in your project:

### 1. Complete Integration of All Modules

Import the core.css, which automatically loads all modules:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selective Integration of Individual Modules

You can also import only selected modules:

```css
/* Import Base Layer system */
@import "@casoon/ui-lib/layers.css";

/* Only import needed modules */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/input.css";
@import "@casoon/ui-lib/components/card.css";
```

## Customization of Modules

### Overriding modules Styles

You can customize modules styles by using the corresponding layer:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Customization of the button component */
@layer modules-button {
  .btn--primary {
    background-color: var(--color-brand);
    border-radius: var(--radius-lg);
  }
}
```

### Extending Modules

Existing modules can be extended:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Extension of the Card component */
@layer modules-card {
  .card--gradient {
    background: linear-gradient(to right, var(--color-primary), var(--color-accent));
    color: var(--color-on-primary);
  }
}
```

## modules Architecture

Each modules follows a consistent architecture:

1. **Base class** - Basic functionality (`.btn`, `.card`, etc.)
2. **Variants** - Functional variants (`.btn--primary`, `.card--interactive`)
3. **Sizes** - Size variants (`.btn--sm`, `.btn--lg`)
4. **States** - Status classes (`.btn--disabled`, `.card--active`)
5. **Modifiers** - Additional customizations (`.btn--rounded`, `.card--shadow`)

## Best Practices

- **Use Modularization** - Only use the modules you need
- **Consistent Naming Conventions** - Follow the format `[base-class]--[modifier]`
- **Respect Layers** - Make customizations within the corresponding modules layer
- **modules Combination** - Use multiple modules together for complex UI elements
- **Consider Themability** - Use tokens to make modules theme-friendly 