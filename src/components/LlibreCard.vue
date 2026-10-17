<script setup>
import { computed } from 'vue'

const props = defineProps({
  llibre: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const titol = computed(() => (
  props.llibre.títol
  || props.llibre.titol
  || props.llibre.Títol
  || props.llibre.Titol
  || props.llibre.Title
  || 'Sense títol'
))

const autor = computed(() => (
  props.llibre.autor || props.llibre.Autor || props.llibre.Author || 'Autor desconegut'
))

const any = computed(() => (
  props.llibre.any || props.llibre.Any || props.llibre.Year || 'Any desconegut'
))

const initial = computed(() => String(titol.value).trim().charAt(0).toLocaleUpperCase())
</script>

<template>
  <article class="book-card">
    <div class="book-cover" :class="`book-cover--${index % 5}`" aria-hidden="true">
      <span class="cover-label">UNA HISTÒRIA PER DESCOBRIR</span>
      <span class="cover-initial">{{ initial }}</span>
      <span class="cover-title">{{ titol }}</span>
      <span class="cover-decoration">✳</span>
      <span class="cover-year">{{ any }}</span>
    </div>
    <div class="book-info">
      <span class="book-meta">LECTURA RECOMANADA</span>
      <h2>{{ titol }}</h2>
      <p class="book-author">{{ autor }}</p>
      <div class="book-info-bottom">
        <span>{{ any }}</span>
        <span class="book-arrow" aria-hidden="true">↗</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.book-card {
  display: flex;
  min-height: 205px;
  gap: 20px;
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--surface);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.book-card:hover {
  transform: translateY(-4px);
  border-color: #d9d3c3;
  box-shadow: 0 13px 28px rgb(42 45 38 / 7%);
}

.book-cover {
  position: relative;
  display: flex;
  width: 126px;
  min-height: 170px;
  flex: 0 0 126px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 3px 6px 6px 3px;
  box-shadow: inset 8px 0 0 rgb(0 0 0 / 9%), 4px 6px 11px rgb(0 0 0 / 13%);
  color: #fffaf0;
  text-align: center;
}

.book-cover::after {
  position: absolute;
  inset: 7px;
  border: 1px solid rgb(255 255 255 / 28%);
  content: "";
}

.book-cover--0 { background: linear-gradient(145deg, #55715e, #2e4b40); }
.book-cover--1 { background: linear-gradient(145deg, #bd815b, #92583f); }
.book-cover--2 { background: linear-gradient(145deg, #626c85, #3f4b64); }
.book-cover--3 { background: linear-gradient(145deg, #bd9a59, #92713b); }
.book-cover--4 { background: linear-gradient(145deg, #956776, #714756); }

.cover-label,
.cover-title,
.cover-year,
.cover-initial,
.cover-decoration {
  position: relative;
  z-index: 1;
}

.cover-label {
  max-width: 90px;
  font-size: 0.39rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.cover-initial {
  margin-top: 7px;
  color: rgb(255 250 240 / 75%);
  font-family: var(--serif);
  font-size: 3rem;
  line-height: 1;
}

.cover-title {
  display: -webkit-box;
  max-width: 97px;
  margin-top: 7px;
  overflow: hidden;
  font-family: var(--serif);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.035em;
  line-height: 1.25;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cover-decoration {
  margin-top: 5px;
  color: #f0d9a9;
  font-size: 0.77rem;
}

.cover-year {
  position: absolute;
  bottom: 15px;
  font-size: 0.5rem;
  letter-spacing: 0.1em;
}

.book-info {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  padding: 6px 1px 2px 0;
}

.book-meta {
  color: #9b8060;
  font-size: 0.56rem;
  font-weight: 750;
  letter-spacing: 0.12em;
}

.book-info h2 {
  display: -webkit-box;
  margin: 11px 0 0;
  overflow: hidden;
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 550;
  letter-spacing: -0.025em;
  line-height: 1.2;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.book-author {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
}

.book-info-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  padding-top: 15px;
  color: #85867e;
  font-size: 0.72rem;
}

.book-arrow {
  color: var(--green);
  font-size: 1.05rem;
}

@media (max-width: 420px) {
  .book-card {
    min-height: 184px;
    gap: 15px;
    padding: 12px;
  }

  .book-cover {
    width: 108px;
    min-height: 158px;
    flex-basis: 108px;
  }

  .book-info h2 {
    font-size: 1.12rem;
  }
}
</style>
