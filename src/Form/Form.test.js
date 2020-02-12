import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme'

it('should be an instance of an Form componenet', () => {
  const wrapper = shallow(
    <Form 
      addReservation={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should change state when handleChange is called', () => {
  const wrapper = shallow(
    <Form 
      addReservation={jest.fn()}
    />
  );
  const mockEvent = {
    preventDefault: jest.fn(),
    target: {
      name: 'name',
      value: 'Richie'
    }};
  wrapper.instance().handleChange(mockEvent)
  expect(wrapper.state('name')).toEqual('Richie')
})

it('should call addReservation when button is clicked', () => {
  const addReservationMock = jest.fn();
  const wrapper = shallow(
    <Form 
      addReservation={addReservationMock}
    />
  );
  wrapper.find('.form-btn').simulate('click')
  expect(addReservationMock).toHaveBeenCalled();
})

it('should change state when handleClick is called', () => {
  const wrapper = shallow(
    <Form 
      addReservation={jest.fn()}
    />
  );
  const defaultState = {name: 'Jeff', date: '04/23', time: '7:00', number: '16'}
  const expected = {name: '', date: '', time: '', number: ''}
  wrapper.instance().setState(defaultState);
  wrapper.instance().handleClick();
  expect(wrapper.state()).toEqual(expected);
})
