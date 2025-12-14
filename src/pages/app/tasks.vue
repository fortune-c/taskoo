<script setup>
import Navbar from '@/components/app/navbar.vue'
import Hero from '@/components/app/hero.vue'
import TaskList from '@/components/app/tasklist.vue'
import { PlusIcon } from '@heroicons/vue/16/solid'
import { ref } from 'vue'

const showDialog = ref(false)
</script>

<template>
  <div class="dashboard-container">
    <Navbar />

    <Hero title="Current Tasks" description="View and manage all your tasks" btntext="Create Task" :btnicon="PlusIcon"
      @open-dialog="showDialog = true" />

    <TaskList v-model:show-dialog="showDialog" />
  </div>
</template>

<style scoped>
/* Page-level styling for tasks view */
.dashboard-container {
  color: #e6edf3;
}

@media (max-width: 640px) {
  .dashboard-container { padding: 1rem }
}
</style>
