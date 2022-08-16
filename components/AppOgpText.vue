<template>
  <span
    :style="style"
    class="app-ogp-text"
  >
    {{ text }}
  </span>
</template>

<script>
const FONT_SIZE = '40px'

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        'font-size': FONT_SIZE
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-ogp-text {
  overflow-wrap: break-word;
}
</style>
