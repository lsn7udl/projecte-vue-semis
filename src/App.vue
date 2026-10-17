<template>
  <div class="app">
    <Navbar />
    <main class="site-shell">
      <RouterView />
    </main>
    <footer class="site-footer">
      <div class="site-shell footer-inner">
        <span class="footer-brand"><span class="brand-mark">L</span> La Llibreria</span>
        <span>Un lloc per a cada història.</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<style>
.site-footer {
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.82rem;
}

.footer-inner {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.05rem;
}

.brand-mark {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border-radius: 50%;
  background: var(--green);
  color: white;
  font-family: var(--serif);
  font-size: 0.9rem;
}

@media (max-width: 440px) {
  .footer-inner {
    min-height: 72px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 16px;
    padding: 14px 0;
  }
}
</style>