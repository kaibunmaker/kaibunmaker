<template>
  <v-text-field
    :value="value"
    :label="$t('INPUT')"
    solo
    autofocus
    @input="updateValue"/>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
