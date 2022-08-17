<template>
  <v-layout column>
    <v-flex>
      <app-title />
    </v-flex>
    <v-flex>
      <app-input
        :value="text"
        @input="updateText" />
      <app-repeat-switch v-model="repeat" />
    </v-flex>
    <v-flex>
      <app-output :value="palindrome" />
    </v-flex>
    <v-flex>
      <app-tweet-button :message="shareMessage" />
    </v-flex>
  </v-layout>
</template>

<script>
import createFormData from '../modules/createFormData'
import createPalindrome from '../modules/createPalindrome'
import createShareMessage from '../modules/createShareMessage'
import AppFooter from '../components/AppFooter'
import AppInput from '../components/AppInput'
import AppOutput from '../components/AppOutput'
import AppRepeatSwitch from '../components/AppRepeatSwitch'
import AppTitle from '../components/AppTitle'
import AppTweetButton from '../components/AppTweetButton'

const config = process.env.config
const ORIGIN = config.ORIGIN
const BASE_DIR = config.BASE_DIR
const BASE_URL = new URL(BASE_DIR, ORIGIN).toString()

export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: BASE_URL }
      ]
    }
  },
  components: {
    AppFooter,
    AppInput,
    AppOutput,
    AppRepeatSwitch,
    AppTitle,
    AppTweetButton
  },
  computed: {
    appName () {
      return this.$t('APP_NAME')
    },
    /**
     * @returns {string}
     */
    palindrome () {
      const text = this.text

      if (typeof text !== 'string' || text === '') {
        return ''
      }

      return createPalindrome(text, this.repeat)
    },
    shareTitle () {
      return this.palindrome || this.appName
    },
    /**
     * @returns {string}
     */
    shareUrl () {
      const palindrome = this.palindrome

      if (typeof palindrome !== 'string' || palindrome === '') {
        return BASE_URL
      }

      const encodedPalindrome = encodeURIComponent(palindrome)
      const url = new URL(`?status=${encodedPalindrome}`, BASE_URL)
      return url.toString()
    },
    shareMessageTemplate () {
      return this.$t('SHARE_MESSAGE_TEMPLATE')
    },
    shareMessage () {
      return createShareMessage(this.shareMessageTemplate, {
        title: this.shareTitle,
        url: this.shareUrl
      })
    }
  },
  methods: {
    updateText (text) {
      this.text = text
    }
  },
  async asyncData ({ query }) {
    return createFormData(query.status)
  },
  beforeRouteUpdate (to, from, next) {
    const { text, repeat } = createFormData(to.query.status)
    this.text = text
    this.repeat = repeat
    next()
  }
}
</script>
