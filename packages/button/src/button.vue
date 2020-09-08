<template>
  <button :class="buttonClass">
    <span v-if="icon" class="icon is-small"><i :class="iconClass"></i></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "XiButton",
  props: {
    color: {
      type: String,
      default: "",
    },
    light: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      let { color, light, size, round, loading, full } = this
      return [
        "button",
        {
          [`is-${color}`]: !!color,
          [`is-light`]: !!light,
          [`is-${size}`]: !!size,
          [`is-rounded`]: !!round,
          [`is-loading`]: !!loading,
          [`is-fullwidth`]: !!full,
        },
      ]
    },
    iconClass() {
      let { icon } = this
      return `fas ${icon}`
    },
  },
  methods: {},
}
</script>

<style lang="scss"></style>
