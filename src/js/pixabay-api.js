import axios from 'axios';

const myApiKey = '51523631-287343b93ff65c0abc5c9078c';
const baseUrl = 'https://pixabay.com/api/';

export const perPage = 15;

export async function getImagesByQuery(query, page = 1) {
  return axios
    .get(baseUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page,
      },
    })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
}
