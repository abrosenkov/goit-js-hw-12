import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchBtn = document.querySelector('button[type="submit"]');

const searchInput = document.querySelector('input[name="search-text"]');

export async function OnSubmit(event) {
  event.preventDefault();

  const userQuery = searchInput.value.trim();

  if (userQuery === '') {
    iziToast.error({
      title: '',
      color: 'red',
      message: '❌ Search field cannot be empty!',
      position: 'topRight',
      messageSize: '18',
      icon: false,
      progressBar: false,
    });

    form.reset();

    return;
  } else {
    clearGallery();
    showLoader();
    searchBtn.disabled = true;
  }

  try {
    const queryData = await getImagesByQuery(userQuery);
    if (!queryData.hits.length) {
      iziToast.error({
        title: '',
        color: 'red',
        messageSize: '18',
        icon: false,
        maxWidth: '432px',
        minHeight: '88px',
        progressBar: false,
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    createGallery(queryData.hits);
  } catch {
    iziToast.error({
      title: '',
      color: 'red',
      messageSize: '18',
      icon: false,
      progressBar: false,
      message: '❌ Sorry, network Error',
      position: 'topRight',
    });
  } finally {
    setTimeout(() => {
      form.reset();
    }, 1000);
    searchBtn.disabled = false;
    hideLoader();
  }
}

form.addEventListener('submit', OnSubmit);
