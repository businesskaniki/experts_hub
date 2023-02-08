import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('expert-current-user'));
const userId = user.id;

const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const ADD_RESERVATIONS = 'reservations/ADD_RESERVATIONS';
const BASE_URL = `http://127.0.0.1:3000/api/v1/users/${userId}/appointments`;
const initialState = [];

export const fetchResevations = createAsyncThunk(
  'GET_RESERVATIONS',
  async () => {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  },
);

export const addreservation = createAsyncThunk(
  'ADD_RESERVATIONS',
  async (data) => {
    const response = await axios.post(BASE_URL, data);
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
