import axios from 'axios';

const myApiKey = '51523631-287343b93ff65c0abc5c9078c';
const baseUrl = 'https://pixabay.com/api/';

export const perPage = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Pixabay API Error:', error.message || error);
    throw new Error(
      '❌ Failed to fetch images. Please check your connection or try again.'
    );
  }
}
