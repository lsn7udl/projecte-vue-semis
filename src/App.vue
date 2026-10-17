<template>
  <div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>