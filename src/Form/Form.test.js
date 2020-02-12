import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme'

it('should be an instance of an Form componenet', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot();
});

it('should change state when handleChange is called', () => {
  const wrapper = shallow(<Form />);
  const mockEvent = {
    preventDefault: jest.fn(),
    target: {
      name: 'name',
      value: 'Richie'
    }};
  wrapper.instance().handleChange(mockEvent)
  expect(wrapper.state('name')).toEqual('Richie')
})

