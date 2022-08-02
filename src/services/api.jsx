import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const BASE_URL = 'https://pixabay.com/api';
// Наш ключ API
const API_KEY = '27859261-e9073de67394be7ab7216c452';
// Дефолтні налаштування для запиту axios
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export const perPage = 12;

// Об'єкт для запитів до API
export const getImages = async (queryValue, page) => {
  const response = axios.get(`/?q=${queryValue}&page=${page}&per_page=${perPage}`);
  return (await response).data;
};


//------------------------------------------------------
// export const getImages = (queryValue, page) => {
//   return axios.get(`/?q=${queryValue}&page=${page}&per_page=12`);
// };
// export const getImages = async (queryValue, page) => {
//   const response = await axios.get(
//     `/?q=${queryValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data;
// };

//----------------------------

// export const ImageService = {
//   page: 1,
//   per_page: 12,
//   searchQuery: '',

//   async fetchImages() {
//     // запит до API
//     const { data } = await axios.get(
//       `/?q=${this.query}&page=${this.page}&per_page=${this.per_page}`
//     );
//     this.incrementPage();

//     const { total, hits } = data;
//     return { hits, hasNextPage: this.page * this.per_page < total };
//   },

//   get query() {
//     return this.searchQuery;
//   },

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
// };
