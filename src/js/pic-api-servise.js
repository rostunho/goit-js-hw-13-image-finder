import { noticeError } from './notice';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24252951-ddd51d265365deb12d4398809';

export default class PicApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPicture() {
    return fetch(
      `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
