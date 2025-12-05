<script setup>
import { ArrowRightEndOnRectangleIcon, UserPlusIcon } from "@heroicons/vue/16/solid/index.js";
import { ref } from "vue";

const isSignUp = ref(true);

function Signup() {
  isSignUp.value = false;
}

function Signin() {
  isSignUp.value = true;
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
      <form action="" method="POST">
        <div class="form-name" v-if="isSignUp">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="John Doe"/>
        </div>
        <div class="form-email">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="you@example.com" required/>
        </div>
        <div class="form-password">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="******" required/>
        </div>
        <div class="end-form">
          <button type="submit">
            <component
                :is="isSignUp ? UserPlusIcon : ArrowRightEndOnRectangleIcon"
                class="icons-size"
            />
            {{ isSignUp ? "Sign up" : "Sign in" }}
          </button>
          <a href="" v-if="!isSignUp">Forgot Password?</a></div>
        <hr>
        <p>Don't have an account?
          <span>
            <a @click.prevent="Signup" v-if="isSignUp">
              Sign in
            </a>
            <a @click.prevent="Signin" v-else>
              Sign up
            </a>
          </span>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;        /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical center */
  align-items: center;     /* Horizontal center */
}

.auth-container, .form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-container .auth-container-header, .form-container .form-container-header {
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
</style>
