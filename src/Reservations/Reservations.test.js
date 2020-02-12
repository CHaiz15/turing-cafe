import React from 'react';
import Reservations from './Reservations';
import { shallow } from 'enzyme'

it('should be an instance of a Reservations componenet', () => {
  let wrapper = shallow(
    <Reservations 
      reservations={[]}
    />);
  expect(wrapper).toMatchSnapshot();
})