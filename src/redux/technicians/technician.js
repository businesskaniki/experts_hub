import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://experthub-production.up.railway.app/';

// Reducers
const reducerTechnician = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TECHNICIANS/fulfilled': {
      return [...state, ...action.payload];
    }

    default: return state;
  }
};

export const reducerAddTechnician = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TECHNICIAN/fulfilled': {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
};

export const reducerSingleTechnician = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TECHNICIAN_DETAILS/fulfilled': {
      return { ...state, ...action.payload };
    }
    case 'DELETE_TECHNICIAN/fulfilled': {
      return state.filter((item) => item.id !== action.payload);
    }
    default: return state;
  }
};

// Actions
export const getAllTechnicians = createAsyncThunk(
  'GET_ALL_TECHNICIANS',
  async () => {
    const response = await axios.get('api/v1/technicians');
    return response.data;
  },
);

export const getTechnicianDetail = createAsyncThunk(
  'GET_TECHNICIAN_DETAILS',
  async (id) => {
    const response = await axios.get(`api/v1/technicians/${id}`);
    return response.data;
  },
);

export const addTechnician = createAsyncThunk(
  'ADD_TECHNICIAN',
  async (technician) => {
    await axios.post('api/v1/technicians', technician);
    return getAllTechnicians();
  },
);

export const deleteTechnician = createAsyncThunk(
  'DELETE_TECHNICIAN',
  async (id) => {
    await axios.delete(`api/v1/technicians/${id}`);
    return getAllTechnicians();
  },
);

export default reducerTechnician;
