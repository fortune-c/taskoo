<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/assets/index.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { BellAlertIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/vue/16/solid/index.js";

// Reactive variable for user initials
const userName = ref("")
const isMenuOpen = ref(false)

// Watch for auth state changes
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user?.displayName) {
      userName.value = user.displayName
      userInitials.value = user.displayName.slice(0, 2)
    } else {
      userName.value = 'User'
      userInitials.value = 'Us'
    }
  })
})

// Reactive variable for user initials
const userInitials = ref("")

// Watch for auth state changes
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.displayName) {
      // Take first letter of display name
      userInitials.value = user.displayName.slice(0, 2)
    } else {
      userInitials.value = "User" // fallback if no user or displayName
    }
  })
})

// Logout function
function logout() {
  signOut(auth).then(() => {
    window.location.hash = "/auth"
  })
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function goTo(path) {
  window.location.hash = path
  isMenuOpen.value = false // auto close mobile menu
}

</script>



<template>
  <header>
    <nav class="bg-white">
      <h4 class="title">
        Taskoo
      </h4>

      <!-- Hamburger -->
      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <ul class="menu" :class="{ open: isMenuOpen }">
        <li><a @click="goTo('/kanban')">Kanban</a></li>
        <li><a @click="goTo('/teams')">Team</a></li>
        <li><a @click="goTo('/tasks')">Tasks</a></li>
        <li><a @click="goTo('/meetings')">Meetings</a></li>
      </ul>
      <div class="user-actions" :class="{ open: isMenuOpen }">
        <button class="user-details">
          <span class="initials">{{ userInitials }}</span>
          {{ userName }}
        </button>
        <button class="bell-border">
          <BellAlertIcon class="icons-bell" />
        </button>
        <button @click="logout">
          <ArrowRightEndOnRectangleIcon class="icons-size" /> Logout
        </button>
      </div>
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

.menu {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 2rem;
  background: linear-gradient(to right, rgb(39, 47, 48), rgb(20, 94, 52), rgb(33, 33, 33));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.user-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
}

.user-actions>.user-details {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  height: 40px;
  border-radius: 5px;
}

.user-actions .initials {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  background: #1A936F;
  margin: 0 10px;
  border-radius: 30px;
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

.bell-border {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
}

.icons-bell {
  width: 20px;
  height: 20px;
}

/* Hamburger button */
.hamburger {
  display: none;
  font-size: 1.8rem;
  background: none !important;
  border: none !important;
}

/* Mobile styles */
@media (max-width: 768px) {
  header {
    width: 100%;
  }
  nav {
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    align-items: center;
  }

  .hamburger {
    display: block;
  }

  .menu {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    display: none;
    margin-top: 15px;
    gap: 10px;
  }

  .menu.open {
    display: flex;
  }

  .user-actions {
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
  }

  .user-actions>.user-details {
    width: auto;
  }

  button {
    width: auto;
  }

  .user-actions {
    width: 100%;
    display: none;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: left;
  }

  .user-actions.open {
    display: flex;
  }
}
</style>
