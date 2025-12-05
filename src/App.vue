<script setup>
import { ref, computed } from 'vue'
import LandingPage from './pages/landing-page.vue'
import Auth from './pages/auth.vue'
import NotFound from './pages/not-found.vue'
import Dashboard from "@/pages/dashboard.vue";

const routes = {
  '/': LandingPage,
  '/auth': Auth,
  '/not-found': NotFound,
  '/dashboard': Dashboard
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <component :is="currentView" />
</template>