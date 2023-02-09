import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { getTechnicianDetail, deleteTechnician } from '../../redux/technicians/technician';

const TechnicianDetails = () => {
  const dispatch = useDispatch();
  // const technician = useSelector((state) => state.technician);
  const param = useParams();
  const { id } = param;
  const navigate = useNavigate();
  // console.log(technician);
  const [tech, setTechnician] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(getTechnicianDetail(id));
      setTechnician(data.payload);
    };
    fetchData();
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteTechnician(id));
    navigate('/');
  };
  return (
    <div className="card-technician__details">
      <div className="card-technician__image">
        <img src={tech.image} alt="" />
      </div>
      <div className="card-content">
        <h2>{tech.name}</h2>
        <p>
          <span>Charges per Hours: </span>
          <span>
            $
            {tech.charges}
          </span>
        </p>
        <p>
          <span>Specialization: </span>
          <span>{tech.specialization}</span>
        </p>
        <p className="">
          <RoomOutlinedIcon />
          {tech.location}
        </p>
        <button type="button" aria-label="Save" id={tech.id} onClick={handleDelete}><DeleteForeverRoundedIcon /></button>
      </div>
    </div>
  );
};

export default TechnicianDetails;
