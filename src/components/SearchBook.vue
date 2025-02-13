<script setup>
    import { ref } from "vue";

    const searchQuery = ref("");
    
    const searchBooks = () => {
        if (searchQuery.value.trim() !== "") {
        alert(`Searching for: ${searchQuery.value}`);
        } else {
        alert("Please enter a search term");
        }
    };
</script>

<template>
    <div class="h-96 flex flex-col justify-center">
        <div>
            <h2 class="text-2xl max-w-60 md:max-w-lg md:text-5xl font-bold">
                Huge collection
                <span class="text-blue-500">of best books​​</span>
            </h2>
            <p class="max-w-72 md:max-w-sm mt-5 text-text">
                An online book is a resource in book-like form that
                is only available to read on the Internet. It differs
                from the common idea of an e-book
            </p>
        </div>

        <div class="mt-4 relative ps:w-72 md:w-[400px]">
            <input type="text" v-model="searchQuery" placeholder="Search book..." 
                class="w-full bg-gradient-to-r from-from via-via to-to placeholder:text-white rounded-full shadow-md focus:ring-2 focus:ring-blue-500 outline-none py-3 px-4" />
            <button @click="searchBooks" class="absolute right-3 top-2.5 text-xl">
                🔍
            </button>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

</style>