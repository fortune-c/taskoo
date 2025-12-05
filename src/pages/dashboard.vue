<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/assets/index.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { BellAlertIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/vue/16/solid/index.js";

// Reactive variable for user initials
const userName = ref("")

// Watch for auth state changes
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.displayName) {
      // Take first letter of display name
      userName.value = user.displayName
    } else {
      userName.value = "User" // fallback if no user or displayName
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
</script>



<template>
  <div class="dashboard-container">
    <header>
      <nav class="bg-white">
        <h4 class="title">
          Taskoo
        </h4>
        <ul class="menu">
          <li class="active"><a>Kanban</a></li>
          <li><a>Team</a></li>
          <li><a>Tasks</a></li>
          <li><a>Meetings</a></li>
        </ul>
        <div class="user-actions">
          <button class="user-details">
            <span class="initials">{{userInitials}}</span>
            {{ userName }}
          </button>
          <button class="bell-border">
            <BellAlertIcon class="icons-bell"/>
          </button>
          <button @click="logout"><ArrowRightEndOnRectangleIcon class="icons-size" /> Logout</button>
        </div>

      </nav>
    </header>

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

/*Continue from here tomorrow*/
main {
  padding: 20px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 80%;
}

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
  -webkit-background-clip: text;
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

.user-actions > .user-details {
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
</style>
