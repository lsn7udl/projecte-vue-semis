<template>
  <div style="padding: 20px;">
    <h2>Catàleg de Llibres</h2>

    <p v-if="carregant">Carregant llibres...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>
    <p v-else-if="llibres.length === 0">No hi ha cap llibre disponible.</p>

    <div v-else>
      <LlibreCard 
        v-for="item in llibres" 
        :key="item.id" 
        :llibre="item" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import LlibreCard from '../components/LlibreCard.vue'

const llibres = ref([])
const carregant = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'llibres'))
    llibres.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    error.value = "No s'han pogut carregar les dades de Firestore."
  } finally {
    carregant.value = false
  }
})
</script>
