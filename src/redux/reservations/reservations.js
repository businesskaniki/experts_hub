import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const reducerReservation = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_RESERVATIONS/fulfilled': {
      return [...state, ...action.payload];
    }
    case 'GET_RESERVATION_DETAILS/fulfilled': {
      return { ...state, ...action.payload };
    }
    case 'ADD_RESERVATION/fulfilled': {
      return [...state, action.payload];
    }

    case 'DELETE_RESERVATION/fulfilled': {
      return state.filter((item) => item.id !== action.payload);
    }

    default:
      return state;
  }
};

export const reducerSingleReservation = (state = [], action) => {
  switch (action.type) {
    case 'GET_RESERVATION_DETAILS/fulfilled': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const getAllReservations = createAsyncThunk('GET_ALL_RESERVATIONS', async () => {
  const user = JSON.parse(localStorage.getItem('expert-current-user'));
  const token = localStorage.getItem('expert-token');
  const userId = user.id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `https://experthub-production.up.railway.app/api/v1/users/${userId}/appointments`,
    config,
  );
  return response.data;
});

export const getReservationDetail = createAsyncThunk(
  'GET_RESERVATION_DETAILS',
  async (userId, id) => {
    const response = await axios.get(
      `https://experthub-production.up.railway.app/api/v1/users/${userId}/appointments/${id}`,
    );
    return response.data;
  },
);

export const addReservation = createAsyncThunk('ADD_RESERVATION', async (data) => {
  const user = JSON.parse(localStorage.getItem('expert-current-user'));
  const userId = user.id;
  const response = await axios.post(
    `https://experthub-production.up.railway.app/api/v1/users/${userId}/appointments`,
    data,
  );
  return response.data;
});

export const deleteReservation = createAsyncThunk('DELETE_RESERVATION', async (userId, id) => {
  const response = await axios.delete(
    `https://experthub-production.up.railway.app/api/v1/users/${userId}/appointments/${id}`,
  );
  return response.data;
});

export default reducerReservation;
