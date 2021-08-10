<template>
  <div style="padding: 10px">
    <div class="box">
      <p class="title">Basics</p>
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
      <p class="title">Sizes</p>
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
      <p class="title">Offset</p>
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
      <p class="title">Column Options</p>
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
import XiColumns from '..';
export default {
  components: {
    XiColumns,
    "xi-column": XiColumns.Column
  }
}
</script>

<style>
@import './columns-demo.scss';
</style>
