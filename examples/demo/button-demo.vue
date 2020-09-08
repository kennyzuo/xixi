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
    <div class="row">
      <p>Full Width</p>
      <xi-button size="small" full color="success">Small</xi-button>
      <xi-button size="Default" full color="success">Default</xi-button>
      <xi-button size="normal" full color="success">Normal</xi-button>
      <xi-button size="medium" full color="success">Medium</xi-button>
      <xi-button size="large" full color="success">Large</xi-button>
    </div>

    <div class="row">
      <p>Loading</p>
      <xi-button size="small" loading color="success">Small</xi-button>
      <xi-button size="Default" loading color="success">Default</xi-button>
      <xi-button size="normal" loading color="success">Normal</xi-button>
      <xi-button size="medium" loading color="success">Medium</xi-button>
      <xi-button size="large" loading color="success">Large</xi-button>
    </div>
    <div class="row">
      <p>Disabled</p>
      <xi-button size="small" disabled color="success">Small</xi-button>
      <xi-button size="Default" disabled color="success">Default</xi-button>
      <xi-button size="normal" disabled color="success">Normal</xi-button>
      <xi-button size="medium" disabled color="success">Medium</xi-button>
      <xi-button size="large" disabled color="success">Large</xi-button>
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
  margin-bottom: 10px;
}
</style>
