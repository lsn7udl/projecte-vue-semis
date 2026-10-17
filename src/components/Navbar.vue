<template>
  <header class="site-header">
    <nav class="site-shell nav-inner" aria-label="Navegació principal">
      <RouterLink class="brand" to="/" aria-label="La Llibreria, inici">
        <span class="brand-mark">L</span>
        <span>La Llibreria</span>
      </RouterLink>
      <div class="nav-links">
        <RouterLink to="/" exact-active-class="is-active">Inici</RouterLink>
        <RouterLink to="/llibres" active-class="is-active">Catàleg</RouterLink>
        <RouterLink to="/sobre-nosaltres" active-class="is-active">Sobre nosaltres</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.site-header {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid var(--line);
  background: rgb(250 249 246 / 92%);
}

.nav-inner {
  display: flex;
  min-height: 86px;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.nav-inner .brand-mark {
  width: 36px;
  height: 36px;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-links a {
  position: relative;
  padding: 10px 0;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 550;
  text-decoration: none;
  transition: color 160ms ease;
}

.nav-links a:hover,
.nav-links a.is-active {
  color: var(--green);
}

.nav-links a.is-active::after {
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  height: 2px;
  background: var(--gold);
  content: "";
}

@media (max-width: 600px) {
  .nav-inner {
    min-height: 76px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px 25px;
    padding: 12px 0;
  }

  .brand {
    font-size: 1.2rem;
  }

  .nav-inner .brand-mark {
    width: 30px;
    height: 30px;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    gap: clamp(17px, 6vw, 30px);
  }

  .nav-links a {
    font-size: 0.8rem;
  }
}
</style>