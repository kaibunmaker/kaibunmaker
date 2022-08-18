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
// @ts-check

// @ts-ignore
import createFormData from '~/modules/createFormData'
// @ts-ignore
import createPalindrome from '~/modules/createPalindrome'
// @ts-ignore
import createShareMessage from '~/modules/createShareMessage'
// @ts-ignore
import createFormData from '~/modules/createFormData'
// @ts-ignore
import createPalindrome from '~/modules/createPalindrome'
// @ts-ignore
import createShareMessage from '~/modules/createShareMessage'
// @ts-ignore
import AppFooter from '~/components/AppFooter'
// @ts-ignore
import AppInput from '~/components/AppInput'
// @ts-ignore
import AppOutput from '~/components/AppOutput'
// @ts-ignore
import AppRepeatSwitch from '~/components/AppRepeatSwitch'
// @ts-ignore
import AppTitle from '~/components/AppTitle'
// @ts-ignore
import AppTweetButton from '~/components/AppTweetButton'

/** @type {Record<string, unknown>} */
// @ts-ignore
const config = process.env.config
/** @type {string} */
// @ts-ignore
const ORIGIN = config.ORIGIN
/** @type {string} */
// @ts-ignore
const BASE_DIR = config.BASE_DIR
const BASE_URL = new URL(BASE_DIR, ORIGIN).toString()

export default {
  // @ts-ignore
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
      // @ts-ignore
      return this.$t('APP_NAME')
    },
    /**
     * @returns {string}
     */
    palindrome () {
      // @ts-ignore
      const text = this.text

      if (typeof text !== 'string' || text === '') {
        return ''
      }

      // @ts-ignore
      return createPalindrome(text, this.repeat)
    },
    shareTitle () {
      // @ts-ignore
      return this.palindrome || this.appName
    },
    /**
     * @returns {string}
     */
    shareUrl () {
      // @ts-ignore
      const palindrome = this.palindrome

      if (typeof palindrome !== 'string' || palindrome === '') {
        return BASE_URL
      }

      const encodedPalindrome = encodeURIComponent(palindrome)
      const url = new URL(`?status=${encodedPalindrome}`, BASE_URL)
      return url.toString()
    },
    shareMessageTemplate () {
      // @ts-ignore
      return this.$t('SHARE_MESSAGE_TEMPLATE')
    },
    shareMessage () {
      // @ts-ignore
      return createShareMessage(this.shareMessageTemplate, {
        // @ts-ignore
        title: this.shareTitle,
        // @ts-ignore
        url: this.shareUrl
      })
    }
  },
  methods: {
    updateText (text) {
      // @ts-ignore
      this.text = text
    }
  },
  async asyncData ({ query }) {
    return createFormData(query.status)
  },
  beforeRouteUpdate (to, from, next) {
    const { text, repeat } = createFormData(to.query.status)
    // @ts-ignore
    this.text = text
    // @ts-ignore
    this.repeat = repeat
    next()
  }
}
</script>
