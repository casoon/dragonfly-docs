---
title: Storybook Integration
category: Storybook
---

# Storybook Integration

The Casoon UI Library offers seamless integration with Storybook, a powerful tool for developing and documenting UI components. This integration allows embedding interactive examples directly into the VitePress documentation, creating a comprehensive development experience.

## What is Storybook?

Storybook is an open-source environment for developing UI components in isolation. It enables developers to create, test, and document components independently of their application. The main advantages are:

- **Isolated Component Development**: Create and test components independently of your application logic
- **Interactive Documentation**: Display components in various states and with different parameters
- **Visual Testing**: Visually detect when changes have unintended effects
- **Central Hub**: Serves as a central point of reference for designers and developers

## Storybook in the Casoon UI Library

In the Casoon UI Library, Storybook is used to:

1. **Document All Components**: Each component has its own story showcasing its various states and usage possibilities
2. **Visualize Design Tokens**: Colors, typography, spacing, and other design variables are visually represented
3. **Provide Interactive Examples**: Users can interact with components and change properties in real-time
4. **Demonstrate Best Practices**: The stories showcase recommended usage patterns

## Accessing the Storybook

The Storybook for the Casoon UI Library is available at the following locations:

- **Online**: [https://casoon.github.io/ui-lib/storybook](https://casoon.github.io/ui-lib/storybook)
- **Locally**: After installing the library, you can run Storybook locally with:

```bash
npx storybook@latest dev -p 6006 -c node_modules/@casoon/ui-lib/.storybook
```

## VitePress and Storybook: A Powerful Combination

The integration of VitePress (this documentation) and Storybook provides a comprehensive approach to documentation:

- **VitePress** offers detailed explanations, concepts, and guides
- **Storybook** shows interactive examples, variations, and practical use cases

Together, they form a powerful reference system for developers working with the Casoon UI Library.

## Next Steps

Explore the integration of Storybook in this documentation:

- [Setup Integration](/storybook/integration) - Learn how to set up Storybook in your own projects
- [Component Examples](/storybook/component-examples) - See examples for all UI components
- [Embedding Stories](/storybook/embedding) - Learn how to embed Storybook examples in your own documentation 