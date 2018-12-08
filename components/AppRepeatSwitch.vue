<template>
  <v-checkbox
    v-model="computedValue"
    :label="$t('REPEAT_LAST_CHARACTER')"/>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
