import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should be an instance of an app componenet', () => {
  let wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
})

it('should change state when addReservation is called', () => {
  const wrapper = shallow(<App />);
  const mockNewRes = {
      name: 'Richie',
      date: '02/12',
      time: '7:00',
      number: 1
    }
  wrapper.instance().addReservation(mockNewRes)
  expect(wrapper.state('reservations')).toEqual([mockNewRes])
})
