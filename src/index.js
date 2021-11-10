import './sass/main.scss';
import refs from './js/common-refs.js';
import PicApiServise from './js/pic-api-servise.js';
import LoadMoreBtn from './js/components/load-more-btn';
import pictureCardTmp from './templates/picture-card.hbs';
import debounce from 'lodash.debounce';

const picApiServise = new PicApiServise();
const loadMoreBtn = new LoadMoreBtn({ selector: '.load-more-button', hidden: false });

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
loadMoreBtn.refs.button.addEventListener('click', fetchImage);

function onSearch(event) {
  event.preventDefault();
  picApiServise.query = event.target.value;
  if (picApiServise.query === '') {
    return alert('Please enter your request.');
  }
  loadMoreBtn.show();
  clearPictureContainer();
  picApiServise.resetPage();
  fetchImage();
}

function fetchImage() {
  loadMoreBtn.disable();
  picApiServise.fetchPicture().then(pictures => {
    renderGalleryMarkup(pictures);
    loadMoreBtn.enable();
    loadMoreBtn.smoothScroll();
  });
}

function renderGalleryMarkup(pictures) {
  refs.picturesContainer.insertAdjacentHTML('beforeend', pictureCardTmp(pictures));
}

function clearPictureContainer() {
  refs.picturesContainer.innerHTML = '';
}
