<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  words: { type: Array, required: true },
  interval: { type: Number, default: 2200 },
})

const index = ref(0)
let timer = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion && props.words.length > 1) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % props.words.length
    }, props.interval)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <span class="RotatingWord">
    <Transition name="RotatingWord-swap" mode="out-in">
      <span :key="words[index]" class="RotatingWord-word">{{ words[index] }}</span>
    </Transition>
  </span>
</template>

<style scoped>
.RotatingWord {
  display: inline-block;
}

.RotatingWord-word {
  display: inline-block;
}

.RotatingWord-swap-enter-active,
.RotatingWord-swap-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.RotatingWord-swap-enter-from {
  opacity: 0;
  transform: translateY(0.3em);
}

.RotatingWord-swap-leave-to {
  opacity: 0;
  transform: translateY(-0.3em);
}

@media (prefers-reduced-motion: reduce) {
  .RotatingWord-swap-enter-active,
  .RotatingWord-swap-leave-active {
    transition: none;
  }
}
</style>
