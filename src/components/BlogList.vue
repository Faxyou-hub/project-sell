<template>
    <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Blog Posts Section -->
        <div class="lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
                v-for="(post, index) in paginatedPosts"
                :key="index"
                class="bg-box rounded-xl shadow-lg overflow-hidden border p-4"
            >
                <img :src="post.image" alt="Post Image" class="w-full h-48 object-cover rounded-md">
                <h3 class="mt-4 text-lg font-bold">{{ post.title }}</h3>
                <p class="text-text mt-2">{{ post.excerpt }}</p>
                <a href="#" class="mt-4 inline-flex items-center text-blue-500">
                🔗 Read More
                </a>
            </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-6">
            <button
                class="p-2 rounded-full border bg-bg-icon text-white mx-1"
                @click="prevPage"
                :disabled="currentPage === 1"
            >
                <leftIconVue class="h-6 w-6"/>
            </button>
            <button
                v-for="page in totalPages"
                :key="page"
                class="px-4 py-2 rounded-full border mx-1"
                :class="{ 'bg-bg-icon text-white': page === currentPage, 'bg-box ': page !== currentPage }"
                @click="changePage(page)"
            >
                {{ page }}
            </button>
            <button
                class="p-2 rounded-full border bg-bg-icon text-white mx-1"
                @click="nextPage"
                :disabled="currentPage === totalPages"
            >
                <rightIconVue class="h-6 w-6"/>
            </button>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
            <!-- Tags Cloud -->
            <div class="bg-box p-5 rounded-xl shadow-lg">
            <h3 class="text-lg font-bold bg-gradient-to-r from-from via-via to-to px-4 py-2 rounded-full inline-block">
                Tags Cloud
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
                <button
                v-for="(tag, index) in tags"
                :key="index"
                class="bg-gradient-to-r from-from via-via to-to border px-3 py-1 rounded-full text-sm shadow-md"
                >
                {{ tag }}
                </button>
            </div>
            </div>

            <!-- Ads Section -->
            <div class="bg-box p-5 rounded-xl shadow-lg">
            <h3 class="text-lg font-bold bg-gradient-to-r from-from via-via to-to text-white px-4 py-2 rounded-full inline-block">
                Ads
            </h3>
            <div class="mt-4 w-full h-40">
                <img src="/src/assets/book/test.jpg" alt="" class="h-40 w-full">
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import leftIconVue from "./icon/left-icon.vue";
    import rightIconVue from "./icon/right-icon.vue";
    const posts = ref([
    {
    title: "Principles of Coldness",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Much Space in World",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Technology in Future",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Marketing Strategies",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Principles of Coldness",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Much Space in World",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Technology in Future",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    {
    title: "Marketing Strategies",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "/src/assets/book/eb.webp",
    },
    ]);

    const tags = ref(["article", "computer", "developer", "famous", "interview", "it", "learn", "money", "photography", "post", "seo", "technology", "tutorial", "website", "wordpress", "WP"]);

    const itemsPerPage = ref(4);
    const currentPage = ref(1);

    const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return posts.value.slice(start, start + itemsPerPage.value);
    });

    const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage.value));

    const changePage = (page) => {
    currentPage.value = page;
    };

    const prevPage = () => {
    if (currentPage.value > 1) {
    currentPage.value--;
    }
    };

    const nextPage = () => {
    if (currentPage.value < totalPages.value) {
    currentPage.value++;
    }
    };
  </script>
  
  <style scoped>
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  