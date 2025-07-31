import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

const myApiKey = '51523631-287343b93ff65c0abc5c9078c';
const baseUrl = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const perPage = 15;
  return axios
    .get(baseUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
}
