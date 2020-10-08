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
      <div class="ml-6 md:ml-8 text-right md:text-left text-yellow-800 font-semibold">
        <p>Τσιαφούτη Δήμητρα</p><p>Ψυχολόγος - Ψυχοθεραπεύτρια</p>
      </div>
    </a>
    <!-- <button @click.prevent="showMenu = !showMenu" class="px-2 py-4">
      <svg v-show="!showMenu" class="visible md:hidden w-6 h-6 -mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
      <svg v-show="showMenu" class="visible md:hidden w-6 h-6 -mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button> -->
    <nav class="hidden md:visible md:flex items-center">
      <a href="#bio" class="px-4 font-bold text-gray-800">Βιογραφικό</a>
      <a href="#services" class="px-4 font-bold text-gray-800">Υπηρεσίες</a>
      <a href="#contact" class="px-4 font-bold text-gray-800">Επικοινωνία</a>
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
