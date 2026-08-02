import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }
  clearGallery();
  showLoader();
  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      clearGallery();
      return;
    }

    createGallery(data.hits);

    event.target.reset();
  } catch (error) {
    console.error(error);

    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
