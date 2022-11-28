<script setup>
import { computed } from 'vue'

const punchlines = {
  en: "When I accept myself just as I am, then I can change",
  gr: "Όταν αποδεχτώ τον εαυτό μου όπως είναι, τότε μπορώ να αλλάξω",
}
const origins = {
  en: "Carl Rogers",
  gr: "Καρλ Ρότζερς",
}

const lang = computed(() => Math.floor(Math.random() * 10) < 6 ? 'gr' : 'en') // 60% GR - 40% EN

const punchline = computed(() => punchlines[lang.value])
const origin = computed(() => origins[lang.value])

</script>

<template>
  <div id="hero" class="-mt-24">
    <div class="">
      <div class="absolute mt-48 md:mt-64 right-0 pr-4 md:pr-32 text-xl md:text-md lg:text-2xl">
        <div class="text-right mix-blend-difference text-slate-400 italic">"{{ punchline }}"</div>
        <div class="text-right mix-blend-difference text-slate-400 text-lg sm:text-xl md:text-2xl">— {{ origin }}</div>
      </div>
      <img class="w-full h-screen object-cover" src="~@/assets/media/photo-1487700160041-babef9c3cb55.jpeg">
    </div>
  </div>
</template>

