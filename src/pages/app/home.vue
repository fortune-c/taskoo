<script setup>
import Navbar from '@/components/app/navbar.vue';
</script>



<template>
  <div class="dashboard-container">
    <Navbar />
    <main>
      <h1>Kanban Board</h1>
      <p>Create a team to start managing tasks</p>
    </main>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  padding: 20px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-inline-start: 100px;
}

@media (max-width: 768px) {
  main {
    margin-inline-start: 0px;
  }
}
</style>
