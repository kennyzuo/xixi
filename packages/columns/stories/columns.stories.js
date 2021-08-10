import ColumnsDemo from './columns-demo.vue';
import XiColumns from '..';

export default {
  title: 'Example/Columns',
  component: XiColumns,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColumnsDemo },
  template: '<columns-demo />',
});

export const Example = Template.bind({});

Example.args = {};