<script setup>
  import { ref } from "vue";
  
  const faqs = ref([
    {
      question: "What is the purpose of this website?",
      answer:
        "This website provides a platform to answer frequently asked questions and help users with their inquiries.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support by filling out the form on this page or by reaching out to us through the 'Contact Us' section.",
    },
    {
      question: "What are the payment methods available?",
      answer:
        "We accept credit cards, debit cards, and PayPal for payments. You can choose your preferred method at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and going to the 'Order History' section.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes, you can return a product within 30 days of purchase, as long as it is in unused condition. Please refer to our return policy for more details.",
    },
  ]);

  const questions = ref([
    {
      question: "How long will it take to process my order?",
      answer:
        "Order processing time usually takes 1-2 business days. However, during high demand, it might take up to 5 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees vary based on your location.",
    },
    {
      question: "What should I do if I received a damaged product?",
      answer:
        "If you received a damaged product, please contact our customer support immediately. We'll arrange for a replacement or refund.",
    },
    {
      question: "Can I change my order after it's placed?",
      answer:
        "Once an order is placed, it cannot be changed. However, you can cancel the order within 24 hours and place a new one.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "You can apply a discount code during the checkout process. Simply enter the code in the 'Promo Code' section and the discount will be applied.",
    },
  ]);

  const activeIndex = ref([]);

  const toggleAnswer = (index) => {
    if (activeIndex.value.includes(index)) {
      activeIndex.value = activeIndex.value.filter((i) => i !== index); // Remove if already active
    } else {
      activeIndex.value.push(index); // Add if not active
    }
  };

</script>

<template>
  <div class="py-5">
    <h2 class="text-2xl md:text-3xl font-bold text-center">Do you have any questions? Ask us</h2>

    <div class="flex flex-col md:flex-row justify-between pt-5">
      <div class="md:w-7/12">
        <div class="mt-6">
          <h3 class="text-xl font-semibold flex items-center">
            <span
              class="mr-2 bg-bg-icon w-8 h-8 items-center rounded-full flex justify-center"
              >?</span
            >
            F.A.Qs
          </h3>
          <p class="text-text pb-5 pt-2">Frequently asked questions</p>

          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-gradient-to-r from-from via-via to-to py-2 rounded-xl mb-2 cursor-pointer"
            @click="toggleAnswer(index + faqs.length)"
          >
            <div class="flex justify-between items-center">
              <p class="font-medium pl-4">{{ index + 1 }}. {{ faq.question }}</p>
              <span class="pr-3">
                <svg
                  v-if="activeIndex.includes(index + faqs.length)"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </div>
            <p v-if="activeIndex.includes(index + faqs.length)" class="mt-2 pt-2 px-4 border-t text-white">
              {{ faq.answer }}
            </p>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold flex items-center">
            <span
              class="mr-2 bg-bg-icon w-8 h-8 items-center rounded-full flex justify-center"
              >ℹ</span
            >
            Other Questions
          </h3>
          <p class="text-text pb-5 pt-2">General questions</p>

          <div
            v-for="(question, index) in questions"
            :key="index"
            class="bg-gradient-to-r from-from via-via to-to text-sm md:text-base py-2 rounded-xl mb-2 cursor-pointer"
            @click="toggleAnswer(index)"
          >
            <div class="flex justify-between items-center">
              <p class="font-medium pl-4">{{ index + 1 }}. {{ question.question }}</p>
              <span class="pr-3">
                <svg
                  v-if="activeIndex.includes(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </div>
            <p
              v-if="activeIndex.includes(index)"
              class="mt-2 pt-2 px-4 border-t text-white"
            >
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 p-6 bg-box rounded-lg md:w-4/12 h-full">
        <h3 class="text-xl font-semibold">📩 Ask Us ...</h3>
        <p class="text-text">Have questions?</p>

        <form class="mt-4 space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              class="border bg-gradient-to-r from-from via-via to-to px-4 py-1.5 placeholder:text-white outline-none focus:ring-2 ring-blue-500 rounded-full w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="border bg-gradient-to-r from-from via-via to-to px-4 py-1.5 placeholder:text-white outline-none focus:ring-2 ring-blue-500 rounded-full w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            class="border bg-gradient-to-r from-from via-via to-to px-4 py-1.5 placeholder:text-white outline-none focus:ring-2 ring-blue-500 rounded-full w-full"
          />

          <select
            class="border bg-gradient-to-r from-from via-via to-to px-4 py-1.5 rounded-full w-full outline-none focus:ring-2 ring-blue-500"
          >
            <option>Business Department</option>
            <option>Support</option>
            <option>Sales</option>
          </select>

          <textarea
            placeholder="Your Question"
            class="border bg-gradient-to-r from-from via-via to-to placeholder:text-white p-2 outline-none focus:ring-2 ring-blue-500 rounded-lg w-full h-20"
          ></textarea>

          <button
            type="submit"
            class="bg-gradient-to-r from-from via-via to-to py-1.5 px-4 rounded-full"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
option {
  background: #fc80c3;
}
select {
  appearance: none;
}
</style>
