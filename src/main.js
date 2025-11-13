import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { perPage, getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreBtn,
} from './js/render-functions';

let page = 1;
let totalHits = 0;
let totalPages = 0;
let userQuery = '';

const form = document.querySelector('.form');
const searchBtn = document.querySelector('button[type="submit"]');
const searchInput = document.querySelector('input[name="search-text"]');

async function onSubmit(event) {
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

    return;
  }

  clearGallery();
  showLoader();
  hideLoadMoreButton();
  searchBtn.disabled = true;

  try {
    page = 1;

    const queryData = await getImagesByQuery(userQuery, page);

    totalHits = queryData.totalHits;
    totalPages = Math.ceil(totalHits / perPage);

    if (!queryData.hits.length) {
      iziToast.error({
        title: '',
        color: 'red',
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        messageSize: '18',
        icon: false,
        progressBar: false,
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
    searchBtn.disabled = false;
    hideLoader();

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  }
}

async function onClickLoadBtn() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const moreImgs = await getImagesByQuery(userQuery, page);
    createGallery(moreImgs.hits);
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
    hideLoader();
    scrolling();

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        title: '',
        color: 'red',
        messageSize: '18',
        icon: false,
        progressBar: false,
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
  }
}

function scrolling() {
  const scrollElem = document.querySelector('.list-item');

  if (scrollElem) {
    const itemHeight = scrollElem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  }
}

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClickLoadBtn);
