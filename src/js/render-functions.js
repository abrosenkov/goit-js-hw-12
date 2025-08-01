import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.gallery-btn');

export function createGallery(images) {
  const murkUp = images
    .map(elem => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = elem;

      return `<li class="list-item">
      <a href="${largeImageURL}" class="item-img-link">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${likes}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${views}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${comments}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${downloads}</p>
        </div>
      </div>
    </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', murkUp);

  const lightbox = new SimpleLightbox('.item-img-link', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('load-more-btn');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('load-more-btn');
}
