---
title: API Reference
category: API
outline: deep
---

# API Reference

This comprehensive API reference documents all features, components, and utilities available in the Casoon UI Library. Use this reference to find detailed information about CSS variables, classes, and their usage.

## Overview

The Casoon UI Library is organized into several key systems and modules, each with its own set of components, variables, and utility classes. The library uses a layered approach to CSS, with a clear hierarchy to manage specificity and ensure consistent behavior.

### Layer System

The library organizes CSS into layers using the `@layer` directive for precise control over specificity. The layers are ordered from lowest to highest priority:

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       base,                 /* Basic element styles */
       logical-properties,   /* Logical properties for RTL/LTR support */
       accessibility,        /* Accessibility-related styles */
       elements,             /* Basic HTML element styles */
       custom-properties,    /* Registered CSS properties */
       core,                 /* Core functionalities */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variants */
       typography,           /* Typography system */
       layout,               /* Layout basics */
       layout-queries,       /* Container queries for layouts */
       utilities,            /* Atomic utility classes */
       components,           /* UI components */
       form,                 /* Form-related styles */
       animations,           /* Motion system */
       animation-contexts,   /* Context-related animations */
       effects,              /* Visual effects */
       smooth-scroll,        /* Scrolling behavior and effects */
       icons,                /* Icon system */
       themes;               /* Theming system */
```

For more details on the layer system, see the [Layer System Guide](/guide/layer-system).

## Core Systems

### Core Module

- [Core Variables](/api/core/variables) - Base CSS variables
- [Reset](/api/core/reset) - Browser reset and normalization
- [Logical Properties](/api/core/logical-properties) - Directional properties for RTL/LTR support
- [Accessibility](/api/core/accessibility) - Accessibility utilities and features

### Colors

- [Color Variables](/api/colors/variables) - Color tokens and variables
- [Color Utilities](/api/colors/utilities) - Classes for applying colors
- [Color Mix System](/api/colors/color-mix) - Color blending and transformation utilities

### Typography

- [Typography Variables](/api/typography/variables) - Font sizing, spacing, and scaling
- [Typography Classes](/api/typography/classes) - Text formatting utilities
- [Font System](/api/typography/fonts) - Available fonts and font families

### Layout

- [Layout Variables](/api/layout/variables) - Spacing, sizing, and breakpoints
- [Grid System](/api/layout/grid) - Grid-based layout utilities
- [Flexbox](/api/layout/flexbox) - Flexbox layout utilities
- [Container System](/api/layout/containers) - Container components and classes
- [Spacing](/api/layout/spacing) - Margin and padding utilities
- [Position](/api/layout/position) - Positioning utilities

## Components

### Basic Elements

- [Avatar](/api/components/avatar) - User avatars and placeholders
- [Button](/api/components/button) - Button styles and variants
- [Checkbox](/api/components/checkbox) - Checkbox inputs
- [Radio](/api/components/radio) - Radio button inputs
- [Select](/api/components/select) - Dropdown select components
- [Input](/api/components/input) - Text input fields
- [Textarea](/api/components/textarea) - Multi-line text inputs

### Complex Components

- [Card](/api/components/card) - Content containers
- [Modal](/api/components/modal) - Dialog and overlay components
- [Tab](/api/components/tab) - Tabbed interface components
- [Table](/api/components/table) - Data tables
- [Toast](/api/components/toast) - Notification components
- [Tooltip](/api/components/tooltip) - Contextual information popovers
- [Dropdown](/api/components/dropdown) - Dropdown menus
- [Form](/api/components/form) - Form layouts and validation

## Effects

- [Animation Variables](/api/effects/animation-variables) - Animation timing and easing
- [Animation Classes](/api/effects/animation-classes) - Predefined animations
- [Transitions](/api/effects/transitions) - Transition utilities
- [Transforms](/api/effects/transforms) - Transform utilities
- [Filters](/api/effects/filters) - Visual filter effects
- [Shadows](/api/effects/shadows) - Shadow utilities and classes

## Utilities

- [Display](/api/utilities/display) - Display property utilities
- [Visibility](/api/utilities/visibility) - Visibility control utilities
- [Size](/api/utilities/size) - Width and height utilities
- [Overflow](/api/utilities/overflow) - Overflow control utilities
- [Z-index](/api/utilities/z-index) - Stacking order utilities

## Themes

- [Theme Variables](/api/themes/variables) - Theme-specific variables
- [Dark Mode](/api/themes/dark-mode) - Dark theme implementation
- [Theme Customization](/api/themes/customization) - Creating custom themes

## Icons

- [Icon System](/api/icons/system) - Icon implementation
- [Available Icons](/api/icons/available) - Catalog of available icons
- [Icon Utilities](/api/icons/utilities) - Icon sizing and positioning

## JavaScript Utilities

- [Scroll Utilities](/api/js/scroll) - JavaScript scroll helpers
- [DOM Utilities](/api/js/dom) - DOM manipulation helpers
- [Animation Utilities](/api/js/animation) - JavaScript animation helpers

## Using the API Reference

### Finding What You Need

1. **By Category** - Browse the categories above to find related components and utilities
2. **By Component** - Look for specific components in the components section
3. **By CSS Property** - Find utilities that control specific CSS properties

### Understanding the Documentation

Each API documentation page includes:

- **Properties and Values** - Available CSS properties and their acceptable values
- **Usage Examples** - Code snippets showing how to use each feature
- **Browser Support** - Information about browser compatibility
- **Related Features** - Links to related components and utilities

### Version Information

This API reference documents version 0.6.9 of the Casoon UI Library. Check the [changelog](/changelog) for updates and changes between versions. 