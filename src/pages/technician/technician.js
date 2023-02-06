import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTechnician } from '../../redux/technicians/technician';
import './technician.scss'
import { useNavigate } from 'react-router-dom';

const AddTechnician = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [charges, setCharges] = useState('');
  const [image, setImage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const dispatch = useDispatch();
  const add = useSelector(state => state.technicians);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTechnician = {
      name,
      location,
      charges,
      image,
      specialization
    };
    dispatch(addTechnician(newTechnician));
    console.log(add.action);
    setName('');
    setLocation('');
    setCharges('');
    setImage('');
    setSpecialization('');

  if (add.status === 'success') {
    navigate('/')
  }
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
    </form>
  );
};

export default AddTechnician;
