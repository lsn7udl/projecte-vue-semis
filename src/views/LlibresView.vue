<template>
  <section class="page-content catalog">
    <div class="catalog-heading">
      <div>
        <span class="eyebrow">El plaer de descobrir</span>
        <h1 class="section-title">El nostre catàleg</h1>
        <p class="section-intro">
          Cada llibre és una porta. Fes un cop d'ull i deixa't sorprendre per la propera història.
        </p>
      </div>
      <span v-if="!carregant && !error" class="book-count">
        {{ llibres.length }} {{ llibres.length === 1 ? 'llibre' : 'llibres' }}
      </span>
    </div>

    <div v-if="carregant" class="status-panel" role="status">
      <span class="loader" aria-hidden="true"></span>
      <p>Preparem les prestatgeries...</p>
    </div>
    <div v-else-if="error" class="status-panel status-panel--error" role="alert">
      <span class="status-icon" aria-hidden="true">!</span>
      <h2>No hem pogut carregar els llibres</h2>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="llibres.length === 0" class="status-panel">
      <span class="status-icon status-icon--quiet" aria-hidden="true">✳</span>
      <h2>Les prestatgeries són buides, de moment</h2>
      <p>Torna una mica més tard; potser hi haurà una nova història esperant-te.</p>
    </div>
    <div v-else class="book-grid">
      <LlibreCard
        v-for="(item, index) in llibres"
        :key="item.id"
        :llibre="item"
        :index="index"
      />
    </div>
  </section>
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

<style scoped>
.catalog-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 38px;
}

.book-count {
  flex: 0 0 auto;
  margin-bottom: 7px;
  padding: 8px 13px;
  border: 1px solid var(--line);
  border-radius: 99px;
  color: var(--muted);
  font-size: 0.78rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.status-panel {
  display: flex;
  min-height: 260px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border: 1px dashed #d8d6cd;
  border-radius: 6px;
  background: #f6f5ef;
  text-align: center;
}

.status-panel h2 {
  margin: 12px 0 0;
  font-family: var(--serif);
  font-size: 1.6rem;
  font-weight: 500;
}

.status-panel p {
  max-width: 440px;
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.status-panel--error .status-icon {
  background: #f4e4df;
  color: #9a4435;
}

.status-icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  background: #e6ebe3;
  color: var(--green);
  font-family: var(--serif);
  font-size: 1.3rem;
}

.status-icon--quiet {
  font-size: 1.15rem;
}

.loader {
  width: 28px;
  height: 28px;
  border: 2px solid #d8ddd5;
  border-top-color: var(--green);
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 850px) {
  .book-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .catalog-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 17px;
    margin-bottom: 28px;
  }

  .book-count {
    margin: 0;
  }

  .book-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
