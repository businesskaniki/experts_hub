import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const BASE_URL = 'http://localhost:3000//api/v1/technicians'

const reducerTechnician = (state= [], action) => {
  switch(action.type){
    case 'GET_ALL_TECHNICIAN/fullfil': {
      return [...state, ...action.payload]
    }
    default: return state;
  }
}

export const getAllTechnicians = createAsyncThunk(
  'GET_ALL_TECHNICIAN',
  async()=>{
    const response = await axios.get(BASE_URL);
    const data = response.data.map((technician) =>({
      id: technician.id ? technician.id : null,
      name: technician.name ? technician.name : null,
      location: technician.location ? technician.name : null,
      charges: technician.charges ? technician.charges : null,
      specialization: technician.specialization ? technician.specialization : null,
      image: technician.image ? technician.image : null
    }));
    return data;
  }

)

export default reducerTechnician