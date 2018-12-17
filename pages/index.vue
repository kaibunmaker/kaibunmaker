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
import path from 'path'
import Val from '@munierujp/val'
import createFormData from '~/modules/createFormData'
import createPalindrome from '~/modules/createPalindrome'
import createShareMessage from '~/modules/createShareMessage'
import AppFooter from '~/components/AppFooter'
import AppInput from '~/components/AppInput'
import AppOutput from '~/components/AppOutput'
import AppRepeatSwitch from '~/components/AppRepeatSwitch'
import AppTitle from '~/components/AppTitle'
import AppTweetButton from '~/components/AppTweetButton'

export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: this.baseUrl }
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
    baseDir () {
      return this.$router.history.base
    },
    baseUrl () {
      return path.join(location.origin, this.baseDir)
    },
    palindrome () {
      return Val.of(this.text)
        .filter(text => text !== '')
        .map(text => createPalindrome(text, this.repeat))
        .or('')
    },
    shareTitle () {
      return this.palindrome || document.title
    },
    shareUrl () {
      return Val.of(this.palindrome)
        .filter(palindrome => palindrome !== '')
        .map(palindrome => encodeURIComponent(palindrome))
        .map(palindrome => path.join(this.baseUrl, `?status=${palindrome}`))
        .or(this.baseUrl)
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
