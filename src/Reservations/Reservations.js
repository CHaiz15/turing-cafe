import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './Reservations.css'


const Reservations = ({ deleteReservation, reservations }) => {
  let allReservations = reservations.map(reservation => {
    return <ReservationCard deleteReservation={deleteReservation} id={reservation.id} name={reservation.name} date={reservation.date} time={reservation.time} number={reservation.number} />
  })
  return (
    <div className='res-container'>
      {allReservations}
    </div>
  )
}

export default Reservations