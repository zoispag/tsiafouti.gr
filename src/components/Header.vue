<template>
  <div
    class="flex justify-between px-8 py-6 top-0 sticky overflow-hidden border-red-700 border-t-4 z-50"
    id="navbar"
  >
    <a href="#hero" class="flex"><img
      class="h-12 object-cover"
      src="~@/assets/media/logo_head.jpg"
      alt="Tsiafouti.gr"
      href="#top"
    >
      <div class="ml-8 text-yellow-800 font-semibold"><p>Τσιαφούτη Δήμητρα</p><p>Ψυχολόγος - Ψυχοθεραπεύτρια</p></div>
    </a>
    <nav class="flex items-center">
      <a href="#bio" class="px-4 font-bold text-gray-800">Βιογραφικό</a>
      <a href="#services" class="px-4 font-bold text-gray-800">Υπηρεσίες</a>
      <a href="#contact" class="px-4 font-bold text-gray-800">Επικοινωνία</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  #navbar {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(.1rem);
  }
</style>
