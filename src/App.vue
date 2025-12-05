<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Auth from './pages/Auth.vue'
import NotFound from './pages/NotFound.vue'
import Navbar from "@/components/app/Navbar.vue";

const routes = {
  '/': Home,
  '/auth': Auth,
  '/not-found': NotFound
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const showNavbar = computed(() => currentPath.value.slice(1) !== '/auth')
</script>

<template>
  <Navbar v-if="showNavbar" />
  <component :is="currentView" />
</template>