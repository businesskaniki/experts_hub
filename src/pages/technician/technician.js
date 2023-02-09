import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTechnician } from '../../redux/technicians/technician';
import './technician.scss';

const AddTechnician = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [charges, setCharges] = useState('');
  const [image, setImage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const add = useSelector((state) => state.newTechnician);
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
    if (add.status === 'success') {
      setName('');
      setLocation('');
      setCharges('');
      setImage('');
      setSpecialization('');
      toast('Technician successfully added!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: 'light',
      });
      navigate('/');
    } else {
      toast('An External Error occur when trying to create an technician');
    }
  };
  console.log(add);
  // useEffect(() => {
  //   if (add.status === 'success') {
  //     setName('');
  //     setLocation('');
  //     setCharges('');
  //     setImage('');
  //     setSpecialization('');
  //     navigate('/');
  //   } else {
  //     toast('An External Error occur when trying to create an technician');
  //   }
  // }, [add, navigate]);

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
