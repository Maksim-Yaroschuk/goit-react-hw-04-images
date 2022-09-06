import axios from 'axios';

const API_KEY = '28403201-b05b1c74044ac0f199d732ec5';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export const getPhoto = async (request, page, per_page) => {
  try {
    if (!request) {
      const r = await axios.get(
        `?q=&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      );
      return r;
    }
    const r = await axios.get(
      `?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );
    return r;
  } catch (error) {
    console.log(error);
  }
};
