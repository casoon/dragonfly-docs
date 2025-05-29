---
title: Effects system
category: Guide
---

# Effects system

The Effects system in Casoon UI has been revised to provide better modularity and flexibility. It consists of basic effects (such as animations and transitions) and specific visual effects that can be imported and used individually.

## Basic Effects

The basic effects are included in the Core CSS and provide fundamental animations and transitions:

```css
@import '@casoon/ui-lib/core.css';
```

### Available Basic Effects

#### Transitions
```css
/* Standard transition */
.transition {
  transition: all 0.3s ease;
}

/* Fast transition */
.transition-fast {
  transition: all 0.15s ease;
}

/* Slow transition */
.transition-slow {
  transition: all 0.5s ease;
}

/* Specific transition */
.transition-transform {
  transition: transform 0.3s ease;
}
```

#### Animations
```css
/* Fade-In */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}

/* Fade-Out */
.animate-fade-out {
  animation: fadeOut 0.3s ease-out;
}

/* Slide-In */
.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

/* Slide-Out */
.animate-slide-out {
  animation: slideOut 0.3s ease-in;
}
```

## Specific Effects

The specific effects must be imported individually to optimize bundle size.

### Blur Effect
```css
@import '@casoon/ui-lib/effects/blur.css';
```

Available classes:
- `.blur-sm`: Light blur effect (4px)
- `.blur-md`: Medium blur effect (8px)
- `.blur-lg`: Strong blur effect (16px)
- `.blur-xl`: Extra strong blur effect (24px)

Example with transition:
```html
<div class="blur-sm transition">
  <!-- Content becomes softly blurred -->
</div>
```

### Shadow Effect
```css
@import '@casoon/ui-lib/effects/shadow.css';
```

Available classes:
- `.shadow-sm`: Light shadow (2px)
- `.shadow-md`: Medium shadow (4px)
- `.shadow-lg`: Strong shadow (8px)
- `.shadow-xl`: Extra strong shadow (16px)
- `.shadow-inner`: Inner shadow
- `.shadow-none`: No shadow

Example with hover effect:
```html
<div class="shadow-md transition hover:shadow-lg">
  <!-- Shadow intensifies on hover -->
</div>
```

### Glass Effect
```css
@import '@casoon/ui-lib/effects/glass.css';
```

Available classes:
- `.glass`: Standard glass effect
- `.glass-dark`: Dark glass effect
- `.glass-light`: Light glass effect
- `.glass-blur`: Glass effect with blur
- `.glass-border`: Glass effect with border

Example with animation:
```html
<div class="glass animate-fade-in">
  <!-- Glass effect fades in -->
</div>
```

## Combined Effects

Effects can be combined to create more complex visual appearances:

```html
<!-- Glass card with shadow and blur -->
<div class="glass shadow-lg blur-sm transition hover:shadow-xl">
  <h2 class="text-xl font-bold">Glass Card</h2>
  <p>A card with combined effects</p>
</div>

<!-- Animated container with blur -->
<div class="blur-md animate-fade-in">
  <div class="glass-light shadow-md">
    <p>Animated content with blur and glass</p>
  </div>
</div>
```

## Performance Optimization

1. **Selective Imports**
   ```css
   /* Import only the required effects */
   @import '@casoon/ui-lib/effects/shadow.css';
   @import '@casoon/ui-lib/effects/glass.css';
   ```

2. **Consolidate Effects**
   ```css
   /* In your own CSS file */
   @import '@casoon/ui-lib/effects/shadow.css';
   @import '@casoon/ui-lib/effects/glass.css';
   
   /* Define your own combinations */
   .card-glass {
     @apply glass shadow-lg transition;
   }
   ```

## Best Practices

1. **Accessibility**
   - Use blur effects sparingly
   - Ensure text with blur effect is still readable
   - Provide alternatives for users who have disabled animations

2. **Performance**
   - Import only the needed effects
   - Avoid too many combined effects
   - Use hardware acceleration where possible

3. **Responsive Design**
   - Test effects on different devices
   - Reduce effects on mobile devices
   - Consider performance on weaker devices

4. **Browser Compatibility**
   - Test effects in different browsers
   - Provide fallbacks for older browsers
   - Use feature detection for progressive enhancement

## Troubleshooting

### Effects are not displayed
- Check the import paths
- Ensure the layer order is correct
- Check for CSS conflicts

### Performance issues
- Reduce the number of effects
- Optimize animations with `will-change`
- Use `transform` instead of `top/left` for animations

### Browser-specific issues
- Use vendor prefixes where necessary
- Test in different browsers
- Provide fallbacks for older browsers 