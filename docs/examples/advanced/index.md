---
title: Advanced Examples
category: Examples
outline: false
---

# Advanced Examples

This page showcases advanced component combinations and patterns from the Casoon UI Library. These examples demonstrate how to build more complex interfaces by combining multiple components.

## Dashboard Layout

This example shows a complete dashboard layout with header, sidebar, and content area.

```html
<div class="dashboard-layout">
  <header class="header">
    <div class="header-logo">Dashboard</div>
    <div class="header-actions">
      <div class="dropdown">
        <button class="button outline small">John Doe ▼</button>
      </div>
    </div>
  </header>
  
  <div class="dashboard-container">
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <a href="#" class="sidebar-item active">Dashboard</a>
        <a href="#" class="sidebar-item">Analytics</a>
        <a href="#" class="sidebar-item">Reports</a>
        <a href="#" class="sidebar-item">Settings</a>
      </nav>
    </aside>
    
    <main class="dashboard-content">
      <div class="container">
        <h1>Dashboard</h1>
        
        <div class="grid">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h3>Users</h3>
                <p class="large">1,254</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h3>Revenue</h3>
                <p class="large">$34,245</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h3>Orders</h3>
                <p class="large">845</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h3>Conversion</h3>
                <p class="large">3.2%</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid" style="margin-top: 20px;">
          <div class="col-12 col-lg-8">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Recent Activity</h3>
              </div>
              <div class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Action</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Created a post</td>
                      <td>2023-06-15</td>
                      <td><span class="badge success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>Updated profile</td>
                      <td>2023-06-14</td>
                      <td><span class="badge success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Bob Johnson</td>
                      <td>Submitted a form</td>
                      <td>2023-06-13</td>
                      <td><span class="badge warning">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Notifications</h3>
              </div>
              <div class="card-body">
                <div class="notification">
                  <div class="notification-header">system Update</div>
                  <div class="notification-body">
                    The system will be updated on June 20th.
                  </div>
                </div>
                <div class="notification">
                  <div class="notification-header">New Feature</div>
                  <div class="notification-body">
                    Check out the new reporting feature!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
```

<div class="example-wrapper" style="height: 500px; overflow: auto;">
  <div class="dashboard-layout" style="display: flex; flex-direction: column; height: 100%;">
    <header class="header" style="background-color: #f8f9fa; padding: 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #dee2e6;">
      <div class="header-logo" style="font-weight: bold; font-size: 1.25rem;">Dashboard</div>
      <div class="header-actions">
        <div class="dropdown">
          <button class="button outline small">John Doe ▼</button>
        </div>
      </div>
    </header>
    
    <div class="dashboard-container" style="display: flex; flex: 1; overflow: hidden;">
      <aside class="sidebar" style="width: 200px; background-color: #f8f9fa; border-right: 1px solid #dee2e6; padding: 15px;">
        <nav class="sidebar-nav">
          <a href="#" class="sidebar-item active" style="display: block; padding: 10px; color: #0d6efd; text-decoration: none; background-color: #e9ecef; border-radius: 4px; margin-bottom: 5px;">Dashboard</a>
          <a href="#" class="sidebar-item" style="display: block; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">Analytics</a>
          <a href="#" class="sidebar-item" style="display: block; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">Reports</a>
          <a href="#" class="sidebar-item" style="display: block; padding: 10px; color: #212529; text-decoration: none; margin-bottom: 5px;">Settings</a>
        </nav>
      </aside>
      
      <main class="dashboard-content" style="flex: 1; padding: 20px; overflow: auto;">
        <div class="container">
          <h1>Dashboard</h1>
          
          <div class="grid" style="display: flex; flex-wrap: wrap; margin: -10px;">
            <div class="col-12 col-md-6 col-lg-3" style="padding: 10px; width: 25%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-body" style="padding: 15px;">
                  <h3>Users</h3>
                  <p class="large" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0;">1,254</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3" style="padding: 10px; width: 25%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-body" style="padding: 15px;">
                  <h3>Revenue</h3>
                  <p class="large" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0;">$34,245</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3" style="padding: 10px; width: 25%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-body" style="padding: 15px;">
                  <h3>Orders</h3>
                  <p class="large" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0;">845</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3" style="padding: 10px; width: 25%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-body" style="padding: 15px;">
                  <h3>Conversion</h3>
                  <p class="large" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0;">3.2%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid" style="display: flex; flex-wrap: wrap; margin: -10px; margin-top: 20px;">
            <div class="col-12 col-lg-8" style="padding: 10px; width: 66.666667%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-header" style="padding: 15px; border-bottom: 1px solid #dee2e6; background-color: #f8f9fa;">
                  <h3 class="card-title" style="margin: 0;">Recent Activity</h3>
                </div>
                <div class="card-body" style="padding: 15px;">
                  <table class="table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                      <tr style="border-bottom: 2px solid #dee2e6;">
                        <th style="padding: 10px; text-align: left;">User</th>
                        <th style="padding: 10px; text-align: left;">Action</th>
                        <th style="padding: 10px; text-align: left;">Date</th>
                        <th style="padding: 10px; text-align: left;">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid #dee2e6;">
                        <td style="padding: 10px;">John Doe</td>
                        <td style="padding: 10px;">Created a post</td>
                        <td style="padding: 10px;">2023-06-15</td>
                        <td style="padding: 10px;"><span class="badge success" style="background-color: #28a745; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem;">Completed</span></td>
                      </tr>
                      <tr style="border-bottom: 1px solid #dee2e6;">
                        <td style="padding: 10px;">Jane Smith</td>
                        <td style="padding: 10px;">Updated profile</td>
                        <td style="padding: 10px;">2023-06-14</td>
                        <td style="padding: 10px;"><span class="badge success" style="background-color: #28a745; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem;">Completed</span></td>
                      </tr>
                      <tr style="border-bottom: 1px solid #dee2e6;">
                        <td style="padding: 10px;">Bob Johnson</td>
                        <td style="padding: 10px;">Submitted a form</td>
                        <td style="padding: 10px;">2023-06-13</td>
                        <td style="padding: 10px;"><span class="badge warning" style="background-color: #ffc107; color: #212529; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem;">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4" style="padding: 10px; width: 33.333333%;">
              <div class="card" style="border: 1px solid #dee2e6; border-radius: 4px;">
                <div class="card-header" style="padding: 15px; border-bottom: 1px solid #dee2e6; background-color: #f8f9fa;">
                  <h3 class="card-title" style="margin: 0;">Notifications</h3>
                </div>
                <div class="card-body" style="padding: 15px;">
                  <div class="notification" style="border: 1px solid #dee2e6; border-radius: 4px; margin-bottom: 10px;">
                    <div class="notification-header" style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">system Update</div>
                    <div class="notification-body" style="padding: 10px;">
                      The system will be updated on June 20th.
                    </div>
                  </div>
                  <div class="notification" style="border: 1px solid #dee2e6; border-radius: 4px;">
                    <div class="notification-header" style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">New Feature</div>
                    <div class="notification-body" style="padding: 10px;">
                      Check out the new reporting feature!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>

