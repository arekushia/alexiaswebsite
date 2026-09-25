<script setup>
import { ref, useId } from 'vue'
import Container from '../ui/Container.vue'
import ContactForm from '../ui/ContactForm.vue'
import Modal from '../ui/Modal.vue'
import footerWave1 from '../../assets/illustrations/footer-wave-1.svg'
import footerWave2 from '../../assets/illustrations/footer-wave-2.svg'
import ladyFooter from '../../assets/illustrations/lady-footer.svg'

const isContactOpen = ref(false)
const titleId = useId()
</script>

<template>
  <footer class="ContactSection">
    <div class="ContactSection-mobileCta">
      <Container class="ContactSection-mobileInner">
        <p class="ContactSection-mobileText">Drop me a hello!</p>
        <button
          type="button"
          class="ContactSection-mobileLink text-decoration-funky"
          @click="isContactOpen = true"
        >
          Contact me
        </button>
      </Container>
    </div>

    <div class="ContactSection-waves" aria-hidden="true">
      <img :src="footerWave1" class="ContactSection-wave1" alt="" />
      <img :src="footerWave2" class="ContactSection-wave2" alt="" />
    </div>

    <div class="ContactSection-band">
      <Container class="ContactSection-cta">
        <p class="ContactSection-text">Drop me a hello!</p>
        <button
          type="button"
          class="ContactSection-link text-decoration-funky"
          @click="isContactOpen = true"
        >
          Contact me
        </button>
      </Container>
    </div>

    <img :src="ladyFooter" class="ContactSection-lady" alt="Blonde girl waving" />

    <Modal v-model="isContactOpen" :title-id="titleId">
      <ContactForm :title-id="titleId" />
    </Modal>
  </footer>
</template>

<style scoped>
.ContactSection {
  position: relative;
  overflow: hidden;
  background: var(--color-white);
}

.ContactSection-mobileCta {
  display: none;

  @media (--tablet) {
    display: block;
    padding-block: 3.875rem 0;
    text-align: center;
  }
}

.ContactSection-mobileInner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  --container-padding-inline: 2.125rem;
}

.ContactSection-mobileText {
  margin: 0;
  color: var(--color-eel);
  font-size: 1.5rem;
  font-weight: var(--fw-regular);
}

.ContactSection-mobileLink {
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-eel);
  font: inherit;
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  cursor: pointer;
}

.ContactSection-mobileLink:focus-visible {
  outline: 2px solid var(--color-eel);
  outline-offset: 0.25rem;
}

.ContactSection-lady {
  position: absolute;
  left: 10%;
  bottom: 0;
  z-index: 2;
  width: clamp(9rem, 21vw, 19.188rem);
  height: auto;
  @media (--tablet) {
    width: 40%;
  }
}

.ContactSection-waves {
  position: relative;
  line-height: 0;
}

.ContactSection-wave1 {
  display: block;
  width: 100%;
  height: auto;
}

.ContactSection-wave2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}

.ContactSection-band {
  position: relative;
  z-index: 1;
  margin-top: -7vw;
  padding-block: 1.5rem 3.75rem;
  background: var(--color-darker-eel);
  color: var(--color-white);
}

.ContactSection-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  font-size: var(--fs-subheading);

  @media (--tablet) {
    display: none;
  }
}

.ContactSection-text {
  margin: 0;
  font-weight: var(--fw-medium);
}

.ContactSection-link {
  min-height: 2.75rem;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  font-weight: var(--fw-bold);
  cursor: pointer;
}

.ContactSection-link:focus-visible {
  outline: 2px solid var(--color-white);
  outline-offset: 0.25rem;
}
</style>
