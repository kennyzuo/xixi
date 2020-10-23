<template>
  <div style="padding: 10px">
    <div class="box">
      <p>Basics</p>
      <xi-columns>
        <xi-column>
          <p class="bd-notification is-primary">First column</p>
        </xi-column>
        <xi-column>
          <p class="bd-notification is-primary">Second column</p>
        </xi-column>
        <xi-column>
          <p class="bd-notification is-primary">Third column</p>
        </xi-column>
        <xi-column>
          <p class="bd-notification is-primary">Fourth column</p>
        </xi-column>
      </xi-columns>
    </div>
    <div class="box">
      <p>Sizes</p>
      <xi-columns>
        <xi-column :span="1">
          <p class="bd-notification bd-notification-samll is-primary">is-1</p>
        </xi-column>
        <xi-column v-for="(item, index) in new Array(11).fill('')" :key="index">
          <p class="bd-notification bd-notification-samll is-primary">
            1
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="2">
          <p class="bd-notification bd-notification-samll is-primary">is-2</p>
        </xi-column>
        <xi-column v-for="(item, index) in new Array(10).fill('')" :key="index">
          <p class="bd-notification bd-notification-samll is-primary">
            1
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="3">
          <p class="bd-notification bd-notification-samll is-primary">is-3</p>
        </xi-column>
        <xi-column v-for="(item, index) in new Array(9).fill('')" :key="index">
          <p class="bd-notification bd-notification-samll is-primary">
            1
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="6">
          <p class="bd-notification bd-notification-samll is-primary">is-6</p>
        </xi-column>
        <xi-column v-for="(item, index) in new Array(6).fill('')" :key="index">
          <p class="bd-notification bd-notification-samll is-primary">
            1
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="8">
          <p class="bd-notification bd-notification-samll is-primary">is-8</p>
        </xi-column>
        <xi-column v-for="(item, index) in new Array(4).fill('')" :key="index">
          <p class="bd-notification bd-notification-samll is-primary">
            1
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="12">
          <p class="bd-notification bd-notification-samll is-primary">is-12</p>
        </xi-column>
      </xi-columns>
    </div>
    <div class="box">
      <p>Offset</p>
      <xi-columns>
        <xi-column :span="10" :offset="2">
          <p class="bd-notification bd-notification-samll is-primary">
            is-offset-2
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="9" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-offset-3
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns>
        <xi-column :span="8" :offset="4">
          <p class="bd-notification bd-notification-samll is-primary">
            is-offset-3
          </p>
        </xi-column>
      </xi-columns>
      <xi-columns align-items="flex-end">
        <xi-column :span="1" :offset="2">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-2
          </p>
        </xi-column>
        <xi-column :span="1" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-3
          </p>
        </xi-column>
        <xi-column :span="2" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-4
          </p>
        </xi-column>
      </xi-columns>
    </div>

    <div class="box">
      <p>Column Options</p>
      <xi-columns align-items="flex-start">
        <xi-column :span="1" :offset="2">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-2
          </p>
        </xi-column>
        <xi-column :span="1" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-3
          </p>
        </xi-column>
        <xi-column :span="2" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-4
          </p>
        </xi-column>
      </xi-columns>

      <xi-columns muiltline align-items="flex-end">
        <xi-column :span="1" :offset="2">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-2
          </p>
        </xi-column>
        <xi-column :span="1" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-3
          </p>
        </xi-column>
        <xi-column :span="2" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-4
          </p>
        </xi-column>
        <xi-column :span="1" :offset="2">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-2
          </p>
        </xi-column>
        <xi-column :span="1" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-3
          </p>
        </xi-column>
        <xi-column :span="2" :offset="3">
          <p class="bd-notification bd-notification-samll is-primary">
            is-1 is-offset-4
          </p>
        </xi-column>
      </xi-columns>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.bd-notification {
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #7a7a7a;
  font-weight: 600;
  padding: 1.25rem 0;
  position: relative;
  text-align: center;
  &.bd-notification-samll {
    padding: 0.5rem 0;
    font-size: 0.75rem;
  }
  &.is-primary {
    background-color: #00d1b2;
    color: #fff;
  }
}
</style>
