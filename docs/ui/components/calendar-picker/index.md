---
title: Calendar Picker Component
outline: deep
---


# Calendar Picker

The Calendar Picker component provides an interactive date selection interface. It allows users to browse through months and years to select dates, date ranges, or specific time periods.

## Installation

The Calendar Picker component is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all UI components */
@import '@casoon/ui-lib/ui.css';

/* Or just the Calendar Picker component */
@import '@casoon/ui-lib/ui/components/calendar-picker.css';
```

## Basic Usage

```html
<div class="calendar-picker">
  <div class="calendar-picker__header">
    <button class="calendar-picker__nav-btn prev-month">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </button>
    <div class="calendar-picker__title">March 2023</div>
    <button class="calendar-picker__nav-btn next-month">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </button>
  </div>
  <div class="calendar-picker__weekdays">
    <span>Su</span>
    <span>Mo</span>
    <span>Tu</span>
    <span>We</span>
    <span>Th</span>
    <span>Fr</span>
    <span>Sa</span>
  </div>
  <div class="calendar-picker__days">
    <!-- Previous month days -->
    <button class="calendar-picker__day prev-month">26</button>
    <!-- Current month days -->
    <button class="calendar-picker__day">1</button>
    <button class="calendar-picker__day">2</button>
    <button class="calendar-picker__day selected">3</button>
    <button class="calendar-picker__day today">4</button>
    <!-- More days... -->
  </div>
</div>
```

<div class="example-wrapper">
  <div style="width: 280px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-family: sans-serif;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <button style="border: none; background: none; cursor: pointer; color: #6b7280;">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      </button>
      <div style="font-weight: 600;">March 2023</div>
      <button style="border: none; background: none; cursor: pointer; color: #6b7280;">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      </button>
    </div>
    <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-size: 0.875rem; margin-bottom: 8px; color: #6b7280;">
      <span>Su</span>
      <span>Mo</span>
      <span>Tu</span>
      <span>We</span>
      <span>Th</span>
      <span>Fr</span>
      <span>Sa</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;">
      <button style="aspect-ratio: 1; border: none; background: none; color: #9ca3af; font-size: 0.875rem;">26</button>
      <button style="aspect-ratio: 1; border: none; background: none; font-size: 0.875rem;">1</button>
      <button style="aspect-ratio: 1; border: none; background: none; font-size: 0.875rem;">2</button>
      <button style="aspect-ratio: 1; border: none; background: #3b82f6; color: white; border-radius: 9999px; font-size: 0.875rem;">3</button>
      <button style="aspect-ratio: 1; border: 1px solid #3b82f6; background: none; color: #3b82f6; border-radius: 9999px; font-size: 0.875rem;">4</button>
      <button style="aspect-ratio: 1; border: none; background: none; font-size: 0.875rem;">5</button>
      <button style="aspect-ratio: 1; border: none; background: none; font-size: 0.875rem;">6</button>
    </div>
  </div>
</div>

## Variants

### Date Range Selection

```html
<div class="calendar-picker range-selection">
  <!-- Calendar structure -->
  <!-- Days with range classes -->
  <button class="calendar-picker__day range-start">10</button>
  <button class="calendar-picker__day in-range">11</button>
  <button class="calendar-picker__day range-end">12</button>
</div>
```

### With Time Picker

```html
<div class="calendar-picker with-time">
  <!-- Calendar structure -->
  <div class="calendar-picker__time">
    <div class="time-picker">
      <input type="number" min="0" max="23" value="14" class="time-picker__hours">
      <span>:</span>
      <input type="number" min="0" max="59" value="30" class="time-picker__minutes">
    </div>
  </div>
</div>
```

### Multiple Months

```html
<div class="calendar-picker-container">
  <div class="calendar-picker">
    <!-- First month -->
  </div>
  <div class="calendar-picker">
    <!-- Second month -->
  </div>
</div>
```

## Usage Examples

### Date Input with Calendar Picker

```html
<div class="form-group">
  <label for="date-input">Select Date</label>
  <div class="input-with-calendar">
    <input type="text" id="date-input" placeholder="MM/DD/YYYY" class="input">
    <button class="calendar-toggle">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" />
      </svg>
    </button>
    <div class="calendar-picker-dropdown">
      <!-- Calendar picker structure -->
    </div>
  </div>
</div>
```

### Booking Interface

```html
<div class="booking-interface">
  <div class="date-range-selector">
    <div class="input-group">
      <div class="input-with-label">
        <label>Check-in</label>
        <input type="text" value="03/15/2023" class="input">
      </div>
      <div class="input-with-label">
        <label>Check-out</label>
        <input type="text" value="03/20/2023" class="input">
      </div>
    </div>
    <div class="calendar-picker-container">
      <!-- Calendar picker structure with range selection -->
    </div>
  </div>
</div>
```

## Customization

The Calendar Picker can be customized using CSS variables:

```css
:root {
  --calendar-width: 280px;
  --calendar-border: 1px solid var(--color-neutral-200);
  --calendar-border-radius: var(--radius-m);
  --calendar-bg: var(--color-white);
  --calendar-shadow: var(--shadow-m);
  --calendar-padding: 1rem;
  
  --calendar-header-color: var(--color-neutral-900);
  --calendar-weekday-color: var(--color-neutral-500);
  
  --calendar-day-size: 36px;
  --calendar-day-color: var(--color-neutral-900);
  --calendar-day-hover-bg: var(--color-neutral-100);
  
  --calendar-selected-bg: var(--color-primary-500);
  --calendar-selected-color: var(--color-white);
  
  --calendar-today-border-color: var(--color-primary-500);
  --calendar-today-color: var(--color-primary-500);
  
  --calendar-range-bg: var(--color-primary-100);
  --calendar-disabled-color: var(--color-neutral-400);
}
```

## Accessibility

- Use semantic HTML with proper button elements for interactive calendar days
- Implement keyboard navigation to allow users to move through dates using arrow keys
- Include appropriate ARIA attributes for screen readers
- Ensure date format follows localization patterns
- Provide clear visual indication of selected dates and the current date

## Browser Compatibility

The Calendar Picker component is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| Grid layout | 57+ | 52+ | 10.1+ | 16+ |
| CSS custom properties | 49+ | 31+ | 9.1+ | 15+ |