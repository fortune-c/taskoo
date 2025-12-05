<script setup>
import Hero from "@/components/home/Hero.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";
import Feature from "@/components/home/Feature.vue";
import Footer from "@/components/home/Footer.vue";
</script>

<template>
    <div class="home-page">
      <Hero />
      <Feature />
      <HowItWorks />
      <Footer />
    </div>
</template>

<style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
  }
</style>
