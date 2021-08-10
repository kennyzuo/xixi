<template>
  <div class="button-wrapper" style="padding: 10px">
    <div class="box">
      <p class="title">Color</p>
      <xi-button color="info">Info</xi-button>
      <xi-button color="success">Success</xi-button>
      <xi-button color="warning">Warning</xi-button>
      <xi-button color="danger">Danger</xi-button>
      <xi-button light color="info">Info</xi-button>
      <xi-button light color="success">Success</xi-button>
      <xi-button light color="warning">Warning</xi-button>
      <xi-button light color="danger">Danger</xi-button>
    </div>
    <div class="box">
      <p class="title">Sizes</p>
      <xi-button size="small">Small</xi-button>
      <xi-button size="Default">Default</xi-button>
      <xi-button size="normal">Normal</xi-button>
      <xi-button size="medium">Medium</xi-button>
      <xi-button size="large">Large</xi-button>
    </div>
    <div class="box">
      <p class="title">Full Width</p>
      <xi-button size="small" full color="success">Small</xi-button>
      <xi-button size="Default" full color="warning">Default</xi-button>
      <xi-button size="normal" full color="danger">Normal</xi-button>
      <xi-button size="medium" full color="info">Medium</xi-button>
      <xi-button size="large" full color="success">Large</xi-button>
    </div>

    <div class="box">
      <p class="title">Loading</p>
      <xi-button size="small" loading color="success">Small</xi-button>
      <xi-button size="Default" loading color="warning">Default</xi-button>
      <xi-button size="normal" loading color="danger">Normal</xi-button>
      <xi-button size="medium" loading color="info">Medium</xi-button>
    </div>
    <div class="box">
      <p class="title">Disabled</p>
      <xi-button size="small" disabled color="success">Small</xi-button>
      <xi-button size="Default" disabled color="success">Default</xi-button>
      <xi-button size="normal" disabled color="success">Normal</xi-button>
      <xi-button size="medium" disabled color="success">Medium</xi-button>
      <xi-button size="large" disabled color="success">Large</xi-button>
    </div>
  </div>
</template>

<script>
import XiButton from '..';
export default {
  components: {
    XiButton
  }
}
</script>

<style>
@import './button-demo.scss';
</style>
