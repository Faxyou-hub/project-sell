<template>
    <div class="relative inline-block text-left" ref="cartDropdown">
      <!-- Cart Icon with Badge -->
      <button @click="toggleCart" class="relative bg-gradient-to-r from-from via-via to-to md:text-xl flex items-center justify-center rounded-full w-8 h-8 md:w-12 md:h-12">
        🛒
        <span v-if="cart.length" class="absolute -top-0 -right-1 bg-bg-icon text-white md:text-xs text-[0.5rem] w-3 h-3 md:w-5 md:h-5 flex items-center justify-center content-center rounded-full">
          {{ cart.length }}
        </span>
      </button>
  
      <!-- Cart Dropdown -->
      <div 
        v-show="isCartOpen" 
        class="absolute right-0 mt-2 w-48 pm:w-56 pl:w-64 md:mt-4 md:w-80 bg-box border border-gray-300 shadow-lg rounded-lg z-30"
      >
        <!-- Empty Cart Message -->
        <div v-if="cart.length === 0" class="p-6 text-center text-text">
          <span class="text-4xl">🛒</span>
          <p class="mt-2">Cart's empty ! Let's fill it up !</p>
        </div>
  
        <!-- Cart Items -->
        <ul v-else class="max-h-96 max-w-80 overflow-y-auto scrollbar-hide space-y-3">
          <li 
            v-for="(item, index) in cart" 
            :key="index" 
            class="flex items-center justify-between gap-5 w-80 p-2 border-b last:border-none"
          >
            <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded">
            <div class="flex-1">
              <p class="truncate text-sm line-clamp-1">{{ item.name }}</p>
              <p class="text-text text-sm">${{ item.price }}</p>
            </div>
            <button @click="removeFromCart(index)" class="text-red-500 text-sm font-medium hover:underline">Remove</button>
          </li>
        </ul>
  
        <!-- Checkout Button -->
        <div class="p-4 border-t">
          <button 
            class="w-full bg-gradient-to-r from-from via-via to-to text-white py-2 rounded-full transition duration-300"
            @click="checkout"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        isCartOpen: false,
        cart: [
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
          { name: "Cryptocurrency Guide", price: 22.49, image: "/src/assets/logo/it-logo.png" },
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
          { name: "Cryptocurrency Guide", price: 22.49, image: "/src/assets/logo/it-logo.png" },
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
          { name: "Cryptocurrency Guide", price: 22.49, image: "/src/assets/logo/it-logo.png" },
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
          { name: "Cryptocurrency Guide", price: 22.49, image: "/src/assets/logo/it-logo.png" },
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
          { name: "Cryptocurrency Guide", price: 22.49, image: "/src/assets/logo/it-logo.png" },
          { name: "Biography Book", price: 15.99, image: "/src/assets/logo/it-logo.png" },
        ]
      };
    },
    methods: {
      toggleCart() {
        this.isCartOpen = !this.isCartOpen;
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      },
      checkout() {
        alert("Proceeding to checkout...");
      },
      handleClickOutside(event) {
        if (this.$refs.cartDropdown && !this.$refs.cartDropdown.contains(event.target)) {
          this.isCartOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    }
  };
</script>
  