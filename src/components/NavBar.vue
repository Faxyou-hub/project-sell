<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import Shopping from "./Shopping.vue";
import Login from "./Login.vue";
import Pages from "./Pages.vue";
import Collections from "../Views/Collections.vue";

// Reactive state for mobile menu
const isMenuOpen = ref(false);

// List of navigation items
const navItems = [
  { label: "Home", path: "/" },
  { label: "Books", path: "/books" },
  { label: "Contact Us", path: "/contact-us" },
];

// Watch for route change to close mobile menu automatically
const route = useRoute();
watch(route, () => {
  isMenuOpen.value = false;
});
</script>

<template>
  <nav>
    <!-- Desktop Navigation -->
    <div class="h-20 hidden md:flex items-center justify-between border-b px-2.5">
      <div>
        <router-link to="/">
          <img src="@/assets/logo/it-logo.png" alt="Logo" class="h-14" />
        </router-link>
      </div>

      <!-- <div>
        <ul class="flex items-center gap-7">
          <li v-for="item in navItems" :key="item.path">
            <router-link
              :to="item.path"
              class="uppercase"
              :class="{ '': route.path === item.path }"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li><Collections /></li>
          <li><Pages /></li>
          <li><Shopping /></li>
          <li><Login /></li>
        </ul>
      </div> -->

      <div>
    <ul class="flex items-center gap-8">
      <li v-for="item in navItems" :key="item.path">
        <router-link
          :to="item.path"
          class="uppercase relative transition-all duration-300 group"
        >
          {{ item.label }}
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2CB9F8] transition-all duration-400 ease-in-out group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li><Collections /></li>
      <li><Pages /></li>
      <li><Shopping /></li>
      <li><Login /></li>
    </ul>
  </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <div class="h-14 flex items-center justify-between bg-box px-2.5">
        <router-link to="/">
          <img src="@/assets/logo/it-logo.png" alt="Logo" class="h-10" />
        </router-link>

        <div class="flex items-center gap-2">
          <div><Login/></div>
          <button @click="isMenuOpen = !isMenuOpen" aria-label="Open Menu" class="h-8 w-8 bg-gradient-to-r from-from via-via to-to rounded-full place-items-center
          ">
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="fixed z-50 top-0 left-0 w-2/3 bg-box h-screen overflow-auto scrollbar-hide text-white shadow-lg transform transition-transform duration-500 ease-in-out sm:w-1/3"
        :class="{ '-translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen }"
      >
        <div class="p-2.5 flex justify-between items-center">
          <button @click="isMenuOpen = false" class="text-white h-8 w-8 bg-gradient-to-r from-from via-via to-to rounded-full place-items-center" aria-label="Close Menu">✕</button>
          <div><Shopping /></div>
        </div>

        <ul>
          <li v-for="item in navItems" :key="item.path" class="p-2.5">
            <router-link
              :to="item.path"
              class="uppercase relative transition-all duration-300 group"
              :class="{ '': route.path === item.path }"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2CB9F8] transition-all duration-400 ease-in-out group-hover:w-full"
              ></span>
            </router-link>
          </li>
          <li class="p-2.5"><Collections /></li>
          <li class="p-2.5"><Pages /></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav a:hover {
  transition: all 0.3s ease-in-out;
}
</style>
