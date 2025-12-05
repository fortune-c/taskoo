<script setup>
import nav from "../../assets/index.js"
</script>

<template>
  <footer>
    <h2>Ready to boost your team's productivity?</h2>
    <button @click="nav('/auth')">Get Started Free</button>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

h2 {
  font-size: 6.5rem;
}

button {
  margin: 20px 0;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  width: 17rem;
  height: 50px;
  transition-duration: 1s;
  transition-delay: 0.31s;
}

button:hover {
  background: rgb(20, 94, 52);
  color: white;
  border: 1px solid rgb(20, 94, 52);
}

@media (max-width: 768px) {
  h2 {
    font-size: 3.5rem;
  }
}
</style>
