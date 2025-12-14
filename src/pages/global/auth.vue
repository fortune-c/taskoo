<script setup>
import { ArrowRightEndOnRectangleIcon, UserPlusIcon } from "@heroicons/vue/16/solid/index.js";
import { ref, computed } from "vue";
import { auth } from "@/assets/index.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const isSignUp = ref(false);

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

const isEmailValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function Signup() {
  isSignUp.value = true;
}

function Signin() {
  isSignUp.value = false;
}

const isFormValid = computed(() => {
  if (isSignUp.value) {
    if (name.value.trim().length < 2) return false
  }

  if (!isEmailValid(email.value)) return false
  if (password.value.length < 6) return false

  return true
})

async function SignupHandler() {
  error.value = ""

  if (!isFormValid.value) {
    error.value = "Please fill all fields correctly"
    return
  }

  loading.value = true

  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    await updateProfile(res.user, {
      displayName: name.value.trim()
    })

    isSignUp.value = false
    name.value = ""
    email.value = ""
    password.value = ""
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}


async function SigninHandler() {
  error.value = ""

  if (!isFormValid.value) {
    error.value = "Invalid email or password"
    return
  }

  loading.value = true

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    window.location.hash = "/tasks"
    email.value = ""
    password.value = ""
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

</script>


<template>
  <div class="auth-container">
    <div class="auth-container-header">
      <h1>Taskoo</h1>
      <p>Project Management with Voice Integration</p>
    </div>
    <div class="form-container">
      <div>
        <div class="form-container-header" v-if="isSignUp">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>
        </div>
        <div class="form-container-header" v-else>
          <h2>Welcome Back</h2>
          <p>Sign into your account</p>
        </div>
      </div>
      <form @submit.prevent="isSignUp ? SignupHandler() : SigninHandler()">

        <div class="form-name" v-if="isSignUp">
          <label>Name</label>
          <input type="text" v-model="name" placeholder="John Doe" />
        </div>

        <div class="form-email">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="you@example.com"
            :class="{ invalid: email && !isEmailValid(email) }" required />
        </div>

        <div class="form-password">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="******"
            :class="{ invalid: password && password.length < 6 }" required />
        </div>

        <div class="end-form">
          <button type="submit" :disabled="loading">
            <component :is="isSignUp ? UserPlusIcon : ArrowRightEndOnRectangleIcon" class="icons-size" />
            {{ loading ? "Processing..." : (isSignUp ? "Sign up" : "Sign in") }}
          </button>

          <a v-if="!isSignUp">Forgot Password?</a>

          <p v-if="error" class="error-text">{{ error }}</p>
        </div>

        <hr>

        <p>
          {{ isSignUp ? "Already have an account?" : "Don't have an account?" }}
          <span>
            <a v-if="isSignUp" @click.prevent="Signin">Sign in</a>
            <a v-else @click.prevent="Signup">Sign up</a>
          </span>
        </p>

      </form>

    </div>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Vertical center */
  align-items: center;
  /* Horizontal center */
}

.auth-container,
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-container .auth-container-header,
.form-container .form-container-header {
  text-align: center;
  margin-bottom: 10px;
}

.auth-container h1 {
  font-size: 2rem;
  font-weight: 300;
}

.auth-container p {
  font-size: 0.7rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightslategray;
  color: #121212;
  background-color: lightslategray;
  width: 400px;
  border-radius: 15px;
  height: 400px;
  padding: 0;
}

.form-container form {
  width: 85%;
}

.form-container form div {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.form-container form div label {
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 5px;
}

.form-container form div input {
  border: none;
  border-radius: 5px;
  height: 20px;
  padding: 5px 10px;
  outline: none;
}

.form-container form .end-form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.form-container form .end-form button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  margin-bottom: 10px;
}

.form-container p {
  text-align: center;
  margin: 10px 0;
}

.error-text {
  color: red;
  font-size: 0.7rem;
  margin-top: 8px;
}

.invalid {
  border: 1px solid red;
}
</style>
