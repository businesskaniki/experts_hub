import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Person from '../../assets/picon.png';
import home from '../../assets/home.png';
import persondp from '../../assets/person.png';
import peoplee from '../../assets/peoplee.png';
import add from '../../assets/add.png';
import twiter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import gplus from '../../assets/gplus.svg';
import { logoutUser } from '../../api/api';
import './leftbar.scss';

const Leftbar = () => {
  const user = JSON.parse(localStorage.getItem('expert-current-user'));
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await logoutUser();
      if (response.data.status === 204) {
        localStorage.removeItem('expert-token');
        localStorage.removeItem('expert-current-user');
        navigate('/login');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error.data.message);
    }
  };
  return (
    <div className="leftbar">
      <p>{errorMessage}</p>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={persondp}
              alt="profile pic"
            />
            <span>{user.name}</span>
          </div>
          <div className="links">
            <Link to="/">
              <div className="item">
                <img src={home} alt="" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/technicians" style={{ textDecoration: 'none' }}>
              <div className="item">
                <img src={peoplee} alt="" />
                <span>Technicians</span>
              </div>
            </Link>
            <Link to="/reservations" style={{ textDecoration: 'none' }}>
              <div className="item">
                <img src={Person} alt="" />
                <span>My Reservations</span>
              </div>
            </Link>
            <Link to="/technician" style={{ textDecoration: 'none' }}>
              <div className="item">
                <img src={add} alt="" />
                <span>Add Technician</span>
              </div>
            </Link>
            <button className="logout" type="button" onClick={handleClick}>Logout</button>
          </div>
          <div className="icons">
            <img src={twiter} alt="" />
            <img src={linkedin} alt="" />
            <img src={gplus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
