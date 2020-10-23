<template>
  <div class="demo-wrapper"> 
    <p>Column 布局</p>
    <columns-demo></columns-demo>
    <p>Button 按钮</p>
    <button-demo></button-demo>
  </div>
</template>

<script>
import ButtonDemo from "./demo/button-demo"
import ColumnsDemo from "./demo/columns-demo"
// console.log(TestButton)
export default {
  components: {
    ButtonDemo,
    ColumnsDemo,
  },
}
</script>

<style lang="scss">
@import "../packages/style";
.demo-wrapper {
  & > p {
    font-size: 24px;
    padding: 12px;
    margin-top: 12px;
  }
}
</style>
