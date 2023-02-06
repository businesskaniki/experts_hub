import axios from 'axios';

export const registerUser = (data) => axios.post('http://localhost:3000/users', {
  user: data,
});

export const loginUser = (data) => axios.post('http://localhost:3000/users/sign_in', {
  user: data,
});

export const logoutUser = () => axios.delete('http://localhost:3000/users/sign_out');
