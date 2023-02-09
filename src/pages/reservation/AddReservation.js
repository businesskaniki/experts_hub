import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservations/reservations';
import '../technician/technician.scss';

const AddReservation = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const techId = window.location.pathname.split('/')[2];
  const user = JSON.parse(localStorage.getItem('expert-current-user'));
  const userID = user.id;
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
    toast('Reservation created successfully');
    navigate('/reservations');
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
