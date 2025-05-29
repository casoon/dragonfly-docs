<template>
  <div class="simple-hover-menu">
    <div class="simple-menu-content">
      <h3>Komponenten</h3>
      <ul>
        <li><a href="/ui-docs/ui/#elements">Basis-Elemente</a></li>
        <li><a href="/ui-docs/ui/#components">Komplexe Komponenten</a></li>
        <li><a href="/ui-docs/ui/#layout-components">Layout-Komponenten</a></li>
        <li><a href="/ui-docs/ui/#patterns">UI-Muster</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
.simple-hover-menu {
  position: fixed;
  top: 65px;
  left: 220px;
  width: 250px;
  background-color: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 10000;
}

.simple-menu-content {
  padding: 16px;
}

.simple-hover-menu h3 {
  margin-top: 0;
  font-size: 16px;
  color: var(--vp-c-brand);
  margin-bottom: 12px;
  font-weight: 600;
}

.simple-hover-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.simple-hover-menu li {
  margin-bottom: 12px;
}

.simple-hover-menu a {
  display: block;
  padding: 8px 12px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.simple-hover-menu a:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  transform: translateX(4px);
}
</style> 