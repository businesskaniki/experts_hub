import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1/technicians';

const reducerTechnician = (state= [], action) => {
  switch(action.type){
    case 'GET_ALL_TECHNICIANS/fulfilled': {
      console.log('Action'+ action.payload);
      return  [...state,...action.payload]
    }
    default: return state;
  }
}

export const getAllTechnicians = createAsyncThunk(
  'GET_ALL_TECHNICIANS',
  async()=>{
    const response = await axios.get(BASE_URL);
    return  response.data;
  }
);

export default reducerTechnician;
