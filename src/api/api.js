import axios from 'axios';

export const registerUser = (data) => axios.post('https://experthub-production.up.railway.app/users', {
  user: data,
});

export const loginUser = (data) => axios.post('https://experthub-production.up.railway.app/users/sign_in', {
  user: data,
});

export const logoutUser = () => axios.delete('https://experthub-production.up.railway.app/users/sign_out');
