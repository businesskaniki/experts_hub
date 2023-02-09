import axios from 'axios';

axios.defaults.baseURL = 'https://experthub-production.up.railway.app/';

export const registerUser = (data) => axios.post('users', {
  user: data,
});

export const loginUser = (data) => axios.post('users/sign_in', {
  user: data,
});

export const logoutUser = () => axios.delete('users/sign_out');
