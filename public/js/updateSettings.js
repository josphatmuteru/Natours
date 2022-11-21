import axios from 'axios';
import { showAlert } from './alerts';

//UpdateData

export const updateSettings = async (data, type) => {
  // console.log(type === password);
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated succesfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
