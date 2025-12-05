<script setup>
import nav from "../../assets/index.js"
</script>

<template>
  <header>
    <nav class="bg-white">
      <h4 class="title">
        Taskoo
      </h4>

      <ul class="mobile-null">
        <li><a href="">Features</a></li>
        <li><a href="">How it Works</a></li>
      </ul>

      <ul>
        <li><a href="#/auth" class="null">Sign in</a></li>
        <li>
          <button @click="nav('/auth')">
            Get Started
          </button>
        </li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: grey;
}

nav {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 2rem;
  background: linear-gradient(to right, rgb(39, 47, 48), rgb(20, 94, 52), rgb(33, 33, 33));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

button {
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  width: 120px;
  height: 30px;
  transition-duration: 1s;
  transition-delay: 0.31s;
}

button:hover {
  background: rgb(20, 94, 52);
  color: white;
  border: 1px solid rgb(20, 94, 52);
}

/* Hamburger Styles */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

.null {
  display: none;
}

@media (max-width: 768px) {
  .mobile-null {
    display: none;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: grey;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    display: none;
    line-height: 30px;
  }

  .nav-links.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>
