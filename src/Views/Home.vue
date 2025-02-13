<script setup>
  import BookType from "../components/BookType.vue";
  import BestSelling from "../components/BestSelling.vue";
  import Testimonials from "../components/Testimonials.vue";
  import SpecialOffer from "../components/SpecialOffer.vue";
  import Authors from "../components/Authors.vue";
  import SearchBook from "../components/SearchBook.vue";
    
</script>

<template>
  <div>
    <SearchBook/>
    <BookType/>
    <BestSelling/>
    <Testimonials/>
    <SpecialOffer/>
    <Authors/>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
  