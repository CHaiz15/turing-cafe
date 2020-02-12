import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addReservation = (newRes) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ...newRes
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
      fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(reservation => this.setState({reservations: [...this.state.reservations, reservation]}))
      .catch(error => console.log(error))
  }

  deleteReservation = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
      fetch('http://localhost:3001/api/v1/reservations/' + id, options)
      .then(response => response.json())
      .then(reservations => this.setState({reservations}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({reservations}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations deleteReservation={this.deleteReservation} reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
