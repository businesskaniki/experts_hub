import "./navbar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <PersonOutlinedIcon />
          <div className="user">
              <img src="https://media.istockphoto.com/id/525486978/photo/handyman-repairing-sink-pipe.jpg?s=612x612&w=0&k=20&c=3hpKnvAE-YTe1o1J_HLEMRlpRKMsqfor8sKFAFnrrQE=" alt="profile pic" />
              <span>John Doe</span>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
