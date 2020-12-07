import ValidateToken from './validatetoken';

export default function getUserID() {
  const [result, user_id] = ValidateToken();
  if (result) {
    return user_id;
  } else {
    window.location.href = '/';
  }
}
