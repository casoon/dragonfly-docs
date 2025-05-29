---
title: Drawer Component
outline: deep
---

# Drawer

The Drawer component provides a sliding panel that appears from the edge of the screen. It's commonly used for navigation menus, filters, or contextual information that doesn't need to be visible at all times but should be easily accessible.

## Basic Usage

```html
<button class="button" onclick="document.getElementById('basic-drawer').classList.add('open')">Open Drawer</button>

<div class="drawer-backdrop" id="basic-drawer-backdrop" onclick="document.getElementById('basic-drawer').classList.remove('open')"></div>

<div class="drawer" id="basic-drawer">
  <div class="drawer-header">
    <h3>Drawer Title</h3>
    <button class="drawer-close" onclick="document.getElementById('basic-drawer').classList.remove('open')">×</button>
  </div>
  <div class="drawer-body">
    <p>This is a basic drawer with header, body, and footer.</p>
    <ul class="menu">
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
      <li><a href="#">Menu Item 3</a></li>
    </ul>
  </div>
  <div class="drawer-footer">
    <button class="button" onclick="document.getElementById('basic-drawer').classList.remove('open')">Close</button>
  </div>
</div>

<script>
  // Simple implementation to manage backdrop
  const drawer = document.getElementById('basic-drawer');
  const backdrop = document.getElementById('basic-drawer-backdrop');
  
  drawer.addEventListener('transitionend', () => {
    if (!drawer.classList.contains('open')) {
      backdrop.style.display = 'none';
    }
  });
  
  const openDrawer = () => {
    backdrop.style.display = 'block';
    setTimeout(() => {
      drawer.classList.add('open');
      backdrop.classList.add('visible');
    }, 10);
  };
</script>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('basic-drawer').classList.add('open'); document.getElementById('basic-drawer-backdrop').style.display = 'block';">Open Drawer</button>

  <div class="drawer-backdrop" id="basic-drawer-backdrop" onclick="document.getElementById('basic-drawer').classList.remove('open'); this.style.display = 'none';"></div>

  <div class="drawer" id="basic-drawer">
    <div class="drawer-header">
      <h3>Drawer Title</h3>
      <button class="drawer-close" onclick="document.getElementById('basic-drawer').classList.remove('open'); document.getElementById('basic-drawer-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This is a basic drawer with header, body, and footer.</p>
      <ul class="menu">
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
      </ul>
    </div>
    <div class="drawer-footer">
      <button class="button" onclick="document.getElementById('basic-drawer').classList.remove('open'); document.getElementById('basic-drawer-backdrop').style.display = 'none';">Close</button>
    </div>
  </div>
</div>

## Variants

### Position Variants

Drawers can slide in from different edges of the screen.

```html
<button class="button" onclick="document.getElementById('left-drawer').classList.add('open')">Left Drawer</button>
<button class="button" onclick="document.getElementById('right-drawer').classList.add('open')">Right Drawer</button>
<button class="button" onclick="document.getElementById('top-drawer').classList.add('open')">Top Drawer</button>
<button class="button" onclick="document.getElementById('bottom-drawer').classList.add('open')">Bottom Drawer</button>

