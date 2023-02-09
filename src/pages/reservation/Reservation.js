import React from 'react';
import Card from '../../components/card/Card';
import './reservation.css';

const Reservation = () => {
  const title = 'My reservations';
  return (
    <div className="cont">
      <h2>{title}</h2>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Reservation;
