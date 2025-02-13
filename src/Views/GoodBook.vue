<script setup>
  import { ref, computed } from 'vue';

  const bookItems = ref([
    { id: 1, name: 'item11', category: 'All', image: '/src/assets/book/eb.webp' },
    { id: 2, name: 'item12', category: 'All', image: '/src/assets/book/eb.webp' },
    { id: 3, name: 'item13', category: 'All', image: '/src/assets/book/eb.webp' },
    { id: 4, name: 'item14', category: 'All', image: '/src/assets/book/eb.webp' },
    { id: 5, name: 'item15', category: 'All', image: '/src/assets/book/eb.webp' },
    { id: 6, name: 'item16', category: 'All', image: '/src/assets/book/eb.webp' },

    { id: 7, name: 'item21', category: 'Educational book', image: '/src/assets/book/eb.webp' },
    { id: 8, name: 'item22', category: 'Educational book', image: '/src/assets/book/eb.webp' },
    { id: 9, name: 'item23', category: 'Educational book', image: '/src/assets/book/eb.webp' },
    { id: 10, name: 'item24', category: 'Educational book', image: '/src/assets/book/eb.webp' },

    { id: 11, name: 'item31', category: 'Book of Judges', image: '/src/assets/book/eb.webp' },
    { id: 12, name: 'item32', category: 'Book of Judges', image: '/src/assets/book/eb.webp' },

    { id: 13, name: 'item41', category: 'History book', image: '/src/assets/book/eb.webp' },
    { id: 14, name: 'item42', category: 'History book', image: '/src/assets/book/eb.webp' },

    { id: 15, name: 'item51', category: 'Sports book', image: '/src/assets/book/eb.webp' },
    { id: 16, name: 'item52', category: 'Sports book', image: '/src/assets/book/eb.webp' },

    { id: 17, name: 'item61', category: 'Literature book', image: '/src/assets/book/eb.webp' },
    { id: 18, name: 'item62', category: 'Literature book', image: '/src/assets/book/eb.webp' },
  ]);

  const categories = ref([
    'All', 'Educational book', 'Book of Judges', 'History book', 'Sports book', 'Literature book'
  ]);

  const activeCategory = ref('All');
  const itemsPerPage = 4;
  const currentPage = ref(1);

  const filteredItems = computed(() =>
    activeCategory.value === 'All'
      ? bookItems.value
      : bookItems.value.filter(item => item.category.trim() === activeCategory.value.trim())
  );

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
    if (direction === 'prev' && currentPage.value > 1) currentPage.value--;
    if (direction === 'next' && currentPage.value < totalPages.value) currentPage.value++;
  };
</script>

<template>
  <div class="bg-green-100 min-h-screen w-1024 xl:w-1280 mx-auto py-5 px-6">
    <div class="text-center mb-8">
      <div class="flex justify-center gap-5">
        <button
          v-for="category in categories"
          :key="category"
          @click="setActiveCategory(category)"
          :class="[
            'p-2 text-lg font-medium transition-all',
            activeCategory === category ? 'animate-bounce text-green-500' : 'text-gray-900 hover:text-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div v-if="paginatedItems.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div v-for="book in paginatedItems" :key="book.id" class="bg-blue-200 text-white overflow-hidden shadow-lg rounded-lg">
        <img :src="book.image" :alt="book.name" class="h-60 mx-auto mt-10 border-2 object-cover" />
        <div class="text-center">
          <h2 class="text-2xl font-bold pt-5">{{ book.name }}</h2>
          <button class="my-4 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition">
            🛒 Add to cart
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-xl text-gray-600 mt-10">
      <p>No books found in this category.</p>
    </div>

    <div class="flex justify-center mt-10 space-x-2">
      <button
        @click="changePage('prev')"
        :disabled="currentPage === 1"
        class="w-10 h-10 flex items-center justify-center text-gray-700 rounded-full bg-gray-300 disabled:opacity-50"
      >
        &larr;
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full transition-all',
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900 hover:bg-gray-400'
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="changePage('next')"
        :disabled="currentPage === totalPages"
        class="w-10 h-10 flex items-center justify-center text-gray-700 rounded-full bg-gray-300 disabled:opacity-50"
      >
        &rarr;
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
