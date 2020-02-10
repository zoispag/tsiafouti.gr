<template>
  <div class="antialiased">
    <Header />
    <Hero />
    <ShortIntro />
    <Bio />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ShortIntro from './components/ShortIntro.vue'
import Bio from './components/Bio.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    ShortIntro,
    Bio
  }
}
</script>

<style lang="scss">
</style>
