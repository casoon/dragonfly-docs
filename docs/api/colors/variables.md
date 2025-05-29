---
title: Color Variables
category: API
outline: deep
---

# Color Variables

The Casoon UI Library provides a comprehensive set of color tokens that form the foundation of the design system's color palette. These color variables are organized into semantic categories and follow a consistent numbering pattern.

## Base Color Tokens

All color tokens follow a consistent naming pattern:

```css
--color-{category}-{shade}
```

Where:
- `{category}` is the color category (primary, secondary, success, etc.)
- `{shade}` is the numeric shade from 50 (lightest) to 900 (darkest)

## Primary Colors

The primary color palette is based on blue tones and is used for primary actions, links, and highlighting important UI elements.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-primary-50` | `#e6f0ff` | Lightest primary, for backgrounds |
| `--color-primary-100` | `#cce0ff` | Very light primary |
| `--color-primary-200` | `#99c2ff` | Light primary |
| `--color-primary-300` | `#66a3ff` | Medium-light primary |
| `--color-primary-400` | `#3385ff` | Medium primary |
| `--color-primary-500` | `#06f` | Base primary color |
| `--color-primary-600` | `#0052cc` | Medium-dark primary |
| `--color-primary-700` | `#003d99` | Dark primary |
| `--color-primary-800` | `#002966` | Very dark primary |
| `--color-primary-900` | `#001433` | Darkest primary |

## Secondary Colors

The secondary color palette is based on violet tones and is used for secondary actions, accents, and less prominent UI elements.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-secondary-50` | `#eeeaff` | Lightest secondary |
| `--color-secondary-100` | `#dcd6ff` | Very light secondary |
| `--color-secondary-200` | `#baadff` | Light secondary |
| `--color-secondary-300` | `#9784ff` | Medium-light secondary |
| `--color-secondary-400` | `#755cff` | Medium secondary |
| `--color-secondary-500` | `#5333ff` | Base secondary color |
| `--color-secondary-600` | `#4229cc` | Medium-dark secondary |
| `--color-secondary-700` | `#321f99` | Dark secondary |
| `--color-secondary-800` | `#211566` | Very dark secondary |
| `--color-secondary-900` | `#110a33` | Darkest secondary |

## Success Colors

The success color palette is based on green tones and is used for success states, confirmation messages, and positive indicators.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-success-50` | `#e6f9f1` | Lightest success |
| `--color-success-100` | `#ccf3e3` | Very light success |
| `--color-success-200` | `#99e7c7` | Light success |
| `--color-success-300` | `#66dbab` | Medium-light success |
| `--color-success-400` | `#33cf8f` | Medium success |
| `--color-success-500` | `#10b981` | Base success color |
| `--color-success-600` | `#0d9467` | Medium-dark success |
| `--color-success-700` | `#0a6f4d` | Dark success |
| `--color-success-800` | `#064a34` | Very dark success |
| `--color-success-900` | `#03251a` | Darkest success |

## Warning Colors

The warning color palette is based on orange tones and is used for warning states, alerts that require attention but aren't critical, and cautionary indicators.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-warning-50` | `#fef4e6` | Lightest warning |
| `--color-warning-100` | `#fdeacc` | Very light warning |
| `--color-warning-200` | `#fbd599` | Light warning |
| `--color-warning-300` | `#f9bf66` | Medium-light warning |
| `--color-warning-400` | `#f7aa33` | Medium warning |
| `--color-warning-500` | `#f59e0b` | Base warning color |
| `--color-warning-600` | `#c47e09` | Medium-dark warning |
| `--color-warning-700` | `#935f06` | Dark warning |
| `--color-warning-800` | `#623f04` | Very dark warning |
| `--color-warning-900` | `#312002` | Darkest warning |

## Error Colors

