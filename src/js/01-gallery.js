import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryElements = document.querySelector('.gallery');

// Формуємо розмітку галереї на основі масиву даних
const createGalleryMarkup = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
					<a class="gallery__item" href=${original}>
							<img class="gallery__image" src=${preview} alt=${description} />
					</a>`;
    })
    .join('');
};

galleryElements.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.5,
  captionDelay: 250,
  captionsData: 'alt',
  fadeSpeed: 250,
});
