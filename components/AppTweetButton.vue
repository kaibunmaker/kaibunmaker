<template>
  <v-btn
    :color="color"
    dark
    @click="open">
    <v-icon left>fab fa-twitter</v-icon>
    {{ $t('TWEET') }}
  </v-btn>
</template>

<script>
const DIALOG_WIDTH = 550
const DIALOG_HEIGHT = 420
const URL_BASE = 'https://twitter.com/intent/tweet'

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    color: '#1da1f2'
  }),
  computed: {
    encodedMessage () {
      return encodeURIComponent(this.message)
    },
    url () {
      return this.encodedMessage ? `${URL_BASE}?text=${this.encodedMessage}` : URL_BASE
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
