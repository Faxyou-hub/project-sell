<script setup>
import { ref, computed } from "vue";
import leftIconVue from "../components/icon/left-icon.vue";
import rightIconVue from "../components/icon/right-icon.vue";

const bookItems = ref([
  
//1
  { id: 1, name: 'item10', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item11', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item12', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item13', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item14', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item15', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item16', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item17', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item18', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
  { id: 1, name: 'item19', star:'4.5', price: '99' , category: 'Literature', image: '/src/assets/book/eb.webp' },
//2
  { id: 2, name: 'item20', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item21', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item22', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item23', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item24', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item25', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item26', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item27', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item28', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
  { id: 2, name: 'item29', star:'3.5', price: '99' , category: 'Educational', image: '/src/assets/book/eb.webp' },
//3
  { id: 3, name: 'item30', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item31', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item32', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item33', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item34', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item35', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item36', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item37', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item38', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
  { id: 3, name: 'item39', star:'2.5', price: '99' , category: 'Sports', image: '/src/assets/book/eb.webp' },
//4
  { id: 4, name: 'item40', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item41', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item42', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item43', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item44', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item45', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item46', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item47', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item48', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
  { id: 4, name: 'item49', star:'4', price: '99' , category: 'Judges', image: '/src/assets/book/eb.webp' },
//5
  { id: 5, name: 'item50', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item51', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item52', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item53', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item54', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item55', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item56', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item57', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item58', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
  { id: 5, name: 'item59', star:'4', price: '99' , category: 'History', image: '/src/assets/book/eb.webp' },
//6
  { id: 6, name: 'item60', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item61', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item62', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item63', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item64', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item65', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item66', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item67', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item68', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
  { id: 6, name: 'item69', star:'4', price: '99' , category: 'Dharma', image: '/src/assets/book/eb.webp' },
//7
  { id: 7, name: 'item70', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item71', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item72', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item73', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item74', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item75', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item76', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item77', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item78', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
  { id: 7, name: 'item79', star:'1', price: '99' , category: 'Social Sciences', image: '/src/assets/book/eb.webp' },
//8
  { id: 8, name: 'item80', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item81', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item82', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item83', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item84', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item85', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item86', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item87', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item88', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
  { id: 8, name: 'item89', star:'5', price: '99' , category: 'Religious', image: '/src/assets/book/eb.webp' },
]);

const categories = ref(["All", "Literature", "Educational", "Sports", "Judges", "History", "Dharma", "Social Sciences", "Religious"]);
const activeCategory = ref("All");
const searchQuery = ref("");
const sortOption = ref("");

const itemsPerPage = 10;
const currentPage = ref(1);

const filteredItems = computed(() => {
  let result = bookItems.value;

  // Filter by Category
  if (activeCategory.value !== "All") {
    result = result.filter((item) => item.category === activeCategory.value);
  }

  // Search Filter
  if (searchQuery.value.trim() !== "") {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Sorting
  if (sortOption.value === "title") {
    result = result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === "price") {
    result = result.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === "rating") {
    result = result.sort((a, b) => b.star - a.star);
  }

  return result;
});

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage));

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredItems.value.slice(start, start + itemsPerPage);
});

const setActiveCategory = (category) => {
  activeCategory.value = category;
  currentPage.value = 1;
};

const changePage = (direction) => {
  if (direction === "prev" && currentPage.value > 1) currentPage.value--;
  if (direction === "next" && currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
  <div class="my-5">
    <!-- Search and Sorting -->
    <div class="flex flex-col md:flex-row justify-start md:justify-between md:items-center mb-5">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search books..."
        class="bg-gradient-to-r from-from via-via to-to placeholder:text-white text-sm md:text-base outline-none w-72 py-2 px-4 border focus:ring-2 ring-blue-500 rounded-full md:w-1/3"
      />

      <div class="flex items-center justify-between text-sm md:text-base mt-3 md:mt-0">
        <div>
          <select v-model="sortOption" class="bg-gradient-to-r from-from via-via to-to  py-2 px-4 border rounded-full outline-none focus:ring-2 ring-blue-500 appearance-none transition">
            <option value="">Sort By</option>
            <option value="title">Title (A-Z)</option>
            <option value="price">Price (L to H)</option>
            <option value="rating">Rating (H to L)</option>
          </select>
        </div>

        <div>
          <select @change="setActiveCategory($event.target.value)" class="md:hidden bg-gradient-to-r from-from via-via to-to flex   px-4 py-2 rounded-full appearance-none border outline-none focus:ring-2 ring-blue-500" >
            <option v-for="category in categories"
              :key="category"
              :value="category"
              :selected="activeCategory === category"
              >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div>
      <div class="hidden md:flex justify-around gap-5">
        <button
          v-for="category in categories"
          :key="category"
          @click="setActiveCategory(category)"
          :class="[
            'group relative py-2 md:p-0 text-sm md:text-lg font-medium transition-all duration-500 ease-in-out',
            activeCategory === category ? 'animate-bounce' : 'text-text'
          ]"
        >
          {{ category }}
          
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2CB9F8] transition-all duration-400 ease-in-out group-hover:w-full"
          ></span>
        </button>
      </div>

      <!-- <div>
        <select @change="setActiveCategory($event.target.value)" class="md:hidden bg-gradient-to-r from-from via-via to-to flex -my-2  px-4 py-2 rounded-full appearance-none border outline-none focus:ring-2 ring-blue-500" >
          <option v-for="category in categories"
            :key="category"
            :value="category"
            :selected="activeCategory === category"
            >
            {{ category }}
          </option>
        </select>
      </div> -->
    </div>

    <!-- Book List -->
    <div v-if="paginatedItems.length > 0" class="grid grid-cols-2 md:grid-cols-5 mt-3 place-items-center">
      <div
        v-for="book in paginatedItems"
        :key="book.id"
        class="group overflow-hidden relative bg-blue-200 h-48 w-32 md:h-64 md:w-44 my-2.5"
      >
        <img :src="book.image" :alt="book.name" class="h-48 w-32 md:h-64 md:w-44 object-cover" />

        <div>
          <div
            class="absolute opacity-0 h-48 w-32 md:h-64 md:w-44 content-center bg-box bg-opacity-80 group-hover:opacity-100 top-80 group-hover:top-0 transition-all duration-500 ease-in-out"
          >
            <h2 class="text-sm md:text-2xl text-center font-bold hidden group-hover:block">{{ book.name }}</h2>
            <div class="hidden group-hover:flex items-center justify-around py-5">
              <div>
                <span v-for="star in 5" :key="star" class="text-yellow-400 text-sm md:text-lg">
                  {{ star <= book.star ? "★" : "☆" }}
                </span>
              </div>
              <p class="text-sm md:text-lg">$ {{ book.price }}</p>
            </div>
            <button class="hidden group-hover:flex text-sm mx-auto px-3 py-2 bg-gradient-to-r from-from via-via to-to font-semibold rounded-full">
              🛒 Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No Books Found -->
    <div v-else class="text-center text-xl text-gray-600 mt-10">
      <p>No books found in this category.</p>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-10 space-x-1 md:space-x-2">
      <button
        @click="changePage('prev')"
        :disabled="currentPage === 1"
        class="h-6 w-6 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-bg-icon disabled:opacity-50"
      >
        <leftIconVue class="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'w-6 h-6 md:h-10 md:w-10 flex items-center justify-center text-sm md:text-lg rounded-full transition-all',
          currentPage === page ? 'bg-bg-icon text-white' : 'bg-box'
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="changePage('next')"
        :disabled="currentPage === totalPages"
        class="h-6 w-6 md:w-10 md:h-10  flex items-center justify-center rounded-full bg-bg-icon disabled:opacity-50"
      >
        <rightIconVue class="h-4 w-4 md:h-6 md:w-6" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  option {
    background: #FC80C3;
  }
</style>
