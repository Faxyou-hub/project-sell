<script setup>
  import { ref } from "vue";
  import Discounts from "./Discounts.vue";
    
    const menuLinks = ref([
      { name: "Home", link: "/" },
      { name: "Books", link: "/books" },
    ]);
    
    const supportLinks = ref([
      { name: "FAQS", link: "/FAQ" },
      { name: "Blog", link: "/blog" },
    ]);
    
    const aboutLinks = ref([
      { name: "Contact Us", link: "/contact-us" },
      { name: "About US", link: "/about" },
    ]);
    
    const socialIcons = ref([
      { name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/" },
      { name: "Twitter", icon: "fab fa-twitter", link: "https://www.x.com/" },
      { name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/" },
    ]);
</script>
  
<template>
  <footer>
    <Discounts/>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-4 px-10 py-5 pt-10 gap-8">
        <!-- Logo & Quote -->
        <div class="flex flex-col items-start">
          <router-link to="/">
            <img src="/src/assets/logo/it-logo.png" alt="Logo" class="h-14 mb-4">
          </router-link>
          <p class="text-text text-sm">
            "Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind."
          </p>
          <a href="#" class="text-blue-500 font-semibold mt-2">- BERNARD M. BARUCH</a>
        </div>

        <!-- Menu -->
        <div>
          <h3 class="font-bold mb-3">MENU</h3>
          <ul class="space-y-2">
            <li v-for="item in menuLinks" :key="item.name">
              <a :href="item.link" class="text-text hover:text-blue-600">{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="font-bold mb-3">SUPPORT</h3>
          <ul class="space-y-2">
            <li v-for="item in supportLinks" :key="item.name">
              <a :href="item.link" class="text-text hover:text-blue-500">{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <!-- About Us -->
        <div>
          <h3 class="font-bold mb-3">ABOUT US</h3>
          <ul class="space-y-2">
            <li v-for="item in aboutLinks" :key="item.name">
              <a :href="item.link" class="text-text hover:text-blue-500">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-from via-via to-to flex flex-col md:flex-row items-center justify-between rounded-t-3xl mx-auto mt-5 py-5 px-10">
      <div class="flex justify-center gap-5">
      <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link" target="_blank" class="hover:text-blue-500 text-2xl">
          <i :class="icon.icon"></i>
      </a>
      </div>

      <div class="text-center text-sm pt-2">
      © 2025 All rights reserved.
      </div>
    </div>
  </footer>
</template>
  
<style scoped>

</style>