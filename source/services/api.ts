import axiosInstance from './axiosInstance';

const Api = {
  Products: {
    list: () => {
      return axiosInstance.get('/products');
    },
  },
};

export { Api };
