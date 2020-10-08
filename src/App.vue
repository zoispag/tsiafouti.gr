<template>
  <div class="antialiased">
    <Header />
    <Hero />
    <Bio />
    <Approach />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Bio from './components/Bio.vue'
import Approach from './components/Approach.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Bio,
    Approach,
    Services,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">

</style>
