<script setup>
import { ref, computed } from "vue";

// Children's Books Data (With Ratings & Reviews)
const childrenBooks = ref([
  {
    id: 1,
    title: "Atomic Habits",
    price: 22,
    image: "/src/assets/book/eb.webp",
    rating: 5,
    reviews: [],
  },
  {
    id: 2,
    title: "The Power of Now",
    price: 44,
    image: "/src/assets/book/eb.webp",
    rating: 5,
    reviews: [],
  },
  {
    id: 3,
    title: "How to Win Friends & Influence People",
    price: 35,
    image: "/src/assets/book/eb.webp",
    rating: 4,
    reviews: [],
  },
  {
    id: 4,
    title: "Mindset: The New Psychology of Success",
    price: 30,
    image: "/src/assets/book/eb.webp",
    rating: 4,
    reviews: [],
  },
  {
    id: 5,
    title: "The Subtle Art of Not Giving a F*ck",
    price: 50,
    image: "/src/assets/book/eb.webp",
    rating: 3,
    reviews: [],
  },
  {
    id: 6,
    title: "The Four Agreements",
    price: 28,
    image: "/src/assets/book/eb.webp",
    rating: 3,
    reviews: [],
  },
  {
    id: 7,
    title: "You Are a Badass",
    price: 32,
    image: "/src/assets/book/eb.webp",
    rating: 2,
    reviews: [],
  },
  {
    id: 8,
    title: "Grit: The Power of Passion and Perseverance",
    price: 40,
    image: "/src/assets/book/eb.webp",
    rating: 2,
    reviews: [],
  },
  {
    id: 9,
    title: "The 7 Habits of Highly Effective People",
    price: 27,
    image: "/src/assets/book/eb.webp",
    rating: 1,
    reviews: [],
  },
  {
    id: 10,
    title: "Daring Greatly",
    price: 39,
    image: "/src/assets/book/eb.webp",
    rating: 1,
    reviews: [],
  },
]);

// Pagination
const itemsPerPage = 8;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(childrenBooks.value.length / itemsPerPage));

// Sorting & Filtering
const sortBy = ref("rating"); // Options: rating, price, title
const selectedRating = ref(null);

// Compute Filtered and Sorted Books
const filteredBooks = computed(() => {
  let books = [...childrenBooks.value];

  if (selectedRating.value) {
    books = books.filter((book) => Math.round(book.rating) === selectedRating.value);
  }

  return books.sort((a, b) => b[sortBy.value] - a[sortBy.value]);
});

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBooks.value.slice(start, start + itemsPerPage);
});

// Navigation
const prevPage = () => currentPage.value > 1 && currentPage.value--;
const nextPage = () => currentPage.value < totalPages.value && currentPage.value++;

// Rating System
const rateBook = (book, rating) => {
  book.rating = rating;
};
</script>

<template>
  <div class="py-5">
    <h2 class="text-2xl font-bold text-center text-blue-500 mb-6">📘 Children Books</h2>

    <!-- Sort & Filter Options -->
    <div class="flex flex-col items-center md:flex-row justify-between mx-10 mb-6">
      <select
        v-model="sortBy"
        class="bg-gradient-to-r from-from via-via to-to border outline-none focus:ring-2 ring-blue-500 appearance-none rounded-full px-3 py-1.5"
      >
        <option value="rating">Sort by Rating</option>
        <option value="price">Sort by Price</option>
        <option value="title">Sort by Title</option>
      </select>

      <select
        v-model="selectedRating"
        class="bg-gradient-to-r from-from via-via to-to border outline-none focus:ring-2 ring-blue-500 appearance-none rounded-full mt-2 px-3 py-1.5"
      >
        <option :value="null">Filter by Rating</option>
        <option v-for="r in [5, 4, 3, 2, 1]" :key="r" :value="r">{{ r }} Stars</option>
      </select>
    </div>

    <!-- Book Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mx-10"
    >
      <div
        v-for="book in paginatedBooks"
        :key="book.id"
        class="group overflow-hidden relative bg-blue-200 h-48 w-32 sm:h-64 sm:w-44 lg:h-72 lg:w-48 my-2.5"
      >
        <!-- Book Image -->
        <div class="w-full flex justify-center">
          <img
            :src="book.image"
            :alt="book.title"
            class="sm:h-64 sm:w-44 lg:h-72 lg:w-48 object-cover"
          />
        </div>

        <div
          class="absolute opacity-0 h-48 w-32 sm:h-64 sm:w-44 lg:h-72 lg:w-48 content-center bg-box bg-opacity-80 group-hover:opacity-100 top-80 group-hover:top-0 transition-all duration-500 ease-in-out"
        >
          <h3
            class="mt-4 font-bold text-center line-clamp-2 text-xs sm:text-base lg:text-lg px-2"
          >
            {{ book.title }}
          </h3>

          <div class="flex items-center justify-around text-xs sm:text-base lg:text-xl">
            <p class="font-semibold">${{ book.price }}</p>

            <div class="flex justify-center my-3">
              <span
                v-for="star in 5"
                :key="star"
                @click="rateBook(book, star)"
                class="cursor-pointer"
                :class="star <= book.rating ? 'text-yellow-400' : 'text-gray-300'"
                >★</span
              >
            </div>
          </div>

          <!-- Review Section -->
          <div class="mt-4">
            <button
              class="hidden group-hover:flex text-xs sm:text-base mx-auto px-3 py-2 bg-gradient-to-r from-from via-via to-to font-semibold rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-8 space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 border rounded-full"
        :class="
          currentPage === 1
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-bg-icon'
        "
      >
        ←
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        class="w-10 h-10 flex items-center justify-center border rounded-full"
        :class="
          currentPage === page
            ? 'bg-bg-icon'
            : 'bg-gray-200 text-gray-600 hover:bg-bg-icon hover:text-white'
        "
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 border rounded-full"
        :class="
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-bg-icon'
        "
      >
        →
      </button>
    </div>
  </div>
</template>

<style scoped>
option {
  background: #fc80c3;
}
</style>
