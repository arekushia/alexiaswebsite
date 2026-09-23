<script setup>
import { computed, reactive, ref, useId } from 'vue'
import { sendContactMessage } from '../../services/contact'

defineProps({
  titleId: { type: String, required: true },
})

const id = useId()
const fields = reactive({ name: '', email: '', message: '', website: '' })
const status = ref('idle')
const errorMessage = ref('')
const isSending = computed(() => status.value === 'sending')

async function onSubmit() {
  status.value = 'sending'
  errorMessage.value = ''
  try {
    await sendContactMessage({ ...fields })
    Object.assign(fields, { name: '', email: '', message: '', website: '' })
    status.value = 'success'
  } catch (error) {
    errorMessage.value = error.message
    status.value = 'error'
  }
}
</script>

<template>
  <div class="ContactForm">
    <header class="ContactForm-header">
      <p class="ContactForm-eyebrow">Say hello</p>
      <h2 :id="titleId" class="ContactForm-title">Let's connect!</h2>
      <p class="ContactForm-intro">
        Have a project in mind, want to collaborate, or just want to chat? Send me a message and
        I'll get back to you as soon as I can.
      </p>
    </header>

    <form class="ContactForm-form" @submit.prevent="onSubmit">
      <div class="ContactForm-row">
        <div class="ContactForm-field">
          <label :for="`${id}-name`" class="ContactForm-label">Your name</label>
          <input
            :id="`${id}-name`"
            v-model="fields.name"
            class="ContactForm-input"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Jessie James"
            required
          />
        </div>

        <div class="ContactForm-field">
          <label :for="`${id}-email`" class="ContactForm-label">Your e-mail</label>
          <input
            :id="`${id}-email`"
            v-model="fields.email"
            class="ContactForm-input"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="jessiej@acme.com"
            required
          />
        </div>
      </div>

      <div class="ContactForm-field">
        <label :for="`${id}-message`" class="ContactForm-label">Your message</label>
        <textarea
          :id="`${id}-message`"
          v-model="fields.message"
          class="ContactForm-input ContactForm-input--textarea"
          name="message"
          placeholder="Tell me about your project, timeline, and goals..."
          required
        />
      </div>

      <div class="ContactForm-trap" aria-hidden="true">
        <label :for="`${id}-website`">Website</label>
        <input
          :id="`${id}-website`"
          v-model="fields.website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <button type="submit" class="ContactForm-submit" :disabled="isSending">
        {{ isSending ? 'Sending...' : 'Send Message' }}
        <span v-if="!isSending" aria-hidden="true">→</span>
      </button>

      <div aria-live="polite">
        <p v-if="status === 'success'" class="ContactForm-status">
          Thanks! Your message has been sent, I'll get back to you soon.
        </p>
        <p
          v-else-if="status === 'error'"
          class="ContactForm-status ContactForm-status--error"
          role="alert"
        >
          {{ errorMessage }}
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.ContactForm {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.ContactForm-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ContactForm-eyebrow {
  margin: 0;
  color: var(--color-darker-eel);
  font-size: var(--fs-eyebrow);
  font-weight: var(--fw-bold);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.ContactForm-title {
  margin: 0;
  font-size: var(--fs-h3);
  font-weight: var(--fw-extrabold);
  line-height: 1.2;
}

.ContactForm-intro {
  margin: 0.5rem 0 0;
  font-size: var(--fs-tag);
  line-height: 1.5;
}

.ContactForm-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.ContactForm-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1.25rem;
}

.ContactForm-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ContactForm-label {
  font-size: var(--fs-tag);
  font-weight: var(--fw-semibold);
}

.ContactForm-input {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border: 1px solid color-mix(in srgb, var(--color-dark) 10%, var(--color-white));
  border-radius: 0.5rem;
  background: var(--color-grey-bg);
  color: var(--color-dark);
  font: inherit;
  font-size: var(--fs-tag);
}

.ContactForm-input::placeholder {
  color: color-mix(in srgb, var(--color-dark) 70%, var(--color-white));
}

.ContactForm-input:focus-visible {
  outline: 2px solid var(--color-darker-eel);
  outline-offset: 2px;
}

.ContactForm-input--textarea {
  min-height: 7.625rem;
  resize: vertical;
}

.ContactForm-submit {
  min-height: 3.25rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  border-radius: 0.75rem;
  background: var(--color-darker-eel);
  color: var(--color-white);
  font: inherit;
  font-size: var(--fs-tag);
  font-weight: var(--fw-bold);
  cursor: pointer;
}

.ContactForm-submit:hover:not(:disabled) {
  filter: brightness(0.92);
}

.ContactForm-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ContactForm-trap {
  position: absolute;
  left: -10000px;
}

.ContactForm-status {
  margin: 0;
  font-size: var(--fs-tag);
  font-weight: var(--fw-semibold);
  line-height: 1.5;
}

.ContactForm-status--error {
  color: var(--color-error);
}

.ContactForm-submit:focus-visible {
  outline: 2px solid var(--color-darker-eel);
  outline-offset: 2px;
}
</style>
