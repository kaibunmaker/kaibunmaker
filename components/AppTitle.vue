<template>
  <h1 class="app-title">
    <nuxt-link to="/">{{ $t('APP_NAME') }}</nuxt-link>
  </h1>
</template>

<style lang="scss" scoped>
$relative-max-width: 600px;
$relative-font-size: 15vw;
$absolute-font-size: 92px; //NOTE: $absolute-font-size >= (window.innerWidth == $relative-max-width のときの font-size)

.app-title {
  font-family: "Noto Serif JP", serif;
  font-size: $absolute-font-size;

  a {
    color: inherit;
    text-decoration: inherit;
  }
}

@media (max-width: $relative-max-width) {
  .app-title {
    font-size: $relative-font-size;
  }
}
</style>
