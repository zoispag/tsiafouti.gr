<template>
  <div class="pt-6">
    <dt>
      <button
        class="text-left w-full flex justify-between items-start text-gray-400"
        @click="toggle"
      >
        <span class="text-gray-800 font-semibold tracking-wider">
          {{ title }}
        </span>
        <span class="ml-6 h-7 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            class="h-6 w-6 transform"
            :class="isExpanded ? '-rotate-180' : 'rotate-0'"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </dt>

    <dd class="mt-2 pr-12" v-show="isExpanded">
      <p class="text-yellow-800">
        <slot></slot>
      </p>
    </dd>

  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    title: String,
    id: Number,
    initialExpanded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isExpanded: this.initialExpanded
    }
  },
  methods: {
    toggle () {
      this.isExpanded = !this.isExpanded
      this.$emit('expandClick', 1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
