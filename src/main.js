import './css/styles.css';

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
} from './js/render-functions';

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

searchForm.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }

  page = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    if (page * 15 < totalHits) {
      showLoadMoreButton();
    }

    event.target.reset();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
async function handleLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const galleryItem = document.querySelector('.gallery-item');

    if (galleryItem) {
      const { height } = galleryItem.getBoundingClientRect();

      window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
      });
    }

    const totalLoaded = page * 15;

    if (totalLoaded < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });

    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}
