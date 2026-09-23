<script setup>
import Container from '../ui/Container.vue'
import frontIllustration from '../../assets/illustrations/front-illustration.svg'
</script>

<template>
  <section class="FrontendSection">
    <Container class="FrontendSection-row">
      <img :src="frontIllustration" alt="" class="FrontendSection-image" />

      <div class="FrontendSection-inner">
        <h2 class="FrontendSection-title">But I also do...</h2>

        <div class="FrontendSection-group">
          <div class="FrontendSection-item">
            <h3 class="FrontendSection-itemTitle">Web frontend development</h3>
            <p class="FrontendSection-itemBody">
              I cover the full frontend spectrum, from integration, performance, accessibility,
              to localization.
            </p>
          </div>

          <div class="FrontendSection-item">
            <h3 class="FrontendSection-itemTitle">ReactJS - 2+ years</h3>
            <p class="FrontendSection-itemBody">
              Hooks, functional and class components, custom API integrations (in a Symfony
              backend), and standalone apps like interactive Leaflet maps.
            </p>
          </div>

          <div class="FrontendSection-item">
            <h3 class="FrontendSection-itemTitle">VueJS - 3 years</h3>
            <p class="FrontendSection-itemBody">
              Vue3, Composition and Options API... I build dynamic, responsive SPAs with Vue and
              Vuetify, connected to custom APIs (built with a Laravel backend).
            </p>
          </div>
        </div>

        <div class="FrontendSection-item">
          <h3 class="FrontendSection-itemTitle">AI-friendly</h3>
          <p class="FrontendSection-itemBody">
            I use Claude, Claude Code and Gemini daily to
            <span class="text-decoration-underline">accelerate</span> development, problem
            solving, get <span class="text-decoration-underline">unstuck</span> on a design
            impasse, and <span class="text-decoration-underline">sharpen</span> my design
            thinking.
            <br />
            I rarely copy and paste; instead, I challenge the output and go back and forth on
            ideas with the agent.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.FrontendSection {
  padding-block: var(--section-padding-block);
  background: var(--color-white);
  color: var(--color-dark);

  @media (--mobile) {
    padding-block: 3.875rem;
  }
}

.FrontendSection-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4.375rem;

  @media (--mobile) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3.25rem;
    --container-padding-inline: 2.125rem;
  }
}

.FrontendSection-image {
  display: block;
  flex-shrink: 0;
  width: 36.25rem;
  height: auto;

  @media (--mobile) {
    width: 12rem;
    height: 11.438rem;
  }
}

.FrontendSection-inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1 1 20rem;
  min-width: 0;

  @media (--mobile) {
    gap: 1.5rem;
  }
}

.FrontendSection-title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-extrabold);

  @media (--mobile) {
    font-size: 2.5rem;
  }
}

.FrontendSection-group {
  display: flex;
  flex-direction: column;
  gap: 2.625rem;

  @media (--mobile) {
    gap: 1.5rem;
  }
}

.FrontendSection-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.FrontendSection-itemTitle {
  margin: 0;
  font-size: var(--fs-subheading);
  font-weight: var(--fw-bold);

  @media (--mobile) {
    font-size: 1.25rem;
  }
}

.FrontendSection-itemBody {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: 1.5;

  @media (--mobile) {
    font-size: 1rem;
  }
}
</style>
