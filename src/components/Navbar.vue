<template>
  <header style="padding: 15px; background-color: #2c3e50; color: white; margin-bottom: 20px; border-radius: 6px;">
    <nav style="display: flex; gap: 20px;">
      <RouterLink to="/" style="color: white; text-decoration: none; font-weight: bold;">Inici</RouterLink>
      <RouterLink to="/llibres" style="color: white; text-decoration: none; font-weight: bold;">Llibres</RouterLink>
      <RouterLink to="/sobre-nosaltres" style="color: white; text-decoration: none; font-weight: bold;">Sobre nosaltres</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>