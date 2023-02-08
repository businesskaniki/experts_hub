import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("expert-current-user"))
console.log(user);
const user_id  = user.id
console.log(user_id);


const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const ADD_RESERVATIONS = 'reservations/ADD_RESERVATIONS';
const BASE_URL = `http://127.0.0.1:3000/api/v1/technicians/${user_id}/appointments`;
const initialState = [];

export const fetchResevations = createAsyncThunk(GET_RESERVATIONS, async (id) => {
  const data = await fetch(`http://127.0.0.1:3000/api/v1/technicians/${user_id}/appointments`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = await data.json();
  console.log(response);
  return response;
});

export const addreservation = createAsyncThunk(
  'ADD_RESERVATIONS',
  async()=>{
    const response = await axios.post(BASE_URL);
    return response.data
  }
);


const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_RESERVATIONS}/fulfilled`:
      return action.payload;
    case `${ADD_RESERVATIONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
