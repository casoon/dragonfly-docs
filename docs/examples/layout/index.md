---
title: Layout Components
category: Examples
---

# Layout Components

This page showcases the layout components available in the Casoon UI Library. These components help structure and organize content on your pages.

## Grid System

The grid system allows you to create responsive layouts with rows and columns.

### Basic Grid

```html
<div class="grid">
  <div class="col">Column 1</div>
  <div class="col">Column 2</div>
  <div class="col">Column 3</div>
</div>
```

<div class="example-wrapper">
  <div class="grid">
    <div class="col" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Column 1</div>
    <div class="col" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Column 2</div>
    <div class="col" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Column 3</div>
  </div>
</div>

### Grid with Column Sizes

```html
<div class="grid">
  <div class="col-4">4 units</div>
  <div class="col-8">8 units</div>
</div>
```

<div class="example-wrapper">
  <div class="grid">
    <div class="col-4" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">4 units</div>
    <div class="col-8" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">8 units</div>
  </div>
</div>

### Responsive Grid

```html
<div class="grid">
  <div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
  <div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
  <div class="col-12 col-md-12 col-lg-4">Responsive Column</div>
</div>
```

<div class="example-wrapper">
  <div class="grid">
    <div class="col-12 col-md-6 col-lg-4" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Responsive Column</div>
    <div class="col-12 col-md-6 col-lg-4" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Responsive Column</div>
    <div class="col-12 col-md-12 col-lg-4" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">Responsive Column</div>
  </div>
</div>

## Container

Containers center your content horizontally and apply padding.

### Basic Container

```html
<div class="container">
  <p>This content is in a container</p>
</div>
```

<div class="example-wrapper">
  <div class="container" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">
    <p>This content is in a container</p>
  </div>
</div>

### Fluid Container

```html
<div class="container-fluid">
  <p>This content is in a fluid container</p>
</div>
```

<div class="example-wrapper">
  <div class="container-fluid" style="background-color: #e9ecef; padding: 15px; border: 1px solid #dee2e6;">
    <p>This content is in a fluid container</p>
  </div>
</div>

## Header

The header component is used for the top section of your page.

```html
<header class="header">
  <div class="header-logo">Logo</div>
  <nav class="header-nav">
    <a href="#" class="active">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
  <div class="header-actions">
    <button class="button primary small">Login</button>
  </div>
</header>
```

<div class="example-wrapper">
  <header class="header" style="background-color: #f8f9fa; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
    <div class="header-logo" style="font-weight: bold;">Logo</div>
    <nav class="header-nav" style="display: flex; gap: 15px;">
      <a href="#" class="active" style="color: #0d6efd; text-decoration: none;">Home</a>
      <a href="#" style="color: #212529; text-decoration: none;">About</a>
      <a href="#" style="color: #212529; text-decoration: none;">Services</a>
      <a href="#" style="color: #212529; text-decoration: none;">Contact</a>
    </nav>
    <div class="header-actions">
      <button class="button primary small">Login</button>
    </div>
  </header>
</div>

## Footer

The footer component is used for the bottom section of your page.

```html
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h4>About</h4>
      <p>Company information</p>
    </div>
    <div class="footer-section">
      <h4>Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact</h4>
      <p>info@example.com</p>
      <p>+1 234 567 890</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Company Name. All rights reserved.</p>
  </div>
</footer>
```

<div class="example-wrapper">
  <footer class="footer" style="background-color: #212529; color: white; padding: 20px 0;">
    <div class="footer-content" style="display: flex; justify-content: space-around; margin-bottom: 20px;">
      <div class="footer-section">
        <h4>About</h4>
        <p>Company information</p>
      </div>
      <div class="footer-section">
        <h4>Links</h4>
        <ul style="list-style: none; padding-left: 0;">
          <li><a href="#" style="color: #6c757d; text-decoration: none;">Home</a></li>
          <li><a href="#" style="color: #6c757d; text-decoration: none;">Services</a></li>
          <li><a href="#" style="color: #6c757d; text-decoration: none;">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>info@example.com</p>
        <p>+1 234 567 890</p>
      </div>
    </div>
    <div class="footer-bottom" style="text-align: center; padding-top: 10px; border-top: 1px solid #6c757d;">
      <p>&copy; 2023 Company Name. All rights reserved.</p>
    </div>
  </footer>
</div>

## Sidebar

The sidebar component is used for side navigation.

```html
<div class="sidebar">
  <div class="sidebar-header">
    <h3>Dashboard</h3>
  </div>
  <nav class="sidebar-nav">
    <a href="#" class="sidebar-item active">
      <span class="sidebar-icon">📊</span>
      <span>Dashboard</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="sidebar-icon">👤</span>
      <span>Profile</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="sidebar-icon">⚙️</span>
      <span>Settings</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="sidebar-icon">📝</span>
      <span>Reports</span>
    </a>
  </nav>
</div>
```

