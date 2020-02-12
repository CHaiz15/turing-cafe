import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './Reservations.css'


const Reservations = ({ reservations }) => {
  let allReservations = reservations.map(reservation => {
    return <ReservationCard id={reservation.id} name={reservation.name} date={reservation.date} time={reservation.time} number={reservation.number} />
  })
  return (
    <div className='res-container'>
      {allReservations}
    </div>
  )
}

export default Reservations