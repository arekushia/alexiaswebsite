<script setup>
import Container from '../ui/Container.vue'
import waves from '../../assets/illustrations/combined-waves.svg'
</script>

<template>
  <section class="ExperienceSection">
    <Container>
      <div class="ExperienceSection-inner">
        <h2 class="ExperienceSection-title">
          10 years of bridging design and code, and counting.
        </h2>

        <p class="ExperienceSection-text">
          I've worked for companies like
          <a href="https://www.kaliop.com/fr" target="_blank" rel="noopener noreferrer"
            >Kaliop</a
          >, where I combined frontend development and UI/UX design, and
          <a
            href="https://www.welcometothejungle.com/fr/companies-v1/renault-digital"
            target="_blank"
            rel="noopener noreferrer"
            >Renault Digital</a
          >, part of Renault Group. 
          <br /><br />
          Through Kaliop, I also spent close to two years with
          <a href="https://www.yellohvillage.fr/" target="_blank" rel="noopener noreferrer"
            >Yelloh! Village</a
          >. 
          <br /><br />
          Today, at
          <a href="https://www.sapiendo-retraite.fr/" target="_blank" rel="noopener noreferrer"
            >Sapiendo</a
          >, I design and develop custom features and pages for major accounts like BNP,
          Groupama Gan Vie, Michelin, Harmonie Mutuelle, and AG2R.
        </p>
      </div>
    </Container>

    <div class="ExperienceSection-waves" aria-hidden="true">
      <img :src="waves" class="ExperienceSection-wave ExperienceSection-wave--1" alt="" />
    </div>
  </section>
</template>

<style scoped>
.ExperienceSection {
  position: relative;
  overflow: hidden;
  padding: var(--section-padding-block) 10rem 30rem 10rem;
  /* Approximates a Figma Weave shader (noise-blended purple, fading to white past 65% height)
     with the same two colors already used as tokens elsewhere on the site. */
  background:
    linear-gradient(to bottom, transparent 0%, transparent 65%, var(--color-white) 100%),
    linear-gradient(135deg, var(--color-sunset-purple), var(--color-darker-eel));
  color: var(--color-white);

  @media (--mobile) {
    padding: 3.875rem 2.125rem;
  }
}

.ExperienceSection-waves {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0;
  pointer-events: none;

  @media (--mobile) {
    display: none;
  }
}

.ExperienceSection-wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}

.ExperienceSection-inner {
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
  max-width: 67.688rem;

  @media (--mobile) {
    gap: 1.5rem;
  }
}

.ExperienceSection-title {
  margin: 0;
  font-size: var(--fs-h2);
  font-weight: var(--fw-extrabold);

  @media (--mobile) {
    font-size: 2.5rem;
  }
}

.ExperienceSection-text {
  margin: 0;
  font-size: var(--fs-lg);
  font-weight: var(--fw-regular);
  line-height: 1.4;

  @media (--mobile) {
    font-size: 1rem;
    margin-bottom: 10.625rem;
  }
}

.ExperienceSection-text a {
  color: inherit;
  font-weight: var(--fw-bold);
  text-decoration-style: dotted;
  text-decoration-thickness: 11.5%;
  text-decoration-line: underline;
  text-decoration-color: var(--color-white);
}
</style>