<div class="example-wrapper">
  <div class="sidebar" style="width: 250px; background-color: #f8f9fa; border-right: 1px solid #dee2e6;">
    <div class="sidebar-header" style="padding: 15px; border-bottom: 1px solid #dee2e6;">
      <h3>Dashboard</h3>
    </div>
    <nav class="sidebar-nav" style="padding: 10px;">
      <a href="#" class="sidebar-item active" style="display: flex; align-items: center; padding: 10px; color: #0d6efd; text-decoration: none; background-color: #e9ecef; border-radius: 4px; margin-bottom: 5px;">
        <span class="sidebar-icon" style="margin-right: 10px;">📊</span>
        <span>Dashboard</span>
      </a>
      <a href="#" class="sidebar-item" style="display: flex; align-items: center; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">
        <span class="sidebar-icon" style="margin-right: 10px;">👤</span>
        <span>Profile</span>
      </a>
      <a href="#" class="sidebar-item" style="display: flex; align-items: center; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">
        <span class="sidebar-icon" style="margin-right: 10px;">⚙️</span>
        <span>Settings</span>
      </a>
      <a href="#" class="sidebar-item" style="display: flex; align-items: center; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">
        <span class="sidebar-icon" style="margin-right: 10px;">📝</span>
        <span>Reports</span>
      </a>
    </nav>
  </div>
</div>

## Table

Tables are used to display data in a structured format.

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
      <td>
        <button class="button small">Edit</button>
        <button class="button small danger">Delete</button>
      </td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>User</td>
      <td>
        <button class="button small">Edit</button>
        <button class="button small danger">Delete</button>
      </td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>bob@example.com</td>
      <td>User</td>
      <td>
        <button class="button small">Edit</button>
        <button class="button small danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

<div class="example-wrapper">
  <table class="table" style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">
        <th style="padding: 10px; text-align: left;">Name</th>
        <th style="padding: 10px; text-align: left;">Email</th>
        <th style="padding: 10px; text-align: left;">Role</th>
        <th style="padding: 10px; text-align: left;">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #dee2e6;">
        <td style="padding: 10px;">John Doe</td>
        <td style="padding: 10px;">john@example.com</td>
        <td style="padding: 10px;">Admin</td>
        <td style="padding: 10px;">
          <button class="button small">Edit</button>
          <button class="button small danger">Delete</button>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #dee2e6;">
        <td style="padding: 10px;">Jane Smith</td>
        <td style="padding: 10px;">jane@example.com</td>
        <td style="padding: 10px;">User</td>
        <td style="padding: 10px;">
          <button class="button small">Edit</button>
          <button class="button small danger">Delete</button>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #dee2e6;">
        <td style="padding: 10px;">Bob Johnson</td>
        <td style="padding: 10px;">bob@example.com</td>
        <td style="padding: 10px;">User</td>
        <td style="padding: 10px;">
          <button class="button small">Edit</button>
          <button class="button small danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Tabs

Tabs allow you to organize content into different sections.

```html
<div class="tabs">
  <div class="tabs-nav">
    <button class="tabs-nav-item active">Tab 1</button>
    <button class="tabs-nav-item">Tab 2</button>
    <button class="tabs-nav-item">Tab 3</button>
  </div>
  <div class="tabs-content">
    <div class="tabs-panel active">
      <p>Content for Tab 1</p>
    </div>
    <div class="tabs-panel">
      <p>Content for Tab 2</p>
    </div>
    <div class="tabs-panel">
      <p>Content for Tab 3</p>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="tabs">
    <div class="tabs-nav" style="display: flex; border-bottom: 1px solid #dee2e6;">
      <button class="tabs-nav-item active" style="padding: 10px 15px; border: none; background: none; border-bottom: 2px solid #0d6efd; margin-bottom: -1px; cursor: pointer;">Tab 1</button>
      <button class="tabs-nav-item" style="padding: 10px 15px; border: none; background: none; cursor: pointer;">Tab 2</button>
      <button class="tabs-nav-item" style="padding: 10px 15px; border: none; background: none; cursor: pointer;">Tab 3</button>
    </div>
    <div class="tabs-content" style="padding: 15px 0;">
      <div class="tabs-panel active">
        <p>Content for Tab 1</p>
      </div>
    </div>
  </div>
</div>

<style>
.example-wrapper {
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px 0;
  overflow: auto;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.col {
  flex: 1;
  padding: 10px;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 10px;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  padding: 10px;
}

@media (max-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style> 