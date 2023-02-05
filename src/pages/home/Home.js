import React, {  useState }  from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTechnicians} from '../../redux/technicians/technician';
import './home.scss';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
//Try Slide

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";



const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);


  const dispatch = useDispatch();
  const technicians = useSelector(state => state.technicians);
  useEffect(() => {
    if (!technicians.length) dispatch(getAllTechnicians());
  }, [dispatch, technicians]);

  return (
    <>
     <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={40}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {technicians.map((technician) => (
          <SwiperSlide className="card-technician" key={technician.id}>
            <div className="card-image">
              <img src={technician.image} alt={technician.name} />
            </div>
            <div className="card-body">
              <Link to={`/technician/${technician.id}`}>
                <h2>{technician.name}</h2>
              </Link>

              <div>
                <p className='location'><RoomOutlinedIcon />{technician.location}</p>
                <p>{technician.specialization}</p>
                <a href="#" className='button'>Appointment</a>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
  </>
  );
};

export default Home;

