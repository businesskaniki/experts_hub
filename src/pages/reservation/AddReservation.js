import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservations/reservations';
import '../technician/technician.scss';

const AddReservation = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();

  const techId = window.location.pathname.split('/')[2];
  const user = JSON.parse(localStorage.getItem('expert-current-user'));
  const userID = user.id;
  console.log(userID);
  console.log('techId', techId);
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      location,
      date,
      technician_id: techId,
      user_id: userID,
    };
    // dispatch(addReservation(userID, payload));
    dispatch(addReservation(payload));
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Technician</button>
    </form>
  );
};

export default AddReservation;
