<script setup>
import Routes from "./components/Routes.vue";
import Search from "./components/Search.vue";
import SignIn from "./components/SignIn.vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Karla:ital,wght@0,200..800;1,200..800&family=Moo+Lah+Lah&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Skranji:wght@400;700&family=Space+Grotesk:wght@464&display=swap"
    rel="stylesheet"
  />
  <header class="bg-red-500 flex items-center justify-between font-battambang px-5">
    <img src="@/assets/logo.png" class="h-10" alt="" />
    <div class="flex md:flex-row-reverse items-center">
      <SignIn />
      <Routes />
    </div>
  </header>

  <router-view></router-view>

  <footer></footer>
</template>

<style lang="scss" scoped></style>
