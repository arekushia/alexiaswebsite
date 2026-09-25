<script setup>
import RotatingWord from '../ui/RotatingWord.vue'
import heroBackground from '../../assets/illustrations/hero-background.svg'
import heroTopShape from '../../assets/illustrations/stars.svg'
import plants from '../../assets/illustrations/plants.svg'
import spaceAstronomy from '../../assets/illustrations/space-astronomy.svg'
import characterIllustration from '../../assets/illustrations/blonde-lady.svg'
import wave1 from '../../assets/illustrations/wave-1.svg'
import wave2 from '../../assets/illustrations/wave-2.svg'

const greetings = ['Hi!', 'Hallo!', 'Hej hej!', 'Hola!', 'Ciao!', 'Salut !']
</script>

<template>
  <section class="HeroSection">
    <div class="HeroSection-decor">
      <img :src="heroBackground" class="HeroSection-bg" alt="" />
      <img :src="heroTopShape" class="HeroSection-topShape" alt="" />
      <img :src="plants" class="HeroSection-plants" alt="" />
      <img :src="spaceAstronomy" class="HeroSection-astronomy" alt="" />
    </div>

    <div class="HeroSection-content">
      <h1 class="HeroSection-title" aria-label="Hi! I'm Alexia">
        <RotatingWord class="HeroSection-greeting" :words="greetings" aria-hidden="true" />
        <span class="HeroSection-name" aria-hidden="true">I’m Alexia</span>
      </h1>

      <div class="HeroSection-card">
        <p class="HeroSection-cardRole">Product designer &amp; UI developer</p>
        <p class="HeroSection-cardBio">
          Web Swiss-army knife who loves all things design, cars, motorsport, and tech-related.
          <br /><br />
          <span class="font-weight-bold">Discover more</span> about me and see if we could work
          together on <span class="font-weight-bold">your next project!</span>
        </p>
      </div>
    </div>

    <img
      :src="characterIllustration"
      class="HeroSection-character"
      alt="A blonde woman standing, seen from behind, hair blowing in the wind"
    />

    <a href="#design-skills" class="HeroSection-scrollDown">
      Scroll down
      <svg class="HeroSection-scrollIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v16M5 13l7 7 7-7" />
      </svg>
    </a>

    <div class="HeroSection-waves" aria-hidden="true">
      <img :src="wave1" class="HeroSection-wave HeroSection-wave--1" alt="" />
      <img :src="wave2" class="HeroSection-wave HeroSection-wave--2" alt="" />
    </div>
  </section>
</template>

<style scoped>
.HeroSection {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-sunset-purple);
  padding: 7.5rem var(--container-padding-inline) 6rem;

  @media (--mobile) {
    padding: 6rem  2.125rem;
    min-height: 58rem;
  }
}

.HeroSection-decor {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.HeroSection-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.HeroSection-topShape {
  position: absolute;
  top: -1.25rem;
  left: 5%;
  width: min(55%, 31.25rem);
  @media (--mobile) {
    width: 100%;
  }
}

.HeroSection-plants {
  position: absolute;
  left: -1%;
  top: 18%;
  width: min(43%, 38.438rem);

  @media (--mobile) {
    left: auto;
    right: 2%;
    top: auto;
    bottom: 0;
    width: 52%;
  }
}

.HeroSection-astronomy {
  position: absolute;
  z-index: 1;
  right: -5%;
  top: 2%;
  width: 60%;
  opacity: 0.53;

  @media (--mobile) {
    z-index: 2;
    width: 18.5625rem;
    opacity: 1;
    top: -3.75rem;
    right: -5rem;
  }
}

.HeroSection-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  margin-left: clamp(0rem, 20vw, 13rem);
  max-width: 45rem;
  width: 100%;

  @media (--mobile) {
    margin-left: 0;
  }
}

.HeroSection-character {
  position: absolute;
  left: 5%;
  bottom: 0;
  z-index: 10;
  width: auto;
  height: 34rem;
  @media (--mobile) {
    height: 17.5rem;
    left: 1%;
  }
}

.HeroSection-title {
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-family-base);
  font-weight: var(--fw-extrabold);
  font-size: var(--fs-big-title);
  line-height: 1.05;
  @media (--mobile) {
    font-size: 3.75rem;
  }
}

.HeroSection-greeting {
  min-width: 3ch;
}

.HeroSection-card {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 38.625rem;
  padding: 2.5rem 1.875rem;
  border-radius: 0.938rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.28);
  @media (--mobile) {
    margin-bottom: 4.5rem;
     padding: 1.5rem 3.125rem;
  }
}

.HeroSection-cardRole {
  margin: 0;
  color: var(--color-white);
  font-weight: var(--fw-bold);
  font-size: var(--fs-subheading);
  @media (--mobile) {
    font-size: 1.5rem;
  }
}

.HeroSection-cardBio {
  margin: 0;
  color: var(--color-white);
  font-weight: var(--fw-regular);
  font-size: var(--fs-body);
  line-height: 1.4;
  @media (--mobile) {
    font-size: 1rem;
  }
}

.HeroSection-scrollDown {
  position: absolute;
  left: 60%;
  bottom: 3rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-deep-purple);
  font-size: 1.125rem;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-decoration: none;

  @media (--mobile) {
    left: auto;
    right: auto;
    bottom: 6rem;
    color: var(--color-white);
  }
}

.HeroSection-scrollIcon {
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: HeroSection-bounce 1.6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .HeroSection-scrollIcon {
    animation: none;
  }
}

@keyframes HeroSection-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.375rem);
  }
}

.HeroSection-waves {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  line-height: 0;
  pointer-events: none;

  @media (--mobile) {
    display: none;
  }
}

.HeroSection-wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}
</style>
