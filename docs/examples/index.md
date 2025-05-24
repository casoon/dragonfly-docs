---
title: Complex UI Examples
category: Examples
outline: false
---

# Complex UI Examples

This page shows advanced examples of how the components of the Casoon UI Library can be used together to create complex user interface elements.

## Overview

The examples in this section demonstrate how different components of the Casoon UI Library can be combined to create complex user interfaces. These examples go beyond the basics and focus on practical use cases and advanced techniques.

### Example Categories

- **[Complex Layouts](/examples/layout/)** - Responsive dashboard layouts, split-screen designs, and stacked components
- **[Form Patterns](/examples/form/)** - Multi-step forms, validation patterns, and dynamic forms
- **[Advanced Components](/examples/advanced/)** - Complex component combinations and interactive elements
- **[Visual Effects](/examples/effects/)** - Combinations of effects for appealing visual presentations

## Dashboard Example

A dashboard with different widget types, responsive layout, and interactive elements.

```html
<div class="dashboard">
  <header class="header">
    <h1>Analytics Dashboard</h1>
    <div class="user-info">
      <span class="avatar">JS</span>
      <div class="dropdown">
        <button class="button ghost">Admin <span class="icon">▼</span></button>
      </div>
    </div>
  </header>
  
  <div class="dashboard-grid">
    <div class="widget primary">
      <div class="widget-header">Visitors</div>
      <div class="widget-body">
        <div class="metric">12,345</div>
        <div class="change up">+15%</div>
      </div>
    </div>
    
    <div class="widget secondary">
      <div class="widget-header">Revenue</div>
      <div class="widget-body">
        <div class="metric">$54,321</div>
        <div class="change up">+8%</div>
      </div>
    </div>
    
    <div class="widget">
      <div class="widget-header">Conversion Rate</div>
      <div class="widget-body">
        <div class="metric">3.8%</div>
        <div class="change down">-2%</div>
      </div>
    </div>
    
    <div class="widget full">
      <div class="widget-header">
        <h3>Monthly Visitors</h3>
        <div class="widget-actions">
          <button class="button small outline">Filter</button>
          <button class="button small outline">Export</button>
        </div>
      </div>
      <div class="widget-body">
        <!-- A chart would be placed here -->
        <div class="chart-placeholder"></div>
      </div>
    </div>
  </div>
</div>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 50%;
  font-weight: 600;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.widget.full {
  grid-column: 1 / -1;
}

.metric {
  font-size: 1.5rem;
  font-weight: 600;
}

.change {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.change.up {
  color: #10b981;
}

.change.down {
  color: #ef4444;
}

.chart-placeholder {
  height: 200px;
  background-color: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 0.375rem;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.widget-actions {
  display: flex;
  gap: 0.5rem;
}
</style>

## Multi-Step Form

A complex multi-step form with validation and progress indicator.

```html
<div class="wizard">
  <div class="progress-bar">
    <div class="fill" style="width: 66%;"></div>
  </div>
  
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Personal Information</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Contact Details</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Confirmation</span>
    </div>
  </div>
  
  <div class="wizard-content">
    <h2>Contact Details</h2>
    
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" class="input" placeholder="email@example.com">
      <div class="helper">We will not share your email address with third parties.</div>
    </div>
    
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" class="input" placeholder="+1 234 567 8900">
    </div>
    
    <div class="form-group">
      <label for="address">Address</label>
      <textarea id="address" class="textarea" rows="3" placeholder="Street, Number, ZIP, City"></textarea>
    </div>
    
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox" id="newsletter">
        <span>Subscribe to newsletter</span>
      </label>
    </div>
  </div>
  
  <div class="wizard-actions">
    <button class="button outline">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>
```

## Explore More Complex Examples

For more detailed examples and variations, visit the specific example categories:

- [Complex Layouts](/examples/layout/) - Dashboard layouts, split-screen designs, and more
- [Form Patterns](/examples/form/) - Multi-step forms, dynamic forms, and validation patterns
- [Advanced Components](/examples/advanced/) - Complex component combinations
- [Visual Effects](/examples/effects/) - Combinations of effects for visual presentations 