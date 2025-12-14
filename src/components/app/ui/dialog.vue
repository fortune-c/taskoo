<script setup>
import { ref, defineProps, defineEmits, Teleport, Transition } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true }
})
const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue', false)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="fade-enter-active"
      enter-from-class="fade-enter-from"
      enter-to-class="fade-enter-to"
      leave-active-class="fade-leave-active"
      leave-from-class="fade-leave-from"
      leave-to-class="fade-leave-to"
    >
      <div v-if="modelValue" class="dialog-wrapper">

        <!-- Overlay -->
        <div class="dialog-overlay" @click="close"></div>

        <!-- Dialog -->
        <div class="dialog-box">
          <div class="dialog-header">
            <slot name="title" />
          </div>

          <div class="dialog-content">
            <slot name="content" />
          </div>

          <div class="dialog-actions">
            <slot name="actions" />
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ===============================
   Wrapper (viewport container)
================================ */
.dialog-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===============================
   Overlay
================================ */
.dialog-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

/* ===============================
   Dialog Box
================================ */
.dialog-box {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 420px;
  max-height: 90vh;
  overflow-y: auto;

  background-color: #ffffff;
  color: #0f172a;

  border-radius: 12px;
  padding: 20px 30px;

  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.6);
}

/* Dark mode (optional) */
:global(.dark) .dialog-box {
  background-color: #0b1220;
  color: #e5e7eb;
}

/* ===============================
   Sections
================================ */
.dialog-header {
  margin-bottom: 16px;
  font-size: 1.125rem;
  font-weight: 600;
}

.dialog-content {
  font-size: 0.95rem;
}

.dialog-actions {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* ===============================
   Animations
================================ */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* ===============================
   Mobile tweaks
================================ */
@media (max-width: 420px) {
  .dialog-box {
    width: 94%;
    padding: 10px;
  }
}
</style>