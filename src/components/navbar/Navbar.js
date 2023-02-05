import "./navbar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { logoutUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      let response;
      response = await logoutUser();
      if (response.data.status === 204) {
        localStorage.removeItem("expert-token")
        localStorage.removeItem("expert-current-user")
        navigate("/login");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log("errorssss");
    }
  };
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>ExpertsHub</span>
        </Link>
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search for technicians" />
        </div>
      </div>
      <div className="right">
        <button onClick={handleClick}>Logout</button>
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/525486978/photo/handyman-repairing-sink-pipe.jpg?s=612x612&w=0&k=20&c=3hpKnvAE-YTe1o1J_HLEMRlpRKMsqfor8sKFAFnrrQE="
            alt="profile pic"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
