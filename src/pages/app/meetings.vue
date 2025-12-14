<script setup>
import Hero from '@/components/app/hero.vue';
import Navbar from '@/components/app/navbar.vue';
import { MicrophoneIcon } from '@heroicons/vue/16/solid';
</script>



<template>
  <div class="dashboard-container">
    <Navbar />
    <Hero 
      title="VibeMeeting"
      description="Record, transcribe, and auto-assign tasks from meetings"
      btntext="Create Meeting"
      :btnicon="MicrophoneIcon"
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
