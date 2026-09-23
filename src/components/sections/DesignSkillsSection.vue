<script setup>
import Container from '../ui/Container.vue'
import mobileApp from '../../assets/illustrations/mobile-design.svg'
import stars from '../../assets/illustrations/stars.svg'
</script>

<template>
  <section id="design-skills" class="DesignSkillsSection">
    <img :src="stars" class="DesignSkillsSection-stars" alt="" />

    <Container class="DesignSkillsSection-row">
      <div class="DesignSkillsSection-text">
        <h2 class="DesignSkillsSection-title">I do...</h2>

        <div class="DesignSkillsSection-item">
          <h3 class="DesignSkillsSection-itemTitle">Product Design</h3>
          <p class="DesignSkillsSection-itemBody">
            Before designing anything, I usually question the need with data.
            <br /><br />
            Sometimes the right answer is reusing what already exists, not building something
            new.
            <br />
            <span class="font-weight-bold"
              >Product design, to me, starts with knowing what's actually worth building.</span
            >
          </p>
        </div>

        <div class="DesignSkillsSection-item">
          <h3 class="DesignSkillsSection-itemTitle">UX Design</h3>
          <p class="DesignSkillsSection-itemBody">
            Once we know what's worth building, I map how it should actually work.
            <br />
            We're talking to users, testing flows, and spend time shaping the journey until it
            feels obvious and natural.
          </p>
        </div>

        <div class="DesignSkillsSection-item">
          <h3 class="DesignSkillsSection-itemTitle">UI Design</h3>
          <p class="DesignSkillsSection-itemBody">
            <span class="font-weight-bold">Then I bring it to life visually.</span>
            <br /><br />
            It had to be consistent, scalable, and clean enough to earn a spot in a Design
            System. In the end, seamless is the key; every interface should feel like it
            belongs to the same product, even in complex business domains.
          </p>
        </div>
      </div>

      <div class="DesignSkillsSection-imageWrap">
        <img
          :src="mobileApp"
          alt="Stylized mobile app illustration"
          class="DesignSkillsSection-image"
        />
        <img :src="stars" class="DesignSkillsSection-starsMobile" alt="" />
      </div>
    </Container>
  </section>
</template>

<style scoped>
.DesignSkillsSection {
  position: relative;
  overflow: hidden;
  padding-block: var(--section-padding-block);
  background: var(--color-sunset-purple);
  color: var(--color-white);

  @media (--mobile) {
    padding-block: 3.875rem;
  }
}

.DesignSkillsSection-stars {
  position: absolute;
  right: -4%;
  bottom: -6%;
  width: 30%;

  @media (--mobile) {
    display: none;
  }
}

.DesignSkillsSection-row {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 3.75rem;

  @media (--mobile) {
    flex-direction: column-reverse;
    gap: 3.25rem;
    --container-padding-inline: 2.125rem;
  }
}

.DesignSkillsSection-text {
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
  flex: 1 1 25rem;
  min-width: 0;

  @media (--mobile) {
    gap: 1.5rem;
    margin-bottom: 10.625rem;
  }
}

.DesignSkillsSection-title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-extrabold);

  @media (--mobile) {
    font-size: 2.5rem;
  }
}

.DesignSkillsSection-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.DesignSkillsSection-itemTitle {
  margin: 0;
  font-size: var(--fs-subheading);
  font-weight: var(--fw-bold);

  @media (--mobile) {
    font-size: 1.25rem;
  }
}

.DesignSkillsSection-itemBody {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: 1.5;

  @media (--mobile) {
    font-size: 1rem;
  }
}

.DesignSkillsSection-imageWrap {
  position: relative;
  flex: 1 1 20rem;
  min-width: 0;
  max-width: 24rem;
  width: 100%;

  @media (--mobile) {
    flex: 0 0 auto;
    width: 8.75rem;
    max-width: 8.75rem;
  }
}

.DesignSkillsSection-image {
  display: block;
  width: 100%;
  height: auto;
  margin-inline: 0;

  @media (--mobile) {
    height: 11.7rem;
  }
}

.DesignSkillsSection-starsMobile {
  display: none;

  @media (--mobile) {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    opacity: 0.5;
  }
}
</style>
