<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { createSwiperConfig } from '../../config/swiperConfig'
import Container from '../ui/Container.vue'
import hobbiesSlide1 from '../../assets/illustrations/hobbies-slide-1.svg'
import hobbiesSlide2 from '../../assets/illustrations/hobbies-slide-2.svg'
import hobbiesSlide3 from '../../assets/illustrations/hobbies-slide-3.svg'

const slides = [
  { src: hobbiesSlide1, alt: '' },
  { src: hobbiesSlide2, alt: '' },
  { src: hobbiesSlide3, alt: '' },
]

const swiperConfig = createSwiperConfig()
if (slides.length <= 1) {
  swiperConfig.loop = false
  swiperConfig.autoplay = false
}
</script>

<template>
  <section class="HobbiesSection">
    <Container class="HobbiesSection-inner">
      <div class="HobbiesSection-heading">
        <h2 class="HobbiesSection-title">On the personal side, I ...</h2>
      </div>

      <div class="HobbiesSection-row">
        <div class="HobbiesSection-slider">
          <Swiper v-bind="swiperConfig" class="HobbiesSection-swiper">
            <SwiperSlide v-for="(slide, i) in slides" :key="i">
              <img :src="slide.src" :alt="slide.alt" class="HobbiesSection-slideImage" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="HobbiesSection-list">
          <ul class="HobbiesSection-items">
            <li>
              Read or listen to suspense
              <span class="text-decoration-funky">audiobooks</span>, unknown or trendy
              <span class="text-decoration-funky">podcasts</span>, in English or in French
            </li>
            <li>
              Build a Speed Champion <span class="text-decoration-funky">Lego</span> or a Technic
              Piece
            </li>
            <li>
              <span class="font-weight-bold">Work out</span> - but it has to be
              <span class="text-decoration-funky">fun</span>! (strength training, running, climbing,
              pole dancing, pilates, you name it)
            </li>
            <li>
              Clean or swap <span class="text-decoration-funky">parts</span> out of my
              <span class="font-weight-bold">old collection car</span>
            </li>
            <li>
              <span class="text-decoration-funky">Paint</span> on every
              <span class="font-weight-bold">medium</span> I can find
            </li>
            <li>
              Visit a museum, an art place or
              <span class="text-decoration-funky">enjoy</span> a beautiful piece of
              <span class="font-weight-bold">architecture</span>
            </li>
            <li>
              Tune in to the next <span class="font-weight-bold">trends</span> in
              <span class="font-weight-bold">fashion</span>
            </li>
            <li>Enjoy the skies and <span class="font-weight-bold">astronomy</span></li>
          </ul>

          <p class="HobbiesSection-tagline">
            Or just find a new hobby to add onto all the others...
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.HobbiesSection {
  padding-block: var(--section-padding-block);
  background: var(--color-grey-bg);
  color: var(--color-dark);

  @media (--mobile) {
    padding-block: 3.875rem;
  }
}

.HobbiesSection-inner {
  @media (--mobile) {
    --container-padding-inline: 2.125rem;
  }
}

.HobbiesSection-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3.75rem;
}

.HobbiesSection-title {
  margin: 0;
  text-align: center;
  font-size: var(--fs-h2);
  font-weight: var(--fw-extrabold);

  @media (--mobile) {
    font-size: 2.5rem;
    text-align: left;
  }
}

.HobbiesSection-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;

  @media (--mobile) {
    gap: 3.25rem;
  }
}

.HobbiesSection-list {
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
  flex: 1 1 20rem;
  min-width: 0;

  @media (--mobile) {
    gap: 1.5rem;
  }
}

.HobbiesSection-items {
  margin: 0;
  padding-inline-start: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: 1.5;

  @media (--mobile) {
    font-size: 1rem;
  }
}

.HobbiesSection-tagline {
  margin: 0;
  max-width: 27rem;
  color: var(--color-eel);
  font-size: var(--fs-lead);
  font-weight: var(--fw-semibold);

  @media (--mobile) {
    font-size: 1.125rem;
  }
}

.HobbiesSection-slider {
  flex: 0 1 40rem;
  min-width: 0;
}

.HobbiesSection-swiper {
  border-radius: 0.938rem;
}

.HobbiesSection-slideImage {
  display: block;
  width: 100%;
  height: auto;
}

.HobbiesSection-swiper :deep(.swiper-button-next),
.HobbiesSection-swiper :deep(.swiper-button-prev) {
  opacity: 0;
  color: var(--color-white);
  transition: opacity 0.2s ease;
}

.HobbiesSection-swiper:hover :deep(.swiper-button-next),
.HobbiesSection-swiper:hover :deep(.swiper-button-prev),
.HobbiesSection-swiper :deep(.swiper-button-next:focus-visible),
.HobbiesSection-swiper :deep(.swiper-button-prev:focus-visible) {
  opacity: 1;
}

.HobbiesSection-swiper :deep(.swiper-pagination-bullet-active) {
  background: var(--color-darker-eel);
}

@media (prefers-reduced-motion: reduce) {
  .HobbiesSection-swiper :deep(.swiper-button-next),
  .HobbiesSection-swiper :deep(.swiper-button-prev) {
    transition: none;
  }
}
</style>
