import ValidateToken from './validatetoken';

export default function getUserID() {
  const [result, userinfo] = ValidateToken();
  if (result) {
    return userinfo.user_id;
  } else {
    // window.location.href = '/';
  }
}
