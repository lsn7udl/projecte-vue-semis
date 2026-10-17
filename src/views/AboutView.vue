<template>
  <section class="page-content about">
    <div class="about-intro">
      <span class="eyebrow">Una mica de nosaltres</span>
      <h1 class="section-title">Els llibres fan que qualsevol lloc se senti com a casa.</h1>
      <p class="section-intro">
        La Llibreria neix d'una idea senzilla: sempre hi ha una història que ens pot acompanyar,
        sorprendre o fer mirar el món d'una altra manera.
      </p>
    </div>

    <div class="about-story">
      <div class="story-art" aria-hidden="true">
        <span class="story-sun"></span>
        <span class="story-line story-line--one"></span>
        <span class="story-line story-line--two"></span>
        <span class="story-book">L<br /><small>LECTURES</small></span>
        <span class="story-leaf">✳</span>
      </div>
      <div class="story-copy">
        <span class="eyebrow">El nostre propòsit</span>
        <h2>Un racó per llegir, descobrir i tornar-hi.</h2>
        <p>
          Hem creat aquest catàleg perquè explorar llibres sigui fàcil i agradable. Aquí, cada títol
          és una invitació a aturar-se una estona, deixar-se portar i trobar una veu nova.
        </p>
        <p>
          Tant si ja saps què busques com si encara no ho saps, ens agradaria que aquest fos el
          principi d'una bona lectura.
        </p>
      </div>
    </div>

    <div class="about-signoff">
      <span class="signoff-mark" aria-hidden="true">✳</span>
      <p>Gràcies per ser aquí.<br /><em>Ens trobem entre pàgines.</em></p>
    </div>
  </section>
</template>

<style scoped>
.about-intro {
  max-width: 770px;
}

.about-intro .section-title {
  max-width: 730px;
  font-size: clamp(2.7rem, 6.2vw, 4.8rem);
}

.about-intro .section-intro {
  max-width: 620px;
  font-size: 1.06rem;
}

.about-story {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  align-items: center;
  gap: clamp(38px, 8vw, 104px);
  margin-top: 74px;
}

.story-art {
  position: relative;
  display: grid;
  min-height: 350px;
  place-items: center;
  overflow: hidden;
  border-radius: 45% 45% 5px 5px;
  background: #efeee6;
}

.story-sun {
  position: absolute;
  top: 42px;
  right: 52px;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: #e4c58e;
}

.story-line {
  position: absolute;
  width: 210px;
  height: 210px;
  border: 1px solid rgb(49 91 76 / 20%);
  border-radius: 50%;
}

.story-line--one {
  top: 61px;
  right: 27px;
}

.story-line--two {
  bottom: 23px;
  left: -81px;
  width: 260px;
  height: 260px;
}

.story-book {
  z-index: 1;
  display: flex;
  width: 151px;
  height: 222px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotate(-7deg);
  border: 1px solid rgb(247 225 174 / 55%);
  border-radius: 3px 9px 9px 3px;
  outline: 1px solid #344c43;
  outline-offset: 5px;
  background: #344c43;
  box-shadow: 12px 20px 35px rgb(47 49 39 / 20%), inset 9px 0 0 rgb(255 255 255 / 10%);
  color: #f8f2e5;
  font-family: var(--serif);
  font-size: 4.8rem;
  line-height: 0.9;
  text-align: center;
}

.story-book small {
  margin-top: 15px;
  color: #dfc799;
  font-family: inherit;
  font-size: 0.54rem;
  letter-spacing: 0.18em;
}

.story-leaf {
  position: absolute;
  right: 53px;
  bottom: 56px;
  color: #9c7957;
  font-size: 1.8rem;
}

.story-copy h2 {
  max-width: 470px;
  margin: 15px 0 18px;
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 2.9rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

.story-copy p {
  max-width: 520px;
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.85;
}

.about-signoff {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 70px;
  padding: 25px 0;
  border-top: 1px solid var(--line);
}

.signoff-mark {
  color: var(--gold);
  font-size: 2rem;
}

.about-signoff p {
  margin: 0;
  font-family: var(--serif);
  font-size: 1.05rem;
  line-height: 1.5;
}

.about-signoff em {
  color: var(--green);
}

@media (max-width: 650px) {
  .about-story {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 46px;
  }

  .story-art {
    min-height: 300px;
  }

  .about-signoff {
    margin-top: 45px;
  }
}
</style>
