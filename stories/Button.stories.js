import XiButton from '../packages/button';

export default {
  title: 'Example/Button',
  component: XiButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XiButton },
  template: '<xi-button v-bind="$props">xxx</xi-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  color: 'success'
};
