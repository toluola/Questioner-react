import axios from 'axios';

const authToken = localStorage.getItem('questionerToken');

const Axios = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.authorization = authToken;

export default Axios;