## Authentication Forms

This example shows different authentication forms: login, registration, and password reset.

### Login Form

```html
<div class="card" style="max-width: 400px; margin: 0 auto;">
  <div class="card-header">
    <h3 class="card-title">Login</h3>
  </div>
  <div class="card-body">
    <form class="form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" placeholder="Enter your email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="input" placeholder="Enter your password">
      </div>
      <div class="form-group">
        <label class="checkbox">
          <input type="checkbox">
          <span>Remember me</span>
        </label>
      </div>
      <div class="form-group">
        <button type="submit" class="button primary" style="width: 100%;">Login</button>
      </div>
    </form>
  </div>
  <div class="card-footer">
    <div style="text-align: center;">
      <a href="#">Forgot password?</a>
      <div style="margin-top: 10px;">
        Don't have an account? <a href="#">Register</a>
      </div>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card" style="max-width: 400px; margin: 0 auto; border: 1px solid #dee2e6; border-radius: 4px;">
    <div class="card-header" style="padding: 15px; border-bottom: 1px solid #dee2e6; background-color: #f8f9fa;">
      <h3 class="card-title" style="margin: 0;">Login</h3>
    </div>
    <div class="card-body" style="padding: 15px;">
      <form class="form">
        <div class="form-group" style="margin-bottom: 1rem;">
          <label for="email" style="display: block; margin-bottom: 0.5rem;">Email</label>
          <input type="email" id="email" class="input" placeholder="Enter your email" style="width: 100%; padding: 0.375rem 0.75rem; border: 1px solid #ced4da; border-radius: 0.25rem;">
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label for="password" style="display: block; margin-bottom: 0.5rem;">Password</label>
          <input type="password" id="password" class="input" placeholder="Enter your password" style="width: 100%; padding: 0.375rem 0.75rem; border: 1px solid #ced4da; border-radius: 0.25rem;">
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label class="checkbox" style="display: inline-flex; align-items: center;">
            <input type="checkbox" style="margin-right: 0.5rem;">
            <span>Remember me</span>
          </label>
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <button type="submit" class="button primary" style="width: 100%; padding: 0.375rem 0.75rem; background-color: #0d6efd; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Login</button>
        </div>
      </form>
    </div>
    <div class="card-footer" style="padding: 15px; border-top: 1px solid #dee2e6; background-color: #f8f9fa;">
      <div style="text-align: center;">
        <a href="#" style="color: #0d6efd; text-decoration: none;">Forgot password?</a>
        <div style="margin-top: 10px;">
          Don't have an account? <a href="#" style="color: #0d6efd; text-decoration: none;">Register</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Product Card

This example shows a product card with image, details, and actions.

```html
<div class="card product-card" style="max-width: 300px;">
  <div class="badge product-badge" style="position: absolute; top: 10px; right: 10px;">Sale</div>
  <img src="https://via.placeholder.com/300x200" alt="Product" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <div class="product-rating" style="color: #ffc107;">
      ★★★★☆
      <span style="color: #6c757d; margin-left: 5px;">(4.0)</span>
    </div>
    <div class="product-price" style="margin: 10px 0;">
      <span class="price-old" style="text-decoration: line-through; color: #6c757d;">$99.99</span>
      <span class="price-current" style="font-size: 1.25rem; font-weight: bold; color: #28a745;">$79.99</span>
    </div>
    <p class="product-description">This is a short description of the product.</p>
    <div class="product-actions" style="display: flex; justify-content: space-between; margin-top: 15px;">
      <button class="button primary">Add to Cart</button>
      <button class="button outline">Wishlist</button>
    </div>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card product-card" style="max-width: 300px; border: 1px solid #dee2e6; border-radius: 4px; position: relative;">
    <div class="badge product-badge" style="position: absolute; top: 10px; right: 10px; background-color: #dc3545; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem;">Sale</div>
    <img src="https://via.placeholder.com/300x200" alt="Product" class="card-img-top" style="width: 100%; border-top-left-radius: 4px; border-top-right-radius: 4px;">
    <div class="card-body" style="padding: 15px;">
      <h3 class="card-title" style="margin-top: 0;">Product Name</h3>
      <div class="product-rating" style="color: #ffc107;">
        ★★★★☆
        <span style="color: #6c757d; margin-left: 5px;">(4.0)</span>
      </div>
      <div class="product-price" style="margin: 10px 0;">
        <span class="price-old" style="text-decoration: line-through; color: #6c757d;">$99.99</span>
        <span class="price-current" style="font-size: 1.25rem; font-weight: bold; color: #28a745;">$79.99</span>
      </div>
      <p class="product-description" style="color: #6c757d;">This is a short description of the product.</p>
      <div class="product-actions" style="display: flex; justify-content: space-between; margin-top: 15px;">
        <button class="button primary" style="padding: 0.375rem 0.75rem; background-color: #0d6efd; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Add to Cart</button>
        <button class="button outline" style="padding: 0.375rem 0.75rem; background-color: transparent; color: #0d6efd; border: 1px solid #0d6efd; border-radius: 0.25rem; cursor: pointer;">Wishlist</button>
      </div>
    </div>
  </div>
