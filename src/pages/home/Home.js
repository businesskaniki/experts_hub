import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './home.scss';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
// Try Slide

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactLoading from 'react-loading';
import { getAllTechnicians } from '../../redux/technicians/technician';

const Home = () => {
  const [data, setData] = useState([]);
  const [, setSwiperRef] = useState(null);
  const [done, setDone] = useState(undefined);

  const dispatch = useDispatch();
  const technicians = useSelector((state) => state.technicians);

  const getAllData = async () => {
    dispatch(getAllTechnicians());
  };

  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    setData(technicians);
    if (data) {
      setDone(true);
    }
  }, [data, technicians]);

  return (
    <>
      {!done ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
        >
          <ReactLoading
            type="spokes"
            color="#a51c30ff"
            height={150}
            width={150}
          />
        </div>
      ) : (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides
          spaceBetween={40}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((technician) => (
            <SwiperSlide className="card-technician" key={technician.id}>
              <div className="card-image">
                <img src={technician.image} alt={technician.name} />
              </div>
              <div className="card-body">
                <Link to={`/technician/${technician.id}`}>
                  <h2>{technician.name}</h2>
                </Link>

                <div>
                  <p className="location">
                    <RoomOutlinedIcon />
                    {technician.location}
                  </p>
                  <p>{technician.specialization}</p>
                  <Link to={`add_reservations/${technician.id}`}>
                    <button type="button" className="button">Appointment</button>
                </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      )}
    </>
  );
};

export default Home;
