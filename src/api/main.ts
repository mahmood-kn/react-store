import axios from 'axios';

const main = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default main;
