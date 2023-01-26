/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const generateUser = async (user) => {
  try {
    const response = await axios.post('/fin-the-pen-web/sign-up', user);
    return response.data;
  } catch (err) {
    alert(err);
  }
};
