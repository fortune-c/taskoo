<script setup>
import Hero from "@/components/landing-page/Hero.vue";
import HowItWorks from "@/components/landing-page/HowItWorks.vue";
import Feature from "@/components/landing-page/Feature.vue";
import Footer from "@/components/landing-page/Footer.vue";
import Navbar from "@/components/landing-page/Navbar.vue";
</script>

<template>
    <div class="home-page">
      <Navbar />
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
