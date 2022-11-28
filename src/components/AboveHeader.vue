<script setup>
import AddressIconVue from './icons/AddressIcon.vue';
import EmailIconVue from './icons/EmailIcon.vue';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 px-8 py-2 md:pb-1 md:pt-2 bg-yellow-800">
    <section class="flex items-center text-sm font-normal md:font-bold text-white gap-3">
      <AddressIconVue class="w-5 h-5" />
      <span>Έβρου 36, 11527, Αμπελόκηποι, Αθήνα</span>
    </section>

    <section class="flex items-center text-sm font-normal md:font-bold text-white gap-3">
      <EmailIconVue class="w-5 h-5" />
      <a href="mailto:d.tsiafouti@gmail.com">d.tsiafouti@gmail.com</a>
    </section>

  </div>
</template>
