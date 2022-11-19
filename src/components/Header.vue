<template>
  <div
    class="flex justify-between px-8 py-6 top-0 sticky overflow-hidden border-yellow-800 border-t-4 z-50"
    id="navbar"
  >
    <a v-smooth-scroll href="#hero" class="flex justify-between w-full md:w-1/3"><img
      class="h-12 object-cover"
      src="~@/assets/media/logo_head.png"
      alt="Tsiafouti.gr"
      href="#top"
    >
      <div class="ml-6 md:ml-8 text-right md:text-left">
        <p class="font-normal text-sm text-gray-700">Χώρος ψυχοθεραπείας και συμβουλευτικής</p>
        <p class="font-bold">Τσιαφούτη Δήμητρα</p>
        <p class="font-normal text-sm text-yellow-800 md:whitespace-nowrap">Ψυχολόγος - Ψυχοθεραπεύτρια παιδιού και εφήβου, οικογενειακή θεραπεύτρια</p>
      </div>
    </a>
    <nav class="hidden md:visible md:flex items-center">
      <a v-smooth-scroll href="#bio" class="px-4 font-semibold">Βιογραφικό</a>
      <a v-smooth-scroll href="#services" class="px-4 font-semibold">Υπηρεσίες</a>
      <a v-smooth-scroll href="#contact" class="px-4 font-semibold">Επικοινωνία</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped lang="scss">
  #navbar {
    background-color: rgba(235, 229, 220, 0.8);
    backdrop-filter: blur(.1rem);
  }
</style>
