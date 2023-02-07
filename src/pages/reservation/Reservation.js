import React from 'react'
import Card from '../../components/card/Card'
import './reservation.css'

const Reservation = () => {
  return (
    <div className="cont">
      <h2>My reservations</h2>
      <div className="cards">
        <Card />
      </div>
    </div>
  )
}

export default Reservation