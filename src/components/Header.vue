<template>
  <div
    class="flex justify-between px-8 py-6 top-0 sticky overflow-hidden border-red-700 border-t-4 z-50"
    id="navbar"
  >
    <a v-smooth-scroll href="#hero" class="flex justify-between w-full md:w-80"><img
      class="h-12 object-cover"
      src="~@/assets/media/logo_head.png"
      alt="Tsiafouti.gr"
      href="#top"
    >
      <div class="ml-6 md:ml-8 text-right md:text-left text-yellow-800 font-semibold">
        <p>Τσιαφούτη Δήμητρα</p><p>Ψυχολόγος - Ψυχοθεραπεύτρια</p>
      </div>
    </a>
    <nav class="hidden md:visible md:flex items-center">
      <a v-smooth-scroll href="#bio" class="px-4 font-bold text-gray-800">Βιογραφικό</a>
      <a v-smooth-scroll href="#services" class="px-4 font-bold text-gray-800">Υπηρεσίες</a>
      <a v-smooth-scroll href="#contact" class="px-4 font-bold text-gray-800">Επικοινωνία</a>
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
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(.1rem);
  }
</style>
