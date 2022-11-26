import { axios } from 'axios';
import { showAlert } from './alerts';
import { login } from './login';

export const signUp = async (data) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Account created successfully');
    }
    const email = data.email;
    const password = data.password;
    login(email, password);
  } catch (err) {
    showAlert('error', 'Error creating your account. Please try again later');
  }
};