The error color palette is based on red tones and is used for error states, critical alerts, and negative indicators.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-error-50` | `#fdeded` | Lightest error |
| `--color-error-100` | `#fbdbdb` | Very light error |
| `--color-error-200` | `#f7b7b7` | Light error |
| `--color-error-300` | `#f39393` | Medium-light error |
| `--color-error-400` | `#ef6f6f` | Medium error |
| `--color-error-500` | `#ef4444` | Base error color |
| `--color-error-600` | `#bf3636` | Medium-dark error |
| `--color-error-700` | `#8f2929` | Dark error |
| `--color-error-800` | `#601b1b` | Very dark error |
| `--color-error-900` | `#300e0e` | Darkest error |

## Gray Colors

The gray color palette is a neutral set with a slight blue undertone. It is used for UI backgrounds, text, borders, and other neutral elements.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-gray-50` | `#f9f9fa` | Lightest gray, often used for backgrounds |
| `--color-gray-100` | `#f3f3f5` | Very light gray |
| `--color-gray-200` | `#e9eaef` | Light gray, often used for disabled states |
| `--color-gray-300` | `#d8dae3` | Medium-light gray, often used for borders |
| `--color-gray-400` | `#b9bdc9` | Medium gray |
| `--color-gray-500` | `#8f96a8` | Base gray color |
| `--color-gray-600` | `#6c7285` | Medium-dark gray, often used for secondary text |
| `--color-gray-700` | `#4a4e5c` | Dark gray |
| `--color-gray-780` | `#282b36` | Darker gray for better contrast on elevated elements |
| `--color-gray-800` | `#30333c` | Very dark gray |
| `--color-gray-850` | `#262830` | Intermediate value between 800 and 900 |
| `--color-gray-900` | `#1d1f24` | Darkest gray, often used for primary text in dark mode |

## Neutral Colors

The neutral color palette is a pure gray scale without any color tone. It's used when a completely neutral gray is needed.

| variable | Default Value | Description |
|----------|---------------|-------------|
| `--color-neutral-50` | `#f9fafb` | Lightest neutral |
| `--color-neutral-100` | `#f3f4f6` | Very light neutral |
| `--color-neutral-200` | `#e5e7eb` | Light neutral |
| `--color-neutral-300` | `#d1d5db` | Medium-light neutral |
| `--color-neutral-400` | `#9ca3af` | Medium neutral |
| `--color-neutral-500` | `#6b7280` | Base neutral color |
| `--color-neutral-600` | `#4b5563` | Medium-dark neutral |
| `--color-neutral-700` | `#374151` | Dark neutral |
| `--color-neutral-800` | `#1f2937` | Very dark neutral |
| `--color-neutral-900` | `#111827` | Darkest neutral |

## Usage

### In CSS

```css
.primary-button {
  background-color: var(--color-primary-500);
  color: white;
}

.primary-button:hover {
  background-color: var(--color-primary-600);
}

.secondary-text {
  color: var(--color-gray-600);
}

.success-message {
  color: var(--color-success-500);
  background-color: var(--color-success-50);
}
```

### Choosing the Right Shade

- **50-100:** Backgrounds, hover states for light themes
- **200-300:** Borders, separators, disabled states
- **400-600:** Primary UI elements, text on light backgrounds
- **700-900:** Text colors, dark UI elements, backgrounds for dark themes

## Customization

You can customize these color variables by redefining them in your own CSS file after importing the Casoon UI Library:

```css
@import '@casoon/ui-lib/core.css';

:root {
  /* Customize primary color to purple */
  --color-primary-500: #8a2be2;
  --color-primary-600: #7722c9;
  /* ... other primary shades ... */
}
```

For more comprehensive theming, see the [Theme Customization](/api/themes/customization) guide.

## Accessibility Considerations

When using these color variables, especially for text and interactive elements, ensure that you maintain sufficient color contrast for accessibility:

- Text should have a contrast ratio of at least 4.5:1 against its background
- Large text (18pt or 14pt bold) should have a contrast ratio of at least 3:1
- Interactive elements and graphical objects should have a contrast ratio of at least 3:1

The Casoon UI Library's default color shades are designed to meet these requirements when used as recommended, but always verify when customizing colors or creating new combinations. 