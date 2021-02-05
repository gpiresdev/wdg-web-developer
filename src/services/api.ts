import axios from 'axios';

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

api.interceptors.response.use((response) => response, (err) => {
  Promise.reject(err);
  window.location.href = '/notfound';
});

export default api;
