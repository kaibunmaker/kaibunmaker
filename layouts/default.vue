<template>
  <v-app id="app">
    <v-content>
      <v-container
        grid-list-xl
        text-xs-center>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/AppFooter'

export default {
  components: {
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
  color: #212121;
  font-family: Roboto, "Noto Sans JP", sans-serif;
}
</style>
