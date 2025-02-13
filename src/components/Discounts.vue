<script setup>
  import { ref } from "vue";
  
  // Dynamic Newsletter Data
  const newsletters = ref([
    { label: "Get Discounts", title: "Subscribe to newsletter", image: "https://source.unsplash.com/1600x900/?book,library", email: "" },
  ]);
  
  // Subscribe function (handles email input)
  const subscribe = (index) => {
    if (newsletters.value[index].email.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      alert(`Subscribed with ${newsletters.value[index].email}`);
      newsletters.value[index].email = ""; // Clear input field
    }
  };
</script>
  
<template>
  <div v-for="(newsletter, index) in newsletters" :key="index"
    class="h-40 flex flex-col"
  >
    <div class="flex flex-col md:flex-row items-center my-5">
      <div class="bg-gradient-to-r from-from via-via to-to rounded-full px-3 py-2">
        <span class="mr-2">⚡</span> 
        <span>{{ newsletter.label }}</span>
      </div>
      <h2 class="text-xl sm:text-2xl font-bold mt-2 md:mt-0 ml-5">
        Subscribe to newsletter
      </h2>
    </div>

    <div class="relative w-72 mt-5 mx-auto md:w-80">
      <input type="email" v-model="newsletter.email" placeholder="Enter your email..."
            class="w-full bg-gradient-to-r from-from via-via to-to  placeholder:text-white rounded-full shadow-md focus:ring-2 focus:ring-blue-500 outline-none py-2 px-4">
      <button @click="subscribe(index)" class="absolute right-3 top-2 text-blue-500 text-xl">
        📩
      </button>
    </div>
  </div>

</template>
  
<style scoped>

</style>
  