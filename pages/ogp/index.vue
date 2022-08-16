<template>
  <v-layout align-center>
    <v-flex text-xs-center>
      <app-ogp-text :text="status" />
    </v-flex>
  </v-layout>
</template>

<script>
import AppOgpText from '~/components/AppOgpText'

export default {
  layout: 'ogp',
  components: {
    AppOgpText
  },
  async asyncData ({ query }) {
    const { status } = query
    return {
      status
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { status } = to.query
    this.status = status
    next()
  }
}
</script>
