<script setup>
import nav from "../../assets/constant.js"
</script>

<template>
  <section class="hero">
    <div class="hero-body">
      <h2>Think, plan, and track</h2>
      <h3>all in one place</h3>
      <p>Efficiently manage your tasks and boost productivity with AI-powered meeting transcription and smart team collaboration.</p>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: row;
    margin: 100px 0;
    justify-content: center;
    text-align: center;
  }

  .hero-body h2 {
    font-size: 5rem;
  }

  .hero-body h3 {
    color: lightslategray;
    margin: 20px 0;
  }

  .hero-body p {
    font-size: 12px;
  }

  .hero-body button {
    margin: 20px 0;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;
    width: 120px;
    height: 30px;
    transition-duration: 1s;
    transition-delay: 0.31s;
  }

  .hero-body button:hover {
    background: rgb(20, 94, 52);
    color: white;
    border: 1px solid rgb(20, 94, 52);
  }

  @media (max-width: 768px) {
    .hero-body p {
      margin: 0 20px;
    }
  }
</style>