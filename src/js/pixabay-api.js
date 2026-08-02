import axios from 'axios';

const API_KEY = '56969422-27ce9849604fb527b4b7accd4';

export async function getImagesByQuery(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
