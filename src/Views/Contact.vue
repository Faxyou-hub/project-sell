<template>
    <div class="py-5">
      <div class="flex items-center justify-center mb-5">
        <div class="bg-gradient-to-r from-from via-via to-to rounded-full px-4 py-2 flex items-center">
          <!-- <span class="mr-2">🛒</span> -->
          <span class="font-semibold">Contact US</span>
        </div>
        <!-- <h2 class="text-2xl font-bold text-blue-900 ml-4">
          This year's <span class="text-black">top sellers</span>
        </h2> -->
      </div>

      <!-- Contact Info -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
        <div class="flex flex-col items-center">
          <i class="fas fa-envelope text-3xl text-bg-icon"></i>
          <h3 class="font-bold text-lg mt-2">Support</h3>
          <p class="text-text">jasdara6@gmail.com</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fas fa-phone text-3xl text-bg-icon"></i>
          <h3 class="font-bold text-lg mt-2">Phone</h3>
          <p class="text-text">+855 99 70 55 77</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fas fa-map-marker-alt text-3xl text-bg-icon"></i>
          <h3 class="font-bold text-lg mt-2">Address</h3>
          <p class="text-text">121 King Street, Los Angeles</p>
        </div>
      </div>
  
      <!-- Contact Form & Map -->
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <!-- Contact Form -->
        <div class="bg-box w-[500px] max-w-full h-full p-6 rounded-xl shadow-lg">
          <h2 class="text-2xl font-bold">Get in touch <span class="font-extrabold text-blue-500">with us</span></h2>
  
          <form @submit.prevent="submitForm" class="mt-6">
            <div class="grid md:grid-cols-2 gap-4">
              <input type="text" v-model="name" placeholder="Your Name" class="input-field" required>
              <input type="email" v-model="email" placeholder="Your Email" class="input-field" required>
              
              <input type="text" v-model="subject" placeholder="Subject" class="input-field focus:ring-2 focus:ring-blue-500">
              <select v-model="department" class="select">
                <option>Business Department</option>
                <option>Personal Department</option>
                <option>Support Department</option>
                <option>Others</option>
              </select>
            </div>
  
            <textarea v-model="message" placeholder="Your Question" class="w-full h-24 rounded-lg bg-gradient-to-r from-from via-via to-to placeholder:text-white outline-none focus:ring-blue-500 ring-1 mt-4 p-2"></textarea>
  
            <button type="submit" class="mt-4 px-6 py-2 bg-gradient-to-r from-from via-via to-to font-semibold rounded-full shadow-md hover:bg-indigo-800 transition">
              Ask
            </button>
          </form>
        </div>
  
        <!-- Google Map -->
        <div class="rounded-xl w-[500px] max-w-full h-[366px] max-h-full shadow-lg overflow-hidden">
          <iframe
            class="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075831888!2d-74.25987168765826!3d40.69767006319869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1788a7df93%3A0x4c6c1b67e194af92!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1706800000000!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from "vue";
  
  // Contact Form Data
  const name = ref("");
  const email = ref("");
  const subject = ref("");
  const department = ref("Business Department");
  const message = ref("");
  
  // Form Submission
  const submitForm = () => {
    if (!name.value || !email.value) {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert(`Thank you ${name.value}, your message has been sent!`);
    
    // Clear form
    name.value = "";
    email.value = "";
    subject.value = "";
    department.value = "Business Department";
    message.value = "";
  };
</script>

<style scoped>
  /* Input Field Styling */
  .input-field, .select {
    padding: 6px 8px;
    border-radius: 99px;
    border: 1.5px solid #ddd;
    outline: none;
    font-size: 14px;
    background:linear-gradient(to right, #B57DFA, #F689C0, #F5A276);
  }
  .select {
    appearance: none; /* Remove default arrow */
  }
  .select:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 5px rgba(79, 70, 229, 0.5);
  }
  .input-field:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 5px rgba(79, 70, 229, 0.5);
  }
    
  input::placeholder {
    color: white;
  }
  option {
    background: #FC80C3;
  }
</style>
  