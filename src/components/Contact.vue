<script setup>
import ContactForm from './ContactForm.vue'
import ContactMap from './ContactMap.vue'
</script>

<template>
  <div id="contact" class="w-full lg:flex py-16 px-8 lg:px-32 text-sm bg-gray-200">
    <div class="flex-1">
      <ContactForm />
    </div>
    <div class="flex-1 mt-12 lg:ml-24 lg:mt-0">
      <ContactMap />
    </div>
  </div>
</template>
