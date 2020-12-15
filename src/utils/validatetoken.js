// import React from 'react';
import store from 'store';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { message } from 'antd';

export const ValidateToken = () =>
  new Promise((resolve, reject) => {
    var token = store.get('token');

    if (token) {
      axios
        .get('https://koolbean.xyz/api/auth/decode', {
          headers: {
            Authorization: token,
          },
        })
        .then(response => {
          console.log(response);
          if (response.data.data.isValid) {
            var decoded = jwt_decode(token);
            if (Date.now() >= decoded.exp * 1000) {
              resolve([false]);
            }
            resolve([true, decoded]);
          } else {
            store.remove('token');
            message.warning('Invalid token');
            window.location.href = '/my-account/';
          }
        })
        .catch(err => {
          console.log(err);
          resolve([false]);
        });
    } else {
      resolve([false]);
    }
  });
