import { ValidateToken } from './validatetoken';

export default async function getUserID() {
  const [result, userinfo] = await ValidateToken();
  if (result) {
    return userinfo.login_id;
  } else {
    // window.location.href = '/';
  }
}
