import React, { Component } from 'react'
import './Form.css'


class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    this.setState({name: '', date: '', time: '', number: ''})
    this.props.addReservation(this.state)
  }

  render() {
    return (
      <div className='res-form'>
        <input
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Make Reservation</button>
      </div>
    )
  }
}

export default Form