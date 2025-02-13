<script setup>
import { ref } from "vue";

const bookTypes = ref([
    { title: "Educational", slug: "educational", image: "/src/assets/book/eb.webp" },
    { title: "Khmer History", slug: "khmer-history", image: "/src/assets/book/eb.webp" },
    { title: "Social Science", slug: "social-science", image: "/src/assets/book/eb.webp" },
    { title: "Judges", slug: "judge", image: "/src/assets/book/eb.webp" },
]);
</script>

<template>
    <div>
        <div class="flex flex-col md:flex-row items-center my-5">
            <div class="flex items-center bg-gradient-to-r from-from via-via to-to rounded-full px-3 py-2">
                <span class="mr-2">📘</span>
                <span class="font-semibold">ពេញនិយម</span>
            </div>
            <h2 class="text-2xl font-bold text-blue-500 mt-2 md:mt-0 ml-4">
            This year's <span class="text-white">Popular</span>
            </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center">
            <router-link
                v-for="(bookType, index) in bookTypes"
                :key="index"
                :to="`/${bookType.slug}`"
                class="group relative overflow-hidden h-48 w-32 md:h-72 md:w-52 mt-4 bg-box shadow-lg text-center"
            >
                <img 
                    :src="bookType.image" 
                    :alt="bookType.title"
                    class="relative h-48 w-32 md:h-72 md:w-52 object-cover"
                />

                <div class="absolute opacity-0 h-48 w-32 md:h-72 md:w-52 content-center bg-box bg-opacity-80 group-hover:opacity-100 top-80 group-hover:top-0 transition-all duration-500 ease-in-out">
                    <h3 class=" md:text-lg font-semibold">
                        {{ bookType.title }}
                    </h3>

                </div>
            </router-link>
        </div>
    </div>
</template>
