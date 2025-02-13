<template>
  <div class="relative inline-block text-left" ref="dropdown">
    <!-- Dropdown Button -->
    <button 
      @click="toggleDropdown"
      class="flex items-center uppercase gap-1 relative cursor-pointer transition-all duration-300 group"
    >
      Collections
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
      class="absolute left-0 mt-2 md:mt-7 w-44 md:w-96 bg-gradient-to-r from-from via-via to-to rounded-lg shadow-lg z-10 border border-gray-200"
    >
      <ul class="grid md:grid-cols-2 gap-1 py-2">
        <li 
          v-for="Collection in Collections" 
          :key="Collection.name" 
          class="px-4 py-2 text-sm hover:bg-box cursor-pointer transition duration-200"
          @click="navigateTo(Collection.path)"
        >
          {{ Collection.name }}
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
      Collections: [
        { name: "Khmer History Book", path: "/khmer-history" },//សៀវភៅប្រវត្តិសាស្ត្រខ្មែរ
        { name: "Sport Book", path: "/sports" },//សៀវភៅកីឡា
        { name: "Social Science Book", path: "/social-science" },//សៀវភៅវិទ្យាសាស្ត្រសង្គម
        { name: "Educational Book", path: "/educational" },//សៀវភៅអប់រំ
        { name: "Children Book", path: "/children" },//សៀវភៅកុមារ
        { name: "Judge Book", path: "/judge" },//សៀវភៅចៅក្រម
        { name: "Literature Book", path: "/literature" },//សៀវភៅអក្សរសាស្ត្រ
        { name: "Religious Book", path: "/religious" },//សៀវភៅសាសនា
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
