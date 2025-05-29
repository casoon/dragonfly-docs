# File Input

The File Input component of the Casoon UI Library allows users to upload files and offers various styles and functionalities for file selection elements.

## Usage

```html
<div class="file-input">
  <input type="file" id="file" class="file-input__input">
  <label for="file" class="file-input__label">
    <span class="file-input__text">Select file</span>
  </label>
</div>
```

## Importing Modules

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* File Input modules */
@import '@casoon/ui-lib/components/file.css';
```

## Variants

### Standard File Input

```html
<div class="file-input">
  <input type="file" id="file1" class="file-input__input">
  <label for="file1" class="file-input__label">
    <span class="file-input__text">Select file</span>
  </label>
</div>
```

### File Input with Icon

```html
<div class="file-input">
  <input type="file" id="file2" class="file-input__input">
  <label for="file2" class="file-input__label">
    <span class="file-input__icon">📎</span>
    <span class="file-input__text">Select file</span>
  </label>
</div>
```

### File Input with Button Style

```html
<div class="file-input file-input--button">
  <input type="file" id="file3" class="file-input__input">
  <label for="file3" class="file-input__label">
    <span class="file-input__text">Upload file</span>
  </label>
</div>
```

### File Input with Drag & Drop Area

```html
<div class="file-input file-input--drop-zone">
  <input type="file" id="file4" class="file-input__input" multiple>
  <label for="file4" class="file-input__label">
    <span class="file-input__icon">📥</span>
    <span class="file-input__text">Drag files here or click to upload</span>
  </label>
</div>
```

### File Input with Preview

```html
<div class="file-input file-input--with-preview">
  <input type="file" id="file5" class="file-input__input" accept="image/*">
  <label for="file5" class="file-input__label">
    <span class="file-input__text">Select image</span>
  </label>
  <div class="file-input__preview">
    <!-- Preview image will be inserted here via JavaScript -->
  </div>
</div>
```

### File Input with File List View

```html
<div class="file-input file-input--with-list">
  <input type="file" id="file6" class="file-input__input" multiple>
  <label for="file6" class="file-input__label">
    <span class="file-input__text">Select files</span>
  </label>
  <ul class="file-input__list">
    <!-- File list will be inserted here via JavaScript -->
  </ul>
</div>
```

### File Input Size Options

```html
<div class="file-input file-input--sm">
  <input type="file" id="file7" class="file-input__input">
  <label for="file7" class="file-input__label">
    <span class="file-input__text">Small</span>
  </label>
</div>

<div class="file-input">
  <input type="file" id="file8" class="file-input__input">
  <label for="file8" class="file-input__label">
    <span class="file-input__text">Standard</span>
  </label>
</div>

<div class="file-input file-input--lg">
  <input type="file" id="file9" class="file-input__input">
  <label for="file9" class="file-input__label">
    <span class="file-input__text">Large</span>
  </label>
</div>
```

### Color Variants

```html
<div class="file-input file-input--primary">
  <input type="file" id="file10" class="file-input__input">
  <label for="file10" class="file-input__label">
    <span class="file-input__text">Primary</span>
  </label>
</div>

<div class="file-input file-input--secondary">
  <input type="file" id="file11" class="file-input__input">
  <label for="file11" class="file-input__label">
    <span class="file-input__text">Secondary</span>
  </label>
</div>

<div class="file-input file-input--success">
  <input type="file" id="file12" class="file-input__input">
  <label for="file12" class="file-input__label">
    <span class="file-input__text">Success</span>
  </label>
</div>
```

### Disabled File Input

```html
<div class="file-input file-input--disabled">
  <input type="file" id="file13" class="file-input__input" disabled>
  <label for="file13" class="file-input__label">
    <span class="file-input__text">Disabled</span>
  </label>
