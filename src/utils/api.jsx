import axios from "axios";

const API_KEY = '28403201-b05b1c74044ac0f199d732ec5';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export const getPhoto = async () => {
  const response = await axios.get(`?q=&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response
};

// export const renderMoreInfo = async (id) => {
//     const response = await axios.get(`events/${id}?apikey=${API_KEY}
// `);
//     return response
// }