import store from 'store';
import jwt_decode from 'jwt-decode';

export default function ValidateToken() {
  var token = store.get('token');

  if (token) {
    try {
      var decoded = jwt_decode(token);
      if (Date.now() >= decoded.exp * 1000) {
        return [false];
      }
      return [true, decoded.user_id];
    } catch (e) {
      return [false];
    }
  } else {
    return [false];
  }
}
