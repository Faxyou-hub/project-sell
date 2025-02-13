<script setup>
import { ref } from "vue";

// Features Data
const features = ref([
  { id: 1, text: "Limited liability" },
  { id: 2, text: "Able to raise significant" },
  { id: 3, text: "Easy to sell ownership" },
  { id: 4, text: "Well understood" },
  { id: 5, text: "Offset against profits" },
  { id: 6, text: "Profits can be reinvested" },
]);

// Testimonials Data
const testimonials = ref([
  {
    id: 1,
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts. Always be the one you want to be",
    name: "John Carter",
    role: "Businessman",
    image: "/src/assets/logo/it-logo.png",
  },
  {
    id: 2,
    quote:
      "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier",
    name: "Lisa Martines",
    role: "Housewife",
    image: "/src/assets/logo/it-logo.png",
  },
  {
    id: 3,
    quote:
      "I owe my success to having listened respectfully to the very best advice, and then going away",
    name: "Mike Nelson",
    role: "Web Developer",
    image: "/src/assets/logo/it-logo.png",
  },
]);

</script>

<template>
  <div class="py-5">
    <!-- About Section -->
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
      <img
        src="/src/assets/girl-read-book.png"
        alt="Teamwork"
        class="rounded-lg h-72 md:h-[450px]"
      />
      <div>
        <h2 class="text-2xl font-bold">
          About Our <span class="text-blue-500 underline">Book Shop</span>
        </h2>
        <p class="mt-4 text-text">
          A company is a separate legal entity and can incur debt, sue and be sued. The
          company’s shareholders (the owners) can limit their personal liability and are
          generally not responsible for company debts. A company is a complex business
          structure and has high set-up and reporting costs. You can form a company as
          either a private (also known as proprietary) or public entity. A registered
          company must have at least one director (and a company secretary unless it is a
          private company)
        </p>
        <!-- Features List -->
        <div class="grid grid-cols-2 gap-2 mt-4">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="flex items-center space-x-2"
          >
            <i class="fas fa-check-circle text-bg-icon"></i>
            <span>{{ feature.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bookshop Values Section -->
    <div class="bg-box text-white text-center py-12 mt-12">
      <h2 class="text-2xl font-bold">The independent bookshop, traditional values</h2>
      <p class="mt-2">We Lose Ourselves in Books, We Find Ourselves There, Too</p>
    </div>

    <!-- Testimonials Section -->
    <div class="max-w-5xl mx-auto mt-12">
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-box p-5 text-center rounded-xl shadow-lg"
        >
          <p class="italic">"{{ testimonial.quote }}"</p>
          <div class="flex items-center mt-4 space-x-3">
            <img
              :src="testimonial.image"
              alt="User"
              class="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h4 class="font-bold">{{ testimonial.name }}</h4>
              <p class="text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
/* Additional styling is handled by Tailwind */
</style>
