import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addreservation } from '../../redux/reservations/reservations';

const AddReservation = () => {
  const techId = window.location.pathname.split('/')[2];
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      location,
      date,
      techId,
    };
    dispatch(addreservation(newReservation));
    setDate('');
    setLocation('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddReservation;
