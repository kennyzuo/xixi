<template>
  <button :class="buttonClass">
    <slot />
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
    disabled: {
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
  },
  computed: {
    buttonClass() {
      let { color, light, size, round, disabled, loading } = this
      return [
        "button",
        {
          [`is-${color}`]: !!color,
          [`is-light`]: !!light,
          [`is-${size}`]: !!size,
          [`is-round`]: !!round,
          [`is-disabled`]: !!disabled,
          [`is-loading`]: !!loading,
        },
      ]
    },
  },
  methods: {},
}
</script>

<style lang="scss"></style>
