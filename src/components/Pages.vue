<template>
    <div class="relative inline-block text-left" ref="dropdown">
      <!-- Dropdown Button -->
      <button 
        @click="toggleDropdown"
        class="flex items-center uppercase gap-1 relative cursor-pointer transition-all duration-300 group"
      >
        Pages
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2CB9F8] transition-all duration-400 ease-in-out group-hover:w-full"
            
          ></span>
      </button>
  
      <!-- Dropdown Content -->
      <div 
        v-show="isOpen" 
        class="absolute left-0 mt-2 md:mt-7 w-44 md:w-48 bg-gradient-to-r from-from via-via to-to rounded-lg shadow-lg z-10 border border-gray-200"
      >
        <ul class="py-2">
          <li 
            v-for="page in pages" 
            :key="page.name" 
            class="px-4 py-2 hover:bg-box cursor-pointer transition duration-200"
            @click="navigateTo(page.path)"
          >
            {{ page.name }}
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        isOpen: false,
        pages: [
          { name: "About", path: "/about" },
          { name: "FAQs", path: "/FAQ" },
          { name: "Blog", path: "/Blog" },
        ],
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      navigateTo(path) {
        this.$router.push(path);
        this.isOpen = false;
      },
      handleClickOutside(event) {
        if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
          this.isOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    }
  };
  </script>
  