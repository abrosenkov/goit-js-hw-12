import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  LoadMoreBtn,
} from './js/render-functions';

let page = 1;
let totalPages = 0;
let userQuery;

const form = document.querySelector('.form');
const searchBtn = document.querySelector('button[type="submit"]');

const searchInput = document.querySelector('input[name="search-text"]');

async function OnSubmit(event) {
  event.preventDefault();

  userQuery = searchInput.value.trim();

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
    showLoadMoreButton();
    searchBtn.disabled = true;
  }

  try {
    page = 1;
    console.log(page);

    const queryData = await getImagesByQuery(userQuery, page);

    totalPages = queryData.total;
    console.log(totalPages);

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
    form.reset();
    searchBtn.disabled = false;
    hideLoader();
  }
}

async function onClickLoadBtn() {
  page += 1;

  try {
    console.log(page);
    const moreImgs = await getImagesByQuery(userQuery, page);
    createGallery(moreImgs.hits);
    hideLoadMoreButton();
    showLoader();
  } catch {
  } finally {
    hideLoader();
    showLoadMoreButton();
  }
}

form.addEventListener('submit', OnSubmit);

LoadMoreBtn.addEventListener('click', onClickLoadBtn);
