<script setup>
  import { ref, computed } from "vue";
  import RightIcon from "./icon/right-icon.vue";
  import LeftIcon from "./icon/left-icon.vue";
  
  // Testimonials data
  const testimonials = ref([
    { name: "Sarah Green", role: "Teacher", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
    { name: "Stephan More", role: "Technician", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
    { name: "Rose Johnson", role: "Technician", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
    { name: "Mike Smith", role: "Developer", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
    { name: "Emma Watson", role: "Designer", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
    { name: "John Doe", role: "Manager", quote: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this.", image: "/src/assets/logo/it-logo.png" },
  ]);
  
  // Pagination settings
  const itemsPerPage = 3;
  const currentIndex = ref(0);
  
  // Get paginated testimonials using a sliding window
  const paginatedTestimonials = computed(() => {
    return testimonials.value.slice(currentIndex.value, currentIndex.value + itemsPerPage);
  });
  
  // Navigate to previous items (shift left by 1)
  const prevPage = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  
  // Navigate to next items (shift right by 1)
  const nextPage = () => {
    if (currentIndex.value < testimonials.value.length - itemsPerPage) {
      currentIndex.value++;
    }
  };
</script>
  
<template>
  <div>
    <div class="flex flex-col md:flex-row items-center my-5">
      <div class="flex items-center bg-gradient-to-r from-from via-via to-to rounded-full px-3 py-2">
        <span class="mr-2">👤</span>
        <span class="font-semibold">Testimonials</span>
      </div>
      <h2 class="text-2xl font-bold mt-2 md:mt-0 ml-4">
        What Customer Say
      </h2>
    </div>

    <!-- Testimonials Wrapper -->
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
      <div
        v-for="testimonial in paginatedTestimonials"
        :key="testimonial.name"
        class="bg-box p-5 rounded-lg shadow-md text-center max-w-sm"
      >
        <p class="italic text-lg">"{{ testimonial.quote }}"</p>
        <p class="mt-4 font-bold text-blue-500">
          {{ testimonial.name }}
          <span class="text-text font-normal">{{ testimonial.role }}</span>
        </p>
        <div class="mt-4 flex justify-center">
          <img
            :src="testimonial.image"
            alt="User Avatar"
            class="w-12 h-12 rounded-full border-2 border-bg-icon shadow"
          />
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-6 space-x-4">
      <button
        @click="prevPage"
        class="p-2 border rounded-full"
        :class="{
          'bg-box cursor-not-allowed': currentIndex === 0,
          'bg-bg-icon': currentIndex > 0
        }"
      >
        <LeftIcon class="h-6 w-6 text-white"/>
      </button>
      <button
        @click="nextPage"
        class="p-2 border rounded-full"
        :class="{
          'bg-box cursor-not-allowed': currentIndex >= testimonials.length - itemsPerPage,
          'bg-bg-icon': currentIndex < testimonials.length - itemsPerPage
        }"
      >
        <RightIcon class="h-6 w-6 text-white"/>
      </button>
    </div>
  </div>
</template>
  
  <style scoped>

  </style>
  