<script setup>
import { UsersIcon } from '@heroicons/vue/16/solid';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  btntext: {
    type: String,
    default: ''
  },
  btnicon: {
    type: Object, // <-- component
    default: null
  },
  showDialog: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['open-dialog'])
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
    <button class="btn" v-if="btntext" @click="emit('open-dialog')">
      <component v-if="btnicon" :is="btnicon" class="icon" />
      {{ btntext }}
    </button>

  </main>
</template>

<style scoped>
main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-inline-start: 100px;
}

.btn {
  margin-top: 10px;
  padding: 0 15px;
  display: flex;
  width: 9rem;
  justify-content: space-between;
}

.icon {
  width: 20px;
  height: 30px;
}

@media (max-width: 768px) {
  main {
    margin-inline-start: 0;
  }
}
</style>


