<template>
    <div>
      <div class="flex flex-col md:flex-row items-center my-5">
        <div class="flex items-center bg-gradient-to-r from-from via-via to-to rounded-full px-3 py-2">
          <span class="mr-2">🛒</span>
          <span class="font-semibold">សៀវភៅលក់ដាច់បំផុត</span>
        </div>
        <h2 class="text-2xl font-bold text-blue-500 mt-2 md:mt-0 ml-4">
          This year's <span class="text-white">top sellers</span>
        </h2>
      </div>
  
      <!-- Book List -->
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div 
          v-for="(book, index) in books" 
          :key="index"
          class="group relative overflow-hidden h-48 w-32 md:h-72 md:w-52 my-2.5"
        >
          <img :src="book.image" :alt="book.title" class="relative h-48 w-32 md:h-72 md:w-52 object-cover" />

          <div class="absolute opacity-0 h-48 w-32 md:h-72 md:w-52 content-center bg-box bg-opacity-80 group-hover:opacity-100 top-80 group-hover:top-0 transition-all duration-500 ease-in-out">
            <h3 class="text-sm md:text-lg text-center font-semibold line-clamp-1">{{ book.title }}</h3>
            <div class="justify-around items-center my-5 flex">
              <p>$ {{ book.price }}</p>
              <div>
                <span v-for="star in 5" :key="star" class="text-yellow-400">
                  {{ star <= book.rating ? "★" : "☆" }}
                </span>
              </div>
            </div>
            <button 
              class="flex bg-gradient-to-r text-sm from-from via-via to-to rounded-full mx-auto px-3 py-2 transition duration-300"
            >
            🛒 Add Ot Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from "vue";
  
  const books = ref([
    {
      title: "Viper in the Window",
      image: "/src/assets/book/eb.webp",
      price: 35,
      rating: 5,
    },
    {
      title: "Never Stop Dream",
      image: "/src/assets/book/eb.webp",
      price: 44,
      rating: 4,
    },
    {
      title: "The Sequence of the Books",
      image: "/src/assets/book/eb.webp",
      price: 79,
      rating: 3,
    },
    {
      title: "Networks R",
      image: "/src/assets/book/eb.webp",
      price: 22,
      rating: 4,
    },
    {
      title: "Autobiography",
      image: "/src/assets/book/eb.webp",
      price: 20,
      rating: 5,
    },
    {
      title: "The Cave",
      image: "/src/assets/book/eb.webp",
      price: 18,
      rating: 4,
    },
    {
      title: "Natural Cosmetic",
      image: "/src/assets/book/eb.webp",
      price: 35,
      rating: 5,
    },
    {
      title: "The Birth",
      image: "/src/assets/book/eb.webp",
      price: 35,
      rating: 5,
    }
  ]);
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  