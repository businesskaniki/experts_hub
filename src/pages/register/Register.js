import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="email" id="email" placeholder="Email" />
            <input type="text" name="password" id="password" placeholder="Password" />
            <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" />
            <button>Register</button>
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
