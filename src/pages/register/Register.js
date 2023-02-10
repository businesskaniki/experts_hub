import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import { toast } from 'react-toastify';
import { registerUser } from '../../api/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await registerUser(formData);
      if (response.data.status.code === 200) {
        toast.success('Account created successfully');
        navigate('/login');
      } else if (Array.isArray(response.data.status.error)) {
        setErrorMessage(response.data.status.error.map((error) => (
          <div key={error}>
            ⚠
            {error}
          </div>
        )));
      } else {
        setErrorMessage(
          <div>
            ⚠
            {response.data.status.error}
          </div>,
        );
      }
    } catch (error) {
      setErrorMessage(
        <div>
          ⚠
          {' '}
          {error.message}
        </div>,
      );
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessage && (
              <div>
                {errorMessage.map((each, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>
                    ⚠
                    {each}
                  </div>
                ))}
              </div>
            )}
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Welcome to ExpertsHub!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iusto aut omnis commodi sit
            iurenon!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
