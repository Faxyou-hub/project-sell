<script setup>
  import { ref } from "vue";
  
  const authors = ref([
    {
      name: "Adam Grant",
      role: "Psychologist",
      image: "/src/assets/logo/it-logo.png",
      socials: [
        { name: "Facebook", icon: "fa-brands fa-facebook", link: "https://www.facebook.com/" },
        { name: "Twitter", icon: "fa-brands fa-twitter", link: "https://www.x.com/" }
      ]
    },
    {
      name: "Dan Brown",
      role: "American author",
      image: "/src/assets/logo/it-logo.png",
      socials: [
        { name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/" },
        { name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/" }
      ]
    },
    {
      name: "James Patterson",
      role: "Psychologist",
      image: "/src/assets/logo/it-logo.png",
      socials: [
        { name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/" }
      ]
    },
    {
      name: "J.K. Rowling",
      role: "British author",
      image: "/src/assets/logo/it-logo.png",
      socials: [
        { name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/" },
        { name: "Twitter", icon: "fab fa-twitter", link: "https://www.x.com/" },
        { name: "Skype", icon: "fab fa-skype", link: "https://www.skype.com/" }
      ]
    }
  ]);
</script>
  
<template>
  <div class="py-5">
    <div class="flex flex-col md:flex-row items-center my-5">
      <div class="bg-gradient-to-r from-from via-via to-to rounded-full px-3 py-2">
        <span class="mr-2">✍️</span> 
        <span>Authors</span>
      </div>
      <h2 class="text-2xl font-bold mt-2 md:mt-0 ml-4">Most Popular Authors</h2>
    </div>

    <!-- Authors Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="author in authors" :key="author.name" class="flex flex-col items-center">
        <!-- Profile Image -->
        <div class="h-40 rounded-full overflow-hidden border-4 border-bg-icon shadow-md">
          <img :src="author.image" :alt="author.name" class="w-full h-full object-cover">
        </div>

        <!-- Social Media Icons -->
        <div class="flex items-center gap-2.5 mt-2.5">
          <a v-for="icon in author.socials" :key="icon.name" :href="icon.link" target="_blank" >
            <i :class="icon.icon" class="bg-bg-icon content-center rounded-full w-10 h-10"></i>
          </a>
        </div>

        <!-- Name & Role -->
        <h3 class="mt-3 font-bold text-xl">{{ author.name }}</h3>
        <p class="text-text">{{ author.role }}</p>
      </div>
    </div>
  </div>
</template>
  
<style scoped>

</style>
  