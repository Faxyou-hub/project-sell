<script setup>
  import Footer from "./components/Footer.vue";
import Nav from "./components/NavBar.vue";
  
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Karla:ital,wght@0,200..800;1,200..800&family=Moo+Lah+Lah&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Skranji:wght@400;700&family=Space+Grotesk:wght@464&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="font-battambang bg-page text-white">
    <header class="lg:w-1024 xl:w-1280 mx-auto">
      <Nav/>
    </header>

    <main class="lg:w-1024 xl:w-1280 mx-auto px-2.5">
      <router-view />
    </main>

    <footer class="lg:w-1024 xl:w-1280 mx-auto px-2.5">
      <Footer/>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
