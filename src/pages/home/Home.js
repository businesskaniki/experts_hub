import React, { useRef, useState }  from 'react';
import {useEffect} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTechnicians} from '../../redux/technicians/technician';
import './home.scss';
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
    dispatch(getAllTechnicians());
  }, [dispatch]);

  return (
    <>
     <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={40}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {technicians.map((technician) => (
          <SwiperSlide className="card-technician">
            <div className="card-image">
              <img src={technician.image} alt={technician.name} />
            </div>
            <div className="card-body">
              <h2>{technician.name}</h2>
              <div>
                <p>{technician.location}</p>
                <p>{technician.charges}</p>
                <p>{technician.specialization}</p>
              </div>
              <button type='button' className="btn-appointment">Appointment</button>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
  </>
  );
};

export default Home;

