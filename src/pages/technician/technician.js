import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addTechnician } from '../../redux/technicians/technician';
import './technician.scss';

const AddTechnician = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [charges, setCharges] = useState('');
  const [image, setImage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTechnician = {
      name,
      location,
      charges,
      image,
      specialization,
    };
    dispatch(addTechnician(newTechnician));
    setName('');
    setLocation('');
    setCharges('');
    setImage('');
    setSpecialization('');
    toast('Technician successfully added!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: 'light',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Charges"
        value={charges}
        onChange={(e) => setCharges(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />
      <button type="submit">Add Technician</button>
      <ToastContainer />
    </form>
  );
};

export default AddTechnician;
