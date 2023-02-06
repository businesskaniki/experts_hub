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
import { getAllTechnicians } from '../../redux/technicians/technician';

const Home = () => {
  const [, setSwiperRef] = useState(null);

  const dispatch = useDispatch();
  const technicians = useSelector((state) => state.technicians);
  useEffect(() => {
    if (!technicians.length === 0) dispatch(getAllTechnicians());
  }, [dispatch, technicians]);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides
        spaceBetween={40}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {technicians.map((technician, index) =>(
          <SwiperSlide className="card-technician" key={index}>
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
                <a href="#button" className="button">Appointment</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
