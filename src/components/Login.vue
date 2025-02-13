<template>
  <div>
    <!-- Login Button -->
    <button 
      @click="showLogin = true" 
      class="bg-gradient-to-r from-from via-via to-to rounded-full flex items-center justify-center gap-1 md:gap-4 w-20 h-8 md:w-32 md:h-12"
    >
      <LoginVue class="h-4 w-4 md:h-6 md:w-6"/>
      <span class="md:text-xl text-sm">Login</span>
    </button>

    <!-- Login Modal -->
    <div 
      v-if="showLogin" 
      class="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      @click="closeModalOutside"
    >
      <div 
        class="bg-box p-6 rounded-lg shadow-lg w-96 relative"
        @click.stop
      >
        <h2 class="text-2xl font-bold text-center">Login to website</h2>

        <!-- Username Input -->
        <input v-model="username" type="text" placeholder="Username" 
              class="w-full text-sm md:text-lg bg-gradient-to-r from-from via-via to-to placeholder:text-white outline-none focus:ring-2 ring-blue-500 mt-4 py-2 px-4 border rounded-full">

        <!-- Password Input -->
        <input v-model="password" type="password" placeholder="Password" 
              class="w-full text-sm md:text-lg bg-gradient-to-r from-from via-via to-to placeholder:text-white outline-none focus:ring-2 ring-blue-500 mt-2 py-2 px-4 border rounded-full">

        <!-- Email Input -->
        <input v-model="email" type="email" placeholder="Email" 
              class="w-full text-sm md:text-lg bg-gradient-to-r from-from via-via to-to placeholder:text-white outline-none focus:ring-2 ring-blue-500 mt-2 py-2 px-4 border rounded-full"
              @input="validateEmail">

        <!-- Email Validation Error -->
        <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>

        <!-- Login Button -->
        <button
          @click="submitLogin"
          class="mt-4 w-full text-sm md:text-lg bg-blue-600 text-white py-2 rounded-full"
        >
          Login Now
        </button>

        <p class="text-sm text-center mt-4">
          Forgot your password? <a href="#" class="text-blue-500">Get help</a>
        </p>
        <p class="text-sm text-center">
          Not registered? <a href="#" class="text-blue-500">Create an account</a>
        </p>

        <!-- Close Button -->
        <button 
          @click="showLogin = false" 
          class="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginVue from "./icon/Login.vue";

const showLogin = ref(false);
const username = ref('');
const password = ref('');
const email = ref('');
const emailError = ref('');

// Function to close modal when clicking outside
const closeModalOutside = () => {
showLogin.value = false;
};

// Email validation function
const validateEmail = () => {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email.value)) {
  emailError.value = "Invalid email format";
} else {
  emailError.value = "";
}
};

// Function to handle login submission
const submitLogin = () => {
if (!username.value || !password.value || !email.value) {
  alert("All fields are required!");
  return;
}
if (emailError.value) {
  alert("Please enter a valid email!");
  return;
}

// Simulating login process
console.log("Logging in with:", {
  username: username.value,
  password: password.value,
  email: email.value,
});

alert("Login successful!");

// Close the modal
showLogin.value = false;
};
</script>
