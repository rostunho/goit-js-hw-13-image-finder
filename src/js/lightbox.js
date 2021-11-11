import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function openLightbox(event) {
  const instance = basicLightbox.create(
    `<img class="fullsize-image" src=${event.target.dataset.source}></img>`,
  );
  instance.show();
}
