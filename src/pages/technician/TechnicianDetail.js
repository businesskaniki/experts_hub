import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ReactLoading from 'react-loading';
import { getTechnicianDetail, deleteTechnician } from '../../redux/technicians/technician';

const TechnicianDetails = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { id } = param;
  const navigate = useNavigate();
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
        {!tech.image ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '60vw',
            }}
          >
            <ReactLoading type="spokes" color="#a51c30ff" height={150} width={150} />
          </div>
        ) : (
          <img src={tech.image} alt="" />
        )}
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
        <div className="detailBtn">
          <button type="button" aria-label="Save" id={tech.id} onClick={handleDelete}>
            <DeleteForeverRoundedIcon />
          </button>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetails;
