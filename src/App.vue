<script setup>
import { ref, computed } from 'vue'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/assets/index.js";
import LandingPage from './pages/landing-pages/landing-page.vue'
import Auth from './pages/global/auth.vue'
import NotFound from './pages/global/not-found.vue'
import Kanban from "@/pages/app/home.vue";
import Team from './pages/app/team.vue';
import Tasks from './pages/app/tasks.vue';
import Meetings from './pages/app/meetings.vue';

const routes = {
  '/': LandingPage,
  '/auth': Auth,
  '/not-found': NotFound,
  '/kanban': Kanban,
  '/teams': Team,
  '/tasks': Tasks,
  '/meetings': Meetings
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const path = currentPath.value.slice(1) || '/';

  // Protected routes
  const protectedRoutes = ['/tasks', '/kanban', '/teams', '/meetings'];

  // If route is protected, check if user is signed in
  if (protectedRoutes.includes(path)) {
    const user = auth.currentUser;
    if (!user) {
      // Redirect to auth page if not signed in
      window.location.hash = '/auth';
      return Auth;
    }
  }

  return routes[path] || NotFound;
});

</script>

<template>
  <component :is="currentView" />
</template>