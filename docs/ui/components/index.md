---
title: UI Components
category: UI
---

# UI Components

UI Components are complex user interface elements of the Casoon UI Library that consist of multiple UI Elements and provide advanced functionality.

## Overview

UI Components are characterized by the following properties:

- **Complexity**: Composition of multiple UI Elements
- **Functionality**: Provide advanced interaction possibilities
- **Reusability**: Can be used in various application contexts
- **Composition**: Can be combined with other components

## Available Components

The Casoon UI Library offers the following UI Components:

### Basic Categories

#### Content Components

- [Action Bar](/ui/components/action-bar/): Container for primary and secondary actions
- [Alert](/ui/components/alert/): Notifications and warning messages
- [Card](/ui/components/card/): Container for related content
- [Dialog](/ui/components/dialog/): Modal windows for user interactions
- [Drawer](/ui/components/drawer/): Side panels for navigation or additional information

#### Navigation Components

- [Back to Top](/ui/components/back-to-top/): Button to scroll to the top of the page
- [Breadcrumbs](/ui/components/breadcrumbs/): Navigation path display
- [Footer](/ui/components/footer/): Footer component
- [Header](/ui/components/header/): Header component
- [Pagination](/ui/components/pagination/): Page navigation for lists
- [Sidebar](/ui/components/sidebar/): Sidebar for navigation
- [Tabs](/ui/components/tabs/): Tab navigation for different content

#### Form Components

- [File Upload](/ui/components/file/): File upload control
- [Form](/ui/components/form/): Form wrapper with validation
- [Input Group](/ui/components/input-group/): Grouping of input fields

#### Feedback Components

- [Modal](/ui/components/modal/): Modal window for important interactions
- [Notification](/ui/components/notification/): System notifications
- [Progress](/ui/components/progress/): Progress indicator
- [Skeleton](/ui/components/skeleton/): Loading placeholder
- [Toast](/ui/components/toast/): Temporary notifications

#### Tabular Components

- [Table](/ui/components/table/): Tabular data view

### Advanced Components

- [Blog](/ui/components/blog/): Blog post layout
- [Hamburger Menu](/ui/components/hamburger/): Mobile menu control
- [Widget](/ui/components/widget/): Standalone content blocks
- [Wizard](/ui/components/wizard/): Multi-step forms and processes

## Usage

UI Components can be imported individually or as part of the entire UI system:

```css
/* Entire UI system */
@import '@casoon/ui-lib/ui.css';

/* Or only individual components */
@import '@casoon/ui-lib/ui/components/card.css';
@import '@casoon/ui-lib/ui/components/dialog.css';
```

## Customization

All UI Components can be customized using CSS variables and modifiers:

```css
:root {
  /* Card customizations */
  --card-radius: 0.5rem;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Dialog customizations */
  --dialog-backdrop: rgba(0, 0, 0, 0.5);
  --dialog-animation-duration: 200ms;
}
```

## Accessibility

All UI Components are designed for optimal accessibility:

- Semantic HTML structure
- ARIA attributes for screen readers
- Focus management for keyboard navigation
- Sufficient color contrasts
- Responsive design for all screen sizes 