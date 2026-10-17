<template>
  <div style="border: 1.5px solid #ccc; padding: 15px; margin: 10px 0; border-radius: 8px; background-color: #fff;">
    <h3>{{ llibre.títol || llibre.titol || llibre.Títol || llibre.Titol || llibre.Title || 'Sense títol' }}</h3>
    <p><strong>Autor:</strong> {{ llibre.autor || llibre.Autor || llibre.Author || 'Desconegut' }}</p>
    <p><strong>Any:</strong> {{ llibre.any || llibre.Any || llibre.Year || 'N/D' }}</p>
  </div>
</template>

<script setup>
defineProps({
  llibre: Object
})
</script>