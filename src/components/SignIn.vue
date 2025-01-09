<script setup>
import { ref } from "vue";

// State to toggle the modal
const isSignInModalOpen = ref(false);

// Function to open and close the modal
const toggleSignInModal = () => {
  isSignInModalOpen.value = !isSignInModalOpen.value;
};
</script>

<template>
  <!-- Navigation Bar -->
  <div class="text-white flex items-center justify-between">
    <div>
      <button
        @click="toggleSignInModal"
        class="text-white border-white border rounded-xl transform duration-500 px-2 py-1 hover:bg-white hover:text-red-500 hover:scale-105"
      >
        Sign in
      </button>
    </div>
  </div>

  <!-- SignIn Modal -->
  <div v-if="isSignInModalOpen" class="fixed inset-0 flex items-center justify-cente">
    <div class="bg-white text-black w-full p-6 rounded shadow-lg">
      <h2 class="text-2xl text-center font-bold mb-4">SignIn</h2>
      <form action="" method="post">
        <div class="mb-4">
          <label for="name" class="block mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block mb-1">Your Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your phone"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
