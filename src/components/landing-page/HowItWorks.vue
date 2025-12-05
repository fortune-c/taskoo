<script setup>
const hiws = [
  { no: "1", title: "Create Your Team", description: "Set up your workspace and invite team members" },
  { no: "2", title: "Organize Tasks", description: "Create and assign tasks using the intuitive Kanban board" },
  { no: "3", title: "Collaborate & Track", description: "Work together, comment on tasks, and track progress" }
];
</script>

<template>
  <section id="how-it-works" class="hiw-container">
    <h3>How It Works</h3>
    <div class="hiw-list">
      <div class="hiw-items" v-for="hiw in hiws" :key="hiw.title">
        <div class="no">{{ hiw.no }}</div>
        <h4>{{ hiw.title }}</h4>
        <p>{{ hiw.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.hiw-container {
  margin: 5rem auto;
  text-align: center;
  justify-content: center;
}

.hiw-container h3 {
  font-size: 4rem;
  margin: 20px 0;
}

.hiw-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.hiw-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  padding: 40px 30px;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-delay: 0.2s;
}

.hiw-items h4 {
  margin: 10px 0;
}

.hiw-items:hover {
  color: lightslategray;
}

.hiw-items p {
  font-size: 12px;
}

.hiw-items .no {
  display: flex;
  border: 1px solid white;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: lightslategray;
  justify-content: center;
  align-items: center;
  color: #121212;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hiw-container h3 {
    font-size: 1rem;
  }

  .hiw-list {
    display: grid;
    grid-template-columns: 1fr;
  }

}
</style>
