export default {
  name: "XiColumns",
  props: {
    gap: {
      type: [String, Number],
      default() {
        return 2
      },
    },
    alignItems: {
      type: String,
      default() {
        return "normal"
      },
    },
    muiltline: Boolean,
  },
  computed: {
    style() {
      let { alignItems, muiltline } = this
      return {
        alignItems: alignItems,
        flexWrap: muiltline ? "wrap" : "nowrap",
      }
    },
  },
  render(h) {
    let { gap, style } = this
    return h(
      "div",
      {
        class: ["columns", `is-${gap}`],
        style,
      },
      this.$slots.default
    )
  },
}
