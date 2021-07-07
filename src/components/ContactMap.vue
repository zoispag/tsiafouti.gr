<template>
  <div>
    <address class="mb-6 text-lg not-italic">
      <h5 class="font-semibold mb-6">Στοιχεία επικοινωνίας</h5>
      <div class="flex text-yellow-800">
        <svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <p class="flex-1">Ραιδεστού 35, 10441, Αθήνα</p>
      </div>
      <div class="flex text-yellow-800">
        <svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <a class="flex-1" href="tel:+306901234567">(+30) 690 123 4567</a>
      </div>
      <div class="flex text-yellow-800">
        <svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <a class="flex-1" href="mailto:d.tsiafouti@gmail.com">d.tsiafouti@gmail.com</a>
      </div>
    </address>
    <gmap-map
      :center="center"
      :zoom="18"
      class="w-full"
      style="height: 280px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
      ></gmap-marker>
      <gmap-info-window :position="center">
        <p class="font-bold mb-1">Τσιαφούτη Δήμητρα</p>
        <p>Ραιδεστού 35, 10441, Αθήνα</p>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'ContactMap',
  data () {
    return {
      center: {},
      markers: []
    }
  },

  mounted () {
    const center = { lat: 37.99604, lng: 23.716309 }

    this.center = center
    this.markers.push({ position: { ...center } })
  }
}
</script>

<style scoped lang="scss">

</style>
