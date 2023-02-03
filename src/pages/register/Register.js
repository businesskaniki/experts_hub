import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { registerUser } from "../../api/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      let response;
      response = await registerUser(formData);
      console.log(response.data);
      // Handle successful response
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {errorMessage && <div>{errorMessage}</div>}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input type="text" name="password" id="password" placeholder="Password" value={formData.password}
              onChange={handleChange} />
            <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" />
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
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
