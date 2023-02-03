import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getTechnicianDetail} from '../../redux/technicians/technician';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


const TechnicianDetails = () => {

  const dispatch = useDispatch();
  const technician = useSelector(state => state.technician)
  console.log(technician);
  const param = useParams()
  const  {id} = param;

  useEffect(()=>{
    dispatch(getTechnicianDetail(id))
  }, [dispatch, id])

  return (
    <div className="card-technician__details">
      <div className="card-technician__image">
        <img src={technician.image} alt="" />
      </div>
      <div className="card-content">
        <h2>{technician.name}</h2>
        <p>
          <span>Charges per Hours: </span>
          <span>${technician.charges}</span>
        </p>
        <p>
          <span>Specialization: </span>
          <span>{technician.specialization}</span>
        </p>
        <p className=''><RoomOutlinedIcon />{technician.location}</p>
      </div>
    </div>
  );

}

export default TechnicianDetails;