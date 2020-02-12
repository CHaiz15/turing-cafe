import React, { Component } from 'react'
import './ReservationCard.css'

class ReservationCard extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    console.log(this.props.id);
    
    return (
      <div className='res-card'>
        <h3>{this.props.name}</h3>
          <p>{this.props.date}</p>
          <p>{this.props.time}</p>
          <p>Number of guests: {this.props.number}</p>

        <button>Cancel</button>
      </div>
    )
  }
}

export default ReservationCard