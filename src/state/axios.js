import axios from 'axios';

const authToken = localStorage.getItem('questionerToken');

const Axios = axios.create({
  baseURL: 'https://questioner03.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.authorization = authToken;

export default Axios;