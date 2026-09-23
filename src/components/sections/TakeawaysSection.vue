<script setup>
import Container from '../ui/Container.vue'
import TertiaryButton from '../ui/TertiaryButton.vue'
import iconFigma from '../../assets/icons/icon-figma.svg'
import iconGithub from '../../assets/icons/icon-github.svg'
import iconLinkedin from '../../assets/icons/icon-linkedin.svg'

const githubUrl = 'https://github.com/arekushia'
const linkedinUrl = 'https://www.linkedin.com/in/alexia-legros/'
</script>

<template>
  <section class="TakeawaysSection">
    <Container class="TakeawaysSection-inner">
      <h2 class="TakeawaysSection-title">Takeaways</h2>

      <ul class="TakeawaysSection-list">
        <li class="TakeawaysSection-item">
          <p class="TakeawaysSection-text">
            You can download my (not so) <span class="font-weight-bold">traditional CV</span>
          </p>
          <TertiaryButton href="/files/cv.pdf" label="here" :external="false" />
        </li>

        <li class="TakeawaysSection-item">
          <p class="TakeawaysSection-text">
            You can get access to my <span class="font-weight-bold">Figma files</span> to see how I
            work
          </p>
          <TertiaryButton
            href="https://www.figma.com/design/wdZsjbUFk9uc6UAg6zDHUa/Alexia-s-Portfolio?node-id=6-2"
            label="To the Portfolio"
            :icon="iconFigma"
          />
         <p class="TakeawaysSection-text">or</p>
          <TertiaryButton
            href="https://www.figma.com/design/wdZsjbUFk9uc6UAg6zDHUa/Alexia-s-Portfolio?node-id=6-2"
            label="See this file"
            :icon="iconFigma"
          />
        </li>

        <li class="TakeawaysSection-item">
          <p class="TakeawaysSection-text">
            Or have a look at the <span class="font-weight-bold">code</span> of this page on
          </p>
          <TertiaryButton :href="githubUrl" label="Github" :icon="iconGithub" />
        </li>

        <li class="TakeawaysSection-item">
          <p class="TakeawaysSection-text">
            And find more info about my <span class="font-weight-bold">work experience</span> on
          </p>
          <TertiaryButton :href="linkedinUrl" label="LinkedIn" :icon="iconLinkedin" />
        </li>
      </ul>
    </Container>
  </section>
</template>

<style scoped>
.TakeawaysSection {
  padding-block: var(--section-padding-block) 0;
  background: var(--color-white);
  color: var(--color-dark);

  @media (--mobile) {
    padding-block: 3.875rem 0;
  }
}

.TakeawaysSection-inner {
  display: flex;
  flex-direction: column;
  gap: 3.25rem;

  @media (--mobile) {
    align-items: center;
    gap: 1.5rem;
    --container-padding-inline: 2.125rem;
  }
}

.TakeawaysSection-title {
  margin: 0;
  font-size: var(--fs-h2);
  font-weight: var(--fw-extrabold);

  @media (--mobile) {
    font-size: 2.5rem;
  }
}

.TakeawaysSection-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (--mobile) {
    gap: 1.5rem;
  }
}

.TakeawaysSection-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  @media (--mobile) {
    justify-content: center;
  }
}

.TakeawaysSection-text {
  margin: 0;
  padding: 0.5rem;
  background: var(--color-pink-tint);
  color: var(--color-darker-eel);
  font-size: var(--fs-body);
  font-weight: var(--fw-medium);

  @media (--mobile) {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