<div class="drawer left" id="left-drawer"><!-- Left drawer (default) --></div>
<div class="drawer right" id="right-drawer"><!-- Right drawer --></div>
<div class="drawer top" id="top-drawer"><!-- Top drawer --></div>
<div class="drawer bottom" id="bottom-drawer"><!-- Bottom drawer --></div>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('left-drawer').classList.add('open'); document.getElementById('drawer-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Left Drawer</button>
  <button class="button" onclick="document.getElementById('right-drawer').classList.add('open'); document.getElementById('drawer-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Right Drawer</button>
  <button class="button" onclick="document.getElementById('top-drawer').classList.add('open'); document.getElementById('drawer-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Top Drawer</button>
  <button class="button" onclick="document.getElementById('bottom-drawer').classList.add('open'); document.getElementById('drawer-backdrop').style.display = 'block';">Bottom Drawer</button>

  <div class="drawer-backdrop" id="drawer-backdrop" onclick="
    document.getElementById('left-drawer').classList.remove('open');
    document.getElementById('right-drawer').classList.remove('open');
    document.getElementById('top-drawer').classList.remove('open');
    document.getElementById('bottom-drawer').classList.remove('open');
    this.style.display = 'none';
  "></div>

  <div class="drawer left" id="left-drawer">
    <div class="drawer-header">
      <h3>Left Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('left-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer slides in from the left.</p>
    </div>
  </div>

  <div class="drawer right" id="right-drawer">
    <div class="drawer-header">
      <h3>Right Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('right-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer slides in from the right.</p>
    </div>
  </div>

  <div class="drawer top" id="top-drawer">
    <div class="drawer-header">
      <h3>Top Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('top-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer slides in from the top.</p>
    </div>
  </div>

  <div class="drawer bottom" id="bottom-drawer">
    <div class="drawer-header">
      <h3>Bottom Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('bottom-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer slides in from the bottom.</p>
    </div>
  </div>
</div>

### Size Variants

Drawers come in different widths to accommodate various content needs.

```html
<div class="drawer sm"><!-- Small drawer --></div>
<div class="drawer"><!-- Medium drawer (default) --></div>
<div class="drawer lg"><!-- Large drawer --></div>
<div class="drawer full"><!-- Full-width/height drawer --></div>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('small-drawer').classList.add('open'); document.getElementById('size-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Small Drawer</button>
  <button class="button" onclick="document.getElementById('medium-drawer').classList.add('open'); document.getElementById('size-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Medium Drawer</button>
  <button class="button" onclick="document.getElementById('large-drawer').classList.add('open'); document.getElementById('size-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Large Drawer</button>
  <button class="button" onclick="document.getElementById('full-drawer').classList.add('open'); document.getElementById('size-backdrop').style.display = 'block';">Full Drawer</button>

  <div class="drawer-backdrop" id="size-backdrop" onclick="
    document.getElementById('small-drawer').classList.remove('open');
    document.getElementById('medium-drawer').classList.remove('open');
    document.getElementById('large-drawer').classList.remove('open');
    document.getElementById('full-drawer').classList.remove('open');
    this.style.display = 'none';
  "></div>

  <div class="drawer left sm" id="small-drawer">
    <div class="drawer-header">
      <h3>Small Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('small-drawer').classList.remove('open'); document.getElementById('size-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This is a small drawer.</p>
    </div>
  </div>

  <div class="drawer left" id="medium-drawer">
    <div class="drawer-header">
      <h3>Medium Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('medium-drawer').classList.remove('open'); document.getElementById('size-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This is a medium drawer (default size).</p>
    </div>
  </div>

  <div class="drawer left lg" id="large-drawer">
    <div class="drawer-header">
      <h3>Large Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('large-drawer').classList.remove('open'); document.getElementById('size-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This is a large drawer.</p>
    </div>
  </div>

  <div class="drawer left full" id="full-drawer">
    <div class="drawer-header">
      <h3>Full Drawer</h3>
      <button class="drawer-close" onclick="document.getElementById('full-drawer').classList.remove('open'); document.getElementById('size-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer takes up the full width/height.</p>
    </div>
  </div>
</div>

### Style Variants

Different visual styles for the drawer.

```html
<div class="drawer"><!-- Default style --></div>
<div class="drawer bordered"><!-- With prominent border --></div>
<div class="drawer elevated"><!-- With shadow elevation --></div>
<div class="drawer transparent"><!-- With transparent background --></div>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('default-drawer').classList.add('open'); document.getElementById('style-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Default</button>
  <button class="button" onclick="document.getElementById('bordered-drawer').classList.add('open'); document.getElementById('style-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Bordered</button>
  <button class="button" onclick="document.getElementById('elevated-drawer').classList.add('open'); document.getElementById('style-backdrop').style.display = 'block';" style="margin-right: 0.5rem;">Elevated</button>
  <button class="button" onclick="document.getElementById('transparent-drawer').classList.add('open'); document.getElementById('style-backdrop').style.display = 'block';">Transparent</button>

  <div class="drawer-backdrop" id="style-backdrop" onclick="
    document.getElementById('default-drawer').classList.remove('open');
    document.getElementById('bordered-drawer').classList.remove('open');
    document.getElementById('elevated-drawer').classList.remove('open');
    document.getElementById('transparent-drawer').classList.remove('open');
    this.style.display = 'none';
  "></div>

  <div class="drawer right" id="default-drawer">
    <div class="drawer-header">
      <h3>Default Style</h3>
      <button class="drawer-close" onclick="document.getElementById('default-drawer').classList.remove('open'); document.getElementById('style-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This uses the default drawer style.</p>
    </div>
  </div>

  <div class="drawer right bordered" id="bordered-drawer">
    <div class="drawer-header">
      <h3>Bordered Style</h3>
      <button class="drawer-close" onclick="document.getElementById('bordered-drawer').classList.remove('open'); document.getElementById('style-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer has a more prominent border.</p>
    </div>
  </div>

  <div class="drawer right elevated" id="elevated-drawer">
    <div class="drawer-header">
      <h3>Elevated Style</h3>
      <button class="drawer-close" onclick="document.getElementById('elevated-drawer').classList.remove('open'); document.getElementById('style-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer has a shadow for elevation.</p>
    </div>
  </div>

  <div class="drawer right transparent" id="transparent-drawer">
    <div class="drawer-header">
      <h3>Transparent Style</h3>
      <button class="drawer-close" onclick="document.getElementById('transparent-drawer').classList.remove('open'); document.getElementById('style-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <p>This drawer has a transparent background.</p>
    </div>
  </div>
</div>

## Usage Examples

### Navigation Drawer

A common use case for drawers is to provide site navigation.

```html
<button class="button" onclick="document.getElementById('nav-drawer').classList.add('open')">Menu</button>

<div class="drawer left" id="nav-drawer">
  <div class="drawer-header">
    <h3>Navigation</h3>
    <button class="drawer-close" onclick="document.getElementById('nav-drawer').classList.remove('open')">×</button>
  </div>
  <div class="drawer-body">
    <nav class="menu vertical">
      <li class="menu-item active">
        <a href="#">Home</a>
      </li>
      <li class="menu-item">
        <a href="#">Products</a>
      </li>
      <li class="menu-item">
        <a href="#">Services</a>
      </li>
      <li class="menu-item">
        <a href="#">About</a>
      </li>
      <li class="menu-item">
        <a href="#">Contact</a>
      </li>
    </nav>
  </div>
  <div class="drawer-footer">
    <button class="button sm">Sign In</button>
    <button class="button primary sm">Sign Up</button>
  </div>
</div>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('nav-drawer').classList.add('open'); document.getElementById('nav-backdrop').style.display = 'block';">Menu</button>

  <div class="drawer-backdrop" id="nav-backdrop" onclick="document.getElementById('nav-drawer').classList.remove('open'); this.style.display = 'none';"></div>

  <div class="drawer left" id="nav-drawer">
    <div class="drawer-header">
      <h3>Navigation</h3>
      <button class="drawer-close" onclick="document.getElementById('nav-drawer').classList.remove('open'); document.getElementById('nav-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <nav class="menu vertical">
        <li class="menu-item active">
          <a href="#">Home</a>
        </li>
        <li class="menu-item">
          <a href="#">Products</a>
        </li>
        <li class="menu-item">
          <a href="#">Services</a>
        </li>
        <li class="menu-item">
          <a href="#">About</a>
        </li>
        <li class="menu-item">
          <a href="#">Contact</a>
        </li>
      </nav>
    </div>
    <div class="drawer-footer">
      <button class="button sm">Sign In</button>
      <button class="button primary sm">Sign Up</button>
    </div>
  </div>
</div>

### Filter Drawer

Drawers can be used to hold filter controls for a list or grid of items.

```html
<button class="button" onclick="document.getElementById('filter-drawer').classList.add('open')">Filters</button>

<div class="drawer right" id="filter-drawer">
  <div class="drawer-header">
    <h3>Filter Products</h3>
    <button class="drawer-close" onclick="document.getElementById('filter-drawer').classList.remove('open')">×</button>
  </div>
  <div class="drawer-body">
    <form>
      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" class="select">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div class="form-group">
        <label>Price Range</label>
        <div class="range-slider">
          <input type="range" min="0" max="1000" value="500" class="slider" id="price-range">
          <output>$500</output>
        </div>
      </div>
      <div class="form-group">
        <label>Options</label>
        <div class="checkbox">
          <input type="checkbox" id="in-stock" checked>
          <label for="in-stock">In Stock</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="on-sale">
          <label for="on-sale">On Sale</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="free-shipping">
          <label for="free-shipping">Free Shipping</label>
        </div>
      </div>
    </form>
  </div>
  <div class="drawer-footer">
    <button class="button" onclick="document.getElementById('filter-drawer').classList.remove('open')">Cancel</button>
    <button class="button primary" onclick="document.getElementById('filter-drawer').classList.remove('open')">Apply Filters</button>
  </div>
</div>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('filter-drawer').classList.add('open'); document.getElementById('filter-backdrop').style.display = 'block';">Filters</button>

  <div class="drawer-backdrop" id="filter-backdrop" onclick="document.getElementById('filter-drawer').classList.remove('open'); this.style.display = 'none';"></div>

  <div class="drawer right" id="filter-drawer">
    <div class="drawer-header">
      <h3>Filter Products</h3>
      <button class="drawer-close" onclick="document.getElementById('filter-drawer').classList.remove('open'); document.getElementById('filter-backdrop').style.display = 'none';">×</button>
    </div>
    <div class="drawer-body">
      <form>
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" class="select">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div class="form-group">
          <label>Price Range</label>
          <div class="range-slider">
            <input type="range" min="0" max="1000" value="500" class="slider" id="price-range">
            <output>$500</output>
          </div>
        </div>
        <div class="form-group">
          <label>Options</label>
          <div class="checkbox">
            <input type="checkbox" id="in-stock" checked>
            <label for="in-stock">In Stock</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="on-sale">
            <label for="on-sale">On Sale</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="free-shipping">
            <label for="free-shipping">Free Shipping</label>
          </div>
        </div>
      </form>
    </div>
    <div class="drawer-footer">
      <button class="button" onclick="document.getElementById('filter-drawer').classList.remove('open'); document.getElementById('filter-backdrop').style.display = 'none';">Cancel</button>
      <button class="button primary" onclick="document.getElementById('filter-drawer').classList.remove('open'); document.getElementById('filter-backdrop').style.display = 'none';">Apply Filters</button>
    </div>
  </div>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component modules */
@import '@casoon/ui-lib/ui/components/drawer.css';
```

## CSS Variables

The Drawer component can be customized using CSS variables:

```css
:root {
  --drawer-background: var(--color-background);
  --drawer-border: 1px solid var(--color-border);
  --drawer-border-radius: 0;
  --drawer-box-shadow: var(--shadow-lg);
  
  --drawer-width-sm: 240px;
  --drawer-width: 320px;
  --drawer-width-lg: 400px;
  
  --drawer-height-sm: 240px;
  --drawer-height: 320px;
  --drawer-height-lg: 400px;
  
  --drawer-z-index: 1000;
  --drawer-transition-duration: 0.3s;
  --drawer-transition-timing: ease-in-out;
  
  --drawer-header-padding: 1rem 1.5rem;
  --drawer-header-border-bottom: 1px solid var(--color-border);
  --drawer-header-background: var(--color-background);
  
  --drawer-body-padding: 1.5rem;
  --drawer-body-background: var(--color-background);
  
  --drawer-footer-padding: 1rem 1.5rem;
  --drawer-footer-border-top: 1px solid var(--color-border);
  --drawer-footer-background: var(--color-background-100);
  --drawer-footer-gap: 0.5rem;
  
  --drawer-backdrop-background: rgba(0, 0, 0, 0.5);
  --drawer-backdrop-blur: 0;
  --drawer-backdrop-z-index: 999;
}
```

### Available Variables

| variable | Default | Description |
|----------|---------|-------------|
| `--drawer-background` | `var(--color-background)` | Background color of the drawer |
| `--drawer-border` | `1px solid var(--color-border)` | Border of the drawer |
| `--drawer-border-radius` | `0` | Border radius of the drawer |
| `--drawer-box-shadow` | `var(--shadow-lg)` | Box shadow of the drawer |
| `--drawer-width-sm` | `240px` | Width of small drawer |
| `--drawer-width` | `320px` | Width of medium drawer (default) |
| `--drawer-width-lg` | `400px` | Width of large drawer |
| `--drawer-height-sm` | `240px` | Height of small drawer (for top/bottom) |
| `--drawer-height` | `320px` | Height of medium drawer (for top/bottom) |
| `--drawer-height-lg` | `400px` | Height of large drawer (for top/bottom) |
| `--drawer-z-index` | `1000` | Z-index of the drawer |
| `--drawer-transition-duration` | `0.3s` | Duration of drawer animations |
| `--drawer-transition-timing` | `ease-in-out` | Timing function for animations |
| `--drawer-header-padding` | `1rem 1.5rem` | Padding of the header |
| `--drawer-header-border-bottom` | `1px solid var(--color-border)` | Border at the bottom of the header |
| `--drawer-header-background` | `var(--color-background)` | Background color of the header |
| `--drawer-body-padding` | `1.5rem` | Padding of the body |
| `--drawer-body-background` | `var(--color-background)` | Background color of the body |
| `--drawer-footer-padding` | `1rem 1.5rem` | Padding of the footer |
| `--drawer-footer-border-top` | `1px solid var(--color-border)` | Border at the top of the footer |
| `--drawer-footer-background` | `var(--color-background-100)` | Background color of the footer |
| `--drawer-footer-gap` | `0.5rem` | Gap between footer elements |
| `--drawer-backdrop-background` | `rgba(0, 0, 0, 0.5)` | Background color of the backdrop |
| `--drawer-backdrop-blur` | `0` | Backdrop blur amount |
| `--drawer-backdrop-z-index` | `999` | Z-index of the backdrop |

## Accessibility

The Drawer component is designed with accessibility in mind:

- **Keyboard Navigation**: 
  - Escape key should close the drawer
  - Tab key should navigate through focusable elements inside the drawer
  - Focus is trapped within the drawer while open
- **Focus Management**: 
  - When opened, focus should automatically move to the first focusable element in the drawer
  - When closed, focus should return to the element that triggered the drawer
- **ARIA Attributes**:
  - `role="dialog"` indicates the drawer's purpose
  - `aria-modal="true"` indicates it's a modal element
  - `aria-labelledby` associates the drawer with its header for screen readers
- **Screen Reader Announcements**:
  - Opening and closing of the drawer should be announced to screen readers
- **Motion Reduction**:
  - Animations should respect the user's motion preferences via `prefers-reduced-motion`

```html
<!-- Accessible drawer implementation -->
<div class="drawer" id="accessible-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-describedby="drawer-description">
  <div class="drawer-header">
    <h3 id="drawer-title">Drawer Title</h3>
    <button class="drawer-close" aria-label="Close drawer">×</button>
  </div>
  <div class="drawer-body">
    <p id="drawer-description">Drawer content description.</p>
    <!-- Drawer content -->
  </div>
</div>
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| CSS transitions | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Position fixed | ✅ | ✅ | ✅ | ✅ | ✅ |
| Transform transitions | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Backdrop filter | ✅ | ✅ | ✅ | ✅ | ❌ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

**Note**: For IE support, consider using polyfills or alternative implementations for modern CSS features.

## Performance Considerations

- **Animation Performance**: Use CSS transforms for animations instead of animating width/height properties
- **DOM Size**: Be cautious about including large, complex content within drawers
- **Event Handling**: Properly manage event listeners to prevent memory leaks
- **Backdrop Blur**: Be aware that backdrop blur can cause performance issues on some devices
- **Touch Events**: For mobile devices, consider implementing touch gestures for opening/closing drawers
- **Rendering Optimization**: Use `will-change` property judiciously to optimize performance
- **Lazy Loading**: Consider lazy loading drawer content if it's complex or data-heavy

## Related Components

- [Dialog](/components/dialog/) - Modal dialog component
- [Modal](/components/modal/) - Centered modal window
- [Navigation](/components/navigation/) - Site navigation component
- [Sidebar](/components/sidebar/) - Permanent sidebar component
- [Menu](/components/menu/) - Menu component often used inside drawers
</rewritten_file> 