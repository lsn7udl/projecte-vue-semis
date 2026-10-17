<template>
  <div class="home">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Benvinguts a La Llibreria</span>
        <h1>Històries que et troben <em>en el moment perfecte.</em></h1>
        <p>
          Un espai per perdre't entre pàgines, descobrir noves veus i retrobar-te amb aquells llibres
          que sempre et fan companyia.
        </p>
        <div class="hero-actions">
          <RouterLink class="button" to="/llibres">
            Explora el catàleg
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink class="text-link" to="/sobre-nosaltres">Coneix-nos</RouterLink>
        </div>
        <div class="hero-note">
          <span class="note-mark" aria-hidden="true">✳</span>
          <span>Obre un llibre. Obre un món.</span>
        </div>
      </div>

      <div class="hero-art" aria-label="Il·lustració decorativa de llibres">
        <div class="art-sun"></div>
        <div class="art-orbit"></div>
        <div class="book-stack">
          <div class="art-book art-book--back"><span>UN MÓN<br />DE PARAULES</span></div>
          <div class="art-book art-book--middle"><span>LES PETITES<br />MERAVELLES</span></div>
          <div class="art-book art-book--front">
            <span class="book-ornament">✳</span>
            <span>LA CASA<br />DE LES<br />HISTÒRIES</span>
            <small>UNA NOVA AVENTURA</small>
          </div>
        </div>
        <span class="art-spark art-spark--one" aria-hidden="true">✦</span>
        <span class="art-spark art-spark--two" aria-hidden="true">✧</span>
        <div class="art-caption">Un bon llibre<br />sempre és un bon lloc.</div>
      </div>
    </section>

    <section class="home-invitation">
      <div>
        <span class="eyebrow">La lectura, al teu ritme</span>
        <h2>Troba la teva propera història.</h2>
      </div>
      <RouterLink class="button button--outline" to="/llibres">
        Veure tots els llibres <span aria-hidden="true">↗</span>
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  padding: 28px 0 22px;
}

.hero {
  display: grid;
  min-height: 560px;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 48px;
}

.hero-copy {
  padding: 42px 0 52px;
}

h1 {
  max-width: 640px;
  margin: 23px 0 0;
  font-family: var(--serif);
  font-size: clamp(3.2rem, 6.1vw, 5.15rem);
  font-weight: 500;
  letter-spacing: -0.065em;
  line-height: 0.99;
}

h1 em {
  color: var(--green);
  font-weight: 500;
}

.hero-copy > p {
  max-width: 490px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 1.03rem;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 27px;
  margin-top: 30px;
}

.text-link {
  color: var(--green);
  font-size: 0.9rem;
  font-weight: 650;
  text-decoration-color: var(--gold);
  text-underline-offset: 5px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 56px;
  color: #82837b;
  font-family: var(--serif);
  font-size: 0.94rem;
  font-style: italic;
}

.note-mark {
  color: var(--gold);
  font-size: 1.25rem;
  font-style: normal;
}

.hero-art {
  position: relative;
  display: grid;
  min-height: 490px;
  place-items: center;
  overflow: hidden;
  border-radius: 48% 48% 5px 5px;
  background: #efeee6;
}

.art-sun {
  position: absolute;
  top: 54px;
  right: 57px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #e5c58e;
}

.art-orbit {
  position: absolute;
  top: 76px;
  right: 28px;
  width: 180px;
  height: 180px;
  border: 1px solid rgb(49 91 76 / 20%);
  border-radius: 50%;
}

.book-stack {
  position: relative;
  width: 330px;
  height: 340px;
  margin: 65px 0 0 12px;
}

.art-book {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 10px 10px 4px;
  box-shadow: 10px 17px 27px rgb(47 49 39 / 16%), inset 8px 0 0 rgb(255 255 255 / 12%);
  color: #f8f2e5;
  font-family: var(--serif);
  font-size: 1rem;
  letter-spacing: 0.08em;
  line-height: 1.55;
  text-align: center;
}

.art-book--back {
  top: 35px;
  right: 1px;
  width: 176px;
  height: 276px;
  transform: rotate(12deg);
  background: #bf875c;
}

.art-book--middle {
  top: 45px;
  left: 13px;
  width: 174px;
  height: 280px;
  transform: rotate(-11deg);
  background: #566b57;
  font-size: 0.87rem;
}

.art-book--front {
  z-index: 1;
  top: 24px;
  left: 89px;
  width: 181px;
  height: 294px;
  flex-direction: column;
  border: 1px solid rgb(247 225 174 / 55%);
  background: #344c43;
  outline: 1px solid #344c43;
  outline-offset: 5px;
  box-shadow: 12px 20px 35px rgb(47 49 39 / 20%), inset 10px 0 0 rgb(255 255 255 / 10%);
  font-size: 1.1rem;
  letter-spacing: 0.13em;
  line-height: 1.5;
}

.book-ornament {
  margin-bottom: 17px;
  color: #e4bf7e;
  font-size: 1.8rem;
}

.art-book--front small {
  margin-top: 17px;
  color: #dfc799;
  font-family: inherit;
  font-size: 0.48rem;
  letter-spacing: 0.15em;
}

.art-spark {
  position: absolute;
  color: var(--green);
}

.art-spark--one {
  top: 145px;
  left: 62px;
  font-size: 1.8rem;
}

.art-spark--two {
  right: 61px;
  bottom: 126px;
  color: #bd8659;
  font-size: 2rem;
}

.art-caption {
  position: absolute;
  right: 22px;
  bottom: 23px;
  color: #797d70;
  font-family: var(--serif);
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.5;
  text-align: right;
}

.home-invitation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 28px 0 0;
  padding: 30px 0;
  border-top: 1px solid var(--line);
}

.home-invitation h2 {
  margin: 9px 0 0;
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  font-weight: 500;
  letter-spacing: -0.035em;
}

@media (max-width: 800px) {
  .hero {
    min-height: initial;
    grid-template-columns: 1fr 0.86fr;
    gap: 28px;
  }

  .hero-art {
    min-height: 410px;
  }

  .book-stack {
    transform: scale(0.82);
  }

  .art-sun {
    right: 30px;
  }
}

@media (max-width: 640px) {
  .home {
    padding-top: 12px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .hero-copy {
    padding: 29px 0 0;
  }

  h1 {
    max-width: 520px;
    font-size: clamp(3.1rem, 13vw, 4.5rem);
  }

  .hero-note {
    margin-top: 31px;
  }

  .hero-art {
    min-height: 380px;
    border-radius: 45% 45% 5px 5px;
  }

  .book-stack {
    transform: scale(0.78);
  }

  .home-invitation {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 36px;
  }
}

@media (max-width: 380px) {
  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 17px;
  }
}
</style>
