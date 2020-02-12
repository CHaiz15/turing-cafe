import React from 'react';
import ReservationCard from './ReservationCard'
import { shallow } from 'enzyme'

it('should be an instance of an ReservationCard componenet', () => {
  let wrapper = shallow(
  <ReservationCard 
    id={1}
    name='Caleb'
    date='02/12'
    time='7:00'
    number={15}
  />);
  expect(wrapper).toMatchSnapshot();
})