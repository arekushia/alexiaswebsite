<script setup>
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, default: null },
  target: { type: String, default: '_blank' },
})
</script>

<template>
  <a
    :href="href"
    class="TertiaryButton"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <img v-if="icon" :src="icon" class="TertiaryButton-icon" alt="" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.TertiaryButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border: 1px dashed var(--color-darker-eel);
  border-radius: 0.5rem;
  color: var(--color-darker-eel);
  font-size: var(--fs-tag);
  font-weight: var(--fw-extrabold);
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.TertiaryButton:hover,
.TertiaryButton:focus-visible {
  background: var(--color-pink-tint);
}

.TertiaryButton-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
