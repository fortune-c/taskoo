<script setup>
import Hero from '@/components/app/hero.vue';
import Navbar from '@/components/app/navbar.vue';
import { UsersIcon } from '@heroicons/vue/16/solid';
</script>



<template>
  <div class="dashboard-container">
    <Navbar />
    <Hero 
      title="Team Overview"
      description="Manage your teams and members"
      btntext="Create Team"
      :btnicon="UsersIcon"
    />
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
