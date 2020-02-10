<template>
  <div
    class="flex justify-between px-8 py-6 top-0 sticky overflow-hidden border-red-700 border-t-4 z-50"
    id="navbar"
  >
    <img
      class="h-8 object-cover"
      src="~@/assets/media/logo.png"
      alt="Tsiafouti.gr"
      href="#top"
    >
    <nav class="flex items-center">
      <div class="px-4 font-medium text-gray-800">Βιογραφικό</div>
      <div class="px-4 font-medium text-gray-800">Λίγα λόγια</div>
      <div class="px-4 font-medium text-gray-800">Θεραπείες</div>
      <div class="px-4 font-medium text-gray-800">Επικοινωνία</div>
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
