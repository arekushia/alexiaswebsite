<template>
  <div class="Container">
    <slot />
  </div>
</template>

<style scoped>
.Container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
}
</style>
