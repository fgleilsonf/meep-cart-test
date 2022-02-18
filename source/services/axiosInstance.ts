import axios from 'axios';

const BASE_URL = 'https://620ec731ec8b2ee2832be2ee.mockapi.io';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
