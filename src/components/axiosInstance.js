import Axios from 'axios';
import store from 'store';
import {ValidateToken} from '../utils/validatetoken';

export const axiosInstance = Axios.create({
  baseURL: 'https://koolbean.xyz',
});
// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const [result] = ValidateToken();
    if (result) {
      // config.headers[
      //   'Authorization'
      // ] = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9uX2xldmVsIjoxLCJleHAiOjE2MDc4OTMxMzAsInVzZXJfaWQiOjEsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIn0.oeuYOp9g_ik59jge5gAP3oXc09B6DumALyLSyApVHWMtMCVkiqmFh5Z16KbO_JN3AS01BG7ASzJI5tEwZgXD5YiDOlzPApaTR51sf-bfm2SeTWmQBjiamuWoR3xqdVeIE1xci_tSmq3oFR25sNzKdt5tnhUbUDVwpKIeIlVFdVXXsSGN0PmqZn43_JUiFGCqNBwulCX5gLVltUuV879a9DYDuPG6FkovI9DOnbYdaPagp--MbR8w5Hj15AyleU7xcq3dtFHA3rU9ciN_1PyCkQSpSx9JSQ4OEe_UDcqxGL68OjYU3sa_gqh-KtQK9AKq-RTJNuT_Eysg3oPiowRHgQ`;
      config.headers['Authorization'] = store.get('token');
      return config;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// import Axios from 'axios';

// export const axiosInstance = Axios.create({
//   // baseURL: 'https://admin.alakacakehub.com/',
//   baseURL: 'https://koolbean.xyz',
// });
// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem('token') || '';
//     config.headers['Authorization'] = token;
//     // config.headers[
//     //   'Authorization'
//     // ] = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9uX2xldmVsIjoxLCJleHAiOjE2MDc4OTMxMzAsInVzZXJfaWQiOjEsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIn0.oeuYOp9g_ik59jge5gAP3oXc09B6DumALyLSyApVHWMtMCVkiqmFh5Z16KbO_JN3AS01BG7ASzJI5tEwZgXD5YiDOlzPApaTR51sf-bfm2SeTWmQBjiamuWoR3xqdVeIE1xci_tSmq3oFR25sNzKdt5tnhUbUDVwpKIeIlVFdVXXsSGN0PmqZn43_JUiFGCqNBwulCX5gLVltUuV879a9DYDuPG6FkovI9DOnbYdaPagp--MbR8w5Hj15AyleU7xcq3dtFHA3rU9ciN_1PyCkQSpSx9JSQ4OEe_UDcqxGL68OjYU3sa_gqh-KtQK9AKq-RTJNuT_Eysg3oPiowRHgQ`;
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );
