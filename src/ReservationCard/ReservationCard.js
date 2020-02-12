import React, { Component } from 'react'
import './ReservationCard.css'

class ReservationCard extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className='res-card'>
        <h3>{this.props.name}</h3>
          <p>{this.props.date}</p>
          <p>{this.props.time}</p>
          <p>Number of guests: {this.props.number}</p>
        <button className='res-btn' onClick={() => this.props.deleteReservation(this.props.id)}>Cancel</button>
      </div>
    )
  }
}

export default ReservationCard