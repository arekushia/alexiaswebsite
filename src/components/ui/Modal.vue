<script setup>
import { onMounted, ref, watch } from 'vue'

defineProps({
  titleId: { type: String, required: true },
})

const open = defineModel({ type: Boolean, default: false })
const dialog = ref(null)

function sync() {
  const el = dialog.value
  if (!el) return
  if (open.value && !el.open) el.showModal()
  else if (!open.value && el.open) el.close()
}

watch(open, sync)
onMounted(sync)

function onBackdropClick(event) {
  if (event.target === dialog.value) open.value = false
}
</script>

<template>
  <dialog
    ref="dialog"
    class="Modal"
    :aria-labelledby="titleId"
    @close="open = false"
    @click="onBackdropClick"
  >
    <div class="Modal-panel">
      <button type="button" class="Modal-close" aria-label="Close" @click="open = false">
        <svg class="Modal-closeIcon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      </button>

      <slot />
    </div>
  </dialog>
</template>

<style scoped>
.Modal {
  width: calc(100% - 2rem);
  max-width: 45rem;
  padding: 0;
  border: 0;
  border-radius: 1.25rem;
  background: var(--color-white);
  color: var(--color-dark);
}

.Modal::backdrop {
  background: color-mix(in srgb, var(--color-dark) 60%, transparent);
}

.Modal-panel {
  position: relative;
  padding: 4.5rem 1.5rem 2rem;

  @media not (--mobile) {
    padding: 4.5rem 4.5rem 4rem;
  }
}

.Modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--color-grey-bg);
  color: var(--color-dark);
  cursor: pointer;
}

.Modal-close:hover {
  background: color-mix(in srgb, var(--color-dark) 10%, var(--color-white));
}

.Modal-close:focus-visible {
  outline: 2px solid var(--color-darker-eel);
  outline-offset: 2px;
}

.Modal-closeIcon {
  width: 1.5rem;
  height: 1.5rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
}

@media (prefers-reduced-motion: no-preference) {
  .Modal[open] {
    animation: Modal-in 0.2s ease;
  }

  .Modal[open]::backdrop {
    animation: Modal-fade 0.2s ease;
  }
}

@keyframes Modal-in {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}

@keyframes Modal-fade {
  from {
    opacity: 0;
  }
}
</style>
