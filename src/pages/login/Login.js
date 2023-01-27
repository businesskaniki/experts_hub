import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
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
          {/* <Link to="/register"> */}
            <button>Register</button>
          {/* </Link> */}
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="password" id="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
