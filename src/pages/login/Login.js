import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { loginUser } from '../../api/api';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      response = await loginUser(formData);
      console.log(response);
      if (response.data.token) {
        localStorage.setItem('expert-token', response.data.token);
        localStorage.setItem('expert-current-user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('An error occurred while trying to log in.');
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to ExpertsHub!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iusto aut omnis commodi sit
            iurenon!
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
