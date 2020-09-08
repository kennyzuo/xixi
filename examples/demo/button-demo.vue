<template>
  <div>
    <div class="row">
      <p>Color</p>
      <xi-button color="info">Info</xi-button>
      <xi-button color="success">Success</xi-button>
      <xi-button color="warning">Warning</xi-button>
      <xi-button color="danger">Danger</xi-button>
      <xi-button light color="info">Info</xi-button>
      <xi-button light color="success">Success</xi-button>
      <xi-button light color="warning">Warning</xi-button>
      <xi-button light color="danger">Danger</xi-button>
    </div>
    <div class="row">
      <p>Sizes</p>
      <xi-button size="small">Small</xi-button>
      <xi-button size="Default">Default</xi-button>
      <xi-button size="normal">Normal</xi-button>
      <xi-button size="medium">Medium</xi-button>
      <xi-button size="large">Large</xi-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.row {
  padding: 10px 0;
}
.button {
  margin-left: 10px;
}
</style>
