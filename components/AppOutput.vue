<template>
  <v-textarea
    :value="value"
    readonly
    outline
    auto-grow
    counter/>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
