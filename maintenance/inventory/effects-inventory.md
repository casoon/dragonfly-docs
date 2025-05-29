# Effects Inventory

This document provides a comprehensive list of all visual and interaction effects available in the `@casoon/ui-lib` design system, along with their current documentation status. Use this inventory for tracking documentation progress and identifying gaps.

## Interaction Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| Active | `effects/interaction/active.css` | Not documented separately | ❌ Missing |
| Cursors | `effects/interaction/cursors.css` | Not documented | ❌ Missing |
| Disabled | `effects/interaction/disabled.css` | Not documented separately | ❌ Missing |
| Error | `effects/interaction/error.css` | Not documented separately | ❌ Missing |
| Focus | `effects/interaction/focus.css` | [/effects/interaction/focus](/effects/interaction/focus/) | ✅ Complete |
| Hover | `effects/interaction/hover.css` | [/effects/interaction/hover](/effects/interaction/hover/) | ✅ Complete |
| Success | `effects/interaction/success.css` | Not documented separately | ❌ Missing |
| Warning | `effects/interaction/warning.css` | Not documented separately | ❌ Missing |

## Layout Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| Backdrops | `effects/layout-effects/backdrops.css` | Not documented | ❌ Missing |
| Clip Path | `effects/layout-effects/clip-path.css` | Not documented | ❌ Missing |
| Masks | `effects/layout-effects/masks.css` | Not documented | ❌ Missing |
| Outlines | `effects/layout-effects/outlines.css` | Not documented | ❌ Missing |
| Overlays | `effects/layout-effects/overlays.css` | Not documented | ❌ Missing |
| Skeleton | `effects/layout-effects/skeleton.css` | Related to [/components/skeleton](/components/skeleton/) | ⚠️ Partial |
| Transforms | `effects/layout-effects/transforms.css` | Not documented | ❌ Missing |

## Motion Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| Animations | `effects/motion/animations.css` | [/effects/animations](/effects/animations/) | ✅ Complete |
| Loading | `effects/motion/loading.css` | [/effects/state/loading](/effects/state/loading/) | ✅ Complete |
| Morph | `effects/motion/morph.css` | Not documented | ❌ Missing |
| Ripple | `effects/motion/ripple.css` | Not documented | ❌ Missing |
| Scroll | `effects/motion/scroll.css` | Not documented | ❌ Missing |
| Transitions | `effects/motion/transitions.css` | [/effects/transitions](/effects/transitions/) | ✅ Complete |
| Typing | `effects/motion/typing.css` | Not documented | ❌ Missing |

## Theme Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| 3D | `effects/themes/3d.css` | [/effects/3d](/effects/3d/) | ✅ Complete |
| Blends | `effects/themes/blends.css` | Not documented | ❌ Missing |
| Gradient | `effects/themes/gradient.css` | [/effects/gradient](/effects/gradient/) | ✅ Complete |
| Gradients | `effects/themes/gradients.css` | Related to gradient.css | ⚠️ Partial |
| Neos | `effects/themes/neos.css` | Not documented | ❌ Missing |
| Neumorphism | `effects/themes/neumorphism.css` | Not documented | ❌ Missing |

## Typography Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| Text Effects | `effects/typography/text-effects.css` | Not documented | ❌ Missing |

## Visual Effects

| Effect | CSS File | Documentation | Status |
|--------|----------|---------------|--------|
| Filters | `effects/visual/filters.css` | [/effects/filters](/effects/filters/) | ✅ Complete |
| Glass | `effects/visual/glass.css` | [/effects/glass](/effects/glass/) | ✅ Complete |
| Glow | `effects/visual/glow.css` | Not documented | ❌ Missing |
| Light | `effects/visual/light.css` | Not documented | ❌ Missing |
| Neon | `effects/visual/neon.css` | [/effects/neon](/effects/neon/) | ✅ Complete |
| Noise | `effects/visual/noise.css` | Not documented | ❌ Missing |
| Patterns | `effects/visual/patterns.css` | [/effects/patterns](/effects/patterns/) | ✅ Complete |
| Reflections | `effects/visual/reflections.css` | Not documented | ❌ Missing |
| Shadows | `effects/visual/shadows.css` | [/effects/shadows](/effects/shadows/) | ✅ Complete |
| Shine | `effects/visual/shine.css` | Not documented | ❌ Missing |
| Sparkle | `effects/visual/sparkle.css` | Not documented | ❌ Missing |
| Textures | `effects/visual/textures.css` | Not documented | ❌ Missing |
| Vignette | `effects/visual/vignette.css` | Not documented | ❌ Missing |

## Documentation Priority

Based on the current status, here's the prioritized list of effects that need documentation:

### High Priority (Visual Impact)
1. Glow
2. Light
3. Reflections
4. Noise
5. Textures
6. Neumorphism

### Medium Priority (Motion)
1. Morph
2. Ripple
3. Scroll
4. Typing

### Medium Priority (Layout)
1. Backdrops
2. Clip Path
3. Masks
4. Overlays
5. Transforms

### Lower Priority
1. Typography effects
2. Interaction states (active, disabled, error, success, warning)
3. Blends
4. Neos
5. Shine
6. Sparkle
7. Vignette
8. Cursors

## Next Steps

1. Use the documentation template to create pages for missing effects
2. Focus on high-priority effects first
3. Update this inventory as documentation is completed
4. Consider consolidating related effects into single documentation pages where appropriate
5. Ensure visual examples are provided for all effects 