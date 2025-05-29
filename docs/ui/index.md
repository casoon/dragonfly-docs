---
title: UI System
category: UI
---

# UI System

The UI System of the Casoon UI Library offers a comprehensive collection of elements and components for creating modern, accessible and appealing user interfaces.

## Overview

The UI System is divided into two main categories:

- **Elements**: Basic UI building blocks like buttons, inputs, avatars and badges
- **Components**: More complex components consisting of multiple elements, such as cards, dialogs, forms and navigation

## Philosophy

The UI System of the Casoon UI Library is based on the following principles:

1. **Modularity**: Independent, reusable building blocks
2. **Consistency**: Unified appearance
3. **Accessibility**: Compliance with WCAG guidelines
4. **Customizability**: Flexibility for individual requirements
5. **User-friendliness**: Focus on intuitive operation

## Elements vs. Components

### Elements

Elements are the fundamental building blocks of the user interface. They are typically standalone and fulfill a specific function:

- Button
- Input
- Checkbox
- Radio
- Select
- Slider
- Switch
- Avatar
- Badge
- Chip
- Tooltip
- etc.

[Go to Elements](/ui/elements/)

### Components

Components are more complex UI structures that consist of multiple elements and offer advanced functionality:

- Action Bar
- Alert
- Back to Top
- Breadcrumbs
- Card
- Dialog
- Drawer
- Form
- Modal
- Pagination
- Table
- Tabs
- etc.

[Go to Components](/ui/components/)

## Usage

The UI System can be integrated as a whole or modularly:

```css
/* Entire UI System */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/ui.css';

/* Or only individual components */
@import '@casoon/ui-lib/ui/elements/button.css';
@import '@casoon/ui-lib/ui/components/card.css';
```

## Customizability

All UI elements and components can be customized via CSS variables and modifiers:

```css
:root {
  --button-radius: 0.5rem;
  --button-primary-bg: var(--color-brand-500);
}
``` 