</div>

## Modal Dialog

This example shows a modal dialog with different components.

```html
<div class="modal-overlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;">
  <div class="modal" style="background-color: white; border-radius: 4px; width: 500px; max-width: 100%;">
    <div class="modal-header" style="padding: 15px; border-bottom: 1px solid #dee2e6; display: flex; justify-content: space-between; align-items: center;">
      <h3 class="modal-title" style="margin: 0;">Confirm Action</h3>
      <button class="modal-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
    </div>
    <div class="modal-body" style="padding: 15px;">
      <p>Are you sure you want to perform this action? This cannot be undone.</p>
      <div class="alert warning" style="margin-top: 15px;">
        This will permanently delete the selected items.
      </div>
    </div>
    <div class="modal-footer" style="padding: 15px; border-top: 1px solid #dee2e6; display: flex; justify-content: flex-end;">
      <button class="button outline" style="margin-right: 10px;">Cancel</button>
      <button class="button danger">Delete</button>
    </div>
  </div>
</div>
```

<div class="example-wrapper" style="height: 300px; position: relative;">
  <div class="modal-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;">
    <div class="modal" style="background-color: white; border-radius: 4px; width: 500px; max-width: 100%;">
      <div class="modal-header" style="padding: 15px; border-bottom: 1px solid #dee2e6; display: flex; justify-content: space-between; align-items: center;">
        <h3 class="modal-title" style="margin: 0;">Confirm Action</h3>
        <button class="modal-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body" style="padding: 15px;">
        <p>Are you sure you want to perform this action? This cannot be undone.</p>
        <div class="alert warning" style="margin-top: 15px; background-color: #fff3cd; color: #856404; padding: 0.75rem 1.25rem; border: 1px solid #ffeeba; border-radius: 0.25rem;">
          This will permanently delete the selected items.
        </div>
      </div>
      <div class="modal-footer" style="padding: 15px; border-top: 1px solid #dee2e6; display: flex; justify-content: flex-end;">
        <button class="button outline" style="margin-right: 10px; padding: 0.375rem 0.75rem; background-color: transparent; color: #6c757d; border: 1px solid #6c757d; border-radius: 0.25rem; cursor: pointer;">Cancel</button>
        <button class="button danger" style="padding: 0.375rem 0.75rem; background-color: #dc3545; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Delete</button>
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

@media (max-width: 768px) {
  .col-md-6 {
    width: 50% !important;
  }
  
  .col-md-12 {
    width: 100% !important;
  }
}

@media (max-width: 576px) {
  .col-12 {
    width: 100% !important;
  }
}

@media (max-width: 992px) {
  .col-lg-3 {
    width: 50% !important;
  }
  
  .col-lg-4 {
    width: 100% !important;
  }
  
  .col-lg-8 {
    width: 100% !important;
  }
}
</style> 