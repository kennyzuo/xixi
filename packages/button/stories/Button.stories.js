import ButtonDemo from './button-demo';
import XiButton from '..';

export default {
  title: 'Example/Button',
  component: XiButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonDemo },
  template: '<button-demo></button-demo>',
});

export const Example = Template.bind({});

Example.args = {};