<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MenuIcon from "./icon/MenuIcon.vue";

// Navigation items
const navItems = [
  { label: "ទំព័រដើម", path: "/ទំព័រដើម" }, // Home
  { label: "សេវាកម្មពិសេស", path: "/សេវាកម្មពិសេស" }, // Offer
  { label: "សេវាកម្ម", path: "/សេវាកម្ម" }, // Service
  { label: "ម៉ឺនុយ", path: "/ម៉ឺនុយ" }, // Menu
  { label: "អំពីពួកយើង", path: "/អំពីពួកយើង" }, // About Us
];

// State and toggle function
const route = useRoute();
const isMenuOpen = ref(false);

// Toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="py-4 font-funnel font-custom text-base">
    <div class="container mx-auto flex justify-between items-center px-2">
      <!-- Mobile Menu Icon -->
      <button class="sm:hidden" @click="toggleMenu" aria-label="បើកម៉ឺនុយ">
        <!-- Toggle Menu -->
        <MenuIcon class="h-6 w-6 text-white" />
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden sm:flex space-x-6">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="text-gray-600 hover:text-red-600"
            :class="{
              'font-bold text-black border-b-2 border-red-500': route.path === item.path,
            }"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      class="fixed top-0 left-0 w-1/2 h-full z-10 bg-red-500 text-white shadow-md transform transition-transform duration-700 ease-in-out"
      :class="{ '-translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen }"
    >
      <div class="p-4 flex justify-between items-center">
        <img src="@/assets/logo.png" class="h-10" alt="Logo" />
        <button @click="toggleMenu" aria-label="បិទម៉ឺនុយ" class="text-white">
          <!-- Close Menu -->
          ✕
        </button>
      </div>
      <ul class="mt-4 space-y-4 px-6">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="block uppercase hover:text-gray-300"
            :class="{ 'font-bold animate-bounce': route.path === item.path }"
            @click="toggleMenu"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Smooth scrolling and menu animation */
.fixed {
  scroll-behavior: smooth;
}
</style>
