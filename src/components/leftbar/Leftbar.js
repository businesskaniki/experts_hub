import React from "react";
import Person from "../../assets/picon.png";
import "./leftbar.scss";

const Leftbar = () => {
  return (
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
          <div className="item">
            <img src={Person} alt="" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src={Person} alt="" />
            <span>Reservation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
