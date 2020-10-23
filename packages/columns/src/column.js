export default {
  name: "XiColumn",
  props: {
    span: [String, Number],
    offset: [String, Number],
  },
  render(h) {
    let { span, offset } = this
    return h(
      "div",
      {
        class: [
          "column",
          {
            [`is-${span}`]: !!span,
            [`is-offset-${offset}`]: !!offset,
          },
        ],
      },
      this.$slots.default
    )
  },
}
