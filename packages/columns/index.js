// 导入组件，组件必须声明 name
import Columns from "./src/columns.js"
import Column from "./src/column.js"
// 为组件提供 install 安装方法，供按需引入
[Columns, Column].forEach((component) => {
  component.install = function(Vue) {
    Vue.component(component.name, component)
  }
})

Columns.Column = Column
// 默认导出组件
export default Columns
