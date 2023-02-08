import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('expert-current-user'));
console.log(user);
const userId = user.id;

const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const ADD_RESERVATIONS = 'reservations/ADD_RESERVATIONS';
const BASE_URL = `http://127.0.0.1:3000/api/v1/technicians/${userId}/appointments`;
const initialState = [];

export const fetchResevations = createAsyncThunk(GET_RESERVATIONS, async () => {
  const data = await fetch(`http://127.0.0.1:3000/api/v1/technicians/${userId}/appointments`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = await data.json();
  return response;
});

export const addreservation = createAsyncThunk(
  'ADD_RESERVATIONS',
  async (reservation) => {
    const response = await axios.post(BASE_URL, reservation);
    return response.data;
  },
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
