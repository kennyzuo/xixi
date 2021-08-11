/* eslint-disable no-undef */
import Xibutton from '..';

import { mount } from '@vue/test-utils';

describe('xi-button', () => {
  test('button-primary', () => {
    const wrapper = mount(Xibutton);
    expect(wrapper.html()).toContain('button')
  })
})