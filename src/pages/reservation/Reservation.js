import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReservations } from '../../redux/reservations/reservations';

const Reservation = ({ userId }) => {
  const dispatch = useDispatch();

  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    dispatch(getAllReservations(userId));
  }, [dispatch, userId]);

  console.log(reservations);
  return (
    <ul>
      {reservations?.map((reservation) => (
        <li key={reservation.id}>
          {reservation.name}
          {' '}
          -
          {' '}
          {reservation.location}
        </li>
      ))}
    </ul>
  );
};

export default Reservation;
