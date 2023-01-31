import React from 'react';
import {useEffect} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTechnicians} from '../../redux/technicians/technician';



const Home = () => {
  const dispatch = useDispatch();
  const technicians = useSelector((state) => state.technicians);
  useEffect(() => {
    dispatch(getAllTechnicians());
  }, [dispatch]);

  return (
    <>
      <div className='home'>
        {
          technicians.length
      }
      </div>
    </>
  )
}

export default Home