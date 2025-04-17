import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... existing code ...
  ignoreDeadLinks: [
    '/components/textarea/index', 
    '/components/select/index', 
    '/components/checkbox/index', 
    '/components/radio/index', 
    '/components/notification/index'
  ],
  // ... existing code ...
}) 