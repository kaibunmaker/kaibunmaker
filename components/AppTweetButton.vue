<template>
  <v-btn
    color="blue"
    dark
    @click="open">
    <v-icon left>fab fa-twitter</v-icon>
    {{ $t('TWEET') }}
  </v-btn>
</template>

<script>
const DIALOG_WIDTH = 550
const DIALOG_HEIGHT = 420

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    encodedMessage () {
      return encodeURIComponent(this.message)
    },
    url () {
      return `https://twitter.com/intent/tweet?status=${this.encodedMessage}`
    }
  },
  methods: {
    open () {
      const width = DIALOG_WIDTH
      const height = DIALOG_HEIGHT
      const top = (screen.height - height) / 2
      const left = (screen.width - width) / 2
      const options = {
        width,
        height,
        top,
        left,
        scrollbars: 'yes',
        resizable: 'yes',
        toolbar: 'no',
        location: 'yes'
      }
      const windowFeatures = Object.keys(options).map(key => `${key}=${options[key]}`).join(',')
      window.open(this.url, '_blank', windowFeatures)
    }
  }
}
</script>