</div>
```

## JavaScript Functionality

### Simple File Display

```js
document.querySelectorAll('.file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const fileNameElement = this.parentElement.querySelector('.file-input__text');
    if (this.files.length > 0) {
      fileNameElement.textContent = this.files[0].name;
    } else {
      fileNameElement.textContent = 'Select file';
    }
  });
});
```

### Image Preview

```js
document.querySelectorAll('.file-input--with-preview .file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const preview = this.parentElement.querySelector('.file-input__preview');
    preview.innerHTML = '';
    
    if (this.files.length > 0 && this.files[0].type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(this.files[0]);
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      preview.appendChild(img);
    }
  });
});
```

### File List with Multiple Files

```js
document.querySelectorAll('.file-input--with-list .file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const list = this.parentElement.querySelector('.file-input__list');
    list.innerHTML = '';
    
    if (this.files.length > 0) {
      Array.from(this.files).forEach(file => {
        const li = document.createElement('li');
        li.className = 'file-input__list-item';
        li.innerHTML = `
          <span class="file-input__file-name">${file.name}</span>
          <span class="file-input__file-size">${formatFileSize(file.size)}</span>
          <button type="button" class="file-input__remove" aria-label="Remove file">×</button>
        `;
        list.appendChild(li);
      });
    }
  });
});

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
```

### Drag & Drop Functionality

```js
document.querySelectorAll('.file-input--drop-zone').forEach(dropZone => {
  const input = dropZone.querySelector('.file-input__input');
  const label = dropZone.querySelector('.file-input__label');
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    label.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    label.addEventListener(eventName, () => {
      label.classList.add('file-input__label--active');
    });
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    label.addEventListener(eventName, () => {
      label.classList.remove('file-input__label--active');
    });
  });
  
  label.addEventListener('drop', e => {
    input.files = e.dataTransfer.files;
    const changeEvent = new Event('change');
    input.dispatchEvent(changeEvent);
  });
});
```

## CSS Variables

The File Input component uses the following CSS variables:

```css
:root {
  --file-input-padding: 0.5rem 1rem;
  --file-input-border: 1px dashed var(--color-gray-300);
  --file-input-border-radius: 0.25rem;
  --file-input-bg: var(--color-white);
  --file-input-color: var(--color-gray-700);
  
  --file-input-drop-zone-height: 8rem;
  --file-input-drop-zone-active-bg: var(--color-primary-50);
  --file-input-drop-zone-active-border: 1px dashed var(--color-primary);
  
  --file-input-sm-padding: 0.25rem 0.5rem;
  --file-input-lg-padding: 0.75rem 1.5rem;
  
  --file-input-primary-border: 1px dashed var(--color-primary);
  --file-input-primary-color: var(--color-primary);
  
  --file-input-secondary-border: 1px dashed var(--color-secondary);
  --file-input-secondary-color: var(--color-secondary);
  
  --file-input-success-border: 1px dashed var(--color-success);
  --file-input-success-color: var(--color-success);
  
  --file-input-disabled-bg: var(--color-gray-100);
  --file-input-disabled-color: var(--color-gray-400);
  --file-input-disabled-border: 1px dashed var(--color-gray-300);
}
```

## Best Practices

### Accessibility

- Always use labels associated with input elements
- Provide clear instructions for the file upload
- Use ARIA attributes to improve screen reader support
- Ensure sufficient contrast for text and borders
- Offer keyboard navigation options

### Responsive Design

- Test on different devices and screen sizes
- Adjust the size of the drop zone for mobile devices
- Ensure the file input is large enough for touch interaction

### Performance

- Limit file sizes when possible
- Consider using file type restrictions (accept attribute)
- Implement file validation on both client and server side
- Optimize image previews for better performance

## Framework Integration Examples

### React

```jsx
import React, { useState, useRef } from 'react';
import '@casoon/ui-lib/components/file.css';

function FileInput({
  accept = '',
  multiple = false,
  onFilesSelected,
  variant = '',
  size = '',
  withPreview = false,
  withDropZone = false,
  disabled = false
}) {
  const [fileNames, setFileNames] = useState('Select file');
  const [previewUrl, setPreviewUrl] = useState('');
  const inputRef = useRef(null);
  
  const handleChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const names = Array.from(files).map(file => file.name).join(', ');
      setFileNames(names);
      
      if (withPreview && files[0].type.startsWith('image/')) {
        const url = URL.createObjectURL(files[0]);
        setPreviewUrl(url);
      }
      
      if (onFilesSelected) {
        onFilesSelected(files);
      }
    } else {
      setFileNames('Select file');
      setPreviewUrl('');
    }
  };
  
  const fileInputClasses = [
    'file-input',
    variant && `file-input--${variant}`,
    size && `file-input--${size}`,
    withDropZone && 'file-input--drop-zone',
    withPreview && 'file-input--with-preview',
    disabled && 'file-input--disabled'
  ].filter(Boolean).join(' ');
  
  return (
    <div className={fileInputClasses}>
      <input
        type="file"
        className="file-input__input"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        disabled={disabled}
        ref={inputRef}
        id="file-input"
      />
      <label htmlFor="file-input" className="file-input__label">
        {withDropZone && <span className="file-input__icon">📥</span>}
        <span className="file-input__text">{fileNames}</span>
      </label>
      {withPreview && previewUrl && (
        <div className="file-input__preview">
          <img src={previewUrl} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default FileInput;
``` 