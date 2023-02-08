import React from 'react';
import { Link } from 'react-router-dom';
import Person from '../../assets/picon.png';
import './leftbar.scss';

const Leftbar = () => (
  <div className="leftbar">
    <div className="container">
      <div className="menu">
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/525486978/photo/handyman-repairing-sink-pipe.jpg?s=612x612&w=0&k=20&c=3hpKnvAE-YTe1o1J_HLEMRlpRKMsqfor8sKFAFnrrQE="
            alt="profile pic"
          />
          <span>John Doe</span>
        </div>
        <Link to="/">
          <div className="item">
            <img src={Person} alt="" />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/technicians" style={{ textDecoration: 'none' }}>
          <div className="item">
            <img src={Person} alt="" />
            <span>Technicians</span>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="item">
            <img src={Person} alt="" />
            <span>Add Reservation</span>
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
            <img src={Person} alt="" />
            <span>Add Technician</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Leftbar;
